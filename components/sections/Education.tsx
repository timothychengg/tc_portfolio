'use client';

import { motion } from 'framer-motion';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details?: string[];
}

const education: EducationItem[] = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University Name',
    period: '2018 - 2022',
    details: [
      'Graduated with honors',
      "Dean's List multiple semesters",
      'Relevant coursework: Data Structures, Algorithms, Software Engineering',
    ],
  },
];

export default function Education() {
  return (
    <section
      id='education'
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
          Education
        </motion.h2>

        <div className='space-y-10'>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <div className='mb-3'>
                <h3 className='font-heading text-xl md:text-2xl font-semibold text-black mb-1'>
                  {edu.degree}
                </h3>
                <p className='text-gray-800 font-medium mb-1'>
                  {edu.institution}
                </p>
                <p className='text-sm text-gray-600'>
                  {edu.period}
                </p>
              </div>

              {edu.details && (
                <ul className='list-disc list-inside space-y-2 text-gray-700 mt-4'>
                  {edu.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

