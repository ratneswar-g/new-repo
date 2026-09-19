/**
 * @file AllianceIntroSection.tsx
 * @description Introduces the foundational alliance between NPS Kalaburagi and Hanchinmani Institutes.
 * Strictly adheres to verified facts without speculative governance or unverified founding dates.
 */

import { BookOpen, Layers, Clock, ArrowRight } from 'lucide-react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Card, CardBody } from '../ui/Card';
import { ROUTES } from '../../routes/routeConfig';

export function AllianceIntroSection() {
  const allianceFeatures = [
    {
      icon: Clock,
      title: 'Integrated College Schedule',
      description:
        'Pre-University Board syllabus and competitive entrance coaching are conducted within regular college hours, eliminating the need for separate evening tuition.',
    },
    {
      icon: Layers,
      title: 'Coaching Legacy',
      description:
        'Backed by over 30 years of competitive coaching legacy from Dharwad (established 1994), providing structured preparation for NEET, JEE, and KCET.',
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Preparation',
      description:
        'Integrated curriculum directly covering Karnataka State PU Board requirements alongside national syllabus benchmarks for NEET, JEE Main, and KCET.',
    },
  ];

  return (
    <Section variant="standard">
      <div className="space-y-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-mono uppercase tracking-wider font-semibold text-[#b8860b]">
            Educational Collaboration
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            An Integrated Model for Pre-University Science
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            The NPS–Hanchinmani Institutes Academic Alliance combines the modern campus, laboratory facilities, and school environment of National Public School & PU College, Kalaburagi with the specialized entrance coaching methodology of Hanchinmani Institutes, Dharwad.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {allianceFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Card key={idx} variant="standard" interactive>
                <CardBody className="p-6 space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0f1f38] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#0f1f38]" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-serif">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardBody>
              </Card>
            );
          })}
        </div>

        {/* Action Link to Full Alliance Details */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-xl bg-slate-50 border border-slate-200 gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-900">
              Learn more about the academic alliance and institutional background
            </h4>
            <p className="text-xs text-slate-600">
              Read how the two institutions collaborate on faculty deployment, examination scheduling, and student development.
            </p>
          </div>
          <Button
            to={ROUTES.ABOUT_ALLIANCE}
            variant="outline"
            size="md"
            rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
          >
            About the Alliance
          </Button>
        </div>

      </div>
    </Section>
  );
}
