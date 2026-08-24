import { Button } from "@/components/Button";

export function NotFoundPage() {
  return (
    <section
      className="bg-pm-light-container py-16 md:py-24"
      aria-labelledby="not-found-heading"
    >
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-pm-light-text-2">
          Fehler 404
        </p>
        <h1
          id="not-found-heading"
          className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-pm-light-headline sm:text-5xl"
        >
          Seite nicht gefunden
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-pm-light-text-1 md:text-xl">
          Die gesuchte Seite existiert nicht oder wurde verschoben. Sie finden
          unsere Begutachtungsangebote auf der Startseite oder können uns direkt
          kontaktieren.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button to="/">Zur Startseite</Button>
          <Button to="/kontakt" variant="secondary">
            Kontakt aufnehmen
          </Button>
        </div>
      </div>
    </section>
  );
}
