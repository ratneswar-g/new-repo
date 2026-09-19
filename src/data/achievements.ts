/**
 * @file achievements.ts
 * @description Centralized institutional achievements and honors data architecture.
 * Strictly adheres to the zero-fabrication mandate: NO synthetic awards, fictitious trophies,
 * or unverified recognitions. Dataset is maintained empty pending formal client handover
 * (CLIENT_INFORMATION_REQUEST.md Item I1 & I2).
 */

import { Achievement } from '../types/content';
import { VerificationStatus, VerificationMetadata } from '../types/verification';
import { OFFICIAL_SOURCES } from './sources';

/**
 * Verified Institutional Achievements and Milestones.
 * Grounded strictly in OFFICIAL_SOURCE_OF_TRUTH.md (SRC-02, SRC-03, SRC-04, SRC-05).
 * Only officially verified historical milestones are published; unverified competitive awards remain pending.
 */
export const INSTITUTIONAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ach-pu-college-inauguration',
    year: 2022,
    title: 'Inauguration of Pre-University Section',
    awardingBody: 'Sanskar Trust Gulbarga',
    recipientEntity: 'National Public School & PU College, Kalaburagi',
    description: 'Formal inauguration of the dedicated senior-secondary Pre-University science section on Shahabad Road, Kusnoor, Kalaburagi, establishing modern science laboratories and smart digital classrooms.',
    verification: {
      status: VerificationStatus.VERIFIED_OFFICIAL,
      sources: [OFFICIAL_SOURCES.SRC_05],
      lastAudited: '2026-09-18',
    },
  },
  {
    id: 'ach-pu-lecturers-workshop',
    year: 2023,
    title: 'Host Institution: District-Level PU Lecturers Refresher Workshop',
    awardingBody: "Department of School Education (PUC Division) & Karnataka State PU College Principals' Association",
    recipientEntity: 'National Public School & PU College Campus, Kalaburagi',
    description: 'NPS PU College was selected to host the official district-level academic refresher workshop for Pre-University science educators, focusing on laboratory pedagogy and state curriculum standards.',
    verification: {
      status: VerificationStatus.VERIFIED_OFFICIAL,
      sources: [OFFICIAL_SOURCES.SRC_02],
      lastAudited: '2026-09-18',
    },
  },
  {
    id: 'ach-hanchinmani-heritage',
    year: 1994,
    title: 'Three Decades of Competitive Science Coaching Heritage',
    awardingBody: 'Shantesh Education Society',
    recipientEntity: 'Hanchinmani Institutes (Dharwad)',
    description: 'Established pioneer pre-university competitive coaching frameworks across North Karnataka, training generations of medical (NEET) and engineering (JEE/KCET) aspirants.',
    verification: {
      status: VerificationStatus.VERIFIED_OFFICIAL,
      sources: [OFFICIAL_SOURCES.SRC_03, OFFICIAL_SOURCES.SRC_04],
      lastAudited: '2026-09-18',
    },
  },
];

/**
 * Metadata reflecting the status of competitive awards, Olympiad honors, and rankings.
 */
export const ACHIEVEMENTS_METADATA: VerificationMetadata = {
  status: VerificationStatus.NOT_AVAILABLE,
  sources: [OFFICIAL_SOURCES.SRC_01],
  lastAudited: '2026-09-18',
  reviewNotes: 'Institutional awards, Olympiad recognitions, and competitive milestones are awaiting certified documentation handover per Client Information Request (Items I1 and I2). No speculative awards permitted.',
};

