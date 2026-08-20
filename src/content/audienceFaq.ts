export type AudienceFaqItem = {
  id: string;
  question: string;
  answer: string | readonly string[];
  bullets?: readonly string[];
  closing?: string | readonly string[];
  cta?: {
    to: string;
    label: string;
  };
};

export type AudienceFaqContent = {
  headingId: string;
  title?: string;
  subtitle?: string;
  items: readonly AudienceFaqItem[];
};

export const JOBCENTER_FAQ_ITEMS: readonly AudienceFaqItem[] = [
  {
    id: "jobcenter-faq-1",
    question: "Wie unterstützt PULSAR Medical Jobcenter?",
    answer: [
      "PULSAR Medical unterstützt Jobcenter mit medizinischen, psychologischen, psychiatrischen sowie arbeits- und sozialmedizinischen Begutachtungen. Die Leistungen helfen dabei, gesundheitliche und psychische Belastungen fachlich einzuordnen, wenn diese Mitwirkung, Leistungsfähigkeit oder berufliche Integration beeinflussen können.",
      "Je nach Fragestellung bewertet PULSAR Medical unter anderem:",
    ],
    bullets: [
      "Gesundheitliche und funktionelle Einschränkungen",
      "Psychische Belastungen und vorhandene Ressourcen",
      "Individuelles Leistungsvermögen und Belastbarkeit",
      "Berufliche Anforderungen und realistische Einsatzmöglichkeiten",
      "Weiteren Unterstützungs-, Behandlungs- oder Klärungsbedarf",
    ],
    closing:
      "Das Jobcenter erhält fachliche Einschätzungen, die für Beratung, Fallarbeit und Integrationsplanung genutzt werden können.",
  },
  {
    id: "jobcenter-faq-2",
    question: "Welche Begutachtungen bietet PULSAR Medical für Jobcenter an?",
    answer:
      "PULSAR Medical bietet Jobcentern ein abgestuftes Angebot für unterschiedliche gesundheitliche Fragestellungen:",
    bullets: [
      "Medizinische Begutachtungen zur Beurteilung von Befunden, Einschränkungen und Leistungsvermögen",
      "Psychologische und psychiatrische Begutachtungen bei psychischen Belastungen, Erkrankungen oder unklarer Mitwirkungsfähigkeit",
      "Arbeits- und sozialmedizinische Begutachtungen zur Einschätzung von Tätigkeiten, Belastbarkeit und beruflichen Rahmenbedingungen",
      "Fachübergreifende Begutachtungen, wenn mehrere Fachrichtungen erforderlich sind",
      "Fachliche Einschätzungen bei Meldeversäumnissen",
      "Schulungen und Informationsangebote für Mitarbeitende",
    ],
    closing:
      "Welche Begutachtungsform sinnvoll ist, wird vor Beginn anhand der konkreten Zielfragen, der vorhandenen Unterlagen und des organisatorischen Bedarfs abgestimmt.",
  },
  {
    id: "jobcenter-faq-3",
    question: "Wann ist eine Begutachtung für ein Jobcenter sinnvoll?",
    answer: [
      "Eine Begutachtung ist sinnvoll, wenn gesundheitliche Informationen für die Integrationsplanung relevant sind, die vorhandene Aktenlage keine klare Einschätzung zulässt oder die Leistungsfähigkeit einer leistungsberechtigten Person fachlich beurteilt werden muss.",
      "Typische Situationen sind:",
    ],
    bullets: [
      "Gesundheitliche Einschränkungen erschweren eine realistische Integrationsplanung",
      "Psychische Belastungen beeinflussen Kontakt, Zusammenarbeit oder Belastbarkeit",
      "Es ist offen, welche Tätigkeiten unter den gegebenen Voraussetzungen möglich sind",
      "Unterschiedliche Befunde oder Fallinformationen ergeben kein klares Gesamtbild",
      "Weitere Unterstützung, Behandlung oder vertiefte Klärung muss vorbereitet werden",
      "Berufliche Anforderungen sollen mit der individuellen Belastbarkeit abgeglichen werden",
    ],
  },
  {
    id: "jobcenter-faq-4",
    question: "Wie hilft PULSAR Medical bei Meldeversäumnissen?",
    answer: [
      "PULSAR Medical bietet Jobcentern eine fachliche Ersteinschätzung bei Meldeversäumnissen an. Sie ist sinnvoll, wenn nicht eindeutig erkennbar ist, ob fehlende Mitwirkung oder gesundheitliche beziehungsweise psychische Belastungen das Meldeverhalten beeinflussen.",
      "Die persönliche Vorstellung kann klären:",
    ],
    bullets: [
      "Ob gesundheitliche oder psychische Belastungen relevant sein können",
      "Ob die Fähigkeit zur Zusammenarbeit beeinträchtigt ist",
      "Ob weiterer Unterstützungs- oder Behandlungsbedarf besteht",
      "Ob eine vertiefte medizinische, psychiatrische oder psychologische Begutachtung erforderlich ist",
    ],
    closing:
      "So kann der Klärungsbedarf frühzeitig eingeordnet werden, bevor unmittelbar ein umfassendes Gutachten beauftragt wird.",
  },
  {
    id: "jobcenter-faq-5",
    question: "Können Begutachtungen direkt im Jobcenter stattfinden?",
    answer: [
      "Ja. PULSAR Medical kann Begutachtungen und fachliche Vorstellungen bei Bedarf direkt im Jobcenter durchführen. Das ist insbesondere sinnvoll, wenn mehrere Termine gebündelt geplant werden sollen oder die Anreise für leistungsberechtigte Personen vereinfacht werden soll.",
      "Alternativ können Vorstellungen bei einer passenden Fachkraft, an einem abgestimmten Untersuchungsort, telemedizinisch oder nach Aktenlage erfolgen. Welche Durchführungsform geeignet ist, richtet sich nach Fall, Zielfrage und fachlicher Erforderlichkeit.",
    ],
  },
  {
    id: "jobcenter-faq-6",
    question: "Wie läuft ein Begutachtungsauftrag für ein Jobcenter ab?",
    answer: [
      "Ein Begutachtungsauftrag beginnt mit einer Abstimmung zu Zielfragen, Umfang, benötigten Fachrichtungen und gewünschtem Zeitrahmen. Danach übernimmt eine feste Projektkoordination die organisatorische Steuerung.",
      "Der typische Ablauf umfasst:",
    ],
    bullets: [
      "Anfrage und Bedarfsklärung",
      "Abstimmung von Zielfragen, Unterlagen und Kommunikationswegen",
      "Terminplanung mit leistungsberechtigten Personen und Fachkräften",
      "Persönliche, telemedizinische oder aktenbasierte Begutachtung",
      "Qualitätssicherung der Ergebnisse",
      "Sichere Bereitstellung der Gutachten oder fachlichen Einschätzungen",
      "Organisatorische Rückfragen über die feste Projektkoordination",
    ],
  },
  {
    id: "jobcenter-faq-7",
    question:
      "Welche Schulungen und Informationsangebote bietet PULSAR Medical für Jobcenter an?",
    answer: [
      "PULSAR Medical vermittelt medizinisches und psychologisches Wissen für Mitarbeitende, die regelmäßig mit gesundheitlichen Belastungen und komplexen Fallverläufen arbeiten.",
      "Mögliche Inhalte sind:",
    ],
    bullets: [
      "Psychische Belastungen und psychische Erkrankungen",
      "Chronische Erkrankungen und ihre Auswirkungen auf die Fallarbeit",
      "Gesundheitliche Einschränkungen und berufliche Integration",
      "Umgang mit komplexen Fallverläufen",
      "Konkrete Fragen aus der Beratungs- und Integrationspraxis",
    ],
    closing:
      "Schulungen können für Integrationsfachkräfte, Fallmanager:innen und Führungskräfte durchgeführt werden – vor Ort oder digital.",
  },
];

