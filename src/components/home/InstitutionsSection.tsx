/**
 * @file InstitutionsSection.tsx
 * @description Introduces the two participating institutions using centralized data.
 * Maintains strict institutional scoping between the host campus and the coaching network.
 */

import { Building2, Award, ArrowRight, ExternalLink } from 'lucide-react';
import { INSTITUTIONS } from '../../data/institutions';
import { Section } from '../ui/Section';
import { Card, CardHeader, CardBody } from '../ui/Card';
import { Button } from '../ui/Button';
import { ROUTES } from '../../routes/routeConfig';

export function InstitutionsSection() {
  const nps = INSTITUTIONS.NPS;
  const hanchinmani = INSTITUTIONS.HANCHINMANI;

  return (
    <Section variant="muted">
      <div className="space-y-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-mono uppercase tracking-wider font-semibold text-[#b8860b]">
            Institutional Partners
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Two Established Institutions, One Unified Purpose
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            The alliance leverages the individual institutional strengths of each partner. National Public School provides campus infrastructure and PU Board governance, while Hanchinmani Institutes delivers its tested competitive coaching framework.
          </p>
        </div>

        {/* 2-Column Institutional Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Institution 1: NPS Kalaburagi */}
          <Card variant="standard" className="flex flex-col justify-between">
            <div>
              <CardHeader className="bg-slate-50/70 space-y-3 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#0f1f38] flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-[#0f1f38]" aria-hidden="true" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold uppercase px-2.5 py-1 rounded bg-slate-200/80 text-slate-700">
                    Host Campus & PU Board
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-serif text-slate-900">
                    {nps.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Governed by {nps.governingTrust}
                  </p>
                </div>
              </CardHeader>

              <CardBody className="space-y-4 p-6">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {nps.description}
                </p>

                <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-slate-500 font-medium">Campus Location:</span>
                    <span className="text-slate-800 text-right font-medium">{nps.campusLocation}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">School Foundation:</span>
                    <span className="text-slate-800 font-medium">{nps.establishedYear}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Facilities Provided:</span>
                    <span className="text-slate-800 font-medium">Digital Classrooms, Labs & Hostels</span>
                  </div>
                </div>
              </CardBody>
            </div>

            <div className="p-6 pt-0 border-t border-slate-100 bg-slate-50/50 mt-auto">
              <div className="flex items-center justify-between pt-4">
                <Button
                  to={ROUTES.ABOUT_NPS}
                  variant="outline"
                  size="sm"
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />}
                >
                  NPS Institutional Profile
                </Button>
                {nps.officialWebsite && (
                  <a
                    href={nps.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-[#0f1f38] transition-colors"
                  >
                    <span>npskalaburagi.com</span>
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </Card>

          {/* Institution 2: Hanchinmani Institutes, Dharwad */}
          <Card variant="standard" className="flex flex-col justify-between">
            <div>
              <CardHeader className="bg-amber-50/40 space-y-3 border-b border-amber-100">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center">
                    <Award className="w-5 h-5 text-amber-800" aria-hidden="true" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold uppercase px-2.5 py-1 rounded bg-amber-100 text-amber-900">
                    Coaching Network & Pedagogy
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-serif text-slate-900">
                    {hanchinmani.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Governed by {hanchinmani.governingTrust}
                  </p>
                </div>
              </CardHeader>

              <CardBody className="space-y-4 p-6">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {hanchinmani.description}
                </p>

                <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-slate-500 font-medium">Headquarters:</span>
                    <span className="text-slate-800 text-right font-medium">{hanchinmani.campusLocation}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Established:</span>
                    <span className="text-slate-800 font-medium">{hanchinmani.establishedYear} (30 Years Pedigree)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Alliance Role:</span>
                    <span className="text-slate-800 font-medium">Faculty Deployment & Test Framework</span>
                  </div>
                </div>
              </CardBody>
            </div>

            <div className="p-6 pt-0 border-t border-slate-100 bg-amber-50/20 mt-auto">
              <div className="flex items-center justify-between pt-4">
                <Button
                  to={ROUTES.ABOUT_HANCHINMANI}
                  variant="outline"
                  size="sm"
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />}
                >
                  Hanchinmani Legacy Profile
                </Button>
                {hanchinmani.officialWebsite && (
                  <a
                    href={hanchinmani.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-amber-800 transition-colors"
                  >
                    <span>hanchinmani.com</span>
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </Card>

        </div>

      </div>
    </Section>
  );
}
