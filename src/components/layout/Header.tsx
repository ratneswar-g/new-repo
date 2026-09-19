/**
 * @file Header.tsx
 * @description Master institutional header reflecting the brand design system.
 * Features the Academic Navy utility bar with verified helpline, alliance crest lockup,
 * desktop dropdown navigation, and accessible mobile drawer trigger.
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Phone, MapPin, GraduationCap } from 'lucide-react';
import { DesktopNavigation } from './DesktopNavigation';
import { MobileNavigation } from './MobileNavigation';
import { VERIFIED_CONTACT } from '../../data/institutions';
import { ADMISSIONS_INFORMATION } from '../../data/admissions';
import { Button } from '../ui/Button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
      {/* Top Utility Bar (Deep Academic Navy) */}
      <div className="bg-[#0f1f38] text-slate-200 text-[11px] sm:text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4">
          <div className="flex items-center flex-wrap justify-center sm:justify-start gap-3 sm:gap-6">
            <div className="flex items-center gap-1.5 text-amber-300 font-medium">
              <Phone className="w-3 h-3 shrink-0" aria-hidden="true" />
              <span>Admissions Helpline: {VERIFIED_CONTACT.phones.dedicatedPUAdmissions}</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3 h-3 text-amber-400 shrink-0" aria-hidden="true" />
              <span>{VERIFIED_CONTACT.campusAddress.highway} {VERIFIED_CONTACT.campusAddress.road}, {VERIFIED_CONTACT.campusAddress.city}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
              <GraduationCap className="w-3 h-3 shrink-0" aria-hidden="true" />
              Admissions Open {ADMISSIONS_INFORMATION.academicYear}
            </span>
            <Link
              to="/admissions/enquiry"
              className="text-slate-200 hover:text-white underline underline-offset-2 transition-colors font-medium"
            >
              Enquire Online
            </Link>
          </div>
        </div>
      </div>

      {/* Primary Brand Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Institutional Alliance Brand Lockup */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#b8860b] rounded-lg p-1"
            aria-label="NPS–Hanchinmani Institutes Academic Alliance Portal Home"
          >
            {/* Crest Mark */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#0f1f38] text-white flex items-center justify-center font-serif font-bold text-base sm:text-lg border-2 border-[#b8860b] shadow-xs group-hover:bg-[#182f54] transition-colors shrink-0">
              NH
            </div>

            {/* Brand Typography */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-sm sm:text-base lg:text-lg text-[#0f1f38] leading-tight tracking-tight">
                  NPS–HANCHINMANI
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.2 rounded text-[10px] font-mono font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                  ALLIANCE
                </span>
              </div>
              <span className="text-[10px] sm:text-xs text-slate-600 font-medium tracking-normal leading-tight">
                Academic Alliance • Integrated NEET, JEE, KCET & PU Science
              </span>
            </div>
          </Link>

          {/* Desktop Navigation & Actions */}
          <div className="hidden lg:flex items-center gap-5">
            <DesktopNavigation />

            {/* CTA Button */}
            <Button
              to="/admissions/enquiry"
              variant="primary"
              size="sm"
              className="font-semibold shadow-2xs"
            >
              Admissions Desk
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              to="/admissions/enquiry"
              variant="primary"
              size="sm"
              className="text-xs px-2.5 py-1.5"
            >
              Enquire
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#b8860b]"
            >
              <Menu className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
