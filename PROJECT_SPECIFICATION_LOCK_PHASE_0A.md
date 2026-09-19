# NPS–HANCHINMANI INSTITUTES ACADEMIC ALLIANCE
## PHASE 0A — REQUIREMENTS & PROJECT SPECIFICATION LOCK

---

### 1. PROJECT OBJECTIVE
To architect, design, and engineer a modern, premium, highly credible, production-ready public website for the **NPS–Hanchinmani Institutes Academic Alliance**. The website will serve as the authoritative digital touchpoint for prospective students, parents, educators, and institutional stakeholders, articulating the combined academic rigor, faculty expertise, integrated competitive examination coaching (NEET, JEE, KCET), campus infrastructure, and student support systems of the alliance. 

The deliverable is structured for direct client handover, upholding strict editorial integrity, verified institutional content, and enterprise-grade performance, accessibility, and security standards.

---

### 2. CLIENT REQUIREMENTS SPECIFICATION

#### 2.1 Verified / Provided Directives
- **Alliance Narrative:** Unified presentation communicating the mutual synergy, academic heritage, and strengths of NPS and Hanchinmani Institutes.
- **Academic Programs:** Rigorous showcase of integrated secondary/senior-secondary academic curricula with dedicated integrated coaching for:
  - National Eligibility cum Entrance Test (NEET)
  - Joint Entrance Examination (JEE)
  - Karnataka Common Entrance Test (KCET)
- **Institutional Profile Pages:** Dedicated overviews for NPS, Hanchinmani Institutes, Alliance Leadership, and Academic Strengths.
- **Campus & Facilities:** Structural coverage of campus infrastructure, modern classrooms, specialized science laboratories, libraries, computing centers, athletic grounds, residential hostels, and student safety/transportation.
- **Academic Outcomes:** Standardized content taxonomy for Board/Entrance examination results, merit lists, institutional milestones, and student success narratives.
- **Engagement Channels:** High-converting, validated enquiry & admissions pipeline, direct WhatsApp advisor routing, campus visit scheduling, and verified institutional directory.
- **Media & Community:** Chronological news, academic events/circulars, verified student/parent/alumni testimonials, and high-fidelity photo gallery with lightbox exploration.
- **Commercial & Governance Scaffolding:** Explicit decoupling of web platform technical deployment from commercial agreements (domain registration, cloud hosting tiers, SSL provision, ongoing SLAs, maintenance fees, and contractual timelines to be formally established in the client commercial proposal without speculative estimates).

#### 2.2 Pending Client / Official Confirmation
- Official legal alliance agreement name, registered entity structure, and institutional hierarchy.
- Official primary logos, brand identity guides, color codes, seal emblems, and typography licenses.
- Official address coordinates, telephone PBX lines, admissions desk emails, and verified WhatsApp business contact numbers.
- Official curriculum accreditation details (e.g., CBSE/State Board/PUC affiliation numbers).
- Official fee schedules, scholarship criteria, and admission eligibility cutoff dates.
- Commercial scope figures (domain registrar choice, hosting infrastructure budget, and maintenance contract tier).

---

### 3. TARGET AUDIENCE & USER PERSONAS

1. **Prospective Students (Class 10 moving to Class 11/PUC):** Seeking rigorous, disciplined coaching for NEET, JEE, or KCET without sacrificing board results, in an inspiring campus environment.
2. **Parents & Guardians:** Demanding academic accountability, past track records, safe and hygienic residential hostels, mentorship, transparent fee/admission processes, and direct communication lines.
3. **Current Students & Parents:** Accessing circulars, event announcements, schedules, and institutional notices.
4. **Alumni & Educational Community:** Following alliance milestones, institutional growth, faculty achievements, and student success benchmarks.

---

### 4. WEBSITE INFORMATION ARCHITECTURE (IA)

