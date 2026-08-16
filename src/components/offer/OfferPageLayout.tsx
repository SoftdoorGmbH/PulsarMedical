import { AudienceFaqSection } from "@/components/audience/AudienceFaqSection";
import { AudienceHero } from "@/components/audience/AudienceHero";
import { HomeCta } from "@/components/home/HomeCta";
import { OfferCompareSection } from "@/components/offer/OfferCompareSection";
import { OfferBenefitsSection } from "@/components/offer/OfferBenefitsSection";
import { OfferPartnershipSection } from "@/components/offer/OfferPartnershipSection";
import { OfferProcessSection } from "@/components/offer/OfferProcessSection";
import { OfferUseCasesSection } from "@/components/offer/OfferUseCasesSection";
import type { OfferPageContent } from "@/content/offerPages";

export function OfferPageLayout({ content }: { content: OfferPageContent }) {
  const { hero, useCases, compare, process, partnership, benefits, faq } =
    content;

  return (
    <>
      {hero ? <AudienceHero {...hero} /> : null}
      {useCases ? <OfferUseCasesSection {...useCases} /> : null}
      {compare ? <OfferCompareSection {...compare} /> : null}
      {process ? <OfferProcessSection {...process} /> : null}
      {partnership ? <OfferPartnershipSection {...partnership} /> : null}
      {benefits ? <OfferBenefitsSection {...benefits} /> : null}
      {faq && faq.items.length > 0 ? <AudienceFaqSection {...faq} /> : null}
      <HomeCta />
    </>
  );
}
