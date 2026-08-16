import type { AudienceFaqContent } from "@/content/audienceFaq";
import { JOBCENTER_FAQ_ITEMS } from "@/content/audienceFaq";
import type { AudienceWhyUsContent } from "@/content/audienceWhyUs";
import { JOBCENTER_WHY_US } from "@/content/audienceWhyUs";
import type { AudiencePainPointsContent } from "@/content/audiencePainPoints";
import type { AudiencePortfolioContent } from "@/content/audiencePortfolio";
import type { AudienceStepsTimelineContent } from "@/content/audienceSteps";
import { DEFAULT_AUDIENCE_PROCESS_STEPS } from "@/content/audienceSteps";

export type AudiencePageSlug =
  | "jobcenter"
  | "berufsgenossenschaften"
  | "rueckversicherer";

export type AudienceLogo = {
  src: string;
  alt: string;
};

export type AudienceServiceBlock = {
  title: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
};

export type AudienceHeroContent = {
  ariaLabel: string;
  title: string;
  paragraphs: string[];
  badges: string[];
};

export type AudienceLogoMarqueeContent = {
  headingId: string;
  heading: string;
  logos: readonly AudienceLogo[];
};

export type AudiencePageContent = {
  slug: AudiencePageSlug;
  navLabel: string;
  hero?: AudienceHeroContent;
  painPoints?: AudiencePainPointsContent;
  portfolio?: AudiencePortfolioContent;
  stepsTimeline?: AudienceStepsTimelineContent;
  whyUs?: AudienceWhyUsContent;
  logoMarquee?: AudienceLogoMarqueeContent;
  serviceBlocks?: readonly AudienceServiceBlock[];
  servicesSectionAriaLabel?: string;
  faq?: AudienceFaqContent;
};

export const AUDIENCE_PAGE_SLUGS: readonly AudiencePageSlug[] = [
  "jobcenter",
  "berufsgenossenschaften",
  "rueckversicherer",
] as const;

export function isAudiencePageSlug(slug: string): slug is AudiencePageSlug {
  return (AUDIENCE_PAGE_SLUGS as readonly string[]).includes(slug);
}

export function isAudiencePagePath(pathname: string): boolean {
  const slug = pathname.replace(/^\/+/, "").split("/")[0] ?? "";
  return isAudiencePageSlug(slug);
}

