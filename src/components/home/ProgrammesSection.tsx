/**
 * @file ProgrammesSection.tsx
 * @description Academic programmes presentation for the homepage consuming centralized data
 * from src/data/programmes.ts (PCMB, PCMC, PCMS, and Secondary Foundation).
 */

import { BookOpen, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PU_SCIENCE_PROGRAMMES, SECONDARY_FOUNDATION_PROGRAMME } from '../../data/programmes';
import { Section } from '../ui/Section';
import { Card, CardHeader, CardBody } from '../ui/Card';
import { Button } from '../ui/Button';
import { ROUTES } from '../../routes/routeConfig';

export function ProgrammesSection() {
  return (
    <Section variant="standard">
      <div className="space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider font-semibold text-[#b8860b]">
              Academic Offerings
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Pre-University Science Streams
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Approved Karnataka State Pre-University Board combinations, integrated daily with Hanchinmani competitive entrance training.
            </p>
          </div>

          <Button
            to={ROUTES.ACADEMICS_PROGRAMMES}
            variant="outline"
            size="md"
            rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
          >
            All Programmes
          </Button>
        </div>

        {/* 3 PU Science Combinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PU_SCIENCE_PROGRAMMES.map((prog) => (
            <Card key={prog.id} variant="standard" interactive className="flex flex-col justify-between">
              <div>
                <CardHeader className="bg-slate-50/80 border-b border-slate-100 p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold font-mono text-[#0f1f38] bg-white px-2.5 py-1 rounded border border-slate-200">
                      {prog.slug.toUpperCase()}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500">
                      {prog.durationYears}-Year PU Programme
                    </span>
                  </div>
                  <h3 className="text-base font-bold font-serif text-slate-900 mt-2">
                    {prog.title}
                  </h3>
                </CardHeader>

                <CardBody className="p-5 space-y-4">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {prog.overview}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <p className="text-[11px] font-mono font-semibold uppercase text-slate-500 tracking-wider">
                      Targeted Entrances:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {prog.coachingTracks.map((track, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-50 text-[#0f1f38] border border-blue-200/60"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#b8860b]" aria-hidden="true" />
                          {track.split(' ')[0]}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardBody>
              </div>

              <div className="p-5 pt-0 border-t border-slate-100 mt-auto bg-slate-50/40">
                <div className="pt-3">
                  <Button
                    to={ROUTES.ACADEMICS_PROGRAMMES}
                    variant="text"
                    size="sm"
                    className="p-0 text-xs font-semibold text-[#0f1f38] hover:text-[#b8860b]"
                  >
                    View Stream Curriculum →
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Secondary Foundation Preparatory Programme Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/40 border border-amber-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase text-amber-900 bg-amber-100/80 px-2.5 py-1 rounded">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" aria-hidden="true" />
                Classes 8, 9 & 10
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
                {SECONDARY_FOUNDATION_PROGRAMME.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-2xl">
                {SECONDARY_FOUNDATION_PROGRAMME.overview}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-center gap-3">
              <Button
                to={ROUTES.ACADEMICS_PROGRAMMES}
                variant="secondary"
                size="md"
              >
                Foundation Curriculum
              </Button>
              <Button
                to={ROUTES.ADMISSIONS_ENQUIRY}
                variant="outline"
                size="md"
                className="bg-white"
              >
                Enquire for Classes 8–10
              </Button>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}