export const BERUFSGENOSSENSCHAFTEN_FAQ_ITEMS: readonly AudienceFaqItem[] = [
  {
    id: "bg-faq-1",
    question: "Wie unterstützt PULSAR Medical Berufsgenossenschaften?",
    answer: [
      "PULSAR Medical unterstützt Berufsgenossenschaften mit medizinischen, psychologischen und fachübergreifenden Begutachtungen. Im Mittelpunkt stehen Unfallfolgen, funktionelle Einschränkungen, verbliebenes Leistungsvermögen und die Frage, ob und unter welchen Bedingungen eine berufliche Tätigkeit wieder aufgenommen werden kann.",
      "Die Begutachtungen können insbesondere für folgende Themen genutzt werden:",
    ],
    bullets: [
      "Beurteilung von Unfallfolgen oder Folgen einer Berufskrankheit",
      "Einschätzung von Belastbarkeit und Arbeitsfähigkeit",
      "Vorbereitung der beruflichen Wiedereingliederung",
      "Einordnung psychischer Unfallfolgen oder psychischer Belastungen",
      "Beurteilung komplexer Reha- und Leistungsfälle",
      "Abstimmung mehrerer medizinischer und psychologischer Fachrichtungen",
    ],
  },
  {
    id: "bg-faq-2",
    question: "Welche Fragen beantworten Begutachtungen für Berufsgenossenschaften?",
    answer: [
      "Begutachtungen für Berufsgenossenschaften beantworten konkrete medizinische, psychologische und arbeitsbezogene Zielfragen. Sie helfen dabei, Unfallfolgen und deren Bedeutung für Arbeitsfähigkeit, Rehabilitation und Wiedereingliederung fachlich einzuordnen.",
      "Typische Fragen sind:",
    ],
    bullets: [
      "Welche gesundheitlichen oder funktionellen Einschränkungen bestehen?",
      "Welche Belastungen sind aktuell möglich?",
      "Welches Leistungsvermögen ist verblieben?",
      "Kann die versicherte Person ihre bisherige Tätigkeit wieder aufnehmen?",
      "Unter welchen Bedingungen ist eine Wiedereingliederung realistisch?",
      "Ist zusätzlicher Reha-, Behandlungs- oder Klärungsbedarf vorhanden?",
    ],
  },
  {
    id: "bg-faq-3",
    question:
      "Welche Begutachtungsformen bietet PULSAR Medical für Berufsgenossenschaften?",
    answer: "PULSAR Medical stellt je nach Fall die passende Fachperspektive bereit:",
    bullets: [
      "Medizinische Begutachtungen bei Unfallfolgen, körperlichen Einschränkungen und Leistungsvermögen",
      "Psychologische und psychiatrische Begutachtungen bei psychischen Unfallfolgen, Belastungen oder Erkrankungen",
      "Arbeits- und sozialmedizinische Begutachtungen bei Fragen zur Tätigkeit, Belastbarkeit und Wiedereingliederung",
      "Fachübergreifende Begutachtungen bei komplexen Fällen mit mehreren gesundheitlichen oder beruflichen Fragestellungen",
      "Schulungen und Informationsangebote für Reha-Management, Fallmanagement und Führungskräfte",
    ],
    closing:
      "Die Begutachtungen können persönlich, telemedizinisch oder nach Aktenlage durchgeführt werden, sofern die jeweilige Form fachlich geeignet ist.",
  },
  {
    id: "bg-faq-4",
    question:
      "Wann ist eine fachübergreifende Begutachtung nach einem Arbeitsunfall sinnvoll?",
    answer: [
      "Eine fachübergreifende Begutachtung ist sinnvoll, wenn Unfallfolgen nicht aus einer einzelnen medizinischen Perspektive ausreichend beurteilt werden können. Das kann beispielsweise der Fall sein, wenn körperliche Verletzungsfolgen, psychische Belastungen und berufliche Anforderungen gleichzeitig berücksichtigt werden müssen.",
      "PULSAR Medical bindet dann die erforderlichen Fachrichtungen ein und führt die Ergebnisse in einer gemeinsamen Begutachtung zusammen. Dadurch werden Wechselwirkungen zwischen körperlicher Belastbarkeit, psychischer Situation und beruflichen Anforderungen sichtbarer.",
    ],
  },
  {
    id: "bg-faq-5",
    question:
      "Können Begutachtungen für Berufsgenossenschaften gebündelt und vor Ort organisiert werden?",
    answer: [
      "Ja. PULSAR Medical kann einzelne Fälle, gebündelte Termine und längerfristige Begutachtungsaufträge organisieren. Bei Bedarf können persönliche Begutachtungen direkt vor Ort bei der Berufsgenossenschaft oder an einem abgestimmten Untersuchungsort stattfinden.",
      "Die Projektkoordination übernimmt dabei die Abstimmung von:",
    ],
    bullets: [
      "Fachkräften und Kapazitäten",
      "Terminen mit versicherten Personen",
      "Unterlagen und Zielfragen",
      "Kommunikationswegen",
      "Sicherer Ergebnisübermittlung",
    ],
  },
  {
    id: "bg-faq-6",
    question: "Wie unterstützt PULSAR Medical die berufliche Wiedereingliederung?",
    answer: [
      "PULSAR Medical beurteilt, wie sich Unfallfolgen und gesundheitliche Einschränkungen auf Belastbarkeit, Arbeitsfähigkeit und die bisherige berufliche Tätigkeit auswirken.",
      "Die Begutachtung kann Hinweise darauf geben:",
    ],
    bullets: [
      "Ob die bisherige Tätigkeit wieder aufgenommen werden kann",
      "Welche Belastungen oder Tätigkeiten realistisch sind",
      "Ob Anpassungen des Arbeitsplatzes sinnvoll sein können",
      "Ob eine schrittweise Wiedereingliederung in Betracht kommt",
      "Welche medizinischen, psychologischen oder arbeitsbezogenen Aspekte berücksichtigt werden sollten",
    ],
    closing:
      "Die Begutachtung trifft keine Reha- oder Leistungsentscheidung. Sie liefert jedoch die fachliche Einschätzung, die diese Entscheidungen unterstützt.",
  },
  {
    id: "bg-faq-7",
    question: "Wie werden Gutachten und Gesundheitsdaten sicher übermittelt?",
    answer: [
      "PULSAR Medical stimmt Übermittlungswege, Zuständigkeiten und Zugriffsrechte vor Beginn des Projekts mit der Berufsgenossenschaft ab. Ergebnisse und Unterlagen werden über geschützte, datenschutzkonforme Wege bereitgestellt.",
      "Dabei gilt:",
    ],
    bullets: [
      "Zugriff erhalten nur berechtigte Personen",
      "Es werden nur die für den Auftrag erforderlichen Daten verarbeitet",
      "Kommunikation und Übermittlung folgen den abgestimmten Projektprozessen",
      "Die feste Projektkoordination begleitet auch organisatorische Fragen zum Informationsfluss",
    ],
  },
];

