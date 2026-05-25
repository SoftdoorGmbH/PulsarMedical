import { ArrowRight } from "lucide-react";
import { CAREER_JOBS } from "@/content/careerJobs";

/** Liste offener Stellen. */
export function CareerOpenRolesSection() {
  return (
    <section
      id="offene-stellen"
      className="scroll-mt-28 border-t border-pm-light-container-border bg-pm-light-container py-16 md:py-24"
      aria-labelledby="career-open-roles-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-10">
        <h2
          id="career-open-roles-heading"
          className="text-3xl font-semibold tracking-tight text-pm-light-headline md:text-4xl"
        >
          Offene Stellen
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-pm-light-text-1 md:text-lg">
          Werden Sie Teil unseres Teams. Senden Sie uns Ihre Bewerbung per
          E-Mail — wir melden uns zeitnah bei Ihnen.
        </p>

        <ul className="mt-10 divide-y divide-pm-light-container-border rounded-2xl border border-pm-light-container-border bg-white shadow-[0_8px_24px_-12px_rgb(2_52_78_/0.08)]">
          {CAREER_JOBS.map((job) => (
            <li key={job.id}>
              <a
                href={`mailto:kontakt@pulsarmed.de?subject=${encodeURIComponent(job.mailSubject)}`}
                className="group flex flex-col gap-4 px-6 py-6 no-underline transition-colors hover:bg-pm-light-container/60 md:flex-row md:items-center md:justify-between md:px-8 md:py-7"
              >
                <div className="min-w-0">
                  <p className="text-lg font-semibold text-pm-light-headline transition-colors group-hover:text-pm-light-text-2 md:text-xl">
                    {job.title}
                  </p>
                  <p className="mt-1 text-sm text-pm-light-text-1 md:text-base">
                    {job.department} · {job.location} · {job.type}
                  </p>
                </div>

                <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-pm-light-text-2 transition-colors group-hover:text-pm-light-button">
                  Bewerben
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm leading-relaxed text-pm-light-text-1">
          Keine passende Stelle dabei?{" "}
          <a
            href="mailto:kontakt@pulsarmed.de?subject=Initiativbewerbung%20Pulsar%20Medical"
            className="font-semibold text-pm-light-text-2 no-underline hover:underline"
          >
            Initiativbewerbung senden
          </a>
        </p>
      </div>
    </section>
  );
}
