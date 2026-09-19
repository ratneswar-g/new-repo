/**
 * @file ErrorBoundary.tsx
 * @description Standard React Error Boundary for graceful error catching and recovery.
 */

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in component tree:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
          <div className="max-w-lg w-full bg-white rounded-xl shadow-lg border border-slate-200 p-8 text-center">
            <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-700">
              <AlertTriangle className="w-8 h-8" aria-hidden="true" />
            </div>
            <h1 className="text-2xl font-serif font-bold text-slate-900 mb-3">
              Application Notice
            </h1>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              An unexpected runtime state occurred while rendering this academic portal view.
              Our technical safeguards have captured the incident.
            </p>
            {this.state.error && (
              <div className="bg-slate-100 p-3 rounded text-left text-xs text-slate-700 font-mono overflow-x-auto mb-6 border border-slate-200">
                {this.state.error.message}
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-[#0f1f38] hover:bg-[#162a45] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
              >
                <RefreshCw className="w-4 h-4 mr-2" aria-hidden="true" />
                Reload Page
              </button>
              <button
                type="button"
                onClick={this.handleReset}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400"
              >
                <Home className="w-4 h-4 mr-2" aria-hidden="true" />
                Return to Campus Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
