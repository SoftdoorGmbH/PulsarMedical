import { Link } from "react-router-dom";

const HERO_DESKTOP =
  "https://www.lyrahealth.com/wp-content/uploads/2026/04/hero.png";
const HERO_DESKTOP_WEBP =
  "https://www.lyrahealth.com/wp-content/uploads/2026/04/hero.png.webp";
const HERO_MOBILE =
  "https://www.lyrahealth.com/wp-content/uploads/2026/04/homepage-hero-mobile.png";
const HERO_MOBILE_WEBP =
  "https://www.lyrahealth.com/wp-content/uploads/2026/04/homepage-hero-mobile.png.webp";

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="size-5"
      aria-hidden
    >
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

/** Startseiten-Hero — lyra-inspiriertes Layout, Bilder Platzhalter bis Eigenmaterial. */
export function HomeHero() {
  return (
    <section
      className="relative my-6 overflow-hidden pt-28 pb-24 after:pointer-events-none after:absolute after:inset-0 after:rounded-none after:ring-1 after:ring-white/30 md:pt-36 md:pb-56 lg:mx-5 lg:mb-24 lg:rounded-[2.5rem] lg:pt-[clamp(8.5rem,18vw,12rem)] lg:pb-40 lg:after:rounded-[2.5rem]"
      aria-label="Einstieg"
    >
      <picture>
        <source type="image/webp" srcSet={HERO_DESKTOP_WEBP} />
        <img
          src={HERO_DESKTOP}
          alt=""
          width={1400}
          height={840}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 hidden size-full object-cover object-top md:block"
        />
      </picture>
      <picture>
        <source type="image/webp" srcSet={HERO_MOBILE_WEBP} />
        <img
          src={HERO_MOBILE}
          alt=""
          width={375}
          height={667}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 size-full object-cover object-right md:hidden"
        />
      </picture>

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-white/25 via-transparent to-white/10 md:bg-linear-to-r md:from-white/35 md:via-white/10 md:to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 items-start gap-x-10 gap-y-12 md:grid-cols-2">
          <div className="flex max-w-lg flex-col md:max-w-xl md:justify-between">
            <div>
              <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-pm-light-headline sm:text-5xl md:max-w-120">
                Medizinische Versorgung{" "}
                <em className="font-display-serif mt-2 block text-[1.05em] font-normal italic text-pm-light-headline md:mt-0 md:inline">
                  für alle Lebenslagen
                </em>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-pm-light-text-1 md:max-w-xl md:text-xl">
                Schneller Zugang zu passenden Talenten und verlässlichen
                Prozessen — für Jobcenter, Unternehmen und Menschen, die
                Gesundheit zum Beruf machen.
              </p>
            </div>

            <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6 md:mt-12 md:gap-x-4 lg:mt-14">
              <Link
                to="/ueber-uns"
                className="inline-flex rounded-full bg-pm-light-button px-7 py-3.5 text-base font-semibold text-white shadow-md no-underline transition-[filter,transform] hover:brightness-110 active:scale-[0.99]"
              >
                Kontakt aufnehmen
              </Link>
              <Link
                to="/jobcenter"
                className="group inline-flex items-center gap-3 text-base font-semibold text-pm-light-headline no-underline"
              >
                <span>Für Jobcenter entdecken</span>
                <span className="flex size-11 items-center justify-center rounded-full bg-white text-pm-light-headline shadow-[0_1px_12px_rgb(2_52_78_/0.12)] ring-1 ring-black/5 transition-transform duration-500 ease-out group-hover:translate-x-0.5">
                  <ArrowRightIcon />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
