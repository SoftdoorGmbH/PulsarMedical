export type AudiencePainPoint = {
  quote: string;
  title: string;
  description: string;
};

export type AudiencePainPointsContent = {
  headingId: string;
  title: string;
  subtitle: string;
  painLabel?: string;
  solutionEyebrow?: string;
  items: readonly AudiencePainPoint[];
};

export const DEFAULT_PAIN_LABEL = "Herausforderung";
export const DEFAULT_SOLUTION_EYEBROW = "So unterstützt PULSAR";

export const JOBCENTER_PAIN_POINTS: AudiencePainPointsContent = {
  headingId: "jobcenter-pain-points-heading",
  title: "Wenn gesundheitliche Fragen die Integrationsplanung erschweren",
  subtitle:
    "PULSAR Medical hilft Jobcentern, gesundheitliche und psychische Belastungen einzuordnen, den Klärungsbedarf zu bestimmen und Begutachtungen zentral zu organisieren.",
  items: [
    {
      quote:
        "Bei komplexen Fällen fehlt oft die fachliche Grundlage, um gesundheitliche Einschränkungen sicher einzuordnen.",
      title: "Passende Expertise für komplexe Einzelfälle einsetzen",
      description:
        "Passende Fachkräfte beurteilen die gesundheitliche Situation, das Leistungsvermögen und den weiteren Klärungsbedarf anhand der vereinbarten Zielfragen.",
    },
    {
      quote:
        "Meldeversäumnisse lassen sich schwer einordnen, wenn psychische Belastungen eine Rolle spielen könnten.",
      title: "Meldeversäumnisse frühzeitig fachlich klären",
      description:
        "PULSAR Medical ermöglicht zeitnahe persönliche Vorstellungen, um einzuschätzen, ob gesundheitliche oder psychische Belastungen das Meldeverhalten beeinflussen können.",
    },
    {
      quote:
        "Externe Begutachtungen binden Zeit, wenn Fachkräfte, Termine und Unterlagen einzeln koordiniert werden müssen.",
      title: "Begutachtungen zentral organisieren",
      description:
        "Eine feste Projektkoordination steuert Fachkräfte, Termine, Unterlagen und Kommunikation – persönlich, telemedizinisch oder nach Aktenlage.",
    },
    {
      quote:
        "Die Klärung beruflicher Möglichkeiten unter Berücksichtigung gesundheitlicher Einschränkungen, individueller Belastbarkeit und konkreter Anforderungen ist komplex.",
      title: "Berufliche Perspektiven fundiert einordnen",
      description:
        "PULSAR Medical bewertet, welche Tätigkeiten und Entwicklungsschritte unter Berücksichtigung der gesundheitlichen Situation realistisch sind. Dafür werden individuelle Belastbarkeit, und konkrete berufliche Anforderungen gemeinsam betrachtet.",
    },
  ],
};

export const BERUFSGENOSSENSCHAFTEN_PAIN_POINTS: AudiencePainPointsContent = {
  headingId: "berufsgenossenschaften-pain-points-heading",
  title: "Wenn Unfallfolgen die berufliche Wiedereingliederung erschweren",
  subtitle:
    "PULSAR Medical unterstützt Berufsgenossenschaften dabei, Unfallfolgen und gesundheitliche Einschränkungen einzuordnen, die Arbeitsfähigkeit zu beurteilen und Begutachtungsaufträge zentral zu organisieren.",
  items: [
    {
      quote:
        "Es muss geklärt werden, welche Unfallfolgen oder Folgen einer Berufskrankheit weiterhin bestehen und die Arbeitsfähigkeit beeinflussen.",
      title: "Unfallfolgen und Leistungsvermögen beurteilen",
      description:
        "Passende Fachkräfte beurteilen Unfallfolgen, funktionelle Einschränkungen und verbliebenes Leistungsvermögen im Zusammenhang mit der beruflichen Tätigkeit.",
    },
    {
      quote:
        "Es ist unklar, ob die versicherte Person ihre bisherige Tätigkeit wieder aufnehmen kann.",
      title: "Arbeitsfähigkeit realistisch einschätzen",
      description:
        "PULSAR Medical beurteilt, ob und unter welchen Bedingungen die bisherige Tätigkeit wieder aufgenommen werden kann.",
    },
    {
      quote:
        "Komplexe Fälle erfordern mehrere medizinische oder psychologische Fachperspektiven.",
      title: "Passende Fachrichtungen für komplexe Fälle einsetzen",
      description:
        "Medizinische, psychologische, psychiatrische und arbeitsbezogene Fachkräfte werden eingesetzt, wenn sie für die vereinbarten Fragen erforderlich sind.",
    },
    {
      quote:
        "Externe Begutachtungen binden Zeit, wenn Fachkräfte, Termine und Unterlagen einzeln koordiniert werden müssen.",
      title: "Begutachtungen zentral organisieren",
      description:
        "Eine feste Projektkoordination steuert Fachkräfte, Termine, Unterlagen und Kommunikation. Die Begutachtung erfolgt persönlich, telemedizinisch oder nach Aktenlage.",
    },
  ],
};

export const RUECKVERSICHERER_PAIN_POINTS: AudiencePainPointsContent = {
  headingId: "rueckversicherer-pain-points-heading",
  title: "Wenn medizinische Fragen die Leistungsprüfung erschweren",
  subtitle:
    "PULSAR Medical hilft Rückversicherern, funktionelle Einschränkungen einzuordnen, die berufliche Leistungsfähigkeit zu beurteilen und Begutachtungsaufträge zentral zu organisieren.",
  items: [
    {
      quote:
        "Es muss geklärt werden, welche gesundheitlichen Einschränkungen die berufliche Leistungsfähigkeit tatsächlich beeinflussen.",
      title: "Funktionelle Einschränkungen präzise einordnen",
      description:
        "Passende Fachkräfte beurteilen funktionelle Einschränkungen und ordnen ein, wie sie sich auf die berufliche Leistungsfähigkeit auswirken.",
    },
    {
      quote:
        "Es ist unklar, ob die versicherte Person ihre bisherige berufliche Tätigkeit noch ausüben kann.",
      title: "Berufliche Leistungsfähigkeit realistisch beurteilen",
      description:
        "PULSAR Medical beurteilt, ob und in welchem Umfang die bisherige berufliche Tätigkeit noch ausgeübt werden kann.",
    },
    {
      quote:
        "Es muss eingeschätzt werden, wie sich Gesundheitszustand und berufliche Leistungsfähigkeit voraussichtlich entwickeln.",
      title: "Prognosen fachlich bewerten",
      description:
        "PULSAR Medical beurteilt den bisherigen Verlauf und die weitere Prognose, soweit diese für die Leistungsentscheidung relevant sind.",
    },
    {
      quote:
        "Externe Begutachtungen binden Zeit, wenn Fachkräfte, Termine und Unterlagen einzeln koordiniert werden müssen.",
      title: "Begutachtungen zentral organisieren",
      description:
        "Eine feste Projektkoordination steuert Fachkräfte, Termine, Unterlagen und Kommunikation. Die Begutachtung erfolgt persönlich, telemedizinisch oder nach Aktenlage.",
    },
  ],
};
