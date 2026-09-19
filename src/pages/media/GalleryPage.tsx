/**
 * @file GalleryPage.tsx
 * @description Official photographic and campus media catalog for the NPS–Hanchinmani Academic Alliance.
 * Strictly adheres to the zero-fabrication mandate: renders structured architectural placeholders
 * and explicit asset verification metadata pending client handover of high-resolution campus photography.
 */

import { useState } from 'react';
import {
  Camera,
  ShieldCheck,
  Building2,
  BookOpen,
  FlaskConical,
  Laptop,
  Home,
  Trophy,
  Calendar,
  Layers,
  ArrowRight,
  FileCheck,
  Clock,
  MapPin,
} from 'lucide-react';
import { PageContainer } from '../../components/common/PageContainer';
import { ContentStatusBadge } from '../../components/common/ContentStatusBadge';
import { Card, CardBody } from '../../components/ui/Card';
import { MediaPlaceholder } from '../../components/ui/MediaPlaceholder';
import { CAMPUS_GALLERY_ITEMS, GALLERY_METADATA } from '../../data/gallery';
import { VerificationStatus } from '../../types/verification';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routeConfig';

type FilterCategory = 'all' | 'campus' | 'classrooms' | 'laboratories' | 'library' | 'hostel' | 'sports' | 'events';

interface CategoryFilterOption {
  id: FilterCategory;
  label: string;
  icon: typeof Building2;
}

