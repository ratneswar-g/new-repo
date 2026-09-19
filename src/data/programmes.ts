/**
 * @file programmes.ts
 * @description Centralized academic programmes and entrance examination preparation data architecture.
 * Grounded in OFFICIAL_SOURCE_OF_TRUTH.md, Karnataka PU Board standards (SRC-06),
 * and Hanchinmani Institutes official portals (SRC-01, SRC-03).
 */

import { Programme, AcademicStream, CoachingTrack, EntranceExamTrack } from '../types/content';
import { VerificationStatus } from '../types/verification';
import { OFFICIAL_SOURCES } from './sources';

/**
 * Pre-University Science Academic Programmes (2-Year Full-Time).
 * Aligned with the Department of School Education (PUC Division) Karnataka Board Curriculum.
 */
export const ACADEMIC_PROGRAMMES: Programme[] = [
  {
    id: 'prog-pu-science-pcmb',
    slug: 'pcmb',
    title: 'Two-Year Pre-University Science — PCMB Stream',
    category: 'pu_science',
    streams: [AcademicStream.PCMB],
    coachingTracks: [CoachingTrack.NEET, CoachingTrack.KCET, CoachingTrack.JEE_MAIN],
    durationYears: 2,
    targetExam: 'Karnataka II PUC Board Examination, NEET (UG), KCET',
    eligibility: 'Pass in 10th Standard / SSLC / CBSE Class X / ICSE Class X or equivalent recognized examination with Science & Mathematics.',
    overview: 'Two-year Pre-University Science programme combining Karnataka State PU Board curriculum delivery with integrated competitive entrance-exam preparation in Physics, Chemistry, Mathematics, and Biology.',
    curriculumHighlights: [
      'Karnataka PU Board core curriculum in Physics, Chemistry, Mathematics, and Biology.',
      'Integrated entrance-exam preparation for NEET, KCET, and JEE Main.',
      'Laboratory practicals in Physics, Chemistry, and Biology laboratories.',
    ],
    scheduleFormat: 'Integrated academic and entrance-exam preparation',
    verification: {
      status: VerificationStatus.VERIFIED_OFFICIAL,
      sources: [OFFICIAL_SOURCES.SRC_01, OFFICIAL_SOURCES.SRC_03, OFFICIAL_SOURCES.SRC_06],
      lastAudited: '2026-09-18',
      reviewNotes: 'Standard Karnataka PU Science curriculum verified against board regulations and Hanchinmani offerings.',
    },
  },
  {
    id: 'prog-pu-science-pcmc',
    slug: 'pcmc',
    title: 'Two-Year Pre-University Science — PCMC Stream',
    category: 'pu_science',
    streams: [AcademicStream.PCMC],
    coachingTracks: [CoachingTrack.JEE_MAIN, CoachingTrack.KCET],
    durationYears: 2,
    targetExam: 'Karnataka II PUC Board Examination, JEE Main, KCET',
    eligibility: 'Pass in 10th Standard / SSLC / CBSE Class X / ICSE Class X or equivalent with Mathematics and Science.',
    overview: 'Two-year Pre-University Science curriculum combining Karnataka State PU Board core subjects (Physics, Chemistry, Mathematics, and Computer Science) with integrated engineering entrance-exam preparation.',
    curriculumHighlights: [
      'Karnataka PU Board core curriculum in Physics, Chemistry, Mathematics, and Computer Science.',
      'Integrated entrance-exam preparation for JEE Main and KCET.',
      'Computer Science instruction with practical laboratory sessions.',
    ],
    scheduleFormat: 'Integrated academic and entrance-exam preparation',
    verification: {
      status: VerificationStatus.VERIFIED_OFFICIAL,
      sources: [OFFICIAL_SOURCES.SRC_01, OFFICIAL_SOURCES.SRC_03, OFFICIAL_SOURCES.SRC_06],
      lastAudited: '2026-09-18',
    },
  },
  {
    id: 'prog-pu-science-pcms',
    slug: 'pcms',
    title: 'Two-Year Pre-University Science — PCMS Stream',
    category: 'pu_science',
    streams: [AcademicStream.PCMS],
    coachingTracks: [CoachingTrack.KCET, CoachingTrack.JEE_MAIN],
    durationYears: 2,
    targetExam: 'Karnataka II PUC Board Examination, KCET, JEE Main',
    eligibility: 'Pass in 10th Standard / SSLC / CBSE Class X / ICSE Class X or equivalent with strong quantitative aptitude.',
    overview: 'Two-year Pre-University Science curriculum pairing Physics, Chemistry, and Mathematics with Statistics, combined with integrated entrance-exam preparation.',
    curriculumHighlights: [
      'Karnataka PU Board core curriculum in Physics, Chemistry, Mathematics, and Statistics.',
      'Integrated entrance-exam preparation for KCET and JEE Main.',
    ],
    scheduleFormat: 'Integrated academic and entrance-exam preparation',
    verification: {
      status: VerificationStatus.VERIFIED_OFFICIAL,
      sources: [OFFICIAL_SOURCES.SRC_01, OFFICIAL_SOURCES.SRC_03, OFFICIAL_SOURCES.SRC_06],
      lastAudited: '2026-09-18',
    },
  },
  {
    id: 'prog-foundation-secondary',
    slug: 'foundation-secondary',
    title: 'Secondary Academic Foundation Programme (Classes 8–10)',
    category: 'foundation',
    streams: [],
    coachingTracks: [CoachingTrack.FOUNDATION],
    durationYears: 3,
    targetExam: 'School Board Examinations, NTSE, Science & Mathematics Olympiads, Pre-PUC Readiness',
    eligibility: 'Students enrolled in Secondary School (Classes VIII, IX, or X).',
    overview: 'Academic foundation programme in Science and Mathematics designed to develop conceptual understanding and competitive aptitude for secondary school students before entering Pre-University streams.',
    curriculumHighlights: [
      'Academic foundation in Physics, Chemistry, Biology, and Mathematics.',
      'Focus on fundamental concepts and analytical thinking.',
      'Preparatory foundation for senior-secondary Pre-University Science streams.',
    ],
    scheduleFormat: 'Supplementary academic enrichment schedule coordinated with standard school calendar',
    verification: {
      status: VerificationStatus.CLIENT_PROVIDED,
      sources: [OFFICIAL_SOURCES.SRC_01],
      lastAudited: '2026-09-18',
      reviewNotes: 'Strictly an academic preparatory curriculum; distinguished from non-profit trust entities per Conflict Record 03.',
    },
  },
];

