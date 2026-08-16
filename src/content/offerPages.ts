import type { LucideIcon } from "lucide-react";
import type { AudienceFaqContent } from "@/content/audienceFaq";
import type { AudienceHeroContent } from "@/content/audiencePages";
import type { OfferUseCasesContent } from "@/content/offerUseCases";
import type { OfferCompareContent } from "@/content/offerCompare";
import type { OfferProcessContent } from "@/content/offerProcess";
import type { OfferPartnershipContent } from "@/content/offerPartnership";
import type { OfferBenefitsContent } from "@/content/offerBenefits";
import { arbeitsSozialmedizinischeBegutachtungen } from "@/content/offers/arbeits-sozialmedizinische-begutachtungen";
import { fachuebergreifendeBegutachtungen } from "@/content/offers/fachuebergreifende-begutachtungen";
import { medizinischeBegutachtungen } from "@/content/offers/medizinische-begutachtungen";
import { meldeversaeumnisse } from "@/content/offers/meldeversaeumnisse";
import { psychologischeBegutachtungen } from "@/content/offers/psychologische-begutachtungen";

export type OfferPageSlug =
  | "medizinische-begutachtungen"
  | "psychologische-begutachtungen"
  | "arbeits-sozialmedizinische-begutachtungen"
  | "fachuebergreifende-begutachtungen"
  | "meldeversaeumnisse";

export type OfferPageContent = {
  slug: OfferPageSlug;
  navLabel: string;
  icon: LucideIcon;
  hero?: AudienceHeroContent;
  useCases?: OfferUseCasesContent;
  compare?: OfferCompareContent;
  process?: OfferProcessContent;
  partnership?: OfferPartnershipContent;
  benefits?: OfferBenefitsContent;
  faq?: AudienceFaqContent;
};

export const OFFER_PAGE_SLUGS: readonly OfferPageSlug[] = [
  "medizinische-begutachtungen",
  "psychologische-begutachtungen",
  "arbeits-sozialmedizinische-begutachtungen",
  "fachuebergreifende-begutachtungen",
  "meldeversaeumnisse",
] as const;

export function isOfferPageSlug(slug: string): slug is OfferPageSlug {
  return (OFFER_PAGE_SLUGS as readonly string[]).includes(slug);
}

export function isOfferPagePath(pathname: string): boolean {
  const slug = pathname.replace(/^\/+/, "").split("/")[0] ?? "";
  return isOfferPageSlug(slug);
}

export const OFFER_PAGES: Record<OfferPageSlug, OfferPageContent> = {
  "medizinische-begutachtungen": medizinischeBegutachtungen,
  "psychologische-begutachtungen": psychologischeBegutachtungen,
  "arbeits-sozialmedizinische-begutachtungen":
    arbeitsSozialmedizinischeBegutachtungen,
  "fachuebergreifende-begutachtungen": fachuebergreifendeBegutachtungen,
  meldeversaeumnisse,
};

export const OFFER_NAV_ITEMS = OFFER_PAGE_SLUGS.map((slug) => ({
  to: `/${slug}`,
  label: OFFER_PAGES[slug].navLabel,
  icon: OFFER_PAGES[slug].icon,
}));
