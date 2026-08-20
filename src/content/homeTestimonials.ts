export type HomeTestimonial = {
  id: string;
  company: string;
  quote: string;
  author: string;
  role: string;
};

export const HOME_TESTIMONIALS: readonly HomeTestimonial[] = [
  {
    id: "1",
    company: "Jobcenter Region Hannover",
    quote:
      "„Entscheidend war für uns nicht nur die fachliche Qualität, sondern die verlässliche Steuerung im Hintergrund. PULSAR Medical hat Termine, Unterlagen und Rückfragen so koordiniert, dass unsere Beraterinnen spürbar entlastet wurden.“",
    author: "Leitung Fallmanagement",
    role: "Jobcenter Region Hannover",
  },
  {
    id: "2",
    company: "",
    quote:
      "„Früher mussten wir für jeden komplexen Fall erneut Kapazitäten, Fachrichtungen und Abläufe klären. Mit PULSAR haben wir eine feste Ansprechperson und ein Netzwerk, auf das wir uns verlassen können.“",
    author: "S. Keller",
    role: "Teamleitung Integration",
  },
  {
    id: "3",
    company: "",
    quote:
      "„Gerade bei psychisch belasteten Klientinnen brauchen wir Einschätzungen, die nachvollziehbar und respektvoll formuliert sind. PULSAR liefert genau das – termingerecht und gut aufbereitet.“",
    author: "M. Brandt",
    role: "Sozialberatung",
  },
  {
    id: "4",
    company: "",
    quote:
      "„Für unsere Pilotphase war Flexibilität entscheidend. Wir starteten mit einem überschaubaren Volumen und konnten bei Bedarf skalieren – ohne neue Prozesse von Grund auf aufbauen zu müssen.“",
    author: "Dr. J. Weber",
    role: "Projektverantwortliche, öffentliche Einrichtung",
  },
  {
    id: "5",
    company: "",
    quote:
      "„Der Unterschied ist nicht nur die medizinische Expertise. Der Unterschied ist, dass Koordination, Fachbesetzung und Ergebnisübergabe wirklich zusammenpassen.“",
    author: "K. Hoffmann",
    role: "Fachbereich Rehabilitation",
  },
  {
    id: "6",
    company: "",
    quote:
      "„Wenn Rückfragen dringend sind, erreichen wir jemanden, der den Fall kennt. Das klingt selbstverständlich – war es in unseren bisherigen Abläufen aber nicht.“",
    author: "R. Stein",
    role: "Leistungskoordination",
  },
  {
    id: "7",
    company: "",
    quote:
      "„Was uns überzeugt hat: klare Prozesse für sensible Daten und ein Einstieg, der zu unseren internen Vorgaben passt – ohne monatelange Umstellung.“",
    author: "L. Nguyen",
    role: "Datenschutz und Organisation",
  },
  {
    id: "8",
    company: "",
    quote:
      "„Wir mussten uns nicht an starre Abläufe anpassen. PULSAR Medical bildet ab, wie Jobcenter und Fachkräfte im Alltag tatsächlich arbeiten – persönlich, digital oder nach Aktenlage.“",
    author: "T. Müller",
    role: "Regionalleitung Aktivierung",
  },
] as const;

export const HOME_TESTIMONIALS_SECTION = {
  headline: "Feedback, auf das wir stolz sind",
  subheadline: "Von institutionellen Auftraggebern geschätzt.",
} as const;
