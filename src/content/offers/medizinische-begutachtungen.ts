import { Stethoscope } from "lucide-react";
import type { OfferPageContent } from "@/content/offerPages";
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
    title: "Medizinische Begutachtungen",
    paragraphs: ["Inhalt folgt."],
    badges: ["DSGVO", "Bundesweit verfügbar", "Persönlich"],
  },
  useCases: {
    headingId: "medizinische-begutachtungen-use-cases-heading",
    title:
      "Medizinische Begutachtungen, wenn belastbare Einschätzungen gefragt sind",
    description:
      "Hier finden Sie alle Informationen zur medizinischen Begutachtung. Bitte beachten Sie, dass die medizinische Begutachtung nur in der Praxis durchgeführt werden kann.",
    images: [
      {
        src: "/pulsarmedical-jobcenter-1.jpg",
        alt: "Medizinische Begutachtung im Beratungsgespräch",
      },
      {
        src: "/pulsarmedical-jobcenter-2.jpg",
        alt: "Ärztliche Untersuchung und Befundung",
      },
      {
        src: "/pulsarmedical-jobcenter-3.jpg",
        alt: "Medizinische Dokumentation und Auswertung",
      },
    ],
    items: [
      {
        title: "Gesundheitliche Einschränkungen fachlich einordnen",
        description:
          "Wenn gesundheitliche Einschränkungen fachlich eingeordnet werden müssen.",
      },
      {
        title: "Individuelles Leistungsvermögen bewerten",
        description:
          "Wenn das individuelle Leistungsvermögen bewertet werden soll.",
      },
      {
        title: "Körperliche und funktionelle Einschränkungen klären",
        description:
          "Wenn körperliche oder funktionelle Einschränkungen im Fallverlauf relevant sind.",
      },
      {
        title: "Vorhandene Befunde strukturiert bewerten",
        description:
          "Wenn vorhandene Befunde strukturiert bewertet werden sollen.",
      },
      {
        title: "Medizinische Grundlage für weitere Maßnahmen schaffen",
        description:
          "Wenn eine medizinische Grundlage für weitere Maßnahmen benötigt wird.",
      },
      {
        title: "Berufliche Anforderungen mit Gesundheit abgleichen",
        description:
          "Wenn berufliche Anforderungen mit der gesundheitlichen Situation abgeglichen werden sollen.",
      },
    ],
  },
  compare: MEDIZINISCHE_BEGUTACHTUNGEN_COMPARE,
  process: MEDIZINISCHE_BEGUTACHTUNGEN_PROCESS,
  partnership: MEDIZINISCHE_BEGUTACHTUNGEN_PARTNERSHIP,
  benefits: MEDIZINISCHE_BEGUTACHTUNGEN_BENEFITS,
  faq: {
    headingId: "medizinische-begutachtungen-faq-heading",
    title: "Medizinische Begutachtungen",
    items: [
      {
        id: "medizinische-begutachtungen-faq-1",
        question: "Was ist eine medizinische Begutachtung?",
        answer:
          "Eine medizinische Begutachtung ist eine medizinische Einschätzung der Gesundheit eines Menschen.",
      },
    ],
  },
};
