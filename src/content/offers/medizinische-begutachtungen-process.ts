import {
  ClipboardList,
  FileCheck,
  Send,
  Stethoscope,
} from "lucide-react";
import type { OfferProcessContent } from "@/content/offerProcess";

export const MEDIZINISCHE_BEGUTACHTUNGEN_PROCESS: OfferProcessContent = {
  headingId: "medizinische-begutachtungen-process-heading",
  title: "Wie läuft eine medizinische Begutachtung ab?",
  subtitle:
    "Von der ersten Fragestellung bis zur sicheren Bereitstellung der Ergebnisse übernimmt PULSAR Medical die Organisation und sorgt für einen klar abgestimmten Ablauf.",
  steps: [
    {
      stageLabel: "Schritt 1",
      title: "Fragestellung und Auftrag gemeinsam klären",
      description: [
        "Zu Beginn stimmen wir mit Ihnen ab, welche Fragen beantwortet werden sollen, welche Unterlagen benötigt werden und in welchem Umfang die Begutachtung durchgeführt wird.",
        "Gemeinsam legen wir fest, welche medizinische Fachrichtung erforderlich ist und welche Durchführungsform zum Fall und zu Ihren organisatorischen Anforderungen passt.",
        "Auf dieser Grundlage richten wir den Auftrag, die Kommunikation und den weiteren Ablauf verbindlich ein.",
      ],
      icon: Send,
      imageSrc: "/pulsarmedical-jobcenter-1.jpg",
      imageAlt: "Abstimmung der medizinischen Fragestellung",
    },
    {
      stageLabel: "Schritt 2",
      title: "Passende medizinische Expertise gezielt einsetzen",
      description: [
        "PULSAR Medical wählt die Fachkraft aus, die für die jeweilige Fragestellung und den konkreten Fall die erforderliche Expertise mitbringen.",
        "Dabei berücksichtigen wir die benötigte Fachrichtung, den Durchführungsort und die vereinbarten Kapazitäten.",
        "Bei komplexen Fragestellungen beziehen wir bei Bedarf weitere medizinische oder psychologische Perspektiven ein.",
      ],
      icon: Stethoscope,
      imageSrc: "/pulsarmedical-jobcenter-2.jpg",
      imageAlt: "Auswahl der medizinischen Fachkraft",
    },
    {
      stageLabel: "Schritt 3",
      title: "Termine, Unterlagen und Durchführung zentral steuern",
      description: [
        "Die feste Projektkoordination organisiert Termine, bereitet Unterlagen vor und begleitet die Kommunikation zwischen allen Beteiligten.",
        "Die Begutachtung erfolgt persönlich, telemedizinisch oder nach Aktenlage – abhängig von der Fragestellung und den fachlichen Anforderungen.",
        "Bei gebündelten Terminen oder größeren Fallzahlen können Begutachtungen auch bundesweit direkt vor Ort umgesetzt werden.",
      ],
      icon: ClipboardList,
      imageSrc: "/pulsarmedical-jobcenter-3.jpg",
      imageAlt: "Zentrale Steuerung von Terminen und Unterlagen",
    },
    {
      stageLabel: "Schritt 4",
      title: "Ergebnisse sicher erhalten und weiterverwenden",
      description: [
        "Nach Abschluss der Begutachtung erhalten Sie eine strukturierte medizinische Beurteilung, die die vereinbarten Fragen nachvollziehbar beantwortet.",
        "Ergebnisse und Unterlagen werden über vorab abgestimmte, geschützte und datenschutzkonforme Wege bereitgestellt.",
        "Ihre feste Projektkoordination bleibt auch nach Abschluss für organisatorische Rückfragen und weitere Abstimmungen erreichbar.",
      ],
      icon: FileCheck,
      imageSrc: "/pulsarmedical-jobcenter-1.jpg",
      imageAlt: "Bereitstellung der medizinischen Ergebnisse",
    },
  ],
};
