/**
 * @file navigation.ts
 * @description Centralized, single source-of-truth for all site navigation,
 * route relationships, breadcrumb hierarchies, and footer groupings.
 * Strictly adheres to the Phase 3 Navigation Architecture specification.
 */

import { NavigationItem, NavLinkItem, BreadcrumbItem } from '../types/navigation';

/**
 * Primary Top-Level Navigation Hierarchy:
 * HOME
 * ABOUT (NPS, Hanchinmani Institutes, Academic Alliance, Leadership)
 * ACADEMICS (Programmes, NEET, JEE, KCET)
 * CAMPUS (Overview, Faculty, Facilities, Hostel, Campus Life)
 * RESULTS (Academic Results, Achievements, Success Stories)
 * MEDIA (Gallery, Testimonials, News & Events)
 * ADMISSIONS (Admission Process, Enquiry)
 * CONTACT
 */
export const MAIN_NAVIGATION: NavigationItem[] = [
  {
    id: 'nav-home',
    label: 'Home',
    href: '/',
  },
  {
    id: 'nav-about',
    label: 'About',
    children: [
      {
        id: 'nav-about-nps',
        label: 'NPS',
        href: '/about/nps',
        description: 'National Public School & PU College campus founded under Sanskar Trust Gulbarga.',
      },
      {
        id: 'nav-about-hanchinmani',
        label: 'Hanchinmani Institutes',
        href: '/about/hanchinmani',
        description: 'Established in 1994, offering competitive entrance coaching in Karnataka.',
      },
      {
        id: 'nav-about-alliance',
        label: 'Academic Alliance',
        href: '/about/alliance',
        description: 'Integrated Pre-University education and competitive entrance preparation.',
      },
      {
        id: 'nav-about-leadership',
        label: 'Leadership',
        href: '/about/leadership',
        description: 'Institutional founders and campus leadership profiles.',
      },
    ],
  },
  {
    id: 'nav-academics',
    label: 'Academics',
    children: [
      {
        id: 'nav-academics-programmes',
        label: 'Programmes',
        href: '/academics/programmes',
        description: 'Two-year PU Science combinations (PCMB, PCMC, PCMS) with integrated coaching.',
      },
      {
        id: 'nav-academics-neet',
        label: 'NEET',
        href: '/academics/neet',
        description: 'Comprehensive medical entrance preparation, NCERT mastery, and objective test series.',
      },
      {
        id: 'nav-academics-jee',
        label: 'JEE',
        href: '/academics/jee',
        description: 'Advanced engineering preparation for JEE Main & Advanced with problem clinics.',
      },
      {
        id: 'nav-academics-kcet',
        label: 'KCET',
        href: '/academics/kcet',
        description: 'Karnataka state syllabus alignment, past paper drills, and high-speed accuracy training.',
      },
    ],
  },
  {
    id: 'nav-campus',
    label: 'Campus',
    children: [
      {
        id: 'nav-campus-overview',
        label: 'Overview',
        href: '/campus/overview',
        description: 'Purpose-built academic campus on NH 150 Shahabad Road, Kalaburagi.',
      },
      {
        id: 'nav-campus-faculty',
        label: 'Faculty',
        href: '/campus/faculty',
        description: 'Dedicated subject specialists and personalized doubt-clearing clinics.',
      },
      {
        id: 'nav-campus-facilities',
        label: 'Facilities',
        href: '/campus/facilities',
        description: 'Equipped Physics, Chemistry, Biology, and Computer Science laboratories.',
      },
      {
        id: 'nav-campus-hostel',
        label: 'Hostel',
        href: '/campus/hostel',
        description: 'Supervised residential boarding with hygienic dining and evening study hours.',
      },
      {
        id: 'nav-campus-life',
        label: 'Campus Life',
        href: '/campus/life',
        description: 'Disciplined, student-centric academic culture promoting intellectual well-being.',
      },
    ],
  },
  {
    id: 'nav-results',
    label: 'Results',
    children: [
      {
        id: 'nav-results-academic',
        label: 'Academic Results',
        href: '/results/academic',
        description: 'Board distinction milestones and competitive exam qualifying ranks.',
      },
      {
        id: 'nav-results-achievements',
        label: 'Achievements',
        href: '/results/achievements',
        description: 'Educational milestones, regional recognition, and academic seminars.',
      },
      {
        id: 'nav-results-success-stories',
        label: 'Success Stories',
        href: '/results/success-stories',
        description: 'Verified student journeys securing admissions into premier medical and engineering colleges.',
      },
    ],
  },
  {
    id: 'nav-media',
    label: 'Media',
    children: [
      {
        id: 'nav-media-gallery',
        label: 'Gallery',
        href: '/media/gallery',
        description: 'Visual documentation of campus infrastructure, academic life, and events.',
      },
      {
        id: 'nav-media-testimonials',
        label: 'Testimonials',
        href: '/media/testimonials',
        description: 'Reflections from students, parents, and academic mentors.',
      },
      {
        id: 'nav-media-news-events',
        label: 'News & Events',
        href: '/media/news-events',
        description: 'Official circulars, faculty workshops, and upcoming entrance test dates.',
      },
    ],
  },
  {
    id: 'nav-admissions',
    label: 'Admissions',
    children: [
      {
        id: 'nav-admissions-process',
        label: 'Admission Process',
        href: '/admissions/process',
        description: 'Step-by-step roadmap, eligibility criteria, and document verification guidelines.',
      },
      {
        id: 'nav-admissions-enquiry',
        label: 'Enquiry',
        href: '/admissions/enquiry',
        description: 'Connect with admissions counselors for stream counseling and campus visits.',
      },
    ],
  },
  {
    id: 'nav-contact',
    label: 'Contact',
    href: '/contact',
  },
];

