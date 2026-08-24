import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");
const logoPath = path.join(publicDir, "Pulsar_Logo.webp");

const WIDTH = 1200;
const HEIGHT = 630;

const textSvg = Buffer.from(`
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#02344e"/>
  <text x="80" y="390" fill="#ffffff" font-size="48" font-family="Georgia, 'Times New Roman', serif">
    Klare Antworten
  </text>
  <text x="80" y="456" fill="#e0f4fa" font-size="36" font-family="Georgia, 'Times New Roman', serif">
    bei komplexen Gesundheitsfragen
  </text>
  <text x="80" y="530" fill="#7aaec4" font-size="22" font-family="ui-sans-serif, system-ui, sans-serif">
    Medizinische und psychologische Begutachtungen
  </text>
</svg>
`);

const logo = await sharp(logoPath)
  .resize({ width: 280, withoutEnlargement: true })
  .png()
  .toBuffer();

await sharp(textSvg)
  .composite([{ input: logo, left: 80, top: 96 }])
  .webp({ quality: 86 })
  .toFile(path.join(publicDir, "og-default.webp"));

await sharp(logoPath)
  .resize({ width: 96, withoutEnlargement: true })
  .png()
  .toFile(path.join(publicDir, "Pulsar_Logo.png"));

console.log("Wrote public/og-default.webp and public/Pulsar_Logo.png");
