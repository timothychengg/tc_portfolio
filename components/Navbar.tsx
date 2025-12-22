'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import ResumeDownload from './ResumeDownload';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const sectionIds = useMemo(
    () => navItems.map((item) => item.href.substring(1)),
    []
  );

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);

    const current = sectionIds.find((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
      return false;
    });
    if (current) setActiveSection(current);
  }, [sectionIds]);

  useEffect(() => {
    let ticking = false;

    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-300'
          : 'bg-transparent'
      }`}
    >
      <div className='container-custom'>
        <div className='flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8'>
          <motion.a
            href='#home'
            className='font-heading text-xl font-bold text-black focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-transparent rounded'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label='Home - Timothy Cheng Portfolio'
          >
            Timothy Cheng
          </motion.a>

          <div className='hidden md:flex items-center space-x-8'>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1 ${
                  activeSection === item.href.substring(1)
                    ? 'text-black'
                    : 'text-gray-600 hover:text-black'
                }`}
                aria-current={
                  activeSection === item.href.substring(1) ? 'page' : undefined
                }
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId='activeSection'
                    className='absolute -bottom-1 left-0 right-0 h-0.5 bg-black'
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    aria-hidden='true'
                  />
                )}
              </a>
            ))}
          </div>

          <div className='flex items-center space-x-4'>
            <ResumeDownload />
            <motion.button
              className='md:hidden p-2 text-gray-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-transparent rounded'
              whileTap={{ scale: 0.9 }}
              aria-label='Open navigation menu'
              aria-expanded='false'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
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
