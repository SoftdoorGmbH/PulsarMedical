import { useId, useState } from "react";
import { Link } from "react-router-dom";
import type {
  AudienceFaqContent,
  AudienceFaqItem,
} from "@/content/audienceFaq";

function ArrowRightSmall() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FaqAnswer({ item }: { item: AudienceFaqItem }) {
  const paragraphs = Array.isArray(item.answer) ? item.answer : [item.answer];

  return (
    <>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {item.cta ? (
        <div className="mt-8">
          <Link
            to={item.cta.to}
            className="group/cta inline-flex items-center gap-3 font-semibold text-pm-light-headline no-underline transition-opacity hover:opacity-90"
          >
            <span>{item.cta.label}</span>
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-pm-light-button text-white shadow-sm ring-1 ring-black/5 transition-transform duration-300 group-hover/cta:translate-x-0.5">
              <ArrowRightSmall />
            </span>
          </Link>
        </div>
      ) : null}
    </>
  );
}

export function AudienceFaqSection({
  headingId,
  title = "Häufig gestellte Fragen",
  items,
}: AudienceFaqContent) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <section className="relative my-14 lg:my-24" aria-labelledby={headingId}>
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        <header className="mb-8 text-left md:text-center md:mb-12">
          <h2
            id={headingId}
            className="text-3xl font-semibold tracking-tight text-pm-light-headline md:text-4xl"
          >
            {title}
          </h2>
        </header>

        <div className="rounded-4xl border-6 border-pm-light-container-border bg-pm-light-container px-6 pt-8 pb-2 shadow-[inset_0_1px_0_0_rgb(255_255_255_/0.65)] md:rounded-[2.5rem] md:px-12 md:pt-10 lg:px-16 lg:pt-16 lg:pb-10 xl:px-20">
          {items.map((item, index) => {
            const isOpen = openId === item.id;
            const panelId = `${baseId}-panel-${item.id}`;
            const triggerId = `${baseId}-trigger-${item.id}`;

            return (
              <div
                key={item.id}
                className={`border-b border-pm-dark-divider/35 last:border-b-0 ${index === 0 ? "-mt-4 md:-mt-6" : ""}`}
              >
                <h3 className="m-0">
                  <button
                    id={triggerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="group flex w-full cursor-pointer items-baseline justify-between gap-6 py-6 text-left md:gap-12 md:py-8"
                    onClick={() =>
                      setOpenId((current) =>
                        current === item.id ? null : item.id,
                      )
                    }
                  >
                    <span
                      className={`mb-0 text-2xl leading-snug tracking-tight transition-colors duration-300 ease-linear md:text-2xl ${
                        isOpen
                          ? "text-pm-light-text-2"
                          : "text-pm-light-headline group-hover:text-pm-light-text-2"
                      }`}
                    >
                      {item.question}
                    </span>
                    <span
                      className="relative flex h-4 min-w-4 shrink-0 items-center justify-center"
                      aria-hidden
                    >
                      <span
                        className={`absolute h-4 w-0.5 rounded-full bg-pm-light-headline transition-all duration-300 ease-linear group-hover:bg-pm-light-text-2 ${
                          isOpen
                            ? "scale-0 rotate-90 opacity-0"
                            : "scale-100 opacity-100"
                        }`}
                      />
                      <span className="absolute h-0.5 w-4 rounded-full bg-pm-light-headline transition-all duration-300 ease-linear group-hover:bg-pm-light-text-2" />
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="space-y-4 pb-7 text-base leading-relaxed text-pm-light-text-1 md:pb-9 md:pr-12 md:text-lg [&_p:last-child]:mb-0">
                      <FaqAnswer item={item} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
