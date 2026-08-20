import { AboutHero } from "@/components/about/AboutHero";
import { AboutMissionSection } from "@/components/about/AboutMissionSection";
import { AboutTeamSection } from "@/components/about/AboutTeamSection";
import { AboutValuesSection } from "@/components/about/AboutValuesSection";
import { HomeCta } from "@/components/home/HomeCta";

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutMissionSection />
      <AboutValuesSection />
      <AboutTeamSection />
      <HomeCta />
    </>
  );
}
