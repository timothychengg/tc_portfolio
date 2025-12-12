'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useColorScheme } from '@/contexts/ColorSchemeContext';
import { colorSchemes, ColorSchemeId } from '@/lib/colorSchemes';
import { Palette } from 'lucide-react';

export default function ColorSchemeSelector() {
  const { currentScheme, setColorScheme } = useColorScheme();
  const [isOpen, setIsOpen] = useState(false);

  const schemes = Object.values(colorSchemes);

  return (
    <div className='relative'>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className='p-2 rounded-lg bg-gray-800/50 border border-primary-500/30 hover:border-primary-500 text-gray-200 hover:text-primary-400 transition-colors'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label='Select color scheme'
      >
        <Palette className='w-5 h-5' />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className='fixed inset-0 z-40'
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className='absolute right-0 top-12 z-50 w-72 bg-gray-800 border border-primary-500/40 rounded-lg shadow-xl p-4 space-y-2 max-h-[80vh] overflow-y-auto'
            >
              <h3 className='text-sm font-semibold text-gray-200 mb-3'>
                Color Schemes
              </h3>
              {schemes.map((scheme) => (
                <motion.button
                  key={scheme.id}
                  onClick={() => {
                    setColorScheme(scheme.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    currentScheme === scheme.id
                      ? 'bg-primary-600/20 border-2 border-primary-500'
                      : 'bg-gray-700/50 border-2 border-transparent hover:border-primary-500/50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className='flex items-center gap-3'>
                    <div className='text-2xl'>{scheme.emoji}</div>
                    <div className='flex-1 min-w-0'>
                      <div className='text-sm font-medium text-gray-200 truncate'>
                        {scheme.name}
                      </div>
                      <div className='text-xs text-gray-400 truncate'>
                        {scheme.description}
                      </div>
                    </div>
                    <div className='flex gap-1'>
                      <div
                        className='w-4 h-4 rounded-full border border-gray-600'
                        style={{ backgroundColor: scheme.primary[500] }}
                      />
                      <div
                        className='w-4 h-4 rounded-full border border-gray-600'
                        style={{ backgroundColor: scheme.accent[500] }}
                      />
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
