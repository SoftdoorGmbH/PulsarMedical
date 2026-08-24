import { access, mkdir, readFile, unlink, writeFile } from "node:fs/promises";
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

/** Local photos to convert in place. `out` overrides the default `.webp` sibling. */
const LOCAL_PHOTOS = [
  "pulsarmedical-jobcenter-1.jpg",
  "pulsarmedical-jobcenter-2.jpg",
  "pulsarmedical-jobcenter-3.jpg",
  "offers/medizinische_begutachtungen/magnific_contemporary-documentary-_huFeU9OvqL.jpg",
  "offers/medizinische_begutachtungen/magnific_documentarystyle-editoria_jU7FW8xLD0.jpg",
  "offers/medizinische_begutachtungen/similar-5535720.jpeg",
  "offers/medizinische_begutachtungen/magnific_documentarystyle-editoria_P3Zsv3G42C.jpg",
  "offers/medizinische_begutachtungen/similar-5535771.jpeg",
  "offers/psychologische_begutachtungen/creativity-go-cropped-shot-creative-business-office.jpg",
  "offers/psychologische_begutachtungen/social-integration-working-team(1).jpg",
  "offers/psychologische_begutachtungen/two-businesspeople-having-conversation-office.jpg",
  "offers/psychologische_begutachtungen/unrecognizable-brunette-young-male-architect-sitting-desk-with-drawings-while-discussing-something-with-his-cheerful-mature-female-boss-who-is-smiling-him-approving-his-creative-ideas.jpg",
  "offers/arbeits_sozialmedizinische_begutachtungen/magnific_contemporary-documentary-_xSwHApojfW.jpg",
  "offers/arbeits_sozialmedizinische_begutachtungen/magnific_documentarystyle-editoria_9ZAg56mNYZ.jpg",
  "offers/arbeits_sozialmedizinische_begutachtungen/magnific_documentarystyle-editoria_DoIGUXnpcl.jpg",
  "offers/arbeits_sozialmedizinische_begutachtungen/similar-258638884.jpeg",
  "offers/fachuebergreifende_begutachtungen/close-up-people-studying-with-notebook.jpg",
  "offers/fachuebergreifende_begutachtungen/good-worker.jpg",
  "offers/fachuebergreifende_begutachtungen/portrait-business-people-man-office-teamwork-lens-flare-with-cooperation-employees-group-coworkers-workplace-journalist-research-article-magazine-editor-copywriting.jpg",
  {
    src: "offers/meldeversauemnisse/2-business-man-are-sitting-table-with-man-suit-discuss-about-projec 2.jpg",
    out: "offers/meldeversauemnisse/business-men-discussing-project.webp",
  },
  "offers/meldeversauemnisse/colleague-talking-office-with-coffee-company-career-professional-planning-innovative-business-strategy-young-man-with-mature-person-analyst-break-job-feedback-profession.jpg",
  "offers/meldeversauemnisse/social-integration-working-team.jpg",
];

const HERO_WEBPS = [
  "1.png.webp",
  "2.png.webp",
  "3.png.webp",
  "4.png.webp",
  "5.png.webp",
  "6.png.webp",
  "7.png.webp",
  "8.png.webp",
];

const TEAM_REMOTE = [
  {
    url: "https://pulsarmed.de/wp-content/uploads/2025/05/nadine-bauer.webp",
    out: "team/nadine-bauer.webp",
  },
  {
    url: "https://pulsarmed.de/wp-content/uploads/2025/01/pulsarmedical-webteambild-geraldine.jpg",
    out: "team/geraldine-brinkhoff.webp",
  },
  {
    url: "https://pulsarmed.de/wp-content/uploads/2024/08/pulsarmedical-webteambild-jenni.jpg",
    out: "team/jennifer-ewegen.webp",
  },
  {
    url: "https://pulsarmed.de/wp-content/uploads/2025/05/pulsarmedical-steffi-haeger-team-foto-web2.webp",
    out: "team/stefanie-haeger.webp",
  },
  {
    url: "https://pulsarmed.de/wp-content/uploads/2024/05/pulsarmedical-barbara-haiden-2.jpg",
    out: "team/barbara-heiden.webp",
  },
  {
    url: "https://pulsarmed.de/wp-content/uploads/2025/04/pulsarmedical-amelie-team-foto-web2.webp",
    out: "team/amelie-koch.webp",
  },
  {
    url: "https://pulsarmed.de/wp-content/uploads/2025/01/pulsarmedical-webteambild-emily.jpg",
    out: "team/emily-paul.webp",
  },
  {
    url: "https://pulsarmed.de/wp-content/uploads/2024/08/pulsarmedical-webteambild-tina.jpg",
    out: "team/tina-schulcz.webp",
  },
  {
    url: "https://pulsarmed.de/wp-content/uploads/2024/05/pulsarmedical-diana-zybell.jpg",
    out: "team/diana-zybell.webp",
  },
];

