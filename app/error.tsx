'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error:', error);
    }
    // In production, you could send to error tracking service
    // Example: Sentry.captureException(error);
  }, [error]);

  return (
    <div className='min-h-screen flex items-center justify-center section-padding bg-white'>
      <div className='max-w-md w-full text-center'>
        <AlertTriangle className='w-16 h-16 text-black mx-auto mb-4' />
        <h1 className='font-heading text-3xl md:text-4xl font-bold text-black mb-4'>
          Something went wrong
        </h1>
        <p className='text-gray-600 mb-8'>
          We're sorry, but something unexpected happened. Please try again.
        </p>
        <div className='flex gap-4 justify-center'>
          <button
            onClick={reset}
            className='flex items-center gap-2 px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2'
          >
            <RefreshCw className='w-5 h-5' />
            <span>Try Again</span>
          </button>
          <a
            href='/'
            className='flex items-center gap-2 px-6 py-3 border border-gray-300 hover:border-black text-black rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2'
          >
            Go Home
          </a>
        </div>
        {process.env.NODE_ENV === 'development' && error.message && (
          <details className='mt-8 text-left bg-gray-50 p-4 rounded-lg'>
            <summary className='text-sm text-gray-600 cursor-pointer font-medium mb-2'>
              Error Details (Dev Only)
            </summary>
            <pre className='text-xs text-gray-800 overflow-auto'>
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}

