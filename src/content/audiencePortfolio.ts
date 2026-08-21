export type AudiencePortfolioItem = {
  title: string;
  chipTitle: string;
  intro: string;
  items: readonly string[];
  imageSrc: string;
  imageAlt: string;
  cta?: {
    to: string;
    label: string;
  };
};

export type AudiencePortfolioContent = {
  headingId: string;
  title: string;
  subtitle: string;
  ariaLabel: string;
  cta: {
    to: string;
    label: string;
  };
  items: readonly AudiencePortfolioItem[];
};

const CONTACT_CTA = {
  to: "/kontakt",
  label: "Unverbindlich anfragen",
} as const;

export const JOBCENTER_PORTFOLIO: AudiencePortfolioContent = {
  headingId: "jobcenter-portfolio-heading",
  title: "Die passende fachliche Unterstützung für Ihre Fallarbeit",
  subtitle:
    "Von medizinischen und psychologischen Begutachtungen bis zur fachlichen Ersteinschätzung bei Meldeversäumnissen: PULSAR Medical unterstützt Ihre Fallarbeit bei gesundheitlichen Fragestellungen.",
  ariaLabel: "Leistungsportfolio für Jobcenter",
  cta: CONTACT_CTA,
  items: [
    {
      title: "Medizinische Begutachtungen",
      chipTitle: "Medizinisch",
      intro: "Gesundheitliche Einschränkungen fundiert einordnen",
      items: [
        "Relevante Befunde, Diagnosen und Krankheitsverläufe fachlich einordnen",
        "Körperliche und funktionelle Einschränkungen nachvollziehbar bewerten",
        "Berufliche Belastbarkeit und Leistungsvermögen realistisch einschätzen",
        "Medizinische Fragen für Beratung und Integrationsplanung beantworten",
      ],
      imageSrc: "/pulsarmedical-jobcenter-1.jpg",
      imageAlt: "Medizinische Begutachtung im Beratungskontext",
      cta: {
        to: "/medizinische-begutachtungen",
        label: "Unverbindlich anfragen",
      },
    },
    {
      title: "Psychologische & psychiatrische Begutachtungen",
      chipTitle: "Psychologische & psychiatrisch",
      intro: "Psychische Belastungen und Mitwirkungsfähigkeit einordnen",
      items: [
        "Psychische Belastungen und Erkrankungen fachlich einschätzen",
        "Auswirkungen auf Belastbarkeit und Leistungsfähigkeit beurteilen",
        "Ressourcen und vorhandene Unterstützungsmöglichkeiten erkennen",
        "Weiteren Klärungs- oder Unterstützungsbedarf einordnen",
      ],
      imageSrc: "/pulsarmedical-jobcenter-2.jpg",
      imageAlt: "Psychologische Beratung und Einschätzung",
      cta: {
        to: "/psychologische-begutachtungen",
        label: "Unverbindlich anfragen",
      },
    },
    {
      title: "Arbeits- & sozialmedizinische Begutachtungen",
      chipTitle: "Arbeits- & sozialmedizinisch",
      intro: "Gesundheit und berufliche Anforderungen gemeinsam betrachten",
      items: [
        "Gesundheitliche Belastbarkeit im Arbeitskontext beurteilen",
        "Konkrete Tätigkeiten und Anforderungen berücksichtigen",
        "Soziale Rahmenbedingungen in die Einschätzung einbeziehen",
        "Realistische Einsatz- und Entwicklungsmöglichkeiten aufzeigen",
      ],
      imageSrc: "/pulsarmedical-jobcenter-3.jpg",
      imageAlt: "Arbeits- und sozialmedizinische Beratung",
      cta: {
        to: "/arbeits-sozialmedizinische-begutachtungen",
        label: "Unverbindlich anfragen",
      },
    },
    {
      title: "Fachliche Einschätzung bei Meldeversäumnissen",
      chipTitle: "Meldeversäumnisse",
      intro: "Meldeversäumnisse klären, bevor der Kontakt abbricht",
      items: [
        "Mögliche gesundheitliche oder psychische Ursachen einordnen",
        "Aktuelle Fähigkeit zur Zusammenarbeit fachlich einschätzen",
        "Unterstützungs- und Klärungsbedarf nachvollziehbar benennen",
        "Bei Bedarf direkt in eine vertiefte Begutachtung überführen",
      ],
      imageSrc: "/pulsarmedical-jobcenter-1.jpg",
      imageAlt: "Fachliche Einschätzung bei Meldeversäumnissen",
      cta: {
        to: "/meldeversaeumnisse",
        label: "Unverbindlich anfragen",
      },
    },
    {
      title: "Schulungen & Informationsangebote",
      chipTitle: "Schulungen & Informationsangebote",
      intro: "Gesundheitliche Belastungen im Beratungsalltag besser verstehen",
      items: [
        "Schulungen für Integrationsfachkräfte, Fallmanager:innen und Führungskräfte",
        "Praxisnahe Inhalte zu psychischen Belastungen und chronischen Erkrankungen",
        "Raum für konkrete Fragen aus der Arbeitspraxis Ihres Jobcenters",
        "Persönlich vor Ort oder digital durchführbar",
      ],
      imageSrc: "/pulsarmedical-jobcenter-2.jpg",
      imageAlt: "Schulungen und Informationsangebote für Jobcenter",
      cta: CONTACT_CTA,
    },
  ],
};

