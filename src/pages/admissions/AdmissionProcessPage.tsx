/**
 * @file AdmissionProcessPage.tsx
 * @description Substantive, factual Admission Procedure & Eligibility Criteria Page.
 * Directly grounded in verified admissions data (admissions.ts, contact.ts).
 * Adheres strictly to Phase 11 anti-fabrication and transparency rules:
 * - 5-Stage verified admission lifecycle.
 * - Statutory PU Board document checklist.
 * - Strict fee and scholarship disclosure gates.
 * - Direct helpline and enquiry CTAs.
 */

import React from 'react';
import {
  GraduationCap,
  CheckCircle2,
  FileText,
  Phone,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
  Calendar,
  Building2,
  Info,
  MapPin,
  FileCheck2,
  MessageCircle,
} from 'lucide-react';
import { PageContainer } from '../../components/common/PageContainer';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import {
  ADMISSIONS_INFORMATION,
  FEE_POLICY_NOTICE,
  SCHOLARSHIP_STATUS_NOTICE,
  NEUTRAL_ENQUIRY_NOTICE,
  ALLIANCE_ADMISSION_PENDING_NOTICE,
  FEE_STRUCTURE_STATUS,
} from '../../data/admissions';
import { VERIFIED_CONTACT, WHATSAPP_CONTACT } from '../../data/contact';
import { ROUTES } from '../../routes/routeConfig';

