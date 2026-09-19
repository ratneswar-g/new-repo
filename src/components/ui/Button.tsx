/**
 * @file Button.tsx
 * @description Academic button component supporting primary navy, gold secondary,
 * outline, text, and disabled states with accessible focus indicators.
 */

import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { Link } from 'react-router-dom';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  to?: string;
  href?: string;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    'bg-[#0f1f38] text-white hover:bg-[#182f54] active:bg-[#0a1526] border border-[#0f1f38] shadow-xs focus-visible:ring-2 focus-visible:ring-[#b8860b] focus-visible:ring-offset-2',
  secondary:
    'bg-[#b8860b] text-white hover:bg-[#996515] active:bg-[#7d5300] border border-[#b8860b] shadow-xs focus-visible:ring-2 focus-visible:ring-[#0f1f38] focus-visible:ring-offset-2',
  outline:
    'bg-transparent text-[#0f1f38] hover:bg-slate-100 active:bg-slate-200 border border-slate-300 focus-visible:ring-2 focus-visible:ring-[#b8860b] focus-visible:ring-offset-1',
  text:
    'bg-transparent text-[#0f1f38] hover:text-[#b8860b] hover:bg-slate-100/60 active:bg-slate-100 border border-transparent focus-visible:ring-2 focus-visible:ring-[#b8860b]',
  danger:
    'bg-[#991b1b] text-white hover:bg-[#7f1d1d] active:bg-[#450a0a] border border-[#991b1b] focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2',
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: 'text-xs font-semibold py-1.5 px-3 rounded-md gap-1.5',
  md: 'text-xs sm:text-sm font-semibold py-2 px-4 rounded-lg gap-2',
  lg: 'text-sm sm:text-base font-semibold py-2.5 px-5 rounded-lg gap-2.5',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      to,
      href,
      fullWidth = false,
      leftIcon,
      rightIcon,
      className = '',
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      'inline-flex items-center justify-center font-sans transition-colors cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none focus:outline-none';
    const variantClasses = VARIANT_STYLES[variant];
    const sizeClasses = SIZE_STYLES[size];
    const widthClass = fullWidth ? 'w-full' : '';
    const combinedClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${widthClass} ${className}`;

    // If 'to' is provided, render internal React Router Link
    if (to && !disabled) {
      return (
        <Link to={to} className={combinedClasses}>
          {leftIcon && <span className="shrink-0" aria-hidden="true">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="shrink-0" aria-hidden="true">{rightIcon}</span>}
        </Link>
      );
    }

    // If 'href' is provided, render external anchor
    if (href && !disabled) {
      return (
        <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
          {leftIcon && <span className="shrink-0" aria-hidden="true">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="shrink-0" aria-hidden="true">{rightIcon}</span>}
        </a>
      );
    }

    return (
      <button ref={ref} className={combinedClasses} disabled={disabled} {...props}>
        {leftIcon && <span className="shrink-0" aria-hidden="true">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="shrink-0" aria-hidden="true">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
