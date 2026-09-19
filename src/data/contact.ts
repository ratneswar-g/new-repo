/**
 * @file contact.ts
 * @description Centralized authoritative contact registry for the NPS–Hanchinmani Institutes Academic Alliance.
 * Directly grounded in OFFICIAL_SOURCE_OF_TRUTH.md, Level 1 statutory portals, and VERIFICATION_CONFLICTS.md.
 */

import { ContactInformation } from '../types/content';
import { VerificationStatus } from '../types/verification';
import { OFFICIAL_SOURCES } from './sources';

/**
 * Primary verified contact directory for the operating Kalaburagi campus.
 * Grounded in Level 1 statutory portal (npskalaburagi.com - SRC-05).
 */
export const VERIFIED_CONTACT: ContactInformation = {
  institutionName: 'NPS–Hanchinmani Institutes Academic Alliance',
  campusAddress: {
    surveyNumber: 'Survey No 136/*/3',
    highway: 'NH 150',
    landmark: 'Before Nandur Industrial Area',
    road: 'Shahabad Road',
    area: 'Kusnoor',
    city: 'Kalaburagi',
    state: 'Karnataka',
    pinCode: '585105',
    fullFormatted: 'Survey No 136/*/3, NH 150, Before Nandur Industrial Area, Shahabad Road, Kusnoor, Kalaburagi, Karnataka - 585105',
  },
  phones: {
    dedicatedPUAdmissions: '+91 6362903788',
    generalCampus: ['+91 7899795588', '+91 9071541000', '+91 9071542000'],
  },
  email: 'info@npskalaburagi.com',
  verification: {
    status: VerificationStatus.VERIFIED_OFFICIAL,
    sources: [OFFICIAL_SOURCES.SRC_05],
    lastAudited: '2026-09-18',
    reviewNotes: 'Dedicated PU line +91 6362903788 verified for senior-secondary & competitive admissions inquiries.',
  },
};

/**
 * WhatsApp Advisory Channel Status.
 * Grounded in Client Information Request Item N3 and VERIFICATION_CONFLICTS.md Record 05.
 * A dedicated WhatsApp Business number has not yet been approved or handed over for public institutional routing.
 */
export const WHATSAPP_CONTACT = {
  isVerified: false,
  number: null as string | null,
  pendingNotice: 'Official WhatsApp contact pending institutional confirmation.',
  prefilledMessage: 'Hello, I would like to enquire about admissions at NPS–Hanchinmani Academic Alliance.',
  verification: {
    status: VerificationStatus.PENDING_VERIFICATION,
    sources: [OFFICIAL_SOURCES.SRC_01],
    lastAudited: '2026-09-19',
    reviewNotes: 'Official WhatsApp business line pending institutional delivery (Client Information Request Item N3). No personal or unverified numbers permitted.',
  },
};

/**
 * Secondary institutional coordinates register for parent bodies and audit tracking.
 * Captures the geographical distinction logged in VERIFICATION_CONFLICTS.md (Record 02 & Record 05).
 */
export const INSTITUTIONAL_COORDINATES_REGISTER = {
  NPS_CAMPUS_KALABURAGI: {
    id: 'coord-nps-kalaburagi',
    institution: 'National Public School & PU College, Kalaburagi',
    role: 'Alliance Operational Campus & Examination Center',
    address: 'Survey No 136/*/3, NH 150, Before Nandur Industrial Area, Shahabad Road, Kusnoor, Kalaburagi, Karnataka - 585105',
    helpline: '+91 6362903788',
    generalPhones: ['+91 7899795588', '+91 9071541000', '+91 9071542000'],
    email: 'info@npskalaburagi.com',
    status: VerificationStatus.VERIFIED_OFFICIAL,
    source: OFFICIAL_SOURCES.SRC_05,
  },
  HANCHINMANI_HEADQUARTERS_DHARWAD: {
    id: 'coord-hanchinmani-dharwad',
    institution: 'P.S. Hanchinmani Institutes / Shantesh Education Society',
    role: 'Parent Academic Network & Coaching Headquarters',
    address: 'Behind Shri Mahalaxmi Petrol Bunk, Attikolla, Near Nuggikeri, Kalaghatagi Road, Dharwad - 580114, Karnataka',
    helpline: '+91 6361120816',
    generalPhones: ['0836-2463185'],
    email: 'hanchinmanicollege@gmail.com',
    status: VerificationStatus.VERIFIED_OFFICIAL,
    source: OFFICIAL_SOURCES.SRC_03,
  },
};
