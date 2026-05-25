import { HomeCta } from "@/components/home/HomeCta";
import { CompaniesHero } from "@/components/companies/CompaniesHero";
import { CompaniesServicesSection } from "@/components/companies/CompaniesServicesSection";

export function CompaniesPage() {
  return (
    <>
      <CompaniesHero />
      <CompaniesServicesSection />
      <HomeCta />
    </>
  );
}
