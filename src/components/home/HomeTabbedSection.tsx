import { useId, useState } from "react";
import { Link } from "react-router-dom";

type TabPanel = {
  id: string;
  label: string;
  headline: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  cta: { to: string; label: string };
};

const TABS: TabPanel[] = [
  {
    id: "jobcenter",
    label: "Für Jobcenter",
    headline:
      "Schneller in passende Jobs — mit klaren Prozessen und starken Arbeitgebern.",
    paragraphs: [
      "Wir unterstützen Sie bei der Auswahl von Qualifizierungen, der Vorbereitung auf den Klinik- oder Praxisalltag und der nachhaltigen Vermittlung in gesicherte Stellen.",
      "Gemeinsam mit regionalen Partnern schaffen wir transparente Pfade, damit Teilnehmende nicht nur starten, sondern langfristig erfolgreich bleiben.",
    ],
    imageSrc: "/pulsarmedical-jobcenter-1.webp",
    imageAlt: "Beratungssituation im Gesundheitsbereich",
    cta: { to: "/jobcenter", label: "Mehr zu Jobcentern" },
  },
  {
    id: "unternehmen",
    label: "Für Unternehmen",
    headline:
      "Weniger Leerstände, mehr Planungssicherheit — ohne zusätzliche Bürokratie.",
    paragraphs: [
      "Ob Klinikverbund, MVZ oder Pflegeeinrichtung: Wir helfen Ihnen, Engpässe früh zu erkennen und Profile zu besetzen, die wirklich zu Team und Aufgaben passen.",
      "Sie erhalten praxisnahe Beratung zu Anspruch, Arbeitsmodellen und Onboarding — immer abgestimmt auf Ihre internen Abläufe.",
    ],
    imageSrc: "/pulsarmedical-jobcenter-2.webp",
    imageAlt: "Team im Gesundheitswesen bei der Arbeit",
    cta: { to: "/unternehmen", label: "Mehr für Unternehmen" },
  },
  {
    id: "karriere",
    label: "Karriere",
    headline:
      "Ihre nächste Station in der Versorgung — fair begleitet und verlässlich organisiert.",
    paragraphs: [
      "Von der ersten Orientierung bis zur Vertragsunterzeichnung stehen wir an Ihrer Seite und vermitteln transparente Informationen zu Arbeitgeber, Schichtmodellen und Entwicklungsmöglichkeiten.",
      "Sie profitieren von einem Netzwerk, das Qualität ebenso ernst nimmt wie Menschlichkeit.",
    ],
    imageSrc: "/pulsarmedical-jobcenter-3.webp",
    imageAlt: "Gespräch zwischen Beraterin und Bewerberin",
    cta: { to: "/karriere", label: "Zu den Karrierethemen" },
  },
  {
    id: "partner",
    label: "Partner & Netzwerk",
    headline:
      "Gemeinsam mehr erreichen — mit Kooperationen, die tragfähig sind.",
    paragraphs: [
      "Wir verbinden Akteure aus Bildung, Arbeitgeberschaft und Versorgung, damit Talente dort ankommen, wo sie gebraucht werden.",
      "Regelmäßiger Austausch, klare Ziele und messbare Meilensteine sorgen dafür, dass Partnerschaften nicht nur starten, sondern wachsen.",
    ],
    imageSrc: "/3.png.webp",
    imageAlt: "Kooperation im Gesundheitsnetzwerk",
    cta: { to: "/ueber-uns", label: "Über unsere Arbeit" },
  },
];

/** Tab-Sektion: Überschrift, Segment-Tabs, Zwei-Spalten-Inhalt mit Bild. */
export function HomeTabbedSection() {
  const baseId = useId();
  const [activeIndex, setActiveIndex] = useState(0);
  const panel = TABS[activeIndex]!;

  return (
    <section
      className="bg-pm-dark-bg py-16 md:py-24"
      aria-labelledby={`${baseId}-section-title`}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-10">
        <h2
          id={`${baseId}-section-title`}
          className="mx-auto max-w-3xl text-center text-3xl font-semibold tracking-tight text-pm-dark-headline md:text-4xl"
        >
          Die passende Antwort für Ihre Rolle
        </h2>

        <div
          className="mt-10 md:mt-12"
          role="tablist"
          aria-label="Anwendungsbereiche"
        >
          <div className="-mx-1 flex overflow-x-auto pb-2 sm:mx-0 sm:overflow-visible sm:pb-0">
            <div className="flex min-w-full gap-0 rounded-2xl bg-pm-dark-container/80 p-1.5 ring-1 ring-pm-dark-container-border/80 sm:grid sm:min-w-0 sm:grid-cols-4">
              {TABS.map((tab, index) => {
                const selected = index === activeIndex;
                return (
                  <button
                    key={tab.id}
                    id={`${baseId}-tab-${tab.id}`}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls={`${baseId}-panel-${tab.id}`}
                    tabIndex={selected ? 0 : -1}
                    className={`relative min-w-46 shrink-0 rounded-xl px-4 py-3 text-center text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pm-dark-icon sm:min-w-0 ${
                      selected
                        ? "bg-pm-dark-button text-white shadow-md"
                        : "text-pm-dark-text-2 hover:bg-white/10"
                    } ${index !== 0 ? "sm:border-l sm:border-pm-dark-divider/60" : ""}`}
                    onClick={() => setActiveIndex(index)}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div
          id={`${baseId}-panel-${panel.id}`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${panel.id}`}
          className="mt-10 grid items-center gap-10 md:mt-14 md:grid-cols-2 md:gap-12 lg:gap-16"
        >
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold leading-snug tracking-tight text-pm-dark-headline md:text-3xl">
              {panel.headline}
            </h3>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-pm-dark-text-1 md:text-lg">
              {panel.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-8">
              <Link
                to={panel.cta.to}
                className="text-base font-semibold text-pm-dark-icon underline decoration-pm-dark-icon/40 underline-offset-4 transition-colors hover:decoration-pm-dark-icon"
              >
                {panel.cta.label}
              </Link>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative mx-auto max-w-xl md:mx-0 md:max-w-none">
              <img
                key={panel.id}
                src={panel.imageSrc}
                alt={panel.imageAlt}
                width={800}
                height={640}
                className="aspect-4/3 w-full rounded-2xl object-cover shadow-[0_24px_48px_-16px_rgb(0_0_0_/0.45)] ring-1 ring-white/15 md:aspect-5/4"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
