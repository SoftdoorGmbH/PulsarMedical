import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/Button";

const HERO_IMAGE = "/pulsarmedical-jobcenter-1.jpg";

const TRUST_ITEMS = [
  "Medizinisch. Psychologisch. Menschlich.",
  "Bundesweit für institutionelle Auftraggeber",
  "DSGVO konform",
] as const;

const checkClassName =
  "size-5 shrink-0 text-pm-light-text-2 [&>circle]:fill-pm-light-icon-bg [&>circle]:stroke-pm-light-icon-border [&>path]:origin-[12px_12px] [&>path]:scale-[1.18] [&>path]:stroke-[1.75] [&>path]:stroke-pm-light-text-2";

function TrustRow({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex min-w-0 flex-wrap gap-4 text-sm font-medium text-pm-light-headline sm:text-base md:gap-8">
      {items.map((item) => (
        <li key={item} className="inline-flex max-w-full items-center gap-2">
          <CheckCircle2 className={checkClassName} aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Split-Hero — Layout wie UeberUns, in Pulsar-Farben und -Typo. */
export function AboutHero() {
  return (
    <section className="pb-12 pt-4 md:pb-16 md:pt-8" aria-label="Über uns">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        <div className="grid min-w-0 grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-pm-light-text-2">
              Über uns
            </p>
            <h1 className="max-w-[min(100%,42ch)] text-4xl font-semibold leading-[1.08] tracking-tight text-pm-light-headline sm:text-5xl">
              Hey, wir sind{" "}
              <span className="text-pm-light-text-2">PULSAR Medical</span>
            </h1>
            <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-pm-light-text-1 md:mt-6 md:text-xl">
              Wir glauben, dass gute Entscheidungen dort entstehen, wo
              medizinische Expertise auf echtes Verständnis für Menschen und
              ihre individuelle Situation trifft.
            </p>

            <div className="mt-6 mb-8 md:mt-8">
              <TrustRow items={TRUST_ITEMS} />
            </div>

            <Button to="/kontakt" size="lg" fullWidth="sm">
              Beratungstermin anfragen
            </Button>
          </div>

          <div className="hidden min-w-0 justify-center md:flex lg:justify-end">
            <img
              src={HERO_IMAGE}
              alt="Team von Pulsar Medical im Beratungsgespräch"
              width={1200}
              height={800}
              fetchPriority="high"
              decoding="async"
              className="h-auto max-h-[min(52vh,22rem)] w-full max-w-lg rounded-[1.75rem] object-cover shadow-[0_24px_48px_-16px_rgb(2_52_78_/0.2)] ring-1 ring-pm-light-container-border sm:max-h-[min(56vh,26rem)] md:max-h-none lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
