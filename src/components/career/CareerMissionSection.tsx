import { Link } from "react-router-dom";

/** Mission-Abschnitt — Bild links, Text rechts. */
export function CareerMissionSection() {
  return (
    <section
      className="border-t border-pm-light-container-border bg-pm-light-container py-16 md:py-24"
      aria-labelledby="career-mission-heading"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-14 md:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-132.5 md:mx-0">
          <img
            src="/pulsarmedical-jobcenter-1.webp"
            alt="Beratungsgespräch bei Pulsar Medical"
            width={530}
            height={530}
            loading="lazy"
            decoding="async"
            className="aspect-square w-full rounded-2xl object-cover shadow-[0_20px_40px_-12px_rgb(2_52_78_/0.18)] ring-1 ring-pm-light-container-border"
          />
        </div>

        <div>
          <h2
            id="career-mission-heading"
            className="text-3xl font-bold leading-tight tracking-tight text-pm-light-headline md:text-4xl"
          >
            Wir gestalten Gesundheit mit — für Menschen, die sie brauchen
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-pm-light-text-1 md:text-lg">
            <p>
              Bei Pulsar Medical verbinden wir medizinisches Fachwissen,
              Psychologie und Beratung. Unser Team unterstützt Jobcenter,
              Unternehmen und Betroffene — mit Empathie, Klarheit und fachlicher
              Tiefe.
            </p>
            <p>
              Wir arbeiten überwiegend remote und treffen uns regelmäßig für
              Austausch, Workshops und gemeinsame Projekte. So verbinden wir
              Flexibilität mit echtem Teamgefühl.
            </p>
            <p>
              Wenn Sie Lust haben, in einem wachsenden Umfeld Verantwortung zu
              übernehmen und sichtbare Wirkung zu erzielen, sind Sie bei uns
              richtig.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <Link
              to="/ueber-uns"
              className="inline-flex items-center gap-2 text-base font-semibold text-pm-light-text-2 no-underline transition-colors hover:text-pm-light-button hover:underline"
            >
              Mehr über unser Team
              <span aria-hidden>→</span>
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-base font-semibold text-pm-light-text-2 no-underline transition-colors hover:text-pm-light-button hover:underline"
            >
              Einblicke in unsere Arbeit
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
