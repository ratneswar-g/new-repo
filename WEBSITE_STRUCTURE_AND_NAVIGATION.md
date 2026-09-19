# NPS–HANCHINMANI INSTITUTES ACADEMIC ALLIANCE
## Phase 3 — Website Structure & Navigation Architecture Specification

**Status:** COMPLETE & AUDITED  
**Phase:** Phase 3 (Website Structure & Navigation)  
**Verification Date:** 2026-09-18  
**Verification Result:** 26/26 Routes Passing (100% Zero-Defect Audit)

---

## 1. Executive Summary & Information Architecture

The website structure and navigation hierarchy for the **NPS–Hanchinmani Institutes Academic Alliance** website has been fully centralized, integrated, and verified across all required institutional routes.

### Architectural Principles
1. **Single Source of Truth:** Centralized route map in `src/routes/routeConfig.tsx` and centralized navigation hierarchy in `src/data/navigation.ts`.
2. **Deterministic Breadcrumbs:** Dynamic resolver `getBreadcrumbsForPath(pathname)` provides exact, hierarchical breadcrumb trails for all 25 registered routes and unknown 404 paths. Breadcrumbs are suppressed on the homepage (`/`) to eliminate visual noise.
3. **WCAG 2.1 AA Accessibility:** Full keyboard navigation (`Tab`, `Enter`, `Space`, `ArrowDown`, `Escape`), accessible ARIA controls (`aria-expanded`, `aria-haspopup`, `aria-controls`, `aria-labelledby`, `role="menu"`, `role="menuitem"`), focus traps, outside-click listeners, and an accessible skip-link (`#main-content`).
4. **Responsive Resilience:** Desktop dropdown menus with blur handling and hover management; touch-friendly mobile drawer (tested from 320px viewport upwards) featuring accordion categories, active-section auto-expansion, and body scroll lock.
5. **Brand System Integrity:** Deep Academic Navy (`#0f1f38`), Warm Gold accents (`#b8860b`), institutional typography, and zero synthetic placeholders.

---

## 2. Complete Audited Route Registry

| # | Route Path | Section Category | Page Component | Breadcrumb Trail | Direct URL Accessible |
|---|---|---|---|---|---|
| 1 | `/` | Portal Core | `HomePage` | *(None — suppressed on root)* | YES |
| 2 | `/about/nps` | About | `AboutNPSPage` | Home → About → NPS | YES |
| 3 | `/about/hanchinmani` | About | `AboutHanchinmaniPage` | Home → About → Hanchinmani Institutes | YES |
| 4 | `/about/alliance` | About | `AlliancePage` | Home → About → Academic Alliance | YES |
| 5 | `/about/leadership` | About | `LeadershipPage` | Home → About → Leadership | YES |
| 6 | `/academics/programmes` | Academics | `ProgrammesPage` | Home → Academics → Programmes | YES |
| 7 | `/academics/neet` | Academics | `NEETPage` | Home → Academics → NEET | YES |
| 8 | `/academics/jee` | Academics | `JEEPage` | Home → Academics → JEE | YES |
| 9 | `/academics/kcet` | Academics | `KCETPage` | Home → Academics → KCET | YES |
| 10 | `/campus/overview` | Campus | `CampusOverviewPage` | Home → Campus → Overview | YES |
| 11 | `/campus/faculty` | Campus | `FacultyPage` | Home → Campus → Faculty | YES |
| 12 | `/campus/facilities` | Campus | `FacilitiesPage` | Home → Campus → Facilities | YES |
| 13 | `/campus/hostel` | Campus | `HostelPage` | Home → Campus → Hostel | YES |
| 14 | `/campus/life` | Campus | `CampusLifePage` | Home → Campus → Campus Life | YES |
| 15 | `/results/academic` | Results | `AcademicResultsPage` | Home → Results → Academic Results | YES |
| 16 | `/results/achievements` | Results | `AchievementsPage` | Home → Results → Achievements | YES |
| 17 | `/results/success-stories` | Results | `SuccessStoriesPage` | Home → Results → Success Stories | YES |
| 18 | `/media/gallery` | Media | `GalleryPage` | Home → Media → Gallery | YES |
| 19 | `/media/testimonials` | Media | `TestimonialsPage` | Home → Media → Testimonials | YES |
| 20 | `/media/news-events` | Media | `NewsEventsPage` | Home → Media → News & Events | YES |
| 21 | `/admissions/process` | Admissions | `AdmissionProcessPage` | Home → Admissions → Admission Process | YES |
| 22 | `/admissions/enquiry` | Admissions | `AdmissionEnquiryPage` | Home → Admissions → Enquiry | YES |
| 23 | `/contact` | Utility | `ContactPage` | Home → Contact | YES |
| 24 | `/privacy-policy` | Utility | `PrivacyPolicyPage` | Home → Privacy Policy | YES |
| 25 | `/404` | Utility | `NotFoundPage` | Home → 404 Not Found | YES |
| 26 | `*` (e.g. `/invalid-test-route`) | Fallback | `NotFoundPage` | Home → 404 Not Found | YES |

