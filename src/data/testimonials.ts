/**
 * @file testimonials.ts
 * @description Centralized student, parent, and alumni testimonials data architecture.
 * Strictly adheres to the anti-fabrication mandate: NO invented quotes, synthetic endorsements,
 * or fake persona reviews. Maintained strictly empty pending signed consent and client handover
 * (CLIENT_INFORMATION_REQUEST.md Item K1).
 */

import { Testimonial } from '../types/content';
import { VerificationStatus, VerificationMetadata } from '../types/verification';
import { OFFICIAL_SOURCES } from './sources';

/**
 * Verified Institutional Testimonials.
 * Maintained empty pending signed parent/student testimonials and editorial authorization.
 */
export const VERIFIED_TESTIMONIALS: Testimonial[] = [];

/**
 * Metadata reflecting the status of institutional testimonials.
 */
export const TESTIMONIALS_METADATA: VerificationMetadata = {
  status: VerificationStatus.NOT_AVAILABLE,
  sources: [OFFICIAL_SOURCES.SRC_01],
  lastAudited: '2026-09-18',
  reviewNotes: 'Authentic student and parent testimonials are awaiting collection, signed publication consent, and editorial sign-off per Client Information Request (Item K1). Strictly zero fabricated or anonymous placeholder reviews permitted.',
};
