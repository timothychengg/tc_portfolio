'use client';

import { motion } from 'framer-motion';
import SubtleStarfield from '@/components/SubtleStarfield';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Frontend Developer',
    company: 'Tech Company',
    period: '2022 - Present',
    description: [
      'Built React components with TypeScript, reducing bundle size by 30% through code splitting',
      'Implemented Next.js SSR for 5 production apps, improving SEO scores from 60 to 95+',
      'Reduced API response times by 40% through React Query caching and request deduplication',
      'Established component library with Storybook, used across 3 teams',
    ],
  },
  {
    title: 'Junior Developer',
    company: 'Startup Inc',
    period: '2020 - 2022',
    description: [
      'Developed 8 React applications with TypeScript, maintaining 90%+ test coverage',
      'Optimized Core Web Vitals: LCP from 4.2s to 1.8s, FID from 300ms to 50ms',
      'Migrated legacy jQuery codebase to React, improving maintainability and performance',
    ],
  },
];

export default function Experience() {
  return (
    <section
      id='experience'
      className='section-padding relative overflow-hidden'
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <SubtleStarfield />
      <div className='container-custom relative z-10'>
        <motion.h2
          className='font-heading text-4xl md:text-5xl font-bold mb-12 text-center text-3d'
          style={{
            background:
              'linear-gradient(135deg, var(--color-primary-400) 0%, var(--color-primary-500) 50%, var(--color-accent-400) 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className='max-w-3xl mx-auto space-y-8'>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className='relative pl-8 border-l-2 border-primary-500'
            >
              <div
                className='absolute -left-2.5 top-0 w-5 h-5 bg-primary-500 rounded-full border-2 shadow-[0_0_10px_var(--color-primary-500)]'
                style={{ borderColor: 'var(--color-background)' }}
              ></div>

              <div className='mb-2'>
                <h3
                  className='font-heading text-xl font-semibold text-gray-200'
                  style={{
                    textShadow:
                      '0 2px 4px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  {exp.title}
                </h3>
                <p className='text-primary-400 dark:text-primary-400 font-medium'>
                  {exp.company}
                </p>
                <p className='text-sm text-gray-400 dark:text-gray-400'>
                  {exp.period}
                </p>
              </div>

              <ul className='list-disc list-inside space-y-1 text-gray-200'>
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
