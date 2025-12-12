'use client';

import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

export default function ResumeDownload() {
  const handleDownload = async () => {
    // Track download event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'resume_download', {
        event_category: 'engagement',
        event_label: 'Resume Download',
      });
    }

    try {
      // Check if resume exists
      const response = await fetch('/resume.pdf', { method: 'HEAD' });

      if (response.ok) {
        // Create a link element and trigger download
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Timothy_Cheng_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        // Fallback: open email or show message
        window.location.href =
          'mailto:teecheng5@gmail.com?subject=Resume Request';
      }
    } catch (error) {
      // Fallback: open email
      window.location.href =
        'mailto:teecheng5@gmail.com?subject=Resume Request';
    }
  };

  return (
    <motion.button
      onClick={handleDownload}
      className='flex items-center gap-1.5 px-3 py-1.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-xs font-medium transition-all'
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      title='Download Resume'
    >
      <Download className='w-3.5 h-3.5' />
      <span className='hidden sm:inline'>Resume</span>
    </motion.button>
  );
}
