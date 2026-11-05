import type { APIRoute } from 'astro';

/** Paths included in the sitemap (directory build format). */
const paths = ['', 'privacy/', 'terms/', 'support/'] as const;

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://passportphotofit.lixul.com/');
  const urls = paths
    .map((path) => {
      const loc = new URL(path, base).href;
      const priority = path === '' ? '1.0' : '0.7';
      return `<url><loc>${loc}</loc><changefreq>monthly</changefreq><priority>${priority}</priority></url>`;
    })
    .join('');

  const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
