import { Check, X } from "lucide-react";
import type { OfferCompareContent } from "@/content/offerCompare";

function CompareIcon({ variant }: { variant: "alternative" | "pulsar" }) {
  const isPulsar = variant === "pulsar";

  return (
    <span
      className={
        isPulsar
          ? "flex size-7 shrink-0 items-center justify-center rounded-full bg-pm-light-icon-bg"
          : "flex size-7 shrink-0 items-center justify-center rounded-full bg-pm-light-text-1/10"
      }
      aria-hidden
    >
      {isPulsar ? (
        <Check className="size-3.5 stroke-[2.5] text-pm-light-text-2" />
      ) : (
        <X className="size-3 stroke-[2.5] text-pm-light-text-1" />
      )}
    </span>
  );
}

function CompareCard({
  text,
  variant,
}: {
  text: string;
  variant: "alternative" | "pulsar";
}) {
  const isPulsar = variant === "pulsar";

  return (
    <li
      className={`list-none rounded-2xl border px-4 py-4 sm:px-5 sm:py-4.5 ${
        isPulsar
          ? "border-pm-light-container-border bg-white shadow-[0_8px_28px_-12px_rgb(2_52_78_/0.12)]"
          : "border-pm-light-container-border/80 bg-pm-light-container/70"
      }`}
    >
      <div className="flex items-start gap-3.5">
        <CompareIcon variant={variant} />
        <p
          className={` leading-relaxed text-base ${
            isPulsar ? "text-pm-light-headline" : "text-pm-light-text-1"
          }`}
        >
          {text}
        </p>
      </div>
    </li>
  );
}

function CompareColumn({
  title,
  subtitle,
  items,
  variant,
}: OfferCompareContent["alternative"] & {
  variant: "alternative" | "pulsar";
}) {
  const isPulsar = variant === "pulsar";

  return (
    <div>
      <h3
        className={`text-xl font-semibold tracking-tight sm:text-2xl ${
          isPulsar ? "text-pm-light-headline" : "text-pm-light-text-1"
        }`}
      >
        {title}
      </h3>
      <p className="mt-2 leading-relaxed text-pm-light-text-1 text-base">
        {subtitle}
      </p>
      <ul className="mt-5 flex flex-col gap-3 sm:mt-6 sm:gap-3.5">
        {items.map((item) => (
          <CompareCard key={item} text={item} variant={variant} />
        ))}
      </ul>
    </div>
  );
}

export function OfferCompareSection({
  headingId,
  title,
  description,
  alternative,
  pulsar,
}: OfferCompareContent) {
  return (
    <section
      className="border-y border-pm-light-container-border bg-pm-light-container py-16 sm:py-20 md:py-24"
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        <header className="mx-auto max-w-3xl text-left md:text-center">
          <h2
            id={headingId}
            className="text-3xl leading-tight tracking-tight text-pm-light-headline md:text-4xl lg:text-[2.75rem] lg:leading-[1.12]"
          >
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-pm-light-text-1 md:mt-6 md:text-lg">
            {description}
          </p>
        </header>

        <div className="mt-12 grid gap-10 sm:mt-14 lg:mt-16 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <CompareColumn {...alternative} variant="alternative" />
          <CompareColumn {...pulsar} variant="pulsar" />
        </div>
      </div>
    </section>
  );
}
