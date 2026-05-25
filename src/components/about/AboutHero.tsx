const HERO_IMAGE = "/pulsarmedical-jobcenter-1.jpg";

/** Zentrierter Mission-Hero — Layout angelehnt an lattice.com/about. */
export function AboutHero() {
  return (
    <section className="pb-16 pt-4 md:pb-24 md:pt-8" aria-label="Über uns">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-8">
        <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-pm-light-headline sm:text-5xl md:text-6xl">
          Das ist{" "}
          <span className="text-pm-light-text-2">PULSAR medical</span> – das
          sind wir
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-pm-light-text-1 md:mt-8 md:text-xl">
          Wir verbinden Jobcenter, Arbeitgeber im Gesundheitswesen und
          Fachkräfte — mit medizinischer Expertise, Psychologie und Beratung
          für Menschen in unterschiedlichen Lebenslagen.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-5xl px-6 md:mt-16 md:px-8">
        <div className="overflow-hidden rounded-[1.75rem] shadow-[0_24px_48px_-16px_rgb(2_52_78_/0.2)] ring-1 ring-pm-light-container-border">
          <img
            src={HERO_IMAGE}
            alt="Team von Pulsar Medical im Beratungsgespräch"
            width={1200}
            height={800}
            fetchPriority="high"
            decoding="async"
            className="aspect-16/10 w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
