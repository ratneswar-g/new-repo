/**
 * @file AchievementsPage.tsx
 * @description Audited institutional milestones, educational foundations, and certified recognitions.
 * Strictly adheres to the zero-fabrication mandate: only verified milestones are published;
 * unverified competition awards and speculative rankings remain in pending status.
 */

import {
  Award,
  Building2,
  Calendar,
  ShieldCheck,
  Clock,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { PageContainer } from '../../components/common/PageContainer';
import { ContentStatusBadge } from '../../components/common/ContentStatusBadge';
import { Card, CardBody } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import {
  INSTITUTIONAL_ACHIEVEMENTS,
  ACHIEVEMENTS_METADATA,
} from '../../data/achievements';
import { isPublishable } from '../../utils/contentHelpers';
import { ROUTES } from '../../routes/routeConfig';

export function AchievementsPage() {
  const publishableAchievements = INSTITUTIONAL_ACHIEVEMENTS.filter((item) =>
    isPublishable(item.verification)
  );

  return (
    <PageContainer
      title="Institutional Milestones & Recognitions"
      description="Audited institutional milestones, campus foundations, and certified educational recognitions of the NPS–Hanchinmani Academic Alliance partner institutions."
      canonicalPath="/results/achievements"
    >
      <div className="space-y-12">
        {/* 1. Header Section */}
        <section className="p-6 sm:p-10 rounded-2xl bg-[#0f1f38] text-white space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
              <Award className="w-3.5 h-3.5 text-[#d4af37]" aria-hidden="true" />
              Institutional Heritage
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              Verified Milestones Only
            </span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
              Institutional Milestones & Recognitions
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Documenting authenticated milestones in senior-secondary education, pedagogical leadership,
              and competitive entrance training achieved by National Public School Kalaburagi and
              Hanchinmani Institutes Dharwad.
            </p>
          </div>
        </section>

        {/* 2. Verified Milestones */}
        <section className="space-y-6" id="verified-milestones">
          <div className="border-b border-slate-200 pb-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider font-semibold text-[#b8860b]">
                  Authenticated History
                </p>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0f1f38] tracking-tight">
                  Institutional & Programme Milestones
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Documented institutional foundations, state workshops, and pedagogical heritage.
                </p>
              </div>
              <span className="text-xs font-mono font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                Level 1 & Level 3 Sourced
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {publishableAchievements.map((item) => (
              <Card key={item.id} variant="standard" className="flex flex-col justify-between border-slate-200">
                <CardBody className="p-6 space-y-4">
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0f1f38] bg-slate-100 px-2.5 py-1 rounded">
                      <Calendar className="w-3.5 h-3.5 text-[#b8860b]" aria-hidden="true" />
                      {item.year}
                    </span>
                    <ContentStatusBadge status={item.verification.status} />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-base font-serif font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                    <div>
                      <span className="font-semibold text-slate-800">Convening / Governing Body: </span>
                      <span>{item.awardingBody}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-800">Entity: </span>
                      <span>{item.recipientEntity}</span>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>

        {/* 3. Pending Competitive Awards & Honors */}
        <section className="space-y-6" id="competitive-honors">
          <div className="border-b border-slate-200 pb-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider font-semibold text-[#b8860b]">
                  Under Audit
                </p>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0f1f38] tracking-tight">
                  State & National Honors Register
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Accredited educational awards and science Olympiad recognitions.
                </p>
              </div>
              <ContentStatusBadge status={ACHIEVEMENTS_METADATA.status} />
            </div>
          </div>

          <Card variant="standard">
            <CardBody className="p-6 sm:p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200">
                  <Clock className="w-6 h-6 text-amber-700" aria-hidden="true" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold font-serif text-slate-900">
                    Competitive Honors Pending Certified Submission
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    Institutional awards and competition achievements will be published after official verification.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Formal submissions for state, national, or regional educational honors (Client Request Item I1)
                    and inter-school science competition / Olympiad achievements (Item I2) are currently being
                    compiled by institutional administration. To maintain strict verification integrity, no speculative
                    trophy counts or uncertified award claims are displayed.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Item I1: Accredited Institutional Honors</h4>
                  <p>Awaiting certified award citations and issuing authority documentation from institutional leadership.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Item I2: Science Olympiad & Talent Searches</h4>
                  <p>Awaiting authenticated student roll numbers and qualification certificates (NTSE, KVPY, Olympiads).</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* 4. Cross-Navigation */}
        <div className="p-5 rounded-xl bg-[#0f1f38] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-sm font-bold font-serif">
              Explore Academic Results & Student Success
            </h3>
            <p className="text-xs text-slate-300">
              Review examination performance governance or student success story protocols.
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
              to={ROUTES.RESULTS_SUCCESS_STORIES}
              variant="outline"
              size="sm"
              className="text-white border-slate-600 hover:bg-slate-800"
              rightIcon={<ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />}
            >
              Success Stories
            </Button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
