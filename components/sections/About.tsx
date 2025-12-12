'use client';

import { motion } from 'framer-motion';
import SubtleStarfield from '@/components/SubtleStarfield';

export default function About() {
  return (
    <section
      id='about'
      className='section-padding relative overflow-hidden'
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <SubtleStarfield />
      <div className='container-custom relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='max-w-3xl mx-auto'
        >
          <h2
            className='font-heading text-4xl md:text-5xl font-bold mb-8 text-center text-3d'
            style={{
              background:
                'linear-gradient(135deg, var(--color-primary-400) 0%, var(--color-primary-600) 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            About Me
          </h2>

          <div className='space-y-6 text-lg text-gray-300 dark:text-gray-300 leading-relaxed'>
            <p>
              Frontend developer focused on React, Next.js, and TypeScript. I
              build production applications with attention to performance,
              accessibility, and maintainable code.
            </p>
            <p>
              Experience includes component architecture, state management, API
              integration, and responsive design. I work with design systems,
              implement testing strategies, and optimize for Core Web Vitals.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
