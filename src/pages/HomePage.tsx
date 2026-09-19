/**
 * @file HomePage.tsx
 * @description Premium client-ready institutional homepage for the NPS–Hanchinmani Institutes Academic Alliance.
 * Phase 5 Implementation adhering strictly to design tokens, verified facts, and modular architecture.
 */

import { SEOHead } from '../components/common/SEOHead';
import { INSTITUTIONS } from '../data/institutions';
import {
  HeroSection,
  AllianceIntroSection,
  InstitutionsSection,
  ProgrammesSection,
  ExamPreparationSection,
  FacilitiesSection,
  ResultsSection,
  AdmissionsCTA,
  ContactCTA,
} from '../components/home';

export function HomePage() {
  const alliance = INSTITUTIONS.ALLIANCE;

  return (
    <main id="main-content" tabIndex={-1} className="w-full focus:outline-none">
      <SEOHead
        title="Official Academic Portal"
        description={`${alliance.name} delivering integrated NEET, JEE, and KCET coaching alongside Karnataka Pre-University Science curriculum in Kalaburagi.`}
        canonicalPath="/"
      />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Alliance Introduction */}
      <AllianceIntroSection />

      {/* 3. Participating Institutions */}
      <InstitutionsSection />

      {/* 4. Academic Programmes (PCMB, PCMC, PCMS & Foundation) */}
      <ProgrammesSection />

      {/* 5. Entrance Focus (NEET, JEE, KCET) */}
      <ExamPreparationSection />

      {/* 6. Campus Environment & Facilities */}
      <FacilitiesSection />

      {/* 7. Results & Institutional Governance */}
      <ResultsSection />

      {/* 8. Admissions Call-To-Action */}
      <AdmissionsCTA />

      {/* 9. Contact & Institutional Coordinates */}
      <ContactCTA />
    </main>
  );
}
