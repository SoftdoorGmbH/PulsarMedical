import { Button } from "@/components/Button";
import { ABOUT_STATS } from "@/content/teamMembers";

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden>
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

/** Mission + Kennzahlen — zweispaltiges Layout wie lattice.com/about. */
export function AboutMissionSection() {
  return (
    <section
      className="bg-pm-light-container py-16 md:py-24"
      aria-labelledby="about-mission-heading"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-8 lg:px-10">
        <div>
          <h2
            id="about-mission-heading"
            className="text-3xl font-semibold leading-snug tracking-tight text-pm-light-headline md:text-4xl"
          >
            Wer wir sind und was uns jeden Tag antreibt
          </h2>
          <p className="mt-5 text-base leading-relaxed text-pm-light-text-1 md:text-lg">
            Hinter PULSAR Medical steht die Überzeugung, dass Menschen nicht auf
            Diagnosen, Akten oder einzelne Lebensabschnitte reduziert werden
            sollten.
          </p>
          <p className="mt-4 text-base leading-relaxed text-pm-light-text-1 md:text-lg">
            Gesundheitliche Belastungen können vieles verändern: den Alltag, die
            Arbeit, die finanzielle Sicherheit und das Vertrauen in die eigene
            Zukunft. Gerade dann braucht es Menschen, die genau hinschauen,
            zuhören und fachlich einordnen, was wirklich gebraucht wird.
          </p>
          <p className="mt-4 text-base leading-relaxed text-pm-light-text-1 md:text-lg">
            Wir bringen medizinische, psychologische und arbeitsbezogene
            Perspektiven zusammen. Nicht, um Fälle komplizierter zu machen –
            sondern um sie verständlicher zu machen.
          </p>
          <Button to="/kontakt" className="group mt-8 gap-3">
            Beratungstermin anfragen
            <span className="flex size-8 items-center justify-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
              <ArrowRightIcon />
            </span>
          </Button>
        </div>

        <ul className="grid gap-4 sm:gap-5">
          {ABOUT_STATS.map((stat) => (
            <li
              key={stat.label}
              className="rounded-2xl border border-pm-light-container-border bg-white px-6 py-5 shadow-[0_8px_24px_-12px_rgb(2_52_78_/0.12)] md:px-8 md:py-6"
            >
              <p className="inline-block rounded-lg bg-pm-light-icon-bg px-3 py-1 text-3xl font-bold tracking-tight text-pm-light-text-2 md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-3 text-base font-medium leading-snug text-pm-light-headline md:text-lg">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
