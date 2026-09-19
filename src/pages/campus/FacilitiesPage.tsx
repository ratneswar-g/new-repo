/**
 * @file FacilitiesPage.tsx
 * @description Academic laboratories, classrooms, library, and sports facilities at Kalaburagi campus.
 * Phase 8 implementation strictly grounded in verified institutional data (SRC-03, SRC-05).
 */

import {
  FlaskConical,
  Atom,
  TestTube2,
  Dna,
  Laptop,
  Library,
  Trophy,
  CheckCircle2,
  MapPin,
  FileCheck2,
  ArrowRight,
} from 'lucide-react';
import { PageContainer } from '../../components/common/PageContainer';
import { Section } from '../../components/ui/Section';
import { Card, CardBody } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { MediaPlaceholder } from '../../components/ui/MediaPlaceholder';
import { ContentStatusBadge } from '../../components/common/ContentStatusBadge';
import { CAMPUS_FACILITIES, FACILITIES_METADATA } from '../../data/facilities';
import { ROUTES } from '../../routes/routeConfig';

export function FacilitiesPage() {
  const classrooms = CAMPUS_FACILITIES.find((f) => f.id === 'fac-classrooms')!;
  const physicsLab = CAMPUS_FACILITIES.find((f) => f.id === 'fac-lab-physics')!;
  const chemistryLab = CAMPUS_FACILITIES.find((f) => f.id === 'fac-lab-chemistry')!;
  const biologyLab = CAMPUS_FACILITIES.find((f) => f.id === 'fac-lab-biology')!;
  const computerLab = CAMPUS_FACILITIES.find((f) => f.id === 'fac-lab-computer')!;
  const library = CAMPUS_FACILITIES.find((f) => f.id === 'fac-central-library')!;
  const sports = CAMPUS_FACILITIES.find((f) => f.id === 'fac-sports-athletics')!;

  const labs = [
    {
      facility: physicsLab,
      icon: Atom,
      title: 'Physics Laboratory',
      placeholderTitle: 'Physics Laboratory',
    },
    {
      facility: chemistryLab,
      icon: TestTube2,
      title: 'Chemistry Laboratory',
      placeholderTitle: 'Chemistry Laboratory',
    },
    {
      facility: biologyLab,
      icon: Dna,
      title: 'Biology Laboratory',
      placeholderTitle: 'Biology Laboratory',
    },
    {
      facility: computerLab,
      icon: Laptop,
      title: 'Computer Laboratory',
      placeholderTitle: 'Computer Laboratory',
    },
  ];

  return (
    <PageContainer
      title="Laboratories & Academic Facilities"
      description="Science laboratories, academic classrooms, library, and sports grounds at National Public School & PU College, Kalaburagi."
      canonicalPath="/campus/facilities"
    >
      <div className="space-y-12">
        {/* 1. Header Banner */}
        <section className="p-6 sm:p-10 rounded-2xl bg-[#0f1f38] text-white space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
              <FlaskConical className="w-3.5 h-3.5 text-[#d4af37]" aria-hidden="true" />
              Academic Infrastructure
            </span>
            <ContentStatusBadge status={FACILITIES_METADATA.status} />
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white">
              Laboratories & Academic Facilities
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              National Public School & PU College provides academic classrooms, science laboratories,
              a library, and sports grounds at the Kalaburagi campus.
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
              to={ROUTES.CAMPUS_HOSTEL}
              variant="outline"
              size="md"
              className="text-white border-slate-600 hover:bg-slate-800"
            >
              Residential Accommodations
            </Button>
            <Button
              to={ROUTES.ACADEMICS_PROGRAMMES}
              variant="secondary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
            >
              Academic Programmes
            </Button>
          </div>
        </section>

        {/* 2. Academic Classrooms Section */}
        <Section variant="standard">
          <div className="space-y-6">
            <div className="max-w-2xl space-y-2">
              <p className="text-xs font-mono uppercase tracking-wider font-semibold text-[#b8860b]">
                Instructional Spaces
              </p>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
                Academic Classrooms
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Classrooms supporting Pre-University science education at the Kalaburagi campus.
              </p>
            </div>

            <Card variant="standard" className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-6">
                  <MediaPlaceholder
                    category="campus"
                    title="Academic Classrooms"
                    aspectRatio="16/9"
                    caption="Official classroom photography pending client handover."
                    className="h-full rounded-none border-0 border-b lg:border-b-0 lg:border-r border-slate-200"
                  />
                </div>

                <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                      <MapPin className="w-4 h-4 text-[#b8860b]" aria-hidden="true" />
                      <span>{classrooms.locationNote}</span>
                    </div>

                    <h3 className="text-xl font-bold font-serif text-slate-900">
                      Academic Classrooms
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {classrooms.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      {classrooms.keyFeatures.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#b8860b] shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="leading-normal">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Section>

        {/* 3. Science & Computing Laboratories Grid */}
        <section className="space-y-6">
          <div className="max-w-2xl space-y-2">
            <p className="text-xs font-mono uppercase tracking-wider font-semibold text-[#b8860b]">
              Laboratory Facilities
            </p>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
              Laboratories
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Laboratories supporting science and computing education at the Kalaburagi campus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {labs.map((lab) => {
              const Icon = lab.icon;
              return (
                <Card key={lab.facility.id} variant="standard" className="flex flex-col justify-between overflow-hidden">
                  <div>
                    <MediaPlaceholder
                      category="laboratory"
                      title={lab.placeholderTitle}
                      aspectRatio="16/9"
                      caption={`Official ${lab.title} photography pending client handover.`}
                      className="rounded-b-none border-b border-slate-200"
                    />

                    <CardBody className="p-6 space-y-4">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-amber-50 border border-amber-200 text-[#b8860b]">
                          <Icon className="w-4 h-4" aria-hidden="true" />
                        </div>
                        <h3 className="text-lg font-bold font-serif text-slate-900">
                          {lab.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {lab.facility.description}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        {lab.facility.keyFeatures.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#b8860b] shrink-0 mt-0.5" aria-hidden="true" />
                            <span className="leading-snug">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardBody>
                  </div>

                  <div className="p-6 pt-0 mt-auto">
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-[11px] text-slate-500 font-mono">
                      {lab.facility.locationNote}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* 4. Library & Sports Grounds Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Library */}
          <Card variant="standard" className="overflow-hidden flex flex-col justify-between">
            <div>
              <MediaPlaceholder
                category="campus"
                title="Library"
                aspectRatio="16/9"
                caption="Official library photography pending client handover."
                className="rounded-b-none border-b border-slate-200"
              />

              <CardBody className="p-6 space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-amber-50 border border-amber-200 text-[#b8860b]">
                    <Library className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-serif text-slate-900">
                      {library.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono">
                      {library.locationNote}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {library.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {library.keyFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#b8860b] shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardBody>
            </div>

            <div className="p-6 pt-0">
              <span className="text-[11px] text-slate-400 font-mono">
                Campus library facility
              </span>
            </div>
          </Card>

          {/* Sports Grounds & Indoor Games */}
          <Card variant="standard" className="overflow-hidden flex flex-col justify-between">
            <div>
              <MediaPlaceholder
                category="campus"
                title="Sports Grounds & Indoor Games"
                aspectRatio="16/9"
                caption="Official campus grounds photography pending client handover."
                className="rounded-b-none border-b border-slate-200"
              />

              <CardBody className="p-6 space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700">
                    <Trophy className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-serif text-slate-900">
                      {sports.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono">
                      {sports.locationNote}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {sports.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {sports.keyFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardBody>
            </div>

            <div className="p-6 pt-0">
              <span className="text-[11px] text-slate-400 font-mono">
                Campus sports grounds and indoor games spaces
              </span>
            </div>
          </Card>
        </section>

        {/* 5. Photographic Asset Disclosure */}
        <section className="p-5 sm:p-6 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-600 space-y-2">
          <p className="font-semibold text-slate-900 flex items-center gap-1.5">
            <FileCheck2 className="w-4 h-4 text-[#b8860b]" aria-hidden="true" />
            Institutional Media Notice
          </p>
          <p className="leading-relaxed">
            Official high-resolution photographs of campus classrooms, laboratories, the library, and sports grounds
            are pending client handover per the Official Asset Register (AST-04 through AST-09).
            Standardized institutional placeholders are utilized to preserve structural layout without introducing unverified imagery.
          </p>
        </section>
      </div>
    </PageContainer>
  );
}
