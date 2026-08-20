import { Building2, Landmark, Layers, Shield } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const CONTACT_EMAIL = "kontakt@pulsarmed.de";

export type ContactCard = {
  id: string;
  title: string;
  question?: string;
  badge?: string;
  description: string;
  cta: string;
  quote?: string;
  attribution?: string;
  icon: LucideIcon;
};

export const CONTACT_PAGE = {
  lead: "Sie planen einen Begutachtungsauftrag, möchten eine konkrete Fallfrage einordnen oder suchen einen verlässlichen Partner für wiederkehrende Projekte? Dann sind wir nur eine Nachricht entfernt!",
  badges: [
    "Für institutionelle Auftraggeber",
    "Bundesweit organisierbar",
    "Feste Projektkoordination",
  ],
  cards: [
    {
      id: "jobcenter",
      title: "Für Jobcenter",
      question: "Sie möchten gesundheitliche Fragen in der Fallarbeit fachlich klären?",
      badge: "Weniger als 2 Minuten",
      description:
        "Gesundheitliche oder psychische Belastungen können Mitwirkung und Integration erschweren. Schildern Sie kurz Ihre Fragestellung – wir klären, welche Einschätzung oder Begutachtung passt.",
      cta: "Unverbindlich anfragen",
      quote:
        "„Die fachliche Einschätzung hat uns geholfen, den Fall wieder klar einzuordnen und die nächsten Schritte gezielt zu planen.“",
      attribution: "Mitarbeitende:r eines Jobcenters",
      icon: Building2,
    },
    {
      id: "berufsgenossenschaften",
      title: "Für Berufsgenossenschaften",
      question: "Sie möchten Unfallfolgen und Arbeitsfähigkeit sicher einordnen?",
      badge: "Weniger als 2 Minuten",
      description:
        "Sie benötigen eine Einschätzung zu Unfallfolgen, Belastbarkeit oder Wiedereingliederung? Schildern Sie kurz Ihren Auftrag – wir stimmen die passende Begutachtung mit Ihnen ab.",
      cta: "Unverbindlich anfragen",
      quote:
        "„Die relevanten gesundheitlichen und beruflichen Aspekte wurden nachvollziehbar zusammengeführt. Das war eine gute Grundlage für die weitere Planung.“",
      attribution: "Mitarbeitende:r einer Berufsgenossenschaft",
      icon: Shield,
    },
    {
      id: "rueckversicherer",
      title: "Für Rückversicherer",
      question: "Sie möchten einen komplexen Leistungsfall medizinisch bewerten?",
      badge: "Weniger als 2 Minuten",
      description:
        "Sie möchten berufliche Leistungsfähigkeit, funktionelle Einschränkungen oder Prognosen beurteilen lassen? Schildern Sie kurz Ihre Fragestellung – wir organisieren die passende Expertise.",
      cta: "Unverbindlich anfragen",
      quote:
        "„Die Einschätzung hat die medizinisch relevanten Fragen klar strukturiert und unsere Leistungsprüfung wirkungsvoll unterstützt.“",
      attribution: "Mitarbeitende:r eines Rückversicherers",
      icon: Landmark,
    },
    {
      id: "angebote",
      title: "Für weitere institutionelle Auftraggeber",
      question: "Sie benötigen Expertise für eine komplexe Gesundheitsfrage?",
      badge: "Weniger als 2 Minuten",
      description:
        "Sie suchen eine medizinische, psychologische oder fachübergreifende Begutachtung? Schildern Sie kurz Ihr Anliegen – wir klären gemeinsam die passende Umsetzung.",
      cta: "Unverbindlich anfragen",
      quote:
        "„Unsere spezifische Fragestellung wurde schnell verstanden und professionell in eine passende Begutachtung überführt.“",
      attribution: "Institutionelle:r Auftraggeber:in",
      icon: Layers,
    },
  ] satisfies ContactCard[],
};
