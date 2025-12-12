'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import CopyToClipboard from '@/components/CopyToClipboard';
import SubtleStarfield from '@/components/SubtleStarfield';

export default function Contact() {
  return (
    <section
      id='contact'
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
          className='max-w-2xl mx-auto'
        >
          <motion.h2
            className='font-heading text-4xl md:text-5xl font-bold mb-12 text-center'
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
            Get In Touch
          </motion.h2>

          <div className='bg-gray-800/50 border border-primary-500/40 rounded-lg p-8 backdrop-blur-sm'>
            <div className='space-y-6'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className='flex items-center gap-4'
              >
                <div className='p-3 bg-primary-500/20 rounded-lg'>
                  <Mail className='w-6 h-6 text-primary-400' />
                </div>
                <div className='flex-1'>
                  <p className='text-sm text-gray-400 mb-1'>Email</p>
                  <div className='flex items-center gap-2'>
                    <a
                      href='mailto:teecheng5@gmail.com'
                      className='text-gray-200 hover:text-primary-400 transition-colors'
                    >
                      teecheng5@gmail.com
                    </a>
                    <CopyToClipboard text='teecheng5@gmail.com' />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className='flex items-center gap-4'
              >
                <div className='p-3 bg-primary-500/20 rounded-lg'>
                  <Phone className='w-6 h-6 text-primary-400' />
                </div>
                <div className='flex-1'>
                  <p className='text-sm text-gray-400 mb-1'>Phone</p>
                  <div className='flex items-center gap-2'>
                    <a
                      href='tel:+14086556059'
                      className='text-gray-200 hover:text-primary-400 transition-colors'
                    >
                      (408) 655-6059
                    </a>
                    <CopyToClipboard text='408-655-6059' />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className='flex items-center gap-4'
              >
                <div className='p-3 bg-primary-500/20 rounded-lg'>
                  <Linkedin className='w-6 h-6 text-primary-400' />
                </div>
                <div className='flex-1'>
                  <p className='text-sm text-gray-400 mb-1'>LinkedIn</p>
                  <a
                    href='https://linkedin.com/in/timothyychengg'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-200 hover:text-primary-400 transition-colors'
                  >
                    linkedin.com/in/timothyychengg
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className='flex items-center gap-4'
              >
                <div className='p-3 bg-primary-500/20 rounded-lg'>
                  <Github className='w-6 h-6 text-primary-400' />
                </div>
                <div className='flex-1'>
                  <p className='text-sm text-gray-400 mb-1'>GitHub</p>
                  <a
                    href='https://github.com/timothychengg'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-200 hover:text-primary-400 transition-colors'
                  >
                    github.com/timothychengg
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className='mt-8 pt-8 border-t border-primary-500/20 text-center'
            >
              <p className='text-gray-400 mb-4'>
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about technology.
              </p>
              <motion.a
                href='mailto:teecheng5@gmail.com'
                className='inline-block px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Email
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