export const BERUFSGENOSSENSCHAFTEN_PORTFOLIO: AudiencePortfolioContent = {
  headingId: "berufsgenossenschaften-portfolio-heading",
  title: "Die passende Begutachtung für Ihren Fall",
  subtitle:
    "PULSAR Medical unterstützt Berufsgenossenschaften bei der Beurteilung von Unfallfolgen, Arbeitsfähigkeit und beruflicher Wiedereingliederung – medizinisch, psychologisch und bei Bedarf fachübergreifend.",
  ariaLabel: "Leistungsportfolio für Berufsgenossenschaften",
  cta: CONTACT_CTA,
  items: [
    {
      title: "Medizinische Begutachtungen",
      chipTitle: "Medizinisch",
      intro: "Unfallfolgen und Leistungsfähigkeit fundiert einordnen",
      items: [
        "Unfallfolgen und relevante Befunde fachlich beurteilen",
        "Körperliche und funktionelle Einschränkungen nachvollziehbar bewerten",
        "Belastbarkeit und verbliebenes Leistungsvermögen einschätzen",
        "Medizinische Fragen für Reha- und Leistungsentscheidungen beantworten",
      ],
      imageSrc: "/pulsarmedical-jobcenter-1.jpg",
      imageAlt: "Medizinische Begutachtung nach einem Unfall",
      cta: {
        to: "/medizinische-begutachtungen",
        label: "Unverbindlich anfragen",
      },
    },
    {
      title: "Psychologische & psychiatrische Begutachtungen",
      chipTitle: "Psychologische & psychiatrisch",
      intro: "Psychische Unfallfolgen und Belastungen einordnen",
      items: [
        "Psychische Belastungen und Erkrankungen fachlich einschätzen",
        "Folgen für Belastbarkeit und Arbeitsfähigkeit beurteilen",
        "Ressourcen und vorhandene Unterstützungsmöglichkeiten erkennen",
        "Relevanten Behandlungs- oder Klärungsbedarf einordnen",
      ],
      imageSrc: "/pulsarmedical-jobcenter-2.jpg",
      imageAlt: "Psychologische Begutachtung nach einem Unfall",
      cta: {
        to: "/psychologische-begutachtungen",
        label: "Mehr zu psychologischen Begutachtungen erfahren",
      },
    },
    {
      title: "Arbeits- & sozialmedizinische Begutachtungen",
      chipTitle: "Arbeits- & sozialmedizinisch",
      intro: "Gesundheitliche Belastbarkeit im Arbeitskontext bewerten",
      items: [
        "Gesundheitliche Belastbarkeit im Arbeitskontext beurteilen",
        "Konkrete Tätigkeiten und Arbeitsplatzanforderungen berücksichtigen",
        "Anpassungsbedarf für Rückkehr und Wiedereingliederung erkennen",
        "Realistische Einsatz- und Entwicklungsmöglichkeiten aufzeigen",
      ],
      imageSrc: "/pulsarmedical-jobcenter-3.jpg",
      imageAlt: "Arbeitsmedizinische Einschätzung der Belastbarkeit",
      cta: {
        to: "/arbeits-sozialmedizinische-begutachtungen",
        label: "Unverbindlich anfragen",
      },
    },
    {
      title: "Fachübergreifende Begutachtungen",
      chipTitle: "Fachübergreifend",
      intro: "Komplexe Fälle aus mehreren Perspektiven beurteilen",
      items: [
        "Medizinische, psychologische und arbeitsbezogene Aspekte verbinden",
        "Mehrere Fachrichtungen passend zur Fragestellung einsetzen",
        "Wechselwirkungen und Einschränkungen nachvollziehbar einordnen",
        "Eine gemeinsame Grundlage für den weiteren Reha-Verlauf schaffen",
      ],
      imageSrc: "/3.png.webp",
      imageAlt: "Fachübergreifende Begutachtung im Team",
      cta: {
        to: "/fachuebergreifende-begutachtungen",
        label: "Unverbindlich anfragen",
      },
    },
    {
      title: "Schulungen & Informationsangebote",
      chipTitle: "Schulungen & Informationsangebote",
      intro: "Unfallfolgen und psychische Belastungen besser verstehen",
      items: [
        "Schulungen für Reha-Management, Fallmanagement und Führungskräfte",
        "Praxisnahe Inhalte zu Unfallfolgen und psychischen Belastungen",
        "Raum für konkrete Fragen aus der Fallarbeit",
        "Persönlich vor Ort oder digital durchführbar",
      ],
      imageSrc: "/pulsarmedical-jobcenter-2.jpg",
      imageAlt: "Schulungen für Berufsgenossenschaften",
      cta: CONTACT_CTA,
    },
  ],
};

