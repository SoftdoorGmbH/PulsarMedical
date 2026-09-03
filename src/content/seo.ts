import {
  AUDIENCE_PAGES,
  isAudiencePageSlug,
  type AudiencePageSlug,
} from "@/content/audiencePages";
import type { AudienceFaqContent } from "@/content/audienceFaq";
import { BLOG_POSTS, getPostBySlug, type BlogPost } from "@/content/blog/blogs";
import { HOME_FAQ } from "@/content/homeFaq";
import {
  isOfferPageSlug,
  OFFER_PAGES,
  type OfferPageSlug,
} from "@/content/offerPages";
import type { PageSeoFields } from "@/content/seoFields";

export const SITE_NAME = "PULSAR Medical";
export const DEFAULT_OG_IMAGE = "/og-default.webp";
export const TITLE_SEPARATOR = " | ";

function readEnvSiteUrl(): string | undefined {
  const viteEnv = (import.meta as ImportMeta & { env?: { VITE_SITE_URL?: string } })
    .env?.VITE_SITE_URL;
  return typeof viteEnv === "string" && viteEnv.trim() ? viteEnv : undefined;
}

export const SITE_URL = (readEnvSiteUrl() ?? "https://pulsarmed.de").replace(
  /\/+$/,
  "",
);

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export type ResolvedArticleSeo = {
  title: string;
  description: string;
  publishedAt: string;
  image?: string;
};

export type ResolvedPageSeo = {
  path: string;
  title: string;
  description: string;
  ogImage: string;
  index: boolean;
  ogType: "website" | "article";
  breadcrumbs?: readonly BreadcrumbItem[];
  faq?: AudienceFaqContent;
  article?: ResolvedArticleSeo;
  includeWebsiteSchema?: boolean;
};

export const STATIC_INDEXABLE_PATHS = [
  "/",
  "/jobcenter",
  "/berufsgenossenschaften",
  "/rueckversicherer",
  "/medizinische-begutachtungen",
  "/psychologische-begutachtungen",
  "/arbeits-sozialmedizinische-begutachtungen",
  "/fachuebergreifende-begutachtungen",
  "/meldeversaeumnisse",
  "/karriere",
  "/ablauf",
  "/ueber-uns",
  "/kontakt",
  "/blog",
  "/impressum",
  "/datenschutz",
] as const;

const HOME_DESCRIPTION =
  "PULSAR Medical erstellt medizinische und psychologische Begutachtungen für Jobcenter, Berufsgenossenschaften und Rückversicherer – bundesweit und DSGVO-konform.";

const STATIC_PAGES: Record<string, PageSeoFields & { index?: boolean }> = {
  "/": {
    title: "Medizinische und psychologische Begutachtungen",
    description: HOME_DESCRIPTION,
  },
  "/karriere": {
    title: "Karriere",
    description:
      "Gestalten Sie mit PULSAR Medical Gesundheit, Teilhabe und gute Arbeit – offene Stellen in Beratung, Psychologie und medizinischer Expertise.",
  },
  "/ablauf": {
    title: "Ablauf eines Begutachtungsauftrags",
    description:
      "Von der Anfrage bis zur Ergebnisübermittlung: so organisiert PULSAR Medical medizinische und psychologische Begutachtungen – in sieben klaren Schritten.",
  },
  "/ueber-uns": {
    title: "Über uns",
    description:
      "PULSAR Medical verbindet medizinische und psychologische Expertise mit Verständnis für Menschen – bundesweit für institutionelle Auftraggeber.",
  },
  "/kontakt": {
    title: "Kontakt",
    description:
      "Sie planen einen Begutachtungsauftrag oder suchen einen Partner für wiederkehrende Projekte? Schreiben Sie PULSAR Medical – wir sind nur eine Nachricht entfernt.",
  },
  "/blog": {
    title: "Blog",
    description:
      "News, Einblicke und Fachbeiträge von PULSAR Medical zu Begutachtung, psychischer Gesundheit und Zusammenarbeit mit institutionellen Auftraggebern.",
  },
  "/impressum": {
    title: "Impressum",
    description:
      "Impressum der Pulsar Medical GmbH: Anschrift, Geschäftsführung, Kontakt und rechtliche Angaben gemäß TMG.",
  },
  "/datenschutz": {
    title: "Datenschutz",
    description:
      "Datenschutzhinweise der Pulsar Medical GmbH gemäß DSGVO – Informationen zur Verarbeitung personenbezogener Daten auf pulsarmed.de.",
  },
};

const NOT_FOUND_SEO: PageSeoFields = {
  title: "Seite nicht gefunden",
  description:
    "Die angeforderte Seite existiert nicht. Zurück zur Startseite oder zum Kontakt von PULSAR Medical.",
};

