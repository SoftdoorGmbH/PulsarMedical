import { Button } from "@/components/Button";

/** Schließt die Seite ab: durchgehend dunkler Band, kein „helle Karte“-Layout. */
export function HomeCta() {
  return (
    <section
      className="bg-pm-dark-bg py-16 md:py-24"
      aria-labelledby="home-cta-heading"
    >
      <div className="mx-auto max-w-3xl px-6 text-left md:text-center md:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-pm-dark-icon">
          Nächster Schritt
        </p>
        <h2
          id="home-cta-heading"
          className="mt-3 text-3xl font-semibold leading-snug tracking-tight text-pm-dark-headline md:text-4xl"
        >
          Planen Sie ein Begutachtungsprojekt?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-pm-dark-text-1 md:mt-6 md:text-lg">
          Wir klären mit Ihnen, welche Begutachtungsform, fachliche Expertise
          und Umsetzungsstruktur zu Ihrer Fragestellung passen – vom ersten
          Pilotprojekt bis zum langfristigen Auftrag.
        </p>
        <div className="mt-8 flex flex-wrap items-start justify-start md:items-center md:justify-center gap-x-4 gap-y-6 md:mt-10">
          <Button to="/kontakt" variant="inverse" size="lg" fullWidth>
            Beratungstermin anfragen
          </Button>
        </div>
      </div>
    </section>
  );
}
