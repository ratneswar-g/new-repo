/**
 * @file admissions.ts
 * @description Centralized admissions process, eligibility criteria, and required statutory documents data architecture.
 * Grounded in OFFICIAL_SOURCE_OF_TRUTH.md, Karnataka PU Board admission regulations (SRC-06),
 * and official institutional directives (SRC-01, SRC-05).
 */

import { AdmissionInformation, AdmissionStep, AdmissionDocument } from '../types/content';
import { VerificationStatus, VerificationMetadata } from '../types/verification';
import { OFFICIAL_SOURCES } from './sources';

/**
 * Verified Sequential Admission Procedure (Phase 0B Section 14).
 */
export const ADMISSION_STEPS: AdmissionStep[] = [
  {
    stepNumber: 1,
    title: 'Eligibility Check & Stream Selection',
    description: 'Candidates must have passed 10th Standard / SSLC / CBSE Class X / ICSE Class X or any equivalent recognized examination. Aspirants select their chosen science combination (PCMB, PCMC, or PCMS) and primary competitive entrance focus (NEET, JEE, or KCET).',
    channel: 'Self-Assessment / Academic Prospectus Review',
    verification: {
      status: VerificationStatus.VERIFIED_OFFICIAL,
      sources: [OFFICIAL_SOURCES.SRC_01, OFFICIAL_SOURCES.SRC_06],
      lastAudited: '2026-09-18',
    },
  },
  {
    stepNumber: 2,
    title: 'Online Enquiry or Telephonic Consultation',
    description: 'Submit an online enquiry via the official portal form or contact the dedicated PU Admissions Helpline (+91 6362903788) to register preliminary candidate details and schedule an admissions counseling session.',
    channel: 'Official Portal Form / Admissions Telephone Line',
    verification: {
      status: VerificationStatus.VERIFIED_OFFICIAL,
      sources: [OFFICIAL_SOURCES.SRC_01, OFFICIAL_SOURCES.SRC_05],
      lastAudited: '2026-09-18',
    },
  },
  {
    stepNumber: 3,
    title: 'Campus Visit & Academic Counseling',
    description: 'Visit the purpose-built Kalaburagi campus on Shahabad Road for an in-person orientation. Meet academic counselors to review syllabus integration, inspect laboratories, library, and residential hostel facilities.',
    channel: 'Campus Visit & Admissions Desk',
    verification: {
      status: VerificationStatus.VERIFIED_OFFICIAL,
      sources: [OFFICIAL_SOURCES.SRC_01, OFFICIAL_SOURCES.SRC_05],
      lastAudited: '2026-09-18',
    },
  },
  {
    stepNumber: 4,
    title: 'Document Verification & Diagnostic Evaluation',
    description: 'Submission of original marks cards, transfer certificate, and required certificates for board verification. Optional diagnostic evaluation to assess entrance coaching batch placement.',
    channel: 'Admissions Office Desk, NPS Kalaburagi Campus',
    verification: {
      status: VerificationStatus.VERIFIED_OFFICIAL,
      sources: [OFFICIAL_SOURCES.SRC_06],
      lastAudited: '2026-09-18',
    },
  },
  {
    stepNumber: 5,
    title: 'Statutory Board Registration & Enrollment Confirmation',
    description: 'Completion of official Karnataka Pre-University Board enrollment documentation and issuance of the student admission confirmation letter, hostel room allotment (for boarders), and academic timetable.',
    channel: 'Registrar Desk, NPS PU College Kalaburagi',
    verification: {
      status: VerificationStatus.VERIFIED_OFFICIAL,
      sources: [OFFICIAL_SOURCES.SRC_06],
      lastAudited: '2026-09-18',
    },
  },
];

/**
 * Required Statutory & Institutional Documents Checklist.
 * Strictly aligned with OFFICIAL_SOURCE_OF_TRUTH.md Section 14.
 */
