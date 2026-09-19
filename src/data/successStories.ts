/**
 * @file successStories.ts
 * @description Centralized student success stories and alumni destination data architecture.
 * Strictly adheres to the zero-fabrication mandate: NO synthetic student names, fictitious marks,
 * invented ranks, or stock photos. Maintained empty pending verified student consent and client handover
 * (CLIENT_INFORMATION_REQUEST.md Item J1).
 */

import { SuccessStory } from '../types/content';
import { VerificationStatus, VerificationMetadata } from '../types/verification';
import { OFFICIAL_SOURCES } from './sources';

/**
 * Verified Student Success Stories.
 * Maintained empty pending official alumni profiles and verified medical/engineering seat allotments.
 */
export const STUDENT_SUCCESS_STORIES: SuccessStory[] = [];

/**
 * Metadata reflecting the status of student success stories and alumni profiles.
 */
export const SUCCESS_STORIES_METADATA: VerificationMetadata = {
  status: VerificationStatus.NOT_AVAILABLE,
  sources: [OFFICIAL_SOURCES.SRC_01],
  lastAudited: '2026-09-18',
  reviewNotes: 'Alumni career destinations (admissions to AIIMS, GMCs, IITs, NITs) and verified student case studies are awaiting institutional handover and student privacy consent per Client Information Request (Item J1). Zero fictitious testimonials permitted.',
};
