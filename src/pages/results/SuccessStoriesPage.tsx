/**
 * @file SuccessStoriesPage.tsx
 * @description Audited student success stories, alumni destinations, and verification protocols.
 * Strictly enforces zero-fabrication: displays a neutral pending state and standard media placeholder
 * until client-authorized alumni profiles and signed consents are delivered.
 */

import {
  Users,
  ShieldCheck,
  Clock,
  ArrowRight,
  FileCheck2,
  Lock,
} from 'lucide-react';
import { PageContainer } from '../../components/common/PageContainer';
import { ContentStatusBadge } from '../../components/common/ContentStatusBadge';
import { Card, CardBody } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { MediaPlaceholder } from '../../components/ui/MediaPlaceholder';
import { SUCCESS_STORIES_METADATA } from '../../data/successStories';
import { ROUTES } from '../../routes/routeConfig';

export function SuccessStoriesPage() {
  return (
    <PageContainer
      title="Student Success Stories & Alumni Profiles"
      description="Audited student achievements, verified higher-education admissions, and alumni case studies for the NPS–Hanchinmani Academic Alliance."
      canonicalPath="/results/success-stories"
    >
      <div className="space-y-12">
        {/* 1. Header Section */}
        <section className="p-6 sm:p-10 rounded-2xl bg-[#0f1f38] text-white space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
              <Users className="w-3.5 h-3.5 text-[#d4af37]" aria-hidden="true" />
              Alumni Documentation
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
              <Lock className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              Consent-Verified Only
            </span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
              Student Success Stories & Alumni Profiles
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Documenting authenticated student journeys into leading medical, engineering, and professional
              institutions. In compliance with student privacy regulations, only authorized profiles with
              signed consent are published.
            </p>
          </div>
        </section>

        {/* 2. Official Pending State Card */}
        <section className="space-y-6" id="success-stories-status">
          <div className="border-b border-slate-200 pb-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider font-semibold text-[#b8860b]">
                  Publication Status
                </p>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0f1f38] tracking-tight">
                  Alumni Case Studies & Candidate Rosters
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Privacy-protected reporting of student higher-education seat allotments.
                </p>
              </div>
              <ContentStatusBadge status={SUCCESS_STORIES_METADATA.status} />
            </div>
          </div>

          <Card variant="standard">
            <CardBody className="p-6 sm:p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0f1f38] flex items-center justify-center shrink-0">
                  <FileCheck2 className="w-6 h-6 text-[#0f1f38]" aria-hidden="true" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold font-serif text-slate-900">
                    Official Student Success Stories Pending Client Approval
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    Student success stories will be published after official client approval.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under the institutional governance framework, verified alumni profiles (securing admissions to
                    AIIMS, Government Medical Colleges, IITs, and NITs) require formal written parental and student
                    consent before publication. Zero synthetic student testimonials, fictitious quotes, or
                    unverified qualifying claims are permitted.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-slate-800">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
                  <span>Tracking in Client Information Request:</span>
                </div>
                <p>
                  Awaiting delivery of verified alumni case studies (Item J1: Student Name, Passing Year, Programme,
                  Qualifying Rank, Allotted College, and Signed Consent Form).
                </p>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* 3. Media Placeholder for Photography */}
        <section className="space-y-4" id="media-placeholder">
          <div className="max-w-2xl">
            <MediaPlaceholder
              category="academics"
              title="Official Student Photography & Alumni Case Studies"
              caption="Official student photography pending client handover."
              aspectRatio="16/9"
            />
          </div>
        </section>

        {/* 4. Verification Protocol Notice */}
        <section className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="flex items-center gap-2 text-slate-900 font-serif font-bold text-base">
            <ShieldCheck className="w-5 h-5 text-[#b8860b] shrink-0" aria-hidden="true" />
            <h3>Institutional Student Testimonial Protocol</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600">
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
              <span className="font-semibold text-slate-800 block">1. Consent & Privacy</span>
              <p>Every published student profile must have signed consent from the student and legal guardian.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
              <span className="font-semibold text-slate-800 block">2. Mark Sheet Audit</span>
              <p>Entrance examination ranks and marks are audited against government rank cards before publication.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
              <span className="font-semibold text-slate-800 block">3. Attribution Scoping</span>
              <p>Profiles must explicitly denote whether training occurred at the Kalaburagi campus or parent network.</p>
            </div>
          </div>
        </section>

        {/* 5. Cross-Navigation */}
        <div className="p-5 rounded-xl bg-[#0f1f38] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-sm font-bold font-serif">
              Explore Examination Results & Academic Programmes
            </h3>
            <p className="text-xs text-slate-300">
              Review our results governance policy or explore the integrated Pre-University coaching tracks.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              to={ROUTES.RESULTS_ACADEMIC}
              variant="outline"
              size="sm"
              className="text-white border-slate-600 hover:bg-slate-800"
              rightIcon={<ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />}
            >
              Academic Results
            </Button>
            <Button
              to={ROUTES.RESULTS_ACHIEVEMENTS}
              variant="outline"
              size="sm"
              className="text-white border-slate-600 hover:bg-slate-800"
              rightIcon={<ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />}
            >
              Institutional Milestones
            </Button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
