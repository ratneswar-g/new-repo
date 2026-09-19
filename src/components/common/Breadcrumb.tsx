/**
 * @file Breadcrumb.tsx
 * @description Compact, accessible, high-contrast breadcrumb navigation
 * tailored for institutional page hierarchies with semantic microdata.
 */

import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbItem } from '../../types/navigation';

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  // If no items provided (e.g. on Homepage), do not render breadcrumbs
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumbs" className="py-2.5">
      <ol className="flex items-center flex-wrap gap-1 text-xs text-slate-600">
        <li className="flex items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 px-1.5 py-0.5 rounded text-slate-600 hover:text-[#0f1f38] hover:bg-slate-200/60 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-[#b8860b]"
            aria-label="Alliance Portal Homepage"
          >
            <Home className="w-3.5 h-3.5 shrink-0 text-slate-500" aria-hidden="true" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 mx-0.5 shrink-0" aria-hidden="true" />
              {item.href && !isLast ? (
                <Link
                  to={item.href}
                  className="px-1.5 py-0.5 rounded text-slate-600 hover:text-[#0f1f38] hover:bg-slate-200/60 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-[#b8860b]"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className="px-1.5 py-0.5 font-semibold text-[#0f1f38] truncate max-w-[200px] sm:max-w-none"
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
