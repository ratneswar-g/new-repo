/**
 * @file leadership.ts
 * @description Centralized institutional leadership directory for the NPS–Hanchinmani Institutes Academic Alliance.
 * Grounded in OFFICIAL_SOURCE_OF_TRUTH.md, Level 1 official portals (SRC-03, SRC-04, SRC-05),
 * and VERIFICATION_CONFLICTS.md.
 */

import { LeadershipProfile } from '../types/content';
import { VerificationStatus, VerificationMetadata } from '../types/verification';
import { OFFICIAL_SOURCES } from './sources';

/**
 * Verified Institutional Leadership Profiles.
 * Carefully segmented between parent institution executive leadership and school leadership.
 */
export const LEADERSHIP_PROFILES: LeadershipProfile[] = [
  {
    id: 'lead-prof-pr-hanchinmani',
    fullName: 'Prof. P.R. Hanchinmani',
    role: 'Founder Chairman',
    institutionId: 'inst-hanchinmani',
    designation: 'Founder Chairman, Hanchinmani Institutes / Shantesh Education Society',
    bioSummary: 'Founder Chairman of Hanchinmani Institutes and Shantesh Education Society, Dharwad, established in 1994.',
    message: undefined,
    isAllianceWide: false,
    verification: {
      status: VerificationStatus.CLIENT_APPROVAL_REQUIRED,
      sources: [OFFICIAL_SOURCES.SRC_03, OFFICIAL_SOURCES.SRC_04],
      lastAudited: '2026-09-18',
      reviewNotes: 'Institutional leadership of parent network verified (HAN-04). Alliance-wide governance role and public executive message pending client handover per Client Information Request (Item C1 & C3).',
    },
  },
  {
    id: 'lead-manoj-p-hanchinmani',
    fullName: 'Mr. Manoj P. Hanchinmani',
    role: 'Founder Secretary',
    institutionId: 'inst-hanchinmani',
    designation: 'Founder Secretary, Hanchinmani Institutes / Shantesh Education Society',
    bioSummary: 'Founder Secretary of Hanchinmani Institutes and Shantesh Education Society, Dharwad.',
    message: undefined,
    isAllianceWide: false,
    verification: {
      status: VerificationStatus.CLIENT_APPROVAL_REQUIRED,
      sources: [OFFICIAL_SOURCES.SRC_03, OFFICIAL_SOURCES.SRC_04],
      lastAudited: '2026-09-18',
      reviewNotes: 'Institutional leadership of parent network verified (HAN-04). Alliance-wide governance role and public executive message pending client handover per Client Information Request (Item C2 & C3).',
    },
  },
  {
    id: 'lead-devassy-mattathilani',
    fullName: 'Mr. Devassy Mattathilani',
    role: 'Principal, National Public School, Kalaburagi',
    institutionId: 'inst-nps',
    designation: 'Principal, National Public School, Kalaburagi',
    bioSummary: 'Principal of National Public School, Kalaburagi (under Sanskar Trust Gulbarga).',
    message: undefined,
    isAllianceWide: false,
    verification: {
      status: VerificationStatus.CLIENT_APPROVAL_REQUIRED,
      sources: [OFFICIAL_SOURCES.SRC_05],
      lastAudited: '2026-09-18',
      reviewNotes: 'School Principal designation verified on npskalaburagi.com (NPS-05). Client confirmation required regarding whether this extends to PU College Dean/Principal role (Conflict Record 04). Individual quote pending handover.',
    },
  },
];

/**
 * Metadata regarding the Alliance Governance Framework.
 * Awaiting official charter and governance appointments per Client Information Request (Item C3).
 */
export const ALLIANCE_GOVERNANCE_METADATA: VerificationMetadata = {
  status: VerificationStatus.PENDING_VERIFICATION,
  sources: [OFFICIAL_SOURCES.SRC_01],
  lastAudited: '2026-09-18',
  reviewNotes: 'Formal alliance governance structure, council appointments, and charter remain pending client confirmation.',
};

export const LEADERSHIP_METADATA: VerificationMetadata = ALLIANCE_GOVERNANCE_METADATA;
