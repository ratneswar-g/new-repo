/**
 * @file AcademicsPage.tsx
 * @description Substantive Academics Overview Page for the NPS–Hanchinmani Academic Alliance.
 * Communicates the verified academic scope: Pre-University education (Karnataka PU Board affiliation),
 * integrated entrance-exam preparation (NEET, JEE Main, KCET), and senior-secondary combinations (PCMB, PCMC, PCMS).
 */

import {
  GraduationCap,
  BookOpen,
  Stethoscope,
  Cpu,
  Award,
  ArrowRight,
  Building2,
  AlertCircle,
  Layers,
} from 'lucide-react';
import { PageContainer } from '../../components/common/PageContainer';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { MediaPlaceholder } from '../../components/ui/MediaPlaceholder';
import { ACADEMIC_PROGRAMMES, ENTRANCE_EXAM_TRACKS } from '../../data/programmes';
import { INSTITUTIONS } from '../../data/institutions';
import { ROUTES } from '../../routes/routeConfig';

export function AcademicsPage() {
  const nps = INSTITUTIONS.NPS;
  const hanchinmani = INSTITUTIONS.HANCHINMANI;

  const coreStreams = ACADEMIC_PROGRAMMES.filter((p) => p.category === 'pu_science');
  const foundationProg = ACADEMIC_PROGRAMMES.find((p) => p.category === 'foundation');

  const competitiveTracks = [
    {
      id: 'track-neet',
      name: ENTRANCE_EXAM_TRACKS.NEET.examName,
      fullName: ENTRANCE_EXAM_TRACKS.NEET.fullName,
      focus: ENTRANCE_EXAM_TRACKS.NEET.academicFocus,
      target: ENTRANCE_EXAM_TRACKS.NEET.targetAudience,
      route: ROUTES.ACADEMICS_NEET,
      icon: Stethoscope,
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    },
    {
      id: 'track-jee',
      name: 'JEE Main',
      fullName: ENTRANCE_EXAM_TRACKS.JEE.fullName,
      focus: ENTRANCE_EXAM_TRACKS.JEE.academicFocus,
      target: ENTRANCE_EXAM_TRACKS.JEE.targetAudience,
      route: ROUTES.ACADEMICS_JEE,
      icon: Cpu,
      badgeColor: 'bg-blue-50 text-blue-800 border-blue-200',
    },
    {
      id: 'track-kcet',
      name: ENTRANCE_EXAM_TRACKS.KCET.examName,
      fullName: ENTRANCE_EXAM_TRACKS.KCET.fullName,
      focus: ENTRANCE_EXAM_TRACKS.KCET.academicFocus,
      target: ENTRANCE_EXAM_TRACKS.KCET.targetAudience,
      route: ROUTES.ACADEMICS_KCET,
      icon: Award,
      badgeColor: 'bg-amber-50 text-amber-900 border-amber-200',
    },
  ];

  return (
    <PageContainer
      title="Academics & Integrated Coaching Overview"
      description="Pre-University Science education offering PCMB, PCMC, and PCMS combinations with integrated competitive entrance-exam preparation for NEET, JEE Main, and KCET."
      canonicalPath="/academics"
    >
      <div className="space-y-12">
        {/* 1. Academic Hero Section */}
        <section className="p-6 sm:p-10 rounded-2xl bg-[#0f1f38] text-white space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
              <GraduationCap className="w-3.5 h-3.5 text-[#d4af37]" aria-hidden="true" />
              Pre-University Education
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
              <Building2 className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
              PU College Code: Pending Verification
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
              <Layers className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              Integrated Preparation
            </span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
              Academics & Integrated Pre-University Education
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              The academic framework at the Kalaburagi campus unifies the senior-secondary curriculum
              governed by the Department of School Education (Pre-University Education), Karnataka, with
              integrated entrance-exam preparation delivered in collaboration with {hanchinmani.name}, Dharwad.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              to={ROUTES.ACADEMICS_PROGRAMMES}
              variant="secondary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
            >
              View Stream Matrix (PCMB, PCMC, PCMS)
            </Button>
            <Button
              to={ROUTES.ADMISSIONS_ENQUIRY}
              variant="outline"
              size="md"
              className="border-slate-600 text-white hover:bg-slate-800"
            >
              Admissions Enquiry
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-xs">
            <div className="space-y-1">
              <p className="text-slate-400 uppercase font-mono tracking-wider font-semibold">
                Affiliation & Board
              </p>
              <p className="text-white font-medium">Karnataka State PU Board</p>
            </div>
            <div className="space-y-1">
              <p className="text-slate-400 uppercase font-mono tracking-wider font-semibold">
                Academic Scope
              </p>
              <p className="text-white font-medium">Pre-University Science Education</p>
            </div>
            <div className="space-y-1">
              <p className="text-slate-400 uppercase font-mono tracking-wider font-semibold">
                Competitive Scope
              </p>
              <p className="text-white font-medium">NEET, JEE Main, KCET</p>
            </div>
          </div>
        </section>

        {/* 2. Pre-University Science Combinations Overview */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2 max-w-xl">
              <p className="text-xs font-mono uppercase tracking-wider font-semibold text-[#b8860b]">
                Stream Offerings
              </p>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0f1f38]">
                Two-Year Science Combinations
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Eligible students can enroll in government-recognized two-year science combinations paired with
                integrated entrance-exam preparation.
              </p>
            </div>
            <Button
              to={ROUTES.ACADEMICS_PROGRAMMES}
              variant="outline"
              size="sm"
              rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
            >
              Detailed Stream Matrix
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreStreams.map((prog) => (
              <Card key={prog.id} className="p-6 space-y-4 border-slate-200 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase px-2.5 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200">
                      {prog.slug.toUpperCase()}
                    </span>
                    <span className="text-xs font-mono text-slate-500">2-Year Programme</span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#0f1f38]">
                    {prog.title.replace('Two-Year Pre-University Science — ', '')}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{prog.overview}</p>
                  <div className="space-y-1 pt-2">
                    <p className="text-xs font-mono font-semibold text-slate-700 uppercase">Target Exams:</p>
                    <p className="text-xs text-slate-600">{prog.targetExam}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Button
                    to={ROUTES.ACADEMICS_PROGRAMMES}
                    variant="outline"
                    size="sm"
                    className="w-full justify-center"
                    rightIcon={<ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />}
                  >
                    View Curriculum & Eligibility
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Foundation Programme Callout */}
          {foundationProg && (
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-semibold uppercase px-2 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200">
                    Secondary Level
                  </span>
                  <h3 className="text-base font-serif font-bold text-[#0f1f38]">
                    {foundationProg.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {foundationProg.overview}
                </p>
              </div>
              <Button
                to={ROUTES.ACADEMICS_PROGRAMMES}
                variant="outline"
                size="sm"
                className="shrink-0"
              >
                Foundation Details
              </Button>
            </div>
          )}
        </section>

        {/* 3. Dedicated Competitive Tracks (NEET, JEE, KCET) */}
        <section className="space-y-6">
          <div className="max-w-2xl space-y-2">
            <p className="text-xs font-mono uppercase tracking-wider font-semibold text-[#b8860b]">
              Coaching Tracks
            </p>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0f1f38]">
              Integrated Entrance-Exam Preparation
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Entrance-exam preparation tracks for medical, engineering, and Karnataka state professional admissions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {competitiveTracks.map((track) => {
              const IconComponent = track.icon;
              return (
                <Card key={track.id} className="p-6 space-y-5 border-slate-200 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-[#0f1f38] text-[#d4af37] flex items-center justify-center">
                        <IconComponent className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <span className={`text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded border ${track.badgeColor}`}>
                        {track.name}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-lg font-serif font-bold text-[#0f1f38]">
                        Integrated {track.name}
                      </h3>
                      <p className="text-xs font-mono text-slate-500">{track.fullName}</p>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="font-semibold text-slate-700">Academic Focus: </span>
                        <span className="text-slate-600">{track.focus}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-700">Target Cohort: </span>
                        <span className="text-slate-600">{track.target}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-700">Delivery Format: </span>
                        <span className="text-slate-600">Integrated academic and entrance-exam preparation.</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Button
                      to={track.route}
                      variant="primary"
                      size="sm"
                      className="w-full justify-center"
                      rightIcon={<ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />}
                    >
                      Explore {track.name} Track
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* 4. Campus Infrastructure Supporting Academics */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200">
              <Building2 className="w-3.5 h-3.5" aria-hidden="true" />
              Kalaburagi Campus Infrastructure
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0f1f38]">
              Laboratories & Classroom Infrastructure
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              The academic framework is anchored at the National Public School & PU College campus situated on
              Shahabad Road, Kusnoor, Kalaburagi. Facilities include science laboratories (Physics,
              Chemistry, Biology, Computer Science) and academic classrooms.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                to={ROUTES.CAMPUS_FACILITIES}
                variant="outline"
                size="sm"
              >
                Campus Facilities
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <MediaPlaceholder
              category="academics"
              title="Science Laboratories & Classroom Facilities"
              aspectRatio="16/9"
              caption="Academic infrastructure: science laboratories and classroom environments supporting Pre-University learning."
            />
          </div>
        </section>

        {/* 5. Academic Governance, Results & Admissions Notice */}
        <section className="p-6 rounded-xl bg-amber-50/70 border border-amber-200 space-y-3">
          <div className="flex items-center gap-2 text-amber-900 font-semibold text-sm">
            <AlertCircle className="w-4 h-4 text-[#b8860b]" aria-hidden="true" />
            Institutional Governance & Admissions Disclosures
          </div>
          <div className="text-xs text-amber-950/80 space-y-2 leading-relaxed">
            <p>
              • <strong>Alliance Cohort Results:</strong> Pre-University board and competitive entrance results for
              the combined NPS–Hanchinmani Kalaburagi campus will be officially published following the completion
              and formal board release of the inaugural alliance batch. Historical track records cited across
              programmes represent verified outcomes from the Hanchinmani Institutes parent network (Dharwad, est. 1994)
              and remain subject to client approval.
            </p>
            <p>
              • <strong>Faculty Profiles & Fee Schedules:</strong> Faculty allocations, individual faculty profiles,
              and official fee schedules are communicated directly via institutional admissions consultation. Parents
              and prospective students are invited to visit the campus admissions office during official hours.
            </p>
          </div>
          <div className="pt-2">
            <Button
              to={ROUTES.ADMISSIONS_PROCESS}
              variant="outline"
              size="sm"
              className="bg-white border-amber-300 text-amber-900 hover:bg-amber-100/60"
            >
              Review Admission Guidelines
            </Button>
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
