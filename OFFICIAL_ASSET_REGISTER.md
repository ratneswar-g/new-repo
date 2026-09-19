# OFFICIAL ASSET REGISTER
## PROJECT: NPS–HANCHINMANI INSTITUTES ACADEMIC ALLIANCE
### Phase 0B — Official Asset Inventory & Verification Audit

---

### 1. Mandatory Asset Integrity Rules
1. **Zero Synthetic / AI Imagery:** No AI-generated portraits, campus mockups, synthetic students, or artificial illustrations may ever be classified as official assets or used on the public website.
2. **Zero Uncredited Stock:** Commercial stock photography passed off as real alliance facilities is strictly prohibited.
3. **Official Asset Definition:** Only original, unadulterated high-resolution image files directly authored by, owned by, or officially provided by NPS, Hanchinmani Institutes, or their authorized administrative teams qualify as official assets.
4. **Current Status:** As of Phase 0B audit, **ZERO (0)** official photographic or vector assets currently reside inside the `/public/` repository tree. All institutional assets are formally cataloged below under `PENDING_CLIENT_HANDOVER`.

---

### 2. Branding Assets Inventory

| Asset Code | Asset Description | Target Institution / Entity | Target Format Required | Current Verification Status | Intended Usage |
|---|---|---|---|---|---|
| **BRD-01** | NPS Primary Emblem / Logo | National Public School & PU College | Vector (.SVG) or High-Res Transparent .PNG (Min. 1000px) | `PENDING_CLIENT_HANDOVER` | Global Navbar, Institutional Profile, Footer, Official Circulars |
| **BRD-02** | Hanchinmani Institutes Emblem / Logo | P.S. Hanchinmani Institutes / Shantesh Education Society | Vector (.SVG) or High-Res Transparent .PNG (Min. 1000px) | `PENDING_CLIENT_HANDOVER` | Global Navbar, Institutional Profile, Footer, Coaching Badges |
| **BRD-03** | Academic Alliance Lockup / Joint Emblem | NPS–Hanchinmani Institutes Academic Alliance | Vector (.SVG) or High-Res Transparent .PNG (Min. 1200px) | `CLIENT_APPROVAL_REQUIRED` (To be supplied or approved by client) | Hero Section, Header Banner, Admission Brochure, Diplomas |
| **BRD-04** | Foundation Entity Emblem / Seal (If applicable) | Alliance Foundation / Trust | Vector (.SVG) or .PNG | `PENDING_CLIENT_CONFIRMATION` | Foundation Section / Legal Disclosures |
| **BRD-05** | Official Typography Specifications | Alliance Brand Guide | Web-licensed font files (.woff2) or Google Fonts declaration | `PENDING_CLIENT_HANDOVER` | Headings and Body styling across entire platform |
| **BRD-06** | Official Institutional Color Palette | Alliance Brand Guide | Hex / HSL Color Specification Codes | `PENDING_CLIENT_HANDOVER` | Tailwind theme tokens (Primary, Secondary, Accent, Neutrals) |

*Note: During development, if official vector logos are not yet delivered by the client, clean semantic SVG typographic emblems clearly watermarked "OFFICIAL LOGO PENDING HANDOVER" will be utilized to prevent broken layout renders.*

---

### 3. Photographic Asset Classification & Inventory Matrix