/**
 * Dedicated Competitive Entrance Examination Tracks (NEET, JEE, KCET).
 * Carries verified academic scope and examination relationships.
 */
export const ENTRANCE_EXAM_TRACKS: Record<'NEET' | 'JEE' | 'KCET', EntranceExamTrack> = {
  NEET: {
    id: 'exam-track-neet',
    slug: 'neet',
    examName: 'NEET (UG)',
    fullName: 'National Eligibility cum Entrance Test [NEET (UG)]',
    academicFocus: 'NEET entrance-exam preparation integrated with the Pre-University Science curriculum',
    targetAudience: 'Pre-University students enrolled in the PCMB stream',
    duration: 'Integrated 2-Year Programme across I & II PUC',
    curriculumStructure: 'NEET is presented as an entrance-exam preparation track integrated with the Pre-University Science curriculum.',
    weeklySchedule: 'Integrated academic and entrance-exam preparation.',
    testingMethodology: '',
    residentialRelationship: '',
    programmeRelationship: 'Integrated with the PCMB Pre-University Science programme at the Kalaburagi campus.',
    verification: {
      status: VerificationStatus.VERIFIED_OFFICIAL,
      sources: [OFFICIAL_SOURCES.SRC_01, OFFICIAL_SOURCES.SRC_03],
      lastAudited: '2026-09-18',
      reviewNotes: 'Verified core pedagogical offering of Hanchinmani Institutes deployed at NPS Kalaburagi.',
    },
  },
  JEE: {
    id: 'exam-track-jee',
    slug: 'jee',
    examName: 'JEE Main',
    fullName: 'Joint Entrance Examination (JEE Main)',
    academicFocus: 'JEE Main entrance-exam preparation for engineering admissions',
    targetAudience: 'Pre-University students enrolled in PCMC or PCMB streams',
    duration: 'Integrated 2-Year Programme across I & II PUC',
    curriculumStructure: 'Integrated curriculum aligned with the Pre-University Science syllabus and JEE Main preparation.',
    weeklySchedule: 'Integrated academic and entrance-exam preparation.',
    testingMethodology: '',
    residentialRelationship: '',
    programmeRelationship: 'Integrated with PCMC and PCMB Pre-University Science programmes at the Kalaburagi campus.',
    verification: {
      status: VerificationStatus.VERIFIED_OFFICIAL,
      sources: [OFFICIAL_SOURCES.SRC_01, OFFICIAL_SOURCES.SRC_03],
      lastAudited: '2026-09-18',
      reviewNotes: 'Hanchinmani Institutes heritage includes verified JEE Main 99.45% & 99.12% parent network percentiles (SRC-08).',
    },
  },
  KCET: {
    id: 'exam-track-kcet',
    slug: 'kcet',
    examName: 'KCET',
    fullName: 'Karnataka Common Entrance Test (KCET)',
    academicFocus: 'KCET entrance-exam preparation integrated with the Pre-University academic programme',
    targetAudience: 'Pre-University Science students enrolled in PCMB, PCMC, or PCMS streams',
    duration: 'Integrated 2-Year Programme across I & II PUC',
    curriculumStructure: 'KCET entrance-exam preparation integrated with the Pre-University academic programme.',
    weeklySchedule: 'Integrated academic and entrance-exam preparation.',
    testingMethodology: '',
    residentialRelationship: '',
    programmeRelationship: 'Integrated with PCMB, PCMC, and PCMS Pre-University Science programmes at the Kalaburagi campus.',
    verification: {
      status: VerificationStatus.VERIFIED_OFFICIAL,
      sources: [OFFICIAL_SOURCES.SRC_01, OFFICIAL_SOURCES.SRC_03, OFFICIAL_SOURCES.SRC_06],
      lastAudited: '2026-09-18',
      reviewNotes: 'Heritage includes verified KCET State Engineering Ranks 331 and 687 from Hanchinmani parent network (SRC-08).',
    },
  },
};

/**
 * Convenience aliases for academic display.
 */
export const EXAM_TRACKS = ENTRANCE_EXAM_TRACKS;

export const PU_SCIENCE_PROGRAMMES = ACADEMIC_PROGRAMMES.filter((p) => p.category === 'pu_science');

export const SECONDARY_FOUNDATION_PROGRAMME = ACADEMIC_PROGRAMMES.find((p) => p.category === 'foundation') || ACADEMIC_PROGRAMMES[3];
