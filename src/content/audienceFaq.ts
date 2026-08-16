export type AudienceFaqItem = {
  id: string;
  question: string;
  answer: string | readonly string[];
  cta?: {
    to: string;
    label: string;
  };
};

export type AudienceFaqContent = {
  headingId: string;
  title?: string;
  items: readonly AudienceFaqItem[];
};

export const JOBCENTER_FAQ_ITEMS: readonly AudienceFaqItem[] = [
  {
    id: "jobcenter-leistungen",
    question: "Welche Leistungen bietet PULSAR Medical für Jobcenter?",
    answer: [
      "Wir unterstützen Jobcenter mit medizinischen und psychologischen Begutachtungen, Medical Consulting, Medical Facts sowie fachlichen Ersteinschätzungen bei Meldeversäumnissen.",
      "Alle Leistungen können persönlich, telemedizinisch oder nach Aktenlage erfolgen — abgestimmt auf Fall, Dringlichkeit und Ihre internen Prozesse.",
    ],
  },
  {
    id: "jobcenter-ablauf",
    question: "Wie läuft eine Begutachtung ab?",
    answer:
      "Nach Ihrer Anfrage koordinieren wir den Ablauf, stimmen Termine ab und führen die Begutachtung mit passenden Expert:innen durch. Anschließend erfolgt eine Qualitätssicherung, bevor Sie das Gutachten erhalten. Rückfragen klären wir bei Bedarf im Teamgespräch.",
    cta: { to: "/ueber-uns", label: "Ablauf besprechen" },
  },
  {
    id: "jobcenter-dauer",
    question: "Wie schnell erhalten wir ein Ergebnis?",
    answer:
      "Die Dauer hängt von Fragestellung, Unterlagenlage und Begutachtungsform ab. In der Regel stimmen wir zu Beginn einen realistischen Zeitrahmen ab — bei dringenden Fällen sind auch beschleunigte Prozesse möglich.",
  },
  {
    id: "jobcenter-datenschutz",
    question: "Wie sicher sind unsere Daten?",
    answer:
      "Wir arbeiten DSGVO-konform mit klaren Prozessen für Datenschutz, Zugriffskontrolle und Dokumentation. Auf Wunsch stimmen wir Details zu Auftragsverarbeitung und Schnittstellen mit Ihrer IT ab.",
  },
  {
    id: "jobcenter-start",
    question: "Wie können wir starten?",
    answer:
      "Kontaktieren Sie uns für ein unverbindliches Erstgespräch. Wir klären Ihre Fragestellung, empfehlen eine passende Begutachtungsform und skizzieren den weiteren Ablauf für Ihr Jobcenter.",
    cta: { to: "/ueber-uns", label: "Beratungstermin anfragen" },
  },
];
