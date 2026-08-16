import { OfferPageLayout } from "@/components/offer/OfferPageLayout";
import { OFFER_PAGES, type OfferPageSlug } from "@/content/offerPages";

type OfferPageProps = {
  slug: OfferPageSlug;
};

export function OfferPage({ slug }: OfferPageProps) {
  return <OfferPageLayout content={OFFER_PAGES[slug]} />;
}