export const AUDIENCE_PAGES: Record<AudiencePageSlug, AudiencePageContent> = {
  jobcenter: {
    slug: "jobcenter",
    navLabel: "Für Jobcenter",
    hero: {
      ariaLabel: "Für Jobcenter",
      title: "Wir unterstützen Jobcenter und andere öffentliche Einrichtungen",
      paragraphs: [
        "Damit Sie als Berater:innen den Menschen zielgerichtet helfen können, ist häufig medizinische Expertise notwendig. Doch woher sollen Sie diese Expertise haben … schließlich kann man nicht alles können.",
      ],
      badges: ["DSGVO", "Bundesweit verfügbar", "Persönlich"],
    },
    painPoints: {
      headingId: "jobcenter-pain-points-heading",
      title: "Typische Herausforderungen im Jobcenter-Alltag",
      subtitle:
        "Medizinische Fragen tauchen täglich auf — ohne klare Antworten verzögern sich Entscheidungen und der Integrationsprozess.",
      items: [
        {
          quote:
            "Wir wissen oft nicht, ob gesundheitliche Einschränkungen die Vermittlung wirklich blockieren.",
          title: "Leistungsfähigkeit belastbar einschätzen",
          description:
            "Wir liefern medizinische Einschätzungen, die Ihre Beratung und Integrationsplanung fundiert unterstützen.",
        },
        {
          quote:
            "Bei komplexen Fällen fehlt uns die fachliche Tiefe, um passende nächste Schritte zu definieren.",
          title: "Expertise für schwierige Einzelfälle",
          description:
            "Unser Netzwerk aus Fachärzt:innen und Psycholog:innen bringt Klarheit in komplexe Gesundheitsfragen.",
        },
        {
          quote:
            "Meldeversäumnisse lassen sich schwer einordnen, wenn psychische Belastung im Spiel sein könnte.",
          title: "Meldeversäumnisse fachlich einordnen",
          description:
            "Wir schaffen eine zeitnahe Ersteinschätzung als Grundlage für Unterstützung, Behandlung oder Klärung.",
        },
        {
          quote:
            "Externe Gutachten dauern zu lange — unsere Klient:innen brauchen schneller Orientierung.",
          title: "Schnelle, verlässliche Begutachtungen",
          description:
            "Persönlich, telemedizinisch oder nach Aktenlage — strukturiert und DSGVO-konform koordiniert.",
        },
      ],
    },
    portfolio: {
      headingId: "jobcenter-portfolio-heading",
      title: "Medizinische Expertise für den Jobcenter-Alltag",
      subtitle:
        "PULSAR Medical bündelt Begutachtung, Beratung und Wissensvermittlung in einem System — abgestimmt auf Ihre Prozesse, Fälle und Entscheidungswege.",
      ariaLabel: "Leistungsportfolio für Jobcenter",
      cta: {
        to: "/ueber-uns",
        label: "Beratungstermin anfragen",
      },
      items: [
        {
          title: "Medizinische Begutachtungen",
          intro:
            "Klarheit über Gesundheit und Leistungsfähigkeit — strukturiert und nachvollziehbar:",
          items: [
            "Beurteilung des Gesundheitszustands auf Basis von Unterlagen und Untersuchungen",
            "Live, telemedizinisch oder nach Aktenlage — je nach Fall und Dringlichkeit",
            "Verständliche Berichte für Beratung, Integrationsplanung und Entscheidungen",
            "Bundesweites Netzwerk aus Fachärzt:innen für unterschiedliche Fragestellungen",
          ],
          imageSrc: "/pulsarmedical-jobcenter-1.jpg",
          imageAlt: "Medizinische Begutachtung im Beratungskontext",
        },
        {
          title: "Psychologische Begutachtungen",
          intro:
            "Fachliche Einordnung, wenn psychische Belastungen im Vordergrund stehen:",
          items: [
            "Einschätzung psychischer Beeinträchtigungen und deren Auswirkungen auf den Arbeitsalltag",
            "Abstimmung mit medizinischen Befunden für ein stimmiges Gesamtbild",
            "Empfehlungen zu Behandlung, Stabilisierung und nächsten Integrations-Schritten",
            "Schnelle Ersteinschätzungen bei akuten oder unklaren Konstellationen",
          ],
          imageSrc: "/pulsarmedical-jobcenter-2.jpg",
          imageAlt: "Psychologische Beratung und Einschätzung",
        },
        {
          title: "Arbeits- & Sozialmedizin",
          intro: "Brücken zwischen Medizin, Arbeitswelt und Teilhabe schaffen:",
          items: [
            "Beurteilung beruflicher Belastbarkeit und arbeitsplatzbezogener Einschränkungen",
            "Unterstützung bei der Einordnung von Arbeitsunfähigkeit und Reha-Bedarf",
            "Sozialmedizinische Perspektive für realistische Integrationsziele",
            "Schnittstelle zwischen Jobcenter, Ärzt:innen und weiteren Beteiligten",
          ],
          imageSrc: "/pulsarmedical-jobcenter-3.jpg",
          imageAlt: "Arbeits- und sozialmedizinische Beratung",
        },
        {
          title: "Medical Consulting",
          intro:
            "Expert:innen an Ihrer Seite — wenn der Einzelfall komplex wird:",
          items: [
            "Fallbesprechungen mit Ihrem Team, live oder digital",
            "Gemeinsame Analyse schwieriger Konstellationen und möglicher Maßnahmen",
            "Sparring zu medizinischen Fragen im laufenden Beratungsprozess",
            "Entlastung für Berater:innen ohne eigene medizinische Fachabteilung",
          ],
          imageSrc: "/pulsarmedical-jobcenter-1.jpg",
          imageAlt: "Medical Consulting im Team",
        },
        {
          title: "Medical Facts",
          intro: "Wissen aufbereiten, das im Alltag wirklich weiterhilft:",
          items: [
            "Fact-Sheets zu Themen wie Long-Covid, Angststörungen oder chronischen Erkrankungen",
            "Informationen zugeschnitten auf Jobcenter-Prozesse und Zielgruppen",
            "Verständliche Sprache für Berater:innen, Klient:innen und Partner",
            "Aktualisierbare Inhalte für Schulungen und interne Wissensarbeit",
          ],
          imageSrc: "/pulsarmedical-jobcenter-2.jpg",
          imageAlt: "Medizinische Fact-Sheets und Informationsmaterial",
        },
        {
          title: "Meldeversäumnisse",
          intro:
            "Schnelle fachliche Orientierung, wenn Meldepflichten nicht eingehalten wurden:",
          items: [
            "Ersteinschätzung, ob gesundheitliche Ursachen plausibel sind",
            "Grundlage für weitere Unterstützung, Behandlung oder Klärung",
            "Zeitnahe Rückmeldung, damit Beratung nicht ins Leere läuft",
            "Strukturierte Dokumentation für nachvollziehbare Entscheidungen",
          ],
          imageSrc: "/pulsarmedical-jobcenter-3.jpg",
          imageAlt: "Fachliche Einschätzung bei Meldeversäumnissen",
        },
      ],
    },
    stepsTimeline: {
      headingId: "jobcenter-steps-heading",
      title: "So läuft die Zusammenarbeit ab",
      subtitle:
        "Von der ersten Anfrage bis zum fertigen Gutachten begleiten wir Sie strukturiert — transparent, terminsicher und fachlich abgesichert.",
      steps: DEFAULT_AUDIENCE_PROCESS_STEPS,
    },
    whyUs: JOBCENTER_WHY_US,
    faq: {
      headingId: "jobcenter-faq-heading",
      items: JOBCENTER_FAQ_ITEMS,
    },
  },
  berufsgenossenschaften: {
    slug: "berufsgenossenschaften",
    navLabel: "Für Berufsgenossenschaften",
    hero: {
      ariaLabel: "Für Berufsgenossenschaften",
      title: "Wir unterstützen Berufsgenossenschaften",
      paragraphs: [
        "Damit Sie als Berufsgenossenschaften den Menschen zielgerichtet helfen können, ist häufig medizinische Expertise notwendig. Doch woher sollen Sie diese Expertise haben … schließlich kann man nicht alles können.",
      ],
      badges: ["DSGVO", "Bundesweit verfügbar", "Persönlich"],
    },
  },
  rueckversicherer: {
    slug: "rueckversicherer",
    navLabel: "Für Rückversicherer",
    hero: {
      ariaLabel: "Für Rückversicherer",
      title: "Wir unterstützen Rückversicherer",
      paragraphs: [
        "Damit Sie als Rückversicherer den Menschen zielgerichtet helfen können, ist häufig medizinische Expertise notwendig. Doch woher sollen Sie diese Expertise haben … schließlich kann man nicht alles können.",
      ],
      badges: ["DSGVO", "Bundesweit verfügbar", "Persönlich"],
    },
  },
};

export const AUDIENCE_NAV_LINKS = AUDIENCE_PAGE_SLUGS.map((slug) => ({
  to: `/${slug}`,
  label: AUDIENCE_PAGES[slug].navLabel,
}));
