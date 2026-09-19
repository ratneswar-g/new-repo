/**
 * @file routeConfig.tsx
 * @description Centralized route configuration table and React Router element definitions.
 * All 25 audited routes plus catch-all 404 are registered here with typed route constants.
 */

import React from 'react';
import { Navigate } from 'react-router-dom';

// Pages
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';

// About Pages
import { AboutNPSPage } from '../pages/about/AboutNPSPage';
import { AboutHanchinmaniPage } from '../pages/about/AboutHanchinmaniPage';
import { AlliancePage } from '../pages/about/AlliancePage';
import { LeadershipPage } from '../pages/about/LeadershipPage';

// Academics Pages
import { AcademicsPage } from '../pages/academics/AcademicsPage';
import { ProgrammesPage } from '../pages/academics/ProgrammesPage';
import { NEETPage } from '../pages/academics/NEETPage';
import { JEEPage } from '../pages/academics/JEEPage';
import { KCETPage } from '../pages/academics/KCETPage';

// Campus Pages
import { CampusOverviewPage } from '../pages/campus/CampusOverviewPage';
import { FacultyPage } from '../pages/campus/FacultyPage';
import { FacilitiesPage } from '../pages/campus/FacilitiesPage';
import { HostelPage } from '../pages/campus/HostelPage';
import { CampusLifePage } from '../pages/campus/CampusLifePage';

// Results Pages
import { AcademicResultsPage } from '../pages/results/AcademicResultsPage';
import { AchievementsPage } from '../pages/results/AchievementsPage';
import { SuccessStoriesPage } from '../pages/results/SuccessStoriesPage';

// Media Pages
import { GalleryPage } from '../pages/media/GalleryPage';
import { TestimonialsPage } from '../pages/media/TestimonialsPage';
import { NewsEventsPage } from '../pages/media/NewsEventsPage';

// Admissions Pages
import { AdmissionProcessPage } from '../pages/admissions/AdmissionProcessPage';
import { AdmissionEnquiryPage } from '../pages/admissions/AdmissionEnquiryPage';

// Contact & Legal
import { ContactPage } from '../pages/contact/ContactPage';
import { PrivacyPolicyPage } from '../pages/legal/PrivacyPolicyPage';

/**
 * Immutable Route Path Constants
 */
export const ROUTES = {
  HOME: '/',
  ABOUT_NPS: '/about/nps',
  ABOUT_HANCHINMANI: '/about/hanchinmani',
  ABOUT_ALLIANCE: '/about/alliance',
  ABOUT_LEADERSHIP: '/about/leadership',
  ACADEMICS: '/academics',
  ACADEMICS_PROGRAMMES: '/academics/programmes',
  ACADEMICS_NEET: '/academics/neet',
  ACADEMICS_JEE: '/academics/jee',
  ACADEMICS_KCET: '/academics/kcet',
  CAMPUS_OVERVIEW: '/campus/overview',
  CAMPUS_FACULTY: '/campus/faculty',
  CAMPUS_FACILITIES: '/campus/facilities',
  CAMPUS_HOSTEL: '/campus/hostel',
  CAMPUS_LIFE: '/campus/life',
  RESULTS_ACADEMIC: '/results/academic',
  RESULTS_ACHIEVEMENTS: '/results/achievements',
  RESULTS_SUCCESS_STORIES: '/results/success-stories',
  MEDIA_GALLERY: '/media/gallery',
  MEDIA_TESTIMONIALS: '/media/testimonials',
  MEDIA_NEWS_EVENTS: '/media/news-events',
  ADMISSIONS_PROCESS: '/admissions/process',
  ADMISSIONS_ENQUIRY: '/admissions/enquiry',
  CONTACT: '/contact',
  PRIVACY_POLICY: '/privacy-policy',
  NOT_FOUND: '/404',
} as const;

export interface AppRouteDefinition {
  path: string;
  name: string;
  element: React.ReactElement;
  category: 'core' | 'about' | 'academics' | 'campus' | 'results' | 'media' | 'admissions' | 'utility';
  breadcrumbLabel: string;
}

