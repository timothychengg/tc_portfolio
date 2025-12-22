import dynamic from 'next/dynamic';
import Hero from '@/components/sections/Hero';
import SectionLoader from '@/components/SectionLoader';

// Lazy load below-the-fold sections with improved loading states
const About = dynamic(() => import('@/components/sections/About'), {
  loading: () => <SectionLoader />,
});
const Projects = dynamic(() => import('@/components/sections/Projects'), {
  loading: () => <SectionLoader />,
});
const Experience = dynamic(() => import('@/components/sections/Experience'), {
  loading: () => <SectionLoader />,
});
const Education = dynamic(() => import('@/components/sections/Education'), {
  loading: () => <SectionLoader />,
});
const Contact = dynamic(() => import('@/components/sections/Contact'), {
  loading: () => <SectionLoader />,
});

export default function Home() {
  return (
    <main id='main-content'>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
