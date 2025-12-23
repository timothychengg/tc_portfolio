'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { safeTransition, prefersReducedMotion } from '@/lib/motion';

const aboutGradientStyle = {
  color: '#000000',
} as React.CSSProperties;

function About() {
  const reducedMotion = prefersReducedMotion();

  return (
    <section
      id='about'
      className='section-padding relative overflow-hidden'
      style={{ backgroundColor: '#ffffff' }}
      aria-label='About section'
    >
      <div className='container-custom relative z-10'>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={safeTransition}
          className='max-w-4xl mx-auto'
        >
          <h2
            className='font-heading text-4xl md:text-5xl font-bold mb-8 text-center'
            style={aboutGradientStyle}
          >
            About Me
          </h2>

          <div className='space-y-6 text-lg text-gray-700 leading-relaxed'>
            <p>
              I'm a Frontend Software Engineer at Alki, where I lead architecture
              improvements and build high-performance web applications. With a
              strong foundation in full-stack development, I specialize in creating
              scalable solutions using React, Next.js, and TypeScript that deliver
              exceptional user experiences while maintaining optimal performance.
            </p>
            <p>
              My work focuses on modern front-end architecture—from state
              colocation and Context-driven data modeling to atomic UI primitives
              and hybrid rendering strategies. I've successfully reduced bundle
              sizes by up to 30%, cut initial load times by 200ms, and achieved
              Lighthouse scores of 95+ across all metrics. I'm passionate about
              building resilient systems that handle scale, whether it's managing
              88+ optimized images across portfolio projects or ensuring 100%
              reliability in production API integrations.
            </p>
            <p>
              Beyond front-end work, I've built robust backend systems using
              Node.js, Express, and MongoDB, refactored untyped APIs into modular
              MVC architectures, and developed real-time observability interfaces
              for Kubernetes. I believe in writing maintainable, type-safe code
              and creating developer experiences that accelerate feature delivery
              across engineering teams.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(About);
