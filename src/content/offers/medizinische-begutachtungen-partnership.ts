import { FileText, User, Video } from "lucide-react";
import type { OfferPartnershipContent } from "@/content/offerPartnership";

export const MEDIZINISCHE_BEGUTACHTUNGEN_PARTNERSHIP: OfferPartnershipContent =
  {
    headingId: "medizinische-begutachtungen-partnership-heading",
    title: "Welche Durchführungsarten gibt es?",
    subtitle:
      "Je nach Fragestellung, Aktenlage und fachlicher Erforderlichkeit erfolgt die Begutachtung persönlich, telemedizinisch oder auf Grundlage vorhandener Unterlagen.",
    steps: [
      {
        number: "01",
        title: "Persönliche Begutachtung",
        description:
          "Die zu begutachtende Person stellt sich bei einer passenden medizinischen Fachkraft vor. Untersuchung, Anamnese und Rückfragen erfolgen direkt im Termin – bundesweit und bei Bedarf auch vor Ort beim Auftraggeber.",
        icon: User,
      },
      {
        number: "02",
        title: "Telemedizinische Begutachtung",
        description:
          "Die zu begutachtende Person stellt sich per Video bei einer passenden medizinischen Fachkraft vor. Befunde, Unterlagen und Rückfragen werden im Gespräch einbezogen, wenn Fragestellung und individuelle Situation dies zulassen.",
        icon: Video,
      },
      {
        number: "03",
        title: "Begutachtung nach Aktenlage",
        description:
          "Die medizinische Fachkraft beurteilt vorhandene Befunde, Berichte und Unterlagen anhand der vereinbarten Zielfragen. Eine persönliche Vorstellung ist nicht erforderlich, wenn die Aktenlage für die Fragestellung ausreicht.",
        icon: FileText,
      },
    ],
  };