| Asset Code | Classification | Subject / Target Scene | Minimum Required Specs | Current Status | Mandatory Placeholder Rule |
|---|---|---|---|---|---|
| **IMG-01** | `LEADERSHIP` | Founder Chairman / Secretary / Principal Official Portraits | 1:1 Aspect, 800x800px, Professional Studio Attire | `PENDING_CLIENT_HANDOVER` | Neutral architectural silhouette with label: *"Official Leadership Portrait Pending Handover"* |
| **IMG-02** | `CAMPUS` | Main Institutional Campus Facade & Entrance Gate | 16:9 Aspect, 1920x1080px, Natural Daylight | `PENDING_CLIENT_HANDOVER` | Neutral architectural SVG card: *"Official Campus Facade Pending Handover"* |
| **IMG-03** | `CLASSROOM` | Smart Digital Classrooms & Lecture Halls | 16:9 Aspect, 1600x900px, Actual Study Layout | `PENDING_CLIENT_HANDOVER` | Architectural placeholder: *"Official Classroom Photography Pending Handover"* |
| **IMG-04** | `LABORATORY` | Physics, Chemistry & Biology Science Laboratories | 4:3 Aspect, 1200x900px, Student Workstations & Equipment | `PENDING_CLIENT_HANDOVER` | Architectural placeholder: *"Official Science Lab Photography Pending Handover"* |
| **IMG-05** | `LABORATORY` | Computer & Information Technology Center | 4:3 Aspect, 1200x900px, High-Density Terminal Layout | `PENDING_CLIENT_HANDOVER` | Architectural placeholder: *"Official IT Lab Photography Pending Handover"* |
| **IMG-06** | `LIBRARY` | Central Academic Library & Reading Hall | 16:9 Aspect, 1600x900px, Reference Stacks & Desks | `PENDING_CLIENT_HANDOVER` | Architectural placeholder: *"Official Library Photography Pending Handover"* |
| **IMG-07** | `HOSTEL` | Residential Rooms (Separate Boys & Girls Blocks) | 4:3 Aspect, 1200x900px, Authentic Study Desks & Beds | `PENDING_CLIENT_HANDOVER` | Architectural placeholder: *"Official Hostel Photography Pending Handover"* |
| **IMG-08** | `HOSTEL` | Dining Hall & Student Nutrition Facility | 16:9 Aspect, 1600x900px, Clean Hygienic Mess Area | `PENDING_CLIENT_HANDOVER` | Architectural placeholder: *"Official Dining Hall Photography Pending Handover"* |
| **IMG-09** | `SPORTS` | Outdoor Athletic Grounds & Indoor Sports Arenas | 16:9 Aspect, 1600x900px, Basketball/Athletic Courts | `PENDING_CLIENT_HANDOVER` | Architectural placeholder: *"Official Sports Facilities Pending Handover"* |
| **IMG-10** | `FACULTY` | Core Department Faculty & Mentors | 1:1 Aspect, 600x600px, Formal Attire | `PENDING_CLIENT_HANDOVER` | Neutral academic avatar: *"Official Faculty Profile Pending Handover"* |
| **IMG-11** | `EVENT` | Seminars, Workshops, PU Board Lectures, Science Fairs | 16:9 Aspect, 1600x900px, Real Alliance Events | `PENDING_CLIENT_HANDOVER` | Clean documentary card: *"Official Event Record Pending Handover"* |
| **IMG-12** | `STUDENT ACTIVITY` | Daily Academic Routine, Doubts Clinics, Problem Solving | 16:9 Aspect, 1600x900px, Candid Campus Atmosphere | `PENDING_CLIENT_HANDOVER` | Documented placeholder: *"Official Student Life Photography Pending Handover"* |

---

### 4. Technical Image Optimization & Handover Standards
Upon client transmission of physical assets:
1. **Resolution & Geometry:** Standardized downsampled formats:
   - Hero Banners: `1920x1080px` (WebP / AVIF, max 250KB)
   - Cards & Facilities: `1200x800px` (WebP, max 120KB)
   - Avatars & Thumbnails: `400x400px` (WebP, max 45KB)
2. **Metadata & Accessibility:** Every verified image must be ingested with:
   - Dedicated `alt` description explicitly describing the verified facility.
   - Institutional copyright notice.
   - Descriptive non-generic filename (e.g., `nps-kalaburagi-physics-lab-01.webp`).

---
*Register locked under Phase 0B. Current official assets in repository: 0. All future assets subject to Level 1 / Level 2 verification before deployment.*
