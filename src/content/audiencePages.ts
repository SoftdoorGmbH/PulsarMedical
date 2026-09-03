import type { AudienceFaqContent } from "@/content/audienceFaq";
import {
  BERUFSGENOSSENSCHAFTEN_FAQ_ITEMS,
  JOBCENTER_FAQ_ITEMS,
  RUECKVERSICHERER_FAQ_ITEMS,
} from "@/content/audienceFaq";
import type { AudienceWhyUsContent } from "@/content/audienceWhyUs";
import {
  BERUFSGENOSSENSCHAFTEN_WHY_US,
  JOBCENTER_WHY_US,
  RUECKVERSICHERER_WHY_US,
} from "@/content/audienceWhyUs";
import type { AudiencePainPointsContent } from "@/content/audiencePainPoints";
import {
  BERUFSGENOSSENSCHAFTEN_PAIN_POINTS,
  JOBCENTER_PAIN_POINTS,
  RUECKVERSICHERER_PAIN_POINTS,
} from "@/content/audiencePainPoints";
import type { AudiencePortfolioContent } from "@/content/audiencePortfolio";
import {
  BERUFSGENOSSENSCHAFTEN_PORTFOLIO,
  JOBCENTER_PORTFOLIO,
  RUECKVERSICHERER_PORTFOLIO,
} from "@/content/audiencePortfolio";
import type { AudienceStepsTimelineContent } from "@/content/audienceSteps";
import {
  BERUFSGENOSSENSCHAFTEN_PROCESS,
  JOBCENTER_PROCESS,
  RUECKVERSICHERER_PROCESS,
} from "@/content/audienceSteps";
import {
  AUDIENCE_SECONDARY_CTA,
  OFFER_PRIMARY_CTA,
} from "@/content/cta";
import type { PageSeoFields } from "@/content/seoFields";

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

export type AudienceHeroCta = {
  label: string;
  to?: string;
  href?: string;
};

export type AudienceHeroContent = {
  ariaLabel: string;
  overline?: string;
  title: string;
  paragraphs: string[];
  badges: string[];
  primaryCta?: AudienceHeroCta;
  secondaryCta?: AudienceHeroCta | null;
};

export type AudienceLogoMarqueeContent = {
  headingId: string;
  heading: string;
  logos: readonly AudienceLogo[];
};

