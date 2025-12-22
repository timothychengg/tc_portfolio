'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id='contact'
      className='section-padding relative overflow-hidden'
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className='container-custom relative z-10 max-w-4xl mx-auto'>
        <motion.h2
          className='font-heading text-4xl md:text-5xl font-bold mb-12 text-center text-black'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
        >
          Get In Touch
        </motion.h2>

        <div className='max-w-2xl mx-auto'>
          <p className='text-lg text-gray-700 text-center mb-8 leading-relaxed'>
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology.
          </p>

          <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
            <motion.a
                      href='mailto:teecheng5@gmail.com'
              className='flex items-center gap-2 text-gray-700 hover:text-black transition-colors'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className='w-5 h-5' />
              <span>Email</span>
            </motion.a>

            <motion.a
                      href='tel:+14086556059'
              className='flex items-center gap-2 text-gray-700 hover:text-black transition-colors'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className='w-5 h-5' />
              <span>Phone</span>
            </motion.a>

            <motion.a
                    href='https://linkedin.com/in/timothyychengg'
                    target='_blank'
                    rel='noopener noreferrer'
              className='flex items-center gap-2 text-gray-700 hover:text-black transition-colors'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className='w-5 h-5' />
              <span>LinkedIn</span>
            </motion.a>

            <motion.a
                    href='https://github.com/timothychengg'
                    target='_blank'
                    rel='noopener noreferrer'
              className='flex items-center gap-2 text-gray-700 hover:text-black transition-colors'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
              <Github className='w-5 h-5' />
              <span>GitHub</span>
              </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
