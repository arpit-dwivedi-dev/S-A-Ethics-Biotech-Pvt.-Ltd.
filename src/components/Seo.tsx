import { useEffect } from 'react';

export const SITE_URL = 'https://www.saethicsbio.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/hero-collage.jpg`;

type BreadcrumbItem = { name: string; path: string };

type SeoProps = {
  title: string;
  description: string;
  keywords: string;
  path: string;
  breadcrumbs?: BreadcrumbItem[];
  jsonLd?: object | object[];
};

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

// Updates the tags already present in the static index.html shell in place, rather than
// inserting new ones — avoids duplicate <title>/meta/canonical tags on client-side route changes.
export default function Seo({ title, description, keywords, path, breadcrumbs, jsonLd }: SeoProps) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    document.title = title;

    upsertMeta('name', 'description', description);
    upsertMeta('name', 'keywords', keywords);
    upsertCanonical(url);

    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', DEFAULT_OG_IMAGE);

    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', DEFAULT_OG_IMAGE);

    const schemas: object[] = [];
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          ...breadcrumbs.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 2,
            name: crumb.name,
            item: `${SITE_URL}${crumb.path}`,
          })),
        ],
      });
    }
    if (jsonLd) {
      schemas.push(...(Array.isArray(jsonLd) ? jsonLd : [jsonLd]));
    }

    const scriptTags = schemas.map((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
      return script;
    });

    return () => {
      scriptTags.forEach((script) => script.remove());
    };
    // route-level schemas are static per page, only re-run when the page identity changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, keywords, path]);

  return null;
}
