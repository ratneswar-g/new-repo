/**
 * @file AdmissionEnquiryPage.tsx
 * @description Substantive Admissions Enquiry & Consultation Desk Page.
 * Integrates verified telephony, campus desk hours, WhatsApp verification notice,
 * and the validated EnquiryForm intake workflow.
 * Adheres strictly to Phase 11 anti-fabrication and privacy constraints.
 */

import React from 'react';
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  MessageCircle,
  HelpCircle,
  GraduationCap,
  Building2,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Info,
} from 'lucide-react';
import { PageContainer } from '../../components/common/PageContainer';
import { Card, CardBody } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { EnquiryForm } from '../../components/admissions/EnquiryForm';
import { VERIFIED_CONTACT, WHATSAPP_CONTACT } from '../../data/contact';
import {
  ADMISSIONS_INFORMATION,
  NEUTRAL_ENQUIRY_NOTICE,
  FEE_POLICY_NOTICE,
  ALLIANCE_ADMISSION_PENDING_NOTICE,
} from '../../data/admissions';
import { ROUTES } from '../../routes/routeConfig';

export function AdmissionEnquiryPage() {
  return (
    <PageContainer
      title="Admissions Enquiry & Counseling Desk"
      description="Connect directly with academic counselors for PU Science stream selection (PCMB, PCMC, PCMS), integrated NEET/JEE/KCET preparation, and campus visits."
      canonicalPath="/admissions/enquiry"
    >
      <div className="space-y-12">
        {/* 1. Academic Hero Section */}
        <section className="p-6 sm:p-10 rounded-2xl bg-[#0f1f38] text-white space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
              <GraduationCap className="w-3.5 h-3.5 text-[#d4af37]" aria-hidden="true" />
              Admissions Desk {ADMISSIONS_INFORMATION.academicYear}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
              <Building2 className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
              Kalaburagi Campus
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              Direct Institutional Channel
            </span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
              Admissions Enquiry & Academic Consultation
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {NEUTRAL_ENQUIRY_NOTICE} Schedule an in-person campus visit, consult regarding
              senior-secondary science combinations (PCMB, PCMC, PCMS), or request guidance on
              integrated NEET, JEE Main, and KCET batches.
            </p>
          </div>

          {/* Alliance Status Banner */}
          <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" aria-hidden="true" />
            <p>
              <strong>Notice:</strong> {ALLIANCE_ADMISSION_PENDING_NOTICE} You may use the direct verified admissions desk contacts below or complete the enquiry form to receive official counseling.
            </p>
          </div>
        </section>

        {/* 2. Verified Direct Channels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* PU Admissions Helpline Card */}
          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0f1f38] text-amber-400 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase font-semibold text-amber-800 block">
                  Dedicated PU Helpline
                </span>
                <h2 className="font-serif font-bold text-slate-900 text-base">
                  Telephone Counseling
                </h2>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Direct line for prospective students and parents seeking combination guidance or interview scheduling.
            </p>

            <div className="pt-2 border-t border-slate-100 space-y-1">
              <span className="text-xs text-slate-500 block">Dedicated PU Admissions:</span>
              <a
                href={`tel:${VERIFIED_CONTACT.phones.dedicatedPUAdmissions.replace(/\s+/g, '')}`}
                className="text-base font-bold font-mono text-[#0f1f38] hover:text-[#b8860b] transition-colors block"
              >
                {VERIFIED_CONTACT.phones.dedicatedPUAdmissions}
              </a>
              <span className="text-[11px] text-emerald-700 flex items-center gap-1 mt-1 font-medium">
                <CheckCircle2 className="w-3 h-3" aria-hidden="true" /> Verified Institutional Line
              </span>
            </div>
          </div>

          {/* Institutional Email Desk */}
          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0f1f38] text-amber-400 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase font-semibold text-amber-800 block">
                  Official Electronic Mail
                </span>
                <h2 className="font-serif font-bold text-slate-900 text-base">
                  Admissions Email
                </h2>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Dispatch detailed academic records or formal written admissions requests directly to the campus desk.
            </p>

            <div className="pt-2 border-t border-slate-100 space-y-1">
              <span className="text-xs text-slate-500 block">Admissions Inbox:</span>
              <a
                href={`mailto:${VERIFIED_CONTACT.email}`}
                className="text-sm font-bold text-[#0f1f38] hover:text-[#b8860b] transition-colors block truncate"
              >
                {VERIFIED_CONTACT.email}
              </a>
              <span className="text-[11px] text-slate-500 block">
                Official Admissions Desk
              </span>
            </div>
          </div>

          {/* WhatsApp Channel Verification Status */}
          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase font-semibold text-slate-500 block">
                  Advisory Channel Status
                </span>
                <h2 className="font-serif font-bold text-slate-900 text-base">
                  WhatsApp Inquiries
                </h2>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5">
              <p className="font-medium text-slate-900">
                {WHATSAPP_CONTACT.pendingNotice}
              </p>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                To protect against fraudulent numbers, institutional policy requires formal handover before publishing WhatsApp business contacts.
              </p>
            </div>

            <div className="pt-1 text-[11px] font-mono text-slate-500">
              Audit Status: <strong className="text-amber-800">{WHATSAPP_CONTACT.verification.status}</strong>
            </div>
          </div>
        </div>

        {/* 3. Main Enquiry Intake Form Section */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0f1f38]">
                Admissions Enquiry Intake
              </h2>
              <p className="text-xs text-slate-600 mt-0.5">
                Complete the validated fields below to prepare your formal enquiry for counseling callback.
              </p>
            </div>
            <span className="text-xs font-mono text-slate-500">
              Session: {ADMISSIONS_INFORMATION.academicYear}
            </span>
          </div>

          <EnquiryForm />
        </section>

        {/* 4. Admissions Consultation Protocols & Transparency Notice */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#b8860b]" aria-hidden="true" />
              <h3 className="font-semibold text-slate-900 text-sm">
                Transparent Counseling Standards
              </h3>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              We uphold strict institutional ethics during all admissions interactions. We do not make misleading claims, guaranteed rank promises, or artificial seat scarcity warnings. Every prospective student is evaluated on academic merit and aptitude.
            </p>
            <p className="text-xs text-slate-600">
              {FEE_POLICY_NOTICE}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#0f1f38]" aria-hidden="true" />
              <h3 className="font-semibold text-slate-900 text-sm">
                Campus Visit & Counseling Desk
              </h3>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Parents and candidates are welcome to visit the operating Kalaburagi campus to inspect science laboratories, classroom infrastructure, and residential hostels:
            </p>
            <address className="not-italic text-xs font-mono text-slate-600 leading-relaxed">
              {VERIFIED_CONTACT.campusAddress.fullFormatted}
            </address>
            <p className="text-xs text-slate-500">
              Prior appointment via admissions helpline recommended.
            </p>
          </div>
        </section>

        {/* 5. Navigation Links */}
        <section className="p-6 rounded-xl bg-white border border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="font-semibold text-slate-900 text-sm">
              Explore Admissions Roadmap & Required Documents
            </h3>
            <p className="text-xs text-slate-600">
              Review the detailed five-stage enrollment lifecycle and statutory board requirements.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              to={ROUTES.ADMISSIONS_PROCESS}
              variant="outline"
              size="sm"
              className="border-slate-300 text-slate-800"
            >
              View Admission Process
            </Button>
            <Button
              to={ROUTES.ACADEMICS_PROGRAMMES}
              variant="outline"
              size="sm"
              className="border-slate-300 text-slate-800"
            >
              Academic Streams (PCMB/PCMC/PCMS)
            </Button>
            <Button
              to={ROUTES.CAMPUS_HOSTEL}
              variant="outline"
              size="sm"
              className="border-slate-300 text-slate-800"
            >
              Residential Hostels
            </Button>
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
