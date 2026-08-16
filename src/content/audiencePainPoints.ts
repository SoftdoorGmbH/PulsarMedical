export type AudiencePainPoint = {
  quote: string;
  title: string;
  description: string;
};

export type AudiencePainPointsContent = {
  headingId: string;
  title: string;
  subtitle: string;
  painLabel?: string;
  solutionEyebrow?: string;
  items: readonly AudiencePainPoint[];
};

export const DEFAULT_PAIN_LABEL = "Herausforderung";
export const DEFAULT_SOLUTION_EYEBROW = "So unterstützen wir";
