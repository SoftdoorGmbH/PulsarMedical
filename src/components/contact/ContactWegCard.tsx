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
      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-pm-light-icon-bg text-pm-light-icon md:size-14">
        <Icon className="size-6 md:size-7" strokeWidth={1.75} aria-hidden />
      </div>

      <h3 className="mt-6 text-xl font-semibold leading-snug tracking-tight text-pm-light-headline md:text-2xl">
        {card.title}
      </h3>

      <p className="mt-4 flex-1 text-base leading-relaxed text-pm-light-text-1">
        {card.description}
      </p>

      <Button type="button" className="mt-6" fullWidth onClick={onOpen}>
        {card.cta}
      </Button>
    </article>
  );
}
