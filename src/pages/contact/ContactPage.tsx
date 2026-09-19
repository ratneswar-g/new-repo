/**
 * @file ContactPage.tsx
 * @description Official institutional contact directory, postal coordinates, and telephony desk.
 * Directly grounded in verified institutional data (contact.ts, institutions.ts).
 * Adheres strictly to Phase 11 anti-fabrication and transparency rules:
 * - Verified Kalaburagi campus postal address.
 * - Dedicated PU admissions helpline and general campus lines.
 * - Official email desk.
 * - WhatsApp pending institutional verification notice.
 * - Transparent transit access guide without invented map URLs.
 * - Secondary institutional coordinates register for parent bodies.
 */

import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Building2,
  ShieldCheck,
  CheckCircle2,
  Navigation,
  MessageCircle,
  ArrowRight,
  Info,
  Calendar,
  Compass,
} from 'lucide-react';
import { PageContainer } from '../../components/common/PageContainer';
import { Button } from '../../components/ui/Button';
import {
  VERIFIED_CONTACT,
  INSTITUTIONAL_COORDINATES_REGISTER,
  WHATSAPP_CONTACT,
} from '../../data/contact';
import { INSTITUTIONS } from '../../data/institutions';
import { ROUTES } from '../../routes/routeConfig';
import { VerificationStatus } from '../../types/verification';

