import dynamic from 'next/dynamic';
import Hero from '@/components/sections/Hero';

// Lazy load below-the-fold sections
const About = dynamic(() => import('@/components/sections/About'), {
  loading: () => <div className='min-h-screen' />,
});
const Projects = dynamic(() => import('@/components/sections/Projects'), {
  loading: () => <div className='min-h-screen' />,
});
const Experience = dynamic(() => import('@/components/sections/Experience'), {
  loading: () => <div className='min-h-screen' />,
});
const Contact = dynamic(() => import('@/components/sections/Contact'), {
  loading: () => <div className='min-h-screen' />,
});

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
