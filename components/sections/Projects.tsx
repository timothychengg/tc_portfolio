'use client';

import { motion } from 'framer-motion';

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
    title: 'Project Title 1',
    description:
      'Project description placeholder. This will be replaced with the actual project description.',
    technologies: ['React', 'Next.js', 'TypeScript'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Project Title 2',
    description:
      'Project description placeholder. This will be replaced with the actual project description.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    githubUrl: '#',
    liveUrl: '#',
  },
];

export default function Projects() {
  return (
    <section
      id='projects'
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
          Projects
        </motion.h2>

        <div className='space-y-12'>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className='border-b border-gray-300 pb-12 last:border-b-0 last:pb-0'
            >
              <div className='flex items-start gap-6'>
                <span className='text-4xl md:text-5xl font-bold text-gray-400 flex-shrink-0'>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className='flex-1'>
                  <h3 className='font-heading text-2xl md:text-3xl font-bold mb-3 text-black'>
                    {project.title}
                  </h3>
                  <p className='text-gray-700 mb-4 leading-relaxed'>
                    {project.description}
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className='px-3 py-1 bg-gray-100 text-gray-800 rounded text-sm font-medium border border-gray-300'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
