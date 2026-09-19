/**
 * @file faculty.ts
 * @description Centralized academic faculty and mentorship framework data architecture.
 * Strictly adheres to the zero-fabrication mandate: NO synthetic faculty names, fake degrees,
 * or generated portraits. Individual faculty profiles are maintained as an empty roster pending
 * formal client handover (CLIENT_INFORMATION_REQUEST.md Section E1).
 */

import { FacultyMember, FacultyMentorshipPillar } from '../types/content';
import { VerificationStatus, VerificationMetadata } from '../types/verification';
import { OFFICIAL_SOURCES } from './sources';

/**
 * Individual faculty roster.
 * Strictly empty pending client handover of audited faculty names, designations, and qualifications.
 * Operational faculty deployment is verified via SRC-07.
 */
export const FACULTY_MEMBERS: FacultyMember[] = [];

/**
 * Metadata reflecting the current status of the individual faculty directory.
 */
export const FACULTY_ROSTER_METADATA: VerificationMetadata = {
  status: VerificationStatus.PENDING_VERIFICATION,
  sources: [OFFICIAL_SOURCES.SRC_01, OFFICIAL_SOURCES.SRC_07],
  lastAudited: '2026-09-18',
  reviewNotes: 'Specialized competitive entrance faculty deployment at the Kalaburagi campus is documented (SRC-07). Full individual roster, designations, and academic profiles are pending formal institutional handover per Client Information Request (Item E1). Zero synthetic profiles permitted.',
};

export const FACULTY_METADATA: VerificationMetadata = FACULTY_ROSTER_METADATA;

/**
 * Verified Institutional Mentorship & Faculty Framework (Phase 0B Record 8).
 * Articulates the operational teaching and mentoring model deployed at the campus.
 */
export const FACULTY_MENTORSHIP_FRAMEWORK: FacultyMentorshipPillar[] = [
  {
    id: 'mentor-pillar-1',
    title: 'Dual-Domain Subject Expertise',
    description: 'Faculty teams combine deep mastery of the Karnataka State Pre-University Board syllabus with specialized competitive coaching methodology for NEET, JEE, and KCET.',
    verification: {
      status: VerificationStatus.VERIFIED_OFFICIAL,
      sources: [OFFICIAL_SOURCES.SRC_01, OFFICIAL_SOURCES.SRC_02, OFFICIAL_SOURCES.SRC_07],
      lastAudited: '2026-09-18',
      reviewNotes: 'Collaborative academic model verified through joint lecturer refresher workshops (SRC-02) and active campus deployments (SRC-07).',
    },
  },
  {
    id: 'mentor-pillar-2',
    title: 'Personalized Daily Doubt Clinics',
    description: 'Scheduled daily doubt-clearing sessions conducted after lecture hours, enabling students to resolve conceptual bottlenecks one-on-one with subject specialists.',
    verification: {
      status: VerificationStatus.CLIENT_PROVIDED,
      sources: [OFFICIAL_SOURCES.SRC_01, OFFICIAL_SOURCES.SRC_03],
      lastAudited: '2026-09-18',
      reviewNotes: 'Standard Hanchinmani pedagogical mechanism specified in institutional brief.',
    },
  },
  {
    id: 'mentor-pillar-3',
    title: 'Dedicated Batch Mentorship',
    description: 'Each student cohort is assigned an academic mentor responsible for tracking individual test performance trends, study discipline, and stress management.',
    verification: {
      status: VerificationStatus.CLIENT_PROVIDED,
      sources: [OFFICIAL_SOURCES.SRC_01],
      lastAudited: '2026-09-18',
    },
  },
  {
    id: 'mentor-pillar-4',
    title: 'Systematic Parent Progress Appraisals',
    description: 'Periodic performance consultations and structured review meetings to communicate objective assessment trends and attendance analytics to parents.',
    verification: {
      status: VerificationStatus.CLIENT_PROVIDED,
      sources: [OFFICIAL_SOURCES.SRC_01, OFFICIAL_SOURCES.SRC_03],
      lastAudited: '2026-09-18',
    },
  },
];

export const MENTORSHIP_FRAMEWORK = {
  frameworkName: 'Collaborative Integrated Mentorship Model',
  pillars: FACULTY_MENTORSHIP_FRAMEWORK,
  pedagogicalModel: {
    evaluationCadence: 'Weekly unit tests and fortnightly cumulative assessments',
    doubtResolutionCadence: 'Daily post-lecture doubt clinics with resident subject experts',
  },
};