---

## 3. Navigation System Architecture

### 3.1 Desktop Navigation (`DesktopNavigation.tsx`)
- **Structure:** 6 major top-level sections:
  1. *About* (Dropdown: NPS, Hanchinmani Institutes, Academic Alliance, Leadership)
  2. *Academics* (Dropdown: Programmes, Integrated NEET, Integrated JEE, Integrated KCET)
  3. *Campus* (Dropdown: Overview, Faculty, Facilities, Hostel, Campus Life)
  4. *Results* (Dropdown: Academic Results, Achievements, Success Stories)
  5. *Media* (Dropdown: Gallery, Testimonials, News & Events)
  6. *Admissions* (Direct Link: `/admissions/process`)
- **Action Control:** Dedicated primary button linking directly to `/admissions/enquiry`.
- **Keyboard Behavior:**
  - `ArrowDown` opens dropdown when the trigger button has focus.
  - `Escape` closes dropdown and returns focus to the parent trigger button.
  - Focus leaves container via `onBlur` cleanly closes dropdown without trapping tabs.

### 3.2 Mobile Navigation (`MobileNavigation.tsx`)
- **Drawer Specifications:** Fixed overlay constrained to viewport width with zero horizontal overflow (tested down to 320px).
- **Body Scroll Lock:** Prevents background content scrolling when drawer is active.
- **Accordion Navigation:**
  - Independent section toggles with `aria-expanded` and `aria-controls`.
  - **Auto-Expansion:** Automatically opens the accordion section matching the current URL upon opening.
- **Contact & Action Strip:** Includes immediate calling button for admissions, verified admissions phone number (`+91 94806 91040`), verified email (`hanchinmanicollege@gmail.com`), and Kalaburagi campus address.

### 3.3 Breadcrumb Navigation (`Breadcrumb.tsx`)
- **Suppression on Root:** Completely suppressed on `/` to maintain hero focus.
- **Home Root Icon & Label:** Renders `Home` with semantic `Home` icon linking to `/`.
- **Hierarchy Representation:** Each intermediate level is an active link; current page is displayed with `aria-current="page"` and bold dark styling.
- **Responsive Truncation:** Gracefully truncates lengthy titles on small mobile viewports.

### 3.4 Institutional Footer (`Footer.tsx`)
- **Layout:** 7-column responsive grid (`lg:grid-cols-7`).
- **Col 1-2:** Strategic Alliance identity, verified campus physical address, admissions desk phone, verified email, and office hours.
- **Col 3-7:** 5 navigation directory columns covering About, Academics, Campus, Results & Media, and Admissions & Legal.
- **Governance Badges:** Institutional governance disclosures for Sanskar Trust Gulbarga and Shantesh Education Society Dharwad.
- **Bottom Strip:** Copyright notice, Privacy Policy link, Contact link, and System 404 link.

---

## 4. Verification and Audit Confirmation

The test suite in `scripts/verify-routes.ts` was executed:
- **Registered Routes Checked:** 26
- **Passed Tests:** 26 (100%)
- **Header Navigation Links:** 100% valid and registered
- **Footer Navigation Links:** 100% valid and registered
- **TypeScript Compilation:** 0 errors
- **Production Build:** Succeeded cleanly