const LOGO_REMOTE = [
  {
    url: "https://pulsarmed.de/wp-content/uploads/2023/10/logo-jc-siegen-wittgenstein.jpg",
    out: "logos/logo-jc-siegen-wittgenstein.webp",
  },
  {
    url: "https://pulsarmed.de/wp-content/uploads/2023/10/logo-jc-northeim.jpg",
    out: "logos/logo-jc-northeim.webp",
  },
  {
    url: "https://pulsarmed.de/wp-content/uploads/2023/10/logo-jc-holzminden.jpg",
    out: "logos/logo-jc-holzminden.webp",
  },
  {
    url: "https://pulsarmed.de/wp-content/uploads/2023/10/logo-jc-hameln-pyrmont.jpg",
    out: "logos/logo-jc-hameln-pyrmont.webp",
  },
  {
    url: "https://pulsarmed.de/wp-content/uploads/2023/10/jc-herford.png",
    out: "logos/jc-herford.webp",
  },
  {
    url: "https://pulsarmed.de/wp-content/uploads/2023/10/logo-jc-remscheid.jpg",
    out: "logos/logo-jc-remscheid.webp",
  },
  {
    url: "https://pulsarmed.de/wp-content/uploads/2023/10/logo-kommunales-jobcenter-solingen.jpg",
    out: "logos/logo-kommunales-jobcenter-solingen.webp",
  },
  {
    url: "https://pulsarmed.de/wp-content/uploads/2024/08/jobcenter-wolfsburg.jpg",
    out: "logos/jobcenter-wolfsburg.webp",
  },
  {
    url: "https://pulsarmed.de/wp-content/uploads/2024/05/logo-jobcenter-rgb.jpg",
    out: "logos/logo-jobcenter-rgb.webp",
  },
  {
    url: "https://pulsarmed.de/wp-content/uploads/2023/10/logo-jc-wuppertal.jpg",
    out: "logos/logo-jc-wuppertal.webp",
  },
  {
    url: "https://pulsarmed.de/wp-content/uploads/2024/12/logo-jobcenter-kreis-gutersloh.jpg",
    out: "logos/logo-jobcenter-kreis-gutersloh.webp",
  },
  {
    url: "https://pulsarmed.de/wp-content/uploads/2025/01/jobcenterlogo-ebersberg-a2ll-wappen.jpg",
    out: "logos/jobcenterlogo-ebersberg-a2ll-wappen.webp",
  },
  {
    url: "https://pulsarmed.de/wp-content/uploads/2025/01/logo-jobcenter-freising.jpg",
    out: "logos/logo-jobcenter-freising.webp",
  },
  {
    url: "https://pulsarmed.de/wp-content/uploads/2025/01/logo-jobcenter-erding.png",
    out: "logos/logo-jobcenter-erding.webp",
  },
  {
    url: "https://pulsarmed.de/wp-content/uploads/2025/01/logo-jobcenter-dachau-aktuell.jpg",
    out: "logos/logo-jobcenter-dachau-aktuell.webp",
  },
];

function toWebpPath(relativePath) {
  return relativePath.replace(/\.(jpe?g|png)$/i, ".webp");
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
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

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function convertLocalPhoto(entry) {
  const srcRelative = typeof entry === "string" ? entry : entry.src;
  const outRelative =
    typeof entry === "string" ? toWebpPath(entry) : entry.out;
  const srcPath = path.join(publicDir, srcRelative);

  if (!(await exists(srcPath))) {
    console.log(`  skip ${srcRelative} (already converted)`);
    return;
  }

  const input = await readFile(srcPath);
  const { bytes } = await writeWebp(input, outRelative, PHOTO_MAX_WIDTH);

  if (srcPath !== path.join(publicDir, outRelative)) {
    await unlink(srcPath);
  }

  console.log(
    `  ${srcRelative}  ${formatBytes(input.length)} → /${outRelative}  ${formatBytes(bytes)}`,
  );
}

async function recompressHero(relativePath) {
  const srcPath = path.join(publicDir, relativePath);
  const input = await readFile(srcPath);
  const { bytes } = await writeWebp(input, relativePath, PHOTO_MAX_WIDTH);

  if (bytes < input.length) {
    console.log(
      `  ${relativePath}  ${formatBytes(input.length)} → ${formatBytes(bytes)}`,
    );
  } else {
    await writeFile(srcPath, input);
    console.log(
      `  ${relativePath}  kept ${formatBytes(input.length)} (recompress was ${formatBytes(bytes)})`,
    );
  }
}

async function download(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download ${url}: ${response.status}`);
  }
  return Buffer.from(await response.arrayBuffer());
}

async function convertRemote(entry, maxWidth) {
  const input = await download(entry.url);
  const { bytes } = await writeWebp(input, entry.out, maxWidth);
  console.log(
    `  ${entry.url.split("/").pop()}  ${formatBytes(input.length)} → /${entry.out}  ${formatBytes(bytes)}`,
  );
}

async function convertBrandLogo() {
  const srcPath = path.join(publicDir, "Pulsar_Logo.png");
  const input = await readFile(srcPath);
  const { bytes } = await writeWebp(input, "Pulsar_Logo.webp", BRAND_LOGO_MAX_WIDTH);
  console.log(
    `  Pulsar_Logo.png  ${formatBytes(input.length)} → /Pulsar_Logo.webp  ${formatBytes(bytes)}`,
  );
}

async function main() {
  console.log("Local photos");
  for (const entry of LOCAL_PHOTOS) {
    await convertLocalPhoto(entry);
  }

  console.log("\nHero WebPs");
  for (const file of HERO_WEBPS) {
    await recompressHero(file);
  }

  console.log("\nBrand logo");
  await convertBrandLogo();

  console.log("\nTeam portraits");
  for (const entry of TEAM_REMOTE) {
    await convertRemote(entry, TEAM_MAX_WIDTH);
  }

  console.log("\nJobcenter logos");
  for (const entry of LOGO_REMOTE) {
    await convertRemote(entry, LOGO_MAX_WIDTH);
  }

  console.log("\nDone.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
