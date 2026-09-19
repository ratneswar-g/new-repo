/**
 * @file Footer.tsx
 * @description Master institutional footer reflecting the brand design system.
 * Deep Academic Navy canvas with gold accent rules, clear navigational columns,
 * audited campus coordinates, and statutory trust disclosures.
 */

import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { FOOTER_NAVIGATION } from '../../data/navigation';
import { VERIFIED_CONTACT, INSTITUTIONS } from '../../data/institutions';

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-[#0a1526] text-slate-300 border-t-2 border-[#b8860b]">
      {/* Upper Footer: Strategic Alliance Statement & Campus Coordinates */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 lg:gap-6 xl:gap-8">
          {/* Col 1-2: Alliance Identity & Vision */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 text-white flex items-center justify-center font-serif font-bold text-lg border border-amber-400/40 shrink-0">
                NH
              </div>
              <div>
                <span className="font-serif font-bold text-white text-base sm:text-lg block leading-tight">
                  NPS–HANCHINMANI
                </span>
                <span className="text-xs text-amber-300 font-medium">
                  Academic Alliance • Kalaburagi
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {INSTITUTIONS.ALLIANCE.description}
            </p>

            {/* Verified Campus Contact Summary */}
            <div className="space-y-2 text-xs text-slate-300 pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-slate-300 leading-tight">
                  {VERIFIED_CONTACT.campusAddress.fullFormatted}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-hidden="true" />
                <span>
                  Admissions: <strong className="text-white">{VERIFIED_CONTACT.phones.dedicatedPUAdmissions}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${VERIFIED_CONTACT.email}`}
                  className="hover:text-amber-300 transition-colors"
                >
                  {VERIFIED_CONTACT.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 3-7: Dynamic Navigation Columns */}
          {FOOTER_NAVIGATION.map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300 font-mono">
                {section.title}
              </h3>
              <ul className="space-y-2 text-xs">
                {section.items.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.href}
                      className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 focus:outline-none focus:ring-1 focus:ring-amber-400 rounded"
                    >
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Governance & Trust Disclosures */}
        <div className="mt-10 pt-8 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-400">
          <div className="flex items-start gap-2.5 bg-slate-900/60 p-3.5 rounded-lg border border-slate-800">
            <ShieldCheck className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" aria-hidden="true" />
            <div>
              <strong className="text-slate-200 block">{INSTITUTIONS.NPS.name}</strong>
              <span>Managed by {INSTITUTIONS.NPS.governingTrust} (School Est. {INSTITUTIONS.NPS.establishedYear}; PU Section Inaugurated 2022).</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5 bg-slate-900/60 p-3.5 rounded-lg border border-slate-800">
            <ShieldCheck className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" aria-hidden="true" />
            <div>
              <strong className="text-slate-200 block">{INSTITUTIONS.HANCHINMANI.name}</strong>
              <span>Managed by {INSTITUTIONS.HANCHINMANI.governingTrust} (Founded {INSTITUTIONS.HANCHINMANI.establishedYear}; {INSTITUTIONS.HANCHINMANI.heritageYears}-Year Pedigree).</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Legal Strip */}
      <div className="bg-[#050c17] py-4 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 text-[11px] text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            © {currentYear} NPS–Hanchinmani Institutes Academic Alliance. All verified rights reserved.
          </div>
          <div className="flex items-center flex-wrap justify-center gap-4">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy & Terms
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">
              Campus Coordinates
            </Link>
            <span>•</span>
            <Link to="/404" className="hover:text-slate-300 transition-colors">
              System 404 View
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
