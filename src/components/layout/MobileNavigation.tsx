/**
 * @file MobileNavigation.tsx
 * @description Accessible mobile navigation drawer with touch-friendly accordion sections,
 * automatic active-section expansion, Escape dismissal, and zero horizontal overflow.
 */

import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import { MAIN_NAVIGATION } from '../../data/navigation';
import { VERIFIED_CONTACT } from '../../data/institutions';
import { ADMISSIONS_INFORMATION } from '../../data/admissions';
import { Button } from '../ui/Button';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  // Auto-expand the section containing the active route whenever the drawer opens
  useEffect(() => {
    if (isOpen) {
      const activeParent = MAIN_NAVIGATION.find((item) =>
        item.children?.some((child) => child.href === location.pathname)
      );
      if (activeParent) {
        setExpandedSections((prev) => ({
          ...prev,
          [activeParent.id]: true,
        }));
      }
    }
  }, [isOpen, location.pathname]);

  // Close drawer when route changes
  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Container (Constrained for 320px viewports) */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-white shadow-2xl flex flex-col z-50 overflow-y-auto">
        {/* Header */}
        <div className="p-3.5 sm:p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div>
            <span className="font-serif font-bold text-xs sm:text-sm text-[#0f1f38] block leading-tight">
              NPS–Hanchinmani
            </span>
            <span className="text-[10px] sm:text-[11px] text-amber-800 font-medium">
              Academic Alliance Directory
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-[#b8860b]"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-3 sm:px-4 py-3 space-y-1">
          {MAIN_NAVIGATION.map((item) => {
            // Accordion Section with Child Links
            if (item.children && item.children.length > 0) {
              const isExpanded = !!expandedSections[item.id];
              const hasActiveChild = item.children.some((c) => location.pathname === c.href);

              return (
                <div key={item.id} className="border-b border-slate-100 pb-1">
                  <button
                    type="button"
                    onClick={() => toggleSection(item.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`mobile-section-${item.id}`}
                    className={`w-full flex items-center justify-between py-2.5 px-2 rounded-md text-xs sm:text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#b8860b] ${
                      hasActiveChild
                        ? 'text-[#0f1f38] font-semibold bg-slate-50'
                        : 'text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-150 ${
                        isExpanded ? 'rotate-180 text-[#b8860b]' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {isExpanded && (
                    <div
                      id={`mobile-section-${item.id}`}
                      className="pl-3 pr-1 py-1 space-y-1 bg-slate-50/70 rounded-md my-1"
                    >
                      {item.children.map((child) => {
                        const isChildActive = location.pathname === child.href;
                        return (
                          <NavLink
                            key={child.id}
                            to={child.href}
                            className={`block py-2 px-2.5 rounded text-xs transition-colors focus:outline-none focus:ring-1 focus:ring-[#b8860b] ${
                              isChildActive
                                ? 'bg-amber-100/80 text-[#0f1f38] font-semibold border-l-2 border-[#b8860b]'
                                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                            }`}
                          >
                            <div className="font-medium text-slate-900">{child.label}</div>
                            {child.description && (
                              <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                                {child.description}
                              </div>
                            )}
                          </NavLink>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            // Direct Link
            const isDirectActive = location.pathname === item.href;
            return (
              <NavLink
                key={item.id}
                to={item.href || '/'}
                className={`block py-2.5 px-2 rounded-md text-xs sm:text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#b8860b] ${
                  isDirectActive
                    ? 'bg-amber-50 text-[#0f1f38] font-semibold border-l-3 border-[#b8860b]'
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Admissions Action Button & Contact Strip */}
        <div className="p-3.5 sm:p-4 border-t border-slate-200 bg-slate-50 space-y-3">
          <Button
            to="/admissions/enquiry"
            variant="primary"
            size="sm"
            fullWidth
            className="text-xs"
          >
            Admissions Enquiry {ADMISSIONS_INFORMATION.academicYear}
          </Button>

          {/* Contact Details */}
          <div className="space-y-1.5 text-[11px] text-slate-600">
            <div className="flex items-center gap-2 truncate">
              <Phone className="w-3.5 h-3.5 text-amber-700 shrink-0" aria-hidden="true" />
              <span className="truncate">Admissions: {VERIFIED_CONTACT.phones.dedicatedPUAdmissions}</span>
            </div>
            <div className="flex items-center gap-2 truncate">
              <Mail className="w-3.5 h-3.5 text-amber-700 shrink-0" aria-hidden="true" />
              <span className="truncate">{VERIFIED_CONTACT.email}</span>
            </div>
            <div className="flex items-center gap-2 truncate">
              <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0" aria-hidden="true" />
              <span className="truncate">{VERIFIED_CONTACT.campusAddress.city} Campus, {VERIFIED_CONTACT.campusAddress.state}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
