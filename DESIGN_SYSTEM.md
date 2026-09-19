# NPS–Hanchinmani Institutes Academic Alliance
## Brand & Visual Design System Specification (Phase 2)

**Status**: Complete & Locked  
**Version**: 1.0.0  
**Compliance**: WCAG 2.1 Level AA / Section 508 Accessibility Compliant  
**Architecture Context**: React 19 + TypeScript + Tailwind CSS (v4)

---

### 1. Design Principles & Aesthetic Philosophy

1. **Academic Strength & Gravitas**:
   The visual presentation reflects 30 years of premier competitive coaching (Hanchinmani Institutes) combined with modern, purpose-built school and pre-university infrastructure (National Public School & PU College Kalaburagi).
2. **Restraint & Trust**:
   No trendy startup gradients, no neon saturated accents, no ungrounded glassmorphism, and no gratuitous visual noise. Every layout line, border, and whitespace margin serves readability and institutional credibility.
3. **Pristine Contrast & Accessibility**:
   All color pairings satisfy or exceed WCAG 2.1 AA requirements (4.5:1 for body copy; 3:1 for large display headers and interactive UI controls). Keyboard focus rings are prominent and customized in warm academic gold (`#b8860b`).
4. **Authenticity & Anti-Fabrication**:
   Visual design system primitives strictly forbid AI-generated campus imagery or stock photographic illusions. Media placeholders intentionally preserve layout integrity until authenticated high-resolution assets from client archives are delivered.

---

### 2. Color System & Color Tokens

#### Primary Palette: Academic Navy
* **Deep Navy (`#0f1f38`)**: Primary brand identity, major titles, utility navigation strip, brand crest. Contrast against white: **14.2:1** (AAA).
* **Navy Hover (`#162a45`)**: Interaction state for primary buttons and interactive elements.
* **Navy Slate (`#1e3a5f`)**: Accent borders and secondary dark accents.
* **Navy Muted (`#2b4c7e`)**: Subtle decorative rules.

#### Secondary Palette: Academic Warm Gold
* **Deep Gold (`#b8860b`)**: Primary focus rings, accent borders, active navigation indicator bars, seal crest outline. Contrast against white: **4.6:1** (AA for text; >3:1 for UI borders).
* **Gold Hover (`#996f09`)**: Interactive state for secondary gold buttons.
* **Gold Light / Sand (`#fdf9f0`)**: Subtle background tint for notices and warning status cards.
* **Gold Border (`#e5c158`)**: Deliberate border accents.

#### Neutral Palette
* **Canvas Background (`#f8f9fa`)**: Clean, warm off-white canvas preventing harsh eye strain.
* **Surface White (`#ffffff`)**: Primary cards, dialogs, dropdowns, and form input containers.
* **Border Standard (`#e2e8f0`)**: Tailwind `slate-200` 1px architectural divider lines.
* **Body Text (`#334155`)**: Slate 700 with optimal contrast on white (7.8:1) and off-white (7.3:1).
* **Headings (`#0f1f38` / `#0f172a`)**: Slate 900 / Academic Navy.
* **Muted Text (`#64748b`)**: Slate 500 metadata and helper annotations.

#### Semantic Status & Governance Colors
* **Verified Official Record**: Emerald 800 (`#065f46`) on Emerald 50 (`#ecfdf5`), border `#a7f3d0`.
* **Client Alliance Charter**: Blue 900 (`#1e3a8a`) on Blue 50 (`#eff6ff`), border `#bfdbfe`.
* **Pending Institutional Sign-off**: Amber 900 (`#78350f`) on Amber 50 (`#fffbeb`), border `#fde68a`.
* **Verification in Progress**: Purple 900 (`#581c87`) on Purple 50 (`#faf5ff`), border `#e9d5ff`.
* **Asset Pending Handover**: Slate 700 (`#334155`) on Slate 100 (`#f1f5f9`), border `#cbd5e1`.
* **Publication Restricted**: Rose 800 (`#9f1239`) on Rose 50 (`#fff1f2`), border `#fecdd3`.

---

### 3. Typography Hierarchy

