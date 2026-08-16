import { AudiencePageLayout } from "@/components/audience/AudiencePageLayout";
import {
  AUDIENCE_PAGES,
  type AudiencePageSlug,
} from "@/content/audiencePages";

type AudiencePageProps = {
  slug: AudiencePageSlug;
};

export function AudiencePage({ slug }: AudiencePageProps) {
  return <AudiencePageLayout content={AUDIENCE_PAGES[slug]} />;
}
