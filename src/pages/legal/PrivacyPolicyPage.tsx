/**
 * @file PrivacyPolicyPage.tsx
 * @description Privacy policy and institutional data governance disclosure.
 */

import { PageContainer } from '../../components/common/PageContainer';
import { PlaceholderBlock } from '../../components/common/PlaceholderBlock';
import { VerificationStatus } from '../../types/verification';
import { OFFICIAL_SOURCES } from '../../data/sources';

export function PrivacyPolicyPage() {
  return (
    <PageContainer
      title="Privacy Policy & Data Handling"
      description="Official privacy policy and student data governance standards for NPS–Hanchinmani Institutes Academic Alliance."
      canonicalPath="/privacy-policy"
    >
      <PlaceholderBlock
        pageTitle="Privacy Policy & Student Data Governance"
        purposeDescription="Outlines our statutory commitments to student data confidentiality, handling of admission enquiry details, parental consent protocols for SMS/WhatsApp communication, and strict non-disclosure of student academic performance to unauthorized third-party commercial entities."
        targetPhase="Phase 9 (Legal, Compliance & Policy Documentation)"
        verificationStatus={VerificationStatus.CLIENT_PROVIDED}
        sources={[OFFICIAL_SOURCES.SRC_01]}
        relatedLinks={[
          { label: 'Campus Contact Coordinates', href: '/contact' },
          { label: 'Admissions Enquiry Desk', href: '/admissions/enquiry' },
          { label: 'The Academic Alliance', href: '/about/alliance' },
        ]}
      />
    </PageContainer>
  );
}
