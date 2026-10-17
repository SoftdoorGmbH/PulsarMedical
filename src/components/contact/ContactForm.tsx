import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/Button";
import { CONTACT_EMAIL, type ContactCard } from "@/content/contact";
import { trackContactFormSubmit } from "@/lib/analytics";

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

const SUBMIT_ERROR =
  "Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt.";

const EMAIL_PATTERN =
  /^(?!\.)(?!.*\.\.)[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,})+$/;

const PHONE_PATTERN = /^\+?\d+$/;

const fieldClassName =
  "w-full rounded-xl border border-pm-light-container-border bg-white px-4 py-3 text-base text-pm-light-headline placeholder:text-pm-light-text-1/45 transition-[border-color,box-shadow] focus:border-pm-light-text-2 focus:outline-none focus:ring-2 focus:ring-pm-light-tag-glow";

const labelClassName = "mb-2 block text-sm font-semibold text-pm-light-headline";

function sanitizePhone(value: string) {
  const cleaned = value.replace(/[^\d+]/g, "");
  const hasPlus = cleaned.includes("+");
  const digits = cleaned.replace(/\+/g, "");
  return hasPlus ? `+${digits}` : digits;
}

function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {};

  if (fields.name.trim().length < 2) {
    errors.name = "Bitte geben Sie Ihren Namen an.";
  }

  if (!EMAIL_PATTERN.test(fields.email.trim())) {
    errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
  }

  const phone = fields.phone.trim();
  if (phone && !PHONE_PATTERN.test(phone)) {
    errors.phone =
      "Die Telefonnummer darf nur Ziffern und ein führendes Plus enthalten.";
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

async function submitToWeb3Forms(card: ContactCard, fields: FormFields) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    throw new Error("missing access key");
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `Anfrage: ${card.title} – ${fields.name.trim()}`,
      from_name: fields.name.trim(),
      name: fields.name.trim(),
      email: fields.email.trim(),
      ...(fields.organization.trim()
        ? { organization: fields.organization.trim() }
        : {}),
      ...(fields.phone.trim() ? { phone: fields.phone.trim() } : {}),
      message: fields.message.trim(),
      thema: card.title,
      botcheck: false,
    }),
  });

  const data = (await response.json()) as {
    success?: boolean;
    message?: string;
  };

  if (!response.ok || !data.success) {
    throw new Error(data.message ?? "submit failed");
  }
}

export function ContactForm({ card }: { card: ContactCard }) {
  const [fields, setFields] = useState<FormFields>(INITIAL_FIELDS);
  const [errors, setErrors] = useState<FormErrors>({});
  const [botcheck, setBotcheck] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const resetForm = () => {
    setFields(INITIAL_FIELDS);
    setErrors({});
    setBotcheck("");
    setSubmitError(null);
    setSent(false);
  };

  const update = <K extends keyof FormFields>(key: K, value: FormFields[K]) => {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(fields);
    setErrors(nextErrors);
    setSubmitError(null);
    if (Object.keys(nextErrors).length > 0) return;

    if (botcheck.trim()) {
      setSent(true);
      return;
    }

    setSubmitting(true);
    try {
      await submitToWeb3Forms(card, fields);
      trackContactFormSubmit(card.title);
      setSent(true);
    } catch {
      setSubmitError(SUBMIT_ERROR);
    } finally {
      setSubmitting(false);
    }
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
          Ihre Anfrage zu „{card.title}“ ist bei uns eingegangen. Wir melden uns
          in der Regel innerhalb von zwei Werktagen.
        </p>
        <Button type="button" className="mt-8" onClick={resetForm}>
          Weitere Nachricht schreiben
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="relative grid gap-5"
      aria-busy={submitting}
    >
      <div className="pointer-events-none absolute -left-[9999px] h-px w-px overflow-hidden opacity-0" aria-hidden>
        <input
          id="contact-botcheck"
          name="botcheck"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={botcheck}
          onChange={(event) => setBotcheck(event.target.value)}
        />
      </div>

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
            inputMode="tel"
            autoComplete="tel"
            pattern="\\+?[0-9]*"
            value={fields.phone}
            onChange={(event) => update("phone", sanitizePhone(event.target.value))}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "contact-phone-error" : undefined}
            className={fieldClassName}
            placeholder="+49 …"
          />
          {errors.phone ? (
            <p id="contact-phone-error" className="mt-2 text-sm text-red-700">
              {errors.phone}
            </p>
          ) : null}
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

      {submitError ? (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-relaxed text-red-800"
        >
          <p>{submitError}</p>
          <p className="mt-2">
            <a
              href={buildMailto(card, fields)}
              className="font-semibold text-red-900 underline underline-offset-2"
            >
              Nachricht stattdessen per E-Mail senden
            </a>{" "}
            an {CONTACT_EMAIL}.
          </p>
        </div>
      ) : null}

      <Button
        type="submit"
        size="lg"
        fullWidth
        disabled={submitting}
        className="disabled:pointer-events-none disabled:opacity-60"
      >
        {submitting ? "Wird gesendet…" : "Nachricht senden"}
      </Button>
    </form>
  );
}
