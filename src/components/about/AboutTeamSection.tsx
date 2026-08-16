import { useState } from "react";
import { AboutTeamCard } from "@/components/about/AboutTeamCard";
import { TEAM_MEMBERS } from "@/content/teamMembers";

/** Team-Raster — Layout angelehnt an lattice.com/about „Our leadership“. */
export function AboutTeamSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24" aria-labelledby="about-team-heading">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-10">
        <h2
          id="about-team-heading"
          className="text-left md:text-center text-3xl font-semibold tracking-tight text-pm-light-headline md:text-4xl"
        >
          Unser Team
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-left md:text-center text-base leading-relaxed text-pm-light-text-1 md:text-lg">
          Ärztinnen, Psychologinnen, Beraterinnen und Assistenz — gemeinsam für
          ganzheitliche Gesundheitsberatung.
        </p>

        <ul className="mt-12 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {TEAM_MEMBERS.map((member) => (
            <li key={member.id}>
              <AboutTeamCard
                member={member}
                expanded={expandedId === member.id}
                onToggle={() =>
                  setExpandedId((current) =>
                    current === member.id ? null : member.id,
                  )
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