export function ContactPage() {
  const nps = INSTITUTIONS.NPS;
  const hanchinmani = INSTITUTIONS.HANCHINMANI;
  const kalaburagiCoord = INSTITUTIONAL_COORDINATES_REGISTER.NPS_CAMPUS_KALABURAGI;
  const dharwadCoord = INSTITUTIONAL_COORDINATES_REGISTER.HANCHINMANI_HEADQUARTERS_DHARWAD;

  return (
    <PageContainer
      title="Contact & Campus Coordinates"
      description="Official campus address, admissions phone numbers, and institutional email for the NPS–Hanchinmani Alliance in Kalaburagi."
      canonicalPath="/contact"
    >
      <div className="space-y-12">
        {/* 1. Academic Hero Section */}
        <section className="p-6 sm:p-10 rounded-2xl bg-[#0f1f38] text-white space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
              <Building2 className="w-3.5 h-3.5 text-[#d4af37]" aria-hidden="true" />
              Kalaburagi Campus
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              Verified Institutional Directory
            </span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
              Contact & Campus Coordinates
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Authoritative contact information and physical location coordinates for
              National Public School & PU College, Kalaburagi, and the NPS–Hanchinmani Institutes
              Academic Alliance.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              to={ROUTES.ADMISSIONS_ENQUIRY}
              variant="secondary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
            >
              Admissions Enquiry Desk
            </Button>
            <a
              href={`tel:${VERIFIED_CONTACT.phones.dedicatedPUAdmissions.replace(/\s+/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <Phone className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>Call PU Helpline: {VERIFIED_CONTACT.phones.dedicatedPUAdmissions}</span>
            </a>
          </div>
        </section>

        {/* 2. Primary Operating Campus Directory */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#b8860b]" aria-hidden="true" />
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0f1f38]">
                Kalaburagi Operating Campus
              </h2>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
              Audited Level 1 Source (SRC-05)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Postal Address Card */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0f1f38] text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase font-semibold text-amber-800 block">
                    Campus Location & Postal Address
                  </span>
                  <h3 className="font-serif font-bold text-slate-900 text-base">
                    National Public School & PU College
                  </h3>
                </div>
              </div>

              <address className="not-italic text-sm text-slate-700 leading-relaxed space-y-1 bg-slate-50 p-4 rounded-lg border border-slate-200">
                <p className="font-semibold text-slate-900">{kalaburagiCoord.institution}</p>
                <p>{VERIFIED_CONTACT.campusAddress.surveyNumber}, {VERIFIED_CONTACT.campusAddress.highway}</p>
                <p>{VERIFIED_CONTACT.campusAddress.landmark}</p>
                <p>{VERIFIED_CONTACT.campusAddress.road}, {VERIFIED_CONTACT.campusAddress.area}</p>
                <p className="font-medium text-slate-900">
                  {VERIFIED_CONTACT.campusAddress.city}, {VERIFIED_CONTACT.campusAddress.state} – {VERIFIED_CONTACT.campusAddress.pinCode}
                </p>
              </address>

              <div className="text-xs text-slate-500 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
                <span>Host Campus, Pre-University Classrooms, Science Labs & Hostels</span>
              </div>
            </div>

            {/* Telephony Card */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0f1f38] text-amber-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase font-semibold text-amber-800 block">
                    Admissions & Campus Lines
                  </span>
                  <h3 className="font-serif font-bold text-slate-900 text-base">
                    Official Telephony Directory
                  </h3>
                </div>
              </div>

              <div className="space-y-3 bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs">
                <div>
                  <span className="text-slate-500 font-medium block mb-0.5">
                    Dedicated PU Admissions Helpline:
                  </span>
                  <a
                    href={`tel:${VERIFIED_CONTACT.phones.dedicatedPUAdmissions.replace(/\s+/g, '')}`}
                    className="text-base font-bold font-mono text-[#0f1f38] hover:text-[#b8860b] transition-colors"
                  >
                    {VERIFIED_CONTACT.phones.dedicatedPUAdmissions}
                  </a>
                  <span className="text-[11px] text-emerald-700 block mt-0.5">
                    For PU Science streams, counseling appointments & hostel queries.
                  </span>
                </div>

                <div className="pt-2 border-t border-slate-200">
                  <span className="text-slate-500 font-medium block mb-1">
                    General Campus & Administrative Lines:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {VERIFIED_CONTACT.phones.generalCampus.map((phoneNum) => (
                      <a
                        key={phoneNum}
                        href={`tel:${phoneNum.replace(/\s+/g, '')}`}
                        className="font-mono text-xs px-2.5 py-1 rounded bg-white border border-slate-300 text-slate-800 hover:border-amber-400 hover:text-amber-800 transition-colors"
                      >
                        {phoneNum}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-xs text-slate-500 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                <span>Dedicated helpline for admissions and institutional inquiries</span>
              </div>
            </div>

            {/* Electronic Mail Desk */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0f1f38] text-amber-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase font-semibold text-amber-800 block">
                    Written Communications
                  </span>
                  <h3 className="font-serif font-bold text-slate-900 text-base">
                    Electronic Mail Desk
                  </h3>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <span className="text-slate-500 font-medium block">Admissions & General Information:</span>
                <a
                  href={`mailto:${VERIFIED_CONTACT.email}`}
                  className="text-sm font-bold font-mono text-[#0f1f38] hover:text-[#b8860b] transition-colors block truncate"
                >
                  {VERIFIED_CONTACT.email}
                </a>
                <p className="text-slate-600 leading-relaxed pt-1">
                  For submission of student marks records, formal documentation requests, or institutional inquiries.
                </p>
              </div>

              <div className="text-xs text-slate-500">
                Official institutional domain inbox: <strong className="text-slate-800">npskalaburagi.com</strong>
              </div>
            </div>

            {/* Campus Visits & In-Person Appointments */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0f1f38] text-amber-400 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase font-semibold text-amber-800 block">
                    Campus Access & Appointments
                  </span>
                  <h3 className="font-serif font-bold text-slate-900 text-base">
                    Campus Visits & Appointments
                  </h3>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <p className="text-slate-700 leading-relaxed">
                  Prospective students and parents are welcome to visit the Kusnoor campus for academic counseling and facility inspection. Prior appointment via the admissions helpline is strongly recommended.
                </p>
                <div className="pt-1">
                  <span className="font-semibold text-slate-900">Admissions Helpline: </span>
                  <a
                    href={`tel:${VERIFIED_CONTACT.phones.dedicatedPUAdmissions.replace(/\s+/g, '')}`}
                    className="font-mono text-emerald-800 font-bold hover:underline"
                  >
                    {VERIFIED_CONTACT.phones.dedicatedPUAdmissions}
                  </a>
                </div>
              </div>

              <div className="text-xs text-slate-500 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                <span>Academic Session 2026–2027 Inquiries Active</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. WhatsApp Advisory Channel Notice */}
        <section className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
              <MessageCircle className="w-6 h-6" aria-hidden="true" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="font-serif font-bold text-slate-900 text-base">
                  WhatsApp Advisory Channel
                </h3>
                <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                  Status: {WHATSAPP_CONTACT.verification.status}
                </span>
              </div>
              <p className="text-xs text-slate-700 font-medium">
                {WHATSAPP_CONTACT.pendingNotice}
              </p>
              <p className="text-xs text-slate-500 leading-relaxed max-w-2xl">
                In strict compliance with institutional anti-fraud and verification protocols, no unverified mobile number is presented as an official WhatsApp channel. WhatsApp business integration will be activated following formal client handover.
              </p>
            </div>
          </div>

          <a
            href={`tel:${VERIFIED_CONTACT.phones.dedicatedPUAdmissions.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0f1f38] text-amber-400 text-xs font-semibold hover:bg-[#162a4a] transition-colors shrink-0"
          >
            <Phone className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Call Admissions Desk Directly</span>
          </a>
        </section>

        {/* 4. Physical Transit Access & Map Verification Status */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
            <Navigation className="w-5 h-5 text-[#b8860b]" aria-hidden="true" />
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0f1f38]">
              Transit Access & Campus Location Guide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Transit Directions */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-serif font-bold text-slate-900 text-base flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#b8860b]" aria-hidden="true" />
                Campus Approach & Road Coordinates
              </h3>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                  <strong className="text-slate-900 block font-semibold">National Highway 150 (Shahabad Road):</strong>
                  <p className="text-slate-600">
                    The campus is situated along NH 150 (Shahabad Road), located before the Nandur Industrial Area in Kusnoor, Kalaburagi.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                  <strong className="text-slate-900 block font-semibold">Verified Postal Coordinates:</strong>
                  <p className="text-slate-600 font-mono">
                    {VERIFIED_CONTACT.campusAddress.fullFormatted}
                  </p>
                </div>
              </div>
            </div>

            {/* Map Integration Verification Status Card */}
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif font-bold text-slate-900 text-base flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#b8860b]" aria-hidden="true" />
                  Map Coordinates Module
                </h3>
                <span className="text-[10px] font-mono uppercase font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                  Status: PENDING_VERIFICATION
                </span>
              </div>

              {/* Strict Non-Fabrication Map Notice */}
              <div className="p-4 rounded-lg bg-white border border-slate-200 space-y-2 text-xs text-slate-600">
                <p className="font-semibold text-slate-900">
                  Interactive Embedded Map Notice:
                </p>
                <p className="leading-relaxed">
                  In adherence to institutional data integrity guidelines, arbitrary third-party mapping URLs or unverified Google Maps embed iframes are not rendered until official digital coordinates are verified and approved by the governing administration.
                </p>
                <p className="text-slate-500 italic pt-1">
                  Please rely on the official physical postal address above when navigating via GPS or requesting directions locally.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-2">
                <Info className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong>Address for navigation:</strong> {VERIFIED_CONTACT.campusAddress.fullFormatted}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Parent Institutional Directory / Headquarters Separation */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
            <Building2 className="w-5 h-5 text-[#b8860b]" aria-hidden="true" />
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0f1f38]">
              Institutional Coordinates Register
            </h2>
          </div>
          <p className="text-xs text-slate-600">
            Per institutional conflict audit records (VERIFICATION_CONFLICTS.md Record 02), the operational campus and the parent coaching network headquarters maintain distinct verified administrative coordinates:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* NPS Kalaburagi */}
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200">
                  Alliance Operational Campus
                </span>
                <span className="text-[10px] font-mono text-slate-500">Kalaburagi</span>
              </div>
              <h3 className="font-serif font-bold text-slate-900 text-sm">
                {kalaburagiCoord.institution}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {kalaburagiCoord.address}
              </p>
              <div className="pt-2 text-xs space-y-1 text-slate-700">
                <p><strong>Admissions Helpline:</strong> {kalaburagiCoord.helpline}</p>
                <p><strong>Email:</strong> {kalaburagiCoord.email}</p>
              </div>
            </div>

            {/* Hanchinmani Dharwad */}
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-300">
                  Academic Network Headquarters
                </span>
                <span className="text-[10px] font-mono text-slate-500">Dharwad</span>
              </div>
              <h3 className="font-serif font-bold text-slate-900 text-sm">
                {dharwadCoord.institution}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {dharwadCoord.address}
              </p>
              <div className="pt-2 text-xs space-y-1 text-slate-700">
                <p><strong>Headquarters Helpline:</strong> {dharwadCoord.helpline}</p>
                <p><strong>Email:</strong> {dharwadCoord.email}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Action Callout */}
        <section className="p-6 sm:p-8 rounded-2xl bg-[#0f1f38] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h2 className="text-xl font-serif font-bold text-white">
              Planning an In-Person Campus Visit?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Submit an enquiry to schedule an academic counseling session and lab tour.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Button
              to={ROUTES.ADMISSIONS_ENQUIRY}
              variant="secondary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
            >
              Admissions Enquiry Desk
            </Button>
            <Button
              to={ROUTES.ADMISSIONS_PROCESS}
              variant="outline"
              size="md"
              className="border-slate-600 text-white hover:bg-slate-800"
            >
              Admission Roadmap & Checklist
            </Button>
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
