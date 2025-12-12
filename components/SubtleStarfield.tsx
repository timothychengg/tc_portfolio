'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  brightness: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

export default function SubtleStarfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationFrameRef = useRef<number>();
  const isVisibleRef = useRef(true);

  useEffect(() => {
    if (!canvasRef.current) return;

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
    window.addEventListener('resize', resizeCanvas, { passive: true });

    // Initialize stars - responsive count based on screen size
    const getStarCount = () => {
      if (typeof window === 'undefined') return 80;
      const width = window.innerWidth;
      if (width < 640) return 40; // Mobile: fewer stars
      if (width < 1024) return 60; // Tablet: medium stars
      return 80; // Desktop: full stars
    };
    const numStars = getStarCount();
    starsRef.current = Array.from({ length: numStars }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.3,
      brightness: Math.random() * 0.3 + 0.2,
      twinkleSpeed: Math.random() * 0.01 + 0.005,
      twinkleOffset: Math.random() * Math.PI * 2,
    }));

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

      // Draw stars
      starsRef.current.forEach((star) => {
        // Calculate twinkling
        const twinkle =
          Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.2 + 0.8;
        const currentBrightness = star.brightness * twinkle;

        // Draw star
        const alpha = Math.min(currentBrightness, 0.4);
        ctx.fillStyle = `rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className='fixed inset-0 w-full h-full pointer-events-none z-0'
      style={{ background: 'transparent' }}
    />
  );
}
