/**
 * @file Form.tsx
 * @description Accessible form controls styled for institutional academic portal.
 * Inputs, textarea, select, checkbox, radio, labels, helper texts, and validation messages.
 */

import React, {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  SelectHTMLAttributes,
  forwardRef,
} from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export interface FormFieldProps {
  label?: string;
  error?: string;
  success?: string;
  helperText?: string;
  required?: boolean;
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export function FormField({
  label,
  error,
  success,
  helperText,
  required = false,
  id,
  children,
  className = '',
}: FormFieldProps) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      {label && (
        <label htmlFor={id} className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
          {label} {required && <span className="text-red-700 font-bold" aria-hidden="true">*</span>}
        </label>
      )}

      {children}

      {error && (
        <p className="flex items-center gap-1.5 text-xs text-red-700 mt-1" role="alert">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          <span>{error}</span>
        </p>
      )}

      {success && (
        <p className="flex items-center gap-1.5 text-xs text-emerald-700 mt-1">
          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          <span>{success}</span>
        </p>
      )}

      {helperText && !error && !success && (
        <p className="text-xs text-slate-500 mt-1">{helperText}</p>
      )}
    </div>
  );
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ hasError = false, className = '', disabled, ...props }, ref) => {
    const errorClasses = hasError
      ? 'border-red-600 focus:border-red-600 focus:ring-red-600'
      : 'border-slate-300 focus:border-[#b8860b] focus:ring-[#b8860b]';

    return (
      <input
        ref={ref}
        disabled={disabled}
        className={`w-full px-3.5 py-2 text-sm text-slate-900 bg-white border rounded-lg shadow-2xs transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed ${errorClasses} ${className}`}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ hasError = false, className = '', disabled, rows = 4, ...props }, ref) => {
    const errorClasses = hasError
      ? 'border-red-600 focus:border-red-600 focus:ring-red-600'
      : 'border-slate-300 focus:border-[#b8860b] focus:ring-[#b8860b]';

    return (
      <textarea
        ref={ref}
        rows={rows}
        disabled={disabled}
        className={`w-full px-3.5 py-2 text-sm text-slate-900 bg-white border rounded-lg shadow-2xs transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed ${errorClasses} ${className}`}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  hasError?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ hasError = false, className = '', disabled, children, ...props }, ref) => {
    const errorClasses = hasError
      ? 'border-red-600 focus:border-red-600 focus:ring-red-600'
      : 'border-slate-300 focus:border-[#b8860b] focus:ring-[#b8860b]';

    return (
      <select
        ref={ref}
        disabled={disabled}
        className={`w-full px-3.5 py-2 text-sm text-slate-900 bg-white border rounded-lg shadow-2xs transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed ${errorClasses} ${className}`}
        {...props}
      >
        {children}
      </select>
    );
  }
);
Select.displayName = 'Select';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className = '', disabled, id, ...props }, ref) => {
    return (
      <label
        htmlFor={id}
        className={`inline-flex items-start gap-2.5 text-xs text-slate-700 select-none cursor-pointer ${
          disabled ? 'opacity-60 cursor-not-allowed' : ''
        } ${className}`}
      >
        <input
          ref={ref}
          type="checkbox"
          id={id}
          disabled={disabled}
          className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#0f1f38] focus:ring-2 focus:ring-[#b8860b] cursor-pointer disabled:cursor-not-allowed"
          {...props}
        />
        <span>{label}</span>
      </label>
    );
  }
);
Checkbox.displayName = 'Checkbox';
