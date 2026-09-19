/**
 * @file JEEPage.tsx
 * @description Integrated JEE Pre-University Engineering Coaching Page.
 * Presents the verified academic scope, PCMC/PCMB stream integration, and institutional disclosures.
 */

import {
  Cpu,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building,
  AlertCircle,
} from 'lucide-react';
import { PageContainer } from '../../components/common/PageContainer';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { MediaPlaceholder } from '../../components/ui/MediaPlaceholder';
import { ENTRANCE_EXAM_TRACKS } from '../../data/programmes';
import { INSTITUTIONS } from '../../data/institutions';
import { ROUTES } from '../../routes/routeConfig';

export function JEEPage() {
  const jee = ENTRANCE_EXAM_TRACKS.JEE;
  const hanchinmani = INSTITUTIONS.HANCHINMANI;
  const nps = INSTITUTIONS.NPS;

  return (
    <PageContainer
      title="Integrated JEE Main Coaching — Pre-University Engineering Entrance"
      description="Two-year integrated JEE Main coaching embedded in PCMC and PCMB Pre-University streams at NPS–Hanchinmani Kalaburagi campus."
      canonicalPath="/academics/jee"
    >
      <div className="space-y-12">
        {/* 1. Hero Header */}
        <section className="p-6 sm:p-10 rounded-2xl bg-[#0f1f38] text-white space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30">
              <Cpu className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
              JEE Main Entrance Track
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
              Streams: PCMC & PCMB
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
              Karnataka Board Code: {nps.puCollegeCode}
            </span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
              Integrated JEE Main Coaching
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Entrance-exam preparation track for engineering admissions (JEE Main), integrated within the two-year
              Pre-University Science curriculum (PCMC and PCMB) at the Kalaburagi campus.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              to={ROUTES.ADMISSIONS_ENQUIRY}
              variant="secondary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
            >
              Admissions Enquiry
            </Button>
            <Button
              to={ROUTES.ACADEMICS_PROGRAMMES}
              variant="outline"
              size="md"
              className="border-slate-600 text-white hover:bg-slate-800"
            >
              View Science Combinations
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-xs">
            <div className="space-y-1">
              <p className="text-slate-400 uppercase font-mono tracking-wider font-semibold">
                Targeted Admissions
              </p>
              <p className="text-white font-medium">{jee.academicFocus}</p>
            </div>
            <div className="space-y-1">
              <p className="text-slate-400 uppercase font-mono tracking-wider font-semibold">
                Eligible Combinations
              </p>
              <p className="text-white font-medium">PCMC (Computer Science) & PCMB (Biology)</p>
            </div>
            <div className="space-y-1">
              <p className="text-slate-400 uppercase font-mono tracking-wider font-semibold">
                Curriculum Delivery
              </p>
              <p className="text-white font-medium">{jee.weeklySchedule}</p>
            </div>
          </div>
        </section>

        {/* 2. Track Architecture & Specifications */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-mono uppercase tracking-wider font-semibold text-[#b8860b]">
                Curricular Architecture
              </p>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0f1f38]">
                Programme Scope & Integration
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {jee.curriculumStructure}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-serif font-bold text-[#0f1f38]">
                Verified Programme Characteristics
              </h3>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="space-y-0.5 text-xs">
                    <strong className="text-slate-900 font-serif">Integrated Pre-University Delivery</strong>
                    <p className="text-slate-600">
                      Entrance-exam preparation integrated with the Pre-University Science curriculum.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="space-y-0.5 text-xs">
                    <strong className="text-slate-900 font-serif">Academic Stream Alignment</strong>
                    <p className="text-slate-600">
                      Offered for students enrolled in PCMC (Computer Science) and PCMB (Biology) combinations.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="space-y-0.5 text-xs">
                    <strong className="text-slate-900 font-serif">Board Curriculum Integration</strong>
                    <p className="text-slate-600">
                      Coordinated alongside the Karnataka State Pre-University Board curriculum (College Code: {nps.puCollegeCode}).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <Card className="p-6 border-slate-200 space-y-4">
              <h3 className="text-base font-serif font-bold text-[#0f1f38]">
                Track Overview Snapshot
              </h3>
              <div className="space-y-3 text-xs divide-y divide-slate-100">
                <div className="pt-2">
                  <span className="font-mono uppercase text-slate-500 block">Examination</span>
                  <span className="font-medium text-slate-900">Joint Entrance Examination (JEE Main)</span>
                </div>
                <div className="pt-2">
                  <span className="font-mono uppercase text-slate-500 block">Host Campus</span>
                  <span className="font-medium text-slate-900">{nps.name}</span>
                </div>
                <div className="pt-2">
                  <span className="font-mono uppercase text-slate-500 block">Academic Coaching</span>
                  <span className="font-medium text-slate-900">{hanchinmani.name}</span>
                </div>
                <div className="pt-2">
                  <span className="font-mono uppercase text-slate-500 block">Target Streams</span>
                  <span className="font-medium text-slate-900">PCMC (Computer Science) and PCMB</span>
                </div>
                <div className="pt-2">
                  <span className="font-mono uppercase text-slate-500 block">Programme Duration</span>
                  <span className="font-medium text-slate-900">2-Year Full-Time (I & II PUC)</span>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  to={ROUTES.ADMISSIONS_ENQUIRY}
                  variant="primary"
                  size="sm"
                  className="w-full justify-center"
                >
                  Submit Admission Enquiry
                </Button>
              </div>
            </Card>

            <MediaPlaceholder
              category="laboratory"
              title="Physics & Computer Science Facilities"
              aspectRatio="16/9"
              caption="Academic infrastructure at Kalaburagi campus supporting Pre-University science education."
            />
          </div>
        </section>

        {/* 3. Results & Governance Disclosure */}
        <section className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
            <AlertCircle className="w-4 h-4 text-[#b8860b]" aria-hidden="true" />
            Institutional Disclosures
          </div>
          <div className="text-xs text-slate-600 space-y-2 leading-relaxed">
            <p>
              • <strong>Alliance Cohort Verification:</strong> Results for the integrated engineering coaching batch at
              the Kalaburagi campus remain pending official verification and will be published following the
              graduation and official results release of the inaugural alliance cohort.
            </p>
            <p>
              • <strong>Parent Network Heritage:</strong> Historical benchmark percentiles (including JEE Main 99.45%
              and 99.12% scores) reflect verified outcomes from the Hanchinmani Institutes parent network in Dharwad
              (est. 1994), documented under SRC-08, and are pending client approval for promotional use.
            </p>
            <p>
              • <strong>Faculty & Fee Policies:</strong> Detailed faculty assignments and official fee schedules are
              provided through consultation at the campus admissions office.
            </p>
          </div>
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Button to={ROUTES.ACADEMICS_KCET} variant="outline" size="sm">
              Explore KCET State Track
            </Button>
            <Button to={ROUTES.ADMISSIONS_PROCESS} variant="outline" size="sm">
              Admission Guidelines
            </Button>
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
