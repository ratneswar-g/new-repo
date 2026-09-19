/**
 * @file ProgrammesPage.tsx
 * @description Substantive Academic Programmes & Stream Matrix Page.
 * Detailed presentation of the Two-Year Pre-University Science combinations (PCMB, PCMC, PCMS)
 * and Secondary Foundation Curriculum, aligned with Karnataka PU Board curriculum.
 */

import {
  GraduationCap,
  CheckCircle2,
  FileText,
  Layers,
  ArrowRight,
  FlaskConical,
  Laptop,
  Calculator,
  Microscope,
  Calendar,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import { PageContainer } from '../../components/common/PageContainer';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { ACADEMIC_PROGRAMMES } from '../../data/programmes';
import { INSTITUTIONS } from '../../data/institutions';
import { ROUTES } from '../../routes/routeConfig';

export function ProgrammesPage() {
  const nps = INSTITUTIONS.NPS;
  const hanchinmani = INSTITUTIONS.HANCHINMANI;

  const puScienceProgrammes = ACADEMIC_PROGRAMMES.filter((p) => p.category === 'pu_science');
  const foundationProgramme = ACADEMIC_PROGRAMMES.find((p) => p.category === 'foundation');

  return (
    <PageContainer
      title="Academic Programmes — PU Science Combinations"
      description="Two-year Pre-University Science combinations (PCMB, PCMC, PCMS) affiliated with the Karnataka Pre-University Board with integrated NEET, JEE, and KCET preparation."
      canonicalPath="/academics/programmes"
    >
      <div className="space-y-12">
        {/* 1. Header Hero */}
        <section className="p-6 sm:p-10 rounded-2xl bg-[#0f1f38] text-white space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
              <GraduationCap className="w-3.5 h-3.5 text-[#d4af37]" aria-hidden="true" />
              Pre-University Science
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
              Karnataka Board Code: {nps.puCollegeCode}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
              2-Year Integrated Model
            </span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
              Pre-University Science Stream Architecture
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              National Public School & PU College, Kalaburagi offers two-year senior-secondary science streams
              governed by the Department of School Education (PUC Division), Government of Karnataka.
              Each stream incorporates specialized competitive coaching delivered by {hanchinmani.name}, Dharwad.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              to={ROUTES.ADMISSIONS_ENQUIRY}
              variant="secondary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
            >
              Apply for Stream Admission
            </Button>
            <Button
              to={ROUTES.ACADEMICS}
              variant="outline"
              size="md"
              className="border-slate-600 text-white hover:bg-slate-800"
            >
              Academics Overview
            </Button>
          </div>
        </section>

        {/* 2. Stream Matrix Quick Comparison */}
        <section className="space-y-4">
          <div className="space-y-1">
            <p className="text-xs font-mono uppercase tracking-wider font-semibold text-[#b8860b]">
              Stream Matrix
            </p>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0f1f38]">
              Pre-University Combinations & Pathways
            </h2>
            <p className="text-slate-600 text-sm">
              Standard 2-year senior-secondary curriculum options leading to II PUC Board Certification and competitive entrance readiness.
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs font-mono uppercase text-slate-700">
                  <th className="p-4">Stream Code</th>
                  <th className="p-4">Combination Title</th>
                  <th className="p-4">Core Subjects</th>
                  <th className="p-4">Competitive Exam Tracks</th>
                  <th className="p-4">Duration</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-4 font-mono font-bold text-[#0f1f38]">PCMB</td>
                  <td className="p-4 font-serif font-medium text-slate-900">Physics, Chemistry, Mathematics, Biology</td>
                  <td className="p-4 text-xs text-slate-600">Physics, Chemistry, Mathematics, Biology</td>
                  <td className="p-4">
                    <span className="inline-flex gap-1 flex-wrap">
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-mono">NEET</span>
                      <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200 text-xs font-mono">KCET</span>
                      <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200 text-xs font-mono">JEE Main</span>
                    </span>
                  </td>
                  <td className="p-4 text-xs font-mono text-slate-600">2 Years</td>
                  <td className="p-4">
                    <Button to={ROUTES.ACADEMICS_NEET} variant="outline" size="sm">
                      NEET Track
                    </Button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-4 font-mono font-bold text-[#0f1f38]">PCMC</td>
                  <td className="p-4 font-serif font-medium text-slate-900">Physics, Chemistry, Mathematics, Computer Science</td>
                  <td className="p-4 text-xs text-slate-600">Physics, Chemistry, Mathematics, Computer Science</td>
                  <td className="p-4">
                    <span className="inline-flex gap-1 flex-wrap">
                      <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200 text-xs font-mono">JEE Main</span>
                      <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200 text-xs font-mono">KCET</span>
                    </span>
                  </td>
                  <td className="p-4 text-xs font-mono text-slate-600">2 Years</td>
                  <td className="p-4">
                    <Button to={ROUTES.ACADEMICS_JEE} variant="outline" size="sm">
                      JEE Track
                    </Button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-4 font-mono font-bold text-[#0f1f38]">PCMS</td>
                  <td className="p-4 font-serif font-medium text-slate-900">Physics, Chemistry, Mathematics, Statistics</td>
                  <td className="p-4 text-xs text-slate-600">Physics, Chemistry, Mathematics, Statistics</td>
                  <td className="p-4">
                    <span className="inline-flex gap-1 flex-wrap">
                      <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200 text-xs font-mono">KCET</span>
                      <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200 text-xs font-mono">JEE Main</span>
                    </span>
                  </td>
                  <td className="p-4 text-xs font-mono text-slate-600">2 Years</td>
                  <td className="p-4">
                    <Button to={ROUTES.ACADEMICS_KCET} variant="outline" size="sm">
                      KCET Track
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. Detailed Stream Breakdown Cards */}
        <section className="space-y-8">
          <div className="space-y-1">
            <p className="text-xs font-mono uppercase tracking-wider font-semibold text-[#b8860b]">
              Curricular Deep-Dive
            </p>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0f1f38]">
              Comprehensive Stream Specifications
            </h2>
          </div>

          <div className="space-y-8">
            {puScienceProgrammes.map((prog) => (
              <Card key={prog.id} className="p-6 sm:p-8 border-slate-200 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold uppercase px-2.5 py-0.5 rounded bg-[#0f1f38] text-amber-300">
                        {prog.slug.toUpperCase()}
                      </span>
                      <span className="text-xs font-mono text-slate-500">Board Code: {nps.puCollegeCode}</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-[#0f1f38]">
                      {prog.title}
                    </h3>
                  </div>
                  <div className="text-xs font-mono text-slate-600 bg-slate-50 px-3 py-1.5 rounded border border-slate-200 shrink-0">
                    Duration: {prog.durationYears} Years (I & II PUC)
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-sm">
                  <div className="lg:col-span-7 space-y-4">
                    <div>
                      <h4 className="text-xs font-mono font-semibold uppercase text-slate-700 tracking-wider mb-1">
                        Programme Overview
                      </h4>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {prog.overview}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono font-semibold uppercase text-slate-700 tracking-wider mb-2">
                        Curriculum Highlights
                      </h4>
                      <ul className="space-y-2 text-xs text-slate-600">
                        {prog.curriculumHighlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:col-span-5 space-y-4 bg-slate-50/80 p-5 rounded-xl border border-slate-200/80 text-xs">
                    <div>
                      <p className="font-mono font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Target Examinations
                      </p>
                      <p className="text-slate-600 leading-relaxed">{prog.targetExam}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-200">
                      <p className="font-mono font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Eligibility Criteria
                      </p>
                      <p className="text-slate-600 leading-relaxed">{prog.eligibility}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-200">
                      <p className="font-mono font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Delivery Framework
                      </p>
                      <p className="text-slate-600 leading-relaxed">{prog.scheduleFormat}</p>
                    </div>

                    <div className="pt-3">
                      <Button
                        to={ROUTES.ADMISSIONS_ENQUIRY}
                        variant="primary"
                        size="sm"
                        className="w-full justify-center"
                        rightIcon={<ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />}
                      >
                        Enquire for {prog.slug.toUpperCase()}
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* 4. Secondary Academic Foundation (Classes 8-10) */}
        {foundationProgramme && (
          <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold uppercase px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200">
                  Secondary Foundation
                </span>
                <h3 className="text-xl font-serif font-bold text-[#0f1f38]">
                  {foundationProgramme.title}
                </h3>
              </div>
              <div className="text-xs font-mono text-slate-600 bg-slate-50 px-3 py-1.5 rounded border border-slate-200 shrink-0">
                Duration: {foundationProgramme.durationYears} Years (Classes VIII–X)
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-sm">
              <div className="lg:col-span-7 space-y-4">
                <p className="text-slate-600 leading-relaxed text-sm">
                  {foundationProgramme.overview}
                </p>
                <div>
                  <h4 className="text-xs font-mono font-semibold uppercase text-slate-700 tracking-wider mb-2">
                    Foundation Focus Areas
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {foundationProgramme.curriculumHighlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3 text-xs">
                <div>
                  <p className="font-mono font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Target Scope
                  </p>
                  <p className="text-slate-600">{foundationProgramme.targetExam}</p>
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <p className="font-mono font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Eligibility
                  </p>
                  <p className="text-slate-600">{foundationProgramme.eligibility}</p>
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <p className="font-mono font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Schedule Format
                  </p>
                  <p className="text-slate-600">{foundationProgramme.scheduleFormat}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 5. Laboratory & Practical Science Infrastructure */}
        <section className="space-y-6">
          <div className="space-y-1">
            <p className="text-xs font-mono uppercase tracking-wider font-semibold text-[#b8860b]">
              Practical Pedagogy
            </p>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0f1f38]">
              Laboratory Infrastructure & Practical Coursework
            </h2>
            <p className="text-slate-600 text-sm">
              All Pre-University Science combinations feature mandatory practical laboratory coursework aligned with the Karnataka State PU Board examination guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="p-5 space-y-3 border-slate-200">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-800 border border-blue-200 flex items-center justify-center">
                <FlaskConical className="w-4 h-4" aria-hidden="true" />
              </div>
              <h4 className="text-base font-serif font-bold text-[#0f1f38]">Physics Laboratory</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Apparatus for mechanics, optics, electricity, magnetism, and board practical experiments.
              </p>
            </Card>

            <Card className="p-5 space-y-3 border-slate-200">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center">
                <FlaskConical className="w-4 h-4" aria-hidden="true" />
              </div>
              <h4 className="text-base font-serif font-bold text-[#0f1f38]">Chemistry Laboratory</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Equipped for volumetric analysis, qualitative salt analysis, and organic functional group identification.
              </p>
            </Card>

            <Card className="p-5 space-y-3 border-slate-200">
              <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-800 border border-purple-200 flex items-center justify-center">
                <Microscope className="w-4 h-4" aria-hidden="true" />
              </div>
              <h4 className="text-base font-serif font-bold text-[#0f1f38]">Biology Laboratory</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Microscopic slide preparation, botanical specimens, and anatomical physiology demonstrations.
              </p>
            </Card>

            <Card className="p-5 space-y-3 border-slate-200">
              <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-800 border border-slate-300 flex items-center justify-center">
                <Laptop className="w-4 h-4" aria-hidden="true" />
              </div>
              <h4 className="text-base font-serif font-bold text-[#0f1f38]">Computer Science Lab</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Networked computing systems supporting the Pre-University Computer Science syllabus and practical curriculum.
              </p>
            </Card>
          </div>
        </section>

        {/* 6. Institutional Disclosures & Admissions Link */}
        <section className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1 max-w-2xl">
            <h3 className="text-base font-serif font-bold text-[#0f1f38]">
              Admissions, Intake & Fee Information
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Admission to all Pre-University combinations is merit-based, following completion of Class X examinations.
              Fee structures and subject combinations are processed through the official campus admissions desk.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Button to={ROUTES.ADMISSIONS_PROCESS} variant="outline" size="sm">
              Admission Process
            </Button>
            <Button to={ROUTES.ADMISSIONS_ENQUIRY} variant="primary" size="sm">
              Enquiry Form
            </Button>
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
