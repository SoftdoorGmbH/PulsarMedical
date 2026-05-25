import { AboutCta } from "@/components/about/AboutCta";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutMissionSection } from "@/components/about/AboutMissionSection";
import { AboutTeamSection } from "@/components/about/AboutTeamSection";

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutMissionSection />
      <AboutTeamSection />
      <AboutCta />
    </>
  );
}
