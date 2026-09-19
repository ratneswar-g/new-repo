/**
 * @file verification.ts
 * @description Content verification status taxonomy and source-reference architecture
 * aligned with OFFICIAL_SOURCE_OF_TRUTH.md and SOURCE_REGISTER.md.
 */

export enum VerificationStatus {
  VERIFIED_OFFICIAL = 'VERIFIED_OFFICIAL',
  CLIENT_PROVIDED = 'CLIENT_PROVIDED',
  CLIENT_APPROVAL_REQUIRED = 'CLIENT_APPROVAL_REQUIRED',
  PENDING_VERIFICATION = 'PENDING_VERIFICATION',
  NOT_AVAILABLE = 'NOT_AVAILABLE',
  NOT_PERMITTED_TO_PUBLISH = 'NOT_PERMITTED_TO_PUBLISH',
}

export enum SourceTier {
  LEVEL_1_STATUTORY = 'LEVEL_1_STATUTORY',
  LEVEL_2_CLIENT = 'LEVEL_2_CLIENT',
  LEVEL_3_SECONDARY = 'LEVEL_3_SECONDARY',
}

export interface SourceReference {
  id: string;
  code: string; // e.g., 'SRC-01', 'SRC-02'
  title: string;
  sourceType: SourceTier;
  authority: string;
  url?: string;
  retrievalDate?: string;
  notes?: string;
}

export interface VerifiedField<T> {
  value: T;
  status: VerificationStatus;
  sources: SourceReference[];
  auditNotes?: string;
}

export interface VerificationMetadata {
  status: VerificationStatus;
  sources: SourceReference[];
  lastAudited: string;
  reviewNotes?: string;
}
