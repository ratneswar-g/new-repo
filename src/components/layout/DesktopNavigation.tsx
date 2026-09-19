/**
 * @file DesktopNavigation.tsx
 * @description Accessible desktop navigation supporting academic hierarchy,
 * clean active states, keyboard focus, blur handling, and refined dropdown menus.
 */

import { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { MAIN_NAVIGATION } from '../../data/navigation';
import { NavigationItem } from '../../types/navigation';

export function DesktopNavigation() {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape' && activeDropdown) {
        const currentTrigger = triggerRefs.current[activeDropdown];
        setActiveDropdown(null);
        if (currentTrigger) {
          currentTrigger.focus();
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeDropdown]);

  // Close dropdown when route changes
  useEffect(() => {
    setActiveDropdown(null);
  }, [location.pathname]);

  const isDropdownActive = (item: NavigationItem): boolean => {
    if (!item.children) return false;
    return item.children.some((child) => location.pathname === child.href);
  };

  return (
    <nav
      ref={navRef}
      aria-label="Main Navigation"
      className="hidden lg:flex items-center gap-0.5 xl:gap-1"
    >
      {MAIN_NAVIGATION.map((item) => {
        // Section with Dropdown menu
        if (item.children && item.children.length > 0) {
          const isOpen = activeDropdown === item.id;
          const isActive = isDropdownActive(item);

          return (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.id)}
              onMouseLeave={() => setActiveDropdown(null)}
              onBlur={(e) => {
                // When focus leaves this dropdown container, close the dropdown
                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                  setActiveDropdown(null);
                }
              }}
            >
              <button
                ref={(el) => {
                  triggerRefs.current[item.id] = el;
                }}
                id={`dropdown-btn-${item.id}`}
                type="button"
                aria-expanded={isOpen}
                aria-haspopup="true"
                aria-controls={`dropdown-menu-${item.id}`}
                onClick={() => setActiveDropdown(isOpen ? null : item.id)}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowDown' && !isOpen) {
                    e.preventDefault();
                    setActiveDropdown(item.id);
                  }
                }}
                className={`flex items-center gap-1 px-2.5 xl:px-3 py-2 rounded-md text-xs xl:text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#b8860b] ${
                  isActive
                    ? 'text-[#0f1f38] bg-slate-100 font-semibold border-b-2 border-[#b8860b]'
                    : 'text-slate-700 hover:text-[#0f1f38] hover:bg-slate-100/70'
                }`}
              >
                <span>{item.label}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-150 ${
                    isOpen ? 'rotate-180 text-[#b8860b]' : 'text-slate-400'
                  }`}
                  aria-hidden="true"
                />
              </button>

              {/* Compact, High-Legibility Dropdown Card */}
              {isOpen && (
                <div
                  id={`dropdown-menu-${item.id}`}
                  role="menu"
                  aria-labelledby={`dropdown-btn-${item.id}`}
                  className="absolute left-0 top-full pt-1.5 z-50 w-64 xl:w-72 origin-top-left animate-in fade-in slide-in-from-top-1 duration-150"
                >
                  <div className="bg-white rounded-lg shadow-xl border border-slate-200 py-1.5 ring-1 ring-black/5 overflow-hidden">
                    <div className="px-3 py-1.5 border-b border-slate-100 bg-slate-50/80 flex items-center justify-between">
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500">
                        {item.label} Directory
                      </span>
                      <span className="text-[9px] font-mono text-slate-400">
                        {item.children.length} destinations
                      </span>
                    </div>
                    {item.children.map((child) => {
                      const isChildActive = location.pathname === child.href;
                      return (
                        <NavLink
                          key={child.id}
                          to={child.href}
                          role="menuitem"
                          className={`block px-3 py-2 text-xs transition-colors focus:outline-none focus:bg-amber-50 ${
                            isChildActive
                              ? 'bg-amber-50 text-[#0f1f38] font-semibold border-l-3 border-[#b8860b]'
                              : 'text-slate-700 hover:bg-slate-50 hover:text-[#0f1f38]'
                          }`}
                        >
                          <div className="font-medium text-slate-900">{child.label}</div>
                          {child.description && (
                            <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                              {child.description}
                            </p>
                          )}
                        </NavLink>
                      );
                    })}
                  </div>
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
            className={`px-2.5 xl:px-3 py-2 rounded-md text-xs xl:text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#b8860b] ${
              isDirectActive
                ? 'text-[#0f1f38] bg-slate-100 font-semibold border-b-2 border-[#b8860b]'
                : 'text-slate-700 hover:text-[#0f1f38] hover:bg-slate-100/70'
            }`}
          >
            {item.label}
          </NavLink>
        );
      })}
    </nav>
  );
}
