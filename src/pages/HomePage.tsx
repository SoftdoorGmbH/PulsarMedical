import { HomeAssessmentCompare } from "@/components/home/HomeAssessmentCompare";
import { HomeAssessmentOfferings } from "@/components/home/HomeAssessmentOfferings";
import { HomeAudiencePillars } from "@/components/home/HomeAudiencePillars";
import { HomeCta } from "@/components/home/HomeCta";
import { HomeFaq } from "@/components/home/HomeFaq";
// import { HomeFeatureCards } from "@/components/home/HomeFeatureCards";
import { HomeHero } from "@/components/home/HomeHero";
// import { HomeTabbedSection } from "@/components/home/HomeTabbedSection";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";
import { HomeTrustBy } from "@/components/home/HomeTrustBy";

export function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeTrustBy />
      <HomeAudiencePillars />
      <HomeAssessmentOfferings />
      <HomeAssessmentCompare />
      <HomeTestimonials />
      {/* <HomeFeatureCards /> */}
      {/* <HomeTabbedSection /> */}
      <HomeFaq />
      <HomeCta />
    </>
  );
}
