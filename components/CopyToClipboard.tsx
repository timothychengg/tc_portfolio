'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface CopyToClipboardProps {
  text: string;
  className?: string;
  onCopy?: () => void;
}

export default function CopyToClipboard({
  text,
  className = '',
  onCopy,
}: CopyToClipboardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      if (onCopy) onCopy();
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Silently fail - clipboard API may not be available
      // User can still manually copy the text
      if (process.env.NODE_ENV === 'development') {
        console.error('Failed to copy:', err);
      }
    }
  };

  return (
    <motion.button
      onClick={handleCopy}
      className={`flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white rounded ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={copied ? 'Copied!' : 'Copy to clipboard'}
      aria-label={copied ? 'Copied!' : `Copy ${text} to clipboard`}
    >
      {copied ? (
        <Check className='w-4 h-4 text-black' />
      ) : (
        <Copy className='w-4 h-4 text-gray-600 hover:text-black transition-colors' />
      )}
    </motion.button>
  );
}
