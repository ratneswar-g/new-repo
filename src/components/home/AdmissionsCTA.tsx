/**
 * @file AdmissionsCTA.tsx
 * @description Admissions call-to-action section consuming centralized data from src/data/admissions.ts.
 * Communicates admissions pathways, verified eligibility, and direct links to application forms.
 */

import { GraduationCap, ArrowRight, CheckCircle2, ClipboardCheck, PhoneCall, HelpCircle } from 'lucide-react';
import { ADMISSIONS_INFORMATION } from '../../data/admissions';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { ROUTES } from '../../routes/routeConfig';

export function AdmissionsCTA() {
  const currentYear = ADMISSIONS_INFORMATION.academicYear;

  const steps = [
    {
      step: '01',
      title: 'Submit Online Enquiry',
      description: 'Fill the official enquiry form or visit the campus admissions office on Shahabad Road.',
    },
    {
      step: '02',
      title: 'Academic Counselling',
      description: 'Meet faculty advisors to assess student goals across PCMB, PCMC, or PCMS streams.',
    },
    {
      step: '03',
      title: 'Document Verification',
      description: 'Submit previous academic records and complete admission formalities at the campus desk.',
    },
  ];

  return (
    <Section variant="feature">
      <div className="space-y-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase text-amber-900 bg-amber-100/90 px-2.5 py-1 rounded">
            <GraduationCap className="w-3.5 h-3.5 text-amber-800" aria-hidden="true" />
            Admissions • Academic Year {currentYear}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Begin Your Pre-University Academic Journey
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Applications are invited for I PUC Science streams (PCMB, PCMC, PCMS) with integrated NEET, JEE, and KCET coaching, as well as Secondary Foundation classes.
          </p>
        </div>

        {/* 3 Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-3 relative"
            >
              <span className="text-2xl font-serif font-bold text-amber-600/80">
                {item.step}
              </span>
              <h3 className="text-base font-bold font-serif text-slate-900">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Action Bar */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0f1f38] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <h3 className="text-lg font-serif font-bold text-white">
              Ready to take the next step?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Submit your details to receive counselling details and stream guidance from the admissions team.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Button
              to={ROUTES.ADMISSIONS_ENQUIRY}
              variant="secondary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
            >
              Online Enquiry Form
            </Button>
            <Button
              to={ROUTES.ADMISSIONS_PROCESS}
              variant="outline"
              size="lg"
              className="text-white border-slate-600 hover:bg-slate-800 hover:text-white"
            >
              Admissions Process
            </Button>
          </div>
        </div>

      </div>
    </Section>
  );
}
