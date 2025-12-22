'use client';

import { motion } from 'framer-motion';

const gradientStyle = {
  color: '#000000',
} as React.CSSProperties;

export default function Hero() {

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center section-padding relative overflow-hidden'
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className='container-custom text-center relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.p
            className='text-2xl md:text-3xl mb-4 text-gray-700'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            Hello! I'm,
          </motion.p>

          <motion.h1
            className='font-heading text-5xl md:text-7xl font-bold mb-4'
            style={gradientStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            Timothy Cheng
          </motion.h1>

          <motion.p
            className='text-xl md:text-2xl text-gray-800 mb-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            Frontend Software Engineer
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
