/**
 * @file results.ts
 * @description Centralized competitive examination results and academic merit data architecture.
 * HIGH-RISK DATA ZONE: Strictly enforces the editorial separation between parent-network historical
 * track records and alliance-specific cohort results.
 * Grounded in OFFICIAL_SOURCE_OF_TRUTH.md, SRC-08, and VERIFICATION_CONFLICTS.md.
 */

import { Result, ResultScope } from '../types/content';
import { VerificationStatus, VerificationMetadata } from '../types/verification';
import { OFFICIAL_SOURCES } from './sources';

/**
 * Dedicated Kalaburagi Alliance Cohort Results.
 * Maintained as an empty verified dataset pending client handover of official merit lists.
 * Under zero-fabrication mandate, NO simulated or fake ranks are permitted.
 */
export const ALLIANCE_COHORT_RESULTS: Result[] = [];

/**
 * Audit metadata for alliance-specific results.
 */
export const ALLIANCE_RESULTS_METADATA: VerificationMetadata = {
  status: VerificationStatus.PENDING_VERIFICATION,
  sources: [OFFICIAL_SOURCES.SRC_01],
  lastAudited: '2026-09-18',
  reviewNotes: 'Dedicated NPS Kalaburagi alliance cohort examination statistics are awaiting formal institutional verification and compilation per Client Information Request (Item H1). Zero synthetic results permitted.',
};

export const EXAM_RESULTS_METADATA: VerificationMetadata = ALLIANCE_RESULTS_METADATA;

/**
 * Parent Network Historical Track Record (Hanchinmani Institutes 2026 Public Disclosures).
 * Explicitly scoped as PARENT_NETWORK_TRACK_RECORD and marked CLIENT_APPROVAL_REQUIRED.
 * These metrics MUST NOT be presented as alliance-specific achievements without clear attribution.
 */
export const PARENT_NETWORK_TRACK_RECORD: Result[] = [
  {
    id: 'res-jee-main-2026-top1',
    year: 2026,
    examName: 'JEE Main 2026',
    scoreOrRankMetric: '99.45 Percentile',
    scope: ResultScope.PARENT_NETWORK_TRACK_RECORD,
    attributableBody: 'Hanchinmani Institutes Parent Academic Network (Dharwad Heritage)',
    mandatoryAttributionNotice: 'Historical benchmark achieved within the Hanchinmani Institutes competitive coaching network; requires client sign-off for public alliance contextualization.',
    collegeOrBatchNote: 'Hanchinmani PU Science College Network',
    verification: {
      status: VerificationStatus.CLIENT_APPROVAL_REQUIRED,
      sources: [OFFICIAL_SOURCES.SRC_08],
      lastAudited: '2026-09-18',
      reviewNotes: 'Parent network public disclosure (SRC-08). Client approval required to present as heritage benchmark on alliance portal.',
    },
  },
  {
    id: 'res-jee-main-2026-top2',
    year: 2026,
    examName: 'JEE Main 2026',
    scoreOrRankMetric: '99.12 Percentile',
    scope: ResultScope.PARENT_NETWORK_TRACK_RECORD,
    attributableBody: 'Hanchinmani Institutes Parent Academic Network (Dharwad Heritage)',
    mandatoryAttributionNotice: 'Historical benchmark achieved within the Hanchinmani Institutes competitive coaching network.',
    collegeOrBatchNote: 'Hanchinmani PU Science College Network',
    verification: {
      status: VerificationStatus.CLIENT_APPROVAL_REQUIRED,
      sources: [OFFICIAL_SOURCES.SRC_08],
      lastAudited: '2026-09-18',
    },
  },
  {
    id: 'res-kcet-2026-rank-331',
    year: 2026,
    examName: 'KCET 2026 (Engineering)',
    scoreOrRankMetric: 'State Rank 331',
    candidateName: 'Santosh Laxanatti',
    scope: ResultScope.PARENT_NETWORK_TRACK_RECORD,
    attributableBody: 'Hanchinmani Institutes Parent Academic Network (Dharwad Heritage)',
    mandatoryAttributionNotice: 'Historical merit rank achieved under Hanchinmani competitive pedagogy.',
    collegeOrBatchNote: 'Hanchinmani PU Science College Network',
    verification: {
      status: VerificationStatus.CLIENT_APPROVAL_REQUIRED,
      sources: [OFFICIAL_SOURCES.SRC_08],
      lastAudited: '2026-09-18',
    },
  },
  {
    id: 'res-kcet-2026-rank-687',
    year: 2026,
    examName: 'KCET 2026 (Engineering)',
    scoreOrRankMetric: 'State Rank 687',
    candidateName: 'Shreyas B. S.',
    scope: ResultScope.PARENT_NETWORK_TRACK_RECORD,
    attributableBody: 'Hanchinmani Institutes Parent Academic Network (Dharwad Heritage)',
    mandatoryAttributionNotice: 'Historical merit rank achieved under Hanchinmani competitive pedagogy.',
    collegeOrBatchNote: 'Hanchinmani PU Science College Network',
    verification: {
      status: VerificationStatus.CLIENT_APPROVAL_REQUIRED,
      sources: [OFFICIAL_SOURCES.SRC_08],
      lastAudited: '2026-09-18',
    },
  },
  {
    id: 'res-neet-2026-score-659',
    year: 2026,
    examName: 'NEET (UG) 2026',
    scoreOrRankMetric: 'Top Score: 659 Marks',
    scope: ResultScope.PARENT_NETWORK_TRACK_RECORD,
    attributableBody: 'Hanchinmani Institutes Parent Academic Network (Dharwad Heritage)',
    mandatoryAttributionNotice: 'High-percentile medical entrance score achieved through Hanchinmani NEET coaching methodology.',
    collegeOrBatchNote: 'Hanchinmani PU Science College Network',
    verification: {
      status: VerificationStatus.CLIENT_APPROVAL_REQUIRED,
      sources: [OFFICIAL_SOURCES.SRC_08],
      lastAudited: '2026-09-18',
    },
  },
];
