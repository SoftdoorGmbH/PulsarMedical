export type AudienceWhyUsItem = {
  title: string;
  content: string;
};

export type AudienceWhyUsContent = {
  headingId: string;
  title: string;
  subtitle: string;
  ariaLabel: string;
  items: readonly AudienceWhyUsItem[];
  cta: {
    to: string;
    label: string;
  };
  imageSrc: string;
  imageAlt: string;
};

export const JOBCENTER_WHY_US: AudienceWhyUsContent = {
  headingId: "jobcenter-why-us-heading",
  title: "Warum Jobcenter PULSAR Medical wählen",
  subtitle:
    "Andere Anbieter liefern Gutachten — wir bieten Ihnen fachliche Tiefe, planbare Prozesse und Begleitung, die zu Ihrem Beratungsalltag passt.",
  ariaLabel: "Warum PULSAR Medical",
  items: [
    {
      title: "Fachliche Qualität mit klarem Mehrwert",
      content:
        "Jedes Ergebnis durchläuft eine interne Qualitätssicherung. Sie erhalten verständliche Gutachten, die Entscheidungen stützen — nicht nur medizinische Fachsprache ohne Handlungsempfehlung.",
    },
    {
      title: "Flexible Begutachtungsformen",
      content:
        "Persönlich, telemedizinisch oder nach Aktenlage — wir wählen die Form, die zum Fall, zum Zeitplan und zu den Rahmenbedingungen Ihres Jobcenters passt, ohne starre Einheitsprozesse.",
    },
    {
      title: "Persönliche Projektkoordination",
      content:
        "Feste Ansprechpersonen strukturieren Ablauf, Termine und Rückfragen. Ihr Team wird entlastet, statt zusätzliche Schnittstellen und Koordinationsaufwand zu schaffen.",
    },
  ],
  cta: {
    to: "/ueber-uns",
    label: "Beratungstermin anfragen",
  },
  imageSrc: "/pulsarmedical-jobcenter-2.jpg",
  imageAlt: "Medizinische Beratung und Begutachtung im Team",
};
