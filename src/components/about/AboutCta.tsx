import { Button } from "@/components/Button";

/** Abschluss-CTA für die Über-uns-Seite. */
export function AboutCta() {
  return (
    <section
      className="bg-pm-dark-bg py-16 md:py-24"
      aria-labelledby="about-cta-heading"
    >
      <div className="mx-auto max-w-3xl px-6 text-left md:text-center md:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-pm-dark-icon">
          Nächster Schritt
        </p>
        <h2
          id="about-cta-heading"
          className="mt-3 text-3xl font-semibold leading-snug tracking-tight text-pm-dark-headline md:text-4xl"
        >
          Gesundheit, die{" "}
          <em className="font-display-serif text-[1.02em] font-normal italic text-pm-dark-headline">
            zusammen wirkt
          </em>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-pm-dark-text-1 md:mt-6 md:text-lg">
          Sprechen Sie mit uns über medizinische Beratung für Jobcenter,
          Unternehmen oder Einzelpersonen — wir freuen uns auf Ihre Nachricht.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:mt-10">
          <Button to="/kontakt" variant="inverse" size="lg" fullWidth="md">
            Kontakt aufnehmen
          </Button>
          <Button to="/karriere" variant="outline" size="lg" fullWidth="md">
            Karriere entdecken
          </Button>
        </div>
      </div>
    </section>
  );
}
