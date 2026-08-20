export type AudienceWhyUsItem = {
  title: string;
  content: string;
};

export type AudienceWhyUsContent = {
  headingId: string;
  title: string;
  subtitle: string;
  ariaLabel: string;
  items: readonly AudienceWhyUsItem[];
  cta: {
    to: string;
    label: string;
  };
  imageSrc: string;
  imageAlt: string;
};

const WHY_US_CTA = {
  to: "/kontakt",
  label: "Unverbindlich anfragen",
} as const;

export const JOBCENTER_WHY_US: AudienceWhyUsContent = {
  headingId: "jobcenter-why-us-heading",
  title: "Warum Jobcenter PULSAR Medical klassischen Begutachtungen vorziehen",
  subtitle:
    "PULSAR Medical verbindet die passende fachliche Einschätzung mit einer Umsetzung, die Ihre Fallarbeit und internen Abläufe berücksichtigt.",
  ariaLabel: "Warum PULSAR Medical",
  items: [
    {
      title: "Begutachtungen für die Integrationsarbeit",
      content:
        "PULSAR Medical beurteilt nicht nur Diagnosen und Befunde, sondern ordnet ein, wie sich gesundheitliche Einschränkungen auf Leistungsfähigkeit, Mitwirkung und berufliche Perspektiven auswirken.",
    },
    {
      title: "Fachliche Perspektiven passend zum Fall",
      content:
        "PULSAR Medical setzt genau die Fachrichtungen ein, die für die jeweilige Fragestellung benötigt werden – medizinisch, psychologisch, psychiatrisch oder arbeitsbezogen.",
    },
    {
      title: "Frühe Klärung bei Meldeversäumnissen",
      content:
        "Wenn gesundheitliche oder psychische Belastungen das Meldeverhalten beeinflussen könnten, ermöglicht PULSAR Medical eine frühe fachliche Einschätzung. So lässt sich klären, ob weitere Unterstützung oder eine vertiefte Begutachtung erforderlich ist.",
    },
    {
      title: "Durchführung passend zu Ihren Abläufen",
      content:
        "Begutachtungen können persönlich, telemedizinisch oder nach Aktenlage erfolgen. Bei Bedarf organisiert PULSAR Medical gebündelte Termine direkt vor Ort im Jobcenter.",
    },
    {
      title: "Feste Projektkoordination",
      content:
        "Eine feste Ansprechperson steuert Fachkräfte, Termine, Unterlagen und Kommunikation. So bleibt der Abstimmungsaufwand im Team überschaubar.",
    },
    {
      title: "Planbare Kapazitäten und sichere Prozesse",
      content:
        "PULSAR Medical organisiert einzelne Fälle, gebündelte Termine und langfristige Aufträge mit planbaren Kapazitäten und abgestimmten Übermittlungswegen.",
    },
  ],
  cta: WHY_US_CTA,
  imageSrc: "/pulsarmedical-jobcenter-2.jpg",
  imageAlt: "Medizinische Beratung und Begutachtung im Team",
};

