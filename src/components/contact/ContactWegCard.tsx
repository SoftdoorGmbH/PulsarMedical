import { Button } from "@/components/Button";
import type { ContactCard } from "@/content/contact";

export function ContactWegCard({
  card,
  onOpen,
}: {
  card: ContactCard;
  onOpen: () => void;
}) {
  const Icon = card.icon;

  return (
    <article className="flex h-full w-full flex-col rounded-2xl border-4 border-pm-light-container-border bg-white p-8 shadow-[0_8px_24px_-12px_rgb(2_52_78_/0.12)] md:p-10">
      <div className="flex items-start justify-between gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-pm-light-icon-bg text-pm-light-icon md:size-14">
          <Icon className="size-6 md:size-7" strokeWidth={1.75} aria-hidden />
        </div>
        {card.badge ? (
          <p className="rounded-full bg-pm-light-icon-bg px-3 py-1 text-xs font-semibold text-pm-light-text-2">
            {card.badge}
          </p>
        ) : null}
      </div>

      <h3 className="mt-6 text-xl font-semibold leading-snug tracking-tight text-pm-light-headline md:text-2xl">
        {card.title}
      </h3>
      {card.question ? (
        <p className="mt-2 text-base font-semibold leading-snug text-pm-light-headline md:text-lg">
          {card.question}
        </p>
      ) : null}

      <p className="mt-4 flex-1 text-base leading-relaxed text-pm-light-text-1">
        {card.description}
      </p>

      <Button type="button" className="mt-6" fullWidth onClick={onOpen}>
        {card.cta}
      </Button>

      {card.quote ? (
        <blockquote className="mt-6 border-t border-pm-light-container-border pt-5">
          <p className="font-display-serif text-base italic leading-relaxed text-pm-light-text-1">
            {card.quote}
          </p>
          {card.attribution ? (
            <footer className="mt-3 text-sm font-medium text-pm-light-headline">
              — {card.attribution}
            </footer>
          ) : null}
        </blockquote>
      ) : null}
    </article>
  );
}
