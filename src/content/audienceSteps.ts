import {
  CalendarClock,
  ClipboardList,
  FileCheck,
  MessageCircle,
  Send,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type AudienceProcessStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type AudienceStepsTimelineContent = {
  headingId: string;
  title: string;
  subtitle: string;
  stepLabelPrefix?: string;
  steps: readonly AudienceProcessStep[];
};

export const DEFAULT_AUDIENCE_PROCESS_STEPS: readonly AudienceProcessStep[] = [
  {
    title: "Anfrage",
    description:
      "Sie schildern Fall, Ziel und Zeitrahmen — wir klären, welche Begutachtungsform und fachliche Expertise passen.",
    icon: Send,
  },
  {
    title: "Projektkoordination",
    description:
      "Wir strukturieren Ablauf, Ansprechpersonen und Unterlagen. Sie erhalten einen klaren Plan statt unübersichtlicher Einzelschritte.",
    icon: ClipboardList,
  },
  {
    title: "Terminierung",
    description:
      "Termine werden mit Betroffenen, Expert:innen und Ihrem Team abgestimmt — persönlich, telemedizinisch oder nach Aktenlage.",
    icon: CalendarClock,
  },
  {
    title: "Begutachtung",
    description:
      "Fachärzt:innen und Psycholog:innen führen die Begutachtung durch und werten alle relevanten Informationen aus.",
    icon: Stethoscope,
  },
  {
    title: "Qualitätssicherung",
    description:
      "Jedes Ergebnis durchläuft eine interne fachliche Prüfung, bevor es an Sie weitergegeben wird.",
    icon: ShieldCheck,
  },
  {
    title: "Gutachten",
    description:
      "Sie erhalten ein verständliches, strukturiertes Gutachten als belastbare Grundlage für Ihre Entscheidung.",
    icon: FileCheck,
  },
  {
    title: "Rückfragen",
    description:
      "Bei Bedarf klären wir offene Punkte im Teamgespräch — damit das Ergebnis im Alltag sicher anwendbar bleibt.",
    icon: MessageCircle,
  },
];
