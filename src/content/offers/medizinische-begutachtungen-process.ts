import {
  CalendarClock,
  ClipboardList,
  FileCheck,
  Send,
  Stethoscope,
} from "lucide-react";
import type { OfferProcessContent } from "@/content/offerProcess";

export const MEDIZINISCHE_BEGUTACHTUNGEN_PROCESS: OfferProcessContent = {
  headingId: "medizinische-begutachtungen-process-heading",
  title: "In wenigen Schritten zur medizinischen Begutachtung",
  subtitle:
    "Von der ersten Anfrage bis zum fertigen Gutachten begleiten wir Sie strukturiert — transparent, terminsicher und fachlich abgesichert.",
  steps: [
    {
      stageLabel: "Schritt 1",
      title: "Fall und Ziel klären",
      description: [
        "Sie schildern Fall, Fragestellung und Zeitrahmen — wir empfehlen die passende Begutachtungsform.",
        "Gemeinsam klären wir, welche fachliche Expertise und Unterlagen für Ihren Auftrag benötigt werden.",
        "Auf Wunsch besprechen wir den Ablauf in einem unverbindlichen Erstgespräch.",
      ],
      icon: Send,
      imageSrc: "/pulsarmedical-jobcenter-1.jpg",
      imageAlt: "Erstgespräch zur medizinischen Begutachtung",
    },
    {
      stageLabel: "Schritt 2",
      title: "Projekt und Ablauf strukturieren",
      description: [
        "Wir strukturieren den Ablauf, benennen Ansprechpersonen und definieren den Unterlagenbedarf.",
        "Sie erhalten einen klaren Plan statt unübersichtlicher Einzelschritte.",
        "Termine, Kapazitäten und Kommunikationswege werden zentral koordiniert.",
      ],
      icon: ClipboardList,
      imageSrc: "/pulsarmedical-jobcenter-2.jpg",
      imageAlt: "Koordination und Planung der Begutachtung",
    },
    {
      stageLabel: "Schritt 3",
      title: "Termine abstimmen",
      description: [
        "Termine werden mit Betroffenen, Expert:innen und Ihrem Team abgestimmt.",
        "Die Durchführung erfolgt persönlich, telemedizinisch oder nach Aktenlage — je nach Fall.",
        "Bei dringenden Fällen sind auch beschleunigte Prozesse möglich.",
      ],
      icon: CalendarClock,
      imageSrc: "/pulsarmedical-jobcenter-3.jpg",
      imageAlt: "Terminabstimmung für die Begutachtung",
    },
    {
      stageLabel: "Schritt 4",
      title: "Begutachtung durchführen",
      description: [
        "Fachärzt:innen führen die medizinische Begutachtung durch und werten alle relevanten Informationen aus.",
        "Körperliche, funktionelle und leistungsbezogene Aspekte werden nachvollziehbar eingeordnet.",
        "Bei Bedarf fließen vorhandene Befunde und Unterlagen in die Beurteilung ein.",
      ],
      icon: Stethoscope,
      imageSrc: "/pulsarmedical-jobcenter-1.jpg",
      imageAlt: "Medizinische Begutachtung durch Fachärzt:innen",
    },
    {
      stageLabel: "Schritt 5",
      title: "Gutachten erhalten",
      description: [
        "Jedes Ergebnis durchläuft eine interne fachliche Qualitätssicherung.",
        "Sie erhalten ein verständliches, strukturiertes Gutachten als belastbare Entscheidungsgrundlage.",
        "Bei Bedarf klären wir offene Punkte im Teamgespräch.",
      ],
      icon: FileCheck,
      imageSrc: "/pulsarmedical-jobcenter-2.jpg",
      imageAlt: "Fertiges medizinisches Gutachten",
    },
  ],
};