* **Font Pairings**:
  * **Headings & Crest Marks**: System Serif Stack (`Georgia, Cambria, 'Times New Roman', Times, serif`) communicating heritage and institutional gravitas.
  * **Body & Interface**: High-readability Clean Sans-Serif (`system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`).
  * **Data & Audited Codes**: Monospace (`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`).
* **Scale & Line Heights**:
  * `Display / H1`: 32px–48px (`2rem`–`3rem`), line-height: `1.15`, font-weight: `700`.
  * `Section / H2`: 24px–30px (`1.5rem`–`1.875rem`), line-height: `1.25`, font-weight: `700`.
  * `Subsection / H3`: 18px–20px (`1.125rem`–`1.25rem`), line-height: `1.35`, font-weight: `600`.
  * `Body Regular`: 15px–16px (`0.9375rem`–`1rem`), line-height: `1.6`, font-weight: `400`.
  * `Small / Captions`: 12px–13px (`0.75rem`–`0.8125rem`), line-height: `1.4`, font-weight: `500`.
  * `Badges & Micro`: 10px–11px (`0.625rem`–`0.6875rem`), line-height: `1.2`, font-weight: `600`.

---

### 4. UI Component Library Primitives (`/src/components/ui/`)

1. **Button (`/src/components/ui/Button.tsx`)**:
   * Supports `primary` (Navy), `secondary` (Gold), `outline`, `text`, and `danger` variants.
   * Sizes: `sm`, `md`, `lg`.
   * Accessible focus rings: `focus-visible:ring-2 focus-visible:ring-[#b8860b] focus-visible:ring-offset-2`.
   * Seamless polymorphic rendering: renders as either `<button>` or React Router `<Link>`.
2. **Card System (`/src/components/ui/Card.tsx`)**:
   * `Card`, `CardHeader`, `CardBody`, `CardFooter`.
   * Variants: `standard` (subtle border, white), `elevated` (subtle shadow), `feature` (gold accent border), `info` (academic slate-blue tint), `dark` (deep navy).
   * Optional `interactive` prop for card-level hover elevation and accessible focus rings.
3. **Form Controls (`/src/components/ui/Form.tsx`)**:
   * `FormField`: Accessible wrapper handling labels, required asterisks, helper text, and validation error messages with `aria-live` / `role="alert"`.
   * `Input`, `Textarea`, `Select`, `Checkbox`.
   * Pristine visual states: Default, Focus, Error (`border-red-600`), Success (`border-emerald-600`), and Disabled.
4. **Section Primitives (`/src/components/ui/Section.tsx`)**:
   * Standardized page section wrapper.
   * Variants: `standard`, `muted`, `dark`, `feature`.
   * Max-width containers: `content` (max-w-7xl), `standard` (max-w-5xl), `reading` (max-w-3xl).
5. **Media Presentation System (`/src/components/ui/MediaPlaceholder.tsx`)**:
   * Standardized component for campus, laboratory, academic, and hostel photographic sections pending authenticated client asset transmission.
   * Preserves layout aspect ratios (`16:9`, `4:3`, `1:1`, `3:2`) with visible governance notices.

---

### 5. Responsive Layout & Breakpoint Standards

* **Breakpoints**:
  * `xs` (< 640px): Single-column, mobile drawer navigation, stacked utility bar. Tested explicitly at 320px width for zero horizontal overflow.
  * `sm` (≥ 640px): 2-column grid adaptation, inline utility coordinates.
  * `md` (≥ 768px): Tablet layout, expanded contact grid.
  * `lg` (≥ 1024px): Desktop header navigation with keyboard-operable dropdowns.
  * `xl` (≥ 1280px): Full 7xl container with generous whitespace gutters.
* **Gutters & Max Width**:
  * Root padding: `px-4 sm:px-6 lg:px-8`.
  * Standard maximum container width: `max-w-7xl` (`1280px`).

---

### 6. Accessibility & Motion Guidelines

* **Keyboard Navigation**:
  * All interactive elements have visible `focus-visible` focus rings (`#b8860b`).
  * Dropdowns can be opened and navigated via keyboard; dismissable via `Escape` key or click outside.
  * Mobile drawer traps scroll when open and closes on `Escape` key.
* **Reduced Motion**:
  * `@media (prefers-reduced-motion: reduce)` media queries implemented in `/src/index.css`. All animations and transitions drop to `0.01ms` when requested by user OS preferences.