const STATIC_BREADCRUMB_LABELS: Record<string, string> = {
  "/karriere": "Karriere",
  "/ablauf": "Ablauf",
  "/ueber-uns": "Über uns",
  "/kontakt": "Kontakt",
  "/blog": "Blog",
  "/impressum": "Impressum",
  "/datenschutz": "Datenschutz",
};

export function normalizePath(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  const withSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const trimmed = withSlash.replace(/\/+$/, "");
  return trimmed || "/";
}

export function stripEmoji(text: string): string {
  return text
    .replace(/\p{Extended_Pictographic}/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function formatDocumentTitle(title: string): string {
  const clean = stripEmoji(title);
  if (clean === SITE_NAME || clean.includes(SITE_NAME)) return clean;
  return `${clean}${TITLE_SEPARATOR}${SITE_NAME}`;
}

export function toAbsoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_URL}${path}`;
}

export function getPrerenderPaths(): string[] {
  return [
    ...STATIC_INDEXABLE_PATHS,
    ...BLOG_POSTS.map((post) => `/blog/${post.slug}`),
  ];
}

export function getSitemapPaths(): string[] {
  return [
    ...STATIC_INDEXABLE_PATHS,
    ...BLOG_POSTS.filter((post) => Boolean(post.body)).map(
      (post) => `/blog/${post.slug}`,
    ),
  ];
}

function homeCrumbs(item: BreadcrumbItem): BreadcrumbItem[] {
  return [{ name: "Home", path: "/" }, item];
}

function fromFields(
  path: string,
  fields: PageSeoFields,
  extras: Partial<ResolvedPageSeo> = {},
): ResolvedPageSeo {
  return {
    path,
    title: fields.title,
    description: fields.description,
    ogImage: fields.ogImage ?? DEFAULT_OG_IMAGE,
    index: extras.index ?? true,
    ogType: extras.ogType ?? "website",
    breadcrumbs: extras.breadcrumbs,
    faq: extras.faq,
    article: extras.article,
    includeWebsiteSchema: extras.includeWebsiteSchema,
  };
}

function fromAudience(slug: AudiencePageSlug): ResolvedPageSeo {
  const page = AUDIENCE_PAGES[slug];
  const path = `/${slug}`;
  const fields = page.seo ?? {
    title: page.navLabel,
    description: page.hero?.paragraphs[0] ?? page.hero?.title ?? page.navLabel,
  };

  return fromFields(path, fields, {
    breadcrumbs: homeCrumbs({ name: page.navLabel, path }),
    faq: page.faq,
  });
}

function fromOffer(slug: OfferPageSlug): ResolvedPageSeo {
  const page = OFFER_PAGES[slug];
  const path = `/${slug}`;
  const fields = page.seo ?? {
    title: page.navLabel,
    description: page.hero?.paragraphs[0] ?? page.hero?.title ?? page.navLabel,
  };

  return fromFields(path, fields, {
    breadcrumbs: homeCrumbs({ name: page.navLabel, path }),
    faq: page.faq,
  });
}

function fromBlog(post: BlogPost): ResolvedPageSeo {
  const path = `/blog/${post.slug}`;
  const title = post.metaTitle ?? stripEmoji(post.title);
  const description = post.metaDescription ?? post.excerpt;
  const hasBody = Boolean(post.body);

  return fromFields(
    path,
    {
      title,
      description,
      ogImage: post.imageUrl ?? DEFAULT_OG_IMAGE,
    },
    {
      index: hasBody,
      ogType: hasBody ? "article" : "website",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: title, path },
      ],
      article: hasBody
        ? {
            title,
            description,
            publishedAt: post.publishedAt,
            image: post.imageUrl,
          }
        : undefined,
    },
  );
}

export function resolvePageSeo(pathname: string): ResolvedPageSeo {
  const path = normalizePath(pathname);

  if (path === "/") {
    return fromFields("/", STATIC_PAGES["/"]!, {
      faq: HOME_FAQ,
      includeWebsiteSchema: true,
    });
  }

  const staticPage = STATIC_PAGES[path];
  if (staticPage) {
    const label = STATIC_BREADCRUMB_LABELS[path];
    return fromFields(path, staticPage, {
      index: staticPage.index ?? true,
      breadcrumbs: label ? homeCrumbs({ name: label, path }) : undefined,
    });
  }

  const firstSegment = path.replace(/^\/+/, "").split("/")[0] ?? "";

  if (isAudiencePageSlug(firstSegment) && path === `/${firstSegment}`) {
    return fromAudience(firstSegment);
  }

  if (isOfferPageSlug(firstSegment) && path === `/${firstSegment}`) {
    return fromOffer(firstSegment);
  }

  if (path.startsWith("/blog/")) {
    const slug = path.slice("/blog/".length);
    const post = slug.includes("/") ? undefined : getPostBySlug(slug);
    if (post) return fromBlog(post);
  }

  return fromFields(path, NOT_FOUND_SEO, { index: false });
}
