import { mkdir, readdir, readFile, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");

const PHOTO_MAX_WIDTH = 1280;
const TEAM_MAX_WIDTH = 800;
const LOGO_MAX_WIDTH = 400;
const BRAND_LOGO_MAX_WIDTH = 240;
const WEBP_QUALITY = 80;

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const RASTER_EXT = new Set([".jpg", ".jpeg", ".png"]);

/** Keep the favicon PNG and the generated OG image as-is. */
const SKIP = new Set(["Pulsar_Logo.png", "og-default.webp"]);

function toWebpPath(relativePath) {
  return relativePath.replace(/\.(jpe?g|png)$/i, ".webp");
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function maxWidthFor(relativePath) {
  if (relativePath === "Pulsar_Logo.webp" || relativePath === "Pulsar_Logo.png") {
    return BRAND_LOGO_MAX_WIDTH;
  }
  if (relativePath.startsWith("logos/")) return LOGO_MAX_WIDTH;
  if (relativePath.startsWith("team/")) return TEAM_MAX_WIDTH;
  return PHOTO_MAX_WIDTH;
}

async function listPublicImages(dir = publicDir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  const images = [];

  for (const dirent of dirents) {
    const fullPath = path.join(dir, dirent.name);

    if (dirent.isDirectory()) {
      images.push(...(await listPublicImages(fullPath)));
      continue;
    }

    if (!dirent.isFile()) continue;

    const ext = path.extname(dirent.name).toLowerCase();
    if (!IMAGE_EXT.has(ext)) continue;

    images.push(path.relative(publicDir, fullPath).split(path.sep).join("/"));
  }

  if (dir === publicDir) {
    images.sort((a, b) => a.localeCompare(b));
  }

  return images;
}

async function writeWebp(input, outRelative, maxWidth) {
  const outPath = path.join(publicDir, outRelative);
  await mkdir(path.dirname(outPath), { recursive: true });

  const pipeline = sharp(input, { failOn: "none" }).rotate();
  const meta = await pipeline.metadata();
  const width = meta.width ?? maxWidth;

  if (width > maxWidth) {
    pipeline.resize({ width: maxWidth, withoutEnlargement: true });
  }

  const buffer = await pipeline.webp({ quality: WEBP_QUALITY }).toBuffer();
  await writeFile(outPath, buffer);
  return { outPath, bytes: buffer.length };
}

async function convertRaster(relativePath) {
  const srcPath = path.join(publicDir, relativePath);
  const outRelative = toWebpPath(relativePath);
  const input = await readFile(srcPath);
  const { bytes } = await writeWebp(
    input,
    outRelative,
    maxWidthFor(outRelative),
  );

  if (srcPath !== path.join(publicDir, outRelative)) {
    await unlink(srcPath);
  }

  console.log(
    `  ${relativePath}  ${formatBytes(input.length)} → /${outRelative}  ${formatBytes(bytes)}`,
  );

  return outRelative;
}

async function recompressWebp(relativePath) {
  const srcPath = path.join(publicDir, relativePath);
  const input = await readFile(srcPath);
  const { bytes } = await writeWebp(
    input,
    relativePath,
    maxWidthFor(relativePath),
  );

  if (bytes < input.length) {
    console.log(
      `  ${relativePath}  ${formatBytes(input.length)} → ${formatBytes(bytes)}`,
    );
    return;
  }

  await writeFile(srcPath, input);
  console.log(
    `  ${relativePath}  kept ${formatBytes(input.length)} (recompress was ${formatBytes(bytes)})`,
  );
}

async function main() {
  const images = (await listPublicImages()).filter(
    (relativePath) => !SKIP.has(relativePath),
  );
  const rasters = images.filter((relativePath) =>
    RASTER_EXT.has(path.extname(relativePath).toLowerCase()),
  );
  const webps = images.filter(
    (relativePath) => path.extname(relativePath).toLowerCase() === ".webp",
  );

  const writtenWebps = new Set();

  console.log("Convert JPEG/PNG → WebP");
  if (rasters.length === 0) {
    console.log("  none");
  } else {
    for (const relativePath of rasters) {
      writtenWebps.add(await convertRaster(relativePath));
    }
  }

  console.log("\nRecompress WebP");
  const toRecompress = webps.filter(
    (relativePath) => !writtenWebps.has(relativePath),
  );
  if (toRecompress.length === 0) {
    console.log("  none");
  } else {
    for (const relativePath of toRecompress) {
      await recompressWebp(relativePath);
    }
  }

  console.log("\nDone.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
