/**
 * @file sources.ts
 * @description Master register of verified official, client-provided, and secondary sources.
 * Aligned with SOURCE_REGISTER.md and OFFICIAL_SOURCE_OF_TRUTH.md.
 */

import { SourceReference, SourceTier } from '../types/verification';

export const OFFICIAL_SOURCES: Record<string, SourceReference> = {
  SRC_01: {
    id: 'src-01',
    code: 'SRC-01',
    title: 'Client Information & Requirements Brief',
    sourceType: SourceTier.LEVEL_2_CLIENT,
    authority: 'Institutional Leadership / Sponsoring Council',
    retrievalDate: '2026-09-18',
    notes: 'Primary client requirements brief specifying the NPS–Hanchinmani Institutes Academic Alliance parameters.',
  },
  SRC_02: {
    id: 'src-02',
    code: 'SRC-02',
    title: 'The Hindu: District-Level Refresher Workshop for Pre-University Lecturers at NPS PU College Kalaburagi',
    sourceType: SourceTier.LEVEL_3_SECONDARY,
    authority: 'The Hindu (National Newspaper of Record)',
    url: 'https://www.thehindu.com',
    retrievalDate: '2026-09-18',
    notes: 'Journalistic documentation verifying academic workshop at NPS PU College Shahabad Road campus.',
  },
  SRC_03: {
    id: 'src-03',
    code: 'SRC-03',
    title: 'Smt. Vidya P. Hanchinmani PU Science College Official Portal',
    sourceType: SourceTier.LEVEL_1_STATUTORY,
    authority: 'Hanchinmani Institutes / Shantesh Education Society',
    url: 'https://hanchinmanicollege.com',
    retrievalDate: '2026-09-18',
    notes: 'Official portal establishing 30-year legacy (est. 1994), PU Science streams, and competitive entrance tracks.',
  },
  SRC_04: {
    id: 'src-04',
    code: 'SRC-04',
    title: 'Hanchinmani CBSE School & Educational Society Portal',
    sourceType: SourceTier.LEVEL_1_STATUTORY,
    authority: 'Shantesh Education Society Dharwad',
    url: 'https://hanchinmanicbseschool.com',
    retrievalDate: '2026-09-18',
    notes: 'Founder Chairman Prof. P.R. Hanchinmani & Founder Secretary Manoj P. Hanchinmani leadership documentation.',
  },
  SRC_05: {
    id: 'src-05',
    code: 'SRC-05',
    title: 'National Public School Kalaburagi Official Portal',
    sourceType: SourceTier.LEVEL_1_STATUTORY,
    authority: 'Sanskar Trust Gulbarga',
    url: 'https://www.npskalaburagi.com',
    retrievalDate: '2026-09-18',
    notes: 'Official campus coordinates, founding in 2018, PU college inauguration in 2022, and contact telephony.',
  },
  SRC_06: {
    id: 'src-06',
    code: 'SRC-06',
    title: 'Department of School Education (PUC Division) Karnataka',
    sourceType: SourceTier.LEVEL_1_STATUTORY,
    authority: 'Government of Karnataka Pre-University Examination Board',
    retrievalDate: '2026-09-18',
    notes: 'Statutory board curriculum specifications for I & II PUC Science.',
  },
  SRC_07: {
    id: 'src-07',
    code: 'SRC-07',
    title: 'Academic Faculty Professional Deployments',
    sourceType: SourceTier.LEVEL_3_SECONDARY,
    authority: 'Institutional Professional Documentation',
    retrievalDate: '2026-09-18',
    notes: 'Verified faculty operational deployment: Hanchinmani entrance coaching faculty at NPS PU College Kalaburagi.',
  },
  SRC_08: {
    id: 'src-08',
    code: 'SRC-08',
    title: 'Institutional Results Disclosures (Hanchinmani 2026 Records)',
    sourceType: SourceTier.LEVEL_1_STATUTORY,
    authority: 'Smt. Vidya P. Hanchinmani PU Science College Dharwad',
    url: 'https://hanchinmanicollege.com',
    retrievalDate: '2026-09-18',
    notes: 'Historic parent-network metrics: JEE Main 99.45%/99.12%, KCET Ranks 331/687, NEET 659. Requires explicit client attribution before publishing on alliance portal.',
  },
};
