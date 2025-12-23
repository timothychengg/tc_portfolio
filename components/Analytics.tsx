'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { pageview, reportWebVitals } from '@/lib/analytics';

export default function Analytics() {
  const pathname = usePathname();
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    if (pathname && gaId) {
      pageview(pathname);
    }
  }, [pathname, gaId]);

  // Report Web Vitals (optional - only if web-vitals package is installed)
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'PerformanceObserver' in window &&
      gaId
    ) {
      // Try to load web-vitals, but fail silently if not installed
      import('web-vitals')
        .then((webVitals) => {
          const { onCLS, onFID, onFCP, onLCP, onTTFB } = webVitals;
          onCLS(reportWebVitals);
          onFID(reportWebVitals);
          onFCP(reportWebVitals);
          onLCP(reportWebVitals);
          onTTFB(reportWebVitals);
        })
        .catch(() => {
          // web-vitals is optional - silently fail if not installed
        });
    }
  }, [gaId]);

  // Only load analytics in production with valid GA ID
  if (!gaId || process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id='google-analytics'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

