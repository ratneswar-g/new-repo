/**
 * @file facilities.ts
 * @description Centralized campus infrastructure, laboratory, and residential hostel data architecture.
 * Grounded in OFFICIAL_SOURCE_OF_TRUTH.md, official institutional portals (SRC-03, SRC-05),
 * and OFFICIAL_ASSET_REGISTER.md.
 */

import { Facility } from '../types/content';
import { VerificationStatus, VerificationMetadata } from '../types/verification';
import { OFFICIAL_SOURCES } from './sources';

export const CAMPUS_FACILITIES: Facility[] = [
  {
    id: 'fac-classrooms',
    name: 'Academic Classrooms',
    category: 'academic',
    description: 'Academic classrooms supporting Pre-University education at the Kalaburagi campus.',
    keyFeatures: [
      'Academic Classrooms.',
    ],
    locationNote: 'Academic Complex, NPS Kalaburagi Campus',
    verification: {
      status: VerificationStatus.VERIFIED_OFFICIAL,
      sources: [OFFICIAL_SOURCES.SRC_05],
      lastAudited: '2026-09-18',
    },
  },
  {
    id: 'fac-lab-physics',
    name: 'Physics Laboratory',
    category: 'laboratory',
    description: 'Physics Laboratory facility at the Kalaburagi campus.',
    keyFeatures: [
      'Physics Laboratory.',
    ],
    locationNote: 'Science Laboratory Wing, NPS Kalaburagi',
    verification: {
      status: VerificationStatus.VERIFIED_OFFICIAL,
      sources: [OFFICIAL_SOURCES.SRC_03, OFFICIAL_SOURCES.SRC_05],
      lastAudited: '2026-09-18',
    },
  },
  {
    id: 'fac-lab-chemistry',
    name: 'Chemistry Laboratory',
    category: 'laboratory',
    description: 'Chemistry Laboratory facility at the Kalaburagi campus.',
    keyFeatures: [
      'Chemistry Laboratory.',
    ],
    locationNote: 'Science Laboratory Wing, NPS Kalaburagi',
    verification: {
      status: VerificationStatus.VERIFIED_OFFICIAL,
      sources: [OFFICIAL_SOURCES.SRC_03, OFFICIAL_SOURCES.SRC_05],
      lastAudited: '2026-09-18',
    },
  },
  {
    id: 'fac-lab-biology',
    name: 'Biology Laboratory',
    category: 'laboratory',
    description: 'Biology Laboratory facility at the Kalaburagi campus.',
    keyFeatures: [
      'Biology Laboratory.',
    ],
    locationNote: 'Science Laboratory Wing, NPS Kalaburagi',
    verification: {
      status: VerificationStatus.VERIFIED_OFFICIAL,
      sources: [OFFICIAL_SOURCES.SRC_03, OFFICIAL_SOURCES.SRC_05],
      lastAudited: '2026-09-18',
    },
  },
  {
    id: 'fac-lab-computer',
    name: 'Computer Laboratory',
    category: 'laboratory',
    description: 'Computer Laboratory facility at the Kalaburagi campus.',
    keyFeatures: [
      'Computer Laboratory.',
    ],
    locationNote: 'Technology Wing, NPS Kalaburagi',
    verification: {
      status: VerificationStatus.VERIFIED_OFFICIAL,
      sources: [OFFICIAL_SOURCES.SRC_03, OFFICIAL_SOURCES.SRC_05],
      lastAudited: '2026-09-18',
    },
  },
  {
    id: 'fac-central-library',
    name: 'Library',
    category: 'library',
    description: 'Library facility at the Kalaburagi campus.',
    keyFeatures: [
      'Library facility for academic study.',
    ],
    locationNote: 'Academic Complex, NPS Kalaburagi',
    verification: {
      status: VerificationStatus.VERIFIED_OFFICIAL,
      sources: [OFFICIAL_SOURCES.SRC_03, OFFICIAL_SOURCES.SRC_05],
      lastAudited: '2026-09-18',
    },
  },
  {
    id: 'fac-sports-athletics',
    name: 'Sports Grounds & Indoor Games',
    category: 'sports',
    description: 'Sports grounds and indoor games spaces at the Kalaburagi campus.',
    keyFeatures: [
      'Sports grounds.',
      'Indoor games.',
    ],
    locationNote: 'Campus Grounds, NPS Kalaburagi',
    verification: {
      status: VerificationStatus.VERIFIED_OFFICIAL,
      sources: [OFFICIAL_SOURCES.SRC_05],
      lastAudited: '2026-09-18',
    },
  },
  {
    id: 'fac-hostel-residential',
    name: 'Residential Accommodations',
    category: 'residential',
    description: 'On-campus residential accommodations. Official residential-life information is pending client confirmation.',
    keyFeatures: [
      'Official residential-life information is pending client confirmation.',
    ],
    locationNote: 'Residential Campus Zone, NPS Kalaburagi',
    verification: {
      status: VerificationStatus.CLIENT_APPROVAL_REQUIRED,
      sources: [OFFICIAL_SOURCES.SRC_01, OFFICIAL_SOURCES.SRC_03, OFFICIAL_SOURCES.SRC_05],
      lastAudited: '2026-09-18',
      reviewNotes: 'Official residential-life information is pending client confirmation.',
    },
  },
];

/**
 * Official Residential-Life Status Notice.
 * Displayed across residential sections pending formal client confirmation.
 */
export const RESIDENTIAL_STATUS_NOTICE = 'Official residential-life information is pending client confirmation.';

/**
 * Hostel & Campus Photographic Asset Handover Status.
 * As documented in OFFICIAL_ASSET_REGISTER.md, campus and hostel photographs are awaiting client handover.
 */
export const CAMPUS_ASSET_STATUS: VerificationMetadata = {
  status: VerificationStatus.NOT_AVAILABLE,
  sources: [OFFICIAL_SOURCES.SRC_01, OFFICIAL_SOURCES.SRC_05],
  lastAudited: '2026-09-18',
  reviewNotes: 'High-resolution photographs of classrooms, labs, library, and hostel residential blocks pending formal client handover per Asset Register (AST-04 through AST-09). Using dignified structural placeholders.',
};

export const FACILITIES_METADATA: VerificationMetadata = {
  status: VerificationStatus.VERIFIED_OFFICIAL,
  sources: [OFFICIAL_SOURCES.SRC_03, OFFICIAL_SOURCES.SRC_05],
  lastAudited: '2026-09-18',
};

export const HOSTEL_FACILITIES = {
  boysHostel: {
    name: 'Boys Residential Accommodation',
    amenities: [
      'On-campus residential facilities',
      'Official residential-life information is pending client confirmation.',
    ],
  },
  girlsHostel: {
    name: 'Girls Residential Accommodation',
    amenities: [
      'On-campus residential facilities',
      'Official residential-life information is pending client confirmation.',
    ],
  },
};

export const HOSTEL_METADATA: VerificationMetadata = {
  status: VerificationStatus.CLIENT_APPROVAL_REQUIRED,
  sources: [OFFICIAL_SOURCES.SRC_01, OFFICIAL_SOURCES.SRC_03, OFFICIAL_SOURCES.SRC_05],
  lastAudited: '2026-09-18',
  reviewNotes: 'Official residential-life information is pending client confirmation.',
};