export const BERUFSGENOSSENSCHAFTEN_WHY_US: AudienceWhyUsContent = {
  headingId: "berufsgenossenschaften-why-us-heading",
  title:
    "Warum Berufsgenossenschaften PULSAR Medical klassischen Begutachtungen vorziehen",
  subtitle:
    "PULSAR Medical organisiert Begutachtungen so, dass sie die Reha-Planung, die berufliche Wiedereingliederung und die Leistungsentscheidung fachlich unterstützen.",
  ariaLabel: "Warum PULSAR Medical",
  items: [
    {
      title: "Begutachtungen für Reha und Wiedereingliederung",
      content:
        "PULSAR Medical ordnet ein, wie sich Unfallfolgen und gesundheitliche Einschränkungen auf Belastbarkeit, Arbeitsfähigkeit und die berufliche Wiedereingliederung auswirken können.",
    },
    {
      title: "Fachliche Perspektiven passend zum Fall",
      content:
        "PULSAR Medical setzt genau die Fachrichtungen ein, die für die jeweilige Fragestellung benötigt werden – medizinisch, psychologisch, psychiatrisch oder arbeitsbezogen.",
    },
    {
      title: "Fachübergreifende Begutachtungen",
      content:
        "Wenn ein Fall mehrere Fachrichtungen erfordert, organisiert PULSAR Medical die Begutachtung fachübergreifend und führt die Ergebnisse in einem abgestimmten Gutachten zusammen.",
    },
    {
      title: "Durchführung passend zu Ihren Abläufen",
      content:
        "Begutachtungen können persönlich, telemedizinisch oder nach Aktenlage erfolgen. Bei Bedarf organisiert PULSAR Medical gebündelte Termine direkt vor Ort.",
    },
    {
      title: "Feste Projektkoordination",
      content:
        "Eine feste Ansprechperson steuert Fachkräfte, Termine, Unterlagen und Kommunikation. So bleibt der Abstimmungsaufwand im Team überschaubar.",
    },
    {
      title: "Planbare Kapazitäten und sichere Prozesse",
      content:
        "PULSAR Medical organisiert einzelne Fälle, gebündelte Termine und langfristige Aufträge mit planbaren Kapazitäten und abgestimmten Übermittlungswegen.",
    },
  ],
  cta: WHY_US_CTA,
  imageSrc: "/pulsarmedical-jobcenter-1.jpg",
  imageAlt: "Begutachtung zur beruflichen Wiedereingliederung",
};

export const RUECKVERSICHERER_WHY_US: AudienceWhyUsContent = {
  headingId: "rueckversicherer-why-us-heading",
  title:
    "Warum Rückversicherer PULSAR Medical klassischen Begutachtungen vorziehen",
  subtitle:
    "PULSAR Medical organisiert Begutachtungen so, dass sie die Leistungsprüfung mit klaren medizinischen Einschätzungen unterstützen und sich in bestehende Abläufe einfügen.",
  ariaLabel: "Warum PULSAR Medical",
  items: [
    {
      title: "Begutachtungen für komplexe Leistungsfälle",
      content:
        "PULSAR Medical ordnet ein, welche gesundheitlichen und funktionellen Einschränkungen für den Leistungsfall relevant sind und wie sie die berufliche Leistungsfähigkeit beeinflussen.",
    },
    {
      title: "Fachliche Perspektiven passend zum Fall",
      content:
        "PULSAR Medical setzt genau die Fachrichtungen ein, die für die jeweilige Fragestellung benötigt werden – medizinisch, psychologisch, psychiatrisch oder arbeitsbezogen.",
    },
    {
      title: "Prognosen und Entwicklungen einordnen",
      content:
        "Wenn die weitere Entwicklung für die Leistungsentscheidung relevant ist, beurteilt PULSAR Medical den bisherigen Verlauf und die voraussichtliche Prognose.",
    },
    {
      title: "Durchführung passend zu Ihren Abläufen",
      content:
        "Begutachtungen können persönlich, telemedizinisch oder nach Aktenlage erfolgen. Bei Bedarf organisiert PULSAR Medical gebündelte Termine direkt vor Ort.",
    },
    {
      title: "Feste Projektkoordination",
      content:
        "Eine feste Ansprechperson steuert Fachkräfte, Termine, Unterlagen und Kommunikation. So bleibt der Abstimmungsaufwand im Team überschaubar.",
    },
    {
      title: "Planbare Kapazitäten und sichere Prozesse",
      content:
        "PULSAR Medical organisiert einzelne Fälle, gebündelte Termine und langfristige Aufträge mit planbaren Kapazitäten und abgestimmten Übermittlungswegen.",
    },
  ],
  cta: WHY_US_CTA,
  imageSrc: "/pulsarmedical-jobcenter-3.jpg",
  imageAlt: "Medizinische Einschätzung für Leistungsfälle",
};
