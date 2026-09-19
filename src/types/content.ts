/**
 * @file content.ts
 * @description Strongly typed data models for all institutional entities
 * in the NPS–Hanchinmani Institutes Academic Alliance.
 */

import { VerificationStatus, SourceReference, VerificationMetadata } from './verification';

export enum AcademicStream {
  PCMB = 'PCMB (Physics, Chemistry, Mathematics, Biology)',
  PCMC = 'PCMC (Physics, Chemistry, Mathematics, Computer Science)',
  PCMS = 'PCMS (Physics, Chemistry, Mathematics, Statistics)',
}

export enum CoachingTrack {
  NEET = 'NEET (Medical Entrance)',
  JEE_MAIN = 'JEE Main',
  KCET = 'KCET (Karnataka Common Entrance Test)',
  FOUNDATION = 'Foundation Preparatory (Classes 8-10)',
}

export interface Institution {
  id: string;
  name: string;
  shortName: string;
  entityType: 'school_pu_college' | 'coaching_network' | 'academic_alliance';
  governingTrust: string;
  establishedYear?: number;
  campusLocation: string;
  officialWebsite?: string;
  description: string;
  heritageYears?: number;
  puCollegeCode?: string;
  affiliation?: string;
  verification: VerificationMetadata;
}

export interface LeadershipProfile {
  id: string;
  fullName: string;
  role: string;
  institutionId: string;
  designation: string;
  qualifications?: string;
  bioSummary: string;
  message?: string;
  avatarUrl?: string;
  isAllianceWide?: boolean;
  verification: VerificationMetadata;
}

export interface AcademicAlliance {
  id: string;
  allianceName: string;
  shortName: string;
  participatingInstitutions: {
    institutionId: string;
    institutionName: string;
    role: string;
  }[];
  academicFocus: string;
  programmes: string[];
  governingFramework: string;
  campusOperatingLocation: string;
  missionStatement?: string;
  officialExecutionDate?: string;
  partnershipDuration?: string;
  futureExpansionPlans?: string;
  verification: VerificationMetadata;
}

export interface EntranceExamTrack {
  id: string;
  slug: 'neet' | 'jee' | 'kcet';
  examName: string;
  fullName: string;
  academicFocus: string;
  targetAudience: string;
  duration: string;
  curriculumStructure: string;
  weeklySchedule: string;
  testingMethodology: string;
  residentialRelationship: string;
  programmeRelationship: string;
  verification: VerificationMetadata;
}

export interface FacultyMentorshipPillar {
  id: string;
  title: string;
  description: string;
  verification: VerificationMetadata;
}

export interface Programme {
  id: string;
  slug: string;
  title: string;
  category: 'pu_science' | 'integrated_competitive' | 'foundation';
  streams: AcademicStream[];
  coachingTracks: CoachingTrack[];
  durationYears: number;
  targetExam: string;
  eligibility: string;
  overview: string;
  curriculumHighlights: string[];
  scheduleFormat: string;
  verification: VerificationMetadata;
}

export interface FacultyMember {
  id: string;
  fullName: string;
  subject: 'Physics' | 'Chemistry' | 'Mathematics' | 'Biology' | 'Computer Science' | 'General';
  designation: string;
  qualifications: string;
  teachingExperienceYears: number;
  specializationTrack?: CoachingTrack;
  verification: VerificationMetadata;
}

export interface Facility {
  id: string;
  name: string;
  category: 'academic' | 'laboratory' | 'residential' | 'sports' | 'library' | 'safety' | 'transport';
  description: string;
  keyFeatures: string[];
  locationNote: string;
  verification: VerificationMetadata;
}

export enum ResultScope {
  ALLIANCE_SPECIFIC = 'ALLIANCE_SPECIFIC',
  INSTITUTIONAL_HISTORICAL = 'INSTITUTIONAL_HISTORICAL',
  PARENT_NETWORK_TRACK_RECORD = 'PARENT_NETWORK_TRACK_RECORD',
}

export interface Result {
  id: string;
  year: number;
  examName: string;
  scoreOrRankMetric: string;
  candidateName?: string;
  scope: ResultScope;
  attributableBody: string; // e.g. 'Hanchinmani Institutional Heritage Track Record'
  mandatoryAttributionNotice?: string;
  collegeOrBatchNote?: string;
  verification: VerificationMetadata;
}

export interface Achievement {
  id: string;
  year: number;
  title: string;
  awardingBody: string;
  recipientEntity: string;
  description: string;
  verification: VerificationMetadata;
}

export interface SuccessStory {
  id: string;
  studentName: string;
  passingYear: number;
  programmeTrack: string;
  qualifyingExam: string;
  allottedInstitute: string;
  storySummary: string;
  verification: VerificationMetadata;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'campus' | 'classrooms' | 'laboratories' | 'hostel' | 'events' | 'library' | 'sports' | 'academic';
  caption: string;
  placeholderAlt: string;
  assetPath?: string;
  isPlaceholder: boolean;
  assetCode?: string;
  institutionAttribution?: string;
  campusLocation?: string;
  verification: VerificationMetadata;
}

export interface Testimonial {
  id: string;
  authorName: string;
  authorRole: 'student' | 'parent' | 'alumnus' | 'educator';
  batchOrDesignation: string;
  quoteText: string;
  programmeReference?: string;
  verification: VerificationMetadata;
}

export interface NewsEvent {
  id: string;
  title: string;
  date: string;
  category: 'circular' | 'workshop' | 'admission_announcement' | 'academic_calendar';
  summary: string;
  bodyContent: string;
  venue?: string;
  location?: string;
  institution?: string;
  organizers?: string[];
  verification: VerificationMetadata;
}

export interface AdmissionStep {
  stepNumber: number;
  title: string;
  description: string;
  channel: string;
  verification: VerificationMetadata;
}

export interface AdmissionDocument {
  id: string;
  documentName: string;
  requirementType: 'mandatory' | 'optional';
  notes?: string;
  verification: VerificationMetadata;
}

export interface AdmissionInformation {
  academicYear: string;
  eligibilityCriteria: string;
  steps: AdmissionStep[];
  requiredDocuments: AdmissionDocument[];
  feePolicyNote: string;
  scholarshipStatusNote: string;
  verification: VerificationMetadata;
}

export interface ContactInformation {
  institutionName: string;
  campusAddress: {
    surveyNumber: string;
    highway: string;
    landmark: string;
    road: string;
    area: string;
    city: string;
    state: string;
    pinCode: string;
    fullFormatted: string;
  };
  phones: {
    dedicatedPUAdmissions: string;
    generalCampus: string[];
  };
  email: string;
  officeHours?: string;
  verification: VerificationMetadata;
}
