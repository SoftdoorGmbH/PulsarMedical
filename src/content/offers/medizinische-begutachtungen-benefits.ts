import { Globe, Layers, MonitorSmartphone, UserCheck } from "lucide-react";
import type { OfferBenefitsContent } from "@/content/offerBenefits";

export const MEDIZINISCHE_BEGUTACHTUNGEN_BENEFITS: OfferBenefitsContent = {
  headingId: "medizinische-begutachtungen-benefits-heading",
  title: "Weitere Vorteile mit PULSAR Medical",
  cta: { label: "Unverbindlich anfragen", to: "/ueber-uns" },
  items: [
    {
      title: "Bundesweites Expertennetzwerk",
      description:
        "Passende medizinische Fachkräfte für unterschiedliche Fragestellungen – auch bei komplexen Fällen und größeren Auftragsvolumen.",
      icon: Globe,
      iconColor: "#4db8e8",
    },
    {
      title: "Feste Projektkoordination",
      description:
        "Eine zentrale Ansprechperson steuert Termine, Unterlagen und Kommunikation – vom Projektstart bis zur sicheren Bereitstellung der Ergebnisse.",
      icon: UserCheck,
      iconColor: "#93d9ff",
    },
    {
      title: "Flexible Durchführung",
      description:
        "Persönlich, telemedizinisch oder nach Aktenlage – bundesweit und bei Bedarf direkt vor Ort beim Auftraggeber.",
      icon: MonitorSmartphone,
      iconColor: "#7aaec4",
    },
    {
      title: "Individuelle Projektstrukturen",
      description:
        "Zielfragen, Formulare, Kapazitäten und Abläufe werden auf Ihren Auftrag und Ihre bestehenden Prozesse abgestimmt.",
      icon: Layers,
      iconColor: "#e0f4fa",
    },
  ],
};
