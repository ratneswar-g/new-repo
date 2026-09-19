/**
 * @file CampusOverviewPage.tsx
 * @description Campus overview and learning environment for National Public School & PU College, Kalaburagi.
 * Phase 8 implementation strictly grounded in verified institutional data (SRC-01, SRC-03, SRC-05).
 */

import {
  Building2,
  MapPin,
  Calendar,
  ShieldCheck,
  GraduationCap,
  FlaskConical,
  Library,
  BookOpen,
  Home,
  Trophy,
  ArrowRight,
  Phone,
  Mail,
  Info,
} from 'lucide-react';
import { PageContainer } from '../../components/common/PageContainer';
import { Section } from '../../components/ui/Section';
import { Card, CardBody } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { MediaPlaceholder } from '../../components/ui/MediaPlaceholder';
import { ContentStatusBadge } from '../../components/common/ContentStatusBadge';
import { INSTITUTIONS } from '../../data/institutions';
import { VERIFIED_CONTACT } from '../../data/contact';
import { CAMPUS_FACILITIES, RESIDENTIAL_STATUS_NOTICE } from '../../data/facilities';
import { ROUTES } from '../../routes/routeConfig';
import { VerificationStatus } from '../../types/verification';
import { isPublishable } from '../../utils/contentHelpers';

