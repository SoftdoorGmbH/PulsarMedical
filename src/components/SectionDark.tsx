import type { ReactNode } from "react";

/** Placeholder section using “dunkler Abschnitt” tokens from `index.css`. */
export function SectionDark({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="bg-pm-dark-bg py-14 text-pm-dark-text-2">
      <div className="mx-auto max-w-5xl px-4">
        <div className="rounded-xl border border-pm-dark-container-border bg-pm-dark-container p-8 shadow-[0_0_40px_var(--color-pm-dark-tag-glow)]">
          <p className="mb-2 inline-block rounded-full bg-pm-dark-tag/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-pm-dark-tag shadow-[0_0_20px_var(--color-pm-dark-tag-glow)]">
            Abschnitt
          </p>
          <h1 className="mb-4 text-3xl font-bold text-pm-dark-headline md:text-4xl">
            {title}
          </h1>
          <div className="space-y-4 text-pm-dark-text-1 [&_strong]:text-pm-dark-text-2">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