export const APP_ROUTES: AppRouteDefinition[] = [
  // Core
  {
    path: ROUTES.HOME,
    name: 'Home',
    element: <HomePage />,
    category: 'core',
    breadcrumbLabel: 'Home',
  },

  // About
  {
    path: ROUTES.ABOUT_NPS,
    name: 'National Public School',
    element: <AboutNPSPage />,
    category: 'about',
    breadcrumbLabel: 'NPS',
  },
  {
    path: ROUTES.ABOUT_HANCHINMANI,
    name: 'Hanchinmani Institutes',
    element: <AboutHanchinmaniPage />,
    category: 'about',
    breadcrumbLabel: 'Hanchinmani Institutes',
  },
  {
    path: ROUTES.ABOUT_ALLIANCE,
    name: 'The Academic Alliance',
    element: <AlliancePage />,
    category: 'about',
    breadcrumbLabel: 'Academic Alliance',
  },
  {
    path: ROUTES.ABOUT_LEADERSHIP,
    name: 'Leadership & Governance',
    element: <LeadershipPage />,
    category: 'about',
    breadcrumbLabel: 'Leadership',
  },

  // Academics
  {
    path: ROUTES.ACADEMICS,
    name: 'Academics Overview',
    element: <AcademicsPage />,
    category: 'academics',
    breadcrumbLabel: 'Academics',
  },
  {
    path: ROUTES.ACADEMICS_PROGRAMMES,
    name: 'Programmes Overview',
    element: <ProgrammesPage />,
    category: 'academics',
    breadcrumbLabel: 'Programmes',
  },
  {
    path: ROUTES.ACADEMICS_NEET,
    name: 'Integrated NEET Coaching',
    element: <NEETPage />,
    category: 'academics',
    breadcrumbLabel: 'NEET',
  },
  {
    path: ROUTES.ACADEMICS_JEE,
    name: 'Integrated JEE Coaching',
    element: <JEEPage />,
    category: 'academics',
    breadcrumbLabel: 'JEE',
  },
  {
    path: ROUTES.ACADEMICS_KCET,
    name: 'Integrated KCET Coaching',
    element: <KCETPage />,
    category: 'academics',
    breadcrumbLabel: 'KCET',
  },

  // Campus
  {
    path: ROUTES.CAMPUS_OVERVIEW,
    name: 'Campus Overview',
    element: <CampusOverviewPage />,
    category: 'campus',
    breadcrumbLabel: 'Overview',
  },
  {
    path: ROUTES.CAMPUS_FACULTY,
    name: 'Faculty & Mentorship',
    element: <FacultyPage />,
    category: 'campus',
    breadcrumbLabel: 'Faculty',
  },
  {
    path: ROUTES.CAMPUS_FACILITIES,
    name: 'Academic Laboratories & Facilities',
    element: <FacilitiesPage />,
    category: 'campus',
    breadcrumbLabel: 'Facilities',
  },
  {
    path: ROUTES.CAMPUS_HOSTEL,
    name: 'Residential Hostels',
    element: <HostelPage />,
    category: 'campus',
    breadcrumbLabel: 'Hostel',
  },
  {
    path: ROUTES.CAMPUS_LIFE,
    name: 'Campus Life',
    element: <CampusLifePage />,
    category: 'campus',
    breadcrumbLabel: 'Campus Life',
  },

  // Results
  {
    path: ROUTES.RESULTS_ACADEMIC,
    name: 'Academic Results',
    element: <AcademicResultsPage />,
    category: 'results',
    breadcrumbLabel: 'Academic Results',
  },
  {
    path: ROUTES.RESULTS_ACHIEVEMENTS,
    name: 'Institutional Achievements',
    element: <AchievementsPage />,
    category: 'results',
    breadcrumbLabel: 'Achievements',
  },
  {
    path: ROUTES.RESULTS_SUCCESS_STORIES,
    name: 'Student Success Stories',
    element: <SuccessStoriesPage />,
    category: 'results',
    breadcrumbLabel: 'Success Stories',
  },

  // Media
  {
    path: ROUTES.MEDIA_GALLERY,
    name: 'Photo Gallery',
    element: <GalleryPage />,
    category: 'media',
    breadcrumbLabel: 'Gallery',
  },
  {
    path: ROUTES.MEDIA_TESTIMONIALS,
    name: 'Testimonials',
    element: <TestimonialsPage />,
    category: 'media',
    breadcrumbLabel: 'Testimonials',
  },
  {
    path: ROUTES.MEDIA_NEWS_EVENTS,
    name: 'News & Events',
    element: <NewsEventsPage />,
    category: 'media',
    breadcrumbLabel: 'News & Events',
  },

  // Media Redirect Aliases
  {
    path: '/gallery',
    name: 'Gallery Alias',
    element: <Navigate to={ROUTES.MEDIA_GALLERY} replace />,
    category: 'media',
    breadcrumbLabel: 'Gallery',
  },
  {
    path: '/testimonials',
    name: 'Testimonials Alias',
    element: <Navigate to={ROUTES.MEDIA_TESTIMONIALS} replace />,
    category: 'media',
    breadcrumbLabel: 'Testimonials',
  },
  {
    path: '/news-events',
    name: 'News & Events Alias',
    element: <Navigate to={ROUTES.MEDIA_NEWS_EVENTS} replace />,
    category: 'media',
    breadcrumbLabel: 'News & Events',
  },

  // Admissions
  {
    path: ROUTES.ADMISSIONS_PROCESS,
    name: 'Admission Procedure',
    element: <AdmissionProcessPage />,
    category: 'admissions',
    breadcrumbLabel: 'Admission Process',
  },
  {
    path: ROUTES.ADMISSIONS_ENQUIRY,
    name: 'Admissions Enquiry',
    element: <AdmissionEnquiryPage />,
    category: 'admissions',
    breadcrumbLabel: 'Enquiry',
  },

  // Utility & Legal
  {
    path: ROUTES.CONTACT,
    name: 'Contact & Campus Coordinates',
    element: <ContactPage />,
    category: 'utility',
    breadcrumbLabel: 'Contact',
  },
  {
    path: ROUTES.PRIVACY_POLICY,
    name: 'Privacy Policy',
    element: <PrivacyPolicyPage />,
    category: 'utility',
    breadcrumbLabel: 'Privacy Policy',
  },
  {
    path: ROUTES.NOT_FOUND,
    name: 'Page Not Found',
    element: <NotFoundPage />,
    category: 'utility',
    breadcrumbLabel: '404 Not Found',
  },
  {
    path: '*',
    name: 'Catch-All Page Not Found',
    element: <NotFoundPage />,
    category: 'utility',
    breadcrumbLabel: '404 Not Found',
  },
];
