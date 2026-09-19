/**
 * @file ContentStatusBadge.tsx
 * @description Polished, unobtrusive content governance status badge and source reference tags.
 * Preserves the Phase 0B source-of-truth verification system with refined academic styling.
 */

import { VerificationStatus, SourceReference } from '../../types/verification';
import { ShieldCheck, CheckCircle2, Clock, HelpCircle, AlertCircle, Ban } from 'lucide-react';

interface ContentStatusBadgeProps {
  status: VerificationStatus;
  sources?: SourceReference[];
  compact?: boolean;
}

export function ContentStatusBadge({ status, sources, compact = false }: ContentStatusBadgeProps) {
  const getBadgeConfig = () => {
    switch (status) {
      case VerificationStatus.VERIFIED_OFFICIAL:
        return {
          label: 'Verified Official Record',
          bg: 'bg-emerald-50/80 text-emerald-800 border-emerald-200/80',
          icon: ShieldCheck,
          description: 'Authenticated against Level 1 institutional portals or statutory education board records.',
        };
      case VerificationStatus.CLIENT_PROVIDED:
        return {
          label: 'Client-Provided Information',
          bg: 'bg-blue-50/80 text-blue-900 border-blue-200/80',
          icon: CheckCircle2,
          description: 'Provided directly in client specifications and institutional planning documentation.',
        };
      case VerificationStatus.CLIENT_APPROVAL_REQUIRED:
        return {
          label: 'Pending Institutional Sign-off',
          bg: 'bg-amber-50/80 text-amber-900 border-amber-300/80',
          icon: Clock,
          description: 'Triangulated from secondary documentation; formal institutional sign-off required prior to final publication.',
        };
      case VerificationStatus.PENDING_VERIFICATION:
        return {
          label: 'Verification in Progress',
          bg: 'bg-purple-50/80 text-purple-900 border-purple-200/80',
          icon: HelpCircle,
          description: 'Documentation requested from administration via Client Information Request.',
        };
      case VerificationStatus.NOT_AVAILABLE:
        return {
          label: 'Asset Pending Handover',
          bg: 'bg-slate-100 text-slate-700 border-slate-200',
          icon: AlertCircle,
          description: 'Official photographic or statistical assets pending transmission from client archives.',
        };
      case VerificationStatus.NOT_PERMITTED_TO_PUBLISH:
        return {
          label: 'Publication Restricted',
          bg: 'bg-rose-50 text-rose-800 border-rose-200',
          icon: Ban,
          description: 'Unauthenticated content prohibited under institutional integrity rules.',
        };
      default:
        return {
          label: 'Audited Content',
          bg: 'bg-slate-50 text-slate-700 border-slate-200',
          icon: ShieldCheck,
          description: 'Audited educational information.',
        };
    }
  };

  const config = getBadgeConfig();
  const Icon = config.icon;

  if (compact) {
    return (
      <span
        title={`${config.label}: ${config.description}`}
        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium border shadow-2xs ${config.bg}`}
      >
        <Icon className="w-3 h-3 shrink-0" aria-hidden="true" />
        <span>{config.label}</span>
      </span>
    );
  }

  return (
    <div className={`p-3 rounded-lg border text-xs shadow-2xs ${config.bg}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2 font-semibold">
          <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span>{config.label}</span>
        </div>

        {sources && sources.length > 0 && (
          <div className="flex items-center flex-wrap gap-1 text-[10px] font-mono bg-white/80 px-2 py-0.5 rounded border border-current/20 self-start sm:self-auto">
            <span className="font-sans font-semibold text-slate-500">Sources:</span>
            <span>{sources.map((s) => s.code).join(', ')}</span>
          </div>
        )}
      </div>

      <p className="text-[11px] opacity-85 mt-1.5 leading-relaxed">
        {config.description}
      </p>
    </div>
  );
}
