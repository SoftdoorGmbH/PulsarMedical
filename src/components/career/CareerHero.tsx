import { Button } from "@/components/Button";

/** Karriere-Hero — Lyra-inspiriertes Layout mit Heading, CTAs und Bild. */
export function CareerHero() {
  return (
    <section className="py-12 md:py-16 lg:py-20" aria-label="Karriere">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-14 md:px-8 lg:px-10">
        <div>
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-pm-light-headline sm:text-5xl lg:text-[3.25rem]">
            In Ihrer Karriere,{" "}
            <em className="font-display-serif block text-[1.02em] font-normal italic sm:inline">
              zählt die Mission
            </em>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-pm-light-text-1 md:text-xl">
            Gestalten Sie mit uns Gesundheit, Teilhabe und gute Arbeit — für
            Menschen, Jobcenter und Unternehmen im Gesundheitswesen.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#offene-stellen">Offene Stellen</Button>
            <Button
              href="mailto:kontakt@pulsarmed.de?subject=Initiativbewerbung%20Pulsar%20Medical"
              variant="navy"
            >
              Initiativbewerbung
            </Button>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-pm-light-text-1">
            Sie passen zu keiner Stelle, möchten aber Teil unseres Teams werden?{" "}
            <a
              href="mailto:kontakt@pulsarmed.de?subject=Initiativbewerbung%20Pulsar%20Medical"
              className="font-semibold text-pm-light-text-2 no-underline hover:underline"
            >
              Jetzt bewerben
            </a>
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-xl md:mx-0 md:max-w-none">
          <div
            className="pointer-events-none absolute -inset-4 rounded-4xl opacity-70 blur-2xl"
            style={{
              background:
                "radial-gradient(circle at 70% 50%, var(--color-pm-light-bg-glow), transparent 70%)",
            }}
          />
          <img
            src="/pulsarmedical-jobcenter-2.webp"
            alt="Team von Pulsar Medical im Austausch"
            width={640}
            height={480}
            fetchPriority="high"
            decoding="async"
            className="relative aspect-4/3 w-full rounded-2xl object-cover shadow-[0_24px_48px_-16px_rgb(2_52_78_/0.2)] ring-1 ring-pm-light-container-border"
          />
        </div>
      </div>
    </section>
  );
}
