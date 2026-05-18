import { Link } from "react-router-dom";

/** Schließt die Seite ab: durchgehend dunkler Band, kein „helle Karte“-Layout. */
export function HomeCta() {
  return (
    <section
      className="bg-pm-dark-bg py-16 md:py-24"
      aria-labelledby="home-cta-heading"
    >
      <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-pm-dark-icon">
          Nächster Schritt
        </p>
        <h2
          id="home-cta-heading"
          className="mt-3 text-3xl font-semibold leading-snug tracking-tight text-pm-dark-headline md:text-4xl"
        >
          Versorgung, die zu{" "}
          <em className="font-display-serif text-[1.02em] font-normal italic text-pm-dark-headline">
            echten Lebenslagen passt
          </em>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-pm-dark-text-1 md:mt-6 md:text-lg">
          Entdecken Sie einen klaren Weg für Besetzung, Qualität und
          Zusammenarbeit — mit messbarer Wirkung für Teams und Patientinnen
          und Patienten.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-6 md:mt-10">
          <Link
            to="/unternehmen"
            className="inline-flex rounded-full bg-white px-8 py-3.5 text-center text-base font-semibold text-pm-light-button no-underline shadow-md transition-[filter,transform] hover:brightness-95 active:scale-[0.99]"
          >
            Beratung anfragen
          </Link>
        </div>
      </div>
    </section>
  );
}
