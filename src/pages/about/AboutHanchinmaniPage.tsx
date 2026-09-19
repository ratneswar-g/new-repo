/**
 * @file AboutHanchinmaniPage.tsx
 * @description Substantive institutional profile for Hanchinmani Institutes / Shantesh Education Society, Dharwad.
 * Phase 6 Implementation adhering strictly to verified institutional facts, design system tokens, and route linkages.
 */

import {
  Compass,
  Award,
  ExternalLink,
  ShieldCheck,
  Stethoscope,
  Cpu,
  ArrowRight,
  FileCheck2,
  Calendar,
  Building,
} from 'lucide-react';
import { PageContainer } from '../../components/common/PageContainer';
import { Button } from '../../components/ui/Button';
import { MediaPlaceholder } from '../../components/ui/MediaPlaceholder';
import { INSTITUTIONS } from '../../data/institutions';
import { ROUTES } from '../../routes/routeConfig';

export function AboutHanchinmaniPage() {
  const hanchinmani = INSTITUTIONS.HANCHINMANI;

  const examSpecializations = [
    {
      title: 'NEET Preparation',
      subtitle: 'Medical Entrance Track',
      icon: Stethoscope,
      description:
        'Coaching in Physics, Chemistry, and Biology aligned with national medical entrance examination requirements.',
      route: ROUTES.ACADEMICS_NEET,
      color: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    },
    {
      title: 'JEE Main Preparation',
      subtitle: 'Engineering Entrance Track',
      icon: Cpu,
      description:
        'Coaching in Mathematics, Physics, and Chemistry for national engineering entrance examinations.',
      route: ROUTES.ACADEMICS_JEE,
      color: 'bg-blue-50 text-blue-800 border-blue-200',
    },
    {
      title: 'KCET Preparation',
      subtitle: 'Karnataka State Professional Track',
      icon: Award,
      description:
        'Coaching aligned with the Karnataka Common Entrance Test syllabus and examination format.',
      route: ROUTES.ACADEMICS_KCET,
      color: 'bg-amber-50 text-amber-900 border-amber-200',
    },
  ];

  return (
    <PageContainer
      title={`${hanchinmani.shortName} — Competitive Coaching Legacy`}
      description={`Official profile of ${hanchinmani.name}, Dharwad. Managed by ${hanchinmani.governingTrust}, established in 1994 with competitive entrance coaching.`}
      canonicalPath="/about/hanchinmani"
    >
      <div className="space-y-12">
        {/* 1. Institutional Hero Header */}
        <section className="p-6 sm:p-10 rounded-2xl bg-[#0f1f38] text-white space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
              <Compass className="w-3.5 h-3.5 text-[#d4af37]" aria-hidden="true" />
              Academic Coaching Partner
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
              <Calendar className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
              Founded in 1994 (30+ Years Legacy)
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
              <Building className="w-3.5 h-3.5 text-purple-400" aria-hidden="true" />
              Headquarters: Dharwad, Karnataka
            </span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
              {hanchinmani.name}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Managed by <strong className="text-white">{hanchinmani.governingTrust}</strong>,
              Hanchinmani Institutes, Dharwad has a long-standing history of competitive entrance-exam
              coaching, established in 1994, offering preparation for NEET, JEE Main, and KCET.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-xs">
            <div className="space-y-1">
              <p className="text-slate-400 uppercase font-mono tracking-wider font-semibold">
                Sponsoring Body
              </p>
              <p className="text-white font-medium">{hanchinmani.governingTrust}</p>
            </div>
            <div className="space-y-1">
              <p className="text-slate-400 uppercase font-mono tracking-wider font-semibold">
                Headquarters
              </p>
              <p className="text-white font-medium">Attikolla, Near Nuggikeri, Dharwad</p>
            </div>
            <div className="space-y-1">
              <p className="text-slate-400 uppercase font-mono tracking-wider font-semibold">
                Alliance Role
              </p>
              <p className="text-white font-medium">Competitive Entrance Coaching Partner</p>
            </div>
          </div>
        </section>

        {/* 2. Coaching Legacy & Institutional Background */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-2">
              <p className="text-xs font-mono uppercase tracking-wider font-semibold text-[#b8860b]">
                Institutional Background
              </p>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-slate-900 tracking-tight">
                History of Competitive Entrance Coaching
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                Hanchinmani Institutes, Dharwad has a long-standing history of competitive entrance-exam
                coaching, established in 1994.
              </p>
              <p>
                Managed under Shantesh Education Society, Dharwad, the institution has guided students
                preparing for national and state entrance examinations, focusing on NEET, JEE Main,
                and KCET.
              </p>
              <p>
                Through the Academic Alliance with National Public School & PU College, Kalaburagi,
                this coaching experience is integrated with Pre-University Science education for
                students at the Kalaburagi campus.
              </p>
            </div>

            {/* Strategic Alliance Contribution Card */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#b8860b]" aria-hidden="true" />
                <h3 className="text-xs font-mono uppercase font-bold text-slate-900 tracking-wider">
                  Role in the Academic Alliance
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hanchinmani Institutes provides competitive entrance coaching and guidance for NEET,
                JEE Main, and KCET preparation at the Kalaburagi host campus.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <MediaPlaceholder
              category="campus"
              title="Hanchinmani Academic Archives"
              aspectRatio="4/3"
              caption="Hanchinmani Institutes academic network headquarters, Dharwad."
              className="border-slate-200 shadow-xs"
            />

            {/* Quick Facts Card */}
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-sm font-bold font-serif text-slate-900 border-b border-slate-100 pb-2">
                Institutional Snapshot
              </h3>
              <dl className="space-y-2.5 text-xs">
                <div className="flex justify-between">
                  <dt className="text-slate-500 font-medium">Founding Trust:</dt>
                  <dd className="font-semibold text-slate-900 text-right">
                    {hanchinmani.governingTrust}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500 font-medium">Year Established:</dt>
                  <dd className="font-semibold text-slate-900 text-right">
                    {hanchinmani.establishedYear} (30+ Years)
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500 font-medium">Headquarters:</dt>
                  <dd className="font-semibold text-slate-900 text-right">Dharwad, Karnataka</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500 font-medium">Core Specializations:</dt>
                  <dd className="font-semibold text-slate-900 text-right">NEET, JEE Main, KCET</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500 font-medium">Official Website:</dt>
                  <dd className="font-semibold text-slate-900 text-right">
                    <a
                      href={hanchinmani.officialWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#b8860b] hover:underline"
                    >
                      hanchinmanicollege.com
                      <ExternalLink className="w-3 h-3" aria-hidden="true" />
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* 3. Entrance Exam Tracks */}
        <section className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-mono uppercase tracking-wider font-semibold text-[#b8860b]">
              Exam Specializations
            </p>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 tracking-tight">
              Competitive Entrance Tracks
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              Hanchinmani Institutes, Dharwad has a long-standing history of competitive entrance-exam coaching,
              established in 1994, preparing students for NEET, JEE Main, and KCET.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {examSpecializations.map((track, idx) => {
              const Icon = track.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#0f1f38]" aria-hidden="true" />
                      </div>
                      <span
                        className={`text-[11px] font-mono font-semibold uppercase px-2 py-0.5 rounded border ${track.color}`}
                      >
                        {track.subtitle}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold font-serif text-slate-900">{track.title}</h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {track.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <Button
                      to={track.route}
                      variant="outline"
                      size="sm"
                      className="w-full justify-between"
                      rightIcon={<ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />}
                    >
                      Explore {track.title.split(' ')[0]} Track
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. Historical Track Record Governance Statement */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0f1f38] flex items-center justify-center shrink-0">
              <FileCheck2 className="w-5 h-5 text-[#0f1f38]" aria-hidden="true" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-bold font-serif text-slate-900">
                Academic Results & Verification Disclosure
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Historical examination achievements and records from the Dharwad coaching network
                pertain to Hanchinmani Institutes' independent operations and are archived under its
                parent institutional governance. Official performance records for the Kalaburagi
                alliance will be published following authorized institutional verification.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100 gap-4">
            <div className="space-y-0.5">
              <p className="text-xs font-semibold text-slate-800">
                Institutional Leadership & Academic Alliance
              </p>
              <p className="text-[11px] text-slate-500">
                View leadership profiles and alliance information.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button to={ROUTES.ABOUT_LEADERSHIP} variant="outline" size="sm">
                Leadership Profiles
              </Button>
              <Button to={ROUTES.ABOUT_ALLIANCE} variant="primary" size="sm">
                About the Alliance
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
