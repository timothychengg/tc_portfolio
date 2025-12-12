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

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize stars (fewer and more subtle)
    const numStars = 80;
    starsRef.current = Array.from({ length: numStars }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.3,
      brightness: Math.random() * 0.3 + 0.2,
      twinkleSpeed: Math.random() * 0.01 + 0.005,
      twinkleOffset: Math.random() * Math.PI * 2,
    }));

    // Animation loop
    const animate = () => {
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
        ctx.fillStyle = `rgba(59, 130, 246, ${alpha})`; // primary-500 blue
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
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
