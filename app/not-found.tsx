'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className='min-h-screen flex items-center justify-center section-padding bg-white'>
      <div className='max-w-md w-full text-center'>
        <h1 className='font-heading text-6xl md:text-8xl font-bold text-black mb-4'>
          404
        </h1>
        <h2 className='text-2xl md:text-3xl font-bold text-black mb-4'>
          Page Not Found
        </h2>
        <p className='text-gray-600 mb-8'>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className='flex gap-4 justify-center'>
          <Link
            href='/'
            className='flex items-center gap-2 px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2'
          >
            <Home className='w-5 h-5' />
            <span>Go Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className='flex items-center gap-2 px-6 py-3 border border-gray-300 hover:border-black text-black rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2'
          >
            <ArrowLeft className='w-5 h-5' />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
}

