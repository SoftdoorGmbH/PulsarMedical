import { HomeCta } from "@/components/home/HomeCta";
import { HomeFaq } from "@/components/home/HomeFaq";
import { HomeFeatureCards } from "@/components/home/HomeFeatureCards";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeTabbedSection } from "@/components/home/HomeTabbedSection";
import { HomeTestimonialSlider } from "@/components/home/HomeTestimonialSlider";

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
