const ABOUT_VALUES = [
  {
    title: "Wir hören genau hin",
    content:
      "Komplexe Situationen lassen sich nicht mit schnellen Antworten lösen. Wir nehmen uns die Zeit, Fragen richtig zu verstehen und die Perspektiven einzubeziehen, die für den jeweiligen Fall relevant sind.",
  },
  {
    title: "Wir verbinden Fachwissen mit Verständlichkeit",
    content:
      "Medizinische und psychologische Einschätzungen müssen fundiert sein. Sie müssen aber auch so aufbereitet werden, dass Auftraggeber damit arbeiten und Entscheidungen nachvollziehbar treffen können.",
  },
  {
    title: "Wir arbeiten respektvoll",
    content:
      "Eine Begutachtung ist für viele Menschen keine Alltagssituation. Wir begegnen jeder Person mit Respekt, Ruhe und professioneller Distanz – unabhängig davon, wie komplex oder belastend die persönliche Situation ist.",
  },
  {
    title: "Wir bleiben lösungsorientiert",
    content:
      "Nicht jeder Fall ist eindeutig. Wenn Informationen fehlen, Fragen offen sind oder mehrere Perspektiven zusammenkommen, suchen wir nach einem strukturierten Weg, der die weitere Planung möglich macht.",
  },
  {
    title: "Wir machen Zusammenarbeit einfach",
    content:
      "Hinter jedem Auftrag stehen viele Beteiligte, Termine und sensible Informationen. Wir wollen, dass Zusammenarbeit klar, verlässlich und unkompliziert bleibt – mit festen Ansprechpartner:innen und nachvollziehbaren Abläufen.",
  },
] as const;

export function AboutValuesSection() {
  return (
    <section
      className="bg-pm-light-bg py-16 md:py-24"
      aria-labelledby="about-values-heading"
    >
      <div className="mx-auto max-w-7xl  px-6 md:px-8 lg:px-10">
        <h2
          id="about-values-heading"
          className="text-3xl text-left md:text-center font-semibold leading-snug tracking-tight text-pm-light-headline md:text-4xl"
        >
          Was uns wichtig ist
        </h2>
        <ul className="mt-10 grid gap-6 md:mt-14 md:grid-cols-2 lg:gap-8">
          {ABOUT_VALUES.map((value) => (
            <li
              key={value.title}
              className="rounded-2xl border-4 border-pm-light-container-border bg-white p-6 shadow-[0_8px_24px_-12px_rgb(2_52_78_/0.12)] md:p-8 md:odd:last:col-span-2 md:odd:last:w-[calc((100%-1.5rem)/2)] md:odd:last:justify-self-center lg:odd:last:w-[calc((100%-2rem)/2)]"
            >
              <h3 className="text-xl font-semibold tracking-tight text-pm-light-headline">
                {value.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-pm-light-text-1">
                {value.content}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