```
[ GLOBAL UTILITY & NAVIGATION BAR ]
  ├── Quick Contacts (Phone / Email / WhatsApp)
  ├── Campus Location Flag
  └── Apply / Enquiry CTA Button

1. HOME (/)
   ├── 1.1 Hero Section (Alliance Statement, Value Proposition, Admissions CTA)
   ├── 1.2 Alliance Introduction & Strategic Synergy
   ├── 1.3 NPS Overview Snapshot
   ├── 1.4 Hanchinmani Institutes Overview Snapshot
   ├── 1.5 Academic Alliance Core Pillars
   ├── 1.6 Academic Programmes Portfolio
   ├── 1.7 Integrated NEET / JEE / KCET Programmes Showcase
   ├── 1.8 Faculty & Academic Strength Spotlight
   ├── 1.9 Campus & Facilities Overview
   ├── 1.10 Results & Merit Showcase (Verified Data Only)
   ├── 1.11 Institutional Achievements
   ├── 1.12 Student Success Stories
   ├── 1.13 Authentic Testimonials (Student / Parent / Alumni)
   ├── 1.14 Verified Media Gallery Preview
   ├── 1.15 Latest News & Academic Events Preview
   ├── 1.16 Direct Admissions / Enquiry CTA Banner
   ├── 1.17 WhatsApp Academic Advisor CTA
   └── 1.18 Comprehensive Institutional Footer

2. ABOUT (/about)
   ├── 2.1 About NPS (/about/nps)
   ├── 2.2 About Hanchinmani Institutes (/about/hanchinmani)
   ├── 2.3 Academic Alliance Vision & Charter (/about/alliance)
   └── 2.4 Leadership, Advisory Council & Governing Body (/about/leadership)

3. ACADEMICS (/academics)
   ├── 3.1 Overview of Academic Programmes (/academics/programmes)
   ├── 3.2 Integrated NEET Coaching (/academics/neet)
   ├── 3.3 Integrated JEE (Main & Advanced) Coaching (/academics/jee)
   └── 3.4 Integrated KCET Coaching (/academics/kcet)

4. CAMPUS & FACILITIES (/campus)
   ├── 4.1 Campus Infrastructure & Environment (/campus/overview)
   ├── 4.2 Faculty Profiles & Academic Mentorship (/campus/faculty)
   ├── 4.3 Academic Facilities (Labs, Classrooms, Library, IT) (/campus/facilities)
   ├── 4.4 Residential Hostels & Dining Facilities (/campus/hostel)
   └── 4.5 Campus Life, Sports, Safety & Student Well-being (/campus/life)

5. RESULTS & ACHIEVEMENTS (/results)
   ├── 5.1 Examination Results & Merit Standings (/results/academic)
   ├── 5.2 Institutional Awards & Recognitions (/results/achievements)
   └── 5.3 Student Success Stories & University Selections (/results/success-stories)

6. MEDIA & UPDATES (/media)
   ├── 6.1 Authentic Photo & Video Gallery (/media/gallery)
   ├── 6.2 Testimonials Archive (/media/testimonials)
   └── 6.3 News, Circulars & Upcoming Events (/media/news-events)

7. ADMISSIONS & CONTACT (/admissions)
   ├── 7.1 Admission Guidelines, Eligibility & Process (/admissions/process)
   ├── 7.2 Online Enquiry & Prospectus Request Form (/admissions/enquiry)
   ├── 7.3 Verified Institutional Directory & Contact Information (/contact)
   └── 7.4 Campus Visit Booking & Geographic Directions (/contact/visit)
```

---

### 5. COMPLETE PAGE LIST

