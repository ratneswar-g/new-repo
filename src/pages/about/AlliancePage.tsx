/**
 * @file AlliancePage.tsx
 * @description Comprehensive institutional presentation of the NPS–Hanchinmani Institutes Academic Alliance.
 * Phase 6 Implementation adhering strictly to verified institutional facts, design system tokens, and route linkages.
 */

import {
  Handshake,
  Building2,
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
  GraduationCap,
  BookOpen,
} from 'lucide-react';
import { PageContainer } from '../../components/common/PageContainer';
import { Button } from '../../components/ui/Button';
import { MediaPlaceholder } from '../../components/ui/MediaPlaceholder';
import { INSTITUTIONS } from '../../data/institutions';
import { ROUTES } from '../../routes/routeConfig';

export function AlliancePage() {
  const alliance = INSTITUTIONS.ALLIANCE;

  const npsResponsibilities = [
    'Host campus facilities, classrooms, and central library',
    'Practical science laboratories complying with Karnataka Pre-University Board norms',
    'Karnataka Pre-University Board college affiliation and registration (College Code pending verification)',
    'On-campus residential hostels for outstation students',
  ];

  const hanchinmaniResponsibilities = [
    'Competitive entrance examination coaching in NEET, JEE Main, and KCET',
    'Guidance grounded in Hanchinmani Institutes’ history established in 1994',
    'Faculty instruction for competitive examination preparation',
  ];

  const allianceFocusAreas = [
    {
      icon: GraduationCap,
      title: 'Pre-University Science Education',
      description:
        'Two-year Karnataka Pre-University Board curriculum in PCMB, PCMC, and PCMS combinations.',
    },
    {
      icon: Compass,
      title: 'Competitive Entrance Coaching',
      description:
        'Preparation for national and state examinations: NEET (Medical), JEE Main (Engineering), and KCET.',
    },
    {
      icon: Building2,
      title: 'Host Campus Infrastructure',
      description:
        'Classrooms, science laboratories, library facilities, and residential hostels at Kusnoor, Kalaburagi.',
    },
    {
      icon: BookOpen,
      title: 'Academic Session Planning',
      description:
        'The alliance is focused on integrated Pre-University education and entrance examination preparation.',
    },
  ];

  return (
    <PageContainer
      title="The Academic Alliance — Educational Model"
      description={`Official presentation of the ${alliance.name}. The Academic Alliance brings together National Public School & PU College, Kalaburagi and Hanchinmani Institutes, Dharwad.`}
      canonicalPath="/about/alliance"
    >
      <div className="space-y-12">
        {/* 1. Hero / Alliance Introduction */}
        <section className="p-6 sm:p-10 rounded-2xl bg-[#0f1f38] text-white space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
              <Handshake className="w-3.5 h-3.5 text-[#d4af37]" aria-hidden="true" />
              Academic Alliance
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
              <Building2 className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
              Kalaburagi Campus
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
              <Compass className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              PU Science + NEET / JEE / KCET
            </span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
              {alliance.name}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              The Academic Alliance brings together National Public School & PU College, Kalaburagi
              and Hanchinmani Institutes, Dharwad, with an academic focus on Pre-University education
              and integrated entrance-exam preparation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              to={ROUTES.ACADEMICS_PROGRAMMES}
              variant="secondary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
            >
              Explore Academic Programmes
            </Button>
            <Button
              to={ROUTES.ADMISSIONS_ENQUIRY}
              variant="outline"
              size="md"
              className="text-white border-slate-600 hover:bg-slate-800 hover:text-white"
            >
              Admissions Enquiry
            </Button>
          </div>
        </section>

        {/* 2. Educational Scope & Rationale */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-2">
              <p className="text-xs font-mono uppercase tracking-wider font-semibold text-[#b8860b]">
                Academic Focus
              </p>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-slate-900 tracking-tight">
                Pre-University Science and Entrance Examination Preparation
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                The Academic Alliance brings together National Public School & PU College, Kalaburagi
                and Hanchinmani Institutes, Dharwad, with an academic focus on Pre-University education
                and integrated entrance-exam preparation.
              </p>
              <p>
                Students preparing for competitive examinations like NEET, JEE Main, and KCET benefit
                from receiving their Pre-University board education and competitive coaching at the
                same campus in Kalaburagi, without needing to travel outside the region.
              </p>
              <p>
                The alliance is focused on integrated Pre-University education and entrance examination
                preparation, allowing students to access laboratories, library facilities, and
                entrance coaching systematically.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#b8860b]" aria-hidden="true" />
                <h3 className="text-sm font-bold font-serif text-slate-900">
                  Key Academic Elements
                </h3>
              </div>

              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong className="text-slate-900">Pre-University Science:</strong> Karnataka Pre-University Board curriculum delivery.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong className="text-slate-900">Entrance Coaching:</strong> Preparation for NEET, JEE Main, and KCET.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong className="text-slate-900">Host Campus Facilities:</strong> Science laboratories, central library, and classrooms in Kalaburagi.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong className="text-slate-900">Hostel Accommodation:</strong> On-campus residential facilities for outstation students.
                  </span>
                </li>
              </ul>
            </div>

            <MediaPlaceholder
              category="campus"
              title="Alliance Academic Campus"
              aspectRatio="16/9"
              caption="National Public School & PU College campus, Kalaburagi."
              className="border-slate-200 shadow-xs"
            />
          </div>
        </section>

        {/* 3. Division of Institutional Responsibilities */}
        <section className="space-y-6">
          <div className="space-y-2 text-center max-w-3xl mx-auto">
            <p className="text-xs font-mono uppercase tracking-wider font-semibold text-[#b8860b]">
              Institutional Roles
            </p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-slate-900 tracking-tight">
              Division of Institutional Responsibilities
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Verified responsibilities of each participating institution in the academic alliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* NPS Kalaburagi Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200">
                    Host Campus Institution
                  </span>
                  <h3 className="text-lg font-bold font-serif text-slate-900">
                    National Public School & PU College
                  </h3>
                  <p className="text-xs text-slate-500">Kalaburagi • Sanskar Trust Gulbarga</p>
                </div>
                <Building2 className="w-8 h-8 text-[#0f1f38] shrink-0" aria-hidden="true" />
              </div>

              <div className="space-y-3 text-xs text-slate-600">
                <p className="font-semibold text-slate-800 uppercase font-mono tracking-wider text-[11px]">
                  Institutional Responsibilities:
                </p>
                <ul className="space-y-2.5">
                  {npsResponsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <Button
                  to={ROUTES.ABOUT_NPS}
                  variant="outline"
                  size="sm"
                  className="w-full justify-between"
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />}
                >
                  View NPS Kalaburagi Profile
                </Button>
              </div>
            </div>

            {/* Hanchinmani Dharwad Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200">
                    Coaching Partner
                  </span>
                  <h3 className="text-lg font-bold font-serif text-slate-900">
                    Hanchinmani Institutes
                  </h3>
                  <p className="text-xs text-slate-500">Dharwad • Shantesh Education Society</p>
                </div>
                <Compass className="w-8 h-8 text-[#b8860b] shrink-0" aria-hidden="true" />
              </div>

              <div className="space-y-3 text-xs text-slate-600">
                <p className="font-semibold text-slate-800 uppercase font-mono tracking-wider text-[11px]">
                  Coaching Responsibilities:
                </p>
                <ul className="space-y-2.5">
                  {hanchinmaniResponsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#b8860b] shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <Button
                  to={ROUTES.ABOUT_HANCHINMANI}
                  variant="outline"
                  size="sm"
                  className="w-full justify-between"
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />}
                >
                  View Hanchinmani Profile
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Academic Model Overview */}
        <section className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-mono uppercase tracking-wider font-semibold text-[#b8860b]">
              Educational Model
            </p>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 tracking-tight">
              Pre-University Education & Entrance Coaching
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              The alliance is focused on integrated Pre-University education and entrance examination preparation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {allianceFocusAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0f1f38] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#0f1f38]" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-bold font-serif text-slate-900">{area.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{area.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 5. Governance & Institutional Oversight */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-900 flex items-center justify-center shrink-0">
              <FileCheck2 className="w-5 h-5 text-amber-800" aria-hidden="true" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-bold font-serif text-slate-900">
                Governance & Institutional Oversight
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Formal alliance governance details will be published following client confirmation.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100 gap-4">
            <div className="space-y-0.5">
              <p className="text-xs font-semibold text-slate-800">
                Institutional Leadership
              </p>
              <p className="text-[11px] text-slate-500">
                Read profiles of institutional leadership and trustees.
              </p>
            </div>
            <Button to={ROUTES.ABOUT_LEADERSHIP} variant="primary" size="sm">
              View Leadership Profiles
            </Button>
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
