const HERO_IMAGE = "/pulsarmedical-header-unternehmen.webp";

/** Hero für die Unternehmen-Seite — Layout angelehnt an `JobCenterHero`. */
export function CompaniesHero() {
  return (
    <section
      className="relative -mt-28 overflow-hidden pt-28 pb-24 after:pointer-events-none after:absolute after:inset-0 after:rounded-none after:ring-1 after:ring-white/30 md:-mt-32 md:pb-56 lg:mx-5 lg:mb-12 lg:rounded-[2.5rem] lg:pt-[clamp(8.5rem,18vw,12rem)] lg:pb-40 lg:after:rounded-[2.5rem] lg:min-h-[788px]"
      aria-label="Für Unternehmen"
    >
      <img
        src={HERO_IMAGE}
        alt="Hero Image for Companies Page"
        width={1400}
        height={1000}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 size-full object-cover object-[center_30%] md:object-top"
      />

      <div className="relative mx-auto max-w-6xl px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 items-start gap-x-10 gap-y-12 md:grid-cols-2">
          <div className="flex max-w-lg flex-col md:max-w-xl">
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-pm-light-headline sm:text-5xl md:max-w-120">
              Gesunde Beschäftigte für gesunde Unternehmen
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-pm-light-headline md:max-w-xl md:text-xl">
              Die Pulsar Medical GmbH ist Ihr Partner, wenn es darum geht,
              Gesundheit, Sicherheit und Wohlbefinden von Arbeitnehmenden zu
              fördern.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
