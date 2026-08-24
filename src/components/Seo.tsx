import { useEffect } from "react";
import { buildJsonLdGraph } from "@/lib/jsonLd";
import {
  formatDocumentTitle,
  SITE_NAME,
  toAbsoluteUrl,
  type ResolvedPageSeo,
} from "@/content/seo";

type SeoProps = {
  page: ResolvedPageSeo;
};

function upsertMeta(
  selector: string,
  attributes: Record<string, string>,
): void {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.append(element);
  }
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }
}

function syncClientHead(page: ResolvedPageSeo): void {
  const title = formatDocumentTitle(page.title);
  const url = toAbsoluteUrl(page.path);
  const image = toAbsoluteUrl(page.ogImage);
  const robots = page.index ? "index, follow" : "noindex, nofollow";

  document.title = title;
  document.querySelectorAll("title").forEach((node, index) => {
    if (index === 0) node.textContent = title;
    else node.remove();
  });

  upsertMeta('meta[name="description"]', {
    name: "description",
    content: page.description,
  });
  document.querySelectorAll('meta[name="description"]').forEach((node, index) => {
    if (index > 0) node.remove();
  });

  upsertMeta('meta[name="robots"]', { name: "robots", content: robots });
  upsertMeta('meta[property="og:title"]', {
    property: "og:title",
    content: title,
  });
  upsertMeta('meta[property="og:description"]', {
    property: "og:description",
    content: page.description,
  });
  upsertMeta('meta[property="og:url"]', { property: "og:url", content: url });
  upsertMeta('meta[property="og:image"]', {
    property: "og:image",
    content: image,
  });
  upsertMeta('meta[name="twitter:title"]', {
    name: "twitter:title",
    content: title,
  });
  upsertMeta('meta[name="twitter:description"]', {
    name: "twitter:description",
    content: page.description,
  });

  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.append(canonical);
  }
  canonical.setAttribute("href", url);
}

export function Seo({ page }: SeoProps) {
  const title = formatDocumentTitle(page.title);
  const url = toAbsoluteUrl(page.path);
  const image = toAbsoluteUrl(page.ogImage);
  const robots = page.index ? "index, follow" : "noindex, nofollow";
  const jsonLd = buildJsonLdGraph(page);

  useEffect(() => {
    syncClientHead(page);
  }, [page]);

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={page.description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={page.ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={page.description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={page.description} />
      <meta name="twitter:image" content={image} />

      {jsonLd.map((node, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }}
        />
      ))}
    </>
  );
}