| # | Route | Page Title | Primary Functional Role |
|---|---|---|---|
| 1 | `/` | Home | Immediate alliance synthesis, program gateway, high-level credibility markers, conversion CTAs |
| 2 | `/about/nps` | About NPS | Legacy, pedagogical foundation, values, and credentials of NPS |
| 3 | `/about/hanchinmani` | About Hanchinmani Institutes | History, competitive coaching track record, and educational ecosystem of Hanchinmani |
| 4 | `/about/alliance` | The Academic Alliance | Charter, mutual strengths, strategic objectives, and synergy of the alliance |
| 5 | `/about/leadership` | Leadership & Governance | Messages from Founders, Directors, Academic Deans, and Advisory Council |
| 6 | `/academics/programmes` | Academic Programmes | Curriculum matrix, subject combinations, integrated day schedule, and pedagogical models |
| 7 | `/academics/neet` | Integrated NEET Coaching | Medical entrance preparation strategy, study materials, mock testing, and doubt clearance |
| 8 | `/academics/jee` | Integrated JEE Coaching | Engineering entrance preparation (Main + Advanced), problem-solving clinics, analytical training |
| 9 | `/academics/kcet` | Integrated KCET Coaching | Karnataka state entrance curriculum alignment, speed-accuracy conditioning, and syllabus coverage |
| 10 | `/campus/overview` | Campus Infrastructure | Physical infrastructure, environment, architectural safety, and campus master plan |
| 11 | `/campus/faculty` | Faculty & Mentorship | Subject experts, entrance coaching specialists, and student mentoring framework |
| 12 | `/campus/facilities` | Academic Facilities | Laboratories (Physics, Chemistry, Biology), Library, Computing Centers, Smart Classrooms |
| 13 | `/campus/hostel` | Residential Hostels | Boarding amenities, dining & nutrition, warden supervision, security, and study hours |
| 14 | `/campus/life` | Campus Life & Co-Curricular | Sports, wellness, cultural activities, healthcare, and discipline policy |
| 15 | `/results/academic` | Results & Ranks | Verified board pass percentages, competitive rank lists, and score analytics |
| 16 | `/results/achievements` | Institutional Achievements | Academic awards, inter-institutional competitions, and milestone recognitions |
| 17 | `/results/success-stories` | Student Success Stories | Verified alumni profiles, medical/engineering admissions, and career trajectories |
| 18 | `/media/gallery` | Official Image Gallery | Curated institutional photography categorized by Campus, Academics, Labs, Hostels, Events |
| 19 | `/media/testimonials` | Institutional Testimonials | Verified statements from students, parents, and alumni with authentic attribution |
| 20 | `/media/news-events` | News & Events | Academic circulars, exam dates, guest lectures, workshops, and alliance announcements |
| 21 | `/admissions/process` | Admissions & Eligibility | Step-by-step admission roadmap, eligibility criteria, document checklists, and FAQs |
| 22 | `/admissions/enquiry` | Admission Enquiry Portal | Multi-field verified enquiry form with input validation and program preference selector |
| 23 | `/contact` | Contact & Campus Location | Verified physical address, PBX phones, department emails, interactive map, WhatsApp channel |
| 24 | `/privacy-policy` | Privacy Policy & Legal | Data handling disclosure for enquiry submissions in accordance with data regulations |
| 25 | `/404` | Not Found | Brand-aligned fallback error page with quick links back to primary academic sections |

---

### 6. COMPREHENSIVE FEATURE LIST

- **Header & Navigation System:**
  - Sticky, high-contrast institutional header with clear desktop mega-menu dropdowns.
  - Off-canvas drawer navigation for mobile with accordion sublevels and quick action triggers.
  - Emergency notification / Admissions alert ticker for timely circulars.
- **Academic Programme Exploration Engine:**
  - Tabbed or modular course breakdowns detailing Curriculum, Exam Focus, Daily Schedule, and Assessment Model.
  - Comparative curriculum matrix for Board vs. Integrated NEET vs. JEE vs. KCET.
  - Downloadable Prospectus / Syllabus checklist trigger (linked to validated enquiry capture).
- **Interactive Admissions & Enquiry System:**
  - Real-time client-side validated form fields: Full Name, Parent Name, Mobile Number (Indian 10-digit format), Email, Current School, Board (CBSE/ICSE/State), Interested Programme (NEET/JEE/KCET/Board), Residential Requirement (Day Scholar / Hosteller), and Query Comments.
  - Honest status feedback (explicit submission feedback with real server/endpoint routing, never displaying false success messages).
  - WhatsApp direct-chat integration pre-filled with student query context.
- **Media Lightbox & Gallery System:**
  - Filterable tabs: All, Campus & Grounds, Academic Labs, Classrooms, Hostels & Dining, Events & Sports.
  - Modal lightbox viewer with keyboard navigation (Escape, Left, Right arrows), caption overlays, and image loading optimization.
