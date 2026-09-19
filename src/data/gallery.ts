/**
 * @file gallery.ts
 * @description Centralized campus media and photographic gallery data architecture.
 * Strictly adheres to the zero-fabrication mandate: NO stock photos, synthetic imagery,
 * or unauthorized downloads. Gallery slots are maintained with structured metadata,
 * ready for official high-resolution photographs upon institutional delivery
 * (OFFICIAL_ASSET_REGISTER.md).
 */

import { GalleryItem } from '../types/content';
import { VerificationStatus, VerificationMetadata } from '../types/verification';
import { OFFICIAL_SOURCES } from './sources';

/**
 * Structured Campus Photographic Gallery Register.
 * All items explicitly set `isPlaceholder: true` and `assetPath: undefined` pending
 * client delivery of authenticated high-resolution files.
 */
export const CAMPUS_GALLERY_ITEMS: (GalleryItem & { pendingNotice: string })[] = [
  {
    id: 'gal-campus-exterior',
    title: 'Main Academic Campus & Administrative Portal',
    category: 'campus',
    caption: 'Front facade and landscaped entrance of the National Public School & PU College campus on Shahabad Road, Kalaburagi.',
    placeholderAlt: 'Architectural elevation of the main campus building at Shahabad Road, Kalaburagi (Awaiting Official Photo)',
    assetPath: undefined,
    isPlaceholder: true,
    assetCode: 'IMG-02 (AST-04)',
    institutionAttribution: 'National Public School & PU College',
    campusLocation: 'Shahabad Road Campus, Kalaburagi',
    pendingNotice: 'Official campus photography pending client handover.',
    verification: {
      status: VerificationStatus.NOT_AVAILABLE,
      sources: [OFFICIAL_SOURCES.SRC_05],
      lastAudited: '2026-09-18',
      reviewNotes: 'High-resolution exterior photography pending client handover per Asset Register (AST-04).',
    },
  },
  {
    id: 'gal-smart-classrooms',
    title: 'Digital Smart Classrooms',
    category: 'classrooms',
    caption: 'Airy, modern lecture halls configured for integrated competitive problem-solving and AV-assisted curriculum delivery.',
    placeholderAlt: 'Modern classroom with audio-visual instructional boards (Awaiting Official Photo)',
    assetPath: undefined,
    isPlaceholder: true,
    assetCode: 'IMG-03 (AST-05)',
    institutionAttribution: 'NPS–Hanchinmani Academic Alliance',
    campusLocation: 'Shahabad Road Campus, Kalaburagi',
    pendingNotice: 'Official campus photography pending client handover.',
    verification: {
      status: VerificationStatus.NOT_AVAILABLE,
      sources: [OFFICIAL_SOURCES.SRC_05],
      lastAudited: '2026-09-18',
      reviewNotes: 'Classroom interior photographs pending client handover per Asset Register (AST-05).',
    },
  },
  {
    id: 'gal-physics-lab',
    title: 'Physics Experimental Laboratory',
    category: 'laboratories',
    caption: 'Standardized apparatus for optics, mechanics, electrical circuits, and board practicals.',
    placeholderAlt: 'Students and apparatus in the Physics Practical Laboratory (Awaiting Official Photo)',
    assetPath: undefined,
    isPlaceholder: true,
    assetCode: 'IMG-04 (AST-06)',
    institutionAttribution: 'National Public School & PU College',
    campusLocation: 'Shahabad Road Campus, Kalaburagi',
    pendingNotice: 'Official academic and laboratory photography pending client handover.',
    verification: {
      status: VerificationStatus.NOT_AVAILABLE,
      sources: [OFFICIAL_SOURCES.SRC_05],
      lastAudited: '2026-09-18',
      reviewNotes: 'Physics lab photography pending client handover per Asset Register (AST-06).',
    },
  },
  {
    id: 'gal-chemistry-lab',
    title: 'Chemistry Wet Analysis Laboratory',
    category: 'laboratories',
    caption: 'Individual titration stations, salt analysis desks, and standardized safety infrastructure.',
    placeholderAlt: 'Chemistry practical laboratory benches and reagents (Awaiting Official Photo)',
    assetPath: undefined,
    isPlaceholder: true,
    assetCode: 'IMG-04 (AST-07)',
    institutionAttribution: 'National Public School & PU College',
    campusLocation: 'Shahabad Road Campus, Kalaburagi',
    pendingNotice: 'Official academic and laboratory photography pending client handover.',
    verification: {
      status: VerificationStatus.NOT_AVAILABLE,
      sources: [OFFICIAL_SOURCES.SRC_05],
      lastAudited: '2026-09-18',
      reviewNotes: 'Chemistry lab photography pending client handover per Asset Register (AST-07).',
    },
  },
  {
    id: 'gal-biology-lab',
    title: 'Biology & Medical Life Sciences Laboratory',
    category: 'laboratories',
    caption: 'Precision microscopes, botanical herbarium collections, and anatomical specimens supporting NEET biology.',
    placeholderAlt: 'Biology microscopy stations and biological specimens (Awaiting Official Photo)',
    assetPath: undefined,
    isPlaceholder: true,
    assetCode: 'IMG-04 (AST-08)',
    institutionAttribution: 'National Public School & PU College',
    campusLocation: 'Shahabad Road Campus, Kalaburagi',
    pendingNotice: 'Official academic and laboratory photography pending client handover.',
    verification: {
      status: VerificationStatus.NOT_AVAILABLE,
      sources: [OFFICIAL_SOURCES.SRC_05],
      lastAudited: '2026-09-18',
      reviewNotes: 'Biology lab photography pending client handover per Asset Register (AST-08).',
    },
  },
  {
    id: 'gal-computer-lab',
    title: 'Computer & Online Examination Center',
    category: 'laboratories',
    caption: 'High-speed networked computer terminals for PCMC stream practicals and simulated Computer-Based Testing.',
    placeholderAlt: 'Networked computer laboratory workstations (Awaiting Official Photo)',
    assetPath: undefined,
    isPlaceholder: true,
    assetCode: 'IMG-05 (AST-09)',
    institutionAttribution: 'National Public School & PU College',
    campusLocation: 'Shahabad Road Campus, Kalaburagi',
    pendingNotice: 'Official academic and laboratory photography pending client handover.',
    verification: {
      status: VerificationStatus.NOT_AVAILABLE,
      sources: [OFFICIAL_SOURCES.SRC_05],
      lastAudited: '2026-09-18',
      reviewNotes: 'Computer lab photography pending client handover per Asset Register (AST-09).',
    },
  },
  {
    id: 'gal-central-library',
    title: 'Central Library & Reference Center',
    category: 'library',
    caption: 'Extensive repository of NCERT textbooks, competitive reference volumes, and silent individual study cubicles.',
    placeholderAlt: 'Library book stacks and reading hall (Awaiting Official Photo)',
    assetPath: undefined,
    isPlaceholder: true,
    assetCode: 'IMG-06 (AST-10)',
    institutionAttribution: 'National Public School & PU College',
    campusLocation: 'Shahabad Road Campus, Kalaburagi',
    pendingNotice: 'Official academic and laboratory photography pending client handover.',
    verification: {
      status: VerificationStatus.NOT_AVAILABLE,
      sources: [OFFICIAL_SOURCES.SRC_05],
      lastAudited: '2026-09-18',
      reviewNotes: 'Library photography pending client handover per Asset Register (AST-10).',
    },
  },
  {
    id: 'gal-hostel-residential',
    title: 'Residential Hostels & Study Quarters',
    category: 'hostel',
    caption: 'Secure, dedicated residential blocks for boys and girls with study desks and dining facilities.',
    placeholderAlt: 'Hostel residential buildings and study halls (Awaiting Official Photo)',
    assetPath: undefined,
    isPlaceholder: true,
    assetCode: 'IMG-07 (AST-11)',
    institutionAttribution: 'National Public School & PU College',
    campusLocation: 'Shahabad Road Campus, Kalaburagi',
    pendingNotice: 'Official campus photography pending client handover.',
    verification: {
      status: VerificationStatus.NOT_AVAILABLE,
      sources: [OFFICIAL_SOURCES.SRC_05],
      lastAudited: '2026-09-18',
      reviewNotes: 'Hostel photography pending client handover per Asset Register (AST-11).',
    },
  },
  {
    id: 'gal-sports-facilities',
    title: 'Outdoor Grounds & Physical Activities Arena',
    category: 'sports',
    caption: 'Dedicated outdoor sports grounds supporting student fitness, volleyball, and physical wellness.',
    placeholderAlt: 'Outdoor sports courts and athletic grounds (Awaiting Official Photo)',
    assetPath: undefined,
    isPlaceholder: true,
    assetCode: 'IMG-09 (AST-12)',
    institutionAttribution: 'National Public School & PU College',
    campusLocation: 'Shahabad Road Campus, Kalaburagi',
    pendingNotice: 'Official campus photography pending client handover.',
    verification: {
      status: VerificationStatus.NOT_AVAILABLE,
      sources: [OFFICIAL_SOURCES.SRC_05],
      lastAudited: '2026-09-18',
      reviewNotes: 'Sports grounds photography pending client handover per Asset Register (AST-12).',
    },
  },
  {
    id: 'gal-academic-events',
    title: 'Academic Seminars & Institutional Events',
    category: 'events',
    caption: 'Faculty workshops, orientation assemblies, and academic seminars conducted on campus.',
    placeholderAlt: 'Campus auditorium and academic seminar proceedings (Awaiting Official Photo)',
    assetPath: undefined,
    isPlaceholder: true,
    assetCode: 'IMG-11 (AST-13)',
    institutionAttribution: 'NPS–Hanchinmani Academic Alliance',
    campusLocation: 'Shahabad Road Campus, Kalaburagi',
    pendingNotice: 'Official student/event photography pending client approval.',
    verification: {
      status: VerificationStatus.NOT_AVAILABLE,
      sources: [OFFICIAL_SOURCES.SRC_02, OFFICIAL_SOURCES.SRC_05],
      lastAudited: '2026-09-18',
      reviewNotes: 'Event documentary photography awaiting institutional delivery per Asset Register (AST-13).',
    },
  },
];

/**
 * Audit metadata for overall media assets.
 */
export const GALLERY_METADATA: VerificationMetadata = {
  status: VerificationStatus.NOT_AVAILABLE,
  sources: [OFFICIAL_SOURCES.SRC_01, OFFICIAL_SOURCES.SRC_05],
  lastAudited: '2026-09-18',
  reviewNotes: 'Official high-resolution photography awaiting institutional photoshoot handover per OFFICIAL_ASSET_REGISTER.md. All gallery cards render accessible structural placeholders with clear governance notes.',
};
