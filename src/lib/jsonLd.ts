import type {
  AudienceFaqContent,
  AudienceFaqItem,
} from "@/content/audienceFaq";
import {
  SITE_NAME,
  SITE_URL,
  toAbsoluteUrl,
  type BreadcrumbItem,
  type ResolvedArticleSeo,
  type ResolvedPageSeo,
} from "@/content/seo";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

function toParagraphs(value: string | readonly string[] | undefined): string[] {
  if (!value) return [];
  return Array.isArray(value) ? [...value] : [value as string];
}

export function flattenFaqAnswer(item: AudienceFaqItem): string {
  return [
    ...toParagraphs(item.answer),
    ...(item.bullets ?? []),
    ...toParagraphs(item.closing),
  ]
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORGANIZATION_ID,
    name: "Pulsar Medical GmbH",
    alternateName: SITE_NAME,
    url: SITE_URL,
    logo: toAbsoluteUrl("/Pulsar_Logo.webp"),
    email: "kontakt@pulsarmed.de",
    telephone: "+49-89-215420630",
    address: {
      "@type": "PostalAddress",
      streetAddress: "L 13, 3-4",
      postalCode: "68161",
      addressLocality: "Mannheim",
      addressCountry: "DE",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "de-DE",
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function faqPageJsonLd(faq: AudienceFaqContent) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: flattenFaqAnswer(item),
      },
    })),
  };
}

export function breadcrumbJsonLd(items: readonly BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
  };
}

export function articleJsonLd(path: string, article: ResolvedArticleSeo) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    inLanguage: "de-DE",
    mainEntityOfPage: toAbsoluteUrl(path),
    image: toAbsoluteUrl(article.image ?? "/og-default.webp"),
    publisher: { "@id": ORGANIZATION_ID },
    author: { "@id": ORGANIZATION_ID },
  };
}

export function buildJsonLdGraph(page: ResolvedPageSeo): object[] {
  const nodes: object[] = [organizationJsonLd()];

  if (page.includeWebsiteSchema) {
    nodes.push(websiteJsonLd());
  }

  if (page.faq && page.faq.items.length > 0) {
    nodes.push(faqPageJsonLd(page.faq));
  }

  if (page.breadcrumbs && page.breadcrumbs.length > 0) {
    nodes.push(breadcrumbJsonLd(page.breadcrumbs));
  }

  if (page.article) {
    nodes.push(articleJsonLd(page.path, page.article));
  }

  return nodes;
}
