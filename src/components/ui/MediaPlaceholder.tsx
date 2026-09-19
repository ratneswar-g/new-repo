/**
 * @file MediaPlaceholder.tsx
 * @description Standardized institutional media placeholder component.
 * Used when approved photographic assets from client archives are pending.
 * Guarantees zero stock/AI-generated images while preserving visual structure.
 */

import { ImageIcon, ShieldAlert } from 'lucide-react';

export type MediaCategory =
  | 'campus'
  | 'academics'
  | 'laboratory'
  | 'laboratories'
  | 'classrooms'
  | 'library'
  | 'hostel'
  | 'leadership'
  | 'gallery'
  | 'sports'
  | 'events';

export interface MediaPlaceholderProps {
  category: MediaCategory | string;
  title: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/2';
  caption?: string;
  pendingNotice?: string;
  className?: string;
}

const ASPECT_RATIO_CLASSES: Record<'16/9' | '4/3' | '1/1' | '3/2', string> = {
  '16/9': 'aspect-video',
  '4/3': 'aspect-4/3',
  '1/1': 'aspect-square',
  '3/2': 'aspect-3/2',
};

export function MediaPlaceholder({
  category,
  title,
  aspectRatio = '16/9',
  caption,
  pendingNotice = 'Official verified asset pending client handover',
  className = '',
}: MediaPlaceholderProps) {
  const aspectClass = ASPECT_RATIO_CLASSES[aspectRatio];

  return (
    <figure className={`w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 ${className}`}>
      <div
        className={`w-full ${aspectClass} flex flex-col items-center justify-center p-6 text-center bg-linear-to-b from-slate-100 to-slate-200/80 border-b border-slate-200/80 select-none`}
        role="img"
        aria-label={`${title} (${pendingNotice})`}
      >
        <div className="w-12 h-12 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center mb-3">
          <ImageIcon className="w-6 h-6 text-slate-400" aria-hidden="true" />
        </div>

        <div className="max-w-xs space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded">
            {category} Archive Asset
          </span>
          <p className="text-xs font-semibold text-slate-700 leading-snug">
            {title}
          </p>
          <p className="text-[11px] text-slate-500 flex items-center justify-center gap-1">
            <ShieldAlert className="w-3 h-3 text-amber-600 shrink-0" aria-hidden="true" />
            <span>{pendingNotice}</span>
          </p>
        </div>
      </div>

      {caption && (
        <figcaption className="p-3 text-xs text-slate-500 bg-white border-t border-slate-100 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
