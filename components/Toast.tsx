'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';
import { useEffect } from 'react';

export type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
  message: string;
  type: ToastType;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export default function Toast({
  message,
  type,
  isVisible,
  onClose,
  duration = 3000,
}: ToastProps) {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const icons = {
    success: <CheckCircle className='w-5 h-5' />,
    error: <XCircle className='w-5 h-5' />,
    info: <Info className='w-5 h-5' />,
  };

  const colors = {
    success: 'bg-green-500/20 border-green-500/50 text-green-400',
    error: 'bg-red-500/20 border-red-500/50 text-red-400',
    info: 'bg-blue-500/20 border-blue-500/50 text-blue-400',
  };

  return (
    <>
      <div
        role='status'
        aria-live='polite'
        aria-atomic='true'
        className='sr-only'
      >
        {isVisible && message}
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -50, x: '-50%' }}
            className={`fixed top-4 left-1/2 z-[9999] flex items-center gap-3 px-4 py-3 rounded-lg border backdrop-blur-sm ${colors[type]} shadow-lg`}
            role='alert'
          >
            <span aria-hidden='true'>{icons[type]}</span>
            <span className='text-sm font-medium'>{message}</span>
            <button
              onClick={onClose}
              className='ml-2 hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-white/50 rounded transition-opacity'
              aria-label='Close notification'
            >
              <X className='w-4 h-4' aria-hidden='true' />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
