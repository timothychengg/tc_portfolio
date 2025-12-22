'use client';

import { motion } from 'framer-motion';

export default function SectionLoader() {
  return (
    <div
      className='min-h-screen flex items-center justify-center section-padding'
      style={{ backgroundColor: '#ffffff' }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='flex flex-col items-center gap-4'
      >
        <div className='w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin'></div>
        <p className='text-gray-600 text-sm'>Loading...</p>
      </motion.div>
    </div>
  );
}
