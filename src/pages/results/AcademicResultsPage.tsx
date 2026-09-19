/**
 * @file AcademicResultsPage.tsx
 * @description Official Examination Results, Parent-Network Benchmarks & Performance Governance.
 * Strictly separates Alliance Cohort Results (A), Parent-Network Historical Track Records (B),
 * and Pending Institutional Verifications (C) in accordance with Phase 9 mandates.
 */

import {
  FileCheck2,
  ShieldCheck,
  ShieldAlert,
  Clock,
  ArrowRight,
  GraduationCap,
  Building2,
  AlertCircle,
} from 'lucide-react';
import { PageContainer } from '../../components/common/PageContainer';
import { ContentStatusBadge } from '../../components/common/ContentStatusBadge';
import { Card, CardBody } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import {
  ALLIANCE_COHORT_RESULTS,
  ALLIANCE_RESULTS_METADATA,
  PARENT_NETWORK_TRACK_RECORD,
} from '../../data/results';
import { VerificationStatus } from '../../types/verification';
import { isPublishable } from '../../utils/contentHelpers';
import { ROUTES } from '../../routes/routeConfig';

export function AcademicResultsPage() {
  const publishableHistoricalRecords = PARENT_NETWORK_TRACK_RECORD.filter((item) =>
    isPublishable(item.verification)
  );

  return (
    <PageContainer
      title="Academic Results & Performance Governance"
      description="Audited academic results reporting, parent-network historical benchmarks, and strict institutional attribution standards for the NPS–Hanchinmani Academic Alliance."
      canonicalPath="/results/academic"
    >
      <div className="space-y-12">
        {/* 1. Page Header & Governance Overview */}
        <section className="p-6 sm:p-10 rounded-2xl bg-[#0f1f38] text-white space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" aria-hidden="true" />
              Audited Results Governance
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
              <Building2 className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
              Kalaburagi Campus
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
              <GraduationCap className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              Zero Synthetic Ranks
            </span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
              Academic Results & Institutional Attribution
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              The NPS–Hanchinmani Institutes Academic Alliance enforces an audited results disclosure policy.
              Inaugural alliance cohort outcomes are recorded separately from historical parent-network
              benchmarks to ensure absolute transparency and prevent misleading representations.
            </p>
          </div>
        </section>

        {/* 2. SECTION A: Academic Alliance Results */}
        <section className="space-y-6" id="alliance-results">
          <div className="border-b border-slate-200 pb-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider font-semibold text-[#b8860b]">
                  Section A
                </p>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0f1f38] tracking-tight">
                  Academic Alliance Cohort Results
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Outcomes specific to the Kalaburagi campus academic alliance cohorts.
                </p>
              </div>
              <ContentStatusBadge status={ALLIANCE_RESULTS_METADATA.status} sources={ALLIANCE_RESULTS_METADATA.sources} />
            </div>
          </div>

          {ALLIANCE_COHORT_RESULTS.length === 0 ? (
            <Card variant="standard">
              <CardBody className="p-6 sm:p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0f1f38] flex items-center justify-center shrink-0">
                    <FileCheck2 className="w-6 h-6 text-[#0f1f38]" aria-hidden="true" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold font-serif text-slate-900">
                      Official Alliance Cohort Results Pending Publication
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                      Official alliance cohort results will be published after verification.
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Official Pre-University examination outcomes and entrance coaching qualifications
                      (NEET, JEE Main, and KCET) for the NPS–Hanchinmani Academic Alliance at the
                      Kalaburagi campus will be published following certified compilation and client handover.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-slate-800">
                    <Clock className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
                    <span>Audit Status & Compliance:</span>
                  </div>
                  <p>
                    Awaiting official compilation per Client Information Request (Item H1 & H2).
                    Under zero-fabrication mandates, no synthetic ranks, simulated toppers, or estimated
                    success rates are permitted.
                  </p>
                </div>
              </CardBody>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Future verified alliance results will map here */}
            </div>
          )}
        </section>

        {/* 3. SECTION B: Parent-Network / Historical Track Record */}
        <section className="space-y-6" id="historical-track-record">
          <div className="border-b border-slate-200 pb-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider font-semibold text-[#b8860b]">
                  Section B
                </p>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0f1f38] tracking-tight">
                  Parent-Network Historical Track Record
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Archival coaching benchmarks achieved within the Hanchinmani Institutes network (Dharwad Heritage).
                </p>
              </div>
              <ContentStatusBadge status={VerificationStatus.CLIENT_APPROVAL_REQUIRED} />
            </div>
          </div>

          {/* Mandatory Attribution Warning Banner */}
          <div className="p-4 sm:p-5 rounded-xl bg-amber-50 border border-amber-200 space-y-2">
            <div className="flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-amber-950">
                  Mandatory Attribution & Contextual Reference Notice
                </h3>
                <p className="text-xs text-amber-900 leading-relaxed">
                  Historical examination records from the Hanchinmani Institutes parent network (Dharwad) do <strong>NOT</strong> represent
                  the performance of the NPS–Hanchinmani Academic Alliance or the Kalaburagi campus. These records are cataloged
                  under <strong>CLIENT_APPROVAL_REQUIRED</strong> (SRC-08) and are withheld from public card publication pending
                  formal client executive authorization.
                </p>
              </div>
            </div>
          </div>

          {/* If client approval is required and has not been obtained, suppress from public result cards */}
          {publishableHistoricalRecords.length === 0 ? (
            <Card variant="standard">
              <CardBody className="p-6 sm:p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200">
                    <Clock className="w-6 h-6 text-amber-700" aria-hidden="true" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold font-serif text-slate-900">
                      Historical Parent-Network Benchmarks Awaiting Client Sign-Off
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                      Historical parent-network examination records require client sign-off before public publication.
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Coaching benchmarks and public disclosures from the Hanchinmani Institutes parent network
                      (Dharwad heritage) are archived in the internal data registry under <code>CLIENT_APPROVAL_REQUIRED</code>.
                      In compliance with verification governance, individual result cards are withheld from public display
                      until formal written authorization and attribution sign-off are received.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                  <p className="leading-relaxed">
                    <strong>Strict Attribution Rule:</strong> Historical parent-network achievements are not
                    alliance results and will never be aggregated into an alliance selection percentage or combined institutional score.
                  </p>
                </div>
              </CardBody>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publishableHistoricalRecords.map((result) => (
                <Card key={result.id} variant="standard" className="flex flex-col justify-between border-slate-200">
                  <CardBody className="p-5 sm:p-6 space-y-4">
                    <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-3">
                      <div>
                        <span className="text-[11px] font-mono font-semibold uppercase text-slate-500 block">
                          Examination
                        </span>
                        <h4 className="text-base font-serif font-bold text-[#0f1f38]">
                          {result.examName}
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300 shrink-0">
                        Approval Required
                      </span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] font-mono font-semibold uppercase text-slate-500 block">
                        Achievement / Benchmark
                      </span>
                      <p className="text-xl font-serif font-bold text-slate-900">
                        {result.scoreOrRankMetric}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                      <div>
                        <span className="font-semibold text-slate-800 block">Attribution:</span>
                        <span>{result.attributableBody}</span>
                      </div>

                      {result.collegeOrBatchNote && (
                        <div>
                          <span className="font-semibold text-slate-800 block">Campus / Network:</span>
                          <span>{result.collegeOrBatchNote}</span>
                        </div>
                      )}

                      <div className="p-2 rounded bg-slate-50 border border-slate-200 text-[11px] text-slate-500 leading-normal">
                        <span className="font-semibold text-slate-700">Notice: </span>
                        {result.mandatoryAttributionNotice || 'Parent-network historical benchmark; not an alliance result.'}
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* 4. SECTION C: Pending / Awaiting Verification */}
        <section className="space-y-6" id="pending-verification">
          <div className="border-b border-slate-200 pb-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider font-semibold text-[#b8860b]">
                  Section C
                </p>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0f1f38] tracking-tight">
                  Pending & Under-Verification Audit Register
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Institutional data categories currently awaiting formal documentation or regulatory release.
                </p>
              </div>
              <ContentStatusBadge status={VerificationStatus.PENDING_VERIFICATION} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
                <span>Alliance Board Examination Results</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pre-University board examination results and distinction lists for the
                Kalaburagi campus cohort. Awaiting compilation following completion of the board examination cycle (Item H2).
              </p>
              <span className="text-[10px] font-mono text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 inline-block">
                Status: PENDING_VERIFICATION
              </span>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
                <span>Competitive Entrance Qualifications</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Entrance coaching qualification rosters and marks distributions for NEET, JEE Main, and KCET from the
                Kalaburagi batch. Awaiting formal compilation following examination releases (Item H1).
              </p>
              <span className="text-[10px] font-mono text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 inline-block">
                Status: PENDING_VERIFICATION
              </span>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
                <span>PU College Code Status</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                PU College Code: Pending Verification. Statutory affiliation documentation and examination
                centre code confirmation are awaiting client handover per Client Information Request (Item P1).
              </p>
              <span className="text-[10px] font-mono text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 inline-block">
                Status: PENDING_VERIFICATION
              </span>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#0f1f38] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-sm font-bold font-serif">
                Related Institutional Documentation
              </h3>
              <p className="text-xs text-slate-300">
                Explore institutional milestones or review our verified academic coaching programmes.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                to={ROUTES.RESULTS_ACHIEVEMENTS}
                variant="outline"
                size="sm"
                className="text-white border-slate-600 hover:bg-slate-800"
                rightIcon={<ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />}
              >
                Achievements
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
        </section>
      </div>
    </PageContainer>
  );
}
