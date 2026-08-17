import {
  Brain,
  ClipboardCheck,
  HeartPulse,
  Layers,
  Stethoscope,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type AssessmentOffering = {
  id: string;
  stageLabel: string;
  title: string;
  intro: string;
  bullets: string[];
  cta: string;
  to: string;
  icon: LucideIcon;
  imageSrc: string;
  imageAlt: string;
  panelClassName: string;
};

export const HOME_ASSESSMENT_OFFERINGS: AssessmentOffering[] = [
  {
    id: "medizinisch",
    stageLabel: "Medizinische Begutachtungen",
    title: "Gesundheitliche Einschränkungen differenziert beurteilen",
    intro:
      "Medizinische Begutachtungen ordnen relevante Befunde, körperliche Einschränkungen und das individuelle Leistungsvermögen nachvollziehbar ein. Sie schaffen eine fundierte fachliche Basis, wenn gesundheitliche Aspekte für den weiteren Fallverlauf entscheidend sind.",
    bullets: [
      "Relevante gesundheitliche Befunde strukturiert einordnen",
      "Körperliche und funktionelle Einschränkungen bewerten",
      "Individuelles Leistungsvermögen nachvollziehbar darstellen",
      "Medizinische Fragestellungen konkret beantworten",
    ],
    cta: "Mehr erfahren",
    to: "/medizinische-begutachtungen",
    icon: Stethoscope,
    imageSrc: "/pulsarmedical-jobcenter-1.jpg",
    imageAlt: "Medizinische Begutachtung im Beratungsgespräch",
    panelClassName: "bg-pm-dark-container",
  },
  {
    id: "psychologisch",
    stageLabel: "Psychologische & psychiatrische Begutachtungen",
    title: "Psychische Belastungen und Ressourcen fundiert einordnen",
    intro:
      "Psychologische und psychiatrische Begutachtungen helfen dabei, psychische Erkrankungen, Belastungsfaktoren und Ressourcen differenziert zu beurteilen. Sie zeigen auf, wie sich die individuelle Situation auf Mitwirkung, Leistungsfähigkeit und berufliche Perspektiven auswirken kann.",
    bullets: [
      "Psychische Belastungen fachlich differenziert beurteilen",
      "Auswirkungen auf Mitwirkung und Leistungsfähigkeit einordnen",
      "Ressourcen und Bewältigungsmöglichkeiten sichtbar machen",
      "Weiteren Klärungs- oder Unterstützungsbedarf benennen",
    ],
    cta: "Mehr erfahren",
    to: "/psychologische-begutachtungen",
    icon: Brain,
    imageSrc: "/pulsarmedical-jobcenter-2.jpg",
    imageAlt: "Psychologische Begutachtung in der Beratung",
    panelClassName: "bg-pm-dark-button",
  },
  {
    id: "arbeitsmedizinisch",
    stageLabel: "Arbeits- & sozialmedizinische Begutachtungen",
    title: "Gesundheit und Arbeitsrealität gemeinsam betrachten",
    intro:
      "Arbeits- und sozialmedizinische Begutachtungen verbinden die gesundheitliche Situation mit konkreten beruflichen Anforderungen und sozialen Rahmenbedingungen. So wird erkennbar, welche Tätigkeiten möglich sind und unter welchen Bedingungen eine berufliche Perspektive realistisch bleibt.",
    bullets: [
      "Gesundheitliche Belastbarkeit im Arbeitskontext bewerten",
      "Konkrete Tätigkeits- und Arbeitsplatzanforderungen berücksichtigen",
      "Soziale und berufliche Rahmenbedingungen einbeziehen",
      "Realistische Einsatz- und Entwicklungsmöglichkeiten aufzeigen",
    ],
    cta: "Mehr erfahren",
    to: "/arbeits-sozialmedizinische-begutachtungen",
    icon: HeartPulse,
    imageSrc: "/pulsarmedical-jobcenter-3.jpg",
    imageAlt: "Arbeits- und sozialmedizinische Einschätzung",
    panelClassName: "bg-pm-dark-button",
  },
  {
    id: "fachuebergreifend",
    stageLabel: "Fachübergreifende Begutachtungen",
    title: "Wenn ein Fall mehrere Fachperspektiven braucht",
    intro:
      "Komplexe Fälle lassen sich nicht immer aus einer einzelnen medizinischen oder psychologischen Perspektive beurteilen. PULSAR Medical bringt die erforderlichen Fachrichtungen gezielt zusammen und führt die Ergebnisse zu einer abgestimmten Gesamteinschätzung.",
    bullets: [
      "Passende Fachrichtungen gezielt miteinander verbinden",
      "Medizinische und psychologische Aspekte gemeinsam betrachten",
      "Komplexe Zusammenhänge vollständig einordnen",
      "Ergebnisse zu einer Gesamteinschätzung zusammenführen",
    ],
    cta: "Mehr erfahren",
    to: "/fachuebergreifende-begutachtungen",
    icon: Layers,
    imageSrc: "/3.png.webp",
    imageAlt: "Fachübergreifende Begutachtung im Team",
    panelClassName: "bg-pm-dark-button",
  },
  {
    id: "meldeversaeumnisse",
    stageLabel: "Fachliche Einschätzung bei Meldeversäumnissen",
    title: "Früh intervenieren, bevor der Kontakt abbricht",
    intro:
      "Wenn gesundheitliche oder psychische Belastungen hinter einem Meldeversäumnis stehen können, ermöglicht PULSAR Medical eine zeitnahe fachliche Ersteinschätzung. Das Jobcenter erhält eine Grundlage, um den weiteren Unterstützungs-, Behandlungs- oder Klärungsbedarf einzuordnen.",
    bullets: [
      "Mögliche gesundheitliche Ursachen frühzeitig einordnen",
      "Strukturierte persönliche Vorstellung zeitnah durchführen",
      "Unterstützungs- und Klärungsbedarf nachvollziehbar benennen",
      "Bei Bedarf direkt in eine vertiefte Begutachtung überführen",
    ],
    cta: "Mehr erfahren",
    to: "/meldeversaeumnisse",
    icon: ClipboardCheck,
    imageSrc: "/5.png.webp",
    imageAlt: "Fachliche Ersteinschätzung bei Meldeversäumnissen",
    panelClassName: "bg-pm-dark-container",
  },
];
