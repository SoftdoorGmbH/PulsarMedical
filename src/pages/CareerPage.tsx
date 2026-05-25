import { CareerHero } from "@/components/career/CareerHero";
import { CareerHighlightsSection } from "@/components/career/CareerHighlightsSection";
import { CareerMissionSection } from "@/components/career/CareerMissionSection";
import { CareerOpenRolesSection } from "@/components/career/CareerOpenRolesSection";

export function CareerPage() {
  return (
    <>
      <CareerHero />
      <CareerMissionSection />
      <CareerHighlightsSection />
      <CareerOpenRolesSection />
    </>
  );
}
