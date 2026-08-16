import {
  Check,
  CheckCircle2,
  Globe,
  Layers,
  MonitorSmartphone,
  ShieldCheck,
  TrendingUp,
  UserCheck,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import {
  HOME_ASSESSMENT_BENEFITS,
  HOME_ASSESSMENT_COMPARE,
} from "@/content/homeAssessmentCompare";

const BENEFIT_ICONS: Record<
  (typeof HOME_ASSESSMENT_BENEFITS.items)[number]["id"],
  LucideIcon
> = {
  netzwerk: Globe,
  koordination: UserCheck,
  durchfuehrung: MonitorSmartphone,
  projektstrukturen: Layers,
  skalierung: TrendingUp,
  daten: ShieldCheck,
};

const checkClassName =
  "size-10 shrink-0 text-pm-light-text-2 [&>circle]:fill-pm-light-icon-bg [&>circle]:stroke-pm-light-icon-border [&>circle]:stroke-1 [&>path]:origin-[12px_12px] [&>path]:scale-[1.18] [&>path]:stroke-[1.75] [&>path]:stroke-pm-light-text-2";

const painBulletClassName =
  "flex size-10 shrink-0 items-center justify-center rounded-md border border-pm-light-container-border bg-pm-light-container text-pm-light-text-1";

function MobileListIcon({ variant }: { variant: "traditional" | "pulsar" }) {
  const isPulsar = variant === "pulsar";

  return (
    <span
      className={
        isPulsar
          ? "mt-px flex size-7.5 shrink-0 items-center justify-center rounded-full bg-pm-light-tag-glow"
          : "mt-px flex size-7.5 shrink-0 items-center justify-center rounded-full bg-pm-light-text-1/10"
      }
      aria-hidden
    >
      {isPulsar ? (
        <Check className="size-4 stroke-[2.5] text-pm-light-text-2" />
      ) : (
        <X className="size-3.5 stroke-[2.5] text-pm-light-text-1" />
      )}
    </span>
  );
}

function BenefitItem({
  id,
  title,
  description,
  iconColor,
}: (typeof HOME_ASSESSMENT_BENEFITS.items)[number]) {
  const Icon = BENEFIT_ICONS[id];

  return (
    <div className="flex gap-5 border-t-2 border-pm-dark-divider/60 pt-5">
      <div
        className="flex size-6 shrink-0 items-center justify-center"
        style={{ color: iconColor }}
      >
        <Icon className="size-6" strokeWidth={1.75} aria-hidden />
      </div>
      <div>
        <h3 className="text-base font-semibold text-pm-dark-headline sm:text-lg">
          {title}
        </h3>
        <p className="mt-2 text-pretty text-base leading-relaxed text-pm-dark-text-1">
          {description}
        </p>
      </div>
    </div>
  );
}

/** Vergleich: klassische Begutachtungsorganisation vs. PULSAR Medical. */
export function HomeAssessmentCompare() {
  const { headline, subheadline, traditionalLabel, pulsarLabel, rows } =
    HOME_ASSESSMENT_COMPARE;

  return (
    <section
      className="relative overflow-hidden border-y border-pm-light-container-border"
      aria-labelledby="assessment-compare-heading"
    >
      <div className="bg-pm-light-bg py-16 sm:py-20 md:py-24">
        <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-elft md:text-center">
            <h2
              id="assessment-compare-heading"
              className="text-3xl font-semibold leading-tight tracking-tight text-pm-light-headline md:text-4xl lg:text-[2.5rem] lg:leading-[1.15]"
            >
              {headline}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-pm-light-text-1 md:mt-6 md:text-lg">
              {subheadline}
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-10 sm:mt-12 lg:hidden">
            <div>
              <div className="mb-4 flex items-center gap-3 pl-3.75">
                <MobileListIcon variant="traditional" />
                <p className="text-xl font-semibold tracking-tight text-pm-light-text-1">
                  {traditionalLabel}
                </p>
              </div>
              <ul className="flex flex-col gap-2.5">
                {rows.map(({ traditional }) => (
                  <li
                    key={traditional}
                    className="list-none rounded-[10px] border border-pm-light-container-border bg-pm-light-container px-3.5 py-3.5"
                  >
                    <div className="flex items-start gap-3">
                      <MobileListIcon variant="traditional" />
                      <p className="text-sm leading-relaxed text-pm-light-text-1">
                        {traditional}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-3 pl-3.75">
                <MobileListIcon variant="pulsar" />
                <p className="text-xl font-semibold tracking-tight text-pm-light-headline">
                  {pulsarLabel}
                </p>
              </div>
              <ul className="flex flex-col gap-2.5">
                {rows.map(({ pulsar }) => (
                  <li
                    key={pulsar}
                    className="list-none rounded-[10px] border border-pm-light-text-2/25 bg-pm-light-icon-bg/60 px-3.5 py-3.5"
                  >
                    <div className="flex items-start gap-3">
                      <MobileListIcon variant="pulsar" />
                      <p className="text-sm leading-relaxed text-pm-light-headline">
                        {pulsar}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 hidden sm:mt-12 lg:block">
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3.5 pl-5.25">
                <span className={painBulletClassName} aria-hidden>
                  <X className="size-5 stroke-[2.5]" />
                </span>
                <p className="text-xl font-semibold tracking-tight text-pm-light-text-1">
                  {traditionalLabel}
                </p>
              </div>

              <div className="flex items-center gap-3.5 pl-6.25">
                <CheckCircle2 className={checkClassName} aria-hidden />
                <p className="text-xl font-semibold tracking-tight text-pm-light-headline">
                  {pulsarLabel}
                </p>
              </div>
            </div>

            <ul className="mt-8 flex flex-col gap-4">
              {rows.map(({ traditional, pulsar }) => (
                <li
                  key={traditional}
                  className="grid list-none grid-cols-2 items-stretch gap-6"
                >
                  <div className="flex h-full items-center gap-3.5 rounded-2xl border border-pm-light-container-border bg-pm-light-container p-5">
                    <span className={painBulletClassName} aria-hidden>
                      <X className="size-5 stroke-[2.5]" />
                    </span>
                    <p className="text-base leading-relaxed text-pm-light-text-1">
                      {traditional}
                    </p>
                  </div>

                  <div className="flex h-full items-center gap-3.5 rounded-2xl border-6 border-pm-light-container-border bg-pm-light-container p-5 shadow-[0_8px_28px_-12px_rgb(2_52_78_/0.14)]">
                    <CheckCircle2 className={checkClassName} aria-hidden />
                    <p className="text-base leading-relaxed text-pm-light-headline">
                      {pulsar}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        className="bg-pm-dark-bg py-18 sm:py-20 md:py-24"
        aria-labelledby="assessment-benefits-heading"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
          <div className="mb-12 sm:mb-14 lg:mb-16">
            <h2
              id="assessment-benefits-heading"
              className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-pm-dark-headline md:text-4xl lg:text-[2.5rem] lg:leading-[1.15]"
            >
              {HOME_ASSESSMENT_BENEFITS.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-10">
            {HOME_ASSESSMENT_BENEFITS.items.map((item) => (
              <BenefitItem key={item.id} {...item} />
            ))}
          </div>

          <div className="mt-12 flex justify-center sm:mt-14 lg:mt-16">
            <Link
              to={HOME_ASSESSMENT_BENEFITS.cta.to}
              className="inline-flex rounded-full bg-white px-8 py-3.5 text-base font-semibold text-pm-light-button no-underline shadow-md transition-[filter,transform] hover:brightness-95 active:scale-[0.99]"
            >
              {HOME_ASSESSMENT_BENEFITS.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
