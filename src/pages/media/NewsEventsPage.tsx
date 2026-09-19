/**
 * @file NewsEventsPage.tsx
 * @description Official institutional notices, verified academic workshops, and calendar announcements.
 * Strictly adheres to the zero-fabrication mandate: displays verified historical milestones (SRC-02)
 * and authorized admission notices (SRC-01) with explicit pending notices for unconfirmed future dates.
 */

import { useState } from 'react';
import {
  Bell,
  Calendar,
  ShieldCheck,
  Building2,
  MapPin,
  Clock,
  Layers,
  FileText,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Users,
} from 'lucide-react';
import { PageContainer } from '../../components/common/PageContainer';
import { ContentStatusBadge } from '../../components/common/ContentStatusBadge';
import { Card, CardBody } from '../../components/ui/Card';
import { NEWS_AND_EVENTS, NEWS_EVENTS_METADATA } from '../../data/newsEvents';
import { VerificationStatus } from '../../types/verification';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routeConfig';

type NewsCategoryFilter = 'all' | 'workshop' | 'admission_announcement' | 'academic_calendar';

interface FilterOption {
  id: NewsCategoryFilter;
  label: string;
}

const FILTER_OPTIONS: FilterOption[] = [
  { id: 'all', label: 'All Notices' },
  { id: 'workshop', label: 'Academic Workshops' },
  { id: 'admission_announcement', label: 'Admissions Releases' },
  { id: 'academic_calendar', label: 'Academic Counseling' },
];

