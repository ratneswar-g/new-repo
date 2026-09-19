/**
 * @file HeroSection.tsx
 * @description Institutional hero section for the NPS–Hanchinmani Institutes Academic Alliance.
 * Grounded in verified institutional data, providing factual academic messaging,
 * clear admission call-to-actions, and dignified media placeholders pending photographic handover.
 */

import { GraduationCap, ArrowRight, ShieldCheck, MapPin, Compass } from 'lucide-react';
import { INSTITUTIONS } from '../../data/institutions';
import { ADMISSIONS_INFORMATION } from '../../data/admissions';
import { Button } from '../ui/Button';
import { MediaPlaceholder } from '../ui/MediaPlaceholder';
import { ROUTES } from '../../routes/routeConfig';

export function HeroSection() {
  const alliance = INSTITUTIONS.ALLIANCE;
  const currentYear = ADMISSIONS_INFORMATION.academicYear;

  return (
    <section className="w-full bg-[#0f1f38] text-white border-b border-slate-800 relative overflow-hidden">
      {/* Subtle architectural grid pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#b8860b_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Institutional Statement & Call to Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Academic Year Notice */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/15 text-amber-300 text-xs font-semibold tracking-wide border border-amber-400/30">
              <GraduationCap className="w-4 h-4 text-[#d4af37]" aria-hidden="true" />
              <span>Admissions Open • Academic Year {currentYear}</span>
            </div>

            {/* Main Institutional Headline */}
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-200/90 font-mono">
                Academic Alliance
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                {alliance.name}
              </h1>
            </div>

            {/* Factual Value Proposition */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
              An academic partnership between National Public School & PU College, Kalaburagi and Hanchinmani Institutes, Dharwad. Delivering comprehensive Karnataka Pre-University Science education integrated with disciplined NEET, JEE, and KCET preparation within regular college hours.
            </p>

            {/* Verified Pillar Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
                <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" aria-hidden="true" />
                <span className="text-xs text-slate-200 font-medium">Integrated PU & Coaching</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
                <Compass className="w-4 h-4 text-[#d4af37] shrink-0" aria-hidden="true" />
                <span className="text-xs text-slate-200 font-medium">Hanchinmani Dharwad (Est. 1994)</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0" aria-hidden="true" />
                <span className="text-xs text-slate-200 font-medium">Kalaburagi Campus</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <Button
                to={ROUTES.ADMISSIONS_ENQUIRY}
                variant="secondary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
              >
                Admissions Enquiry
              </Button>
              <Button
                to={ROUTES.ACADEMICS_PROGRAMMES}
                variant="outline"
                size="lg"
                className="text-white border-slate-600 hover:bg-slate-800 hover:text-white"
              >
                Explore Programmes
              </Button>
              <Button
                to={ROUTES.ABOUT_ALLIANCE}
                variant="text"
                size="md"
                className="text-slate-300 hover:text-amber-300"
              >
                About Alliance →
              </Button>
            </div>
          </div>

          {/* Right Column: Institutional Identity Card & Intentional Media Placeholder */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-700/80 p-5 sm:p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-300/90 font-semibold">
                  Institutional Campus
                </span>
                <span className="text-[11px] text-slate-400">
                  Kusnoor, Kalaburagi
                </span>
              </div>

              {/* Standardized Media Placeholder adhering strictly to Section 6 */}
              <MediaPlaceholder
                category="campus"
                title="NPS Kalaburagi Campus & Academic Complex"
                aspectRatio="16/9"
                caption="Main academic building, laboratory wings, and residential hostels on Shahabad Road."
                className="bg-slate-950 border-slate-800"
              />

              {/* Quick Academic Summary */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-2.5 rounded bg-slate-800/50 border border-slate-700/40">
                  <p className="text-slate-400 text-[11px]">Academic Streams</p>
                  <p className="font-semibold text-white mt-0.5">PCMB • PCMC • PCMS</p>
                </div>
                <div className="p-2.5 rounded bg-slate-800/50 border border-slate-700/40">
                  <p className="text-slate-400 text-[11px]">Entrance Coaching</p>
                  <p className="font-semibold text-white mt-0.5">NEET • JEE • KCET</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
