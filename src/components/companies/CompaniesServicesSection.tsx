import { ContentImageRow } from "@/components/ContentImageRow";

const SERVICE_BLOCKS = [
  {
    title: "medical case",
    content:
      "Medical Case Consulting bietet Teams fundierte medizinische Beratung zu konkreten Teilnehmendenfällen inklusive schriftlicher ärztlicher Empfehlung. Nach Aufbereitung des Falles erfolgt eine digitale Beratung zur Klärung medizinischer Fragestellungen (0,5 h pro Fall) mit anschließender schriftlicher Stellungnahme/ Empfehlung – datenschutzkonform und inklusive organisatorischer Abwicklung.",
    imageSrc: "/pulsarmedical-unternehmer-1.jpg",
    imageAlt: "Medical Case Consulting",
    imagePosition: "left" as const,
  },
  {
    title: "medical team",
    content:
      "Medical Team Consulting unterstützt größere Teams bei team- und systemorientierten Fragestellungen. In einer digitalen zweistündigen Beratung werden bis zu drei berufliche Fälle pro Termin medizinisch eingeordnet und praxisnahe Handlungsempfehlungen für Team oder Organisation abgeleitet – datenschutzkonform und inkl. organisatorischer Abwicklung.",
    imageSrc: "/pulsarmedical-unternehmer-2.jpg",
    imageAlt: "Medical Team Consulting",
    imagePosition: "right" as const,
  },
  {
    title: "medical direct",
    content:
      "Medical Direct Consulting ermöglicht eine ärztliche Onlineberatung direkt mit Einzelpersonen inklusive schriftlicher Empfehlung. Nach Aufbereitung der Fragestellung erfolgt eine digitale Einzelberatung (bis zu 45 Minuten) mit anschließender schriftlicher Stellungnahme/Handlungsempfehlung – datenschutzkonform und inklusive organisatorischer Abwicklung.",
    imageSrc: "/pulsarmedical-unternehmer-2.jpg",
    imageAlt: "Medical Direct Consulting",
    imagePosition: "left" as const,
  },
];

export function CompaniesServicesSection() {
  return (
    <section
      className="bg-pm-light-container py-16 md:py-24"
      aria-labelledby="companies-services-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-10">
        <h2
          id="companies-services-heading"
          className="text-center text-3xl font-semibold lowercase tracking-tight text-pm-light-headline md:text-4xl"
        >
          unsere verfahren &amp; tools
        </h2>

        <div className="mt-16 space-y-20 md:mt-20 md:space-y-28">
          {SERVICE_BLOCKS.map((block) => (
            <ContentImageRow key={block.title} {...block} />
          ))}
        </div>
      </div>
    </section>
  );
}
