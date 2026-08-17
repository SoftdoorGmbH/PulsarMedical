import { Building2, Landmark, Layers, Shield } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const CONTACT_EMAIL = "kontakt@pulsarmed.de";

export type ContactCard = {
  id: string;
  title: string;
  description: string;
  cta: string;
  icon: LucideIcon;
};

export const CONTACT_PAGE = {
  lead: "Ob Jobcenter, Berufsgenossenschaft, Rückversicherer oder ein konkretes Begutachtungsprojekt: Wählen Sie Ihren Einstieg — wir klären mit Ihnen den passenden nächsten Schritt.",
  cards: [
    {
      id: "jobcenter",
      title: "Für Jobcenter",
      description:
        "Wenn gesundheitliche oder psychische Belastungen die Integration erschweren, schafft PULSAR Medical Klarheit über Leistungsvermögen, Ressourcen und den konkreten Unterstützungsbedarf.",
      cta: "Kontakt aufnehmen",
      icon: Building2,
    },
    {
      id: "berufsgenossenschaften",
      title: "Für Berufsgenossenschaften",
      description:
        "PULSAR Medical ordnet Unfallfolgen, funktionelle Einschränkungen und die weitere Entwicklung fachlich ein — für eine gezielte Reha-Planung und berufliche Wiedereingliederung.",
      cta: "Kontakt aufnehmen",
      icon: Shield,
    },
    {
      id: "rueckversicherer",
      title: "Für Rückversicherer",
      description:
        "Wir bewerten die berufliche Leistungsfähigkeit, relevante funktionelle Einschränkungen und die Prognose — damit Leistungsentscheidungen auf einer fundierten medizinischen Grundlage entstehen.",
      cta: "Kontakt aufnehmen",
      icon: Landmark,
    },
    {
      id: "angebote",
      title: "Fragen zu unseren Angeboten?",
      description:
        "Von medizinischen und psychologischen bis zu arbeits- und sozialmedizinischen Begutachtungen: Entdecken Sie, welche fachliche Perspektive zu Ihrer Fragestellung passt.",
      cta: "Anfrage senden",
      icon: Layers,
    },
  ] satisfies ContactCard[],
};
