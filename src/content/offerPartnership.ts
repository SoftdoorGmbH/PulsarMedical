import type { LucideIcon } from "lucide-react";

export type OfferPartnershipStep = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type OfferPartnershipContent = {
  headingId: string;
  title: string;
  subtitle: string;
  steps: readonly OfferPartnershipStep[];
};