export function CampusOverviewPage() {
  const nps = INSTITUTIONS.NPS;
  const contact = VERIFIED_CONTACT;
  const addressPublishable = isPublishable(contact.verification);

  const keyFacts = [
    {
      icon: MapPin,
      label: 'Campus Location',
      value: addressPublishable ? contact.campusAddress.fullFormatted : 'Address pending verification',
      note: addressPublishable ? `${contact.campusAddress.landmark}, ${contact.campusAddress.road}` : 'Pending verification',
    },
    {
      icon: Calendar,
      label: 'Campus Establishment',
      value: '2018 (School) / April 23, 2022 (PU College)',
      note: 'Pre-University science institution',
    },
    {
      icon: ShieldCheck,
      label: 'Campus Management',
      value: nps.governingTrust,
      note: 'Governed under Sanskar Trust Gulbarga',
    },
    {
      icon: GraduationCap,
      label: 'Board Affiliation',
      value: nps.affiliation,
      note: 'Recognized for Pre-University science combinations (Code pending verification)',
    },
  ];

  return (
    <PageContainer
      title="Campus Overview & Infrastructure"
      description={`Campus at ${contact.campusAddress.landmark}, ${contact.campusAddress.city} featuring academic classrooms, science laboratories, library, and sports grounds.`}
      canonicalPath="/campus/overview"
    >
      <div className="space-y-12">
        {/* 1. Institutional Hero Header */}
        <section className="p-6 sm:p-10 rounded-2xl bg-[#0f1f38] text-white space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
              <Building2 className="w-3.5 h-3.5 text-[#d4af37]" aria-hidden="true" />
              Host Campus
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
              PU College Code: Pending Verification
            </span>
            <ContentStatusBadge status={VerificationStatus.VERIFIED_OFFICIAL} />
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white">
              Campus Overview & Infrastructure
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              The National Public School & PU College campus is situated on NH 150, Shahabad Road, Kusnoor, Kalaburagi.
              The campus houses academic classrooms, laboratories, a central library, and student sports grounds.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <Button
              to={ROUTES.CAMPUS_FACILITIES}
              variant="secondary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
            >
              Academic Facilities & Labs
            </Button>
            <Button
              to={ROUTES.CAMPUS_HOSTEL}
              variant="outline"
              size="md"
              className="text-white border-slate-600 hover:bg-slate-800"
              rightIcon={<Home className="w-4 h-4" aria-hidden="true" />}
            >
              Residential Accommodations
            </Button>
            <Button
              to={ROUTES.ADMISSIONS_ENQUIRY}
              variant="outline"
              size="md"
              className="text-white border-slate-600 hover:bg-slate-800"
            >
              Admissions Enquiry
            </Button>
          </div>
        </section>

        {/* 2. Key Institutional Facts */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 tracking-tight">
            Institutional Campus Credentials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {keyFacts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <div
                  key={index}
                  className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2"
                >
                  <div className="flex items-center gap-2 text-slate-500">
                    <Icon className="w-4 h-4 text-[#b8860b] shrink-0" aria-hidden="true" />
                    <span className="text-xs font-mono uppercase font-semibold text-slate-600">
                      {fact.label}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-slate-900 leading-snug">
                    {fact.value}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {fact.note}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. Core Academic Infrastructure */}
        <Section variant="standard">
          <div className="space-y-8">
            <div className="max-w-2xl space-y-2">
              <p className="text-xs font-mono uppercase tracking-wider font-semibold text-[#b8860b]">
                Campus Infrastructure
              </p>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
                Academic Buildings & Facilities
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Academic spaces configured for Pre-University science education at the Kalaburagi campus.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Classrooms */}
              <Card variant="standard" className="overflow-hidden">
                <MediaPlaceholder
                  category="campus"
                  title="Academic Classrooms"
                  aspectRatio="16/9"
                  caption="Academic classrooms at the Kalaburagi campus."
                />
                <CardBody className="p-6 space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-[#b8860b]" aria-hidden="true" />
                      <h3 className="text-lg font-bold font-serif text-slate-900">
                        Academic Classrooms
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Verified Official
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Classrooms supporting Pre-University science combinations (PCMB, PCMC, PCMS) at the Kalaburagi campus.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 border-t border-slate-100 pt-3">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#b8860b] mt-1.5 shrink-0" />
                      <span>Instructional spaces for science stream combinations.</span>
                    </li>
                  </ul>
                </CardBody>
              </Card>

              {/* Science Laboratories */}
              <Card variant="standard" className="overflow-hidden">
                <MediaPlaceholder
                  category="laboratory"
                  title="Laboratories"
                  aspectRatio="16/9"
                  caption="Laboratories for Physics, Chemistry, Biology, and Computer Science."
                />
                <CardBody className="p-6 space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <FlaskConical className="w-5 h-5 text-[#b8860b]" aria-hidden="true" />
                      <h3 className="text-lg font-bold font-serif text-slate-900">
                        Laboratories
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Verified Official
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Laboratories for Physics, Chemistry, Biology, and Computer Science at the Kalaburagi campus.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 border-t border-slate-100 pt-3">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#b8860b] mt-1.5 shrink-0" />
                      <span>Laboratories for Physics, Chemistry, Biology, and Computer Science.</span>
                    </li>
                  </ul>
                  <div className="pt-2">
                    <Button
                      to={ROUTES.CAMPUS_FACILITIES}
                      variant="outline"
                      size="sm"
                      rightIcon={<ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />}
                    >
                      View Laboratories
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </Section>

        {/* 4. Library & Student Recreation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Library */}
          <Card variant="standard" className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-[#b8860b]">
                <Library className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-bold font-serif text-slate-900">
                  Campus Library
                </h3>
                <p className="text-xs text-slate-500 font-mono">
                  Academic Complex
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Campus library facility providing academic textbooks and reference reading materials.
            </p>
            <div className="pt-2">
              <Button
                to={ROUTES.CAMPUS_FACILITIES}
                variant="outline"
                size="sm"
                rightIcon={<ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />}
              >
                Library Details
              </Button>
            </div>
          </Card>

          {/* Sports Grounds */}
          <Card variant="standard" className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700">
                <Trophy className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-bold font-serif text-slate-900">
                  Sports Grounds & Indoor Games
                </h3>
                <p className="text-xs text-slate-500 font-mono">
                  Campus Grounds
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Sports grounds and indoor games spaces at the Kalaburagi campus.
            </p>
            <div className="pt-2">
              <Button
                to={ROUTES.CAMPUS_LIFE}
                variant="outline"
                size="sm"
                rightIcon={<ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />}
              >
                Campus Life
              </Button>
            </div>
          </Card>
        </div>

        {/* 5. Residential Facilities Disclosure */}
        <section className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-amber-100 text-amber-800 shrink-0 mt-0.5">
              <Info className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold font-serif text-slate-900">
                  Residential Accommodations
                </h3>
                <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200">
                  Pending Client Confirmation
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                On-campus residential accommodations exist at the Kalaburagi campus.
              </p>
              <p className="text-xs text-amber-900 font-medium bg-amber-50 border border-amber-200/80 rounded-md p-3">
                {RESIDENTIAL_STATUS_NOTICE}
              </p>
              <div className="pt-2">
                <Button
                  to={ROUTES.CAMPUS_HOSTEL}
                  variant="outline"
                  size="sm"
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />}
                >
                  View Residential Information
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Location & Campus Desk Access */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 space-y-6">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 tracking-tight">
              Visiting the Campus
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Admissions desk and campus inquiries are available via direct telephone helpline and email.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-xs">
              <p className="font-semibold text-slate-900 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#b8860b]" aria-hidden="true" />
                Physical Address
              </p>
              <p className="text-slate-600">
                {addressPublishable
                  ? `${contact.campusAddress.landmark}, ${contact.campusAddress.road}, ${contact.campusAddress.city}, Karnataka - ${contact.campusAddress.pinCode}`
                  : 'Address pending verification'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-xs">
              <p className="font-semibold text-slate-900 flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-[#b8860b]" aria-hidden="true" />
                Admissions Desk
              </p>
              <p className="text-slate-600 font-mono">
                {contact.phones.dedicatedPUAdmissions}
              </p>
              <p className="text-slate-500">
                Senior-Secondary Helpline
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-xs">
              <p className="font-semibold text-slate-900 flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-[#b8860b]" aria-hidden="true" />
                Official Email
              </p>
              <p className="text-slate-600 font-mono">
                {contact.email}
              </p>
              <p className="text-slate-500 font-mono">
                Admissions & Enrollment
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
