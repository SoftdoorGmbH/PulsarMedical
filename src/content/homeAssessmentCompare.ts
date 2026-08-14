const TRADITIONAL_ITEMS = [
  "Geeignete Fachkräfte, verfügbare Kapazitäten und regionale Durchführungsmöglichkeiten müssen für jeden Auftrag einzeln abgestimmt werden.",
  "Termine, Unterlagen, Rückfragen und die Kommunikation zwischen allen Beteiligten müssen über mehrere Stellen koordiniert werden.",
  "Mit steigenden Fallzahlen müssen zusätzliche Kapazitäten, Termine und Abstimmungen für jeden einzelnen Fall neu organisiert werden.",
  "Persönliche Termine, Begutachtungen nach Aktenlage und digitale Durchführungen müssen jeweils separat organisiert werden.",
  "Ergebnisse und sensible Gesundheitsdaten müssen für jeden Auftrag einzeln übermittelt, zugeordnet und nachgehalten werden.",
] as const;

const PULSAR_ITEMS = [
  "PULSAR stellt passende Fachkräfte aus einem bundesweiten Netzwerk zusammen und plant Kapazitäten sowie Durchführung zentral.",
  "Eine feste Projektkoordination steuert Termine, Unterlagen und Kommunikation zentral und bleibt während des gesamten Auftrags erreichbar.",
  "PULSAR plant Kapazitäten projektbezogen und erweitert sie bei Bedarf über das bundesweit verfügbare Expertennetzwerk.",
  "Begutachtungen erfolgen persönlich, telemedizinisch oder nach Aktenlage – bundesweit und bei Bedarf direkt vor Ort.",
  "Ergebnisse werden über vorab abgestimmte, geschützte und datenschutzkonforme Prozesse sicher bereitgestellt.",
] as const;

export const HOME_ASSESSMENT_COMPARE = {
  headline:
    "Begutachtungen, die entlasten statt zusätzlichen Aufwand zu schaffen.",
  subheadline:
    "PULSAR Medical übernimmt die gesamte Organisation Ihrer Begutachtungsaufträge – von der passenden fachlichen Besetzung bis zur sicheren Bereitstellung der Ergebnisse.",
  traditionalLabel: "Klassische Begutachtungen",
  pulsarLabel: "Mit PULSAR Medical",
  rows: TRADITIONAL_ITEMS.map((traditional, index) => ({
    traditional,
    pulsar: PULSAR_ITEMS[index]!,
  })),
};

export const HOME_ASSESSMENT_BENEFITS = {
  headline: "Weitere Vorteile mit PULSAR Medical…",
  cta: { label: "Unverbindlich anfragen", to: "/ueber-uns" },
  items: [
    {
      id: "netzwerk",
      title: "Bundesweites Expertennetzwerk",
      description:
        "Passende medizinische und psychologische Fachkräfte für unterschiedliche Fragestellungen – auch bei komplexen Fällen und größeren Auftragsvolumen.",
      iconColor: "#4db8e8",
    },
    {
      id: "koordination",
      title: "Feste Projektkoordination",
      description:
        "Eine zentrale Ansprechperson steuert Termine, Unterlagen und Kommunikation – vom Projektstart bis zur sicheren Bereitstellung der Ergebnisse.",
      iconColor: "#93d9ff",
    },
    {
      id: "durchfuehrung",
      title: "Flexible Durchführung",
      description:
        "Persönlich, telemedizinisch oder nach Aktenlage – bundesweit und bei Bedarf direkt vor Ort beim Auftraggeber.",
      iconColor: "#7aaec4",
    },
    {
      id: "projektstrukturen",
      title: "Individuelle Projektstrukturen",
      description:
        "Zielfragen, Formulare, Kapazitäten und Abläufe werden auf Ihren Auftrag und Ihre bestehenden Prozesse abgestimmt.",
      iconColor: "#e0f4fa",
    },
    {
      id: "skalierung",
      title: "Skalierbare Umsetzung",
      description:
        "Vom kompakten Pilotprojekt bis zum langfristigen Begutachtungsauftrag: Kapazitäten und Verfahren wachsen mit Ihrem Bedarf.",
      iconColor: "#4db8e8",
    },
    {
      id: "daten",
      title: "Sichere Datenprozesse",
      description:
        "Sensible Gesundheitsdaten werden über abgestimmte, geschützte Wege verarbeitet, übermittelt und ausschließlich den berechtigten Stellen bereitgestellt.",
      iconColor: "#93d9ff",
    },
  ],
} as const;
