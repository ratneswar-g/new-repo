/**
 * @file HostelPage.tsx
 * @description Residential accommodations at Kalaburagi campus.
 * Phase 8 implementation strictly respecting verification constraints and official disclosures.
 */

import {
  Home,
  ShieldAlert,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Info,
} from 'lucide-react';
import { PageContainer } from '../../components/common/PageContainer';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { MediaPlaceholder } from '../../components/ui/MediaPlaceholder';
import { ContentStatusBadge } from '../../components/common/ContentStatusBadge';
import { RESIDENTIAL_STATUS_NOTICE, HOSTEL_METADATA } from '../../data/facilities';
import { VERIFIED_CONTACT } from '../../data/contact';
import { ROUTES } from '../../routes/routeConfig';
import { isPublishable } from '../../utils/contentHelpers';

export function HostelPage() {
  const contact = VERIFIED_CONTACT;
  const addressPublishable = isPublishable(contact.verification);

  return (
    <PageContainer
      title="Residential Accommodations"
      description="On-campus residential facilities for enrolled students at National Public School & PU College, Kalaburagi."
      canonicalPath="/campus/hostel"
    >
      <div className="space-y-12">
        {/* 1. Header Banner */}
        <section className="p-6 sm:p-10 rounded-2xl bg-[#0f1f38] text-white space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
              <Home className="w-3.5 h-3.5 text-[#d4af37]" aria-hidden="true" />
              Campus Boarding
            </span>
            <ContentStatusBadge status={HOSTEL_METADATA.status} />
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white">
              Residential Accommodations
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              National Public School & PU College provides on-campus residential accommodations for outstation students
              enrolled in Pre-University science combinations.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <Button
              to={ROUTES.CAMPUS_OVERVIEW}
              variant="outline"
              size="md"
              className="text-white border-slate-600 hover:bg-slate-800"
            >
              Campus Overview
            </Button>
            <Button
              to={ROUTES.ADMISSIONS_ENQUIRY}
              variant="secondary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
            >
              Residential Admissions Enquiry
            </Button>
          </div>
        </section>

        {/* 2. Mandatory Institutional Confirmation Notice */}
        <section className="p-6 sm:p-8 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-amber-950 space-y-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-amber-200/70 text-amber-900 shrink-0 mt-0.5">
              <ShieldAlert className="w-5 h-5 text-amber-800" aria-hidden="true" />
            </div>
            <div className="space-y-2">
              <h2 className="text-lg font-serif font-bold text-amber-950">
                Official Verification Status
              </h2>
              <p className="text-sm font-semibold text-amber-900">
                {RESIDENTIAL_STATUS_NOTICE}
              </p>
              <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
                While the physical existence of on-campus residential accommodations at the Kalaburagi campus is acknowledged,
                operational details are subject to formal client confirmation and will be published upon authorized handover.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Verified Overview & Visual Asset Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-6">
            <Card variant="standard" className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#b8860b] font-semibold">
                <Info className="w-4 h-4" aria-hidden="true" />
                <span>Verified Facility Scope</span>
              </div>

              <h3 className="text-xl font-serif font-bold text-slate-900">
                On-Campus Student Accommodations
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                On-campus residential facilities are located at the Kalaburagi campus to accommodate students pursuing Pre-University education.
              </p>

              <div className="space-y-3 pt-3 border-t border-slate-100 text-xs text-slate-700">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                  <p className="font-semibold text-slate-900">Campus Location</p>
                  <p className="text-slate-600">
                    {addressPublishable
                      ? contact.campusAddress.fullFormatted
                      : 'Campus address pending verification.'}
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                  <p className="font-semibold text-slate-900">Admissions Information</p>
                  <p className="text-slate-600">
                    Residential inquiries are handled directly by the campus admissions office.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <MediaPlaceholder
              category="hostel"
              title="Residential Accommodations"
              aspectRatio="16/9"
              caption="Official residential accommodation photography pending client handover."
            />
            <p className="text-xs text-slate-500 italic text-center">
              Official photography pending client handover per Asset Register (AST-08).
            </p>
          </div>
        </div>

        {/* 4. Campus Admissions Desk for Inquiries */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 space-y-6">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 tracking-tight">
              Admissions Office
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Outstation parents and students seeking verified information on residential accommodations are requested to contact the admissions office.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-xs">
              <p className="font-semibold text-slate-900 flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-[#b8860b]" aria-hidden="true" />
                Helpline
              </p>
              <p className="text-slate-600 font-mono">
                {contact.phones.dedicatedPUAdmissions}
              </p>
              <p className="text-slate-500">
                Senior-Secondary Helpline
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-xs">
              <p className="font-semibold text-slate-900 flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-[#b8860b]" aria-hidden="true" />
                Admissions Email
              </p>
              <p className="text-slate-600 font-mono">
                {contact.email}
              </p>
              <p className="text-slate-500 font-mono">
                Admissions Office
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-xs">
              <p className="font-semibold text-slate-900 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#b8860b]" aria-hidden="true" />
                Campus Desk
              </p>
              <p className="text-slate-600">
                {addressPublishable
                  ? `${contact.campusAddress.landmark}, ${contact.campusAddress.city}`
                  : 'Address pending verification'}
              </p>
              <p className="text-slate-500">
                {addressPublishable ? `PIN: ${contact.campusAddress.pinCode}` : ''}
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <Button
              to={ROUTES.ADMISSIONS_ENQUIRY}
              variant="secondary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
            >
              Submit Residential Enquiry
            </Button>
            <Button
              to={ROUTES.CAMPUS_FACILITIES}
              variant="outline"
              size="md"
            >
              View Campus Facilities
            </Button>
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
