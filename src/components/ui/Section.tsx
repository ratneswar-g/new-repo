/**
 * @file Section.tsx
 * @description Standardized structural section wrapper for institutional layouts.
 * Supports standard, muted, dark academic, centered, and feature variants.
 */

import React, { HTMLAttributes } from 'react';

export type SectionVariant = 'standard' | 'muted' | 'dark' | 'feature';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: SectionVariant;
  containerWidth?: 'content' | 'standard' | 'reading' | 'full';
  compact?: boolean;
}

const VARIANT_STYLES: Record<SectionVariant, string> = {
  standard: 'bg-white text-slate-900 border-b border-slate-100',
  muted: 'bg-[#f8f9fa] text-slate-900 border-y border-slate-200',
  dark: 'bg-[#0f1f38] text-white border-y border-slate-800',
  feature: 'bg-[#fcfbf9] text-slate-900 border-y border-amber-200/60',
};

const CONTAINER_WIDTHS: Record<'content' | 'standard' | 'reading' | 'full', string> = {
  content: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  standard: 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8',
  reading: 'max-w-3xl mx-auto px-4 sm:px-6 lg:px-8',
  full: 'w-full px-4 sm:px-6 lg:px-8',
};

export function Section({
  variant = 'standard',
  containerWidth = 'content',
  compact = false,
  className = '',
  children,
  ...props
}: SectionProps) {
  const variantClass = VARIANT_STYLES[variant];
  const containerClass = CONTAINER_WIDTHS[containerWidth];
  const paddingClass = compact ? 'py-6 sm:py-8 lg:py-10' : 'py-10 sm:py-14 lg:py-16';

  return (
    <section className={`w-full ${variantClass} ${paddingClass} ${className}`} {...props}>
      <div className={containerClass}>{children}</div>
    </section>
  );
}
