import { ContentImageRow } from "@/components/ContentImageRow";

const SERVICE_BLOCKS = [
  {
    title: "Medical Assessment",
    content:
      "Um Menschen gezielt zu helfen, benötigen Sie klare Informationen über deren Gesundheit. Wir erstellen medizinische Berichte und Gutachten. Unsere Expert:innen prüfen den Gesundheitszustand und die Leistungsfähigkeit anhand von Unterlagen und Untersuchungen (live und/oder online).",
    imageSrc: "/pulsarmedical-jobcenter-1.jpg",
    imageAlt: "Beratungsgespräch zu medizinischer Einschätzung",
    imagePosition: "left" as const,
  },
  {
    title: "Medical Consulting",
    content:
      "Wir helfen Ihnen und Ihrem Team bei verschiedenen medizinischen Fragen. Sie bekommen Expert:innen an Ihre Seite gestellt, um spezifische Fälle zu besprechen. Egal, ob im Einzelgespräch oder im Team, live oder online – zusammen analysieren wir knifflige Fälle und finden passende Maßnahmen für eine bessere Gesundheit und berufliche Zukunft der Betroffenen.",
    imageSrc: "/pulsarmedical-jobcenter-2.jpg",
    imageAlt: "Medizinische Beratung im Team",
    imagePosition: "right" as const,
  },
  {
    title: "Medical Facts",
    content:
      "Wir bereiten präzise und verständlich medizinische Informationen für unterschiedliche Kontexte auf. Sie erhalten medizinische oder gesundheitsrelevante Informationen, die exakt auf Ihre Organisation, Ihr Angebot oder Ihr Produkt zugeschnitten sind. Beispielsweise erstellen wir Fact-Sheets zu unterschiedlichen Themen wie Long-Covid oder Angststörungen.",
    imageSrc: "/pulsarmedical-jobcenter-3.jpg",
    imageAlt: "Aufbereitung medizinischer Fakten und Informationen",
    imagePosition: "left" as const,
  },
];

export function JobCenterServicesSection() {
  return (
    <section
      className="bg-pm-light-container py-16 md:py-24"
      aria-label="Leistungen für Jobcenter"
    >
      <div className="mx-auto max-w-6xl space-y-20 px-6 md:space-y-28 md:px-8 lg:px-10">
        {SERVICE_BLOCKS.map((block) => (
          <ContentImageRow key={block.title} {...block} />
        ))}
      </div>
    </section>
  );
}