/**
 * Footer Navigation Architecture
 * Organized into clear, logical groups representing core institutional directories.
 */
export const FOOTER_NAVIGATION: { title: string; items: NavLinkItem[] }[] = [
  {
    title: 'About',
    items: [
      { id: 'f-nps', label: 'NPS', href: '/about/nps' },
      { id: 'f-hanchinmani', label: 'Hanchinmani Institutes', href: '/about/hanchinmani' },
      { id: 'f-alliance', label: 'Academic Alliance', href: '/about/alliance' },
      { id: 'f-leadership', label: 'Leadership', href: '/about/leadership' },
    ],
  },
  {
    title: 'Academics',
    items: [
      { id: 'f-programmes', label: 'Programmes', href: '/academics/programmes' },
      { id: 'f-neet', label: 'NEET', href: '/academics/neet' },
      { id: 'f-jee', label: 'JEE', href: '/academics/jee' },
      { id: 'f-kcet', label: 'KCET', href: '/academics/kcet' },
    ],
  },
  {
    title: 'Campus',
    items: [
      { id: 'f-overview', label: 'Overview', href: '/campus/overview' },
      { id: 'f-faculty', label: 'Faculty', href: '/campus/faculty' },
      { id: 'f-facilities', label: 'Facilities', href: '/campus/facilities' },
      { id: 'f-hostel', label: 'Hostel', href: '/campus/hostel' },
      { id: 'f-life', label: 'Campus Life', href: '/campus/life' },
    ],
  },
  {
    title: 'Results & Media',
    items: [
      { id: 'f-academic-results', label: 'Academic Results', href: '/results/academic' },
      { id: 'f-achievements', label: 'Achievements', href: '/results/achievements' },
      { id: 'f-success-stories', label: 'Success Stories', href: '/results/success-stories' },
      { id: 'f-gallery', label: 'Gallery', href: '/media/gallery' },
      { id: 'f-testimonials', label: 'Testimonials', href: '/media/testimonials' },
      { id: 'f-news-events', label: 'News & Events', href: '/media/news-events' },
    ],
  },
  {
    title: 'Admissions & Legal',
    items: [
      { id: 'f-admission-process', label: 'Admission Process', href: '/admissions/process' },
      { id: 'f-admission-enquiry', label: 'Enquiry', href: '/admissions/enquiry' },
      { id: 'f-contact', label: 'Contact', href: '/contact' },
      { id: 'f-privacy', label: 'Privacy Policy', href: '/privacy-policy' },
    ],
  },
];

