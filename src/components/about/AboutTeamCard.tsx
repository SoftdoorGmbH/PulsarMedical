import { useId } from "react";
import type { TeamMember } from "@/content/teamMembers";

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="size-4"
      aria-hidden
    >
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

export function AboutTeamCard({
  member,
  expanded,
  onToggle,
}: {
  member: TeamMember;
  expanded: boolean;
  onToggle: () => void;
}) {
  const detailsId = useId();

  return (
    <article
      data-expanded={expanded}
      className={[
        "about-team-card flex flex-col overflow-hidden rounded-2xl border border-pm-light-container-border bg-white shadow-[0_8px_24px_-12px_rgb(2_52_78_/0.1)] lg:min-h-[500px]",
        expanded
          ? "shadow-[0_16px_40px_-12px_rgb(2_52_78_/0.18)] ring-1 ring-pm-light-container-border"
          : "",
      ].join(" ")}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        aria-controls={detailsId}
        className="relative w-full text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pm-light-text-2"
      >
        <div
          className={[
            member.imageBgClass,
            "about-team-card__photo absolute overflow-hidden",
          ].join(" ")}
        >
          <img
            src={member.imageUrl}
            alt={member.name}
            width={400}
            height={400}
            loading="lazy"
            decoding="async"
            className="size-full object-cover object-top"
          />
        </div>

        <div className="about-team-card__header flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="text-xl font-semibold text-pm-light-headline">
              {member.name}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-pm-light-text-1 md:text-base">
              {member.role}
            </p>
          </div>

          <span
            className="about-team-card__arrow inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-pm-light-container-border bg-pm-light-container text-pm-light-text-2"
            aria-hidden
          >
            <ArrowRightIcon />
          </span>
        </div>
      </button>

      <div
        id={detailsId}
        className={[
          "about-team-card__details grid",
          expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        ].join(" ")}
        aria-hidden={!expanded}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6">
            <div className="border-t border-dashed border-pm-light-container-border pt-4">
              <div className="max-h-52 overflow-y-auto pr-1 text-sm leading-relaxed text-pm-light-text-1 md:max-h-60 md:text-base">
                {member.qualification ? (
                  <p className="mb-4">
                    <span className="font-semibold text-pm-light-headline">
                      Ausbildung:{" "}
                    </span>
                    {member.qualification}
                  </p>
                ) : null}
                {member.quote ? (
                  <blockquote className="text-pm-light-text-1 italic">
                    {member.quote}
                  </blockquote>
                ) : (
                  <p>Nehmen Sie gerne Kontakt auf.</p>
                )}
              </div>
              <a
                href={`mailto:${member.email}`}
                onClick={(event) => event.stopPropagation()}
                className="mt-4 inline-flex text-sm font-semibold text-pm-light-text-2 no-underline transition-colors hover:text-pm-light-button hover:underline"
              >
                Hier erreichen Sie mich →
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
