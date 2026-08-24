import { useCallback, useEffect, useId, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/** Vorhandene Datei aus `public/` — kein neues Asset. */
const PLACEHOLDER_LOGO_SRC = "/Pulsar_Logo.webp";

type Stat = { value: string; label: string };

type Slide = {
  id: string;
  title: string;
  body: string;
  stats: [Stat, Stat, Stat];
  quote: string;
};

const SLIDES: Slide[] = [
  {
    id: "klinikverbund",
    title: "Weniger offene Schichten, stabilere Teams",
    body: "Ein regionaler Klinikverbund wollte Engpässe in der Pflege abbauen und gleichzeitig die Einarbeitung standardisieren. Gemeinsam haben wir Rollenprofile geschärft und Übergaben zwischen Station und Personalabteilung verschlankt.",
    stats: [
      { value: "42%", label: "kürzere Zeit bis zur ersten Besetzung" },
      { value: "28%", label: "weniger ungeplante Überstunden" },
      { value: "91%", label: "Zufriedenheit im Team nach 6 Monaten" },
    ],
    quote:
      "„Mit dem strukturierten Vorgehen haben wir endlich eine gemeinsame Sprache zwischen Pflege, Ärzten und HR — und spürbar weniger Hektik auf den Stationen.“",
  },
  {
    id: "mvz",
    title: "Mehr Vorlauf für Praxisalltag und Patientinnen",
    body: "Ein MVZ suchte Unterstützung bei der Planung von Urlaubsvertretungen und der Besetzung von Teilzeitstellen. Fokus war eine nachvollziehbare Pipeline ohne Medienbrüche.",
    stats: [
      { value: "35%", label: "weniger Absagen kurz vor Terminstart" },
      { value: "18", label: "Tage schneller bis zur Einstellung" },
      { value: "4,6/5", label: "Bewertung durch Praxismanagement" },
    ],
    quote:
      "„Wir bekommen früher signalisiert, wo Engpässe entstehen — und können proaktiv nachsteuern, statt in der nächsten Woche zu lösen.“",
  },
  {
    id: "jobcenter",
    title: "Starke Übergänge für Teilnehmende im Gesundheitsbereich",
    body: "Im Pilot mit mehreren Jobcentern lag der Schwerpunkt auf realistischen Einschätzungen, begleiteten Bewerbungen und Arbeitgebern, die Qualifizierung ernst nehmen.",
    stats: [
      { value: "63%", label: "höhere Übernahmequote nach Praktikum" },
      { value: "120+", label: "begleitete Einstellungsprozesse" },
      { value: "22%", label: "weniger Abbrüche in den ersten 90 Tagen" },
    ],
    quote:
      "„Die Zusammenarbeit war für unsere Beraterinnen greifbar: klare Schritte, ehrliche Rückmeldungen der Arbeitgeber und spürbare Erleichterung bei den Teilnehmenden.“",
  },
];

type EnterDirection = "left" | "right";

export function HomeTestimonialSlider() {
  const sectionId = useId();
  const [index, setIndex] = useState(0);
  const [enterDir, setEnterDir] = useState<EnterDirection>("right");
  const count = SLIDES.length;
  const slide = SLIDES[index]!;

  const goPrev = useCallback(() => {
    setEnterDir("left");
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);

  const goNext = useCallback(() => {
    setEnterDir("right");
    setIndex((i) => (i + 1) % count);
  }, [count]);

  const goTo = useCallback(
    (i: number) => {
      if (i === index) return;
      setEnterDir(i > index ? "right" : "left");
      setIndex(i);
    },
    [index],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext]);

  const slideAnimClass =
    enterDir === "left"
      ? "animate-pm-slide-from-left"
      : "animate-pm-slide-from-right";

  return (
    <section
      className="bg-pm-light-container py-16 md:py-24"
      aria-roledescription="Karussell"
      aria-labelledby={`${sectionId}-heading`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:max-w-360 2xl:px-16">
        <h2
          id={`${sectionId}-heading`}
          className="mx-auto max-w-3xl text-center text-3xl font-semibold tracking-tight text-pm-light-headline md:text-4xl"
        >
          Was Partnerschaften bei uns bewegt
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-pm-light-text-1 md:text-lg">
          Kennzahlen und Stimmen aus der Praxis — nachvollziehbar und auf den
          Punkt gebracht.
        </p>

        <div className="relative mx-auto mt-10 md:mt-12">
          <div
            className="mx-auto grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-2 sm:gap-x-4 md:gap-x-6 lg:gap-x-10 xl:gap-x-12"
            aria-label="Karten-Slider"
          >
            <button
              type="button"
              onClick={goPrev}
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-pm-light-container-border bg-white text-pm-light-text-1 shadow-md transition-[background-color,transform,box-shadow] hover:bg-pm-light-container hover:shadow-lg md:size-12"
              aria-label="Vorherige Karte"
            >
              <ChevronLeft
                className="size-6 opacity-80 md:size-7"
                strokeWidth={1.75}
                aria-hidden
              />
            </button>

            <div
              className="relative flex  min-w-0 flex-col overflow-hidden rounded-[1.75rem] bg-pm-light-container shadow-[0_24px_60px_-28px_rgb(2_52_78_/0.22)] ring-1 ring-black/5 sm:min-h-120 border-6 border-pm-light-container-border"
              role="group"
              aria-live="polite"
              aria-label={`Karte ${index + 1} von ${count}`}
            >
              <div
                key={slide.id}
                className={`flex flex-1 flex-col p-6 md:p-10 lg:p-12 ${slideAnimClass}`}
              >
                <div className="grid flex-1 grid-cols-1 gap-10 md:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] md:items-stretch md:gap-10 lg:gap-14 xl:gap-16">
                  <div className="flex min-h-0 flex-col">
                    <h3 className="text-2xl font-semibold leading-tight tracking-tight text-pm-light-headline md:text-3xl lg:text-[1.75rem] lg:leading-snug">
                      {slide.title}
                    </h3>
                    <p className="mt-4 flex-1 text-base leading-relaxed text-pm-light-text-1 md:text-lg">
                      {slide.body}
                    </p>
                    <dl className="mt-18 grid grid-cols-1 gap-6 pt-8 sm:grid-cols-3 md:mt-auto md:gap-4">
                      {slide.stats.map((s) => (
                        <div key={s.label}>
                          <dt className="text-2xl font-bold tabular-nums text-pm-light-headline md:text-3xl">
                            {s.value}
                          </dt>
                          <dd className="mt-1 text-sm leading-snug text-pm-light-text-1">
                            {s.label}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="flex min-h-0 flex-col md:h-full">
                    <blockquote className="flex-1 text-lg leading-relaxed text-pm-light-headline md:min-h-0 md:text-lg md:mt-12">
                      {slide.quote}
                    </blockquote>
                    <div className="flex shrink-0 items-center justify-center gap-1">
                      <img
                        src={PLACEHOLDER_LOGO_SRC}
                        alt="PULSAR Medical"
                        width={120}
                        height={40}
                        className="h-8 w-auto max-w-35 object-contain object-left md:h-9"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={goNext}
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-pm-light-container-border bg-white text-pm-light-text-1 shadow-md transition-[background-color,transform,box-shadow] hover:bg-pm-light-container hover:shadow-lg md:size-12"
              aria-label="Nächste Karte"
            >
              <ChevronRight
                className="size-6 opacity-80 md:size-7"
                strokeWidth={1.75}
                aria-hidden
              />
            </button>
          </div>

          <div
            className="mt-6 flex justify-center gap-2"
            role="tablist"
            aria-label="Karten"
          >
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Karte ${i + 1}`}
                className={`h-2.5 rounded-full transition-[width,background-color] duration-300 ${
                  i === index
                    ? "w-8 bg-pm-light-button"
                    : "w-2.5 bg-pm-light-container-border hover:bg-pm-light-text-2/50"
                }`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
