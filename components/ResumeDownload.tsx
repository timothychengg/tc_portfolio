'use client';

import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

export default function ResumeDownload() {
  const handleViewResume = () => {
    // Track view event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'resume_view', {
        event_category: 'engagement',
        event_label: 'Resume View',
      });
    }

    // Open PDF in new tab/window - keeps user on portfolio page
    // File should be named resume.pdf in the public folder
    const resumePath = '/resume.pdf';

    // Open the PDF in new tab
    window.open(resumePath, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.button
      onClick={handleViewResume}
      className='flex items-center gap-1.5 px-3 py-1.5 bg-black hover:bg-gray-800 text-white rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all'
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      title='View Resume'
      aria-label='View resume PDF in new window'
    >
      <FileText className='w-3.5 h-3.5' aria-hidden='true' />
      <span className='hidden sm:inline'>Resume</span>
    </motion.button>
  );
}
