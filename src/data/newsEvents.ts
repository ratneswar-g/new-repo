/**
 * @file newsEvents.ts
 * @description Centralized official circulars, verified institutional events, and academic calendar data architecture.
 * Grounded in OFFICIAL_SOURCE_OF_TRUTH.md, The Hindu journalistic report (SRC-02),
 * and official client directives (SRC-01).
 */

import { NewsEvent } from '../types/content';
import { VerificationStatus, VerificationMetadata } from '../types/verification';
import { OFFICIAL_SOURCES } from './sources';

export const NEWS_AND_EVENTS: NewsEvent[] = [
  {
    id: 'news-refresher-workshop-lecturers',
    title: 'District-Level Refresher Workshop for Pre-University Lecturers',
    date: 'August 2023',
    category: 'workshop',
    summary: 'District-level pedagogical workshop for Pre-University lecturers organized at NPS PU College Kalaburagi in collaboration with the Karnataka PU Department.',
    bodyContent: 'A comprehensive district-level refresher workshop for Pre-University lecturers was hosted at the NPS PU College campus on Shahabad Road, Kalaburagi. Organised under the joint aegis of the Department of School Education (Pre-University), the Karnataka State Pre-University College Principals’ Association, and P.S. Hanchinmani Institutes Dharwad, the session focused on pedagogical advancements, examination paper setting rigor, and synchronized coaching techniques for senior-secondary science educators across the district.',
    venue: 'Auditorium, National Public School & PU College, Shahabad Road, Kalaburagi',
    location: 'Kalaburagi, Karnataka',
    institution: 'National Public School & PU College / P.S. Hanchinmani Institutes',
    organizers: [
      'National Public School & PU College, Kalaburagi',
      'P.S. Hanchinmani Institutes, Dharwad',
      'Department of School Education (Pre-University), Kalaburagi',
      'Karnataka State Pre-University College Principals’ Association',
    ],
    verification: {
      status: VerificationStatus.VERIFIED_OFFICIAL,
      sources: [OFFICIAL_SOURCES.SRC_02],
      lastAudited: '2026-09-18',
      reviewNotes: 'Verified via accredited journalistic reporting in The Hindu (National Daily, SRC-02). Corroborates active institutional partnership and state department collaboration.',
    },
  },
  {
    id: 'news-admissions-open-2026-27',
    title: 'Admissions Open: Two-Year Pre-University Science (Academic Year 2026–2027)',
    date: 'Current Academic Cycle (2026–2027)',
    category: 'admission_announcement',
    summary: 'Formal commencement of admissions for I & II PUC Science streams (PCMB, PCMC, PCMS) with integrated NEET, JEE, and KCET coaching.',
    bodyContent: 'National Public School & PU College, in academic alliance with Hanchinmani Institutes, announces the opening of admissions for the 2026–2027 academic session. Offering two-year Pre-University Science combinations in PCMB, PCMC, and PCMS with synchronized daily competitive entrance coaching for NEET, JEE Main & Advanced, and KCET. Both day-scholar and full residential hostel accommodations are available at the Shahabad Road campus.',
    venue: 'Admissions Desk, NPS Kalaburagi Campus / Telephonic Hotline (+91 6362903788)',
    location: 'Shahabad Road, Kalaburagi',
    institution: 'NPS–Hanchinmani Institutes Academic Alliance',
    organizers: [
      'NPS–Hanchinmani Institutes Academic Alliance',
      'Sanskar Trust Gulbarga',
      'Shantesh Education Society Dharwad',
    ],
    verification: {
      status: VerificationStatus.CLIENT_PROVIDED,
      sources: [OFFICIAL_SOURCES.SRC_01, OFFICIAL_SOURCES.SRC_05],
      lastAudited: '2026-09-18',
      reviewNotes: 'Active admissions cycle authorized per official project brief and campus portal.',
    },
  },
  {
    id: 'news-diagnostic-evaluation-calendar',
    title: 'Pre-University Science Diagnostic & Foundation Counseling Sessions',
    date: 'Ongoing Weekdays & Saturdays',
    category: 'academic_calendar',
    summary: 'Personalized academic counseling and stream selection guidance for 10th Standard / SSLC / CBSE graduates.',
    bodyContent: 'Prospective students and parents are invited to participate in one-on-one stream selection counseling at the Kalaburagi campus. Subject specialists provide diagnostic evaluations to assist aspirants in choosing the optimal combination (PCMB for medical/life sciences, PCMC for computer & engineering sciences, or PCMS for quantitative data sciences) based on aptitude and competitive goals.',
    venue: 'Counseling Chambers, Academic Block, NPS Kalaburagi',
    location: 'Academic Block, Kalaburagi Campus',
    institution: 'Academic Counseling Cell, NPS–Hanchinmani Alliance',
    organizers: ['Academic Counseling Cell, NPS–Hanchinmani Alliance'],
    verification: {
      status: VerificationStatus.CLIENT_PROVIDED,
      sources: [OFFICIAL_SOURCES.SRC_01],
      lastAudited: '2026-09-18',
    },
  },
];

/**
 * Metadata reflecting overall news, circulars, and event verification status.
 */
export const NEWS_EVENTS_METADATA: VerificationMetadata = {
  status: VerificationStatus.VERIFIED_OFFICIAL,
  sources: [OFFICIAL_SOURCES.SRC_02, OFFICIAL_SOURCES.SRC_01, OFFICIAL_SOURCES.SRC_05],
  lastAudited: '2026-09-18',
  reviewNotes: 'Historical milestone event independently verified via The Hindu (SRC-02). Active admissions notices authorized under official client documentation (SRC-01). Future entrance test dates and orientation schedule pending client delivery per CIR Item L1.',
};
