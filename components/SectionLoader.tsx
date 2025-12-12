'use client';

import { motion } from 'framer-motion';

export default function SectionLoader() {
  return (
    <div
      className='min-h-screen flex items-center justify-center section-padding'
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='flex flex-col items-center gap-4'
      >
        <div className='w-12 h-12 border-4 border-primary-500/30 border-t-primary-500 rounded-full animate-spin'></div>
        <p className='text-gray-400 text-sm'>Loading...</p>
      </motion.div>
    </div>
  );
}
