'use client';

export default function LoadingSkeleton() {
  return (
    <div className='animate-pulse space-y-4'>
      <div className='h-8 bg-gray-800 rounded w-3/4'></div>
      <div className='h-4 bg-gray-800 rounded w-full'></div>
      <div className='h-4 bg-gray-800 rounded w-5/6'></div>
    </div>
  );
}
