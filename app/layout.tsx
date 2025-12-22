import type { Metadata } from 'next';
import { Nunito, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ToastProvider } from '@/components/ToastProvider';
import { ColorSchemeProvider } from '@/contexts/ColorSchemeContext';
import StructuredData from '@/components/StructuredData';
import { ErrorBoundary } from '@/components/ErrorBoundary';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://timothycheng.dev'),
  title: {
    default: 'Timothy Cheng - Frontend Software Engineer',
    template: '%s | Timothy Cheng',
  },
  description:
    'Timothy Cheng - Frontend Software Engineer specializing in React, Next.js, and TypeScript. Building scalable, performant web applications with modern architecture patterns, React Query, and Supabase.',
  keywords: [
    'Frontend Developer',
    'Frontend Software Engineer',
    'React',
    'Next.js',
    'TypeScript',
    'React Query',
    'Supabase',
    'Portfolio',
    'Software Engineer',
    'Web Developer',
  ],
  authors: [{ name: 'Timothy Cheng' }],
  creator: 'Timothy Cheng',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://timothycheng.dev',
    siteName: 'Timothy Cheng Portfolio',
    title: 'Timothy Cheng - Frontend Software Engineer',
    description:
      'Frontend Software Engineer specializing in React, Next.js, and TypeScript. Building scalable, performant web applications.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Timothy Cheng Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Timothy Cheng - Frontend Software Engineer',
    description:
      'Frontend Software Engineer specializing in React, Next.js, and TypeScript. Building scalable, performant web applications.',
    creator: '@timothycheng',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='canonical' href='https://timothycheng.dev' />
        <StructuredData />
      </head>
      <body className={`${nunito.className} ${poppins.variable}`}>
        <a
          href='#main-content'
          className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:rounded-lg focus:font-medium focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white'
        >
          Skip to main content
        </a>
        <ErrorBoundary>
          <ColorSchemeProvider>
            <ToastProvider>
              <Navbar />
              {children}
              <Footer />
            </ToastProvider>
          </ColorSchemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
