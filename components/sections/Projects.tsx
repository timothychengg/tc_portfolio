'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useState, useMemo, memo } from 'react';
import SubtleStarfield from '@/components/SubtleStarfield';

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
    title: 'E-Commerce Platform',
    description:
      'Next.js application with server-side rendering, Stripe checkout, and Redis session management. Handles 10K+ daily transactions with <200ms response times.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Task Management App',
    description:
      'Real-time collaboration using WebSockets, optimistic UI updates, and conflict resolution. Supports 500+ concurrent users with sub-100ms latency.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Weather Dashboard',
    description:
      'Data visualization dashboard with Chart.js, geolocation API, and caching layer. Processes 50+ API calls per user session with 95% cache hit rate.',
    technologies: ['React', 'TypeScript', 'Chart.js', 'OpenWeather API'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
];

const allTechnologies = Array.from(
  new Set(projects.flatMap((p) => p.technologies))
);

export default function Projects() {
  const [selectedTech, setSelectedTech] = useState<string>('All');

  const filteredProjects = useMemo(() => {
    if (selectedTech === 'All') return projects;
    return projects.filter((project) =>
      project.technologies.includes(selectedTech)
    );
  }, [selectedTech]);
  return (
    <section
      id='projects'
      className='section-padding relative overflow-hidden'
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <SubtleStarfield />
      <div className='container-custom relative z-10'>
        <motion.h2
          className='font-heading text-4xl md:text-5xl font-bold mb-8 text-center text-3d'
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
          Featured Projects
        </motion.h2>

        <div className='flex flex-wrap gap-3 justify-center mb-12'>
          <motion.button
            onClick={() => setSelectedTech('All')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedTech === 'All'
                ? 'bg-primary-600 text-white border-2 border-primary-500'
                : 'bg-gray-800 text-gray-200 border-2 border-primary-500/50 hover:border-primary-500 hover:text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </motion.button>
          {allTechnologies.map((tech) => (
            <motion.button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedTech === tech
                  ? 'bg-primary-600 text-white border-2 border-primary-500'
                  : 'bg-gray-800 text-gray-200 border-2 border-primary-500/50 hover:border-primary-500 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tech}
            </motion.button>
          ))}
        </div>

        <div className='grid grid-cols-1 gap-8'>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className='bg-gray-800 border border-primary-500/40 rounded-lg overflow-hidden hover:border-primary-500 transition-all'
              whileHover={{
                y: -5,
              }}
              style={{
                boxShadow:
                  '0 10px 30px color-mix(in srgb, var(--color-primary-500) 30%, transparent)',
              }}
            >
              <div className='h-48 bg-gradient-to-br from-primary-600/80 via-primary-500/60 to-accent-500/40 flex items-center justify-center relative overflow-hidden'>
                <div
                  className='absolute inset-0'
                  style={{
                    background:
                      'radial-gradient(circle at center, color-mix(in srgb, var(--color-primary-500) 30%, transparent) 0%, transparent 70%)',
                  }}
                ></div>
                <div className='text-white text-4xl font-bold relative z-10'>
                  {project.title.charAt(0)}
                </div>
              </div>

              <div className='p-6'>
                <h3
                  className='font-heading text-xl font-semibold mb-2 text-gray-200'
                  style={{
                    textShadow:
                      '0 2px 4px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  {project.title}
                </h3>
                <p className='text-gray-300 mb-6'>{project.description}</p>

                <div className='flex gap-4'>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 text-gray-200 hover:text-accent-400 transition-colors'
                    >
                      <Github className='w-5 h-5' />
                      <span className='text-sm'>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 text-gray-200 hover:text-accent-400 transition-colors'
                    >
                      <ExternalLink className='w-5 h-5' />
                      <span className='text-sm'>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
