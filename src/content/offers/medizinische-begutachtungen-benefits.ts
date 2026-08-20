import {
  Globe,
  MonitorSmartphone,
  ShieldCheck,
  Stethoscope,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import type { OfferBenefitsContent } from "@/content/offerBenefits";

export const MEDIZINISCHE_BEGUTACHTUNGEN_BENEFITS: OfferBenefitsContent = {
  headingId: "medizinische-begutachtungen-benefits-heading",
  title: "Warum mit PULSAR Medical?",
  subtitle:
    "PULSAR Medical übernimmt die Organisation medizinischer Begutachtungen – von der Auswahl der passenden Fachrichtung über die Terminplanung bis zur sicheren Bereitstellung der Ergebnisse.",
  cta: { label: "Unverbindlich anfragen", to: "/kontakt" },
  items: [
    {
      title: "Bundesweit verfügbares Netzwerk",
      description:
        "PULSAR Medical setzt die Fachrichtung ein, die zu Ihrer Fragestellung passt – bundesweit und auch bei komplexen Fällen oder größeren Auftragsvolumen.",
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
      title: "Medizinische Expertise passend zum Fall",
      description:
        "Relevante Befunde, Fragestellungen und Anforderungen bestimmen, welche medizinische Fachkraft für den jeweiligen Auftrag eingesetzt wird.",
      icon: Stethoscope,
      iconColor: "#7aaec4",
    },
    {
      title: "Flexible Durchführungsformen",
      description:
        "Persönlich, telemedizinisch oder nach Aktenlage: Die Durchführung richtet sich nach der Fragestellung und den fachlichen Anforderungen des einzelnen Falls.",
      icon: MonitorSmartphone,
      iconColor: "#e0f4fa",
    },
    {
      title: "Planbare Kapazitäten",
      description:
        "Vom einzelnen Auftrag bis zu gebündelten Terminen und langfristigen Projekten plant PULSAR Medical die erforderlichen Kapazitäten passend zu Ihrem Bedarf.",
      icon: TrendingUp,
      iconColor: "#4db8e8",
    },
    {
      title: "Sichere Datenprozesse",
      description:
        "Sensible Gesundheitsdaten werden über abgestimmte, geschützte und datenschutzkonforme Wege verarbeitet und ausschließlich berechtigten Stellen bereitgestellt.",
      icon: ShieldCheck,
      iconColor: "#93d9ff",
    },
  ],
};
