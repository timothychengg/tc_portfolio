'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error in development only
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
    // In production, send to error tracking service
    // Uncomment and configure when ready:
    // if (process.env.NODE_ENV === 'production') {
    //   // Sentry.captureException(error, { contexts: { react: errorInfo } });
    //   // LogRocket.captureException(error, { extra: errorInfo });
    // }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div
          className='min-h-screen flex items-center justify-center p-4'
          style={{ backgroundColor: '#ffffff' }}
        >
          <div className='max-w-md w-full bg-white border border-gray-300 rounded-lg p-6 text-center'>
            <AlertTriangle className='w-12 h-12 text-black mx-auto mb-4' />
            <h2 className='text-xl font-bold text-black mb-2'>
              Something went wrong
            </h2>
            <p className='text-gray-600 mb-4'>
              We're sorry, but something unexpected happened. Please try
              refreshing the page.
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.reload();
              }}
              className='px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors'
            >
              Refresh Page
            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className='mt-4 text-left'>
                <summary className='text-sm text-gray-600 cursor-pointer'>
                  Error Details (Dev Only)
                </summary>
                <pre className='mt-2 text-xs text-gray-800 overflow-auto'>
                  {this.state.error.toString()}
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
