/**
 * @file SEOHead.tsx
 * @description Dynamic SEO metadata manager updating document title, meta descriptions,
 * and OpenGraph headers per route.
 */

import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
}

export function SEOHead({ title, description, canonicalPath }: SEOHeadProps) {
  useEffect(() => {
    const fullTitle = `${title} | NPS–Hanchinmani Academic Alliance`;
    document.title = fullTitle;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update OG Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', fullTitle);

    // Update OG Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', description);

    // Update Canonical
    if (canonicalPath) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', `${window.location.origin}${canonicalPath}`);
    }
  }, [title, description, canonicalPath]);

  return null;
}
