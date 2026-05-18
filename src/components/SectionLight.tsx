import type { ReactNode } from "react";

/** Placeholder section using “heller Abschnitt” tokens from `index.css`. */
export function SectionLight({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-pm-light-bg py-14 text-pm-light-text-1">
      <div
        className="pointer-events-none absolute inset-0 opacity-100"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, var(--color-pm-light-bg-glow), transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-4">
        <div className="rounded-xl border border-pm-light-container-border bg-pm-light-container p-8 shadow-[0_0_40px_var(--color-pm-light-tag-glow)]">
          <p className="mb-2 inline-block rounded-full bg-pm-light-tag/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-pm-light-tag shadow-[0_0_16px_var(--color-pm-light-tag-glow)]">
            Abschnitt
          </p>
          <h1 className="mb-4 text-3xl font-bold text-pm-light-headline md:text-4xl">
            {title}
          </h1>
          <div className="space-y-4 [&_strong]:text-pm-light-text-2">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
