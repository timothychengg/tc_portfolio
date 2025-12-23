'use client';

import { motion } from 'framer-motion';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Frontend Software Engineer',
    company: 'Alki',
    period: 'May 2025 – Present',
    description: [
      'Led front-end architecture improvements through state colocation, Context-driven data modeling, and atomic UI primitives, reducing bundle size by 18% and cutting initial load time by 200ms',
      'Designed and implemented scalable application architecture using Next.js 14 App Router with hybrid rendering (SSR/SSG/ISR), delivering 8+ dynamic routes and 12+ memoized React components while maintaining 99.9% uptime',
      'Built a high-performance media management system handling 88+ optimized images across 8 portfolio projects, enabling progressive loading, virtualized galleries, and intelligent caching to reduce Time to Interactive by 40%',
      'Implemented resilient API integrations with Resend and Google Places APIs using retry strategies, input sanitization, and XSS/CSRF protections, achieving 100% form submission reliability in production',
      'Drove performance optimization efforts via bundle analysis, code splitting, and tree-shaking, achieving Lighthouse scores of 95+ across all metrics and reducing initial bundle size by 30%',
    ],
  },
  {
    title: 'Full-Stack Software Engineer',
    company: 'Alki',
    period: 'Jan 2023 – Apr 2025',
    description: [
      'Constructed and optimized REST endpoints using Express and Mongoose, improving latency during peak traffic and ensuring consistent frontend data hydration',
      'Developed reusable UI primitives and typed service utilities, reducing duplication and accelerating feature delivery across the engineering team',
      'Refactored an untyped Express API into a modular MVC architecture with schema validation and unified error handling, reducing duplicated logic by 25%',
      'Built shared state modules using React Hooks and Context API, enabling predictable data propagation across 12+ interdependent components',
      'Defined typed API boundary contracts using TypeScript and Zod, reducing integration defects and eliminating runtime type mismatches',
    ],
  },
  {
    title: 'Full-Stack Software Engineer',
    company: 'OSLabs',
    period: 'Sept 2024 – Nov 2024',
    description: [
      'Developed a real-time Kubernetes observability interface integrating Prometheus scrapes, delivering sub-second metric feedback for CPU and memory anomaly detection',
      'Optimized polling intervals, batching logic, and typed hydration flows, reducing metric-fetch overhead by 30% while improving UI responsiveness under load',
    ],
  },
];

export default function Experience() {
  return (
    <section
      id='experience'
      className='section-padding relative overflow-hidden'
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className='container-custom relative z-10 max-w-4xl mx-auto'>
        <motion.h2
          className='font-heading text-4xl md:text-5xl font-bold mb-12 text-black'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
        >
          Experience
        </motion.h2>

        <div className='space-y-10'>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <div className='mb-3'>
                <h3 className='font-heading text-xl md:text-2xl font-semibold text-black mb-1'>
                  {exp.title}
                </h3>
                <p className='text-gray-800 font-medium mb-1'>
                  {exp.company}
                </p>
                <p className='text-sm text-gray-600'>
                  {exp.period}
                </p>
              </div>

              <ul className='list-disc list-inside space-y-2 text-gray-700 mt-4'>
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
