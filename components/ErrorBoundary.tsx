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
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div
          className='min-h-screen flex items-center justify-center p-4'
          style={{ backgroundColor: 'var(--color-background)' }}
        >
          <div className='max-w-md w-full bg-gray-800 border border-red-500/50 rounded-lg p-6 text-center'>
            <AlertTriangle className='w-12 h-12 text-red-400 mx-auto mb-4' />
            <h2 className='text-xl font-bold text-gray-200 mb-2'>
              Something went wrong
            </h2>
            <p className='text-gray-400 mb-4'>
              We're sorry, but something unexpected happened. Please try
              refreshing the page.
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.reload();
              }}
              className='px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors'
            >
              Refresh Page
            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className='mt-4 text-left'>
                <summary className='text-sm text-gray-500 cursor-pointer'>
                  Error Details (Dev Only)
                </summary>
                <pre className='mt-2 text-xs text-red-400 overflow-auto'>
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
