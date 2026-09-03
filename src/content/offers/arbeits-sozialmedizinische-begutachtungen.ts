import {
  ClipboardList,
  FileCheck,
  FileText,
  HeartPulse,
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
import { OFFER_PROCESS_STEP_IMAGES } from "@/content/offerProcess";

export const arbeitsSozialmedizinischeBegutachtungen: OfferPageContent = {
  slug: "arbeits-sozialmedizinische-begutachtungen",
  navLabel: "Arbeits- & sozialmedizinische Begutachtungen",
  seo: {
    title: "Arbeits- und sozialmedizinische Begutachtungen",
    description:
      "PULSAR Medical beurteilt, wie gesundheitliche Einschränkungen berufliche Anforderungen, Belastbarkeit und realistische Einsatzmöglichkeiten beeinflussen.",
  },
  icon: HeartPulse,
  hero: {
    ariaLabel: "Arbeits- & sozialmedizinische Begutachtungen",
    overline: "Arbeits- & sozialmedizinische Begutachtungen",
    title: "Gesundheit und Arbeitsrealität gemeinsam betrachten.",
    paragraphs: [
      "PULSAR Medical beurteilt, wie sich gesundheitliche Einschränkungen auf konkrete berufliche Anforderungen, Belastbarkeit und realistische Einsatzmöglichkeiten auswirken.",
    ],
    badges: [
      "DSGVO-konforme Datenprozesse",
      "Arbeitsmedizinische Expertise",
      "Feste Projektkoordination",
    ],
    primaryCta: OFFER_PRIMARY_CTA,
    secondaryCta: OFFER_SECONDARY_CTA,
  },
  useCases: {
    headingId: "arbeits-sozialmedizinische-begutachtungen-use-cases-heading",
    title:
      "Wann sollte eine arbeits- oder sozialmedizinische Begutachtung beauftragt werden?",
    description:
      "Eine arbeits- oder sozialmedizinische Begutachtung ist sinnvoll, wenn die gesundheitliche Situation im Zusammenhang mit konkreten Tätigkeiten, Arbeitsbedingungen oder sozialen Rahmenbedingungen beurteilt werden muss.",
    image: {
      src: "/offers/arbeits_sozialmedizinische_begutachtungen/magnific_contemporary-documentary-_xSwHApojfW.webp",
      alt: "Arbeits- und sozialmedizinische Einschätzung",
    },
    items: [
      {
        title: "Berufliche Anforderungen realistisch bewerten",
        description:
          "Es muss geklärt werden, welche Tätigkeiten unter Berücksichtigung der gesundheitlichen Situation möglich, eingeschränkt möglich oder nicht möglich sind.",
      },
      {
        title: "Belastbarkeit im Arbeitsalltag einschätzen",
        description:
          "Körperliche, psychische und organisatorische Belastungen müssen mit den konkreten Anforderungen eines Arbeitsplatzes abgeglichen werden.",
      },
      {
        title: "Wiedereingliederung fachlich vorbereiten",
        description:
          "Für die Rückkehr in eine Tätigkeit muss beurteilt werden, unter welchen Bedingungen eine schrittweise oder angepasste Wiedereingliederung realistisch ist.",
      },
      {
        title: "Geeignete Einsatzmöglichkeiten identifizieren",
        description:
          "Es soll geklärt werden, welche Tätigkeiten, Belastungsprofile oder Rahmenbedingungen zur individuellen Leistungsfähigkeit passen.",
      },
      {
        title: "Soziale Rahmenbedingungen berücksichtigen",
        description:
          "Berufliche Perspektiven hängen häufig auch von Wohnsituation, Mobilität, Unterstützung, Betreuung oder weiteren sozialen Faktoren ab.",
      },
      {
        title: "Entwicklungsmöglichkeiten realistisch planen",
        description:
          "Es muss eingeschätzt werden, welche Anpassungen, Qualifizierungen oder Unterstützungsmaßnahmen die berufliche Perspektive verbessern können.",
      },
    ],
  },
  compare: {
    headingId: "arbeits-sozialmedizinische-begutachtungen-compare-heading",
    title:
      "Was wird bei einer arbeits- oder sozialmedizinischen Begutachtung beurteilt?",
    description:
      "Beurteilt werden gesundheitliche Einschränkungen, berufliche Anforderungen, soziale Rahmenbedingungen und die Frage, welche Tätigkeiten unter den gegebenen Voraussetzungen realistisch möglich sind.",
    variant: "positive",
    alternative: {
      title: "Was wir betrachten",
      items: [
        "Gesundheitliche Situation und relevante Einschränkungen",
        "Konkrete Tätigkeiten und Arbeitsplatzanforderungen",
        "Körperliche, psychische und zeitliche Belastungen",
        "Berufliche Erfahrungen und vorhandene Kompetenzen",
        "Soziale Rahmenbedingungen und Unterstützungsfaktoren",
        "Entwicklungsmöglichkeiten und Anpassungsbedarf",
      ],
    },
    pulsar: {
      title: "Welche Ergebnisse Sie erhalten",
      items: [
        "Eine fachlich eingeordnete Einschätzung der gesundheitlichen Belastbarkeit",
        "Klarheit darüber, welche Anforderungen möglich oder nicht möglich sind",
        "Eine Bewertung der individuellen Belastungsgrenzen",
        "Hinweise auf realistische Einsatz- und Entwicklungsmöglichkeiten",
        "Eine Einordnung relevanter Voraussetzungen für die berufliche Perspektive",
        "Konkrete Ansatzpunkte für Anpassung, Wiedereingliederung oder weitere Maßnahmen",
      ],
    },
  },
  process: {
    headingId: "arbeits-sozialmedizinische-begutachtungen-process-heading",
    title: "Wie läuft eine arbeits- oder sozialmedizinische Begutachtung ab?",
    subtitle:
      "PULSAR Medical organisiert den Auftrag von der Abstimmung der beruflichen Fragestellung bis zur sicheren Bereitstellung der Ergebnisse.",
    steps: [
      {
        stageLabel: "Schritt 1",
        title: "Berufliche Fragestellung und Auftrag gemeinsam klären",
        description: [
          "Gemeinsam stimmen wir ab, welche Tätigkeiten, Anforderungen oder beruflichen Perspektiven beurteilt werden sollen.",
          "Wir klären, welche Unterlagen, Tätigkeitsbeschreibungen und Informationen für die Einschätzung erforderlich sind.",
          "Auf dieser Grundlage richten wir Auftrag, Kommunikation und Ablauf verbindlich ein.",
        ],
        icon: Send,
        imageSrc: OFFER_PROCESS_STEP_IMAGES[0],
        imageAlt: "Abstimmung der beruflichen Fragestellung",
      },
      {
        stageLabel: "Schritt 2",
        title: "Passende arbeits- oder sozialmedizinische Expertise einsetzen",
        description: [
          "PULSAR Medical setzt die Fachkraft ein, deren Erfahrung zur beruflichen Fragestellung und zum konkreten Fall passt.",
          "Dabei berücksichtigen wir die benötigte Fachrichtung, den Durchführungsort und die vereinbarten Kapazitäten.",
          "Bei komplexen Fällen verbinden wir arbeitsmedizinische, medizinische und psychologische Perspektiven gezielt miteinander.",
        ],
        icon: HeartPulse,
        imageSrc: OFFER_PROCESS_STEP_IMAGES[1],
        imageAlt: "Einsatz arbeitsmedizinischer Expertise",
      },
      {
        stageLabel: "Schritt 3",
        title: "Gesundheitliche Situation und Arbeitsrealität beurteilen",
        description: [
          "Die feste Projektkoordination organisiert Termine, Unterlagen und die Kommunikation zwischen allen Beteiligten.",
          "Die Begutachtung erfolgt persönlich, telemedizinisch oder nach Aktenlage, abhängig von der Fragestellung und den fachlichen Anforderungen.",
          "Berufsbezogene Anforderungen, Belastungen und soziale Rahmenbedingungen werden in die Beurteilung einbezogen.",
        ],
        icon: ClipboardList,
        imageSrc: OFFER_PROCESS_STEP_IMAGES[2],
        imageAlt: "Beurteilung von Gesundheit und Arbeitsrealität",
      },
      {
        stageLabel: "Schritt 4",
        title: "Ergebnisse für die berufliche Planung erhalten",
        description: [
          "Nach Abschluss erhalten Sie eine strukturierte Einschätzung zu Belastbarkeit, möglichen Tätigkeiten und relevanten Rahmenbedingungen.",
          "Ergebnisse und Unterlagen werden über abgestimmte, geschützte und datenschutzkonforme Wege bereitgestellt.",
          "Die feste Projektkoordination bleibt für organisatorische Rückfragen und weitere Abstimmungen erreichbar.",
        ],
        icon: FileCheck,
        imageSrc: OFFER_PROCESS_STEP_IMAGES[3],
        imageAlt: "Ergebnisse für die berufliche Planung",
      },
    ],
  },
  partnership: {
    headingId: "arbeits-sozialmedizinische-begutachtungen-partnership-heading",
    title: "Welche Durchführungsarten gibt es?",
    subtitle:
      "Je nach beruflicher Fragestellung, Aktenlage und fachlicher Erforderlichkeit erfolgt die Begutachtung persönlich, telemedizinisch oder auf Grundlage vorhandener Unterlagen.",
    steps: [
      {
        number: "01",
        title: "Persönliche Begutachtung",
        description:
          "Die zu begutachtende Person stellt sich bei einer passenden Fachkraft vor. Gesundheitliche Situation, berufliche Anforderungen und individuelle Belastbarkeit werden direkt im Termin besprochen.",
        icon: User,
      },
      {
        number: "02",
        title: "Telemedizinische Begutachtung",
        description:
          "Die fachliche Vorstellung erfolgt per Video, wenn die Fragestellung und die individuelle Situation dies zulassen. Vorhandene Unterlagen und berufliche Informationen werden einbezogen.",
        icon: Video,
      },
      {
        number: "03",
        title: "Begutachtung nach Aktenlage",
        description:
          "Die Fachkraft beurteilt vorhandene Befunde, Tätigkeitsbeschreibungen und Unterlagen anhand der vereinbarten Zielfragen. Eine persönliche Vorstellung ist nicht erforderlich, wenn die Aktenlage ausreicht.",
        icon: FileText,
      },
    ],
  },
  benefits: {
    headingId: "arbeits-sozialmedizinische-begutachtungen-benefits-heading",
    title: "Warum mit PULSAR Medical arbeiten?",
    subtitle:
      "PULSAR Medical organisiert arbeits- und sozialmedizinische Begutachtungen von der beruflichen Fragestellung bis zur sicheren Bereitstellung der Ergebnisse.",
    cta: { label: "Unverbindlich anfragen", to: "/kontakt" },
    items: [
      {
        title: "Arbeits- und sozialmedizinische Expertise",
        description:
          "PULSAR Medical setzt Fachkräfte ein, die gesundheitliche Einschränkungen im Zusammenhang mit beruflichen Anforderungen fachlich einordnen können.",
        icon: HeartPulse,
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
        title: "Berufliche Anforderungen im Blick",
        description:
          "Tätigkeitsprofile, Belastungen und Rahmenbedingungen werden in die Begutachtung einbezogen, wenn sie für die vereinbarte Fragestellung relevant sind.",
        icon: ClipboardList,
        iconColor: "#7aaec4",
      },
      {
        title: "Flexible Durchführungsformen",
        description:
          "Persönlich, telemedizinisch oder nach Aktenlage: Die Durchführung richtet sich nach der Fragestellung und den fachlichen Anforderungen des einzelnen Falls.",
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
    headingId: "arbeits-sozialmedizinische-begutachtungen-faq-heading",
    title: "Häufig gestellte Fragen und Antworten",
    subtitle: "Alles Wichtige zu Angeboten, Abläufen und Datenschutz.",
    items: [
      {
        id: "arbeitsmedizin-faq-1",
        question: "Was ist eine arbeits- oder sozialmedizinische Begutachtung?",
        answer: [
          "Arbeits- und sozialmedizinische Begutachtungen beurteilen die gesundheitliche Situation im Zusammenhang mit konkreten beruflichen Tätigkeiten, Arbeitsbedingungen und sozialen Rahmenbedingungen.",
          "Sie beantworten insbesondere die Frage, welche Tätigkeiten unter Berücksichtigung der individuellen Belastbarkeit realistisch möglich sind und welche Voraussetzungen für eine berufliche Perspektive erfüllt sein müssen.",
        ],
      },
      {
        id: "arbeitsmedizin-faq-2",
        question:
          "Wann ist eine arbeits- oder sozialmedizinische Begutachtung sinnvoll?",
        answer: [
          "Diese Begutachtungsform ist sinnvoll, wenn nicht allein die gesundheitliche Diagnose, sondern ihre Auswirkungen auf konkrete Tätigkeiten und Arbeitsbedingungen beurteilt werden müssen.",
          "Typische Anlässe sind:",
        ],
        bullets: [
          "Die Belastbarkeit in einer bestimmten Tätigkeit ist unklar",
          "Eine Wiedereingliederung oder berufliche Neuorientierung wird vorbereitet",
          "Arbeitsplatzanforderungen müssen mit der gesundheitlichen Situation abgeglichen werden",
          "Soziale Rahmenbedingungen beeinflussen die berufliche Perspektive",
          "Es soll geklärt werden, welche Anpassungen oder Unterstützungsangebote sinnvoll sind",
        ],
      },
      {
        id: "arbeitsmedizin-faq-3",
        question:
          "Was wird bei einer arbeits- oder sozialmedizinischen Begutachtung beurteilt?",
        answer: [
          "Die Begutachtung betrachtet die gesundheitliche Situation, berufliche Anforderungen, individuelle Belastbarkeit und relevante soziale Rahmenbedingungen.",
          "Daraus ergibt sich eine Einschätzung zu:",
        ],
        bullets: [
          "Körperlichen, psychischen und zeitlichen Belastungsgrenzen",
          "Anforderungen, die möglich oder nicht möglich sind",
          "Realistischen Tätigkeiten und Einsatzmöglichkeiten",
          "Beruflichen Erfahrungen und vorhandenen Kompetenzen",
          "Wichtigen Rahmenbedingungen wie Mobilität, Betreuung oder Unterstützung",
          "Anpassungs-, Wiedereingliederungs- oder Entwicklungsbedarf",
        ],
      },
      {
        id: "arbeitsmedizin-faq-4",
        question: "Welche beruflichen Anforderungen werden berücksichtigt?",
        answer: [
          "Berücksichtigt werden diejenigen Anforderungen, die für die vereinbarte Fragestellung relevant sind. Dazu können körperliche Belastungen, Arbeitszeiten, Schichtarbeit, Wegezeiten, Konzentrationsanforderungen, soziale Interaktion oder organisatorische Anforderungen gehören.",
          "Auch Tätigkeitsbeschreibungen, Arbeitsplatzprofile und bisherige berufliche Erfahrungen können in die Beurteilung einbezogen werden.",
        ],
      },
      {
        id: "arbeitsmedizin-faq-5",
        question: "Welche sozialen Faktoren können relevant sein?",
        answer: [
          "Je nach Fall können soziale Faktoren eine berufliche Perspektive erheblich beeinflussen. Dazu zählen beispielsweise Mobilität, Wohnsituation, Betreuungspflichten, Unterstützung im persönlichen Umfeld oder die Erreichbarkeit eines Arbeitsplatzes.",
          "Diese Faktoren werden nicht isoliert, sondern nur insoweit betrachtet, wie sie für die vereinbarte berufliche Fragestellung relevant sind.",
        ],
      },
      {
        id: "arbeitsmedizin-faq-6",
        question:
          "Kann eine arbeits- oder sozialmedizinische Begutachtung auch nach Aktenlage erfolgen?",
        answer: [
          "Ja, wenn die vorhandenen medizinischen Unterlagen, Tätigkeitsbeschreibungen und weiteren Informationen für die vereinbarte Fragestellung ausreichen.",
          "Wenn eine persönliche Einschätzung der Belastbarkeit oder ein Gespräch zu beruflichen Rahmenbedingungen erforderlich ist, kann eine persönliche oder telemedizinische Vorstellung sinnvoll sein.",
        ],
      },
      {
        id: "arbeitsmedizin-faq-7",
        question:
          "Wie unterstützt die Begutachtung Wiedereingliederung und berufliche Planung?",
        answer: [
          "Die Begutachtung kann zeigen, welche Tätigkeiten, Belastungen und Rahmenbedingungen realistisch sind. Dadurch erhalten Auftraggeber Hinweise darauf, ob eine Rückkehr in eine bisherige Tätigkeit, eine Anpassung des Arbeitsplatzes, eine schrittweise Wiedereingliederung oder eine berufliche Neuorientierung sinnvoll sein kann.",
          "Die Begutachtung ersetzt keine Entscheidung über konkrete Maßnahmen, liefert aber die fachliche Grundlage, um diese Entscheidungen besser vorzubereiten.",
        ],
      },
    ],
  },
};
