/**
 * @file PlaceholderBlock.tsx
 * @description Polished, institutional placeholder block communicating missing content
 * intentionally and professionally without looking broken or synthetic.
 */

import { VerificationStatus, SourceReference } from '../../types/verification';
import { ContentStatusBadge } from './ContentStatusBadge';
import { Calendar, Shield, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardBody } from '../ui/Card';

interface PlaceholderBlockProps {
  pageTitle: string;
  purposeDescription: string;
  targetPhase?: string;
  verificationStatus?: VerificationStatus;
  sources?: SourceReference[];
  relatedLinks?: { label: string; href: string }[];
}

export function PlaceholderBlock({
  pageTitle,
  purposeDescription,
  targetPhase = 'Phase 3 / Phase 4',
  verificationStatus = VerificationStatus.CLIENT_APPROVAL_REQUIRED,
  sources,
  relatedLinks,
}: PlaceholderBlockProps) {
  return (
    <Card variant="standard" className="my-6">
      <CardBody className="p-6 sm:p-8 lg:p-10 space-y-6">
        {/* Governance & Status Header */}
        <div>
          <ContentStatusBadge status={verificationStatus} sources={sources} />
        </div>

        {/* Purpose Description */}
        <div className="max-w-3xl space-y-3">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0f1f38] tracking-tight">
            {pageTitle}
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            {purposeDescription}
          </p>

          {/* Phase Implementation Notice */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#fdf9f0] border border-amber-300 text-amber-900 text-xs font-semibold">
            <Calendar className="w-4 h-4 text-amber-700 shrink-0" aria-hidden="true" />
            <span>Content implementation scheduled for a later phase ({targetPhase}).</span>
          </div>
        </div>

        {/* Governance Protocols & Sources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-slate-100 text-xs text-slate-600">
          <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50/70 border border-slate-200/70">
            <Shield className="w-4 h-4 text-[#0f1f38] mt-0.5 shrink-0" aria-hidden="true" />
            <div>
              <span className="font-semibold text-slate-900 block mb-0.5">Audited Content Protocol</span>
              <span className="text-slate-600 leading-relaxed">
                All claims for this section must strictly adhere to authenticated institutional records.
                Zero synthetic metrics or unauthenticated photography are permitted.
              </span>
            </div>
          </div>

          {sources && sources.length > 0 && (
            <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50/70 border border-slate-200/70">
              <ExternalLink className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <span className="font-semibold text-slate-900 block mb-0.5">Audited Sources of Record</span>
                <ul className="space-y-1 mt-1 text-[11px]">
                  {sources.map((src) => (
                    <li key={src.id} className="truncate">
                      <span className="font-mono font-semibold text-slate-800">{src.code}</span>: {src.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Related Navigation Links */}
        {relatedLinks && relatedLinks.length > 0 && (
          <div className="pt-6 border-t border-slate-100">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-3 font-mono">
              Related Directory Sections
            </span>
            <div className="flex flex-wrap gap-2">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-[#0f1f38] bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#b8860b]"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </CardBody>
    </Card>
  );
}