const FILTER_OPTIONS: CategoryFilterOption[] = [
  { id: 'all', label: 'All Media Slots', icon: Layers },
  { id: 'campus', label: 'Campus & Architecture', icon: Building2 },
  { id: 'classrooms', label: 'Smart Classrooms', icon: BookOpen },
  { id: 'laboratories', label: 'Laboratories', icon: FlaskConical },
  { id: 'library', label: 'Central Library', icon: BookOpen },
  { id: 'hostel', label: 'Residential Hostels', icon: Home },
  { id: 'sports', label: 'Sports & Grounds', icon: Trophy },
  { id: 'events', label: 'Events & Seminars', icon: Calendar },
];

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');

  const filteredItems = activeCategory === 'all'
    ? CAMPUS_GALLERY_ITEMS
    : CAMPUS_GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <PageContainer
      title="Gallery"
      description="Visual catalog and infrastructure media for National Public School & PU College Kalaburagi campus, laboratories, hostel blocks, and academic sessions."
      canonicalPath="/media/gallery"
    >
      <div className="space-y-12">
        {/* 1. Header Hero Section */}
        <section className="p-6 sm:p-10 rounded-2xl bg-[#0f1f38] text-white space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
              <Camera className="w-3.5 h-3.5 text-[#d4af37]" aria-hidden="true" />
              Official Media Catalog
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              Verified Institutional Photography Only
            </span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
              Campus & Infrastructure Photo Gallery
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Official photographic documentation of the National Public School & PU College campus,
              academic laboratories, digital lecture halls, and residential hostel infrastructure
              on Shahabad Road, Kalaburagi.
            </p>
          </div>
        </section>

        {/* 2. Institutional Media Governance Notice */}
        <section className="space-y-4" id="gallery-governance">
          <Card variant="standard" className="border-l-4 border-l-[#b8860b]">
            <CardBody className="p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[#0f1f38] font-serif font-bold text-lg">
                  <FileCheck className="w-5 h-5 text-[#b8860b]" aria-hidden="true" />
                  <h2>Photographic Asset Handover Status</h2>
                </div>
                <ContentStatusBadge status={GALLERY_METADATA.status} sources={GALLERY_METADATA.sources} />
              </div>

              <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p className="font-semibold text-slate-900">
                  Official campus photography pending client handover.
                </p>
                <p className="text-xs sm:text-sm text-slate-600">
                  In strict compliance with the institutional zero-fabrication mandate, this gallery
                  displays structured architectural media slots rather than artificial mockups or generic stock
                  photography. Each slot represents an audited facility at the Kalaburagi campus, formally cataloged
                  in the Official Asset Register (AST-04 through AST-13) and awaiting delivery of high-resolution,
                  authenticated client photography.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-500 font-mono">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
                  Asset Register Status: PENDING_CLIENT_HANDOVER
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#0f1f38]" aria-hidden="true" />
                  Location: NH 150 Shahabad Road, Kalaburagi
                </span>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* 3. Category Filter Buttons */}
        <section className="space-y-6" id="gallery-filters">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0f1f38] tracking-tight">
              Facility Categories
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Select a facility domain to inspect scheduled architectural media slots.
            </p>
          </div>

          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Gallery category filters">
            {FILTER_OPTIONS.map((filter) => {
              const Icon = filter.icon;
              const isActive = activeCategory === filter.id;
              const count = filter.id === 'all'
                ? CAMPUS_GALLERY_ITEMS.length
                : CAMPUS_GALLERY_ITEMS.filter((item) => item.category === filter.id).length;

              return (
                <button
                  key={filter.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(filter.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#b8860b] ${
                    isActive
                      ? 'bg-[#0f1f38] text-white shadow-sm'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#d4af37]' : 'text-slate-500'}`} aria-hidden="true" />
                  <span>{filter.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* 4. Gallery Grid */}
        <section className="space-y-6" id="gallery-media-grid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} variant="standard" className="flex flex-col h-full overflow-hidden">
                {/* Media Component */}
                <div className="p-3 bg-slate-50/70 border-b border-slate-200/70">
                  <MediaPlaceholder
                    category={item.category}
                    title={item.title}
                    caption={item.caption}
                    pendingNotice={item.pendingNotice}
                    aspectRatio="16/9"
                  />
                </div>

                {/* Card Information */}
                <CardBody className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                        {item.category}
                      </span>
                      {item.assetCode && (
                        <span className="text-[10px] font-mono text-slate-500">
                          {item.assetCode}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-serif font-bold text-[#0f1f38] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>

                  {/* Attribution & Location */}
                  <div className="pt-3 border-t border-slate-100 space-y-2 text-[11px] text-slate-500">
                    {item.campusLocation && (
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                        <span>{item.campusLocation}</span>
                      </div>
                    )}
                    {item.institutionAttribution && (
                      <div className="flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                        <span>{item.institutionAttribution}</span>
                      </div>
                    )}
                    <div className="pt-1 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-amber-700 font-semibold bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200/70">
                        Pending Client Handover
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        Audited 2026-09-18
                      </span>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>

        {/* 5. Client Photoshoot Technical Handover Specifications */}
        <section className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-6" id="handover-specifications">
          <div className="flex items-center gap-2 text-[#0f1f38] font-serif font-bold text-lg">
            <ShieldCheck className="w-5 h-5 text-[#b8860b]" aria-hidden="true" />
            <h2>Photographic Handover Protocol & Quality Standards</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Per the Client Information Request (Item O1) and the Official Asset Register, all public campus imagery
            must be authenticated originals captured on-site at National Public School & PU College, Kalaburagi.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-slate-700">
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
              <span className="font-semibold text-slate-900 block">1. Minimum Resolution</span>
              <p className="text-slate-600 leading-relaxed">
                Minimum 1920px wide in RAW, PNG, or uncompressed JPEG format for responsive desktop rendering.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
              <span className="font-semibold text-slate-900 block">2. Authentic Lab Infrastructure</span>
              <p className="text-slate-600 leading-relaxed">
                Real experimental apparatus in Physics, Chemistry, Biology, and Computer Science laboratories.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
              <span className="font-semibold text-slate-900 block">3. Residential Quarters</span>
              <p className="text-slate-600 leading-relaxed">
                Authentic, clean documentation of separate boys and girls hostel rooms, dining hall, and hygiene areas.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
              <span className="font-semibold text-slate-900 block">4. Student Privacy Compliance</span>
              <p className="text-slate-600 leading-relaxed">
                Parental and institutional consent must accompany any recognizable photographs of enrolled students.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Related Navigation Links */}
        <section className="pt-6 border-t border-slate-200">
          <h3 className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-500 mb-4">
            Explore Related Campus Sections
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to={ROUTES.CAMPUS_OVERVIEW}
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors flex items-center justify-between text-xs font-semibold text-[#0f1f38]"
            >
              <span>Campus Overview</span>
              <ArrowRight className="w-4 h-4 text-[#b8860b]" aria-hidden="true" />
            </Link>
            <Link
              to={ROUTES.CAMPUS_FACILITIES}
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors flex items-center justify-between text-xs font-semibold text-[#0f1f38]"
            >
              <span>Laboratories & Facilities</span>
              <ArrowRight className="w-4 h-4 text-[#b8860b]" aria-hidden="true" />
            </Link>
            <Link
              to={ROUTES.CAMPUS_HOSTEL}
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors flex items-center justify-between text-xs font-semibold text-[#0f1f38]"
            >
              <span>Residential Hostels</span>
              <ArrowRight className="w-4 h-4 text-[#b8860b]" aria-hidden="true" />
            </Link>
            <Link
              to={ROUTES.MEDIA_NEWS_EVENTS}
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors flex items-center justify-between text-xs font-semibold text-[#0f1f38]"
            >
              <span>News & Events</span>
              <ArrowRight className="w-4 h-4 text-[#b8860b]" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