export function AdmissionProcessPage() {
  const steps = ADMISSIONS_INFORMATION.steps;
  const docs = ADMISSIONS_INFORMATION.requiredDocuments;

  return (
    <PageContainer
      title="Admission Procedure & Eligibility Criteria"
      description={`Official admission procedure for I & II PUC Science (${ADMISSIONS_INFORMATION.academicYear}) with integrated NEET, JEE, and KCET coaching. Clear 5-step roadmap and statutory document checklist.`}
      canonicalPath="/admissions/process"
    >
      <div className="space-y-12">
        {/* 1. Academic Hero Section */}
        <section className="p-6 sm:p-10 rounded-2xl bg-[#0f1f38] text-white space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
              <GraduationCap className="w-3.5 h-3.5 text-[#d4af37]" aria-hidden="true" />
              Admissions {ADMISSIONS_INFORMATION.academicYear}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              Pre-University Science
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
              <Calendar className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
              Karnataka PU Board Regulated
            </span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
              Admission Procedure & Eligibility Criteria
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Transparent, merit-guided admissions into two-year Pre-University Science combinations
              (PCMB, PCMC, PCMS) with integrated coaching for NEET, JEE Main, and KCET, conducted at the
              Kalaburagi campus in academic collaboration with Hanchinmani Institutes, Dharwad.
            </p>
          </div>

          {/* Institutional Status & Neutral Enquiry Notice */}
          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 space-y-2">
            <div className="flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" aria-hidden="true" />
              <div className="space-y-1">
                <p className="font-semibold text-white">
                  {ALLIANCE_ADMISSION_PENDING_NOTICE}
                </p>
                <p className="text-slate-300 leading-relaxed">
                  {NEUTRAL_ENQUIRY_NOTICE} The five-stage admissions roadmap below details the statutory Karnataka Pre-University Board enrollment sequence and verified in-person campus counseling protocols.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              to={ROUTES.ADMISSIONS_ENQUIRY}
              variant="secondary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
            >
              Submit Admissions Enquiry
            </Button>
            <a
              href={`tel:${VERIFIED_CONTACT.phones.dedicatedPUAdmissions.replace(/\s+/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <Phone className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>Helpline: {VERIFIED_CONTACT.phones.dedicatedPUAdmissions}</span>
            </a>
          </div>
        </section>

        {/* 2. Core Eligibility Framework */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
            <CheckCircle2 className="w-5 h-5 text-[#b8860b]" aria-hidden="true" />
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0f1f38]">
              Eligibility Framework (I PUC Science)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-semibold text-slate-900 text-base">
                Qualifying Examination Standard
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                {ADMISSIONS_INFORMATION.eligibilityCriteria}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs space-y-1">
                  <strong className="text-slate-900 block font-semibold">Recognized State Boards</strong>
                  <p className="text-slate-600">
                    Karnataka SSLC Examination Board, or any equivalent State Secondary Education Board.
                  </p>
                </div>
                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs space-y-1">
                  <strong className="text-slate-900 block font-semibold">National Boards</strong>
                  <p className="text-slate-600">
                    CBSE Class X / ICSE Class X examination with qualifying marks in Science and Mathematics.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#0f1f38]" aria-hidden="true" />
                <h3 className="font-semibold text-slate-900 text-sm">
                  Academic Combination Scope
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Senior-secondary admissions are conducted exclusively for Science stream combinations:
              </p>
              <ul className="text-xs space-y-2 text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <strong>PCMB:</strong> Physics, Chem, Math, Biology
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <strong>PCMC:</strong> Physics, Chem, Math, Comp Science
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <strong>PCMS:</strong> Physics, Chem, Math, Statistics
                </li>
              </ul>
              <div className="pt-2 border-t border-slate-200">
                <Button
                  to={ROUTES.ACADEMICS_PROGRAMMES}
                  variant="text"
                  size="sm"
                  className="text-xs text-[#b8860b] hover:text-[#8c6508] p-0"
                >
                  View full stream syllabus matrix &rarr;
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 3. 5-Stage Step-by-Step Admissions Roadmap */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#b8860b]" aria-hidden="true" />
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0f1f38]">
                Admissions Roadmap (5-Stage Procedure)
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500 hidden sm:inline-block">
              Stage 1 to Stage 5
            </span>
          </div>

          <div className="space-y-4">
            {steps.map((st) => (
              <div
                key={st.stepNumber}
                className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 transition-colors flex flex-col sm:flex-row items-start gap-4 sm:gap-6"
              >
                {/* Step Number Badge */}
                <div className="w-12 h-12 rounded-xl bg-[#0f1f38] text-amber-400 font-serif font-bold text-lg flex items-center justify-center shrink-0 shadow-inner">
                  {st.stepNumber}
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900">
                      {st.title}
                    </h3>
                    <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                      Phase {st.stepNumber}
                    </span>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed">
                    {st.description}
                  </p>

                  {/* Contextual Action / Detail for specific steps */}
                  {st.stepNumber === 1 && (
                    <p className="text-xs text-slate-500">
                      Combinations: PCMB (Medical / Pure Science), PCMC (Engineering / Technology), PCMS (Data Science / Statistics).
                    </p>
                  )}

                  {st.stepNumber === 2 && (
                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <Button
                        to={ROUTES.ADMISSIONS_ENQUIRY}
                        variant="outline"
                        size="sm"
                        className="text-xs border-slate-300 text-slate-800 hover:bg-slate-50"
                      >
                        Launch Online Enquiry Form
                      </Button>
                      <a
                        href={`tel:${VERIFIED_CONTACT.phones.dedicatedPUAdmissions.replace(/\s+/g, '')}`}
                        className="text-xs text-emerald-800 font-semibold inline-flex items-center gap-1 hover:underline"
                      >
                        <Phone className="w-3 h-3" aria-hidden="true" />
                        Call PU Helpline: {VERIFIED_CONTACT.phones.dedicatedPUAdmissions}
                      </a>
                    </div>
                  )}

                  {st.stepNumber === 3 && (
                    <p className="text-xs text-slate-500 flex items-center gap-1.5 pt-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                      In-Person Counseling Desk: Kusnoor Campus, Shahabad Road. Contact the PU admissions desk to schedule a visit.
                    </p>
                  )}

                  {st.stepNumber === 5 && (
                    <p className="text-xs text-slate-500 pt-1">
                      Formal enrollment in selected academic stream (PCMB/PCMC/PCMS) and integrated coaching package (NEET/JEE Main/KCET).
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Statutory Document Checklist */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
            <FileCheck2 className="w-5 h-5 text-[#b8860b]" aria-hidden="true" />
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0f1f38]">
                Required Documents Checklist
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Statutory documents required for Karnataka Pre-University Board registration and institutional verification.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {docs.map((doc) => {
              const isMandatory = doc.requirementType === 'mandatory';
              return (
                <div
                  key={doc.id}
                  className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5"
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                      isMandatory
                        ? 'bg-amber-100 text-amber-900 border border-amber-300'
                        : 'bg-slate-100 text-slate-700 border border-slate-300'
                    }`}
                  >
                    <FileText className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-semibold text-slate-900 text-sm">
                        {doc.documentName}
                      </h3>
                      <span
                        className={`text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded ${
                          isMandatory
                            ? 'bg-red-50 text-red-700 border border-red-200'
                            : 'bg-slate-100 text-slate-600 border border-slate-200'
                        }`}
                      >
                        {isMandatory ? 'Mandatory' : 'Category / Conditional'}
                      </span>
                    </div>
                    {doc.notes && (
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {doc.notes}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" aria-hidden="true" />
            <p>
              <strong>Statutory Compliance Note:</strong> Original marks card and transfer certificate are deposited with the college administration during final enrollment for verification by the Karnataka State Pre-University Board. Attested photocopies are retained by the candidate.
            </p>
          </div>
        </section>

        {/* 5. Fees & Scholarships Verification Policy Card */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
            <ShieldCheck className="w-5 h-5 text-[#b8860b]" aria-hidden="true" />
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0f1f38]">
              Fee Policy & Scholarship Guidelines
            </h2>
          </div>

          <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-200/90 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-amber-100 text-amber-900 border border-amber-300">
                <AlertCircle className="w-3.5 h-3.5 text-amber-800" aria-hidden="true" />
                Fee Information Status: {FEE_STRUCTURE_STATUS.status}
              </span>
              <span className="text-xs font-mono text-slate-500">
                Last Audited: {FEE_STRUCTURE_STATUS.lastAudited}
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-serif font-bold text-[#0f1f38]">
                {FEE_POLICY_NOTICE}
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {ADMISSIONS_INFORMATION.feePolicyNote}
              </p>
              <div className="p-3.5 rounded-lg bg-white border border-amber-200/80 text-xs text-slate-700 space-y-1">
                <strong className="text-amber-950 block font-semibold">Scholarship Policy:</strong>
                <p>{SCHOLARSHIP_STATUS_NOTICE} {ADMISSIONS_INFORMATION.scholarshipStatusNote}</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${VERIFIED_CONTACT.phones.dedicatedPUAdmissions.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0f1f38] text-amber-400 text-xs font-semibold hover:bg-[#162a4a] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Contact Admissions Desk for Fee Schedule ({VERIFIED_CONTACT.phones.dedicatedPUAdmissions})</span>
              </a>
              <Button
                to={ROUTES.CONTACT}
                variant="outline"
                size="sm"
                className="text-xs border-slate-300 text-slate-800"
              >
                View Campus Coordinates
              </Button>
            </div>
          </div>
        </section>

        {/* 6. WhatsApp Advisory Channel Notice */}
        <section className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 text-sm">
                WhatsApp Advisory Channel
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                {WHATSAPP_CONTACT.pendingNotice}
              </p>
            </div>
          </div>
          <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded bg-slate-200 text-slate-700">
            Status: {WHATSAPP_CONTACT.verification.status}
          </span>
        </section>

        {/* 7. Action CTAs */}
        <section className="p-6 sm:p-8 rounded-2xl bg-[#0f1f38] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h2 className="text-xl font-serif font-bold text-white">
              Ready to Initiate Your Admissions Application?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Submit an online enquiry or consult directly with our dedicated Pre-University counselors.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Button
              to={ROUTES.ADMISSIONS_ENQUIRY}
              variant="secondary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
            >
              Admissions Enquiry
            </Button>
            <Button
              to={ROUTES.CONTACT}
              variant="outline"
              size="md"
              className="border-slate-600 text-white hover:bg-slate-800"
            >
              Campus Contact & Map
            </Button>
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
