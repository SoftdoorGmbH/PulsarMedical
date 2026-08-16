import { Handshake, MessageSquare, Rocket } from "lucide-react";
import type { OfferPartnershipContent } from "@/content/offerPartnership";

export const MEDIZINISCHE_BEGUTACHTUNGEN_PARTNERSHIP: OfferPartnershipContent =
  {
    headingId: "medizinische-begutachtungen-partnership-heading",
    title: "Gemeinsam zum belastbaren Ergebnis",
    subtitle:
      "Wir lernen Ihre Anforderungen kennen, planen den passenden Ablauf und begleiten Sie auch über einzelne Fälle hinaus — transparent und auf Augenhöhe.",
    steps: [
      {
        number: "01",
        title: "Unverbindliche Beratung",
        description:
          "In einem Erstgespräch klären wir Ihre Fragestellung, typische Fälle und interne Prozesse. So verstehen wir, welche Begutachtungsform, Kapazitäten und Expertise wirklich passen.",
        icon: MessageSquare,
      },
      {
        number: "02",
        title: "Ablauf und Angebot",
        description:
          "Wir skizzieren den konkreten Ablauf, benennen Unterlagen und Zeitrahmen und erstellen ein Angebot, das auf Ihren Bedarf zugeschnitten ist — persönlich, telemedizinisch oder nach Aktenlage.",
        icon: Handshake,
      },
      {
        number: "03",
        title: "Langfristige Partnerschaft",
        description:
          "Wir setzen auf verlässliche Zusammenarbeit statt Einzellösungen. Feste Ansprechpersonen, klare Prozesse und skalierbare Kapazitäten sorgen dafür, dass Sie auch bei steigenden Fallzahlen entlastet bleiben.",
        icon: Rocket,
      },
    ],
  };
