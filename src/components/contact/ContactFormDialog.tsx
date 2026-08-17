import { useEffect, useId, useRef } from "react";
import { X } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import type { ContactCard } from "@/content/contact";

export function ContactFormDialog({
  card,
  onClose,
}: {
  card: ContactCard;
  onClose: () => void;
}) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const Icon = card.icon;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-pm-light-headline/30 backdrop-blur-[2px]"
        aria-label="Formular schließen"
        onClick={onClose}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="relative z-10 flex max-h-[min(92dvh,52rem)] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl border border-pm-light-container-border bg-white shadow-[0_24px_64px_-20px_rgb(2_52_78_/0.35)] sm:rounded-3xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-pm-light-container-border px-6 py-5 sm:px-8">
          <div className="flex min-w-0 items-start gap-3">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-pm-light-icon-bg text-pm-light-icon">
              <Icon className="size-5" strokeWidth={1.75} aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-widest text-pm-light-text-2">
                Anfrage
              </p>
              <h2
                id={titleId}
                className="mt-1 text-xl font-semibold leading-snug tracking-tight text-pm-light-headline sm:text-2xl"
              >
                {card.title}
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-full text-pm-light-text-1 transition-colors hover:bg-pm-light-container hover:text-pm-light-headline"
            aria-label="Formular schließen"
          >
            <X className="size-5" strokeWidth={2} aria-hidden />
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
          <ContactForm key={card.id} card={card} />
        </div>
      </div>
    </div>
  );
}
