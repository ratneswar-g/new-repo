/**
 * @file FacilitiesSection.tsx
 * @description Campus infrastructure, practical laboratories, and residential hostel blocks
 * presentation for the homepage consuming centralized facilities data.
 */

import { Building2, ArrowRight, CheckCircle2, Home } from 'lucide-react';
import { CAMPUS_FACILITIES, HOSTEL_FACILITIES } from '../../data/facilities';
import { Section } from '../ui/Section';
import { Card, CardHeader, CardBody } from '../ui/Card';
import { Button } from '../ui/Button';
import { MediaPlaceholder } from '../ui/MediaPlaceholder';
import { ROUTES } from '../../routes/routeConfig';

export function FacilitiesSection() {
  // Select key academic facilities for homepage highlight
  const highlightFacilities = CAMPUS_FACILITIES.filter((f) =>
    ['fac-classrooms', 'fac-lab-physics', 'fac-lab-chemistry', 'fac-lab-biology', 'fac-lab-computer', 'fac-central-library'].includes(f.id)
  );

  return (
    <Section variant="standard">
      <div className="space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider font-semibold text-[#b8860b]">
              Campus Infrastructure
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Purpose-Built Learning & Research Facilities
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Located on Shahabad Road, Kusnoor, Kalaburagi. Designed to provide a focused academic environment with modern digital classrooms, PU Board laboratories, and residential facilities.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              to={ROUTES.CAMPUS_FACILITIES}
              variant="outline"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
            >
              All Facilities
            </Button>
            <Button
              to={ROUTES.CAMPUS_HOSTEL}
              variant="secondary"
              size="md"
              rightIcon={<Home className="w-4 h-4" aria-hidden="true" />}
            >
              Hostel Blocks
            </Button>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlightFacilities.map((facility) => (
            <Card key={facility.id} variant="standard" className="flex flex-col justify-between">
              <div>
                <MediaPlaceholder
                  category={facility.category === 'laboratory' ? 'laboratory' : 'campus'}
                  title={facility.name}
                  aspectRatio="16/9"
                  className="rounded-b-none border-b border-slate-200"
                />

                <CardBody className="p-5 space-y-3">
                  <h3 className="text-base font-bold font-serif text-slate-900">
                    {facility.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {facility.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    {facility.keyFeatures.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#b8860b] shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </div>

              <div className="p-5 pt-0 mt-auto">
                <span className="text-[11px] text-slate-400 block font-mono">
                  {facility.locationNote}
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* Residential Hostels Highlight Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase text-amber-300 bg-amber-500/20 px-2.5 py-1 rounded border border-amber-400/30">
                <Home className="w-3.5 h-3.5 text-[#d4af37]" aria-hidden="true" />
                Residential Campus Life
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                Residential Hostels (Boys & Girls)
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl">
                On-campus residential facilities with separate accommodation for boys and girls, furnished rooms, dedicated evening study hours, and vegetarian dining.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 space-y-1">
                  <p className="font-semibold text-white">{HOSTEL_FACILITIES.boysHostel.name}</p>
                  <p className="text-slate-400 text-[11px]">Separate block with study facilities</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 space-y-1">
                  <p className="font-semibold text-white">{HOSTEL_FACILITIES.girlsHostel.name}</p>
                  <p className="text-slate-400 text-[11px]">Separate block with study facilities</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <MediaPlaceholder
                category="hostel"
                title="Residential Hostel Blocks"
                aspectRatio="16/9"
                caption="On-campus hostel accommodations for boys and girls."
                className="bg-slate-950 border-slate-800"
              />
              <div className="flex justify-end">
                <Button
                  to={ROUTES.CAMPUS_HOSTEL}
                  variant="secondary"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
                >
                  Hostel Information
                </Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}
