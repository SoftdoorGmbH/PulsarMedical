const HERO_IMAGE = "/pulsarmedical-header-jobcenter.jpg";

/** Hero für die Jobcenter-Seite — Layout angelehnt an `HomeHero`. */
export function JobCenterHero() {
  return (
    <section
      className="relative -mt-28 overflow-hidden pt-28 pb-24 after:pointer-events-none after:absolute after:inset-0 after:rounded-none after:ring-1 after:ring-white/30 md:-mt-32 md:pb-56 lg:mx-5 lg:mb-12 lg:rounded-[2.5rem] lg:pt-[clamp(8.5rem,18vw,12rem)] lg:pb-40 lg:after:rounded-[2.5rem] lg:min-h-[788px]"
      aria-label="Für Jobcenter"
    >
      <img
        src={HERO_IMAGE}
        alt=""
        width={1400}
        height={840}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 size-full object-cover object-[center_30%] md:object-center"
      />

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-white/25 via-transparent to-white/10 md:bg-linear-to-r md:from-white/35 md:via-white/10 md:to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 items-start gap-x-10 gap-y-12 md:grid-cols-2">
          <div className="flex max-w-lg flex-col md:max-w-xl">
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-pm-light-headline sm:text-5xl md:max-w-120">
              Wir unterstützen Jobcenter und andere öffentliche Einrichtungen
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-pm-light-headline md:max-w-xl md:text-xl">
              Damit Sie als Berater:innen den Menschen zielgerichtet helfen
              können, ist häufig medizinische Expertise notwendig. Doch woher
              sollen Sie diese Expertise haben … schließlich kann man nicht
              alles können.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-pm-light-text-1 md:max-w-xl md:text-xl">
              Holen Sie uns als Partner in Gesundheitsfragen mit ins Boot.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
