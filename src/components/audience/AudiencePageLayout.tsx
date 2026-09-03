import { AudienceFaqSection } from "@/components/audience/AudienceFaqSection";
import { AudienceHero } from "@/components/audience/AudienceHero";
import { AudienceLogoMarquee } from "@/components/audience/AudienceLogoMarquee";
import { AudiencePainPointsSection } from "@/components/audience/AudiencePainPointsSection";
import { AudiencePortfolioSection } from "@/components/audience/AudiencePortfolioSection";
import { AudienceServicesSection } from "@/components/audience/AudienceServicesSection";
import { AudienceStepsPreviewSection } from "@/components/audience/AudienceStepsPreviewSection";
import { AudienceWhyUsSection } from "@/components/audience/AudienceWhyUsSection";
import { HomeCta } from "@/components/home/HomeCta";
import type { AudiencePageContent } from "@/content/audiencePages";

export function AudiencePageLayout({
  content,
}: {
  content: AudiencePageContent;
}) {
  const {
    hero,
    painPoints,
    portfolio,
    stepsTimeline,
    whyUs,
    logoMarquee,
    serviceBlocks,
    servicesSectionAriaLabel,
    faq,
  } = content;

  return (
    <>
      {hero ? <AudienceHero {...hero} /> : null}
      {painPoints ? <AudiencePainPointsSection {...painPoints} /> : null}
      {portfolio ? <AudiencePortfolioSection {...portfolio} /> : null}
      {stepsTimeline ? (
        <AudienceStepsPreviewSection
          {...stepsTimeline}
          audienceSlug={content.slug}
        />
      ) : null}
      {whyUs ? <AudienceWhyUsSection {...whyUs} /> : null}
      {logoMarquee ? <AudienceLogoMarquee {...logoMarquee} /> : null}
      {serviceBlocks && serviceBlocks.length > 0 && servicesSectionAriaLabel ? (
        <AudienceServicesSection
          blocks={serviceBlocks}
          ariaLabel={servicesSectionAriaLabel}
        />
      ) : null}
      {faq ? <AudienceFaqSection {...faq} /> : null}
      <HomeCta />
    </>
  );
}
