'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ResumeDownload from './ResumeDownload';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);

          // Update active section based on scroll position
          const sections = navItems.map((item) => item.href.substring(1));
          const current = sections.find((section) => {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              return rect.top <= 100 && rect.bottom >= 100;
            }
            return false;
          });
          if (current) setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--color-background)]/95 backdrop-blur-md shadow-lg border-b border-primary-500/60'
          : 'bg-transparent'
      }`}
    >
      <div className='container-custom'>
        <div className='flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8'>
          <motion.a
            href='#home'
            className='font-heading text-xl font-bold text-primary-600 dark:text-primary-400'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            TC
          </motion.a>

          <div className='hidden md:flex items-center space-x-8'>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-colors ${
                  activeSection === item.href.substring(1)
                    ? 'text-primary-400'
                    : 'text-gray-200 hover:text-accent-400'
                }`}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId='activeSection'
                    className='absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400'
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          <div className='flex items-center space-x-4'>
            <ResumeDownload />
            <motion.button
              className='md:hidden p-2 text-gray-300'
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
