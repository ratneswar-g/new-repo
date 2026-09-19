/**
 * @file AppShell.tsx
 * @description Root application shell providing skip-to-content accessibility link,
 * header, dynamic route outlet or children, footer, and error boundaries.
 */

import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ErrorBoundary } from '../common/ErrorBoundary';

interface AppShellProps {
  children?: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased font-sans selection:bg-amber-100 selection:text-[#0f1f38]">
        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#0f1f38] focus:text-white focus:rounded-md focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#b8860b] text-xs font-semibold"
        >
          Skip to main academic content
        </a>

        <Header />
        <div className="flex-1 w-full">
          {children ? children : <Outlet />}
        </div>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
