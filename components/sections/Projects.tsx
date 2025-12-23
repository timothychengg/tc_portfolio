'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { safeTransition, prefersReducedMotion } from '@/lib/motion';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: 'F&D Staging',
    description:
      'Built a modern, performance-optimized website for a premium home staging business serving the San Francisco Bay Area. Designed and implemented a responsive portfolio showcase, dynamic service pages, and interactive performance statistics. Developed a robust form submission backend using Next.js API Routes with Resend integration, featuring input validation, retry strategies, and XSS/CSRF protections to ensure 100% form submission reliability. Features include client review sections, contact forms, and a clean, elegant UI that reflects the premium staging brand. Optimized for fast load times and seamless user experience across all devices.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Resend',
      'Zod',
      'Vercel',
    ],
    liveUrl: 'https://fanddstaging.com/',
  },
  {
    title: 'Alkira MFA Authentication System',
    description:
      'Implemented a fully typed authentication flow integrating Supabase Auth with React Router, featuring OTP-based MFA, session persistence, and protected route gating. Designed a scalable UI foundation using atomic component primitives, custom validation schemas, and Tailwind tokens to ensure predictable state transitions and extensibility.',
    technologies: [
      'React',
      'TypeScript',
      'React Router',
      'Supabase',
      'Supabase Auth',
      'Zod',
      'Tailwind CSS',
    ],
    githubUrl: '#',
    liveUrl: 'https://alkira-login-mfa.vercel.app/',
  },
];

function Projects() {
  const reducedMotion = prefersReducedMotion();

  return (
    <section
      id='projects'
      className='section-padding relative overflow-hidden'
      style={{ backgroundColor: '#ffffff' }}
      aria-label='Projects section'
    >
      <div className='container-custom relative z-10 max-w-4xl mx-auto'>
        <motion.h2
          className='font-heading text-4xl md:text-5xl font-bold mb-12 text-black'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
        >
          Projects
        </motion.h2>

        <div className='space-y-12'>
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                ...safeTransition,
                delay: reducedMotion ? 0 : index * 0.05,
              }}
              className='border-b border-gray-300 pb-12 last:border-b-0 last:pb-0'
            >
              <div className='flex items-start gap-6'>
                <span className='text-4xl md:text-5xl font-bold text-gray-400 flex-shrink-0'>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className='flex-1'>
                  <div className='flex items-center justify-between gap-4 mb-3 flex-wrap'>
                    <h3 className='font-heading text-2xl md:text-3xl font-bold text-black'>
                      {project.title}
                    </h3>
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <motion.a
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all flex-shrink-0'
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink className='w-4 h-4' />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                  <p className='text-gray-700 mb-4 leading-relaxed'>
                    {project.description}
                  </p>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className='px-3 py-1 bg-gray-100 text-gray-800 rounded text-sm font-medium border border-gray-300'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <div className='flex gap-3'>
                      <motion.a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all'
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github className='w-4 h-4' />
                        <span>GitHub</span>
                      </motion.a>
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Projects);
