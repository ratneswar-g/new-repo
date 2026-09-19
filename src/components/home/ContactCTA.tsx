/**
 * @file ContactCTA.tsx
 * @description Campus contact and admissions enquiry section for the homepage.
 * Consumes centralized contact coordinates from src/data/contact.ts with zero hardcoded values.
 */

import { MapPin, Phone, Mail, Calendar, ArrowRight } from 'lucide-react';
import { VERIFIED_CONTACT } from '../../data/contact';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { ROUTES } from '../../routes/routeConfig';

export function ContactCTA() {
  const contact = VERIFIED_CONTACT;

  return (
    <Section variant="standard">
      <div className="space-y-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-mono uppercase tracking-wider font-semibold text-[#b8860b]">
            Institutional Coordinates
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Connect with the Admissions & Academic Office
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Parents, students, and aspirants are welcome to visit our campus or contact the administrative office during official working hours.
          </p>
        </div>

        {/* Contact Coordinates 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Address */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="w-9 h-9 rounded-lg bg-blue-100 text-[#0f1f38] flex items-center justify-center">
              <MapPin className="w-4 h-4 text-[#0f1f38]" aria-hidden="true" />
            </div>
            <h3 className="text-xs font-mono uppercase font-bold text-slate-500 tracking-wider">
              Campus Location
            </h3>
            <p className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
              {contact.campusAddress.fullFormatted}
            </p>
          </div>

          {/* Telephone */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center">
              <Phone className="w-4 h-4 text-amber-800" aria-hidden="true" />
            </div>
            <h3 className="text-xs font-mono uppercase font-bold text-slate-500 tracking-wider">
              Admissions Helpline
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-slate-900">
              <a
                href={`tel:${contact.phones.dedicatedPUAdmissions.replace(/\s+/g, '')}`}
                className="hover:text-[#b8860b] transition-colors"
              >
                {contact.phones.dedicatedPUAdmissions}
              </a>
            </p>
            <p className="text-[11px] text-slate-500">
              Dedicated Senior-Secondary & PU Helpline
            </p>
          </div>

          {/* Email */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-900 flex items-center justify-center">
              <Mail className="w-4 h-4 text-emerald-800" aria-hidden="true" />
            </div>
            <h3 className="text-xs font-mono uppercase font-bold text-slate-500 tracking-wider">
              Official Email
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-slate-900 truncate">
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-[#b8860b] transition-colors"
              >
                {contact.email}
              </a>
            </p>
            <p className="text-[11px] text-slate-500">
              General & Admissions Inquiries
            </p>
          </div>

          {/* Campus Appointments */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-900 flex items-center justify-center">
              <Calendar className="w-4 h-4 text-purple-800" aria-hidden="true" />
            </div>
            <h3 className="text-xs font-mono uppercase font-bold text-slate-500 tracking-wider">
              Campus Visits
            </h3>
            <p className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
              In-Person Admissions Desk
            </p>
            <p className="text-[11px] text-slate-500">
              Prior appointment via admissions helpline recommended
            </p>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 rounded-xl bg-[#f0f4f9] border border-blue-200/80 gap-4">
          <p className="text-xs sm:text-sm text-slate-700">
            Need directions, route options, or campus visiting guidelines?
          </p>

          <div className="flex items-center gap-3">
            <Button
              to={ROUTES.CONTACT}
              variant="primary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
            >
              Campus Visit Details
            </Button>
            <Button
              to={ROUTES.ADMISSIONS_ENQUIRY}
              variant="outline"
              size="md"
              className="bg-white"
            >
              Enquire Online
            </Button>
          </div>
        </div>

      </div>
    </Section>
  );
}
