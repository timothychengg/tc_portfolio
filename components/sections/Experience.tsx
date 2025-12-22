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
    company: 'Laer Health',
    period: 'May 2025 – Present',
    description: [
      'Spearheaded front-end architecture modernization (state colocation, Context-driven data modeling, atomic UI primitives); reduced bundle size by 18% and initial load time by 200ms',
      'Established a platform-wide React Query data layer (normalized query keys, background refetching, deterministic caching); decreased redundant network traffic by 50% and improved data consistency',
      'Optimized Supabase SQL statements and MongoDB aggregation paths; reduced read latency by 20%, ensuring stable data hydration under 1k+ concurrent active sessions',
      'Engineered an accessible, scalable design system (Tailwind, shadcn/ui, Radix primitives); increased UI cohesion, reduced CSS drift, and met WCAG 2.1 AA requirements',
    ],
  },
  {
    title: 'Frontend Software Engineer',
    company: 'Alki',
    period: 'Dec 2024 – Apr 2025',
    description: [
      'Architected internal observability dashboards (React + Next.js App Router and SSR data pipelines); enabled real-time visibility across distributed services and improved latency analysis',
      'Refactored an untyped Express API into a modular MVC architecture (service boundaries, schema validation, unified error handling); reduced duplicated logic by 25%',
      'Developed domain-oriented shared state modules (React Hooks and Context API); ensured predictable data propagation across 12+ interdependent components',
      'Defined typed API boundary contracts (TypeScript and Zod); eliminated type mismatches and reduced integration defects by 15%',
    ],
  },
  {
    title: 'Full-Stack Software Engineer',
    company: 'OSLabs',
    period: 'Sept 2024 – Nov 2024',
    description: [
      'Developed a real-time Kubernetes observability interface (integrating Prometheus scrapes); delivered sub-second metric feedback and improved detection of CPU/memory anomalies',
      'Implemented modular Express controllers and typed service abstractions; reduced backend repetition by 25% and improved maintainability',
      'Optimized polling intervals, batching logic, and typed hydration flows; reduced metric-fetch overhead by 30% while increasing UI responsiveness under load',
    ],
  },
  {
    title: 'Full-Stack Software Engineer',
    company: 'Alki',
    period: 'Jan 2023 – Aug 2024',
    description: [
      'Initiated development of internal operational dashboards (React + Node.js); enhanced service visibility and reduced time-to-diagnosis for engineering teams',
      'Constructed and optimized REST endpoints (Express + Mongoose); improved latency during peak traffic and ensured reliable data hydration for frontend consumers',
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
