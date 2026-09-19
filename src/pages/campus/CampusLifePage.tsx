/**
 * @file CampusLifePage.tsx
 * @description Campus facilities and environment at Kalaburagi campus.
 * Phase 8 implementation strictly grounded in verified institutional data (SRC-03, SRC-05).
 */

import {
  GraduationCap,
  BookOpen,
  FlaskConical,
  Library,
  Trophy,
  ArrowRight,
  Info,
} from 'lucide-react';
import { PageContainer } from '../../components/common/PageContainer';
import { Section } from '../../components/ui/Section';
import { Card, CardBody } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { MediaPlaceholder } from '../../components/ui/MediaPlaceholder';
import { ContentStatusBadge } from '../../components/common/ContentStatusBadge';
import { RESIDENTIAL_STATUS_NOTICE } from '../../data/facilities';
import { ROUTES } from '../../routes/routeConfig';
import { VerificationStatus } from '../../types/verification';

export function CampusLifePage() {
  const verifiedCampusAreas = [
    {
      icon: BookOpen,
      title: 'Pre-University Education',
      description:
        'Classrooms supporting Pre-University science combinations (PCMB, PCMC, PCMS) at the Kalaburagi campus.',
    },
    {
      icon: FlaskConical,
      title: 'Laboratories',
      description:
        'Dedicated laboratories for Physics, Chemistry, Biology, and Computer Science.',
    },
    {
      icon: Library,
      title: 'Library',
      description:
        'Central library facility providing academic textbooks and reference reading materials.',
    },
    {
      icon: Trophy,
      title: 'Sports Grounds & Indoor Games',
      description:
        'Sports grounds and indoor games spaces at the Kalaburagi campus.',
    },
  ];

  return (
    <PageContainer
      title="Campus Life & Facilities"
      description="Pre-University education, laboratories, library, and sports grounds at National Public School & PU College, Kalaburagi."
      canonicalPath="/campus/life"
    >
      <div className="space-y-12">
        {/* 1. Header Banner */}
        <section className="p-6 sm:p-10 rounded-2xl bg-[#0f1f38] text-white space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
              <GraduationCap className="w-3.5 h-3.5 text-[#d4af37]" aria-hidden="true" />
              Campus Facilities
            </span>
            <ContentStatusBadge status={VerificationStatus.VERIFIED_OFFICIAL} />
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white">
              Campus & Academic Environment
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              National Public School & PU College provides instructional classrooms, science and computing laboratories,
              a central library, and sports grounds at the Kalaburagi campus.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <Button
              to={ROUTES.CAMPUS_OVERVIEW}
              variant="outline"
              size="md"
              className="text-white border-slate-600 hover:bg-slate-800"
            >
              Campus Overview
            </Button>
            <Button
              to={ROUTES.CAMPUS_FACILITIES}
              variant="secondary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
            >
              Laboratories & Facilities
            </Button>
            <Button
              to={ROUTES.CAMPUS_HOSTEL}
              variant="outline"
              size="md"
              className="text-white border-slate-600 hover:bg-slate-800"
            >
              Residential Accommodations
            </Button>
          </div>
        </section>

        {/* 2. Visual Placeholder & Campus Scope */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <MediaPlaceholder
              category="campus"
              title="Campus Environment"
              aspectRatio="16/9"
              caption="Official campus photography pending client handover."
            />
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#b8860b] font-semibold">
              <GraduationCap className="w-4 h-4" aria-hidden="true" />
              <span>Campus Infrastructure</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
              Academic and Campus Spaces
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              The Kalaburagi campus accommodates academic classrooms for Pre-University science education,
              laboratories for Physics, Chemistry, Biology, and Computer Science, a central library, and grounds for student sports.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              On-campus residential facilities are also located at the campus, with operational guidelines pending client confirmation.
            </p>
          </div>
        </div>

        {/* 3. Verified Facilities Grid */}
        <Section variant="standard">
          <div className="space-y-8">
            <div className="max-w-2xl space-y-2">
              <p className="text-xs font-mono uppercase tracking-wider font-semibold text-[#b8860b]">
                Verified Infrastructure
              </p>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
                Campus Facilities
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Facilities available at the Kalaburagi campus.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {verifiedCampusAreas.map((area, idx) => {
                const Icon = area.icon;
                return (
                  <Card key={idx} variant="standard" className="p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-[#b8860b]">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <h3 className="text-base font-bold font-serif text-slate-900">
                        {area.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {area.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </Section>

        {/* 4. Residential Accommodation Disclosure */}
        <section className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-amber-100 text-amber-800 shrink-0 mt-0.5">
              <Info className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold font-serif text-slate-900">
                  Residential Accommodations
                </h3>
                <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200">
                  Pending Client Confirmation
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                On-campus residential accommodations are maintained at the Kalaburagi campus.
              </p>
              <p className="text-xs text-amber-900 font-medium bg-amber-50 border border-amber-200/80 rounded-md p-3">
                {RESIDENTIAL_STATUS_NOTICE}
              </p>
              <div className="pt-2">
                <Button
                  to={ROUTES.CAMPUS_HOSTEL}
                  variant="outline"
                  size="sm"
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />}
                >
                  Residential Details
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Navigation & Next Steps */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base font-bold font-serif text-slate-900">
              Academic Programmes
            </h3>
            <p className="text-xs text-slate-500">
              Pre-University science combinations (PCMB, PCMC, PCMS) and entrance coaching options.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              to={ROUTES.ACADEMICS_PROGRAMMES}
              variant="secondary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
            >
              Academic Programmes
            </Button>
            <Button
              to={ROUTES.CAMPUS_FACILITIES}
              variant="outline"
              size="md"
            >
              View Facilities
            </Button>
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
