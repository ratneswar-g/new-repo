/**
 * @file AboutNPSPage.tsx
 * @description Comprehensive institutional profile for National Public School & PU College, Kalaburagi.
 * Phase 6 Implementation adhering strictly to verified institutional facts, design system tokens, and route linkages.
 */

import {
  Building2,
  GraduationCap,
  ShieldCheck,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  BookOpen,
  FlaskConical,
  Library,
  Home,
  FileCheck2,
} from 'lucide-react';
import { PageContainer } from '../../components/common/PageContainer';
import { Section } from '../../components/ui/Section';
import { Card, CardHeader, CardBody } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { MediaPlaceholder } from '../../components/ui/MediaPlaceholder';
import { INSTITUTIONS } from '../../data/institutions';
import { VERIFIED_CONTACT } from '../../data/contact';
import { ROUTES } from '../../routes/routeConfig';

export function AboutNPSPage() {
  const nps = INSTITUTIONS.NPS;
  const contact = VERIFIED_CONTACT;

  const milestones = [
    {
      year: '2018',
      title: 'Foundation of National Public School',
      description:
        'Established under Sanskar Trust Gulbarga to provide high-standard school education with purpose-built infrastructure in Kalaburagi.',
    },
    {
      year: 'April 2022',
      title: 'Inauguration of Pre-University College',
      description:
        'Formal inauguration of the Independent Pre-University College section on April 23, 2022, expanding senior-secondary academic offerings under Karnataka PU Board affiliation.',
    },
    {
      year: 'Academic Alliance',
      title: 'Academic Alliance with Hanchinmani Institutes',
      description:
        'The Academic Alliance brings together National Public School & PU College, Kalaburagi and Hanchinmani Institutes, Dharwad, with an academic focus on Pre-University education and integrated entrance-exam preparation.',
    },
  ];

  const campusFeatures = [
    {
      icon: FlaskConical,
      title: 'Modern Science Laboratories',
      description:
        'Fully equipped practical laboratories for Physics, Chemistry, and Biology complying with Karnataka Pre-University Board norms.',
    },
    {
      icon: Library,
      title: 'Central Academic Library',
      description:
        'Comprehensive collection of NCERT textbooks, competitive reference manuals, academic journals, and reading desks for focused study.',
    },
    {
      icon: BookOpen,
      title: 'Digital Classrooms',
      description:
        'Spacious, acoustically designed classrooms equipped with digital projection systems to support audiovisual concept delivery.',
    },
    {
      icon: Home,
      title: 'Residential Hostels',
      description:
        'Separate on-campus residential boarding facilities for outstation boys and girls with supervised evening study hours and vegetarian dining.',
    },
  ];

  return (
    <PageContainer
      title={`${nps.name} — Institutional Profile`}
      description={`Official profile of ${nps.name}, Kalaburagi. Managed by ${nps.governingTrust}, providing integrated science education.`}
      canonicalPath="/about/nps"
    >
      <div className="space-y-12">
        {/* 1. Institutional Hero Header */}
        <section className="p-6 sm:p-10 rounded-2xl bg-[#0f1f38] text-white space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
              <Building2 className="w-3.5 h-3.5 text-[#d4af37]" aria-hidden="true" />
              Host Campus Institution
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              PU Code: Pending Official Verification
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
              <Calendar className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
              Est. {nps.establishedYear} • PU Inauguration 2022
            </span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
              {nps.name}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Managed under the aegis of{' '}
              <strong className="text-white">{nps.governingTrust}</strong>, National Public School &
              PU College serves as the host campus and foundational educational pillar of the
              NPS–Hanchinmani Institutes Academic Alliance in Kalaburagi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-xs">
            <div className="space-y-1">
              <p className="text-slate-400 uppercase font-mono tracking-wider font-semibold">
                Affiliation
              </p>
              <p className="text-white font-medium">{nps.affiliation}</p>
            </div>
            <div className="space-y-1">
              <p className="text-slate-400 uppercase font-mono tracking-wider font-semibold">
                Campus Location
              </p>
              <p className="text-white font-medium">Shahabad Road, Kusnoor, Kalaburagi</p>
            </div>
            <div className="space-y-1">
              <p className="text-slate-400 uppercase font-mono tracking-wider font-semibold">
                Statutory Status
              </p>
              <p className="text-white font-medium">Independent Pre-University College</p>
            </div>
          </div>
        </section>

        {/* 2. Institutional Overview & Founding Legacy */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-2">
              <p className="text-xs font-mono uppercase tracking-wider font-semibold text-[#b8860b]">
                Founding Heritage
              </p>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-slate-900 tracking-tight">
                Commitment to Pre-University Academic Excellence
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                National Public School was established in 2018 by Sanskar Trust Gulbarga with a clear
                mandate: to create a modern learning campus in Kalaburagi offering rigorous academic
                training, moral discipline, and intellectual enrichment.
              </p>
              <p>
                Recognizing the critical need for dedicated senior-secondary education in the Kalyana
                Karnataka region, the trust formally inaugurated the Independent Pre-University
                College section on April 23, 2022. The institution operates under official recognition
                from the Pre-University Education Department, Government of Karnataka (College Code pending verification).
              </p>
              <p>
                The Academic Alliance brings together National Public School & PU College,
                Kalaburagi and Hanchinmani Institutes, Dharwad, with an academic focus on
                Pre-University education and integrated entrance-exam preparation.
              </p>
            </div>

            {/* Strategic Alliance Role Card */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#b8860b]" aria-hidden="true" />
                <h3 className="text-xs font-mono uppercase font-bold text-slate-900 tracking-wider">
                  Role in the Academic Alliance
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                National Public School & PU College serves as the host campus, providing campus facilities,
                science laboratories, and academic infrastructure under Karnataka Pre-University Board
                recognition (College Code pending verification).
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <MediaPlaceholder
              category="campus"
              title="National Public School Campus"
              aspectRatio="4/3"
              caption="Main academic and administrative building at Kusnoor, Kalaburagi."
              className="border-slate-200 shadow-xs"
            />

            {/* Quick Facts Card */}
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-sm font-bold font-serif text-slate-900 border-b border-slate-100 pb-2">
                Institutional Snapshot
              </h3>
              <dl className="space-y-2.5 text-xs">
                <div className="flex justify-between">
                  <dt className="text-slate-500 font-medium">Founding Trust:</dt>
                  <dd className="font-semibold text-slate-900 text-right">{nps.governingTrust}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500 font-medium">School Foundation:</dt>
                  <dd className="font-semibold text-slate-900 text-right">2018</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500 font-medium">PU Inauguration:</dt>
                  <dd className="font-semibold text-slate-900 text-right">April 23, 2022</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500 font-medium">PU Board Code:</dt>
                  <dd className="font-mono font-bold text-slate-900 text-right">{nps.puCollegeCode}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500 font-medium">Science Streams:</dt>
                  <dd className="font-semibold text-slate-900 text-right">PCMB, PCMC, PCMS</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500 font-medium">Residential Status:</dt>
                  <dd className="font-semibold text-slate-900 text-right">Day Scholar & Residential</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* 3. Chronological Institutional Milestones */}
        <section className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-mono uppercase tracking-wider font-semibold text-[#b8860b]">
              Development Timeline
            </p>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 tracking-tight">
              Key Institutional Milestones
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {milestones.map((milestone, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="inline-block text-xs font-mono font-bold text-[#b8860b] px-2.5 py-0.5 rounded bg-amber-50 border border-amber-200">
                    {milestone.year}
                  </span>
                  <h3 className="text-base font-serif font-bold text-slate-900">
                    {milestone.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Campus Infrastructure & Facilities */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs font-mono uppercase tracking-wider font-semibold text-[#b8860b]">
                Campus Infrastructure
              </p>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 tracking-tight">
                Learning Facilities at Kalaburagi
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
                The campus is engineered to support deep academic concentration and practical scientific inquiry.
              </p>
            </div>
            <Button
              to={ROUTES.CAMPUS_FACILITIES}
              variant="outline"
              size="sm"
              rightIcon={<ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />}
            >
              All Campus Facilities
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {campusFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0f1f38] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#0f1f38]" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-bold font-serif text-slate-900">{feat.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{feat.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 5. Contact Coordinates & Admissions Action */}
        <section className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs font-mono uppercase tracking-wider font-semibold text-[#b8860b]">
                Campus Admissions Office
              </p>
              <h2 className="text-lg sm:text-xl font-serif font-bold text-slate-900">
                Connect with National Public School & PU College
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The administrative and admissions office welcomes parents and prospective students during regular working hours.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Button
                to={ROUTES.ADMISSIONS_ENQUIRY}
                variant="primary"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
              >
                Submit Admissions Enquiry
              </Button>
              <Button
                to={ROUTES.ABOUT_ALLIANCE}
                variant="outline"
                size="md"
              >
                About the Alliance
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200 text-xs">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#0f1f38] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold text-slate-800">Campus Address</p>
                <p className="text-slate-600 leading-snug">{contact.campusAddress.fullFormatted}</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold text-slate-800">Admissions Helpline</p>
                <p className="text-slate-600">{contact.phones.dedicatedPUAdmissions}</p>
                <p className="text-[11px] text-slate-500">Dedicated Senior-Secondary Line</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold text-slate-800">Official Email</p>
                <p className="text-slate-600">{contact.email}</p>
                <p className="text-[11px] text-slate-500">General & Admissions Desk</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
