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
      console.error('Failed to copy:', err);
    }
  };

  return (
    <motion.button
      onClick={handleCopy}
      className={`flex items-center gap-2 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={copied ? 'Copied!' : 'Copy to clipboard'}
    >
      {copied ? (
        <>
          <Check className='w-4 h-4 text-green-400' />
          <span className='text-sm text-green-400'>Copied!</span>
        </>
      ) : (
        <>
          <Copy className='w-4 h-4' />
          <span className='text-sm'>{text}</span>
        </>
      )}
    </motion.button>
  );
}
