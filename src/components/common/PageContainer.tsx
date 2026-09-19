/**
 * @file PageContainer.tsx
 * @description Standardized page container establishing responsive horizontal gutters,
 * max-width constraints, breadcrumb hierarchy, and vertical rhythm.
 */

import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Breadcrumb } from './Breadcrumb';
import { BreadcrumbItem } from '../../types/navigation';
import { SEOHead } from './SEOHead';
import { SPACING_TOKENS, LAYOUT_TOKENS } from '../../styles/tokens';
import { getBreadcrumbsForPath } from '../../data/navigation';

interface PageContainerProps {
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  canonicalPath?: string;
  maxWidth?: 'content' | 'standard' | 'reading';
  children: ReactNode;
}

export function PageContainer({
  title,
  description,
  breadcrumbs,
  canonicalPath,
  maxWidth = 'content',
  children,
}: PageContainerProps) {
  const location = useLocation();

  // Resolve breadcrumbs: use explicit prop if provided, else resolve from centralized route hierarchy
  const effectiveBreadcrumbs =
    breadcrumbs !== undefined
      ? breadcrumbs
      : getBreadcrumbsForPath(canonicalPath || location.pathname);

  const maxWidthClass =
    maxWidth === 'reading'
      ? LAYOUT_TOKENS.maxWidth.reading
      : maxWidth === 'standard'
      ? LAYOUT_TOKENS.maxWidth.standard
      : LAYOUT_TOKENS.maxWidth.content;

  return (
    <div className="w-full bg-[#f8f9fa] min-h-[calc(100vh-220px)] py-5 sm:py-8 lg:py-10">
      <SEOHead title={title} description={description} canonicalPath={canonicalPath} />

      <main id="main-content" tabIndex={-1} className={`w-full ${maxWidthClass} ${SPACING_TOKENS.containerPadding}`}>
        {/* Breadcrumbs */}
        {effectiveBreadcrumbs.length > 0 && (
          <div className="mb-4 sm:mb-6">
            <Breadcrumb items={effectiveBreadcrumbs} />
          </div>
        )}

        {/* Primary Page Content */}
        <div className="space-y-6">
          {children}
        </div>
      </main>
    </div>
  );
}
