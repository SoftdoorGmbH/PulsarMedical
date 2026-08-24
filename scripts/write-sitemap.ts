import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getSitemapPaths, SITE_URL } from "../src/content/seo.ts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

export function buildSitemapXml(paths: readonly string[]): string {
  const urls = paths
    .map((routePath) => {
      const loc = routePath === "/" ? `${SITE_URL}/` : `${SITE_URL}${routePath}`;
      return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>weekly</changefreq>\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export async function writeSitemap(
  distDir = path.join(root, "dist"),
): Promise<void> {
  const sitemap = buildSitemapXml(getSitemapPaths());
  await writeFile(path.join(distDir, "sitemap.xml"), sitemap, "utf8");
  console.log("wrote dist/sitemap.xml");
}

const isDirectRun = process.argv[1]?.includes("write-sitemap");
if (isDirectRun) {
  writeSitemap().catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  });
}
