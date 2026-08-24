import {
  ClipboardList,
  FileCheck,
  FileText,
  Globe,
  MonitorSmartphone,
  Send,
  ShieldCheck,
  Stethoscope,
  TrendingUp,
  User,
  UserCheck,
  Video,
} from "lucide-react";
import type { OfferPageContent } from "@/content/offerPages";
import { OFFER_PRIMARY_CTA, OFFER_SECONDARY_CTA } from "@/content/cta";

export const medizinischeBegutachtungen: OfferPageContent = {
  slug: "medizinische-begutachtungen",
  navLabel: "Medizinische Begutachtungen",
  seo: {
    title: "Medizinische Begutachtungen",
    description:
      "PULSAR Medical beurteilt Befunde, funktionelle Einschränkungen und Leistungsvermögen – damit Sie gesundheitliche Auswirkungen im konkreten Fall sicher bewerten.",
  },
  icon: Stethoscope,
  hero: {
    ariaLabel: "Medizinische Begutachtungen",
    overline: "Medizinische Begutachtungen",
    title: "Gesundheitliche Einschränkungen fundiert einordnen.",
    paragraphs: [
      "PULSAR Medical beurteilt relevante Befunde, funktionelle Einschränkungen und das individuelle Leistungsvermögen – damit Sie gesundheitliche Auswirkungen im konkreten Fall sicher bewerten können.",
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
    headingId: "medizinische-begutachtungen-use-cases-heading",
    title: "Wann sollte eine medizinische Begutachtung beauftragt werden?",
    description:
      "Eine medizinische Begutachtung ist sinnvoll, wenn gesundheitliche Informationen für die weitere Fallsteuerung relevant sind, vorhandene Unterlagen kein klares Gesamtbild ergeben oder die Leistungsfähigkeit fachlich eingeordnet werden muss.",
    image: {
      src: "/offers/medizinische_begutachtungen/magnific_contemporary-documentary-_huFeU9OvqL.webp",
      alt: "Medizinische Begutachtung im Beratungsgespräch",
    },
    items: [
      {
        title: "Gesundheitliche Einschränkungen fachlich einordnen",
        description:
          "Vorliegende Befunde, Diagnosen und Beschwerden müssen zu einer nachvollziehbaren medizinischen Gesamtsicht zusammengeführt werden.",
      },
      {
        title: "Leistungsvermögen realistisch bewerten",
        description:
          "Es muss geklärt werden, welche körperlichen Belastungen möglich sind und wo relevante Einschränkungen bestehen.",
      },
      {
        title: "Berufliche Anforderungen mit Gesundheit abgleichen",
        description:
          "Berufliche Tätigkeiten und Anforderungen werden der individuellen gesundheitlichen Situation und Belastbarkeit gegenübergestellt.",
      },
      {
        title: "Unterschiedliche Befunde zusammenführen",
        description:
          "Vorhandene Unterlagen, Behandlungsverläufe und medizinische Einschätzungen ergeben noch kein klares Bild für den jeweiligen Fall.",
      },
      {
        title: "Nächste Maßnahmen fachlich vorbereiten",
        description:
          "Die gesundheitliche Situation muss eingeordnet werden, bevor weitere Schritte wie Integration, Rehabilitation oder Leistungsprüfung geplant werden.",
      },
      {
        title: "Mögliche Entwicklung realistisch einschätzen",
        description:
          "Es wird eine medizinische Einschätzung benötigt, wie sich Belastbarkeit und Leistungsfähigkeit voraussichtlich weiterentwickeln können.",
      },
    ],
  },
  compare: {
    headingId: "medizinische-begutachtungen-compare-heading",
    title: "Was wird bei einer medizinischen Begutachtung beurteilt?",
    description:
      "Beurteilt werden die gesundheitliche Situation, bestehende Einschränkungen, das individuelle Leistungsvermögen und die Auswirkungen auf die konkrete berufliche oder leistungsrechtliche Fragestellung.",
    variant: "positive",
    alternative: {
      title: "Was wir betrachten",
      items: [
        "Relevante Befunde, Diagnosen und Krankheitsverläufe",
        "Körperliche und funktionelle Einschränkungen",
        "Das individuelle Leistungsvermögen",
        "Berufliche Tätigkeiten und konkrete Anforderungen",
        "Ressourcen und vorhandene Belastbarkeit",
        "Voraussichtliche Entwicklung der gesundheitlichen Situation",
      ],
    },
    pulsar: {
      title: "Welche Ergebnisse Sie erhalten",
      items: [
        "Eine fachlich eingeordnete Gesamtsicht der gesundheitlichen Situation",
        "Welche Belastungen möglich sind und wo konkrete Grenzen bestehen",
        "Wie leistungsfähig eine Person unter den gegebenen Voraussetzungen ist",
        "Ob und unter welchen Bedingungen eine Tätigkeit realistisch möglich ist",
        "Welche Einsatzmöglichkeiten oder Entwicklungsperspektiven bestehen",
        "Welche Veränderungen der Belastbarkeit und Leistungsfähigkeit zu erwarten sind",
      ],
    },
  },
  process: {
    headingId: "medizinische-begutachtungen-process-heading",
    title: "Wie läuft eine medizinische Begutachtung ab?",
    subtitle:
      "Von der ersten Fragestellung bis zur sicheren Bereitstellung der Ergebnisse übernimmt PULSAR Medical die Organisation und sorgt für einen klar abgestimmten Ablauf.",
    steps: [
      {
        stageLabel: "Schritt 1",
        title: "Fragestellung und Auftrag gemeinsam klären",
        description: [
          "Zu Beginn stimmen wir mit Ihnen ab, welche Fragen beantwortet werden sollen, welche Unterlagen benötigt werden und in welchem Umfang die Begutachtung durchgeführt wird.",
          "Gemeinsam legen wir fest, welche medizinische Fachrichtung erforderlich ist und welche Durchführungsform zum Fall und zu Ihren organisatorischen Anforderungen passt.",
          "Auf dieser Grundlage richten wir den Auftrag, die Kommunikation und den weiteren Ablauf verbindlich ein.",
        ],
        icon: Send,
        imageSrc:
          "/offers/medizinische_begutachtungen/magnific_documentarystyle-editoria_jU7FW8xLD0.webp",
        imageAlt: "Abstimmung der medizinischen Fragestellung",
      },
      {
        stageLabel: "Schritt 2",
        title: "Passende medizinische Expertise gezielt einsetzen",
        description: [
          "PULSAR Medical wählt die Fachkraft aus, die für die jeweilige Fragestellung und den konkreten Fall die erforderliche Expertise mitbringen.",
          "Dabei berücksichtigen wir die benötigte Fachrichtung, den Durchführungsort und die vereinbarten Kapazitäten.",
          "Bei komplexen Fragestellungen beziehen wir bei Bedarf weitere medizinische oder psychologische Perspektiven ein.",
        ],
        icon: Stethoscope,
        imageSrc: "/offers/medizinische_begutachtungen/similar-5535720.webp",
        imageAlt: "Auswahl der medizinischen Fachkraft",
      },
      {
        stageLabel: "Schritt 3",
        title: "Termine, Unterlagen und Durchführung zentral steuern",
        description: [
          "Die feste Projektkoordination organisiert Termine, bereitet Unterlagen vor und begleitet die Kommunikation zwischen allen Beteiligten.",
          "Die Begutachtung erfolgt persönlich, telemedizinisch oder nach Aktenlage – abhängig von der Fragestellung und den fachlichen Anforderungen.",
          "Bei gebündelten Terminen oder größeren Fallzahlen können Begutachtungen auch bundesweit direkt vor Ort umgesetzt werden.",
        ],
        icon: ClipboardList,
        imageSrc:
          "/offers/medizinische_begutachtungen/magnific_documentarystyle-editoria_P3Zsv3G42C.webp",
        imageAlt: "Zentrale Steuerung von Terminen und Unterlagen",
      },
      {
        stageLabel: "Schritt 4",
        title: "Ergebnisse sicher erhalten und weiterverwenden",
        description: [
          "Nach Abschluss der Begutachtung erhalten Sie eine strukturierte medizinische Beurteilung, die die vereinbarten Fragen nachvollziehbar beantwortet.",
          "Ergebnisse und Unterlagen werden über vorab abgestimmte, geschützte und datenschutzkonforme Wege bereitgestellt.",
          "Ihre feste Projektkoordination bleibt auch nach Abschluss für organisatorische Rückfragen und weitere Abstimmungen erreichbar.",
        ],
        icon: FileCheck,
        imageSrc: "/offers/medizinische_begutachtungen/similar-5535771.webp",
        imageAlt: "Bereitstellung der medizinischen Ergebnisse",
      },
    ],
  },
  partnership: {
    headingId: "medizinische-begutachtungen-partnership-heading",
    title: "Welche Durchführungsarten gibt es?",
    subtitle:
      "Je nach Fragestellung, Aktenlage und fachlicher Erforderlichkeit erfolgt die Begutachtung persönlich, telemedizinisch oder auf Grundlage vorhandener Unterlagen.",
    steps: [
      {
        number: "01",
        title: "Persönliche Begutachtung",
        description:
          "Die zu begutachtende Person stellt sich bei einer passenden medizinischen Fachkraft vor. Untersuchung, Anamnese und Rückfragen erfolgen direkt im Termin – bundesweit und bei Bedarf auch vor Ort beim Auftraggeber.",
        icon: User,
      },
      {
        number: "02",
        title: "Telemedizinische Begutachtung",
        description:
          "Die zu begutachtende Person stellt sich per Video bei einer passenden medizinischen Fachkraft vor. Befunde, Unterlagen und Rückfragen werden im Gespräch einbezogen, wenn Fragestellung und individuelle Situation dies zulassen.",
        icon: Video,
      },
      {
        number: "03",
        title: "Begutachtung nach Aktenlage",
        description:
          "Die medizinische Fachkraft beurteilt vorhandene Befunde, Berichte und Unterlagen anhand der vereinbarten Zielfragen. Eine persönliche Vorstellung ist nicht erforderlich, wenn die Aktenlage für die Fragestellung ausreicht.",
        icon: FileText,
      },
    ],
  },
  benefits: {
    headingId: "medizinische-begutachtungen-benefits-heading",
    title: "Warum mit PULSAR Medical?",
    subtitle:
      "PULSAR Medical übernimmt die Organisation medizinischer Begutachtungen – von der Auswahl der passenden Fachrichtung über die Terminplanung bis zur sicheren Bereitstellung der Ergebnisse.",
    cta: { label: "Unverbindlich anfragen", to: "/kontakt" },
    items: [
      {
        title: "Bundesweit verfügbares Netzwerk",
        description:
          "PULSAR Medical setzt die Fachrichtung ein, die zu Ihrer Fragestellung passt – bundesweit und auch bei komplexen Fällen oder größeren Auftragsvolumen.",
        icon: Globe,
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
        title: "Medizinische Expertise passend zum Fall",
        description:
          "Relevante Befunde, Fragestellungen und Anforderungen bestimmen, welche medizinische Fachkraft für den jeweiligen Auftrag eingesetzt wird.",
        icon: Stethoscope,
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
    headingId: "medizinische-begutachtungen-faq-heading",
    title: "Häufig gestellte Fragen und Antworten",
    subtitle: "Alles Wichtige zu Angeboten, Abläufen und Datenschutz.",
    items: [
      {
        id: "medizinische-begutachtungen-faq-1",
        question: "Was ist eine medizinische Begutachtung?",
        answer: [
          "Eine medizinische Begutachtung beurteilt die gesundheitliche Situation einer Person im Hinblick auf eine konkrete Fragestellung. Dabei werden relevante Befunde, Diagnosen, funktionelle Einschränkungen und das individuelle Leistungsvermögen fachlich eingeordnet.",
          "Das Ergebnis beantwortet beispielsweise:",
        ],
        bullets: [
          "Welche gesundheitlichen Einschränkungen bestehen?",
          "Welche körperlichen Belastungen sind möglich?",
          "Wo liegen konkrete Belastungsgrenzen?",
          "Welche Tätigkeiten oder Anforderungen sind realistisch?",
          "Wie kann sich die Belastbarkeit voraussichtlich entwickeln?",
        ],
      },
      {
        id: "medizinische-begutachtungen-faq-2",
        question:
          "Wann sollte eine medizinische Begutachtung beauftragt werden?",
        answer: [
          "Eine medizinische Begutachtung ist sinnvoll, wenn vorhandene Unterlagen kein klares Gesamtbild ergeben oder gesundheitliche Einschränkungen für eine Entscheidung relevant sind.",
          "Typische Einsatzfälle sind:",
        ],
        bullets: [
          "Das Leistungsvermögen muss fachlich eingeschätzt werden",
          "Unterschiedliche Befunde oder Krankheitsverläufe müssen zusammengeführt werden",
          "Berufliche Anforderungen müssen mit der gesundheitlichen Belastbarkeit abgeglichen werden",
          "Eine Integrations-, Reha- oder Leistungsentscheidung steht an",
          "Die weitere Entwicklung der Belastbarkeit soll eingeschätzt werden",
        ],
      },
      {
        id: "medizinische-begutachtungen-faq-3",
        question: "Was liefert eine medizinische Begutachtung?",
        answer: [
          "Eine medizinische Begutachtung liefert eine fachliche Einschätzung der gesundheitlichen Situation und ihrer Auswirkungen auf die konkrete Fragestellung.",
          "Auftraggeber erhalten insbesondere Informationen zu:",
        ],
        bullets: [
          "Befunden, Diagnosen und Krankheitsverläufen",
          "Körperlichen und funktionellen Einschränkungen",
          "Individuellem Leistungsvermögen",
          "Beruflicher Belastbarkeit",
          "Realistischen Einsatzmöglichkeiten",
          "Voraussichtlicher Entwicklung der Leistungsfähigkeit",
        ],
      },
      {
        id: "medizinische-begutachtungen-faq-4",
        question:
          "Welche Fachrichtungen können bei medizinischen Begutachtungen eingesetzt werden?",
        answer: [
          "Welche medizinische Fachrichtung eingesetzt wird, richtet sich nach der konkreten Zielfrage und dem jeweiligen Fall. PULSAR Medical stimmt den erforderlichen fachlichen Schwerpunkt vor Beginn des Auftrags mit dem Auftraggeber ab.",
          "Bei komplexen Fällen können weitere medizinische, psychologische oder psychiatrische Perspektiven ergänzt werden. Wenn mehrere Fachrichtungen erforderlich sind, kann PULSAR Medical eine fachübergreifende Begutachtung organisieren.",
        ],
      },
      {
        id: "medizinische-begutachtungen-faq-5",
        question: "Können medizinische Begutachtungen nach Aktenlage erfolgen?",
        answer: [
          "Ja, wenn die vorhandenen Befunde, Berichte und Unterlagen für die vereinbarte Fragestellung ausreichen. Bei einer Begutachtung nach Aktenlage prüft die medizinische Fachkraft die verfügbaren Unterlagen anhand der abgestimmten Zielfragen.",
          "Eine persönliche Vorstellung ist jedoch erforderlich, wenn Untersuchung, Anamnese oder Rückfragen notwendig sind, um die gesundheitliche Situation fachlich ausreichend beurteilen zu können.",
        ],
      },
      {
        id: "medizinische-begutachtungen-faq-6",
        question:
          "Können medizinische Begutachtungen auch telemedizinisch durchgeführt werden?",
        answer: [
          "Ja. Eine telemedizinische Begutachtung kann erfolgen, wenn Fragestellung, Unterlagen und individuelle Situation dies zulassen. Die zu begutachtende Person stellt sich dabei per Video bei einer passenden medizinischen Fachkraft vor.",
          "Befunde, vorhandene Unterlagen und Rückfragen werden in das Gespräch einbezogen. Ob eine telemedizinische Durchführung fachlich geeignet ist, wird vor Beginn des Auftrags geprüft.",
        ],
      },
      {
        id: "medizinische-begutachtungen-faq-7",
        question: "Wie läuft die Beauftragung medizinischer Begutachtungen ab?",
        answer: [
          "Der Auftrag beginnt mit der Abstimmung von Zielfragen, Umfang, Unterlagen und Durchführungsform. PULSAR Medical setzt anschließend die passende medizinische Fachkraft ein und organisiert Termine, Unterlagen und Kommunikation.",
          "Nach der Begutachtung wird geprüft, ob die vereinbarten Fragen vollständig beantwortet sind. Die Ergebnisse werden über abgestimmte und geschützte Übermittlungswege bereitgestellt.",
        ],
      },
    ],
  },
};
