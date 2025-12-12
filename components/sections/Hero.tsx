'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useCallback } from 'react';
import StarfieldBackground from '@/components/StarfieldBackground';

const gradientStyle = {
  background:
    'linear-gradient(135deg, var(--color-primary-600) 0%, var(--color-primary-400) 50%, var(--color-accent-400) 100%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
} as React.CSSProperties;

export default function Hero() {
  const scrollToNext = useCallback(() => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center section-padding relative overflow-hidden'
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <StarfieldBackground />
      <div className='container-custom text-center relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className='font-heading text-5xl md:text-7xl font-bold mb-6'
            style={gradientStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Timothy Cheng
          </motion.h1>

          <motion.p
            className='text-xl md:text-2xl text-gray-200 mb-4'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Frontend Software Engineer
          </motion.p>

          <motion.p
            className='text-lg text-gray-300 max-w-2xl mx-auto mb-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            React • Next.js • TypeScript • React Query • Supabase
          </motion.p>

          <motion.div
            className='flex flex-col sm:flex-row gap-4 justify-center items-center'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.a
              href='#projects'
              className='px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Projects
            </motion.a>
            <motion.a
              href='#contact'
              className='px-8 py-3 border-2 border-accent-500 text-accent-400 rounded-lg font-medium hover:bg-accent-500/10 transition-colors'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.button
          onClick={scrollToNext}
          className='mt-16 text-gray-300 hover:text-accent-400 transition-colors'
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          aria-label='Scroll down'
        >
          <ArrowDown className='w-8 h-8' />
        </motion.button>
      </div>
    </section>
  );
}
