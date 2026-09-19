/**
 * @file ExamPreparationSection.tsx
 * @description Competitive examination coaching focus section (NEET, JEE, KCET)
 * backed by verified pedagogical data and zero speculative marketing claims.
 */

import { Stethoscope, Cpu, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { EXAM_TRACKS } from '../../data/programmes';
import { Section } from '../ui/Section';
import { Card, CardHeader, CardBody } from '../ui/Card';
import { Button } from '../ui/Button';
import { ROUTES } from '../../routes/routeConfig';

export function ExamPreparationSection() {
  const tracks = [
    {
      data: EXAM_TRACKS.NEET,
      icon: Stethoscope,
      route: ROUTES.ACADEMICS_NEET,
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    },
    {
      data: EXAM_TRACKS.JEE,
      icon: Cpu,
      route: ROUTES.ACADEMICS_JEE,
      badgeColor: 'bg-blue-50 text-blue-800 border-blue-200',
    },
    {
      data: EXAM_TRACKS.KCET,
      icon: Award,
      route: ROUTES.ACADEMICS_KCET,
      badgeColor: 'bg-amber-50 text-amber-900 border-amber-200',
    },
  ];

  return (
    <Section variant="muted">
      <div className="space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-mono uppercase tracking-wider font-semibold text-[#b8860b]">
            Entrance Coaching Specializations
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Integrated NEET, JEE & KCET Preparation
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Entrance coaching is fully embedded into the regular daily college schedule. Students prepare for national and state examinations without the physical fatigue of after-hours coaching classes.
          </p>
        </div>

        {/* 3 Dedicated Exam Tracks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tracks.map((item, idx) => {
            const track = item.data;
            const Icon = item.icon;

            return (
              <Card key={idx} variant="standard" interactive className="flex flex-col justify-between">
                <div>
                  <CardHeader className="bg-slate-50/70 border-b border-slate-100 p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-white shadow-xs border border-slate-200 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#0f1f38]" aria-hidden="true" />
                      </div>
                      <span className={`text-[11px] font-mono font-semibold uppercase px-2 py-0.5 rounded border ${item.badgeColor}`}>
                        {track.examName}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-serif text-slate-900">
                        {track.fullName}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {track.academicFocus}
                      </p>
                    </div>
                  </CardHeader>

                  <CardBody className="p-5 space-y-4">
                    <div className="space-y-1.5 text-xs text-slate-600">
                      <p className="font-semibold text-slate-800">Curriculum Approach:</p>
                      <p className="leading-relaxed">{track.curriculumStructure}</p>
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                      <p className="font-semibold text-slate-800">Testing & Practice:</p>
                      <p className="leading-relaxed">{track.testingMethodology}</p>
                    </div>
                  </CardBody>
                </div>

                <div className="p-5 pt-0 border-t border-slate-100 mt-auto bg-slate-50/40">
                  <div className="pt-3">
                    <Button
                      to={item.route}
                      variant="outline"
                      size="sm"
                      className="w-full justify-between"
                      rightIcon={<ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />}
                    >
                      {track.examName} Track Details
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </Section>
  );
}