- **Results & Data Visualization Module:**
  - Clean, professional tabular cards and metric counters displaying only authenticated scores and ranks.
  - Pending status tags ("Official results verification pending from client") for unconfirmed data sets.
- **Campus & Facility Explorer:**
  - Structured facility breakdown with verified specifications (capacity, equipment, safety standards).
  - Dedicated hostel life section highlighting separate boys' and girls' residential blocks, study regulations, and dietary management.
- **Search & Fast Navigation Utility:**
  - Filterable FAQ accordion for admissions, hostel rules, and competitive exam preparation.
  - Accessible footer sitemap grouping Academic, Institutional, Admissions, and Contact endpoints.

---

### 7. DESIGN PRINCIPLES & VISUAL DIRECTION

- **Aesthetic Direction:** Modern, Premium, Academic, Authoritative, Trustworthy.
- **Palette Guidelines:**
  - *Primary Core:* Deep Academic Navy / Royal Slate (representing intellectual gravitas and institutional stability).
  - *Secondary Accent:* Warm Scholastic Gold / Bronze Ochre (signifying academic excellence, prestige, and achievement).
  - *Neutral Canvas:* Crisp, high-contrast off-whites and cool parchment grays (ensuring effortless readability and visual balance).
  - *Contrast Ratio:* Strict compliance with WCAG AA standards (minimum 4.5:1 for body copy and 3.0:1 for large display elements).
- **Typography & Scale:**
  - Display Font: High-character Serif or refined Geometric Display (e.g., Playfair Display, Cinzel, or Merriweather for prestigious institutional headers).
  - Body Font: Clean, highly legible Modern Sans-Serif (e.g., Plus Jakarta Sans, Outfit, or Public Sans with generous x-height and comfortable line-height of 1.6).
- **Anti-Slop Directives:**
  - Strict prohibition of generic AI tropes: NO purple/blue glowing gradients, NO cyan-on-black neon text, NO random floating glassmorphism cards, and NO arbitrary glowing box-shadows.
  - Controlled border radii (capped at 8px to 12px for cards; 9999px for deliberate pill badges).
  - Clean structural margins, generous macro-whitespace (minimum 64px–96px between desktop sections), and consistent rhythm.

---

### 8. STRICT CONTENT RULES

1. **Zero Fabrication Policy:** Under NO circumstances will affiliations, student ranks, qualifying counts, cutoffs, staff qualifications, or parent reviews be invented.
2. **Pending Confirmation Protocol:** Any data point awaiting client submission must be visibly annotated with:
   `"Official Content Pending Institutional Confirmation"` or maintained as an explicit development draft tag.
3. **Institutional Dignity:** Copywriting must be objective, respectful, academic, and articulate. Avoid promotional sales jargon ("crush the competition", "supercharge your brain").
4. **Attribution Integrity:** Every testimonial, quote, or leadership address must feature a real, verified name, designation, and academic cohort year.

---

### 9. STRICT PHOTOGRAPHY RULES

1. **Authenticity Mandate:** Only genuine, high-resolution photographs supplied and authorized by NPS or Hanchinmani Institutes are permitted on the public website.
2. **Prohibited Imagery:**
   - NO AI-generated photos or synthetic human faces.
   - NO stock photos passed off as real alliance facilities or students.
   - NO unlicensed internet campus photography.
3. **Placeholder Standard:** For any section without supplied client photography, use an elegant, neutral SVG/CSS architectural placeholder with the verified label:
   `"Official institutional photography pending client handover"`.
4. **Technical Standards:** Aspect ratios standardized to 16:9 for banners, 4:3 for facility cards, and 1:1 for faculty portraits, with responsive `srcset` and `object-cover` styling.

---

### 10. TECHNICAL & ARCHITECTURAL REQUIREMENTS

