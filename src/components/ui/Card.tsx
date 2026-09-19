/**
 * @file Card.tsx
 * @description Academic card system with standard, elevated, feature, and information variants.
 */

import React, { HTMLAttributes, forwardRef } from 'react';

export type CardVariant = 'standard' | 'elevated' | 'feature' | 'info' | 'dark';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  interactive?: boolean;
}

const VARIANT_STYLES: Record<CardVariant, string> = {
  standard: 'bg-white border border-slate-200 text-slate-900 shadow-xs',
  elevated: 'bg-white border border-slate-200 text-slate-900 shadow-md',
  feature: 'bg-white border-2 border-amber-200 text-slate-900 shadow-xs',
  info: 'bg-[#f0f4f9] border border-blue-200 text-[#0f1f38]',
  dark: 'bg-[#0f1f38] border border-slate-800 text-white',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'standard', interactive = false, className = '', children, ...props }, ref) => {
    const baseClasses = 'rounded-xl overflow-hidden transition-all duration-200';
    const variantClasses = VARIANT_STYLES[variant];
    const interactiveClasses = interactive
      ? 'hover:border-slate-400 hover:shadow-md cursor-pointer focus-within:ring-2 focus-within:ring-[#b8860b]'
      : '';

    return (
      <div
        ref={ref}
        className={`${baseClasses} ${variantClasses} ${interactiveClasses} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export function CardHeader({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-5 sm:p-6 border-b border-slate-100 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardBody({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-5 sm:p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-4 sm:p-5 bg-slate-50/70 border-t border-slate-100 ${className}`} {...props}>
      {children}
    </div>
  );
}
