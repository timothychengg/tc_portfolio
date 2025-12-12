'use client';

import { createContext, useContext, ReactNode } from 'react';
import Toast, { ToastType } from './Toast';
import { useToast } from '@/hooks/useToast';

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToastContext() {
  const context = useContext(ToastContext);
  if (!context) {
    // Return a no-op function if context is not available (for SSR)
    return { showToast: () => {} };
  }
  return context;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const { toast, showToast, hideToast } = useToast();

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </ToastContext.Provider>
  );
}
