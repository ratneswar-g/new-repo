/**
 * @file LeadershipPage.tsx
 * @description Substantive leadership and institutional governance page.
 * Phase 6 Implementation presenting verified founders, principals, and trust governance.
 */

import {
  Users,
  ShieldCheck,
  Building2,
  Compass,
  FileCheck2,
  ArrowRight,
} from 'lucide-react';
import { PageContainer } from '../../components/common/PageContainer';
import { Button } from '../../components/ui/Button';
import { LEADERSHIP_PROFILES } from '../../data/leadership';
import { INSTITUTIONS } from '../../data/institutions';
import { ROUTES } from '../../routes/routeConfig';

export function LeadershipPage() {
  const nps = INSTITUTIONS.NPS;
  const hanchinmani = INSTITUTIONS.HANCHINMANI;

  return (
    <PageContainer
      title="Institutional Leadership"
      description="Founders, executive leadership, and institutional trustees of the participating institutions in the NPS–Hanchinmani Institutes Academic Alliance."
      canonicalPath="/about/leadership"
    >
      <div className="space-y-12">
        {/* 1. Header / Governance Context */}
        <section className="p-6 sm:p-10 rounded-2xl bg-[#0f1f38] text-white space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
              <Users className="w-3.5 h-3.5 text-[#d4af37]" aria-hidden="true" />
              Institutional Leadership
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              Participating Institutions
            </span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
              Institutional Leadership
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Profiles of founders, trustees, and campus leadership from National Public School & PU
              College, Kalaburagi and Hanchinmani Institutes, Dharwad.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800 text-xs">
            <div className="space-y-1">
              <p className="text-slate-400 uppercase font-mono tracking-wider font-semibold">
                Sponsoring Body (NPS Kalaburagi)
              </p>
              <p className="text-white font-medium">{nps.governingTrust}</p>
            </div>
            <div className="space-y-1">
              <p className="text-slate-400 uppercase font-mono tracking-wider font-semibold">
                Sponsoring Body (Hanchinmani Institutes)
              </p>
              <p className="text-white font-medium">{hanchinmani.governingTrust}</p>
            </div>
          </div>
        </section>

        {/* 2. Verified Institutional Leadership Profiles */}
        <section className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-mono uppercase tracking-wider font-semibold text-[#b8860b]">
              Verified Institutional Leaders
            </p>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 tracking-tight">
              Founders & Campus Leadership
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              Key leaders shaping the academic vision, institutional standards, and daily operations of the participating institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LEADERSHIP_PROFILES.map((profile) => {
              const initials = profile.fullName
                .split(' ')
                .filter((p) => !p.startsWith('Prof.') && !p.startsWith('Mr.'))
                .map((n) => n[0])
                .join('')
                .slice(0, 2);

              const isHanchinmani = profile.institutionId === 'inst-hanchinmani';

              return (
                <div
                  key={profile.id}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Header Avatar Monogram */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center font-serif text-lg font-bold ${
                          isHanchinmani
                            ? 'bg-amber-100 text-amber-900 border border-amber-200'
                            : 'bg-blue-100 text-[#0f1f38] border border-blue-200'
                        }`}
                        aria-hidden="true"
                      >
                        {initials || 'LE'}
                      </div>
                      <span
                        className={`text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded border ${
                          isHanchinmani
                            ? 'bg-amber-50 text-amber-900 border-amber-200'
                            : 'bg-blue-50 text-blue-800 border-blue-200'
                        }`}
                      >
                        {isHanchinmani ? 'Hanchinmani Dharwad' : 'NPS Kalaburagi'}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold font-serif text-slate-900">
                        {profile.fullName}
                      </h3>
                      <p className="text-xs font-semibold text-[#b8860b] mt-0.5">
                        {profile.role}
                      </p>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        {profile.designation}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                      {profile.bioSummary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
                      <span>Verified Institutional Profile</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. Alliance Governance Notice */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0f1f38] flex items-center justify-center shrink-0">
              <FileCheck2 className="w-6 h-6 text-[#0f1f38]" aria-hidden="true" />
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-serif text-slate-900">
                Governance & Institutional Oversight
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Formal alliance governance details will be published following client confirmation.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Faculty & Academic Mentorship Linkage */}
        <section className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <h3 className="text-base font-bold font-serif text-slate-900">
              Department Faculty & Mentorship Teams
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Explore how our specialized subject mentors deliver daily lectures, lab practicals, and competitive problem-solving sessions at the Kalaburagi campus.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Button
              to={ROUTES.CAMPUS_FACULTY}
              variant="outline"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
            >
              View Faculty Overview
            </Button>
            <Button
              to={ROUTES.ABOUT_ALLIANCE}
              variant="primary"
              size="md"
            >
              Alliance Framework
            </Button>
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
