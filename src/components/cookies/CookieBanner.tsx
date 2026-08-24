import { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/Button";
import { cookieConsentCopy } from "@/content/cookieConsentCopy";
import { useCookieConsent } from "@/context/CookieConsentContext";
import type { CookieLocale, CookieSelection } from "@/lib/cookieConsent";

function LanguageToggle({
  locale,
  onChange,
  label,
}: {
  locale: CookieLocale;
  onChange: (locale: CookieLocale) => void;
  label: string;
}) {
  return (
    <div
      className="inline-flex rounded-full border border-pm-light-container-border bg-pm-light-container p-0.5"
      role="group"
      aria-label={label}
    >
      {(["de", "en"] as const).map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => onChange(code)}
            className={[
              "rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wide transition-colors",
              active
                ? "bg-pm-light-button text-white"
                : "text-pm-light-text-1 hover:text-pm-light-headline",
            ].join(" ")}
            aria-pressed={active}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}

function CategoryToggle({
  id,
  title,
  description,
  hint,
  checked,
  disabled,
  onChange,
}: {
  id: string;
  title: string;
  description: string;
  hint?: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (next: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-pm-light-container-border py-4 last:border-b-0 last:pb-0 first:pt-0">
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
          <p id={`${id}-label`} className="text-sm font-semibold text-pm-light-headline">
            {title}
          </p>
          {hint ? (
            <span className="text-xs font-medium text-pm-light-text-2">{hint}</span>
          ) : null}
        </div>
        <p id={`${id}-desc`} className="mt-1 text-sm leading-relaxed text-pm-light-text-1">
          {description}
        </p>
      </div>
      <button
        type="button"
        id={id}
        role="switch"
        aria-checked={checked}
        aria-labelledby={`${id}-label`}
        aria-describedby={`${id}-desc`}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={[
          "relative mt-0.5 h-6 w-11 shrink-0 rounded-full transition-colors",
          checked ? "bg-pm-light-button" : "bg-pm-light-container-border",
          disabled ? "cursor-not-allowed opacity-80" : "cursor-pointer",
        ].join(" ")}
      >
        <span
          className={[
            "absolute top-0.5 left-0.5 size-5 rounded-full bg-white shadow-sm transition-transform",
            checked ? "translate-x-5" : "translate-x-0",
          ].join(" ")}
        />
      </button>
    </div>
  );
}

export function CookieBanner() {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const {
    consent,
    locale,
    setLocale,
    bannerOpen,
    settingsOpen,
    acceptAll,
    rejectAll,
    saveSelection,
    closeBanner,
  } = useCookieConsent();
  const copy = cookieConsentCopy[locale];
  const canDismiss = consent !== null;

  const [selection, setSelection] = useState<CookieSelection>({
    statistics: consent?.statistics ?? false,
    marketing: consent?.marketing ?? false,
  });
  const [showSettings, setShowSettings] = useState(settingsOpen);

  useEffect(() => {
    if (!bannerOpen) return;
    setShowSettings(settingsOpen);
    setSelection({
      statistics: consent?.statistics ?? false,
      marketing: consent?.marketing ?? false,
    });
  }, [bannerOpen, settingsOpen, consent]);

  useEffect(() => {
    if (!bannerOpen) return;
    dialogRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && canDismiss) closeBanner();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [bannerOpen, canDismiss, closeBanner]);

  if (!bannerOpen) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-70 flex justify-center p-0 sm:justify-start sm:p-6 lg:p-8">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="false"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="animate-pm-cookie-in pointer-events-auto w-full max-w-lg overflow-hidden rounded-t-3xl border border-pm-light-container-border bg-white shadow-[0_24px_64px_-20px_rgb(2_52_78_/0.35)] outline-none sm:rounded-3xl"
      >
        <div className="flex items-start justify-between gap-3 border-b border-pm-light-container-border px-5 py-4 sm:px-6">
          <div className="flex min-w-0 items-start gap-3">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-pm-light-icon-bg text-pm-light-icon">
              <Cookie className="size-5" strokeWidth={1.75} aria-hidden />
            </span>
            <div className="min-w-0 pt-0.5">
              <p className="text-xs font-semibold uppercase tracking-widest text-pm-light-text-2">
                {copy.eyebrow}
              </p>
              <h2
                id={titleId}
                className="mt-1 text-lg font-semibold leading-snug tracking-tight text-pm-light-headline sm:text-xl"
              >
                {copy.title}
              </h2>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <LanguageToggle
              locale={locale}
              onChange={setLocale}
              label={copy.languageLabel}
            />
            {canDismiss ? (
              <button
                type="button"
                onClick={closeBanner}
                className="inline-flex size-10 items-center justify-center rounded-full text-pm-light-text-1 transition-colors hover:bg-pm-light-container hover:text-pm-light-headline"
                aria-label={copy.close}
              >
                <X className="size-5" strokeWidth={2} aria-hidden />
              </button>
            ) : null}
          </div>
        </div>

        <div className="max-h-[min(70dvh,36rem)] overflow-y-auto px-5 py-5 sm:px-6">
          <p className="text-sm leading-relaxed text-pm-light-text-1">
            {copy.description}{" "}
            <Link
              to="/datenschutz"
              className="font-semibold text-pm-light-text-2 no-underline hover:underline"
            >
              {copy.privacy}
            </Link>
            .
          </p>

          <div
            className={`grid transition-[grid-template-rows] duration-300 ease-out ${
              showSettings ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="min-h-0 overflow-hidden" inert={!showSettings || undefined}>
              <div className="mt-5 rounded-2xl border border-pm-light-container-border bg-pm-light-container px-4">
                <CategoryToggle
                  id="cookie-necessary"
                  title={copy.necessary}
                  description={copy.necessaryDesc}
                  hint={copy.necessaryHint}
                  checked
                  disabled
                />
                <CategoryToggle
                  id="cookie-statistics"
                  title={copy.statistics}
                  description={copy.statisticsDesc}
                  checked={selection.statistics}
                  onChange={(statistics) =>
                    setSelection((current) => ({ ...current, statistics }))
                  }
                />
                <CategoryToggle
                  id="cookie-marketing"
                  title={copy.marketing}
                  description={copy.marketingDesc}
                  checked={selection.marketing}
                  onChange={(marketing) =>
                    setSelection((current) => ({ ...current, marketing }))
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-pm-light-container-border px-5 py-4 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              variant="primary"
              size="sm"
              fullWidth
              onClick={acceptAll}
            >
              {copy.acceptAll}
            </Button>
            <Button
              variant="secondary"
              size="sm"
              fullWidth
              className="border border-pm-light-container-border hover:bg-pm-light-container"
              onClick={rejectAll}
            >
              {copy.rejectAll}
            </Button>
          </div>
          {showSettings ? (
            <Button
              variant="secondary"
              size="sm"
              fullWidth
              className="border border-pm-light-container-border hover:bg-pm-light-container"
              onClick={() => saveSelection(selection)}
            >
              {copy.save}
            </Button>
          ) : (
            <button
              type="button"
              onClick={() => setShowSettings(true)}
              className="text-sm font-semibold text-pm-light-text-2 transition-colors hover:text-pm-light-button hover:underline"
            >
              {copy.settings}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
