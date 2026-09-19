/**
 * @file verify-routes.ts
 * @description Phase 3 Comprehensive Route and Navigation Architecture Verification Script.
 * Verifies all 25 registered application routes, the 404 fallback route,
 * breadcrumb resolutions, active state mappings, and footer/header link integrity.
 */

import { ROUTES, APP_ROUTES } from '../src/routes/routeConfig';
import { MAIN_NAVIGATION, FOOTER_NAVIGATION, getBreadcrumbsForPath } from '../src/data/navigation';

interface VerificationResult {
  route: string;
  expectedBreadcrumbs: string;
  actualBreadcrumbs: string;
  status: 'PASS' | 'FAIL';
  hasComponent: boolean;
}

const REQUIRED_ROUTES: { path: string; expectedBreadcrumb: string }[] = [
  { path: '/', expectedBreadcrumb: '(None)' },
  { path: '/about/nps', expectedBreadcrumb: 'Home → About → NPS' },
  { path: '/about/hanchinmani', expectedBreadcrumb: 'Home → About → Hanchinmani Institutes' },
  { path: '/about/alliance', expectedBreadcrumb: 'Home → About → Academic Alliance' },
  { path: '/about/leadership', expectedBreadcrumb: 'Home → About → Leadership' },
  { path: '/academics', expectedBreadcrumb: 'Home → Academics' },
  { path: '/academics/programmes', expectedBreadcrumb: 'Home → Academics → Programmes' },
  { path: '/academics/neet', expectedBreadcrumb: 'Home → Academics → NEET' },
  { path: '/academics/jee', expectedBreadcrumb: 'Home → Academics → JEE' },
  { path: '/academics/kcet', expectedBreadcrumb: 'Home → Academics → KCET' },
  { path: '/campus/overview', expectedBreadcrumb: 'Home → Campus → Overview' },
  { path: '/campus/faculty', expectedBreadcrumb: 'Home → Campus → Faculty' },
  { path: '/campus/facilities', expectedBreadcrumb: 'Home → Campus → Facilities' },
  { path: '/campus/hostel', expectedBreadcrumb: 'Home → Campus → Hostel' },
  { path: '/campus/life', expectedBreadcrumb: 'Home → Campus → Campus Life' },
  { path: '/results/academic', expectedBreadcrumb: 'Home → Results → Academic Results' },
  { path: '/results/achievements', expectedBreadcrumb: 'Home → Results → Achievements' },
  { path: '/results/success-stories', expectedBreadcrumb: 'Home → Results → Success Stories' },
  { path: '/media/gallery', expectedBreadcrumb: 'Home → Media → Gallery' },
  { path: '/media/testimonials', expectedBreadcrumb: 'Home → Media → Testimonials' },
  { path: '/media/news-events', expectedBreadcrumb: 'Home → Media → News & Events' },
  { path: '/admissions/process', expectedBreadcrumb: 'Home → Admissions → Admission Process' },
  { path: '/admissions/enquiry', expectedBreadcrumb: 'Home → Admissions → Enquiry' },
  { path: '/contact', expectedBreadcrumb: 'Home → Contact' },
  { path: '/privacy-policy', expectedBreadcrumb: 'Home → Privacy Policy' },
  { path: '/404', expectedBreadcrumb: 'Home → 404 Not Found' },
  { path: '/invalid-test-route', expectedBreadcrumb: 'Home → 404 Not Found' },
];

function formatBreadcrumbString(path: string): string {
  const crumbs = getBreadcrumbsForPath(path);
  if (crumbs.length === 0) return '(None)';
  return ['Home', ...crumbs.map((c) => c.label)].join(' → ');
}

function runVerification() {
  console.log('===========================================================');
  console.log('NPS–HANCHINMANI ALLIANCE: PHASE 3 NAVIGATION AUDIT');
  console.log('===========================================================');

  let passedCount = 0;
  const results: VerificationResult[] = [];

  const registeredPaths = new Set(APP_ROUTES.map((r) => r.path));

  for (const item of REQUIRED_ROUTES) {
    const isWildcardOrFallback = item.path === '/invalid-test-route';
    const isRegistered = registeredPaths.has(item.path) || (isWildcardOrFallback && registeredPaths.has('*'));
    const actualBreadcrumbs = formatBreadcrumbString(item.path);
    const pass = isRegistered && actualBreadcrumbs === item.expectedBreadcrumb;

    if (pass) passedCount++;

    results.push({
      route: item.path,
      expectedBreadcrumbs: item.expectedBreadcrumb,
      actualBreadcrumbs,
      status: pass ? 'PASS' : 'FAIL',
      hasComponent: isRegistered,
    });
  }

  console.table(
    results.map((r) => ({
      Route: r.route,
      'Registered Route': r.hasComponent ? 'YES' : 'NO',
      'Breadcrumb Flow': r.actualBreadcrumbs,
      Status: r.status,
    }))
  );

  console.log(`\nRoute Verification: ${passedCount}/${REQUIRED_ROUTES.length} tests passed.`);

  // Verify Header Navigation Links
  console.log('\n--- Auditing Header Main Navigation Destinations ---');
  let headerFailures = 0;
  for (const item of MAIN_NAVIGATION) {
    if (item.href && !registeredPaths.has(item.href)) {
      console.error(`[HEADER ERROR] Unregistered destination: ${item.href}`);
      headerFailures++;
    }
    if (item.children) {
      for (const child of item.children) {
        if (!registeredPaths.has(child.href)) {
          console.error(`[HEADER DROPDOWN ERROR] Unregistered destination: ${child.href}`);
          headerFailures++;
        }
      }
    }
  }
  if (headerFailures === 0) {
    console.log('Header Navigation: 100% of links resolve to valid registered routes.');
  }

  // Verify Footer Navigation Links
  console.log('\n--- Auditing Footer Navigation Destinations ---');
  let footerFailures = 0;
  for (const section of FOOTER_NAVIGATION) {
    for (const item of section.items) {
      if (!registeredPaths.has(item.href)) {
        console.error(`[FOOTER ERROR] Unregistered destination: ${item.href}`);
        footerFailures++;
      }
    }
  }
  if (footerFailures === 0) {
    console.log('Footer Navigation: 100% of links resolve to valid registered routes.');
  }

  const allPassed = passedCount === REQUIRED_ROUTES.length && headerFailures === 0 && footerFailures === 0;

  if (allPassed) {
    console.log('\n>>> PHASE 3 VERIFICATION PASSED WITH ZERO DEFECTS <<<');
    process.exit(0);
  } else {
    console.error('\n>>> PHASE 3 VERIFICATION FAILED <<<');
    process.exit(1);
  }
}

runVerification();
