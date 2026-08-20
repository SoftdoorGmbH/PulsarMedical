import { Stethoscope } from "lucide-react";
import type { OfferPageContent } from "@/content/offerPages";
import {
  OFFER_PRIMARY_CTA,
  OFFER_SECONDARY_CTA,
} from "@/content/cta";
import { MEDIZINISCHE_BEGUTACHTUNGEN_COMPARE } from "@/content/offers/medizinische-begutachtungen-compare";
import { MEDIZINISCHE_BEGUTACHTUNGEN_PROCESS } from "@/content/offers/medizinische-begutachtungen-process";
import { MEDIZINISCHE_BEGUTACHTUNGEN_PARTNERSHIP } from "@/content/offers/medizinische-begutachtungen-partnership";
import { MEDIZINISCHE_BEGUTACHTUNGEN_BENEFITS } from "@/content/offers/medizinische-begutachtungen-benefits";

export const medizinischeBegutachtungen: OfferPageContent = {
  slug: "medizinische-begutachtungen",
  navLabel: "Medizinische Begutachtungen",
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
      src: "/pulsarmedical-jobcenter-1.jpg",
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
  compare: MEDIZINISCHE_BEGUTACHTUNGEN_COMPARE,
  process: MEDIZINISCHE_BEGUTACHTUNGEN_PROCESS,
  partnership: MEDIZINISCHE_BEGUTACHTUNGEN_PARTNERSHIP,
  benefits: MEDIZINISCHE_BEGUTACHTUNGEN_BENEFITS,
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
        question: "Wann sollte eine medizinische Begutachtung beauftragt werden?",
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
