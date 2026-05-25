import { Link } from "react-router-dom";

/** Abschluss-CTA für die Über-uns-Seite. */
export function AboutCta() {
  return (
    <section
      className="bg-pm-dark-bg py-16 md:py-24"
      aria-labelledby="about-cta-heading"
    >
      <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
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
          <a
            href="mailto:kontakt@pulsarmed.de"
            className="inline-flex rounded-full bg-white px-8 py-3.5 text-center text-base font-semibold text-pm-light-button no-underline shadow-md transition-[filter,transform] hover:brightness-95 active:scale-[0.99]"
          >
            Kontakt aufnehmen
          </a>
          <Link
            to="/karriere"
            className="inline-flex rounded-full border border-pm-dark-divider px-8 py-3.5 text-base font-semibold text-pm-dark-text-2 no-underline transition-colors hover:bg-white/10"
          >
            Karriere entdecken
          </Link>
        </div>
      </div>
    </section>
  );
}
