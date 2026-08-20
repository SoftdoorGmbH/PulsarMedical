import {
  Brain,
  ClipboardList,
  FileCheck,
  FileText,
  MonitorSmartphone,
  Send,
  ShieldCheck,
  TrendingUp,
  User,
  UserCheck,
  Video,
} from "lucide-react";
import type { OfferPageContent } from "@/content/offerPages";
import {
  OFFER_PRIMARY_CTA,
  OFFER_SECONDARY_CTA,
} from "@/content/cta";

export const psychologischeBegutachtungen: OfferPageContent = {
  slug: "psychologische-begutachtungen",
  navLabel: "Psychologische & psychiatrische Begutachtungen",
  icon: Brain,
  hero: {
    ariaLabel: "Psychologische & psychiatrische Begutachtungen",
    overline: "Psychologische & psychiatrische Begutachtungen",
    title: "Psychische Belastungen fachlich einordnen.",
    paragraphs: [
      "PULSAR Medical beurteilt psychische Erkrankungen, Belastungsfaktoren, Ressourcen und deren Auswirkungen auf Leistungsfähigkeit, Mitwirkung und berufliche Perspektiven.",
    ],
    badges: [
      "DSGVO-konforme Datenprozesse",
      "Psychologische und psychiatrische Expertise",
      "Feste Projektkoordination",
    ],
    primaryCta: OFFER_PRIMARY_CTA,
    secondaryCta: OFFER_SECONDARY_CTA,
  },
  useCases: {
    headingId: "psychologische-begutachtungen-use-cases-heading",
    title:
      "Wann sollte eine psychologische oder psychiatrische Begutachtung beauftragt werden?",
    description:
      "Eine psychologische oder psychiatrische Begutachtung ist sinnvoll, wenn unklar ist, ob psychische Belastungen die Zusammenarbeit, Belastbarkeit oder berufliche Planung beeinträchtigen.",
    image: {
      src: "/pulsarmedical-jobcenter-2.jpg",
      alt: "Psychologische Begutachtung im Gespräch",
    },
    items: [
      {
        title: "Psychische Belastungen fachlich einordnen",
        description:
          "Es muss geklärt werden, ob psychische Erkrankungen oder erhebliche Belastungsfaktoren die Leistungsfähigkeit und den weiteren Fallverlauf beeinflussen.",
      },
      {
        title: "Mitwirkungsprobleme besser verstehen",
        description:
          "Wiederholte Terminversäumnisse, Rückzug oder Schwierigkeiten im Kontakt können auf psychische Belastungen hinweisen und sollten fachlich eingeordnet werden.",
      },
      {
        title: "Leistungsfähigkeit realistisch einschätzen",
        description:
          "Es muss eingeordnet werden, welche Anforderungen aktuell realistisch sind und welche Einschränkungen bei der Planung berücksichtigt werden sollten.",
      },
      {
        title: "Ressourcen und Stabilisierungsmöglichkeiten erkennen",
        description:
          "Vorhandene persönliche Ressourcen, Bewältigungsstrategien und unterstützende Faktoren sollen fachlich eingeordnet werden.",
      },
      {
        title: "Unterstützungsbedarf klären",
        description:
          "Es muss beurteilt werden, ob weitere Behandlung, Beratung, Stabilisierung oder eine vertiefte Begutachtung erforderlich ist.",
      },
      {
        title: "Berufliche Perspektiven differenziert bewerten",
        description:
          "Die psychische Situation wird im Zusammenhang mit beruflichen Anforderungen, Belastungen und realistischen Entwicklungsmöglichkeiten betrachtet.",
      },
    ],
  },
  compare: {
    headingId: "psychologische-begutachtungen-compare-heading",
    title:
      "Was wird bei einer psychologischen oder psychiatrischen Begutachtung beurteilt?",
    description:
      "Beurteilt werden psychische Belastungen, vorhandene Ressourcen, das individuelle Leistungsvermögen und die Auswirkungen auf Mitwirkung, berufliche Anforderungen oder leistungsrechtliche Fragestellungen.",
    variant: "positive",
    alternative: {
      title: "Was wir betrachten",
      items: [
        "Psychische Beschwerden, Erkrankungen und Belastungsfaktoren",
        "Aktuelle Stabilität und individuelle Belastbarkeit",
        "Auswirkungen auf Mitwirkung und Kontaktfähigkeit",
        "Individuelles Leistungsvermögen",
        "Ressourcen und Bewältigungsstrategien",
        "Berufliche Anforderungen und Entwicklungsperspektiven",
      ],
    },
    pulsar: {
      title: "Welche Ergebnisse Sie erhalten",
      items: [
        "Eine klare fachliche Einschätzung der psychischen Situation",
        "Eine Einschätzung der aktuellen Belastbarkeit",
        "Klarheit darüber, ob und wie eine Zusammenarbeit erschwert sein kann",
        "Eine Einordnung der psychisch bedingten Leistungsfähigkeit",
        "Hinweise auf vorhandene Stabilisierungsmöglichkeiten",
        "Eine realistische Einschätzung möglicher nächster Schritte",
      ],
    },
  },
  process: {
    headingId: "psychologische-begutachtungen-process-heading",
    title: "Wie läuft eine psychologische oder psychiatrische Begutachtung ab?",
    subtitle:
      "PULSAR Medical organisiert den Auftrag von der Abstimmung der Zielfragen bis zur sicheren Bereitstellung der fachlichen Einschätzung.",
    steps: [
      {
        stageLabel: "Schritt 1",
        title: "Fragestellung und Auftrag gemeinsam klären",
        description: [
          "Gemeinsam stimmen wir ab, welche psychologischen oder psychiatrischen Fragen beantwortet werden sollen.",
          "Wir klären, welche Unterlagen benötigt werden und welche Durchführungsform fachlich passend ist.",
          "Auf dieser Grundlage richten wir Auftrag, Kommunikation und Ablauf verbindlich ein.",
        ],
        icon: Send,
        imageSrc: "/pulsarmedical-jobcenter-2.jpg",
        imageAlt: "Abstimmung der psychologischen Fragestellung",
      },
      {
        stageLabel: "Schritt 2",
        title: "Die passende Fachkraft einsetzen",
        description: [
          "PULSAR Medical wählt die Fachkraft aus, deren Expertise zur Fragestellung und zum konkreten Fall passt.",
          "Dabei berücksichtigen wir den erforderlichen fachlichen Schwerpunkt, den Durchführungsort und die vereinbarten Kapazitäten.",
          "Bei komplexen Fällen können medizinische, psychiatrische und psychologische Perspektiven gezielt verbunden werden.",
        ],
        icon: Brain,
        imageSrc: "/pulsarmedical-jobcenter-1.jpg",
        imageAlt: "Einsatz psychologischer oder psychiatrischer Expertise",
      },
      {
        stageLabel: "Schritt 3",
        title: "Durchführung der Begutachtung",
        description: [
          "Die feste Projektkoordination organisiert Termine, Unterlagen und die Kommunikation zwischen allen Beteiligten.",
          "Die Begutachtung erfolgt persönlich, telemedizinisch oder nach Aktenlage, soweit dies fachlich möglich ist.",
          "Bei gebündelten Terminen oder größeren Auftragsvolumen kann die Durchführung bundesweit auch vor Ort erfolgen.",
        ],
        icon: ClipboardList,
        imageSrc: "/pulsarmedical-jobcenter-3.jpg",
        imageAlt: "Durchführung der psychologischen Begutachtung",
      },
      {
        stageLabel: "Schritt 4",
        title: "Fachliche Einschätzung sicher erhalten",
        description: [
          "Nach Abschluss erhalten Sie eine strukturierte Einschätzung, die die vereinbarten Fragen nachvollziehbar beantwortet.",
          "Ergebnisse und Unterlagen werden über abgestimmte, geschützte und datenschutzkonforme Wege bereitgestellt.",
          "Die feste Projektkoordination bleibt für organisatorische Rückfragen und weitere Abstimmungen erreichbar.",
        ],
        icon: FileCheck,
        imageSrc: "/pulsarmedical-jobcenter-2.jpg",
        imageAlt: "Bereitstellung der fachlichen Einschätzung",
      },
    ],
  },
  partnership: {
    headingId: "psychologische-begutachtungen-partnership-heading",
    title: "Welche Durchführungsarten gibt es?",
    subtitle:
      "Je nach Fragestellung, psychischer Situation und fachlicher Erforderlichkeit erfolgt die Begutachtung persönlich, telemedizinisch oder auf Grundlage vorhandener Unterlagen.",
    steps: [
      {
        number: "01",
        title: "Persönliche Begutachtung",
        description:
          "Die zu begutachtende Person stellt sich bei einer psychologischen oder psychiatrischen Fachkraft vor. Anamnese, Gespräch und fachliche Einschätzung erfolgen direkt im persönlichen Termin.",
        icon: User,
      },
      {
        number: "02",
        title: "Telemedizinische Begutachtung",
        description:
          "Die zu begutachtende Person stellt sich per Video bei einer passenden Fachkraft vor. Gespräch, vorhandene Unterlagen und die vereinbarten Zielfragen werden in die Einschätzung einbezogen.",
        icon: Video,
      },
      {
        number: "03",
        title: "Begutachtung nach Aktenlage",
        description:
          "Die Fachkraft beurteilt vorhandene Befunde, Berichte und Unterlagen anhand der vereinbarten Zielfragen. Eine persönliche Vorstellung ist nicht erforderlich, wenn die Aktenlage fachlich ausreicht.",
        icon: FileText,
      },
    ],
  },
  benefits: {
    headingId: "psychologische-begutachtungen-benefits-heading",
    title: "Warum mit PULSAR Medical?",
    subtitle:
      "PULSAR Medical organisiert psychologische und psychiatrische Begutachtungen von der Auswahl der passenden Fachkraft bis zur sicheren Bereitstellung der Ergebnisse.",
    cta: { label: "Unverbindlich anfragen", to: "/kontakt" },
    items: [
      {
        title: "Psychologische und psychiatrische Expertise",
        description:
          "PULSAR Medical setzt Fachkräfte ein, deren Qualifikation und Erfahrung zur jeweiligen Fragestellung und zum konkreten Fall passen.",
        icon: Brain,
        iconColor: "#4db8e8",
      },
      {
        title: "Feste Projektkoordination",
        description:
          "Eine zentrale Ansprechperson steuert Termine, Unterlagen und Kommunikation – vom Projektstart bis zur sicheren Bereitstellung der Ergebnisse.",
        icon: UserCheck,
        iconColor: "#93d9ff",
      },
      {
        title: "Fachübergreifende Perspektiven",
        description:
          "Bei komplexen Fällen können medizinische, psychologische und psychiatrische Fachrichtungen gezielt miteinander verbunden werden.",
        icon: ClipboardList,
        iconColor: "#7aaec4",
      },
      {
        title: "Flexible Durchführungsformen",
        description:
          "Persönlich, telemedizinisch oder nach Aktenlage: Die Durchführung richtet sich nach der Fragestellung und den fachlichen Anforderungen des Falls.",
        icon: MonitorSmartphone,
        iconColor: "#e0f4fa",
      },
      {
        title: "Planbare Kapazitäten",
        description:
          "Vom einzelnen Auftrag bis zu gebündelten Terminen und langfristigen Projekten plant PULSAR Medical die erforderlichen Kapazitäten passend zu Ihrem Bedarf.",
        icon: TrendingUp,
        iconColor: "#4db8e8",
      },
      {
        title: "Sichere Datenprozesse",
        description:
          "Sensible Gesundheitsdaten werden über abgestimmte, geschützte und datenschutzkonforme Wege verarbeitet und ausschließlich berechtigten Stellen bereitgestellt.",
        icon: ShieldCheck,
        iconColor: "#93d9ff",
      },
    ],
  },
  faq: {
    headingId: "psychologische-begutachtungen-faq-heading",
    title: "Häufig gestellte Fragen und Antworten",
    subtitle: "Alles Wichtige zu Angeboten, Abläufen und Datenschutz.",
    items: [
      {
        id: "psychologische-faq-1",
        question: "Was ist eine psychologische oder psychiatrische Begutachtung?",
        answer: [
          "Psychologische und psychiatrische Begutachtungen beurteilen psychische Belastungen, Erkrankungen, Ressourcen und die Auswirkungen auf die individuelle Belastbarkeit. Sie dienen dazu, die psychische Situation in Bezug auf eine konkrete berufliche, leistungsrechtliche oder organisatorische Fragestellung fachlich einzuordnen.",
          "Dabei kann unter anderem beurteilt werden:",
        ],
        bullets: [
          "Welche psychischen Belastungen oder Erkrankungen bestehen",
          "Wie stabil die aktuelle Situation ist",
          "Wie sich die Situation auf Belastbarkeit und Leistungsfähigkeit auswirkt",
          "Ob die Zusammenarbeit oder Mitwirkung erschwert sein kann",
          "Welche Unterstützung oder weitere Klärung sinnvoll sein kann",
        ],
      },
      {
        id: "psychologische-faq-2",
        question:
          "Wann ist eine psychologische oder psychiatrische Begutachtung sinnvoll?",
        answer: [
          "Eine psychologische oder psychiatrische Begutachtung ist sinnvoll, wenn unklar ist, ob psychische Belastungen die Belastbarkeit, Zusammenarbeit oder berufliche Planung beeinflussen.",
          "Typische Anlässe sind:",
        ],
        bullets: [
          "Wiederholte Terminversäumnisse oder Rückzug",
          "Auffälligkeiten im Kontakt oder in der Zusammenarbeit",
          "Hinweise auf psychische Erkrankungen oder Krisen",
          "Unklare psychische Belastbarkeit",
          "Offener Unterstützungs-, Behandlungs- oder Klärungsbedarf",
          "Schwierige Einschätzung beruflicher Perspektiven",
        ],
      },
      {
        id: "psychologische-faq-3",
        question:
          "Was wird bei einer psychologischen oder psychiatrischen Begutachtung beurteilt?",
        answer: [
          "Die Begutachtung betrachtet die psychische Situation im Zusammenhang mit der vereinbarten Fragestellung. Dazu gehören psychische Beschwerden, Erkrankungen, Belastungsfaktoren, Ressourcen und Bewältigungsstrategien.",
          "Das Ergebnis kann Aufschluss darüber geben:",
        ],
        bullets: [
          "Wie sich psychische Belastungen auf die Leistungsfähigkeit auswirken",
          "Welche Anforderungen aktuell realistisch sind",
          "Ob die Zusammenarbeit oder Mitwirkung beeinträchtigt sein kann",
          "Welche Ressourcen und Unterstützungsmöglichkeiten bestehen",
          "Ob weitere Behandlung oder eine vertiefte Begutachtung sinnvoll ist",
        ],
      },
      {
        id: "psychologische-faq-4",
        question:
          "Worin liegt der Unterschied zwischen psychologischer und psychiatrischer Begutachtung?",
        answer: [
          "Eine psychologische Begutachtung wird durch entsprechend qualifizierte psychologische Fachkräfte durchgeführt. Sie kann sich auf Belastungserleben, Ressourcen, Leistungsfähigkeit, Verhalten, Mitwirkung und berufliche Perspektiven beziehen.",
          "Eine psychiatrische Begutachtung erfolgt durch fachärztliche Expertise und kann insbesondere dann erforderlich sein, wenn eine differenzierte medizinisch-psychiatrische Einschätzung zu psychischen Erkrankungen, Behandlungsverlauf oder Prognose benötigt wird.",
          "Welche Fachrichtung erforderlich ist, wird anhand der vereinbarten Zielfragen und der verfügbaren Informationen abgestimmt.",
        ],
      },
      {
        id: "psychologische-faq-5",
        question: "Können psychologische Begutachtungen telemedizinisch erfolgen?",
        answer: [
          "Ja, wenn die Fragestellung und die individuelle Situation dies zulassen. Die fachliche Vorstellung erfolgt dann per Video. Vorliegende Unterlagen, Befunde und die vereinbarten Zielfragen werden in die Einschätzung einbezogen.",
          "Ob eine persönliche Vorstellung, eine telemedizinische Durchführung oder eine Begutachtung nach Aktenlage geeignet ist, wird vor Beginn des Auftrags fachlich geprüft.",
        ],
      },
      {
        id: "psychologische-faq-6",
        question: "Wann reicht eine Begutachtung nach Aktenlage aus?",
        answer: [
          "Eine Begutachtung nach Aktenlage kann ausreichen, wenn vorhandene Unterlagen die vereinbarten Fragen fachlich beantworten können. Dazu können beispielsweise ärztliche Befunde, Vorberichte, Behandlungsunterlagen oder frühere Einschätzungen gehören.",
          "Wenn ein persönliches Gespräch, eine aktuelle Anamnese oder Rückfragen notwendig sind, ist eine persönliche oder telemedizinische Vorstellung sinnvoller.",
        ],
      },
      {
        id: "psychologische-faq-7",
        question:
          "Wie werden psychologische und psychiatrische Begutachtungen organisiert?",
        answer: [
          "PULSAR Medical stimmt zunächst Zielfragen, Unterlagen, Fachrichtung und Durchführungsform mit dem Auftraggeber ab. Anschließend wird eine passende Fachkraft eingesetzt und die Terminplanung sowie Unterlagenkommunikation zentral organisiert.",
          "Nach Abschluss der Begutachtung erhält der Auftraggeber eine Einschätzung zu den vereinbarten Fragen. Die Ergebnisse werden über abgestimmte und geschützte Übermittlungswege bereitgestellt.",
        ],
      },
    ],
  },
};
