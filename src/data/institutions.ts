/**
 * @file institutions.ts
 * @description Verified institutional metadata for NPS, Hanchinmani Institutes, and the Alliance.
 * Directly grounded in OFFICIAL_SOURCE_OF_TRUTH.md and Level 1/2 records.
 */

import { Institution, AcademicAlliance } from '../types/content';
import { VerificationStatus } from '../types/verification';
import { OFFICIAL_SOURCES } from './sources';
export { VERIFIED_CONTACT, INSTITUTIONAL_COORDINATES_REGISTER } from './contact';

export const INSTITUTIONS: Record<string, Institution> = {
  ALLIANCE: {
    id: 'inst-alliance',
    name: 'NPS–Hanchinmani Institutes Academic Alliance',
    shortName: 'NPS–Hanchinmani Alliance',
    entityType: 'academic_alliance',
    governingTrust: 'Sanskar Trust & Shantesh Education Society',
    campusLocation: 'Shahabad Road, Kusnoor, Kalaburagi, Karnataka - 585105',
    description: 'The Academic Alliance brings together National Public School & PU College, Kalaburagi and Hanchinmani Institutes, Dharwad, with an academic focus on Pre-University education and integrated entrance-exam preparation.',
    verification: {
      status: VerificationStatus.CLIENT_PROVIDED,
      sources: [OFFICIAL_SOURCES.SRC_01, OFFICIAL_SOURCES.SRC_02, OFFICIAL_SOURCES.SRC_07],
      lastAudited: '2026-09-18',
      reviewNotes: 'Formal alliance establishment date remains pending verification per client confirmation.',
    },
  },
  NPS: {
    id: 'inst-nps',
    name: 'National Public School & PU College, Kalaburagi',
    shortName: 'NPS Kalaburagi',
    entityType: 'school_pu_college',
    governingTrust: 'Sanskar Trust Gulbarga',
    establishedYear: 2018,
    puCollegeCode: 'Pending Official Verification',
    affiliation: 'Karnataka Pre-University Examination Board',
    campusLocation: 'Survey No 136/*/3, NH 150, Before Nandur Industrial Area, Shahabad Road, Kusnoor, Kalaburagi - 585105',
    officialWebsite: 'https://www.npskalaburagi.com',
    description: 'Educational campus in Kalaburagi offering schooling and Pre-University Science education.',
    verification: {
      status: VerificationStatus.VERIFIED_OFFICIAL,
      sources: [OFFICIAL_SOURCES.SRC_05, OFFICIAL_SOURCES.SRC_02],
      lastAudited: '2026-09-18',
    },
  },
  HANCHINMANI: {
    id: 'inst-hanchinmani',
    name: 'P.S. Hanchinmani Institutes / Smt. Vidya P. Hanchinmani PU Science College',
    shortName: 'Hanchinmani Institutes',
    entityType: 'coaching_network',
    governingTrust: 'Shantesh Education Society, Dharwad',
    establishedYear: 1994,
    heritageYears: 30,
    campusLocation: 'Headquarters: Attikolla, Near Nuggikeri, Dharwad - 580114, Karnataka',
    officialWebsite: 'https://hanchinmanicollege.com',
    description: 'Hanchinmani Institutes, Dharwad has a long-standing history of competitive entrance-exam coaching, established in 1994.',
    verification: {
      status: VerificationStatus.VERIFIED_OFFICIAL,
      sources: [OFFICIAL_SOURCES.SRC_03, OFFICIAL_SOURCES.SRC_04],
      lastAudited: '2026-09-18',
    },
  },
};

/**
 * Detailed academic alliance model.
 * Note: Formal alliance charter and legal governance appointments remain pending client confirmation per CIR Item C1.
 */
export const ACADEMIC_ALLIANCE_CHARTER: AcademicAlliance = {
  id: 'alliance-charter-01',
  allianceName: 'NPS–Hanchinmani Institutes Academic Alliance',
  shortName: 'NPS–Hanchinmani Alliance',
  participatingInstitutions: [
    {
      institutionId: 'inst-nps',
      institutionName: 'National Public School & PU College, Kalaburagi',
      role: 'Host Campus Institution, Karnataka Pre-University Board college affiliation (College Code pending verification), classrooms, and science laboratories.',
    },
    {
      institutionId: 'inst-hanchinmani',
      institutionName: 'P.S. Hanchinmani Institutes, Dharwad',
      role: 'Competitive entrance examination coaching in NEET, JEE Main, and KCET.',
    },
  ],
  academicFocus: 'Integrated Pre-University Science with Competitive Entrance Preparation (NEET, JEE Main & Advanced, KCET)',
  programmes: [
    'Two-Year Pre-University Science (PCMB, PCMC, PCMS)',
    'Integrated NEET Medical Coaching',
    'Integrated JEE Engineering Coaching',
    'Integrated KCET Karnataka Entrance Coaching',
  ],
  governingFramework: 'Formal alliance governance details will be published following client confirmation.',
  campusOperatingLocation: 'NH 150, Shahabad Road, Kusnoor, Kalaburagi, Karnataka - 585105',
  // Unconfirmed alliance governance fields preserved as undefined or with explicit audit notes per Phase 0B
  missionStatement: undefined, // PENDING_CLIENT_CONFIRMATION
  officialExecutionDate: undefined, // PENDING_VERIFICATION
  partnershipDuration: undefined, // PENDING_CLIENT_CONFIRMATION
  futureExpansionPlans: undefined, // PENDING_CLIENT_CONFIRMATION
  verification: {
    status: VerificationStatus.PENDING_VERIFICATION,
    sources: [OFFICIAL_SOURCES.SRC_01, OFFICIAL_SOURCES.SRC_02, OFFICIAL_SOURCES.SRC_07],
    lastAudited: '2026-09-18',
    reviewNotes: 'Alliance parameters specified in client brief; formal alliance charter and governance appointments remain pending client confirmation (CIR Item C1).',
  },
};
