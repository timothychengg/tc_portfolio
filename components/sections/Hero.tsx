'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { safeTransition, prefersReducedMotion } from '@/lib/motion';

const gradientStyle = {
  color: '#000000',
} as React.CSSProperties;

function Hero() {
  const reducedMotion = prefersReducedMotion();

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center section-padding relative overflow-hidden'
      style={{ backgroundColor: '#ffffff' }}
      aria-label='Hero section'
    >
      <div className='container-custom text-center relative z-10'>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={safeTransition}
        >
          <motion.p
            className='text-2xl md:text-3xl mb-4 text-gray-700'
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ...safeTransition,
              delay: reducedMotion ? 0 : 0.1,
            }}
          >
            Hello! I'm,
          </motion.p>

          <motion.h1
            className='font-heading text-5xl md:text-7xl font-bold mb-4'
            style={gradientStyle}
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ...safeTransition,
              delay: reducedMotion ? 0 : 0.15,
            }}
          >
            Timothy Cheng
          </motion.h1>

          <motion.p
            className='text-xl md:text-2xl text-gray-800 mb-8'
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ...safeTransition,
              delay: reducedMotion ? 0 : 0.2,
            }}
          >
            Frontend Software Engineer
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(Hero);
