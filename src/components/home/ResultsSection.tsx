/**
 * @file ResultsSection.tsx
 * @description Academic results governance section for the homepage.
 * Strictly adheres to Section 12 mandates: does NOT present parent-network historical
 * results as alliance results; displays a professional verification disclosure.
 */

import { Award, ShieldCheck, ArrowRight, FileCheck2 } from 'lucide-react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { ROUTES } from '../../routes/routeConfig';

export function ResultsSection() {
  return (
    <Section variant="muted">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <p className="text-xs font-mono uppercase tracking-wider font-semibold text-[#b8860b]">
            Institutional Transparency
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Academic Performance & Results Governance
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            The NPS–Hanchinmani Institutes Academic Alliance is committed to absolute factual integrity and authentic academic reporting.
          </p>
        </div>

        {/* Dignified Institutional Disclosure Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0f1f38] flex items-center justify-center shrink-0">
              <FileCheck2 className="w-6 h-6 text-[#0f1f38]" aria-hidden="true" />
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-serif text-slate-900">
                Official Results & Cohort Verifications
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Official academic results and cohort performance data for the Kalaburagi campus are pending institutional verification and will be published upon authorized release.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#b8860b] shrink-0" aria-hidden="true" />
              <p className="text-xs text-slate-600">
                <strong className="text-slate-800">Historical Benchmarks:</strong> Track record data from the Dharwad coaching network is archived separately under institutional verification standards.
              </p>
            </div>

            <Button
              to={ROUTES.RESULTS_ACADEMIC}
              variant="outline"
              size="sm"
              className="shrink-0"
              rightIcon={<ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />}
            >
              Results Documentation
            </Button>
          </div>
        </div>

      </div>
    </Section>
  );
}