- **Frontend Core:** React 19, TypeScript (strict mode, no implicit `any`), Vite 8.
- **Styling Architecture:** Tailwind CSS v4 utility architecture with CSS variables for responsive design and strict palette definitions.
- **Component Modularity:** Strict modular decoupling (subcomponents isolated into `/src/components/`, data structures into `/src/data/`, contracts into `/src/types.ts`).
- **Icons & Visuals:** `lucide-react` exclusively for iconography; standard HTML5 semantic elements.
- **State & Form Handling:** Controlled React state with full input sanitization, client-side regex checks, and real dispatch endpoints.
- **Motion & Micro-interactions:** Purposeful, subtle layout transitions and entry fades via `motion/react` with `prefers-reduced-motion` compliance.

---

### 11. SEO & SEARCH ENGINE SPECIFICATION

- **Metadata Architecture:**
  - Unique semantic `<title>` and `<meta name="description">` per route.
  - Open Graph tags (`og:title`, `og:description`, `og:type`, `og:image`, `og:url`) and Twitter Cards (`summary_large_image`).
  - Canonical URL tags matching clean route paths.
- **Structured Data (Schema.org JSON-LD):**
  - `EducationalOrganization` Schema representing the Academic Alliance, NPS, and Hanchinmani Institutes.
  - `Course` Schema for NEET, JEE, and KCET programmes.
  - `BreadcrumbList` Schema across all nested routes.
- **Accessibility & Crawlability:**
  - Logical H1 -> H2 -> H3 document heading hierarchy.
  - Meaningful `alt` attributes on all photographic assets and `aria-label` tags on interactive buttons/icons.
  - `sitemap.xml` and `robots.txt` generation specifications.

---

### 12. ADMIN PANEL & CMS ARCHITECTURE SPECIFICATION

- **Purpose:** Decoupled content management allowing authorized institutional staff to update dynamic announcements without code changes.
- **Future Managed Collections:**
  - *Admissions Enquiries:* Filterable table with status tracking (New, Contacted, Prospectus Sent, Scheduled Campus Visit).
  - *News & Academic Notices:* Title, publication date, circular PDF attachment, category tag, and pinned status.
  - *Academic Results & Rank Holders:* Student name, roll number, exam, rank/percentile, college destination, and verified portrait.
  - *Photo Gallery:* Album categorization, image asset uploader, captions, and display order.
  - *Testimonials:* Reviewer name, role (Student/Parent/Alumni), graduation year, quote text, and verification badge.
- **Architecture Strategy:** Provide clean, typed JSON data fixtures in `/src/data/` that mirror a future headless CMS (e.g., Firestore, Supabase, or Strapi API) with zero hardcoded visual text inside UI components.

---

### 13. QUALITY ASSURANCE & TESTING SPECIFICATION

- **Verification Protocol:** An HTTP 200 response is merely a baseline. Every page and component must be systematically tested against:
  - Visual fidelity and typography contrast under daylight and low-glare viewports.
  - Working dropdown menus, drawers, accordions, and lightbox interactions without UI jumps.
  - Responsive reflow across mobile (320px–428px), tablet (768px–1024px), laptop (1280px–1440px), and desktop (1920px+).
  - Clean browser console without React warning keys, hydration mismatches, or unresolved 404 network assets.
  - Complete form validation ensuring edge cases (empty strings, invalid mobile lengths, non-email formats) produce helpful inline error states.

---

### 14. MULTI-PHASE DEVELOPMENT ROADMAP

```
Phase 0A  -> Requirements & Project Specification Lock (CURRENT STEP)
Phase 0B  -> Official Source Verification & Content Taxonomy Design
Phase 1   -> Clean Production Project Foundation & Directory Architecture
Phase 2   -> Institutional Brand & Design System (Tokens, Palette, Typography)
Phase 3   -> Navigation Shell, Header, Mobile Drawer, and Institutional Footer
Phase 4   -> Content & Data Architecture (Typed Schemas, Content Placeholders)
Phase 5   -> Homepage Engineering (All 18 Conceptual Sections)
Phase 6   -> Institutions & Alliance Overview Pages (NPS, Hanchinmani, Leadership)
Phase 7   -> Academics & Competitive Coaching Modules (NEET, JEE, KCET)
Phase 8   -> Campus, Faculty & Residential Infrastructure Modules
Phase 9   -> Results, Merit Ranks & Student Success Stories
Phase 10  -> Gallery Lightbox, Testimonial Archive & News/Events
Phase 11  -> Admissions Portal, Enquiry Validation Engine & WhatsApp Routing
Phase 12  -> Responsive Optimization & Cross-Device Polish
Phase 13  -> SEO, Accessibility (WCAG AA), and Performance Optimization
Phase 14  -> Admin / CMS Data Interface Preparation
Phase 15  -> Comprehensive QA, Cross-Browser & Functional Verification
Phase 16  -> Client Handover Documentation & Stakeholder Presentation
Phase 17  -> Production Build, Deployment & Git Readiness
```

