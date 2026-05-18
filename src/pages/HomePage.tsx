import { HomeCta } from "@/components/HomeCta";
import { HomeFaq } from "@/components/HomeFaq";
import { HomeFeatureCards } from "@/components/HomeFeatureCards";
import { HomeHero } from "@/components/HomeHero";
import { HomeTabbedSection } from "@/components/HomeTabbedSection";
import { HomeTestimonialSlider } from "@/components/HomeTestimonialSlider";

export function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeFeatureCards />
      <HomeTabbedSection />
      <HomeTestimonialSlider />
      <HomeFaq />
      <HomeCta />
    </>
  );
}
