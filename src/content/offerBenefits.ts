import type { LucideIcon } from "lucide-react";

export type OfferBenefitItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
};

export type OfferBenefitsContent = {
  headingId: string;
  title: string;
  subtitle?: string;
  cta?: {
    to: string;
    label: string;
  };
  items: readonly OfferBenefitItem[];
};
