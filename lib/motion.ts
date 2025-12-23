// Motion configuration with reduced motion support
import { Variants } from 'framer-motion';

// Check if user prefers reduced motion
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Safe animation variants that respect reduced motion
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: prefersReducedMotion() ? 0 : 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: prefersReducedMotion() ? 1 : 0.9 },
  visible: { opacity: 1, scale: 1 },
};

// Safe transition config
export const safeTransition = {
  duration: prefersReducedMotion() ? 0 : 0.4,
  ease: 'easeOut' as const,
};

