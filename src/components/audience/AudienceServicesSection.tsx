import { ContentImageRow } from "@/components/ContentImageRow";
import type { AudienceServiceBlock } from "@/content/audiencePages";

type AudienceServicesSectionProps = {
  blocks: readonly AudienceServiceBlock[];
  ariaLabel: string;
};

export function AudienceServicesSection({
  blocks,
  ariaLabel,
}: AudienceServicesSectionProps) {
  return (
    <section
      className="bg-pm-light-container py-16 md:py-24"
      aria-label={ariaLabel}
    >
      <div className="mx-auto max-w-6xl space-y-20 px-6 md:space-y-28 md:px-8 lg:px-10">
        {blocks.map((block) => (
          <ContentImageRow key={block.title} {...block} />
        ))}
      </div>
    </section>
  );
}
