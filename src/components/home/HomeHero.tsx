import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const HERO_BADGES = [
  "DSGVO-konforme Prozesse",
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

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
      className="relative my-6 overflow-hidden bg-linear-to-br from-[#93D9FF] from-65% to-[#D9E8F6] pt-28 pb-10 md:pt-36 md:pb-12 lg:mx-5 lg:mb-8 lg:rounded-[2.5rem] lg:pt-[clamp(8.5rem,18vw,12rem)] lg:pb-14"
      aria-label="Einstieg"
    >
      <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-pm-light-headline sm:text-5xl">
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

          <div className="mt-10 md:mt-12 lg:mt-14">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6 md:gap-x-4">
              <Link
                to="/ueber-uns"
                className="inline-flex rounded-full bg-pm-light-button px-7 py-3.5 text-base font-semibold text-white shadow-md no-underline transition-[filter,transform] hover:brightness-110 active:scale-[0.99]"
              >
                Beratungstermin anfragen
              </Link>
              <Link
                to="/jobcenter"
                className="group inline-flex items-center gap-3 text-base font-semibold text-pm-light-headline no-underline"
              >
                <span>Lösungen entdecken</span>
                <span className="flex size-11 items-center justify-center rounded-full bg-white text-pm-light-headline shadow-[0_1px_12px_rgb(2_52_78_/0.12)] ring-1 ring-black/5 transition-transform duration-500 ease-out group-hover:translate-x-0.5">
                  <ArrowRightIcon />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 max-sm:-mx-2 max-sm:overflow-x-auto max-sm:px-2 md:mt-8 scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <ul className="flex w-full flex-nowrap items-center justify-center gap-x-3 text-xs max-sm:mx-auto max-sm:w-max max-sm:min-w-full max-sm:justify-start sm:gap-x-5 sm:text-sm md:gap-x-6 lg:gap-x-8">
            {HERO_BADGES.map((label) => (
              <li
                key={label}
                className="inline-flex shrink-0 items-center gap-1.5 font-medium text-pm-light-headline"
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

      <div className="mt-15 px-7.5 lg:px-0">
        <HomeHeroImageCarousel />
      </div>
    </section>
  );
}