export function NewsEventsPage() {
  const [activeCategory, setActiveCategory] = useState<NewsCategoryFilter>('all');

  const filteredItems = activeCategory === 'all'
    ? NEWS_AND_EVENTS
    : NEWS_AND_EVENTS.filter((item) => item.category === activeCategory);

  return (
    <PageContainer
      title="News & Events"
      description="Official announcements, verified academic seminars, admission notifications, and calendar bulletins from the NPS–Hanchinmani Academic Alliance in Kalaburagi."
      canonicalPath="/media/news-events"
    >
      <div className="space-y-12">
        {/* 1. Header Hero Section */}
        <section className="p-6 sm:p-10 rounded-2xl bg-[#0f1f38] text-white space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
              <Bell className="w-3.5 h-3.5 text-[#d4af37]" aria-hidden="true" />
              Official Institutional Bulletins
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              Source-Grounded Only
            </span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
              News, Circulars & Academic Events
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Official releases, accredited workshop milestones, and administrative notifications
              issued by National Public School & PU College and the Hanchinmani Institutes alliance leadership.
            </p>
          </div>
        </section>

        {/* 2. Editorial Governance Card */}
        <section className="space-y-4" id="news-governance">
          <Card variant="standard" className="border-l-4 border-l-[#b8860b]">
            <CardBody className="p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[#0f1f38] font-serif font-bold text-lg">
                  <ShieldCheck className="w-5 h-5 text-[#b8860b]" aria-hidden="true" />
                  <h2>Editorial & Event Verification Protocol</h2>
                </div>
                <ContentStatusBadge status={NEWS_EVENTS_METADATA.status} sources={NEWS_EVENTS_METADATA.sources} />
              </div>

              <div className="space-y-2 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p className="font-semibold text-slate-900">
                  Strict factual grounding across all institutional notices.
                </p>
                <p className="text-xs sm:text-sm text-slate-600">
                  Every public announcement is corroborated either through accredited third-party media reports
                  (such as The Hindu national daily for pedagogical workshops) or official administrative directives.
                  In accordance with the zero-fabrication mandate, no speculative event schedules, fictitious guest
                  lectures, or fabricated attendance figures are published.
                </p>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* 3. Category Filter Tabs */}
        <section className="space-y-6" id="news-filters">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0f1f38] tracking-tight">
              Published Notices & Milestones
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Filter official releases by category.
            </p>
          </div>

          <div className="flex flex-wrap gap-2" role="tablist" aria-label="News category filters">
            {FILTER_OPTIONS.map((filter) => {
              const isActive = activeCategory === filter.id;
              const count = filter.id === 'all'
                ? NEWS_AND_EVENTS.length
                : NEWS_AND_EVENTS.filter((item) => item.category === filter.id).length;

              return (
                <button
                  key={filter.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(filter.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#b8860b] ${
                    isActive
                      ? 'bg-[#0f1f38] text-white shadow-sm'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span>{filter.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* 4. Verified News & Events List */}
        <section className="space-y-6" id="news-list">
          <div className="space-y-6">
            {filteredItems.map((item) => (
              <Card key={item.id} variant="standard">
                <CardBody className="p-6 sm:p-8 space-y-5">
                  {/* Top Metadata Line */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-2.5 py-1 rounded bg-[#0f1f38] text-white">
                        <Calendar className="w-3.5 h-3.5 text-[#d4af37]" aria-hidden="true" />
                        {item.date}
                      </span>
                      <span className="text-[11px] font-mono uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                        {item.category.replace('_', ' ')}
                      </span>
                    </div>
                    <ContentStatusBadge
                      status={item.verification.status}
                      sources={item.verification.sources}
                    />
                  </div>

                  {/* Title & Body */}
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0f1f38] tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
                      {item.summary}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                      {item.bodyContent}
                    </p>
                  </div>

                  {/* Operational Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4 border-t border-slate-100 text-xs text-slate-600">
                    {item.venue && (
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-[#0f1f38] shrink-0 mt-0.5" aria-hidden="true" />
                        <div>
                          <span className="font-semibold text-slate-800 block">Venue / Channel:</span>
                          <span>{item.venue}</span>
                        </div>
                      </div>
                    )}

                    {item.organizers && item.organizers.length > 0 && (
                      <div className="flex items-start gap-2">
                        <Building2 className="w-4 h-4 text-[#b8860b] shrink-0 mt-0.5" aria-hidden="true" />
                        <div>
                          <span className="font-semibold text-slate-800 block">Organized By:</span>
                          <ul className="list-disc list-inside space-y-0.5 text-slate-600">
                            {item.organizers.map((org, i) => (
                              <li key={i}>{org}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Verification Note */}
                  {item.verification.reviewNotes && (
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 text-[11px] text-slate-500 font-mono">
                      <span className="font-semibold text-slate-700">Audit Reference: </span>
                      {item.verification.reviewNotes}
                    </div>
                  )}
                </CardBody>
              </Card>
            ))}
          </div>
        </section>

        {/* 5. Upcoming Academic Calendar / Pending Confirmation Block */}
        <section className="space-y-4" id="upcoming-calendar">
          <Card variant="standard" className="border border-slate-200 bg-slate-50/50">
            <CardBody className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-[#0f1f38] font-serif font-bold text-lg">
                <Clock className="w-5 h-5 text-[#b8860b]" aria-hidden="true" />
                <h2>Upcoming Academic Calendar & Examination Dates</h2>
              </div>

              <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                <p className="font-semibold text-slate-900">
                  Official news and event updates will be published here after institutional confirmation.
                </p>
                <p className="text-xs sm:text-sm text-slate-600">
                  The academic alliance admissions desk and the examination controller are finalizing the formal dates
                  for the upcoming scholarship entrance test, batch commencement, and parent orientation. Per
                  institutional integrity mandates, dates are published only when formally notified through signed circulars.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 space-y-2">
                <span className="font-semibold text-slate-800 block font-mono">
                  Client Information Request Tracking: Item L1 (Upcoming Academic Calendar)
                </span>
                <p>
                  Awaiting formal delivery of the final schedule: Pre-University batch commencement, scholarship
                  cum diagnostic test windows, and parent-mentor orientation dates.
                </p>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* 6. Related Navigation Links */}
        <section className="pt-6 border-t border-slate-200">
          <h3 className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-500 mb-4">
            Related Administrative & Academic Sections
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to={ROUTES.ADMISSIONS_PROCESS}
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors flex items-center justify-between text-xs font-semibold text-[#0f1f38]"
            >
              <span>Admission Procedure</span>
              <ArrowRight className="w-4 h-4 text-[#b8860b]" aria-hidden="true" />
            </Link>
            <Link
              to={ROUTES.ADMISSIONS_ENQUIRY}
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors flex items-center justify-between text-xs font-semibold text-[#0f1f38]"
            >
              <span>Admissions Enquiry</span>
              <ArrowRight className="w-4 h-4 text-[#b8860b]" aria-hidden="true" />
            </Link>
            <Link
              to={ROUTES.RESULTS_ACHIEVEMENTS}
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors flex items-center justify-between text-xs font-semibold text-[#0f1f38]"
            >
              <span>Achievements</span>
              <ArrowRight className="w-4 h-4 text-[#b8860b]" aria-hidden="true" />
            </Link>
            <Link
              to={ROUTES.ABOUT_ALLIANCE}
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors flex items-center justify-between text-xs font-semibold text-[#0f1f38]"
            >
              <span>The Academic Alliance</span>
              <ArrowRight className="w-4 h-4 text-[#b8860b]" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
