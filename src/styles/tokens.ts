/**
 * @file tokens.ts
 * @description Centralized design tokens for NPS–Hanchinmani Institutes Academic Alliance.
 * Defines colors, typography scales, spacing, layout constraints, elevations, and states.
 */

export const COLOR_TOKENS = {
  // Primary: Deep Academic Navy
  primary: {
    base: '#0f1f38',
    hover: '#182f54',
    dark: '#0a1526',
    surface: '#f0f4f9',
    border: '#1e3252',
    contrastText: '#ffffff',
  },

  // Secondary: Warm Academic Gold
  gold: {
    base: '#b8860b',
    hover: '#996515',
    dark: '#7d5300',
    light: '#fdf9f0',
    border: '#d4af37',
    contrastText: '#ffffff',
  },

  // Background & Surfaces
  canvas: {
    background: '#f8f9fa',
    surface: '#ffffff',
    surfaceSubtle: '#f4f6f9',
    surfaceDark: '#0f1f38',
    surfaceDarkElevated: '#162a45',
  },

  // Text Hierarchy
  text: {
    primary: '#0f172a',    // High-contrast slate-900
    secondary: '#334155',  // Slate-700
    muted: '#64748b',      // Slate-500
    subtle: '#94a3b8',     // Slate-400
    inverse: '#ffffff',
    goldAccent: '#8a6200',
  },

  // Borders & Dividers
  border: {
    subtle: '#e2e8f0',     // Slate-200
    standard: '#cbd5e1',   // Slate-300
    strong: '#94a3b8',     // Slate-400
    navy: '#1e3252',
    gold: '#d4af37',
  },

  // Functional & Status Indicators
  status: {
    success: {
      text: '#166534',
      bg: '#f0fdf4',
      border: '#bbf7d0',
    },
    warning: {
      text: '#854d0e',
      bg: '#fefce8',
      border: '#fef08a',
    },
    error: {
      text: '#991b1b',
      bg: '#fef2f2',
      border: '#fecaca',
    },
    info: {
      text: '#0f1f38',
      bg: '#f0f4f9',
      border: '#bfdbfe',
    },
    focus: '#b8860b',
  },
} as const;

export const TYPOGRAPHY_TOKENS = {
  fontFamily: {
    serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
    sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  },
  fontSize: {
    h1: 'text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0f1f38] leading-tight tracking-tight',
    h2: 'text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#0f1f38] leading-snug tracking-tight',
    h3: 'text-lg sm:text-xl font-serif font-semibold text-[#0f1f38] leading-snug',
    h4: 'text-base font-serif font-semibold text-[#0f1f38] leading-normal',
    bodyLarge: 'text-base sm:text-lg text-slate-700 leading-relaxed',
    body: 'text-sm sm:text-base text-slate-700 leading-relaxed',
    bodySmall: 'text-xs sm:text-sm text-slate-600 leading-normal',
    caption: 'text-xs text-slate-500 leading-normal',
    label: 'text-xs font-semibold uppercase tracking-wider text-slate-700 font-mono',
  },
} as const;

export const SPACING_TOKENS = {
  containerPadding: 'px-4 sm:px-6 lg:px-8',
  sectionVertical: 'py-10 sm:py-14 lg:py-16',
  sectionVerticalTight: 'py-6 sm:py-8 lg:py-10',
  gridGap: 'gap-6 sm:gap-8',
  cardPadding: 'p-6 sm:p-8',
  cardPaddingCompact: 'p-4 sm:p-6',
} as const;

export const LAYOUT_TOKENS = {
  maxWidth: {
    content: 'max-w-7xl mx-auto',
    standard: 'max-w-5xl mx-auto',
    reading: 'max-w-3xl mx-auto',
    narrow: 'max-w-xl mx-auto',
  },
  borderRadius: {
    sm: 'rounded-md',    // 6px
    md: 'rounded-lg',    // 8px
    lg: 'rounded-xl',    // 12px
    full: 'rounded-full',
  },
} as const;
