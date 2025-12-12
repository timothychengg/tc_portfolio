'use client';

import { motion } from 'framer-motion';
import SubtleStarfield from '@/components/SubtleStarfield';

const aboutGradientStyle = {
  background:
    'linear-gradient(135deg, var(--color-primary-400) 0%, var(--color-primary-600) 100%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
} as React.CSSProperties;

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
            className='font-heading text-4xl md:text-5xl font-bold mb-8 text-center'
            style={aboutGradientStyle}
          >
            About Me
          </h2>

          <div className='space-y-6 text-lg text-gray-300 dark:text-gray-300 leading-relaxed'>
            <p>
              Frontend Software Engineer with expertise in React, Next.js, and
              TypeScript. I specialize in building scalable, performant
              applications with modern architecture patterns, focusing on state
              management, data layer optimization, and accessible design
              systems.
            </p>
            <p>
              My experience spans front-end architecture modernization, React
              Query data layer implementation, and design system engineering.
              I've worked with technologies including Supabase, MongoDB,
              Express, and Kubernetes, delivering solutions that improve
              performance, reduce bundle sizes, and enhance developer
              experience.
            </p>
            <p>
              Currently working at Laer Health, where I focus on platform-wide
              optimizations and building accessible, scalable UI components that
              meet WCAG 2.1 AA standards.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
