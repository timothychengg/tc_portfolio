'use client';

import { useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  brightness: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

interface TrailPoint {
  x: number;
  y: number;
  opacity: number;
  timestamp: number;
}

export default function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const trailRef = useRef<TrailPoint[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();
  const isVisibleRef = useRef(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Intersection Observer to pause animation when off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;
        });
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Initialize stars - responsive count based on screen size
    const getStarCount = () => {
      if (typeof window === 'undefined') return 200;
      const width = window.innerWidth;
      if (width < 640) return 100; // Mobile: fewer stars
      if (width < 1024) return 150; // Tablet: medium stars
      return 200; // Desktop: full stars
    };
    const numStars = getStarCount();
    starsRef.current = Array.from({ length: numStars }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 1000, // Depth
      size: Math.random() * 2 + 0.5,
      brightness: Math.random() * 0.5 + 0.5,
      twinkleSpeed: Math.random() * 0.02 + 0.01,
      twinkleOffset: Math.random() * Math.PI * 2,
    }));

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // Add trail point
      const now = Date.now();
      trailRef.current.push({
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        timestamp: now,
      });

      // Keep only recent trail points (last 20)
      trailRef.current = trailRef.current.filter(
        (point) => now - point.timestamp < 500
      );
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Helper to get primary color RGB from CSS variable
    const getPrimaryColorRGB = () => {
      const primaryColor =
        getComputedStyle(document.documentElement)
          .getPropertyValue('--color-primary-500')
          .trim() || '#6366f1'; // Fallback to indigo
      // Convert hex to RGB
      const hex = primaryColor.replace('#', '');
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      return { r, g, b };
    };

    const primaryRGB = getPrimaryColorRGB();

    // Animation loop
    const animate = () => {
      // Pause animation when not visible
      if (!isVisibleRef.current) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const time = Date.now() * 0.001;
      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      // Draw stars
      starsRef.current.forEach((star) => {
        // Calculate twinkling
        const twinkle =
          Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.3 + 0.7;
        const currentBrightness = star.brightness * twinkle;

        // Calculate distance from mouse
        const dx = star.x - mouseX;
        const dy = star.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        // Stars react to cursor proximity
        let proximityBrightness = 1;
        if (distance < maxDistance) {
          proximityBrightness = 1 + (1 - distance / maxDistance) * 1.5;
        }

        // Draw star
        const alpha = Math.min(currentBrightness * proximityBrightness, 1);
        ctx.fillStyle = `rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(
          star.x,
          star.y,
          star.size * proximityBrightness,
          0,
          Math.PI * 2
        );
        ctx.fill();

        // Add glow effect for nearby stars
        if (distance < maxDistance) {
          const glowSize = star.size * proximityBrightness * 3;
          const glowAlpha = (1 - distance / maxDistance) * 0.3;
          const gradient = ctx.createRadialGradient(
            star.x,
            star.y,
            0,
            star.x,
            star.y,
            glowSize
          );
          gradient.addColorStop(
            0,
            `rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, ${glowAlpha})`
          );
          gradient.addColorStop(
            1,
            `rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0)`
          );
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(star.x, star.y, glowSize, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw cursor trail
      const now = Date.now();
      trailRef.current.forEach((point, index) => {
        const age = now - point.timestamp;
        const opacity = Math.max(0, 1 - age / 500);

        if (opacity > 0) {
          // Draw trail point with gradient
          const gradient = ctx.createRadialGradient(
            point.x,
            point.y,
            0,
            point.x,
            point.y,
            20
          );
          gradient.addColorStop(
            0,
            `rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, ${
              opacity * 0.8
            })`
          );
          gradient.addColorStop(
            0.5,
            `rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, ${
              opacity * 0.4
            })`
          );
          gradient.addColorStop(
            1,
            `rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0)`
          );

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(point.x, point.y, 20, 0, Math.PI * 2);
          ctx.fill();

          // Connect trail points with lines
          if (index > 0) {
            const prevPoint = trailRef.current[index - 1];
            const lineOpacity = opacity * 0.3;
            ctx.strokeStyle = `rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, ${lineOpacity})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(prevPoint.x, prevPoint.y);
            ctx.lineTo(point.x, point.y);
            ctx.stroke();
          }
        }
      });

      // Connect nearby stars when cursor is close (optimized)
      const connectionDistance = 200;
      const maxConnections = 20; // Limit connections for performance
      let connectionCount = 0;

      // Pre-filter stars near mouse to reduce iterations
      const nearbyStars = starsRef.current
        .map((star, i) => {
          const dx = star.x - mouseX;
          const dy = star.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          return { star, dist, index: i };
        })
        .filter((item) => item.dist < connectionDistance)
        .sort((a, b) => a.dist - b.dist)
        .slice(0, 15); // Limit to closest 15 stars

      // Only check connections between nearby stars
      for (
        let i = 0;
        i < nearbyStars.length && connectionCount < maxConnections;
        i++
      ) {
        const star1 = nearbyStars[i].star;
        for (
          let j = i + 1;
          j < nearbyStars.length && connectionCount < maxConnections;
          j++
        ) {
          const star2 = nearbyStars[j].star;
          const starDx = star2.x - star1.x;
          const starDy = star2.y - star1.y;
          const starDistSq = starDx * starDx + starDy * starDy;

          // Use squared distance to avoid sqrt
          if (starDistSq < 22500) {
            // 150^2
            const starDist = Math.sqrt(starDistSq);
            const opacity = (1 - starDist / 150) * 0.2;
            ctx.strokeStyle = `rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(star1.x, star1.y);
            ctx.lineTo(star2.x, star2.y);
            ctx.stroke();
            connectionCount++;
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isClient]);

  return (
    <canvas
      ref={canvasRef}
      className='fixed inset-0 w-full h-full pointer-events-none z-0'
      style={{ background: 'transparent' }}
    />
  );
}