export const RUECKVERSICHERER_PORTFOLIO: AudiencePortfolioContent = {
  headingId: "rueckversicherer-portfolio-heading",
  title: "Die passende Begutachtung für Ihre Leistungsfälle",
  subtitle:
    "PULSAR Medical unterstützt Rückversicherer bei der Beurteilung von funktionellen Einschränkungen, beruflicher Leistungsfähigkeit und Prognosen – medizinisch, psychologisch und bei Bedarf fachübergreifend.",
  ariaLabel: "Leistungsportfolio für Rückversicherer",
  cta: CONTACT_CTA,
  items: [
    {
      title: "Medizinische Begutachtungen",
      chipTitle: "Medizinisch",
      intro: "Gesundheitliche Einschränkungen und Funktionen beurteilen",
      items: [
        "Relevante Befunde, Diagnosen und Krankheitsverläufe fachlich einordnen",
        "Körperliche und funktionelle Einschränkungen nachvollziehbar bewerten",
        "Verbliebenes Leistungsvermögen realistisch einschätzen",
        "Medizinische Fragen für Leistungsentscheidungen beantworten",
      ],
      imageSrc: "/pulsarmedical-jobcenter-1.jpg",
      imageAlt: "Medizinische Begutachtung für Leistungsfälle",
      cta: {
        to: "/medizinische-begutachtungen",
        label: "Unverbindlich anfragen",
      },
    },
    {
      title: "Psychologische & psychiatrische Begutachtungen",
      chipTitle: "Psychologische & psychiatrisch",
      intro: "Psychische Belastungen und Leistungsfähigkeit bewerten",
      items: [
        "Psychische Belastungen und Erkrankungen fachlich einschätzen",
        "Auswirkungen auf Belastbarkeit und Leistungsfähigkeit beurteilen",
        "Ressourcen und prognoserelevante Faktoren erkennen",
        "Weiteren Klärungs- oder Behandlungsbedarf einordnen",
      ],
      imageSrc: "/pulsarmedical-jobcenter-2.jpg",
      imageAlt: "Psychologische Begutachtung für Leistungsfälle",
      cta: {
        to: "/psychologische-begutachtungen",
        label: "Unverbindlich anfragen",
      },
    },
    {
      title: "Arbeits- & sozialmedizinische Begutachtungen",
      chipTitle: "Arbeits- & sozialmedizinisch",
      intro: "Berufliche Leistungsfähigkeit im Kontext beurteilen",
      items: [
        "Gesundheitliche Belastbarkeit im Arbeitskontext beurteilen",
        "Konkrete Tätigkeiten und berufliche Anforderungen berücksichtigen",
        "Einschränkungen im Verhältnis zum Berufsbild einordnen",
        "Realistische Einsatz- und Entwicklungsmöglichkeiten aufzeigen",
      ],
      imageSrc: "/pulsarmedical-jobcenter-3.jpg",
      imageAlt: "Arbeitsmedizinische Beurteilung der Leistungsfähigkeit",
      cta: {
        to: "/arbeits-sozialmedizinische-begutachtungen",
        label: "Unverbindlich anfragen",
      },
    },
    {
      title: "Fachübergreifende Begutachtungen",
      chipTitle: "Fachübergreifend",
      intro: "Komplexe Leistungsfälle vollständig einordnen",
      items: [
        "Medizinische, psychologische und arbeitsbezogene Aspekte verbinden",
        "Mehrere Fachrichtungen passend zur Fragestellung einsetzen",
        "Wechselwirkungen und leistungsrelevante Faktoren einordnen",
        "Eine gemeinsame Grundlage für die Leistungsentscheidung schaffen",
      ],
      imageSrc: "/3.png.webp",
      imageAlt: "Fachübergreifende Begutachtung komplexer Leistungsfälle",
      cta: {
        to: "/fachuebergreifende-begutachtungen",
        label: "Unverbindlich anfragen",
      },
    },
    {
      title: "Schulungen & Informationsangebote",
      chipTitle: "Schulungen & Informationsangebote",
      intro: "Komplexe Gesundheitsfragen sicher einordnen",
      items: [
        "Schulungen für Leistungsprüfung, Claims und Fallmanagement",
        "Praxisnahe Inhalte zu Erkrankungen, Funktion und Prognose",
        "Raum für konkrete Fragen aus Leistungsfällen und Fallarbeit",
        "Persönlich vor Ort oder digital durchführbar",
      ],
      imageSrc: "/pulsarmedical-jobcenter-2.jpg",
      imageAlt: "Schulungen für Rückversicherer",
      cta: CONTACT_CTA,
    },
  ],
};
