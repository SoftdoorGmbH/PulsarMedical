import {
  Building2,
  ClipboardCheck,
  ClipboardList,
  FileCheck,
  MapPin,
  MonitorSmartphone,
  Send,
  ShieldCheck,
  Stethoscope,
  User,
  Video,
} from "lucide-react";
import type { OfferPageContent } from "@/content/offerPages";
import { OFFER_PRIMARY_CTA, OFFER_SECONDARY_CTA } from "@/content/cta";

export const meldeversaeumnisse: OfferPageContent = {
  slug: "meldeversaeumnisse",
  navLabel: "Fachliche Einschätzung bei Meldeversäumnissen",
  icon: ClipboardCheck,
  hero: {
    ariaLabel: "Fachliche Einschätzung bei Meldeversäumnissen",
    overline: "Fachliche Einschätzung bei Meldeversäumnissen",
    title: "Meldeversäumnisse fachlich klären, bevor der Kontakt abbricht.",
    paragraphs: [
      "PULSAR Medical unterstützt Jobcenter dabei, gesundheitliche oder psychische Ursachen frühzeitig einzuordnen, wenn ein Meldeversäumnis auf eine erschwerte Mitwirkung hinweisen kann.",
    ],
    badges: [
      "Zeitnahe persönliche Vorstellungen",
      "Psychologische und medizinische Expertise",
      "Durchführung direkt vor Ort möglich",
    ],
    primaryCta: OFFER_PRIMARY_CTA,
    secondaryCta: OFFER_SECONDARY_CTA,
  },
  useCases: {
    headingId: "meldeversaeumnisse-use-cases-heading",
    title:
      "Wann ist eine fachliche Einschätzung bei Meldeversäumnissen sinnvoll?",
    description:
      "Eine fachliche Einschätzung kann sinnvoll sein, wenn Hinweise darauf bestehen, dass gesundheitliche oder psychische Belastungen eine aktive Zusammenarbeit mit dem Jobcenter erschweren.",
    image: {
      src: "/offers/meldeversauemnisse/2-business-man-are-sitting-table-with-man-suit-discuss-about-projec 2.jpg",
      alt: "Fachliche Ersteinschätzung bei Meldeversäumnissen",
    },
    items: [
      {
        title: "Das Meldeversäumnis lässt sich nicht eindeutig einordnen",
        description:
          "Es ist offen, ob hinter dem Verhalten fehlende Mitwirkung, eine gesundheitliche Belastung oder eine psychische Erkrankung stehen kann.",
      },
      {
        title: "Wiederholte Kontaktprobleme treten auf",
        description:
          "Termine werden wiederholt nicht wahrgenommen, Gespräche kommen nicht zustande oder eine kontinuierliche Zusammenarbeit ist erkennbar erschwert.",
      },
      {
        title: "Psychische Belastungen liegen nahe",
        description:
          "Auffälligkeiten im Kontakt, vorliegende Informationen oder frühere Fallverläufe können auf psychische Belastungen oder Erkrankungen hinweisen.",
      },
      {
        title: "Eine vollständige Begutachtung ist noch nicht erforderlich",
        description:
          "Zunächst soll fachlich geklärt werden, ob und in welchem Umfang ein weiterer medizinischer, psychiatrischer oder psychologischer Klärungsbedarf besteht.",
      },
      {
        title: "Die Integrationsplanung kommt nicht weiter",
        description:
          "Ohne eine fachliche Einordnung lässt sich nicht sicher beurteilen, welche Unterstützung, Behandlung oder weitere Klärung erforderlich ist.",
      },
    ],
  },
  compare: {
    headingId: "meldeversaeumnisse-compare-heading",
    title: "Was wird bei der fachlichen Einschätzung geklärt?",
    description:
      "Die persönliche Vorstellung dient dazu, mögliche gesundheitliche oder psychische Ursachen für das Meldeverhalten einzuordnen und den weiteren Klärungsbedarf zu bestimmen.",
    variant: "positive",
    alternative: {
      title: "Was wir betrachten",
      items: [
        "Aktuelle gesundheitliche und psychische Belastungen",
        "Hinweise auf psychische Erkrankungen oder Krisen",
        "Auswirkungen auf Kontakt- und Mitwirkungsfähigkeit",
        "Aktuelle Stabilität und individuelle Ressourcen",
        "Bestehender Unterstützungs- oder Behandlungsbedarf",
        "Notwendigkeit einer vertieften Begutachtung",
      ],
    },
    pulsar: {
      title: "Welche Ergebnisse Sie erhalten",
      items: [
        "Eine fachliche Einschätzung möglicher Ursachen für das Meldeverhalten",
        "Klarheit darüber, ob eine vertiefte fachliche Abklärung erforderlich ist",
        "Eine Einschätzung, ob gesundheitliche Faktoren die Zusammenarbeit beeinflussen können",
        "Hinweise auf realistische nächste Schritte im jeweiligen Fall",
        "Eine Einordnung, welche Hilfe oder weitere Klärung sinnvoll sein kann",
        "Empfehlung, ob weitere Begutachtungsmaßnahmen folgen sollten",
      ],
    },
  },
  process: {
    headingId: "meldeversaeumnisse-process-heading",
    title: "Wie läuft die fachliche Einschätzung ab?",
    subtitle:
      "PULSAR Medical organisiert zeitnahe Vorstellungen und stellt Jobcentern eine klare Einschätzung für den weiteren Umgang mit dem Fall bereit.",
    steps: [
      {
        stageLabel: "Schritt 1",
        title: "Fälle und Fragestellung bündeln",
        description: [
          "Gemeinsam stimmen wir ab, für welche Fälle eine fachliche Einschätzung benötigt wird und welche Fragen beantwortet werden sollen.",
          "Wir legen fest, wie Unterlagen übermittelt, Termine geplant und Ergebnisse bereitgestellt werden.",
          "Bei Bedarf werden Termine für mehrere leistungsberechtigte Personen gebündelt organisiert.",
        ],
        icon: Send,
        imageSrc:
          "/offers/meldeversauemnisse/colleague-talking-office-with-coffee-company-career-professional-planning-innovative-business-strategy-young-man-with-mature-person-analyst-break-job-feedback-profession.jpg",
        imageAlt: "Bündelung von Fällen und Fragestellungen",
      },
      {
        stageLabel: "Schritt 2",
        title: "Persönliche Vorstellung durchführen",
        description: [
          "Die leistungsberechtigte Person stellt sich bei einer medizinischen, psychiatrischen oder psychologischen Fachkraft vor.",
          "In einem strukturierten Gespräch werden die gesundheitliche Situation, mögliche Belastungen und die aktuelle Mitwirkungsfähigkeit betrachtet.",
          "Die Vorstellung erfolgt respektvoll, empathisch und mit der erforderlichen fachlichen Objektivität.",
        ],
        icon: User,
        imageSrc:
          "/offers/meldeversauemnisse/social-integration-working-team.jpg",
        imageAlt: "Persönliche Vorstellung bei einer Fachkraft",
      },
      {
        stageLabel: "Schritt 3",
        title: "Fachliche Einschätzung bereitstellen",
        description: [
          "Das Jobcenter erhält zeitnah eine nachvollziehbare Einschätzung zum möglichen Einfluss gesundheitlicher oder psychischer Faktoren.",
          "Die Einschätzung zeigt auf, ob weiterer Unterstützungs-, Behandlungs- oder vertiefter Begutachtungsbedarf besteht.",
          "Ergebnisse werden über vorab abgestimmte, geschützte und datenschutzkonforme Wege bereitgestellt.",
        ],
        icon: FileCheck,
        imageSrc: "/pulsarmedical-jobcenter-3.jpg",
        imageAlt: "Bereitstellung der fachlichen Einschätzung",
      },
    ],
  },
  partnership: {
    headingId: "meldeversaeumnisse-partnership-heading",
    title: "Wie und wo können die Vorstellungen stattfinden?",
    subtitle:
      "Die Termine werden passend zu den organisatorischen Möglichkeiten des Jobcenters geplant und können einzeln oder gebündelt durchgeführt werden.",
    steps: [
      {
        number: "01",
        title: "Direkt im Jobcenter",
        description:
          "Persönliche Vorstellungen können bei Bedarf direkt vor Ort im Jobcenter durchgeführt werden. Das erleichtert die Organisation und ermöglicht gebündelte Termine.",
        icon: Building2,
      },
      {
        number: "02",
        title: "In abgestimmten Räumlichkeiten",
        description:
          "Die leistungsberechtigte Person stellt sich bei einer passenden Fachkraft oder an einem gemeinsam abgestimmten Untersuchungsort vor.",
        icon: MapPin,
      },
      {
        number: "03",
        title: "Ergänzend per Video",
        description:
          "Eine telemedizinische Vorstellung kann ergänzend genutzt werden, wenn die Fragestellung, die individuelle Situation und die fachliche Einschätzung dies zulassen.",
        icon: Video,
      },
    ],
  },
  benefits: {
    headingId: "meldeversaeumnisse-benefits-heading",
    title: "Warum mit PULSAR Medical?",
    subtitle:
      "PULSAR Medical verbindet die passende fachliche Einschätzung mit einer Umsetzung, die sich in den Arbeitsalltag von Jobcentern integrieren lässt.",
    cta: { label: "Unverbindlich anfragen", to: "/kontakt" },
    items: [
      {
        title: "Medizinische und psychologische Expertise",
        description:
          "PULSAR Medical setzt Fachkräfte ein, die gesundheitliche und psychische Belastungen fachlich differenziert einordnen können.",
        icon: Stethoscope,
        iconColor: "#4db8e8",
      },
      {
        title: "Zeitnahe Terminorganisation",
        description:
          "Termine können gebündelt geplant und mit einer festen Projektkoordination zügig organisiert werden.",
        icon: ClipboardList,
        iconColor: "#93d9ff",
      },
      {
        title: "Durchführung direkt vor Ort",
        description:
          "Bei Bedarf führt PULSAR Medical persönliche Vorstellungen direkt im Jobcenter oder an einem abgestimmten Ort durch.",
        icon: MapPin,
        iconColor: "#7aaec4",
      },
      {
        title: "Klare Einschätzungen",
        description:
          "Die fachliche Einschätzung hilft dabei, den Klärungsbedarf einzuordnen, bevor unmittelbar ein umfassendes Gutachten beauftragt wird.",
        icon: ClipboardCheck,
        iconColor: "#e0f4fa",
      },
      {
        title: "Direkter Übergang in eine vertiefte Begutachtung",
        description:
          "Wenn sich weiterer Bedarf zeigt, kann die Vorstellung unmittelbar in eine medizinische, psychiatrische oder psychologische Begutachtung überführt werden.",
        icon: MonitorSmartphone,
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
    headingId: "meldeversaeumnisse-faq-heading",
    title: "Häufig gestellte Fragen und Antworten",
    subtitle: "Alles Wichtige zu Angeboten, Abläufen und Datenschutz.",
    items: [
      {
        id: "meldeversaeumnisse-faq-1",
        question: "Was ist die fachliche Einschätzung bei Meldeversäumnissen?",
        answer: [
          "Die fachliche Einschätzung bei Meldeversäumnissen ist ein Angebot für Jobcenter. Sie dient dazu, frühzeitig zu klären, ob gesundheitliche oder psychische Belastungen das Meldeverhalten beeinflussen können.",
          "Die leistungsberechtigte Person stellt sich dafür bei einer medizinischen, psychiatrischen oder psychologischen Fachkraft vor. Das Jobcenter erhält anschließend eine fachliche Einschätzung dazu, ob weiterer Unterstützungs-, Behandlungs- oder Begutachtungsbedarf besteht.",
        ],
      },
      {
        id: "meldeversaeumnisse-faq-2",
        question:
          "Wann ist eine fachliche Einschätzung bei Meldeversäumnissen sinnvoll?",
        answer: [
          "Eine fachliche Einschätzung ist sinnvoll, wenn ein Meldeversäumnis nicht eindeutig als fehlende Mitwirkung eingeordnet werden kann und Hinweise auf gesundheitliche oder psychische Belastungen bestehen.",
          "Typische Hinweise können sein:",
        ],
        bullets: [
          "Wiederholte nicht wahrgenommene Termine",
          "Schwierigkeiten, einen kontinuierlichen Kontakt herzustellen",
          "Auffälligkeiten in Gesprächen oder im Verhalten",
          "Informationen aus bisherigen Fallverläufen",
          "Hinweise auf psychische Krisen oder Erkrankungen",
          "Stillstand in der Integrationsplanung ohne erkennbare Ursache",
        ],
      },
      {
        id: "meldeversaeumnisse-faq-3",
        question: "Was klärt die fachliche Einschätzung?",
        answer: [
          "Die persönliche Vorstellung klärt, ob gesundheitliche oder psychische Belastungen das Meldeverhalten und die Fähigkeit zur Zusammenarbeit beeinflussen können.",
          "Das Jobcenter erhält insbesondere Hinweise dazu:",
        ],
        bullets: [
          "Ob gesundheitliche oder psychische Faktoren relevant sein können",
          "Ob weiterer Unterstützungsbedarf besteht",
          "Ob eine Behandlung oder Beratung sinnvoll sein kann",
          "Ob eine vertiefte medizinische, psychiatrische oder psychologische Begutachtung erforderlich ist",
          "Welche nächsten Schritte im konkreten Fall fachlich sinnvoll sein können",
        ],
      },
      {
        id: "meldeversaeumnisse-faq-4",
        question:
          "Ist eine fachliche Einschätzung bei Meldeversäumnissen bereits ein vollständiges Gutachten?",
        answer: [
          "Nein. Die fachliche Einschätzung dient zunächst der frühen Klärung. Sie soll helfen, den Bedarf einzuordnen, bevor unmittelbar eine umfassende medizinische, psychiatrische oder psychologische Begutachtung beauftragt wird.",
          "Wenn sich bei der Vorstellung weiterer Klärungsbedarf ergibt, kann anschließend eine vertiefte Begutachtung organisiert werden.",
        ],
      },
      {
        id: "meldeversaeumnisse-faq-5",
        question: "Können die Vorstellungen direkt im Jobcenter stattfinden?",
        answer: [
          "Ja. PULSAR Medical kann persönliche Vorstellungen bei Bedarf direkt im Jobcenter durchführen. Das ist insbesondere bei gebündelten Terminen oder mehreren Fällen organisatorisch sinnvoll.",
          "Alternativ kann die Vorstellung bei einer passenden Fachkraft oder an einem gemeinsam festgelegten Ort stattfinden. In geeigneten Fällen kann ergänzend eine Vorstellung per Video möglich sein.",
        ],
      },
      {
        id: "meldeversaeumnisse-faq-6",
        question:
          "Wie schnell können Termine bei Meldeversäumnissen organisiert werden?",
        answer: [
          "Die Terminplanung wird mit dem jeweiligen Jobcenter abgestimmt. PULSAR Medical kann Fälle bündeln und Termine gemeinsam mit einer festen Projektkoordination organisieren.",
          "Konkrete Bearbeitungs- und Wartezeiten hängen vom Standort, Umfang, verfügbaren Fachrichtungen und der vereinbarten Durchführungsform ab. Verbindliche Zeitrahmen sollten projektbezogen festgelegt werden.",
        ],
      },
      {
        id: "meldeversaeumnisse-faq-7",
        question: "Was passiert nach der fachlichen Einschätzung?",
        answer: [
          "Nach der Vorstellung erhält das Jobcenter eine fachliche Einschätzung zum möglichen Einfluss gesundheitlicher oder psychischer Belastungen auf das Meldeverhalten.",
          "Je nach Ergebnis kann anschließend:",
        ],
        bullets: [
          "Unterstützung oder Beratung angepasst werden",
          "Eine Behandlung oder weiterführende Klärung angeregt werden",
          "Eine vertiefte Begutachtung beauftragt werden",
          "Die weitere Integrationsplanung fachlich angepasst werden",
        ],
      },
    ],
  },
};
