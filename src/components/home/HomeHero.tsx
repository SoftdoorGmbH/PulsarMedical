import { Check } from "lucide-react";
import { Button } from "@/components/Button";

const HERO_OVERLINES = [
  "Für Jobcenter · Berufsgenossenschaften · Rückversicherer",
  "Medizinische · psychologische · sozialmedizinische · psychiatrische Begutachtungen",
] as const;

const HERO_BADGES = [
  "DSGVO konform",
  "Bundesweit verfügbare Expertise",
  "Persönlich, telemedizinisch oder nach Aktenlage",
] as const;

const HERO_CAROUSEL_IMAGES = [
  { src: "/1.png.webp", alt: "Mann mit einem Teller in der Hand" },
  { src: "/2.png.webp", alt: "Frau reicht jemandem die Hand" },
  { src: "/3.png.webp", alt: "Zwei Personen schauen auf einen Laptop" },
  { src: "/4.png.webp", alt: "Lächelnde Frau" },
  { src: "/5.png.webp", alt: "Mann und Frau lachen" },
  { src: "/6.png.webp", alt: "Mann bedient ein Gerät" },
  { src: "/7.png.webp", alt: "Frau unterrichtet drei Kinder" },
  { src: "/8.png.webp", alt: "Frau geht einen Flur entlang" },
] as const;

function HeroCarouselTrack({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <>
      {HERO_CAROUSEL_IMAGES.map((image, index) => (
        <div
          key={image.src}
          className="w-[calc(50vw-32px)] shrink-0 md:w-[calc(33vw-28px)] lg:w-[calc(20vw-32px)]"
        >
          <img
            src={image.src}
            alt={ariaHidden ? "" : image.alt}
            width={372}
            height={260}
            decoding="async"
            fetchPriority={index < 3 && !ariaHidden ? "high" : undefined}
            loading={index < 3 && !ariaHidden ? "eager" : "lazy"}
            className="w-full rounded-2xl"
          />
        </div>
      ))}
    </>
  );
}

function HomeHeroImageCarousel() {
  return (
    <div className="overflow-hidden" aria-label="Impressionen">
      <div className="flex w-max animate-pm-marquee motion-reduce:w-auto motion-reduce:max-w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-6 motion-reduce:px-6 motion-reduce:animate-none">
        <div className="flex shrink-0 gap-10 pr-10">
          <HeroCarouselTrack />
        </div>
        <div
          className="flex shrink-0 gap-10 pr-10 motion-reduce:hidden"
          aria-hidden
        >
          <HeroCarouselTrack ariaHidden />
        </div>
      </div>
    </div>
  );
}

/** Startseiten-Hero — zentrierter Text auf hellem Blau. */
export function HomeHero() {
  return (
    <section
      className="relative md:my-6 overflow-hidden bg-linear-to-br from-[#93D9FF] from-65% to-[#D9E8F6] pt-28 pb-10 md:pt-36 md:pb-12 lg:mx-5 lg:mb-8 lg:rounded-[2.5rem] lg:pt-42 lg:pb-14"
      aria-label="Einstieg"
    >
      <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="mx-auto flex max-w-3xl flex-col items-start md:items-center text-left md:text-center">
          <div className="grid motion-reduce:flex motion-reduce:flex-col motion-reduce:gap-2">
            {HERO_OVERLINES.map((text, index) => (
              <p
                key={text}
                className={`col-start-1 row-start-1 text-sm font-semibold uppercase tracking-[0.14em] text-pm-light-text-2 ${
                  index === 0
                    ? "animate-pm-overline"
                    : "animate-pm-overline-delayed"
                }`}
              >
                {text}
              </p>
            ))}
          </div>
          <h1 className="mt-3 text-4xl font-semibold leading-[1.08] tracking-tight text-pm-light-headline sm:text-5xl">
            Klare Antworten
            <br />
            <em className="font-display-serif mt-2 block text-[1.05em] font-normal italic text-pm-light-headline md:mt-0 md:inline">
              bei komplexen Gesundheitsfragen
            </em>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-pm-light-text-1 md:text-xl">
            PULSAR Medical verbindet medizinische und psychologische Expertise
            mit einem bundesweiten Expertennetzwerk und professioneller
            Projektkoordination – für eine belastbare Entscheidungsgrundlage bei
            komplexen gesundheitlichen Fragestellungen.
          </p>

          <div className="mt-6 md:mt-8">
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:justify-start sm:gap-6 md:gap-x-4">
              <Button to="/kontakt">Beratungstermin anfragen</Button>
              <Button to="/jobcenter" variant="secondary">
                Lösungen entdecken
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-8">
          <ul className="flex flex-col items-start md:items-center gap-y-2 text-sm sm:flex-row sm:flex-nowrap sm:justify-center sm:gap-x-5 sm:gap-y-0 sm:text-base md:gap-x-6 lg:gap-x-8">
            {HERO_BADGES.map((label) => (
              <li
                key={label}
                className="inline-flex items-center gap-1.5 font-medium text-pm-light-headline"
              >
                <Check
                  className="size-3.5 shrink-0 text-pm-light-text-2"
                  strokeWidth={2.5}
                  aria-hidden
                />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hidden md:block mt-15 px-7.5 lg:px-0">
        <HomeHeroImageCarousel />
      </div>
    </section>
  );
}
