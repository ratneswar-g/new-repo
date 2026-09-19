/**
 * @file TestimonialsPage.tsx
 * @description Official testimonial registry for students, parents, and alumni of the NPS–Hanchinmani Alliance.
 * Strictly adheres to the zero-fabrication mandate: renders an intentional, polished pending state
 * and verification protocols pending signed publication consent and client handover (CIR Item K1–K3).
 */

import {
  MessageSquareQuote,
  ShieldCheck,
  Lock,
  FileCheck2,
  Clock,
  ArrowRight,
  GraduationCap,
  Users,
  Award,
} from 'lucide-react';
import { PageContainer } from '../../components/common/PageContainer';
import { ContentStatusBadge } from '../../components/common/ContentStatusBadge';
import { Card, CardBody } from '../../components/ui/Card';
import { MediaPlaceholder } from '../../components/ui/MediaPlaceholder';
import { VERIFIED_TESTIMONIALS, TESTIMONIALS_METADATA } from '../../data/testimonials';
import { VerificationStatus } from '../../types/verification';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routeConfig';

export function TestimonialsPage() {
  const hasVerifiedTestimonials = VERIFIED_TESTIMONIALS.length > 0;

  return (
    <PageContainer
      title="Testimonials"
      description="Reflections and perspectives from students, parents, and alumni regarding academic mentorship, campus discipline, and hostel safety at the NPS–Hanchinmani Academic Alliance."
      canonicalPath="/media/testimonials"
    >
      <div className="space-y-12">
        {/* 1. Header Hero Section */}
        <section className="p-6 sm:p-10 rounded-2xl bg-[#0f1f38] text-white space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
              <MessageSquareQuote className="w-3.5 h-3.5 text-[#d4af37]" aria-hidden="true" />
              Community Reflections
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
              <Lock className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              Consent-Verified Only
            </span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
              Testimonials & Reflections
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Perspectives from students, parents, and alumni on the integrated Pre-University
              academic curriculum, faculty mentoring, and supervised residential care at the Kalaburagi campus.
            </p>
          </div>
        </section>

        {/* 2. Publication Status & Governance Notice */}
        <section className="space-y-6" id="testimonials-status">
          <div className="border-b border-slate-200 pb-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider font-semibold text-[#b8860b]">
                  Editorial Verification Status
                </p>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0f1f38] tracking-tight">
                  Student & Parent Testimonials Register
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Compliance with student data privacy and consent-backed editorial guidelines.
                </p>
              </div>
              <ContentStatusBadge status={TESTIMONIALS_METADATA.status} sources={TESTIMONIALS_METADATA.sources} />
            </div>
          </div>

          {hasVerifiedTestimonials ? (
            /* Render Verified Testimonials Grid if data is supplied */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {VERIFIED_TESTIMONIALS.map((t) => (
                <Card key={t.id} variant="standard" className="flex flex-col justify-between">
                  <CardBody className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-semibold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {t.authorRole}
                      </span>
                      <ContentStatusBadge status={t.verification.status} />
                    </div>
                    <blockquote className="text-sm text-slate-700 italic leading-relaxed">
                      "{t.quoteText}"
                    </blockquote>
                    <div className="pt-3 border-t border-slate-100 space-y-1">
                      <p className="text-sm font-bold text-slate-900 font-serif">
                        {t.authorName}
                      </p>
                      <p className="text-xs text-slate-500">
                        {t.batchOrDesignation} {t.programmeReference && `• ${t.programmeReference}`}
                      </p>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          ) : (
            /* Authoritative Zero-Fabrication Pending State */
            <Card variant="standard" className="border-l-4 border-l-[#b8860b]">
              <CardBody className="p-6 sm:p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#b8860b] flex items-center justify-center shrink-0 border border-amber-200">
                    <FileCheck2 className="w-6 h-6 text-[#b8860b]" aria-hidden="true" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
                      Official Testimonials Pending Client Approval
                    </h3>
                    <p className="text-sm text-slate-800 leading-relaxed font-semibold">
                      Official testimonials will be published after client approval.
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Under the institutional governance framework of the NPS–Hanchinmani Academic Alliance,
                      authentic student, parent, and alumni testimonials require formal written consent, identity
                      verification, and administrative authorization before publication. In strict adherence to our
                      anti-fabrication mandate, zero synthetic reviews, fictitious student personas, or unverified
                      quotations are published.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-slate-800">
                    <Clock className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
                    <span>Information Ingestion Roadmap:</span>
                  </div>
                  <p>
                    Testimonial collection is formally cataloged under Client Information Request (Items K1, K2, and K3).
                    As soon as verified submissions with signed guardian consent are delivered, they will appear here
                    with full academic attribution and source verification.
                  </p>
                </div>
              </CardBody>
            </Card>
          )}
        </section>

        {/* 3. Media Placeholder for Authentic Photography */}
        <section className="space-y-4" id="testimonials-media">
          <div className="max-w-2xl">
            <MediaPlaceholder
              category="academics"
              title="Student Mentorship & Campus Life Reflections"
              caption="Official student photography and reflections pending client handover."
              pendingNotice="Official student/event photography pending client approval."
              aspectRatio="16/9"
            />
          </div>
        </section>

        {/* 4. Verification & Publication Governance Framework */}
        <section className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-6" id="verification-framework">
          <div className="flex items-center gap-2 text-[#0f1f38] font-serif font-bold text-lg">
            <ShieldCheck className="w-5 h-5 text-[#b8860b]" aria-hidden="true" />
            <h2>Institutional Testimonial Verification Protocol</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Every published quotation must satisfy three compulsory institutional criteria prior to online release:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-700">
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0f1f38] flex items-center justify-center font-bold">
                1
              </div>
              <span className="font-semibold text-slate-900 block">Signed Guardian Consent</span>
              <p className="text-slate-600 leading-relaxed">
                Written and signed consent forms from enrolled students and their legal guardians authorizing the publication of names, academic batches, and quotes.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center font-bold">
                2
              </div>
              <span className="font-semibold text-slate-900 block">Academic Record Audit</span>
              <p className="text-slate-600 leading-relaxed">
                Any cited competitive exam rank, percentile, or board percentage is cross-verified against official government rank lists and institutional enrollment registers.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold">
                3
              </div>
              <span className="font-semibold text-slate-900 block">Zero Anonymous Reviews</span>
              <p className="text-slate-600 leading-relaxed">
                Only authenticated persons with verified academic affiliations are published. No fabricated personas, artificial stars, or marketing copy disguised as feedback.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Client Information Request Tracking (Item K) */}
        <section className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4" id="cir-tracking">
          <div className="flex items-center gap-2 text-[#0f1f38] font-serif font-bold text-base">
            <GraduationCap className="w-5 h-5 text-[#b8860b]" aria-hidden="true" />
            <h3>Client Information Request: Section K Inventory</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600">
            The following documentation items have been requested from institutional authorities for Phase 10 validation:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
              <span className="font-semibold text-slate-900 block font-mono">Item K1: Student Testimonials</span>
              <p className="text-slate-600">
                3–5 profiles with full name, academic combination, qualifying exam rank, and short quote on mentoring.
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
              <span className="font-semibold text-slate-900 block font-mono">Item K2: Parent Testimonials</span>
              <p className="text-slate-600">
                3–5 profiles with parent name, ward's batch, and feedback on campus discipline, academic growth, and safety.
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
              <span className="font-semibold text-slate-900 block font-mono">Item K3: Alumni Testimonials</span>
              <p className="text-slate-600">
                2–3 updates from alumni studying in professional colleges reflecting on their PU coaching foundation.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Related Navigation Links */}
        <section className="pt-6 border-t border-slate-200">
          <h3 className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-500 mb-4">
            Explore Related Sections
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to={ROUTES.RESULTS_SUCCESS_STORIES}
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors flex items-center justify-between text-xs font-semibold text-[#0f1f38]"
            >
              <span>Student Success Stories</span>
              <ArrowRight className="w-4 h-4 text-[#b8860b]" aria-hidden="true" />
            </Link>
            <Link
              to={ROUTES.RESULTS_ACADEMIC}
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors flex items-center justify-between text-xs font-semibold text-[#0f1f38]"
            >
              <span>Academic Results</span>
              <ArrowRight className="w-4 h-4 text-[#b8860b]" aria-hidden="true" />
            </Link>
            <Link
              to={ROUTES.ADMISSIONS_ENQUIRY}
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors flex items-center justify-between text-xs font-semibold text-[#0f1f38]"
            >
              <span>Admission Enquiry</span>
              <ArrowRight className="w-4 h-4 text-[#b8860b]" aria-hidden="true" />
            </Link>
            <Link
              to={ROUTES.CAMPUS_LIFE}
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors flex items-center justify-between text-xs font-semibold text-[#0f1f38]"
            >
              <span>Campus Life</span>
              <ArrowRight className="w-4 h-4 text-[#b8860b]" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
