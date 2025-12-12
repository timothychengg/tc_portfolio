'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Metric {
  value: string;
  label: string;
  icon: string;
}

const metrics: Metric[] = [
  { value: '8', label: 'Production Apps', icon: '🚀' },
  { value: '95+', label: 'Lighthouse Score', icon: '💻' },
  { value: '12', label: 'Tech Stack', icon: '⚡' },
  { value: '3+', label: 'Years Experience', icon: '⭐' },
];

export default function Metrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className='section-padding relative overflow-hidden'
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div className='container-custom relative z-10'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8'>
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className='text-center p-6 bg-gray-800/50 border border-primary-500/20 rounded-lg backdrop-blur-sm hover:border-primary-500/40 transition-all'
            >
              <div className='text-4xl mb-3'>{metric.icon}</div>
              <motion.div
                className='font-heading text-3xl md:text-4xl font-bold text-primary-400 mb-2'
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{
                  delay: index * 0.1 + 0.3,
                  type: 'spring',
                  stiffness: 200,
                }}
              >
                {metric.value}
              </motion.div>
              <p className='text-gray-300 text-sm md:text-base'>
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
