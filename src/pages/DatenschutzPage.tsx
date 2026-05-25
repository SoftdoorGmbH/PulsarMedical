import { SectionLight } from "@/components/SectionLight";
import { GeneralSection } from "@/content/datenschutz/GeneralSection";
import { GoogleSection } from "@/content/datenschutz/GoogleSection";
import { OffersSection } from "@/content/datenschutz/OffersSection";
import { OwnServicesSection } from "@/content/datenschutz/OwnServicesSection";
import { PluginsSection } from "@/content/datenschutz/PluginsSection";
import { RightsSection } from "@/content/datenschutz/RightsSection";
import { SecuritySection } from "@/content/datenschutz/SecuritySection";
import { ServicesSection } from "@/content/datenschutz/ServicesSection";
import { SocialMediaSection } from "@/content/datenschutz/SocialMediaSection";

export function DatenschutzPage() {
  return (
    <SectionLight title="Datenschutz">
      <p>
        <strong>Datenschutzhinweise pulsarmed.de</strong>
      </p>
      <p>
        <strong>
          und zugleich Information der Betroffenen gemäß Artikel 13 und Artikel
          14 DSGVO
        </strong>
      </p>

      <GeneralSection />
      <ServicesSection />
      <PluginsSection />
      <OffersSection />
      <OwnServicesSection />
      <SocialMediaSection />
      <RightsSection />
      <SecuritySection />
      <GoogleSection />
    </SectionLight>
  );
}