export const REQUIRED_ADMISSION_DOCUMENTS: AdmissionDocument[] = [
  {
    id: 'doc-marks-card',
    documentName: 'Original 10th Standard / SSLC / CBSE / ICSE Marks Card',
    requirementType: 'mandatory',
    notes: 'Plus 3 attested photocopies for board verification.',
    verification: {
      status: VerificationStatus.VERIFIED_OFFICIAL,
      sources: [OFFICIAL_SOURCES.SRC_06],
      lastAudited: '2026-09-18',
    },
  },
  {
    id: 'doc-tc',
    documentName: 'Transfer Certificate (TC) from Previous Institution',
    requirementType: 'mandatory',
    notes: 'Original certificate issued by the secondary school headmaster/principal.',
    verification: {
      status: VerificationStatus.VERIFIED_OFFICIAL,
      sources: [OFFICIAL_SOURCES.SRC_06],
      lastAudited: '2026-09-18',
    },
  },
  {
    id: 'doc-migration',
    documentName: 'Migration Certificate (For Non-Karnataka State Board / CBSE / ICSE students)',
    requirementType: 'mandatory',
    notes: 'Mandated by Karnataka Pre-University Examination Board regulations.',
    verification: {
      status: VerificationStatus.VERIFIED_OFFICIAL,
      sources: [OFFICIAL_SOURCES.SRC_06],
      lastAudited: '2026-09-18',
    },
  },
  {
    id: 'doc-conduct',
    documentName: 'Conduct Certificate',
    requirementType: 'mandatory',
    notes: 'Issued by the head of the institution last attended.',
    verification: {
      status: VerificationStatus.VERIFIED_OFFICIAL,
      sources: [OFFICIAL_SOURCES.SRC_06],
      lastAudited: '2026-09-18',
    },
  },
  {
    id: 'doc-photos',
    documentName: 'Recent Passport Size Photographs (6 Copies)',
    requirementType: 'mandatory',
    notes: 'Recent colored photographs with light background for student records and board register.',
    verification: {
      status: VerificationStatus.CLIENT_PROVIDED,
      sources: [OFFICIAL_SOURCES.SRC_01],
      lastAudited: '2026-09-18',
    },
  },
];

/**
 * Admissions Information Architecture Model.
 * Explicitly safeguards fee and scholarship transparency.
 */
export const ADMISSIONS_INFORMATION: AdmissionInformation = {
  academicYear: '2026–2027',
  eligibilityCriteria: 'Successful completion of 10th Standard / SSLC / CBSE Class X / ICSE Class X or equivalent recognized examination with minimum qualifying marks in Science and Mathematics.',
  steps: ADMISSION_STEPS,
  requiredDocuments: REQUIRED_ADMISSION_DOCUMENTS,
  feePolicyNote: 'Official fee schedules, laboratory fees, and residential hostel tariffs are communicated directly by the admissions counselor during in-person counseling at the campus. Under statutory institutional compliance, no unofficial fee structures or arbitrary discounts are published online.',
  scholarshipStatusNote: 'Merit-based scholarship evaluations and tuition concessions based on 10th standard board distinction marks are available subject to client guidelines and formal assessment.',
  verification: {
    status: VerificationStatus.VERIFIED_OFFICIAL,
    sources: [OFFICIAL_SOURCES.SRC_01, OFFICIAL_SOURCES.SRC_05, OFFICIAL_SOURCES.SRC_06],
    lastAudited: '2026-09-18',
    reviewNotes: 'Admissions flow and statutory document checklist verified against Karnataka PU Board requirements. Fee figures appropriately held pending formal client publication.',
  },
};

export const FEE_POLICY_NOTICE = 'Please contact the admissions office for the latest fee structure.';
export const SCHOLARSHIP_STATUS_NOTICE = 'Scholarship information is subject to institutional confirmation.';
export const NEUTRAL_ENQUIRY_NOTICE = 'Submit an enquiry to receive the latest official admission information.';
export const ALLIANCE_ADMISSION_PENDING_NOTICE = 'Official admission requirements for the Academic Alliance are pending institutional confirmation.';

/**
 * Fee structure verification status (Awaiting official schedule handover).
 */
export const FEE_STRUCTURE_STATUS: VerificationMetadata = {
  status: VerificationStatus.PENDING_VERIFICATION,
  sources: [OFFICIAL_SOURCES.SRC_01],
  lastAudited: '2026-09-18',
  reviewNotes: 'Institutional fee structure and installment schedules are pending client handover. Direct inquiry via admissions desk (+91 6362903788) is designated for fee counseling.',
};

