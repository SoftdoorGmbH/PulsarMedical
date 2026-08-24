import { createServer, type IncomingMessage, type ServerResponse } from "node:http";
import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import {
  getPrerenderPaths,
  getSitemapPaths,
  SITE_URL,
} from "../src/content/seo.ts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const NOT_FOUND_PATH = "/__prerender-404__";

const MIME_TYPES: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

async function fileExists(filePath: string): Promise<boolean> {
  try {
    const info = await stat(filePath);
    return info.isFile();
  } catch {
    return false;
  }
}

async function resolveAssetFile(urlPath: string): Promise<string | null> {
  const decoded = decodeURIComponent(urlPath.split("?")[0] ?? "/");
  const safePath = path.normalize(decoded).replace(/^(\.\.[/\\])+/, "");
  const ext = path.extname(safePath);
  if (!ext) return null;

  const requested = path.join(distDir, safePath);
  if (await fileExists(requested)) return requested;
  return null;
}

function startStaticServer(
  spaShell: Buffer,
): Promise<{ port: number; close: () => Promise<void> }> {
  const server = createServer(async (req: IncomingMessage, res: ServerResponse) => {
    try {
      const urlPath = req.url ?? "/";
      const filePath = await resolveAssetFile(urlPath);

      if (filePath) {
        const ext = path.extname(filePath).toLowerCase();
        const body = await readFile(filePath);
        res.writeHead(200, {
          "Content-Type": MIME_TYPES[ext] ?? "application/octet-stream",
          "Cache-Control": "no-store",
        });
        res.end(body);
        return;
      }

      res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store",
      });
      res.end(spaShell);
    } catch {
      res.writeHead(500);
      res.end("prerender server error");
    }
  });

  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      if (!address || typeof address === "string") {
        reject(new Error("Could not bind prerender server"));
        return;
      }
      resolve({
        port: address.port,
        close: () =>
          new Promise((closeResolve, closeReject) => {
            server.close((error) => (error ? closeReject(error) : closeResolve()));
          }),
      });
    });
  });
}

function stripDefaultHeadTags(html: string): string {
  return html
    .replace(/<title>[\s\S]*?<\/title>/, "")
    .replace(/<meta\s+name="description"[^>]*>/i, "");
}

function keepLastMatch(html: string, pattern: RegExp): string {
  const global = new RegExp(pattern.source, pattern.flags.includes("g") ? pattern.flags : `${pattern.flags}g`);
  const matches = html.match(global);
  if (!matches || matches.length < 2) return html;
  let seen = 0;
  return html.replace(global, (tag) => {
    seen += 1;
    return seen === matches.length ? tag : "";
  });
}

function sanitizeHtml(html: string): string {
  const patterns = [
    /<title>[\s\S]*?<\/title>/gi,
    /<meta\s+name="description"[^>]*>/gi,
    /<meta\s+name="robots"[^>]*>/gi,
    /<link\s+rel="canonical"[^>]*>/gi,
    /<meta\s+property="og:type"[^>]*>/gi,
    /<meta\s+property="og:site_name"[^>]*>/gi,
    /<meta\s+property="og:locale"[^>]*>/gi,
    /<meta\s+property="og:title"[^>]*>/gi,
    /<meta\s+property="og:description"[^>]*>/gi,
    /<meta\s+property="og:url"[^>]*>/gi,
    /<meta\s+property="og:image"[^>]*>/gi,
    /<meta\s+property="og:image:width"[^>]*>/gi,
    /<meta\s+property="og:image:height"[^>]*>/gi,
    /<meta\s+name="twitter:card"[^>]*>/gi,
    /<meta\s+name="twitter:title"[^>]*>/gi,
    /<meta\s+name="twitter:description"[^>]*>/gi,
    /<meta\s+name="twitter:image"[^>]*>/gi,
  ];

  const withoutDupes = patterns.reduce(
    (result, pattern) => keepLastMatch(result, pattern),
    html,
  );

  const seenJsonLd = new Set<string>();
  return withoutDupes.replace(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
    (full, json: string) => {
      if (seenJsonLd.has(json)) return "";
      seenJsonLd.add(json);
      return full;
    },
  );
}

function outputFileForPath(routePath: string): string {
  if (routePath === "/") return path.join(distDir, "index.html");
  return path.join(distDir, routePath.replace(/^\/+/, ""), "index.html");
}

function buildSitemapXml(paths: readonly string[]): string {
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

async function writeHtml(filePath: string, html: string): Promise<void> {
  await mkdir(path.dirname(filePath), { recursive: true });
  const cleaned = sanitizeHtml(html);
  const withDoctype = cleaned.startsWith("<!DOCTYPE")
    ? cleaned
    : `<!DOCTYPE html>${cleaned}`;
  await writeFile(filePath, withDoctype, "utf8");
}

async function dismissCookieBanner(page: import("playwright").Page) {
  const reject = page.getByRole("button", { name: /Alle ablehnen|Reject all/i });
  if (await reject.isVisible().catch(() => false)) {
    await reject.click();
    await page.locator('[role="dialog"]').waitFor({ state: "hidden" }).catch(() => undefined);
  }
}

async function main() {
  const spaShell = Buffer.from(
    stripDefaultHeadTags(
      (await readFile(path.join(distDir, "index.html"))).toString("utf8"),
    ),
  );
  const server = await startStaticServer(spaShell);
  const origin = `http://127.0.0.1:${server.port}`;
  const browser = await chromium.launch();
  const context = await browser.newContext({ locale: "de-DE" });
  const page = await context.newPage();

  try {
    const routes = getPrerenderPaths();

    for (const routePath of routes) {
      await page.goto(`${origin}${routePath}`, { waitUntil: "networkidle" });
      await page.waitForSelector('meta[property="og:url"]', { state: "attached" });
      await dismissCookieBanner(page);
      const html = await page.content();
      await writeHtml(outputFileForPath(routePath), html);
      console.log(`prerendered ${routePath}`);
    }

    await page.goto(`${origin}${NOT_FOUND_PATH}`, { waitUntil: "networkidle" });
    await page.waitForSelector('meta[property="og:url"]', { state: "attached" });
    await dismissCookieBanner(page);
    const notFoundHtml = (await page.content()).replaceAll(
      `${SITE_URL}${NOT_FOUND_PATH}`,
      `${SITE_URL}/404.html`,
    );
    await writeHtml(path.join(distDir, "404.html"), notFoundHtml);
    console.log("prerendered /404.html");

    const sitemap = buildSitemapXml(getSitemapPaths());
    await writeFile(path.join(distDir, "sitemap.xml"), sitemap, "utf8");
    console.log("wrote dist/sitemap.xml");
  } finally {
    await browser.close();
    await server.close();
  }
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
