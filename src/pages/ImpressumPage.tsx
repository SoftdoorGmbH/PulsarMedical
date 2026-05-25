import { SectionLight } from "@/components/SectionLight";

const externalLinkClass =
  "font-medium text-pm-light-text-2 no-underline transition-colors hover:text-pm-light-button hover:underline";

export function ImpressumPage() {
  return (
    <SectionLight title="Impressum">
      <address className="not-italic leading-relaxed">
        Pulsar Medical GmbH
        <br />
        L 13, 3-4
        <br />
        68161 Mannheim
      </address>

      <p>
        Handelsregister: HRB 304138
        <br />
        Registergericht: Amtsgericht München
      </p>

      <p>
        <strong>Geschäftsführung:</strong>
        <br />
        Markus Hertrich, Claus Niedworok &amp; Marco Reis
      </p>

      <h2 className="text-xl font-semibold text-pm-light-headline">Kontakt</h2>
      <p>
        Telefon:{" "}
        <a href="tel:+4989215420630" className={externalLinkClass}>
          +49 (0) 89- 215420630
        </a>
        <br />
        E-Mail:{" "}
        <a href="mailto:kontakt@pulsarmed.de" className={externalLinkClass}>
          kontakt@pulsarmed.de
        </a>
      </p>

      <h2 className="text-xl font-semibold text-pm-light-headline">
        Umsatzsteuer-ID
      </h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
        <br />
        DE333901351
      </p>

      <h2 className="text-xl font-semibold text-pm-light-headline">
        Redaktionell verantwortlich
      </h2>
      <p>
        Markus Hertrich
        <br />
        L 13, 3-4
        <br />
        68161 Mannheim
      </p>

      <h2 className="text-xl font-semibold text-pm-light-headline">
        Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
      </h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2 className="text-xl font-semibold text-pm-light-headline">
        Bildquellen
      </h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Fotos Mitarbeiter Pulsar medical AG:{" "}
          <a
            href="https://www.thomasstraub.de/"
            className={externalLinkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            www.thomasstraub.de
          </a>
        </li>
        <li>
          Fotos Himmel, Meer &amp; Laub:{" "}
          <a
            href="https://www.instagram.com/leemurfocal/"
            className={externalLinkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            instagram.com/leemurfocal
          </a>
        </li>
        <li>
          Foto Wald:{" "}
          <a
            href="https://unsplash.com/de/@andrewcoelho"
            className={externalLinkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            unsplash.com/de/@andrewcoelho
          </a>
        </li>
        <li>
          Foto Beratung:{" "}
          <a
            href="https://unsplash.com/de/@charlesdeluvio"
            className={externalLinkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            unsplash.com/de/@charlesdeluvio
          </a>
        </li>
        <li>
          Foto Hände &amp; Laptops:{" "}
          <a
            href="https://unsplash.com/de/@homajob"
            className={externalLinkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            unsplash.com/de/@homajob
          </a>
        </li>
      </ul>
      <p>
        Art Direktion:{" "}
        <a href="mailto:hallo@tatjanasanftenberg.com" className={externalLinkClass}>
          hallo@tatjanasanftenberg.com
        </a>
      </p>
    </SectionLight>
  );
}
