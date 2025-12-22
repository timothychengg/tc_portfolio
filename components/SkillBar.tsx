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
        <span className='text-gray-700 font-medium'>{skill}</span>
        <span className='text-black font-heading font-semibold'>
          {proficiency}%
        </span>
      </div>
      <div className='h-2 bg-gray-200 rounded-full overflow-hidden border border-gray-300'>
        <motion.div
          className='h-full bg-black rounded-full'
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
