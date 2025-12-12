'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SkillBarProps {
  skill: string;
  proficiency: number; // 0-100
  index: number;
}

export default function SkillBar({ skill, proficiency, index }: SkillBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className='mb-6'>
      <div className='flex justify-between items-center mb-2'>
        <span className='text-gray-300 font-medium'>{skill}</span>
        <span className='text-primary-400 font-heading font-semibold'>
          {proficiency}%
        </span>
      </div>
      <div className='h-2 bg-gray-800 rounded-full overflow-hidden border border-primary-500/20'>
        <motion.div
          className='h-full bg-gradient-to-r from-primary-600 to-primary-400 rounded-full'
          initial={{ width: 0 }}
          animate={isInView ? { width: `${proficiency}%` } : { width: 0 }}
          transition={{
            delay: index * 0.1,
            duration: 1,
            ease: 'easeOut',
          }}
        />
      </div>
    </div>
  );
}
