/**
 * @file NotFoundPage.tsx
 * @description Accessible 404 Error page for missing routes and invalid URL paths,
 * styled with the Phase 2 Brand & Design System primitives.
 */

import { PageContainer } from '../components/common/PageContainer';
import { FileQuestion, Home, Phone, ArrowRight } from 'lucide-react';
import { VERIFIED_CONTACT } from '../data/institutions';
import { Button } from '../components/ui/Button';
import { Card, CardBody } from '../components/ui/Card';

export function NotFoundPage() {
  return (
    <PageContainer
      title="404 — Page Not Found"
      description="The requested academic portal document or page could not be located on this server."
      canonicalPath="/404"
    >
      <Card variant="standard" className="max-w-2xl mx-auto my-8">
        <CardBody className="p-8 sm:p-12 text-center space-y-6">
          <div className="w-16 h-16 bg-slate-100 text-[#0f1f38] rounded-full flex items-center justify-center mx-auto">
            <FileQuestion className="w-8 h-8 text-amber-700" aria-hidden="true" />
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              404 — Page Not Found
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
              The academic URL or resource you requested is not currently available or may have moved to an audited route in our new directory structure.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Button
              to="/"
              variant="primary"
              size="md"
              leftIcon={<Home className="w-4 h-4" aria-hidden="true" />}
            >
              Return to Homepage
            </Button>
            <Button
              to="/academics/programmes"
              variant="outline"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
            >
              View Academic Programmes
            </Button>
          </div>

          {/* Quick Helpline */}
          <div className="pt-6 border-t border-slate-100 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-center gap-2">
            <span>Need immediate assistance?</span>
            <div className="flex items-center gap-1 font-semibold text-slate-800">
              <Phone className="w-3.5 h-3.5 text-amber-700" aria-hidden="true" />
              <span>Call PU Admissions: {VERIFIED_CONTACT.phones.dedicatedPUAdmissions}</span>
            </div>
          </div>
        </CardBody>
      </Card>
    </PageContainer>
  );
}