export type AudiencePageContent = {
  slug: AudiencePageSlug;
  navLabel: string;
  seo?: PageSeoFields;
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

export const ABLAUF_RETURN_STORAGE_KEY = "pulsar.ablaufReturnTo";

export type AudienceReturnTarget = {
  to: string;
  label: string;
};

function audienceSlugFromPath(pathOrUrl: string): AudiencePageSlug | null {
  const pathname = (() => {
    if (pathOrUrl.startsWith("http")) {
      try {
        return new URL(pathOrUrl).pathname;
      } catch {
        return pathOrUrl;
      }
    }
    return pathOrUrl.split(/[?#]/)[0] ?? pathOrUrl;
  })();
  const slug = pathname.replace(/^\/+/, "").split("/")[0] ?? "";
  return isAudiencePageSlug(slug) ? slug : null;
}

export function getAudienceReturnTarget(
  pathOrUrl: string,
): AudienceReturnTarget | null {
  const slug = audienceSlugFromPath(pathOrUrl);
  if (!slug) return null;

  return {
    to: `/${slug}#ablauf`,
    label: `Zurück zu ${AUDIENCE_PAGES[slug].navLabel.replace(/^Für /, "")}`,
  };
}

const AUDIENCE_HERO_BADGES = [
  "DSGVO-konforme Datenprozesse",
  "Medizinische und psychologische Expertise",
  "Feste Projektkoordination",
] as const;

export const AUDIENCE_PAGES: Record<AudiencePageSlug, AudiencePageContent> = {
  jobcenter: {
    slug: "jobcenter",
    navLabel: "Für Jobcenter",
    seo: {
      title: "Begutachtungen für Jobcenter",
      description:
        "PULSAR Medical unterstützt Jobcenter mit medizinischen und psychologischen Begutachtungen, wenn Gesundheit Mitwirkung, Leistungsfähigkeit oder Integration beeinflusst.",
    },
    hero: {
      ariaLabel: "Für Jobcenter",
      overline: "Für Jobcenter",
      title: "Gesundheitliche Hürden erkennen. Integration realistisch planen",
      paragraphs: [
        "PULSAR Medical unterstützt Jobcenter mit medizinischen und psychologischen Begutachtungen, wenn gesundheitliche Einschränkungen die Mitwirkung, Leistungsfähigkeit oder berufliche Integration beeinflussen können.",
      ],
      badges: [...AUDIENCE_HERO_BADGES],
      primaryCta: OFFER_PRIMARY_CTA,
      secondaryCta: AUDIENCE_SECONDARY_CTA,
    },
    painPoints: JOBCENTER_PAIN_POINTS,
    portfolio: JOBCENTER_PORTFOLIO,
    stepsTimeline: JOBCENTER_PROCESS,
    whyUs: JOBCENTER_WHY_US,
    faq: {
      headingId: "jobcenter-faq-heading",
      items: JOBCENTER_FAQ_ITEMS,
    },
  },
  berufsgenossenschaften: {
    slug: "berufsgenossenschaften",
    navLabel: "Für Berufsgenossenschaften",
    seo: {
      title: "Begutachtungen für Berufsgenossenschaften",
      description:
        "PULSAR Medical beurteilt Unfallfolgen, Arbeitsfähigkeit und Wiedereingliederung – mit medizinischen und psychologischen Begutachtungen für Berufsgenossenschaften.",
    },
    hero: {
      ariaLabel: "Für Berufsgenossenschaften",
      overline: "Für Berufsgenossenschaften",
      title: "Arbeitsfähigkeit nach einem Unfall klar beurteilen.",
      paragraphs: [
        "PULSAR Medical unterstützt Berufsgenossenschaften mit medizinischen und psychologischen Begutachtungen, wenn Unfallfolgen, Leistungsfähigkeit oder die berufliche Wiedereingliederung fachlich beurteilt werden müssen.",
      ],
      badges: [...AUDIENCE_HERO_BADGES],
      primaryCta: OFFER_PRIMARY_CTA,
      secondaryCta: AUDIENCE_SECONDARY_CTA,
    },
    painPoints: BERUFSGENOSSENSCHAFTEN_PAIN_POINTS,
    portfolio: BERUFSGENOSSENSCHAFTEN_PORTFOLIO,
    stepsTimeline: BERUFSGENOSSENSCHAFTEN_PROCESS,
    whyUs: BERUFSGENOSSENSCHAFTEN_WHY_US,
    faq: {
      headingId: "berufsgenossenschaften-faq-heading",
      items: BERUFSGENOSSENSCHAFTEN_FAQ_ITEMS,
    },
  },
  rueckversicherer: {
    slug: "rueckversicherer",
    navLabel: "Für Rückversicherer",
    seo: {
      title: "Begutachtungen für Rückversicherer",
      description:
        "PULSAR Medical bewertet Leistungsfälle medizinisch und psychologisch – für klare Einschätzungen zu Leistungsfähigkeit, Prognose und beruflicher Belastbarkeit.",
    },
    hero: {
      ariaLabel: "Für Rückversicherer",
      overline: "Für Rückversicherer",
      title: "Leistungsfälle medizinisch klar bewerten",
      paragraphs: [
        "PULSAR Medical unterstützt Rückversicherer mit medizinischen und psychologischen Begutachtungen, wenn gesundheitliche Einschränkungen, berufliche Leistungsfähigkeit oder die weitere Prognose für Leistungsentscheidungen relevant sind.",
      ],
      badges: [...AUDIENCE_HERO_BADGES],
      primaryCta: OFFER_PRIMARY_CTA,
      secondaryCta: AUDIENCE_SECONDARY_CTA,
    },
    painPoints: RUECKVERSICHERER_PAIN_POINTS,
    portfolio: RUECKVERSICHERER_PORTFOLIO,
    stepsTimeline: RUECKVERSICHERER_PROCESS,
    whyUs: RUECKVERSICHERER_WHY_US,
    faq: {
      headingId: "rueckversicherer-faq-heading",
      items: RUECKVERSICHERER_FAQ_ITEMS,
    },
  },
};

export const AUDIENCE_NAV_LINKS = AUDIENCE_PAGE_SLUGS.map((slug) => ({
  to: `/${slug}`,
  label: AUDIENCE_PAGES[slug].navLabel,
}));
