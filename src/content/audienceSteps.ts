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
import { PROCESS_DETAIL_CTA } from "@/content/cta";

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

const SHARED_PROCESS_STEPS = {
  anfrage: {
    title: "Anfrage",
    description:
      "Sie schildern Ihre Fragestellung, den Umfang und den gewünschten Zeitrahmen. Gemeinsam klären wir, welche Begutachtungsform und welche Fachrichtungen benötigt werden.",
    icon: Send,
  },
  terminplanungVersichert: {
    title: "Terminplanung",
    description:
      "Wir planen Termine mit den versicherten Personen und den eingesetzten Fachkräften – einzeln, gebündelt und bei Bedarf direkt vor Ort.",
    icon: CalendarClock,
  },
  begutachtung: {
    title: "Begutachtung",
    description:
      "Die eingesetzten Fachkräfte führen die vereinbarten Begutachtungen persönlich, telemedizinisch oder nach Aktenlage durch.",
    icon: Stethoscope,
  },
  qualitaet: {
    title: "Qualitätssicherung",
    description:
      "Vor der Bereitstellung prüfen wir, ob alle vereinbarten Zielfragen beantwortet und die Ergebnisse vollständig aufbereitet sind.",
    icon: ShieldCheck,
  },
  ergebnisse: {
    title: "Ergebnisse",
    description:
      "Sie erhalten die vereinbarten Gutachten oder fachlichen Einschätzungen über vorab abgestimmte und geschützte Übermittlungswege.",
    icon: FileCheck,
  },
  rueckfragen: {
    title: "Rückfragen",
    description:
      "Ihre feste Projektkoordination bleibt auch nach Abschluss für organisatorische Rückfragen und weitere Abstimmungen erreichbar.",
    icon: MessageCircle,
  },
} as const;

const SHARED_PROJEKTAUFBAU: AudienceProcessStep = {
  title: "Projektaufbau",
  description:
    "Wir stimmen Zielfragen, Unterlagen, Kommunikationswege und Zuständigkeiten ab. Eine feste Projektkoordination übernimmt die organisatorische Steuerung.",
  icon: ClipboardList,
};

export const DEFAULT_AUDIENCE_PROCESS_STEPS: readonly AudienceProcessStep[] = [
  SHARED_PROCESS_STEPS.anfrage,
  SHARED_PROJEKTAUFBAU,
  {
    title: "Terminplanung",
    description:
      "Wir planen Termine mit den betroffenen Personen und den eingesetzten Fachkräften – einzeln, gebündelt und bei Bedarf direkt vor Ort.",
    icon: CalendarClock,
  },
  SHARED_PROCESS_STEPS.begutachtung,
  SHARED_PROCESS_STEPS.qualitaet,
  SHARED_PROCESS_STEPS.ergebnisse,
  SHARED_PROCESS_STEPS.rueckfragen,
];

export const PROCESS_PAGE: AudienceStepsTimelineContent = {
  headingId: "ablauf-steps-heading",
  title: "Wie läuft ein Begutachtungsauftrag ab?",
  subtitle:
    "PULSAR Medical organisiert den Auftrag von der ersten Anfrage bis zur sicheren Bereitstellung der Ergebnisse. Sie haben dabei feste Zuständigkeiten und klare Abläufe.",
  steps: DEFAULT_AUDIENCE_PROCESS_STEPS,
};

export const PROCESS_PREVIEW = {
  promise:
    "Von der ersten Anfrage bis zur sicheren Ergebnisübermittlung – in sieben klaren Schritten.",
  cta: PROCESS_DETAIL_CTA,
} as const;

export const JOBCENTER_PROCESS: AudienceStepsTimelineContent = {
  headingId: "jobcenter-steps-heading",
  title: "Wie läuft ein Begutachtungsauftrag ab?",
  subtitle:
    "PULSAR Medical organisiert den Auftrag von der ersten Anfrage bis zur sicheren Bereitstellung der Ergebnisse. Ihr Jobcenter hat dabei feste Zuständigkeiten und klare Abläufe.",
  steps: [
    SHARED_PROCESS_STEPS.anfrage,
    {
      title: "Projektaufbau",
      description:
        "Wir stimmen Zielfragen, Unterlagen, Kommunikationswege und Zuständigkeiten mit Ihrem Jobcenter ab. Eine feste Projektkoordination übernimmt die organisatorische Steuerung.",
      icon: ClipboardList,
    },
    {
      title: "Terminplanung",
      description:
        "Wir planen Termine mit den leistungsberechtigten Personen und den eingesetzten Fachkräften – einzeln, gebündelt und bei Bedarf direkt vor Ort.",
      icon: CalendarClock,
    },
    SHARED_PROCESS_STEPS.begutachtung,
    SHARED_PROCESS_STEPS.qualitaet,
    SHARED_PROCESS_STEPS.ergebnisse,
    SHARED_PROCESS_STEPS.rueckfragen,
  ],
};

export const BERUFSGENOSSENSCHAFTEN_PROCESS: AudienceStepsTimelineContent = {
  headingId: "berufsgenossenschaften-steps-heading",
  title: "Wie läuft ein Begutachtungsauftrag ab?",
  subtitle:
    "PULSAR Medical organisiert den Auftrag von der ersten Anfrage bis zur sicheren Bereitstellung der Ergebnisse. Ihre Berufsgenossenschaft hat dabei feste Zuständigkeiten und klare Abläufe.",
  steps: [
    SHARED_PROCESS_STEPS.anfrage,
    {
      title: "Projektaufbau",
      description:
        "Wir stimmen Zielfragen, Unterlagen, Kommunikationswege und Zuständigkeiten mit Ihrer Berufsgenossenschaft ab. Eine feste Projektkoordination übernimmt die organisatorische Steuerung.",
      icon: ClipboardList,
    },
    SHARED_PROCESS_STEPS.terminplanungVersichert,
    SHARED_PROCESS_STEPS.begutachtung,
    SHARED_PROCESS_STEPS.qualitaet,
    SHARED_PROCESS_STEPS.ergebnisse,
    SHARED_PROCESS_STEPS.rueckfragen,
  ],
};

export const RUECKVERSICHERER_PROCESS: AudienceStepsTimelineContent = {
  headingId: "rueckversicherer-steps-heading",
  title: "Wie läuft ein Begutachtungsauftrag ab?",
  subtitle:
    "PULSAR Medical organisiert den Auftrag von der ersten Anfrage bis zur sicheren Bereitstellung der Ergebnisse. Ihr Unternehmen hat dabei feste Zuständigkeiten und klare Abläufe.",
  steps: [
    SHARED_PROCESS_STEPS.anfrage,
    {
      title: "Projektaufbau",
      description:
        "Wir stimmen Zielfragen, Unterlagen, Kommunikationswege und Zuständigkeiten mit Ihrem Unternehmen ab. Eine feste Projektkoordination übernimmt die organisatorische Steuerung.",
      icon: ClipboardList,
    },
    SHARED_PROCESS_STEPS.terminplanungVersichert,
    SHARED_PROCESS_STEPS.begutachtung,
    SHARED_PROCESS_STEPS.qualitaet,
    SHARED_PROCESS_STEPS.ergebnisse,
    SHARED_PROCESS_STEPS.rueckfragen,
  ],
};
