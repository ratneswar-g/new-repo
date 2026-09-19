/**
 * @file contentHelpers.ts
 * @description Centralized content governance helpers to enforce factual integrity,
 * prevent accidental publication of unverified claims, and resolve institutional sources.
 */

import { VerificationStatus, VerificationMetadata, SourceReference } from '../types/verification';
import { OFFICIAL_SOURCES } from '../data/sources';

/**
 * Determines whether a piece of content or entity is authorized for direct public publication.
 * Only VERIFIED_OFFICIAL and CLIENT_PROVIDED material may be presented as verified fact.
 * Content marked CLIENT_APPROVAL_REQUIRED, PENDING_VERIFICATION, NOT_AVAILABLE, or
 * NOT_PERMITTED_TO_PUBLISH must remain suppressed or presented with appropriate attribution disclosures.
 */
export function isPublishable(
  target: VerificationStatus | VerificationMetadata | { verification: VerificationMetadata } | undefined
): boolean {
  if (!target) return false;

  let status: VerificationStatus;
  if (typeof target === 'string') {
    status = target;
  } else if ('verification' in target) {
    status = target.verification.status;
  } else {
    status = target.status;
  }

  return (
    status === VerificationStatus.VERIFIED_OFFICIAL ||
    status === VerificationStatus.CLIENT_PROVIDED
  );
}

/**
 * Returns whether an item specifically requires client executive sign-off before publishing.
 */
export function isClientApprovalRequired(
  target: VerificationStatus | VerificationMetadata | { verification: VerificationMetadata } | undefined
): boolean {
  if (!target) return false;
  const status = typeof target === 'string' ? target : 'verification' in target ? target.verification.status : target.status;
  return status === VerificationStatus.CLIENT_APPROVAL_REQUIRED;
}

/**
 * Returns a professional, client-ready explanation for placeholder presentation,
 * strictly avoiding placeholder clichés, lorem ipsum, or internal developer slang.
 */
export function getPlaceholderReason(
  target: VerificationStatus | VerificationMetadata | { verification: VerificationMetadata } | undefined
): string {
  if (!target) return 'Official institutional documentation is being collated for publication.';

  const status = typeof target === 'string' ? target : 'verification' in target ? target.verification.status : target.status;

  switch (status) {
    case VerificationStatus.CLIENT_APPROVAL_REQUIRED:
      return 'Institutional records and historical metrics pending final client executive authorization.';
    case VerificationStatus.PENDING_VERIFICATION:
      return 'Official data undergoing statutory verification and scheduling confirmation.';
    case VerificationStatus.NOT_AVAILABLE:
      return 'Official documentation or digital assets are currently awaiting institutional handover.';
    case VerificationStatus.NOT_PERMITTED_TO_PUBLISH:
      return 'This material is restricted by institutional privacy and data governance policies.';
    case VerificationStatus.CLIENT_PROVIDED:
      return 'Information provided per institutional mandate and active for review.';
    case VerificationStatus.VERIFIED_OFFICIAL:
      return 'Authenticated against Level 1 institutional records and statutory board filings.';
    default:
      return 'Official institutional documentation pending formal verification.';
  }
}

/**
 * Resolves a source reference by ID or code (e.g. 'SRC-01', 'src-01', 'SRC_01').
 */
export function getSourceReference(codeOrId: string): SourceReference | undefined {
  const normalized = codeOrId.toUpperCase().replace('-', '_');
  if (OFFICIAL_SOURCES[normalized]) {
    return OFFICIAL_SOURCES[normalized];
  }
  return Object.values(OFFICIAL_SOURCES).find(
    (s) => s.code.toUpperCase() === codeOrId.toUpperCase() || s.id.toLowerCase() === codeOrId.toLowerCase()
  );
}

/**
 * Filters a list of entities to only those authorized for public publication.
 */
export function filterPublishable<T extends { verification: VerificationMetadata }>(items: T[]): T[] {
  return items.filter((item) => isPublishable(item.verification));
}

/**
 * Formats user-facing governance badges without exposing raw developer enum strings.
 */
export function getGovernanceBadgeDetails(status: VerificationStatus): {
  label: string;
  tone: 'emerald' | 'amber' | 'blue' | 'slate' | 'rose';
  description: string;
} {
  switch (status) {
    case VerificationStatus.VERIFIED_OFFICIAL:
      return {
        label: 'Statutory Verified Record',
        tone: 'emerald',
        description: 'Authenticated against Level 1 institutional portal and statutory filings.',
      };
    case VerificationStatus.CLIENT_PROVIDED:
      return {
        label: 'Client Mandate Documented',
        tone: 'blue',
        description: 'Supplied directly in official institutional briefing parameters.',
      };
    case VerificationStatus.CLIENT_APPROVAL_REQUIRED:
      return {
        label: 'Attribution Approval Required',
        tone: 'amber',
        description: 'Triangulated from parent network records; requires explicit client sign-off.',
      };
    case VerificationStatus.PENDING_VERIFICATION:
      return {
        label: 'Pending Formal Verification',
        tone: 'amber',
        description: 'Under active verification with institutional registrars.',
      };
    case VerificationStatus.NOT_AVAILABLE:
      return {
        label: 'Awaiting Handover',
        tone: 'slate',
        description: 'Official assets/records awaiting institutional delivery.',
      };
    case VerificationStatus.NOT_PERMITTED_TO_PUBLISH:
      return {
        label: 'Restricted Publication',
        tone: 'rose',
        description: 'Restricted under student privacy or institutional guidelines.',
      };
  }
}
