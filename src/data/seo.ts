import { appName, appNameShort, appStoreUrl } from './brand';

/** Must match `site` in astro.config.mjs */
export const siteUrl = 'https://passportphotofit.lixul.com';

export const defaultDescription = `Create passport, visa, and ID photos on your phone with ${appNameShort}. On-device processing, offline support, official document specs, and no account required.`;

export const homeTitle = `${appName} | Passport & Visa Photo App`;

export const ogImagePath = '/og.svg';

export const organization = {
  name: appNameShort,
  legalName: appName,
  url: siteUrl,
  email: 'support@passportphotofit.lixul.com',
} as const;

export function absoluteUrl(path: string, site: URL | string = siteUrl): string {
  return new URL(path, site).href;
}

export function websiteJsonLd(site: URL | string = siteUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: appName,
    alternateName: appNameShort,
    url: absoluteUrl('/', site),
    description: defaultDescription,
    inLanguage: 'en',
  };
}

export function softwareApplicationJsonLd(site: URL | string = siteUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: appName,
    alternateName: appNameShort,
    applicationCategory: 'PhotographyApplication',
    operatingSystem: 'iOS',
    downloadUrl: appStoreUrl,
    installUrl: appStoreUrl,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: defaultDescription,
    url: absoluteUrl('/', site),
  };
}

export function webPageJsonLd(
  name: string,
  description: string,
  pathname: string,
  site: URL | string = siteUrl,
) {
  const url = absoluteUrl(pathname, site);
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: appName,
      url: absoluteUrl('/', site),
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: absoluteUrl('/', site),
        },
        {
          '@type': 'ListItem',
          position: 2,
          name,
          item: url,
        },
      ],
    },
  };
}

export function faqPageJsonLd(
  faqs: ReadonlyArray<{ question: string; answer: string }>,
  site: URL | string = siteUrl,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
    url: absoluteUrl('/support/', site),
  };
}

export function jsonLdScript(data: Record<string, unknown> | Record<string, unknown>[]) {
  return JSON.stringify(data);
}
