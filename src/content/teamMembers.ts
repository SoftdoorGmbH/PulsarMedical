export type TeamMember = {
  id: string;
  name: string;
  role: string;
  qualification?: string;
  quote?: string;
  email: string;
  imageUrl: string;
  imageBgClass: string;
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "nadine-bauer",
    name: "Nadine Bauer",
    role: "Beraterin",
    qualification: "Betriebswirt, systemischer Coach",
    quote:
      "Gesundheit ist das Fundament für ein erfülltes Leben. Mein Herzenswunsch ist es, sich um genau dieses Thema zu kümmern. Gemeinsam mit einem tollen Team, viel Freude und Leidenschaft einen Beitrag zu leisten, dass Menschen sich entwickeln können, bereichert und motiviert mich.",
    email: "n.bauer@pulsarmed.de",
    imageUrl: "/team/nadine-bauer.webp",
    imageBgClass: "bg-pm-light-icon-bg",
  },
  {
    id: "geraldine-brinkhoff",
    name: "Géraldine Brinkhoff",
    role: "Gesundheits- und Krankenpflegerin, Projektassistenz",
    quote:
      "Als Gesundheits- und Krankenpflegerin habe ich viel Erfahrung im Umgang mit Menschen und deren Gesundheit gesammelt. Dabei konnte ich sowohl meine kommunikativen Fähigkeiten als auch mein Wissen in der Betreuung und Beratung vertiefen. Gesundheit ist sehr individuell und hat für jeden Menschen eine andere Bedeutung. Es gilt herauszufinden, welcher Weg für einen selbst der richtige dorthin ist.",
    email: "g.brinkhoff@pulsarmed.de",
    imageUrl: "/team/geraldine-brinkhoff.webp",
    imageBgClass: "bg-[#e4eef5]",
  },
  {
    id: "jennifer-ewegen",
    name: "Jennifer Ewegen",
    role: "Augenoptikmeisterin, Projektassistenz",
    email: "j.ewegen@pulsarmed.de",
    imageUrl: "/team/jennifer-ewegen.webp",
    imageBgClass: "bg-[#eef6fa]",
  },
  {
    id: "stefanie-haeger",
    name: "Stefanie Haeger",
    role: "Psychologin, Beratung",
    quote:
      "Das Thema „Psychische Gesundheit“ ist mir wichtig, weil das Erleben von Selbstwirksamkeit wesentlich dazu beiträgt, wie wir unsere Lebensumstände wahrnehmen und mentalen Herausforderungen erfolgreich bewältigen können.",
    email: "s.haeger@pulsarmed.de",
    imageUrl: "/team/stefanie-haeger.webp",
    imageBgClass: "bg-pm-light-container",
  },
  {
    id: "barbara-heiden",
    name: "Dr. Barbara Heiden",
    role: "Ärztin, Beratung",
    quote:
      "Was Menschen brauchen, um sich gesund und wohl zu fühlen, ist facettenreich und niemals eindimensional. Das jeweils Wesentliche herauszufiltern, ist eine spannende und herausfordernde Aufgabe, der ich mich mit Herzblut widme.",
    email: "b.heiden@pulsarmed.de",
    imageUrl: "/team/barbara-heiden.webp",
    imageBgClass: "bg-[#f4fafd]",
  },
  {
    id: "amelie-koch",
    name: "Dr. Amelie Koch",
    role: "Psychologin, Projektleitung LIVA",
    quote:
      "Ich finde es großartig, dass bei der PULSAR Medical AG umfangreiches Fachwissen und Erfahrungen aus verschiedenen Bereichen der Gesundheitsberatung zusammenfließen. Ich freue mich darauf, in einem interdisziplinären Team meinen Beitrag dazu zu leisten, professionelle und ganzheitliche Gesundheitsangebote für alle Menschen zugänglich zu machen.",
    email: "a.koch@pulsarmed.de",
    imageUrl: "/team/amelie-koch.webp",
    imageBgClass: "bg-pm-light-icon-bg",
  },
  {
    id: "emily-paul",
    name: "Emily Paul",
    role: "Assistenz der Geschäftsführung",
    quote:
      "Unsere Gesundheit ist die wichtigste Basis für alles andere in unserem Leben. Wir sollten alle die Möglichkeit haben unsere Gesundheit zu bewahren.",
    email: "e.paul@pulsarmed.de",
    imageUrl: "/team/emily-paul.webp",
    imageBgClass: "bg-[#e4eef5]",
  },
  {
    id: "tina-schulcz",
    name: "Tina Schulcz",
    role: "Medizinisch-technische Assistentin, Projektassistenz",
    quote:
      "Unsere Gesundheit ist ein vielschichtiges Konzept, das weit über die bloße Analyse von Laborwerten hinausgeht. Stress, emotionale Belastungen und soziale Beziehungen spielen eine zentrale Rolle für unser allgemeines Wohlbefinden. Es liegt mir am Herzen, Menschen auf ihrem Weg zur Gesunderhaltung zu begleiten und zu unterstützen.",
    email: "t.schulcz@pulsarmed.de",
    imageUrl: "/team/tina-schulcz.webp",
    imageBgClass: "bg-[#eef6fa]",
  },
  {
    id: "diana-zybell",
    name: "Diana Zybell",
    role: "Medizinische Fachangestellte, Projektassistenz",
    quote:
      "Mit Gesundheit verbinden wir Positives, wie Lebensfreude und Zufriedenheit. Deshalb sollten wir jeden Tag darauf acht geben.",
    email: "d.zybell@pulsarmed.de",
    imageUrl: "/team/diana-zybell.webp",
    imageBgClass: "bg-pm-light-container",
  },
];

export const ABOUT_STATS = [
  {
    value: "30+",
    label: "Fachkräfte im interdisziplinären Team",
  },
  {
    value: "AZAV",
    label: "Trägerzulassung für Qualifizierung",
  },
  {
    value: "360°",
    label: "Medizinische Expertise für Jobcenter & Unternehmen",
  },
] as const;
