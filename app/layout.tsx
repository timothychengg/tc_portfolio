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
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  preload: true,
});
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: 'Timothy Cheng - Portfolio',
    template: '%s | Timothy Cheng',
  },
  description: 'Frontend Developer Portfolio - React, Next.js, TypeScript',
  keywords: [
    'Frontend Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Portfolio',
  ],
  authors: [{ name: 'Timothy Cheng' }],
  creator: 'Timothy Cheng',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://timothycheng.dev',
    siteName: 'Timothy Cheng Portfolio',
    title: 'Timothy Cheng - Frontend Developer',
    description: 'Frontend Developer Portfolio - React, Next.js, TypeScript',
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
    title: 'Timothy Cheng - Frontend Developer',
    description: 'Frontend Developer Portfolio - React, Next.js, TypeScript',
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
        <link rel='canonical' href='https://timothycheng.dev' />
        <StructuredData />
      </head>
      <body className={`${nunito.className} ${poppins.variable}`}>
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
