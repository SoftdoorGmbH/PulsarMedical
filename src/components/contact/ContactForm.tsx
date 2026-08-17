import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/Button";
import { CONTACT_EMAIL, type ContactCard } from "@/content/contact";

type FormFields = {
  name: string;
  email: string;
  organization: string;
  phone: string;
  message: string;
  privacy: boolean;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

const INITIAL_FIELDS: FormFields = {
  name: "",
  email: "",
  organization: "",
  phone: "",
  message: "",
  privacy: false,
};

const fieldClassName =
  "w-full rounded-xl border border-pm-light-container-border bg-white px-4 py-3 text-base text-pm-light-headline placeholder:text-pm-light-text-1/45 transition-[border-color,box-shadow] focus:border-pm-light-text-2 focus:outline-none focus:ring-2 focus:ring-pm-light-tag-glow";

const labelClassName = "mb-2 block text-sm font-semibold text-pm-light-headline";

function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {};

  if (fields.name.trim().length < 2) {
    errors.name = "Bitte geben Sie Ihren Namen an.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
  }

  if (fields.message.trim().length < 10) {
    errors.message = "Bitte beschreiben Sie Ihr Anliegen etwas genauer.";
  }

  if (!fields.privacy) {
    errors.privacy = "Bitte stimmen Sie der Datenschutzerklärung zu.";
  }

  return errors;
}

function buildMailto(card: ContactCard, fields: FormFields) {
  const subject = `Anfrage: ${card.title} – ${fields.name.trim()}`;
  const lines = [
    `Name: ${fields.name.trim()}`,
    `E-Mail: ${fields.email.trim()}`,
    fields.organization.trim()
      ? `Organisation: ${fields.organization.trim()}`
      : null,
    fields.phone.trim() ? `Telefon: ${fields.phone.trim()}` : null,
    `Thema: ${card.title}`,
    "",
    fields.message.trim(),
  ].filter((line) => line !== null);

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}

export function ContactForm({ card }: { card: ContactCard }) {
  const [fields, setFields] = useState<FormFields>(INITIAL_FIELDS);
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  const update = <K extends keyof FormFields>(key: K, value: FormFields[K]) => {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    window.location.href = buildMailto(card, fields);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-start" role="status">
        <span className="flex size-12 items-center justify-center rounded-2xl bg-pm-light-icon-bg text-pm-light-text-2">
          <CheckCircle2 className="size-6" strokeWidth={1.75} aria-hidden />
        </span>
        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-pm-light-headline">
          Vielen Dank für Ihre Nachricht
        </h3>
        <p className="mt-3 text-base leading-relaxed text-pm-light-text-1">
          Ihr E-Mail-Programm sollte sich mit der vorausgefüllten Anfrage zu
          „{card.title}“ geöffnet haben. Senden Sie die Nachricht ab — wir
          melden uns in der Regel innerhalb von zwei Werktagen.
        </p>
        <p className="mt-3 text-sm text-pm-light-text-1">
          Falls sich kein Fenster öffnet, schreiben Sie uns direkt an{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold text-pm-light-text-2 no-underline hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
        <Button
          type="button"
          className="mt-8"
          onClick={() => {
            setFields(INITIAL_FIELDS);
            setErrors({});
            setSent(false);
          }}
        >
          Weitere Nachricht schreiben
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClassName}>
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={fields.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={fieldClassName}
            placeholder="Vor- und Nachname"
          />
          {errors.name ? (
            <p id="contact-name-error" className="mt-2 text-sm text-red-700">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClassName}>
            E-Mail
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={fieldClassName}
            placeholder="name@organisation.de"
          />
          {errors.email ? (
            <p id="contact-email-error" className="mt-2 text-sm text-red-700">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-organization" className={labelClassName}>
            Organisation{" "}
            <span className="font-medium text-pm-light-text-1">(optional)</span>
          </label>
          <input
            id="contact-organization"
            name="organization"
            type="text"
            autoComplete="organization"
            value={fields.organization}
            onChange={(event) => update("organization", event.target.value)}
            className={fieldClassName}
            placeholder="Jobcenter, BG, Unternehmen"
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className={labelClassName}>
            Telefon{" "}
            <span className="font-medium text-pm-light-text-1">(optional)</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={(event) => update("phone", event.target.value)}
            className={fieldClassName}
            placeholder="+49 …"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClassName}>
          Nachricht
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={fields.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? "contact-message-error" : undefined
          }
          className={`${fieldClassName} min-h-32 resize-y`}
          placeholder="Wobei können wir Sie unterstützen?"
        />
        {errors.message ? (
          <p id="contact-message-error" className="mt-2 text-sm text-red-700">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-pm-light-text-1">
          <input
            type="checkbox"
            name="privacy"
            checked={fields.privacy}
            onChange={(event) => update("privacy", event.target.checked)}
            aria-invalid={Boolean(errors.privacy)}
            aria-describedby={
              errors.privacy ? "contact-privacy-error" : undefined
            }
            className="mt-1 size-4 shrink-0 rounded border-pm-light-container-border text-pm-light-button accent-pm-light-button"
          />
          <span>
            Ich habe die{" "}
            <Link
              to="/datenschutz"
              className="font-semibold text-pm-light-text-2 no-underline hover:underline"
            >
              Datenschutzerklärung
            </Link>{" "}
            gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung
            dieser Anfrage zu.
          </span>
        </label>
        {errors.privacy ? (
          <p id="contact-privacy-error" className="mt-2 text-sm text-red-700">
            {errors.privacy}
          </p>
        ) : null}
      </div>

      <Button type="submit" size="lg" fullWidth>
        Nachricht senden
      </Button>
    </form>
  );
}