---

### 15. ITEMS REQUIRING OFFICIAL / CLIENT CONFIRMATION

1. **Official Alliance Identity:** Registered institutional alliance title and high-resolution vector logos (.SVG / .AI / high-res .PNG) for NPS and Hanchinmani.
2. **Official Campus Details:** Physical street address, landmark, PIN code, geolocation coordinates, and visiting hours.
3. **Official Telephony & Communications:** Primary office phone number, dedicated admissions helpline, official inquiry email addresses, and WhatsApp business number.
4. **Academic Accreditations:** Exact board affiliations (e.g., CBSE / Karnataka State Pre-University Board affiliation codes).
5. **NEET/JEE/KCET Curriculum Specifics:** Batch timings, faculty mentor credentials, study material partnerships, and batch intake limits.
6. **Past Results & Statistics:** Year-by-year verified scores, top NEET percentiles, JEE Advanced selections, and KCET top ranks.
7. **Hostel & Facility Inclusions:** Exact capacity, room sharing configurations (2-sharing, 3-sharing), mess menu philosophy, and warden contacts.
8. **Fee & Scholarship Policies:** Official fee structures, merit scholarship criteria, or confirmation to route all fee inquiries directly through admissions counselors.

---

### 16. RISKS, UNKNOWNS & MITIGATION STRATEGY

| Risk / Unknown | Impact | Architectural Mitigation Strategy |
|---|---|---|
| Delay in client-supplied official photography | Inability to display authentic campus imagery | Implement tasteful, neutral architectural placeholder cards clearly marked "Official Photography Pending Confirmation". Under no circumstance use synthetic or fake stock imagery. |
| Unverified past competitive exam ranks | Potential legal and credibility exposure for institutions | Display only client-verified results. Unconfirmed metrics will remain in draft mode or marked with clear verification tags. |
| Incomplete fee structure or admission cutoffs | Parent frustration or inaccurate information dissemination | Channel all pricing and admission criteria through a personalized inquiry form and direct WhatsApp counselor desk. |
| Large photo asset payload impacting mobile performance | Slow initial load and high bounce rate | Enforce modern image formats (WebP/AVIF), responsive image `srcset`, lazy loading for below-the-fold assets, and CDN optimization. |
| Client-requested revisions during layout development | Rework and scope creep | Adhere strictly to the modular phase roadmap; freeze layout skeletons before populating verified content. |

---

### 17. DEFINITION OF "CLIENT-READY"

A release or page is formally considered **Client-Ready** only when:
1. **Content Integrity:** All displayed copy is factually verified or cleanly labeled as pending confirmation; zero placeholder lorem ipsum or fabricated claims.
2. **Visual Distinction:** Delivers a refined, prestigious academic atmosphere with pristine typography, harmonious color application, and rigorous responsive spacing.
3. **Zero Broken Links / Routes:** Every link, anchor, menu item, and breadcrumb resolves correctly to an active, rendered component.
4. **Fully Tested Interactive Elements:** Forms validate inputs cleanly, provide immediate user guidance, and handle submission gracefully without phantom promises.
5. **Flawless Code Health:** 100% build pass rate with zero TypeScript compile errors, zero ESLint issues, and no unhandled browser runtime warnings.
6. **Handover-Grade Documentation:** Clear data architecture allowing institutional administrators to manage announcements, gallery albums, and course descriptions effortlessly.

---
*Status: Phase 0A Specification Locked. Ready for Phase 0B / Phase 1 upon confirmation.*
