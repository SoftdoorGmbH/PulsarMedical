import {
  ClipboardList,
  FileCheck,
  FileText,
  Layers,
  MonitorSmartphone,
  Send,
  ShieldCheck,
  TrendingUp,
  User,
  UserCheck,
  Video,
} from "lucide-react";
import type { OfferPageContent } from "@/content/offerPages";
import { OFFER_PRIMARY_CTA, OFFER_SECONDARY_CTA } from "@/content/cta";

export const fachuebergreifendeBegutachtungen: OfferPageContent = {
  slug: "fachuebergreifende-begutachtungen",
  navLabel: "Fachübergreifende Begutachtungen",
  seo: {
    title: "Fachübergreifende Begutachtungen",
    description:
      "PULSAR Medical verbindet medizinische, psychologische und arbeitsbezogene Fachrichtungen, wenn komplexe Fälle mehr als eine Perspektive brauchen.",
  },
  icon: Layers,
  hero: {
    ariaLabel: "Fachübergreifende Begutachtungen",
    overline: "Fachübergreifende Begutachtungen",
    title: "Wenn ein Fall mehr als eine Fachperspektive braucht.",
    paragraphs: [
      "PULSAR Medical verbindet medizinische, psychologische und arbeitsbezogene Fachrichtungen, wenn komplexe Sachverhalte nicht aus einer einzelnen Perspektive beurteilt werden können.",
    ],
    badges: [
      "DSGVO-konforme Datenprozesse",
      "Interdisziplinäres Expertennetzwerk",
      "Feste Projektkoordination",
    ],
    primaryCta: OFFER_PRIMARY_CTA,
    secondaryCta: OFFER_SECONDARY_CTA,
  },
  useCases: {
    headingId: "fachuebergreifende-begutachtungen-use-cases-heading",
    title: "Wann sollte eine fachübergreifende Begutachtung beauftragt werden?",
    description:
      "Eine fachübergreifende Begutachtung ist sinnvoll, wenn medizinische, psychische und arbeitsbezogene Fragen zusammenhängen und eine einzelne Fachrichtung den Fall nicht vollständig beurteilen kann.",
    image: {
      src: "/offers/fachuebergreifende_begutachtungen/close-up-people-studying-with-notebook.webp",
      alt: "Fachübergreifende Begutachtung im Team",
    },
    items: [
      {
        title: "Mehrere gesundheitliche Faktoren greifen ineinander",
        description:
          "Körperliche Erkrankungen, psychische Belastungen und funktionelle Einschränkungen beeinflussen sich gegenseitig und müssen gemeinsam betrachtet werden.",
      },
      {
        title: "Unterschiedliche Einschätzungen müssen zusammengeführt werden",
        description:
          "Vorliegende medizinische, psychologische oder berufliche Einschätzungen ergeben kein einheitliches Gesamtbild für den konkreten Fall.",
      },
      {
        title: "Berufliche Leistungsfähigkeit ist komplex zu beurteilen",
        description:
          "Es muss geklärt werden, wie sich mehrere gesundheitliche Faktoren auf Belastbarkeit, Mitwirkung und berufliche Perspektiven auswirken.",
      },
      {
        title: "Mehrere Fachfragen müssen beantwortet werden",
        description:
          "Der Auftrag umfasst Fragestellungen, die medizinische, psychologische und arbeitsbezogene Expertise gleichzeitig erfordern.",
      },
      {
        title: "Der Fallverlauf ist nicht eindeutig",
        description:
          "Erkrankungen, Behandlungen, persönliche Ressourcen und berufliche Anforderungen müssen in einen nachvollziehbaren Zusammenhang gebracht werden.",
      },
      {
        title: "Eine abgestimmte Gesamteinschätzung wird benötigt",
        description:
          "Für die weitere Planung braucht es ein Ergebnis, das unterschiedliche Fachperspektiven zusammenführt und verständlich einordnet.",
      },
    ],
  },
  compare: {
    headingId: "fachuebergreifende-begutachtungen-compare-heading",
    title: "Was wird bei einer fachübergreifenden Begutachtung beurteilt?",
    description:
      "Beurteilt werden die medizinischen, psychologischen und arbeitsbezogenen Aspekte eines Falls sowie ihr Zusammenspiel für Leistungsfähigkeit, berufliche Perspektiven oder leistungsrechtliche Fragestellungen.",
    variant: "positive",
    alternative: {
      title: "Was wir betrachten",
      items: [
        "Medizinische Befunde und gesundheitliche Einschränkungen",
        "Psychische Belastungen und individuelle Ressourcen",
        "Funktionelle Einschränkungen und Leistungsvermögen",
        "Berufliche Anforderungen und konkrete Tätigkeiten",
        "Soziale Rahmenbedingungen und Unterstützungsfaktoren",
        "Zusammenspiel aller Fachperspektiven",
      ],
    },
    pulsar: {
      title: "Welche Ergebnisse Sie erhalten",
      items: [
        "Eine fachlich eingeordnete Sicht auf den körperlichen Gesundheitszustand",
        "Eine Einschätzung relevanter psychischer Einflussfaktoren",
        "Klarheit über Belastbarkeit und mögliche Grenzen",
        "Eine Einordnung realistischer Einsatzmöglichkeiten",
        "Hinweise auf Voraussetzungen für Stabilisierung und Entwicklung",
        "Eine abgestimmte Gesamteinschätzung für den konkreten Fall",
      ],
    },
  },
  process: {
    headingId: "fachuebergreifende-begutachtungen-process-heading",
    title: "Wie läuft eine fachübergreifende Begutachtung ab?",
    subtitle:
      "PULSAR Medical stellt die erforderlichen Fachrichtungen zusammen und organisiert die Begutachtung als abgestimmten Gesamtprozess.",
    steps: [
      {
        stageLabel: "Schritt 1",
        title: "Fragestellung und erforderliche Fachperspektiven klären",
        description: [
          "Gemeinsam stimmen wir ab, welche Fragen beantwortet werden sollen und welche Fachrichtungen dafür erforderlich sind.",
          "Wir klären, welche Unterlagen benötigt werden und wie die einzelnen Perspektiven im Auftrag zusammenwirken.",
          "Auf dieser Grundlage richten wir Auftrag, Kommunikation und Ablauf verbindlich ein.",
        ],
        icon: Send,
        imageSrc: "/offers/fachuebergreifende_begutachtungen/good-worker.webp",
        imageAlt: "Klärung der erforderlichen Fachperspektiven",
      },
      {
        stageLabel: "Schritt 2",
        title: "Passende Fachrichtungen gezielt zusammenstellen",
        description: [
          "PULSAR Medical setzt die medizinischen, psychologischen oder arbeitsbezogenen Fachkräfte ein, die der Fall erfordert.",
          "Dabei berücksichtigen wir die jeweiligen fachlichen Schwerpunkte, den Durchführungsort und die vereinbarten Kapazitäten.",
          "Die Projektkoordination sorgt dafür, dass alle Beteiligten auf dieselben Zielfragen und Abläufe ausgerichtet sind.",
        ],
        icon: Layers,
        imageSrc:
          "/offers/fachuebergreifende_begutachtungen/portrait-business-people-man-office-teamwork-lens-flare-with-cooperation-employees-group-coworkers-workplace-journalist-research-article-magazine-editor-copywriting.webp",
        imageAlt: "Zusammenstellung der Fachrichtungen",
      },
      {
        stageLabel: "Schritt 3",
        title: "Einzelperspektiven fachlich verbinden",
        description: [
          "Die Begutachtungen erfolgen persönlich, telemedizinisch oder nach Aktenlage, abhängig von Fall und Fragestellung.",
          "Jede Fachkraft beurteilt die für sie relevanten Aspekte auf Grundlage der vereinbarten Zielfragen.",
          "Die Ergebnisse werden anschließend so zusammengeführt, dass Wechselwirkungen und Zusammenhänge sichtbar werden.",
        ],
        icon: ClipboardList,
        imageSrc: "/pulsarmedical-jobcenter-3.webp",
        imageAlt: "Verbindung der fachlichen Einzelperspektiven",
      },
      {
        stageLabel: "Schritt 4",
        title: "Abgestimmte Gesamteinschätzung erhalten",
        description: [
          "Sie erhalten ein strukturiertes Ergebnis, das die unterschiedlichen Fachperspektiven verständlich zusammenführt.",
          "Ergebnisse und Unterlagen werden über abgestimmte, geschützte und datenschutzkonforme Wege bereitgestellt.",
          "Die feste Projektkoordination bleibt für organisatorische Rückfragen und weitere Abstimmungen erreichbar.",
        ],
        icon: FileCheck,
        imageSrc: "/3.png.webp",
        imageAlt: "Abgestimmte Gesamteinschätzung",
      },
    ],
  },
  partnership: {
    headingId: "fachuebergreifende-begutachtungen-partnership-heading",
    title: "Welche Durchführungsarten gibt es?",
    subtitle:
      "Je nach Fragestellung und beteiligten Fachrichtungen erfolgt die Begutachtung persönlich, telemedizinisch oder auf Grundlage vorhandener Unterlagen.",
    steps: [
      {
        number: "01",
        title: "Persönliche Begutachtung",
        description:
          "Die zu begutachtende Person stellt sich bei den erforderlichen Fachkräften vor. Medizinische, psychologische oder arbeitsbezogene Aspekte werden im persönlichen Termin erhoben und eingeordnet.",
        icon: User,
      },
      {
        number: "02",
        title: "Telemedizinische Begutachtung",
        description:
          "Einzelne Fachperspektiven können per Video erhoben werden, wenn die Fragestellung und die individuelle Situation dies zulassen. Vorhandene Unterlagen werden einbezogen.",
        icon: Video,
      },
      {
        number: "03",
        title: "Begutachtung nach Aktenlage",
        description:
          "Die beteiligten Fachkräfte beurteilen vorhandene Befunde, Berichte und Unterlagen anhand der vereinbarten Zielfragen. Eine persönliche Vorstellung ist nicht erforderlich, wenn die Aktenlage ausreicht.",
        icon: FileText,
      },
    ],
  },
  benefits: {
    headingId: "fachuebergreifende-begutachtungen-benefits-heading",
    title: "Warum mit PULSAR Medical?",
    subtitle:
      "PULSAR Medical bringt die Fachrichtungen zusammen, die ein komplexer Fall benötigt, und organisiert ihren Einsatz als abgestimmten Auftrag.",
    cta: { label: "Unverbindlich anfragen", to: "/kontakt" },
    items: [
      {
        title: "Interdisziplinäres Expertennetzwerk",
        description:
          "Medizinische, psychologische und arbeitsbezogene Fachkräfte werden gezielt entsprechend der vereinbarten Fragestellung eingesetzt.",
        icon: Layers,
        iconColor: "#4db8e8",
      },
      {
        title: "Feste Projektkoordination",
        description:
          "Eine zentrale Ansprechperson steuert Termine, Unterlagen und Kommunikation und hält den Gesamtauftrag organisatorisch zusammen.",
        icon: UserCheck,
        iconColor: "#93d9ff",
      },
      {
        title: "Abgestimmte Fachperspektiven",
        description:
          "Alle beteiligten Fachkräfte arbeiten auf dieselben Zielfragen hin und berücksichtigen die Perspektiven der weiteren Beteiligten.",
        icon: ClipboardList,
        iconColor: "#7aaec4",
      },
      {
        title: "Flexible Durchführungsformen",
        description:
          "Persönlich, telemedizinisch oder nach Aktenlage: Die Durchführung wird für jede Fachperspektive passend zum Fall organisiert.",
        icon: MonitorSmartphone,
        iconColor: "#e0f4fa",
      },
      {
        title: "Planbare Kapazitäten",
        description:
          "PULSAR Medical organisiert auch umfangreiche und komplexe Begutachtungsaufträge mit mehreren Fachrichtungen und abgestimmten Kapazitäten.",
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
    headingId: "fachuebergreifende-begutachtungen-faq-heading",
    title: "Häufig gestellte Fragen und Antworten",
    subtitle: "Alles Wichtige zu Angeboten, Abläufen und Datenschutz.",
    items: [
      {
        id: "fachuebergreifend-faq-1",
        question: "Was ist eine fachübergreifende Begutachtung?",
        answer: [
          "Eine fachübergreifende Begutachtung verbindet mehrere medizinische, psychologische und arbeitsbezogene Fachrichtungen in einem Auftrag. Sie ist sinnvoll, wenn ein Fall nicht aus einer einzelnen Perspektive vollständig beurteilt werden kann.",
          "PULSAR Medical bringt die erforderlichen Fachkräfte zusammen und führt die Ergebnisse zu einer gemeinsamen Einschätzung zusammen.",
        ],
      },
      {
        id: "fachuebergreifend-faq-2",
        question: "Wann ist eine fachübergreifende Begutachtung sinnvoll?",
        answer: [
          "Eine fachübergreifende Begutachtung ist sinnvoll, wenn körperliche Erkrankungen, psychische Belastungen, funktionelle Einschränkungen und berufliche Anforderungen zusammenwirken.",
          "Sie kann außerdem erforderlich sein, wenn:",
        ],
        bullets: [
          "Vorliegende Einschätzungen sich widersprechen",
          "Mehrere Fachfragen gleichzeitig beantwortet werden müssen",
          "Die berufliche Leistungsfähigkeit komplex zu beurteilen ist",
          "Medizinische, psychologische und soziale Aspekte gemeinsam betrachtet werden müssen",
          "Eine einzelne Fachrichtung wichtige Zusammenhänge nicht abdecken kann",
        ],
      },
      {
        id: "fachuebergreifend-faq-3",
        question: "Was liefert eine fachübergreifende Begutachtung?",
        answer: [
          "Eine fachübergreifende Begutachtung liefert eine gemeinsame Einschätzung, die die wesentlichen medizinischen, psychologischen und beruflichen Aspekte eines Falls zusammenführt.",
          "Auftraggeber erhalten damit:",
        ],
        bullets: [
          "Eine medizinische Einschätzung des körperlichen Gesundheitszustands",
          "Eine Einschätzung relevanter psychischer Belastungen",
          "Eine Beurteilung von Belastbarkeit und Leistungsvermögen",
          "Eine Einordnung beruflicher Anforderungen und Einsatzmöglichkeiten",
          "Hinweise auf relevante soziale Rahmenbedingungen",
          "Eine abgestimmte Gesamteinschätzung für den konkreten Fall",
        ],
      },
      {
        id: "fachuebergreifend-faq-4",
        question: "Welche Fachrichtungen können beteiligt sein?",
        answer: [
          "Je nach Fragestellung können medizinische, psychologische, psychiatrische, arbeitsmedizinische und sozialmedizinische Fachrichtungen beteiligt sein.",
          "Welche Fachkräfte eingesetzt werden, wird vor Beginn des Auftrags anhand der Zielfragen, der vorhandenen Unterlagen und der erforderlichen fachlichen Perspektiven abgestimmt.",
        ],
      },
      {
        id: "fachuebergreifend-faq-5",
        question:
          "Wie werden die Ergebnisse verschiedener Fachkräfte zusammengeführt?",
        answer: [
          "Alle beteiligten Fachkräfte arbeiten anhand abgestimmter Zielfragen. Jede Fachrichtung beurteilt die Aspekte, für die sie fachlich zuständig ist.",
          "PULSAR Medical organisiert die Zusammenarbeit und führt die Ergebnisse anschließend so zusammen, dass Zusammenhänge, Wechselwirkungen und mögliche Widersprüche verständlich erkennbar werden.",
        ],
      },
      {
        id: "fachuebergreifend-faq-6",
        question:
          "Können unterschiedliche Fachperspektiven in verschiedenen Formaten erhoben werden?",
        answer: [
          "Ja. Je nach Fachrichtung und Fragestellung können persönliche Vorstellungen, telemedizinische Gespräche und Begutachtungen nach Aktenlage kombiniert werden.",
          "Die Durchführungsform wird je Fachperspektive festgelegt. So kann beispielsweise eine medizinische Beurteilung nach Aktenlage erfolgen, während für eine psychologische Einschätzung ein persönliches Gespräch notwendig ist.",
        ],
      },
      {
        id: "fachuebergreifend-faq-7",
        question:
          "Für welche Auftraggeber eignen sich fachübergreifende Begutachtungen?",
        answer: [
          "Fachübergreifende Begutachtungen eignen sich für Jobcenter, Berufsgenossenschaften, Rückversicherer und weitere institutionelle Auftraggeber, die komplexe gesundheitliche Sachverhalte beurteilen müssen.",
          "Sie sind besonders sinnvoll, wenn Entscheidungen zu Integration, Wiedereingliederung, Arbeitsfähigkeit, Rehabilitation oder Leistungsansprüchen mehrere Fachrichtungen erfordern.",
        ],
      },
    ],
  },
};