/**
 * Standard Breadcrumb Map:
 * Exactly conforms to the Phase 3 specification examples:
 * Home → About → NPS
 * Home → About → Hanchinmani Institutes
 * Home → About → Academic Alliance
 * Home → About → Leadership
 * Home → Academics → Programmes
 * Home → Academics → NEET
 * Home → Academics → JEE
 * Home → Academics → KCET
 * Home → Campus → Overview
 * Home → Campus → Faculty
 * Home → Campus → Facilities
 * Home → Campus → Hostel
 * Home → Campus → Campus Life
 * Home → Results → Academic Results
 * Home → Results → Achievements
 * Home → Results → Success Stories
 * Home → Media → Gallery
 * Home → Media → Testimonials
 * Home → Media → News & Events
 * Home → Admissions → Admission Process
 * Home → Admissions → Enquiry
 * Home → Contact
 * Home → Privacy Policy
 */
const ROUTE_BREADCRUMBS: Record<string, BreadcrumbItem[]> = {
  '/': [],
  '/about/nps': [
    { label: 'About', href: '/about/nps' },
    { label: 'NPS', current: true },
  ],
  '/about/hanchinmani': [
    { label: 'About', href: '/about/nps' },
    { label: 'Hanchinmani Institutes', current: true },
  ],
  '/about/alliance': [
    { label: 'About', href: '/about/nps' },
    { label: 'Academic Alliance', current: true },
  ],
  '/about/leadership': [
    { label: 'About', href: '/about/nps' },
    { label: 'Leadership', current: true },
  ],
  '/academics': [
    { label: 'Academics', current: true },
  ],
  '/academics/programmes': [
    { label: 'Academics', href: '/academics' },
    { label: 'Programmes', current: true },
  ],
  '/academics/neet': [
    { label: 'Academics', href: '/academics' },
    { label: 'NEET', current: true },
  ],
  '/academics/jee': [
    { label: 'Academics', href: '/academics' },
    { label: 'JEE', current: true },
  ],
  '/academics/kcet': [
    { label: 'Academics', href: '/academics' },
    { label: 'KCET', current: true },
  ],
  '/campus/overview': [
    { label: 'Campus', href: '/campus/overview' },
    { label: 'Overview', current: true },
  ],
  '/campus/faculty': [
    { label: 'Campus', href: '/campus/overview' },
    { label: 'Faculty', current: true },
  ],
  '/campus/facilities': [
    { label: 'Campus', href: '/campus/overview' },
    { label: 'Facilities', current: true },
  ],
  '/campus/hostel': [
    { label: 'Campus', href: '/campus/overview' },
    { label: 'Hostel', current: true },
  ],
  '/campus/life': [
    { label: 'Campus', href: '/campus/overview' },
    { label: 'Campus Life', current: true },
  ],
  '/results/academic': [
    { label: 'Results', href: '/results/academic' },
    { label: 'Academic Results', current: true },
  ],
  '/results/achievements': [
    { label: 'Results', href: '/results/academic' },
    { label: 'Achievements', current: true },
  ],
  '/results/success-stories': [
    { label: 'Results', href: '/results/academic' },
    { label: 'Success Stories', current: true },
  ],
  '/media/gallery': [
    { label: 'Media', href: '/media/gallery' },
    { label: 'Gallery', current: true },
  ],
  '/media/testimonials': [
    { label: 'Media', href: '/media/gallery' },
    { label: 'Testimonials', current: true },
  ],
  '/media/news-events': [
    { label: 'Media', href: '/media/gallery' },
    { label: 'News & Events', current: true },
  ],
  '/admissions/process': [
    { label: 'Admissions', href: '/admissions/process' },
    { label: 'Admission Process', current: true },
  ],
  '/admissions/enquiry': [
    { label: 'Admissions', href: '/admissions/process' },
    { label: 'Enquiry', current: true },
  ],
  '/contact': [
    { label: 'Contact', current: true },
  ],
  '/privacy-policy': [
    { label: 'Privacy Policy', current: true },
  ],
  '/404': [
    { label: '404 Not Found', current: true },
  ],
};

/**
 * Resolves standard breadcrumb items for any audited path.
 */
export function getBreadcrumbsForPath(pathname: string): BreadcrumbItem[] {
  if (ROUTE_BREADCRUMBS[pathname]) {
    return ROUTE_BREADCRUMBS[pathname];
  }

  // Fallback for 404 or nested paths
  return [{ label: '404 Not Found', current: true }];
}
