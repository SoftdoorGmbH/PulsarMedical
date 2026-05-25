export type CareerJob = {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  mailSubject: string;
};

export const CAREER_JOBS: CareerJob[] = [
  {
    id: "berater-gesundheit",
    title: "Berater:in Gesundheit (m/w/d)",
    location: "Remote / Mannheim",
    type: "Vollzeit oder Teilzeit",
    department: "Beratung",
    mailSubject: "Bewerbung: Berater:in Gesundheit",
  },
  {
    id: "psychologe-beratung",
    title: "Psycholog:in in der Beratung (m/w/d)",
    location: "Remote",
    type: "Vollzeit",
    department: "Beratung",
    mailSubject: "Bewerbung: Psycholog:in Beratung",
  },
  {
    id: "projektassistenz",
    title: "Projektassistenz (m/w/d)",
    location: "Hybrid · München",
    type: "Teilzeit",
    department: "Operations",
    mailSubject: "Bewerbung: Projektassistenz",
  },
  {
    id: "aerztliche-beratung",
    title: "Ärzt:in für medizinische Beratung (m/w/d)",
    location: "Remote",
    type: "Freelance oder Teilzeit",
    department: "Medical Consulting",
    mailSubject: "Bewerbung: Ärztliche Beratung",
  },
];

export const CAREER_HIGHLIGHTS = [
  {
    id: "purpose",
    title: "Sinnvolle Arbeit",
    text: "In einem interdisziplinären Team aus Medizin, Psychologie und Beratung unterstützen Sie Menschen in herausfordernden Lebenssituationen.",
  },
  {
    id: "growth",
    title: "Raum zum Wachsen",
    text: "Wir fördern Fortbildung, fachlichen Austausch und persönliche Entwicklung — mit flachen Hierarchien und echter Mitgestaltung.",
  },
  {
    id: "impact",
    title: "Spürbare Wirkung",
    text: "Ihre Arbeit erreicht Jobcenter, Unternehmen und Betroffene — mit messbarem Beitrag zu Gesundheit, Teilhabe und beruflicher Perspektive.",
  },
] as const;
