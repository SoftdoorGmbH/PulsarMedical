import { HomeCta } from "@/components/home/HomeCta";
import { JobCenterHero } from "@/components/jobcenter/JobCenterHero";
import { JobCenterLogoMarquee } from "@/components/jobcenter/JobCenterLogoMarquee";
import { JobCenterServicesSection } from "@/components/jobcenter/JobCenterServicesSection";

export function JobCenterPage() {
  return (
    <>
      <JobCenterHero />
      <JobCenterLogoMarquee />
      <JobCenterServicesSection />
      <HomeCta />
    </>
  );
}