export const RUECKVERSICHERER_FAQ_ITEMS: readonly AudienceFaqItem[] = [
  {
    id: "rv-faq-1",
    question: "Wie unterstützt PULSAR Medical Rückversicherer bei Leistungsfällen?",
    answer: [
      "PULSAR Medical unterstützt Rückversicherer mit medizinischen, psychologischen und fachübergreifenden Begutachtungen. Die Leistungen helfen dabei, funktionelle Einschränkungen, berufliche Leistungsfähigkeit und die weitere Prognose in komplexen Leistungsfällen fachlich einzuordnen.",
      "Im Mittelpunkt stehen insbesondere:",
    ],
    bullets: [
      "Gesundheitliche und funktionelle Einschränkungen",
      "Verbliebenes Leistungsvermögen",
      "Fähigkeit zur Ausübung der bisherigen beruflichen Tätigkeit",
      "Psychische Belastungen oder Erkrankungen",
      "Krankheitsverlauf und weitere Prognose",
      "Medizinische Grundlagen für Leistungsentscheidungen",
    ],
  },
  {
    id: "rv-faq-2",
    question:
      "Welche medizinischen Fragen können Rückversicherer mit PULSAR Medical klären?",
    answer: [
      "PULSAR Medical beurteilt die Fragen, die für eine medizinisch fundierte Leistungsprüfung relevant sind. Die konkrete Zielfrage wird vor Beginn des Auftrags abgestimmt.",
      "Mögliche Fragen sind:",
    ],
    bullets: [
      "Welche funktionellen Einschränkungen bestehen?",
      "Wie wirken sich diese Einschränkungen auf die berufliche Leistungsfähigkeit aus?",
      "Kann die versicherte Person ihre bisherige Tätigkeit noch ausüben?",
      "In welchem Umfang sind berufliche Tätigkeiten noch möglich?",
      "Welche psychischen Erkrankungen oder Belastungen sind leistungsrelevant?",
      "Wie ist der bisherige Verlauf und die weitere Prognose einzuschätzen?",
    ],
  },
  {
    id: "rv-faq-3",
    question: "Welche Begutachtungen bietet PULSAR Medical für Rückversicherer?",
    answer:
      "PULSAR Medical bietet Rückversicherern unterschiedliche Begutachtungsformen, die sich an Leistungsfall und Zielfrage orientieren:",
    bullets: [
      "Medizinische Begutachtungen zur Beurteilung von Befunden, Einschränkungen und Leistungsvermögen",
      "Psychologische und psychiatrische Begutachtungen bei psychischen Erkrankungen, Belastungen oder prognoserelevanten Fragen",
      "Arbeits- und sozialmedizinische Begutachtungen zur Einordnung von Berufsbild, Tätigkeiten und beruflicher Leistungsfähigkeit",
      "Fachübergreifende Begutachtungen bei komplexen Leistungsfällen mit mehreren medizinischen oder beruflichen Perspektiven",
      "Schulungen und Informationsangebote für Leistungsprüfung, Claims und Fallmanagement",
    ],
  },
  {
    id: "rv-faq-4",
    question: "Wie wird die berufliche Leistungsfähigkeit beurteilt?",
    answer: [
      "Die berufliche Leistungsfähigkeit wird nicht allein anhand einer Diagnose bewertet. Entscheidend ist, welche funktionellen Einschränkungen bestehen und wie sie sich auf die bisherige berufliche Tätigkeit auswirken.",
      "Je nach Fragestellung betrachtet die Begutachtung:",
    ],
    bullets: [
      "Körperliche und funktionelle Einschränkungen",
      "Psychische Belastbarkeit und Leistungsfähigkeit",
      "Konkrete Tätigkeiten und berufliche Anforderungen",
      "Belastungsgrenzen und verbleibende Einsatzmöglichkeiten",
      "Relevante Befunde, Krankheitsverläufe und Behandlungen",
      "Berufsbild und mögliche Auswirkungen auf die bisherige Tätigkeit",
    ],
    closing:
      "Das Ergebnis ordnet ein, ob und in welchem Umfang die bisherige Tätigkeit noch ausgeübt werden kann.",
  },
  {
    id: "rv-faq-5",
    question: "Wann ist eine Prognosebegutachtung sinnvoll?",
    answer: [
      "Eine Prognosebegutachtung ist sinnvoll, wenn die weitere Entwicklung von Gesundheitszustand und beruflicher Leistungsfähigkeit für die Leistungsentscheidung relevant ist.",
      "Die fachliche Einschätzung betrachtet dabei unter anderem:",
    ],
    bullets: [
      "Bisherigen Krankheits- oder Behandlungsverlauf",
      "Aktuelle Belastbarkeit und Leistungsfähigkeit",
      "Funktionelle Einschränkungen",
      "Relevante medizinische oder psychische Einflussfaktoren",
      "Erwartbare Entwicklung, soweit sie fachlich einschätzbar ist",
    ],
    closing:
      "Eine Prognose ist keine absolute Vorhersage. Sie ordnet die weitere Entwicklung anhand der verfügbaren Informationen und der vereinbarten Fragestellung fachlich ein.",
  },
  {
    id: "rv-faq-6",
    question:
      "Können Begutachtungen für Rückversicherer nach Aktenlage oder telemedizinisch erfolgen?",
    answer: [
      "Ja, wenn die Fragestellung und die vorhandenen Unterlagen dies zulassen. PULSAR Medical kann Begutachtungen persönlich, telemedizinisch oder nach Aktenlage organisieren.",
      "Eine Begutachtung nach Aktenlage kann sinnvoll sein, wenn Befunde, Berichte und sonstige Unterlagen die vereinbarten Zielfragen ausreichend beantworten. Eine telemedizinische Vorstellung kann geeignet sein, wenn ein fachliches Gespräch erforderlich ist, aber keine persönliche Untersuchung notwendig ist.",
      "Die passende Durchführungsform wird vor Beginn des Auftrags fachlich abgestimmt.",
    ],
  },
  {
    id: "rv-faq-7",
    question:
      "Wie organisiert PULSAR Medical größere oder wiederkehrende Begutachtungsaufträge?",
    answer: [
      "PULSAR Medical plant einzelne Leistungsfälle, gebündelte Termine und langfristige Aufträge mit einer festen Projektkoordination. Fachkräfte, Kapazitäten, Unterlagen, Termine und Übermittlungswege werden projektbezogen abgestimmt.",
      "Das unterstützt Rückversicherer insbesondere bei:",
    ],
    bullets: [
      "Wiederkehrenden Falltypen",
      "Größeren Fallzahlen",
      "Unterschiedlichen regionalen Durchführungsorten",
      "Mehreren benötigten Fachrichtungen",
      "Einheitlichen Zielfragen und Berichtsanforderungen",
      "Sicheren und abgestimmten Datenprozessen",
    ],
  },
];
