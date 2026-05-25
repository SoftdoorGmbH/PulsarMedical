export type BlogCategory = "team" | "events" | "health" | "news" | "insights";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  readTimeMinutes: number;
  publishedAt: string;
  imageUrl?: string;
  featured?: boolean;
};

export type BlogCategoryMeta = {
  id: BlogCategory;
  label: string;
  getCount: () => number;
};

function countByCategory(category: BlogCategory): number {
  return BLOG_POSTS.filter((post) => post.category === category).length;
}

export const BLOG_CATEGORIES: BlogCategoryMeta[] = [
  { id: "team", label: "Team", getCount: () => countByCategory("team") },
  { id: "events", label: "Events", getCount: () => countByCategory("events") },
  { id: "health", label: "Gesundheit", getCount: () => countByCategory("health") },
  { id: "news", label: "News", getCount: () => countByCategory("news") },
  { id: "insights", label: "Einblicke", getCount: () => countByCategory("insights") },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "behind-the-scenes",
    slug: "behind-the-scenes",
    title: "Behind the Scenes 🎥",
    excerpt:
      "Damit unsere Videos am Ende so rund wirken, steckt im Hintergrund jede Menge Teamarbeit. Von den Aufnahmen bis zum finalen Schnitt. Es wird ausprobiert, gelacht und gefeilt, bis alles passt. Ein kleiner Blick hinter die Kulissen zeigt: Auch der Weg zum fertigen Ergebnis macht richtig Spaß.",
    category: "insights",
    readTimeMinutes: 1,
    publishedAt: "2026-03-15",
    featured: true,
  },
  {
    id: "save-the-date-impulse-austausch-perspektiven",
    slug: "save-the-date-impulse-austausch-perspektiven",
    title: "SAVE THE DATE: Impulse. Austausch. Perspektiven.",
    excerpt:
      "Ein Abend gestaltet von Sha La La & PULSAR Medical GmbH. Ein inspirierender Abend rund um Gesundheit, Stimme und Präsenz im Berufsalltag – mit zwei spannenden Impulsen und Raum für gute Gespräche.",
    category: "events",
    readTimeMinutes: 1,
    publishedAt: "2025-10-23",
  },
  {
    id: "psychische-belastung-am-arbeitsplatz-woran-du-sie-erkennst-und-was-dir-wirklich-helfen-kann",
    slug: "psychische-belastung-am-arbeitsplatz-woran-du-sie-erkennst-und-was-dir-wirklich-helfen-kann",
    title: "Psychische Belastung am Arbeitsplatz: Woran du sie erkennst – und was dir wirklich helfen kann",
    excerpt:
      "In einer Arbeitswelt, die zunehmend von hoher Taktung, ständiger Erreichbarkeit und steigenden Anforderungen geprägt ist, gewinnt das Thema psychische Gesundheit immer mehr an Bedeutung. Ein Ansatz, der sich dabei in Unternehmen etabliert, ist der sogenannte Mental Health Day – ein gezielter, bewusst genommener Tag zur Förderung des seelischen Wohlbefindens.",
    category: "health",
    readTimeMinutes: 1,
    publishedAt: "2026-02-20",
  },
  {
    id: "starke-ergaenzung-fuer-unser-team",
    slug: "starke-ergaenzung-fuer-unser-team",
    title: "Starke Ergänzung für unser Team!",
    excerpt:
      "Wir freuen uns sehr, Nadine als neue Beraterin bei uns begrüßen zu dürfen. Mit einem betriebswirtschaftlichen Hintergrund und einer fundierten Ausbildung als systemischer Coach bringt sie nicht nur fachliche Kompetenz, sondern auch ein feines Gespür für persönliche Entwicklungsprozesse mit.",
    category: "team",
    readTimeMinutes: 1,
    publishedAt: "2026-02-10",
  },
  {
    id: "gesundheitskompetenz-braucht-raeume-liva-ist-ab-sofort-live",
    slug: "gesundheitskompetenz-braucht-raeume-liva-ist-ab-sofort-live",
    title: "Gesundheitskompetenz braucht Räume – LIVA ist ab sofort live 🥳",
    excerpt:
      "Mit unserer neuen digitalen Plattform machen wir Gesundheitswissen für alle zugänglich – fundiert, verständlich, flexibel nutzbar.",
    category: "news",
    readTimeMinutes: 1,
    publishedAt: "2026-01-28",
  },
  {
    id: "neuzugang-bei-pulsar-dr-amelie-koch",
    slug: "neuzugang-bei-pulsar-dr-amelie-koch",
    title: "Neuzugang bei PULSAR: Dr. Amelie Koch!🌟",
    excerpt:
      "Wir freuen uns sehr, Amelie Koch als neue Projektleitung bei der Pulsar Medical GmbH willkommen zu heißen! 🎉",
    category: "team",
    readTimeMinutes: 1,
    publishedAt: "2026-01-15",
  },
  {
    id: "neuzugang-bei-pulsar-savas-karapinar",
    slug: "neuzugang-bei-pulsar-savas-karapinar",
    title: "Neuzugang bei PULSAR: Savas Karapinar🌟",
    excerpt:
      "Wir freuen uns, Savas in unserem Team willkommen zu heißen!",
    category: "team",
    readTimeMinutes: 1,
    publishedAt: "2026-01-08",
  },
  {
    id: "verstaerkung-bei-der-pulsar-willkommen-rhoda",
    slug: "verstaerkung-bei-der-pulsar-willkommen-rhoda",
    title: "Verstärkung bei der PULSAR, willkommen Rhoda!",
    excerpt:
      "Mit ihrer Leidenschaft für mentale Gesundheit und dem tiefen Verständnis dafür, wie eng unser inneres Wohlbefinden mit echter Lebensfreude verbunden ist, passt Rhoda perfekt zu unserer Vision bei PULSAR.",
    category: "team",
    readTimeMinutes: 1,
    publishedAt: "2025-12-18",
  },
  {
    id: "psychische-belastung-im-alltag",
    slug: "psychische-belastung-im-alltag",
    title: "Psychische Belastung im Alltag",
    excerpt:
      "Ständig erschöpft, innerlich unruhig oder überfordert? Psychische Belastung begegnet uns oft im Alltag – manchmal leise, manchmal laut. In diesem Artikel findest du sieben konkrete und alltagstaugliche Tipps, wie du wieder mehr Leichtigkeit, Ruhe und Stabilität in dein Leben bringst.",
    category: "health",
    readTimeMinutes: 1,
    publishedAt: "2025-12-05",
  },
  {
    id: "willkommen-im-team-sam-horrocks",
    slug: "willkommen-im-team-sam-horrocks",
    title: "Willkommen im Team, Sam Horrocks!🙌",
    excerpt:
      "Wir freuen uns, Sam in unserem Team bei Pulsar Medical GmbH begrüßen zu dürfen. Mit seiner Erfahrung in der Personalberatung und seinem Engagement für Kommunikation wird er uns dabei unterstützen, Menschen in schwierigen gesundheitlichen Situationen zu helfen.",
    category: "team",
    readTimeMinutes: 1,
    publishedAt: "2025-11-22",
  },
  {
    id: "wir-begruessen-unser-neues-teammitglied-evelyn-krupinska",
    slug: "wir-begruessen-unser-neues-teammitglied-evelyn-krupinska",
    title: "Wir begrüßen unser neues Teammitglied!",
    excerpt:
      "Herzlich willkommen, Evelyn Krupinska! Evelyn bringt als Werkstudentin frische Perspektiven und Energie mit, die unsere Arbeit bereichern werden.",
    category: "team",
    readTimeMinutes: 1,
    publishedAt: "2025-11-10",
  },
  {
    id: "gemeinsam-fuer-mehr-balance-mehr-selbstfuersorge-und-mehr-produktivitaet",
    slug: "gemeinsam-fuer-mehr-balance-mehr-selbstfuersorge-und-mehr-produktivitaet",
    title: "Gemeinsam für mehr Balance, mehr Selbstfürsorge und mehr Produktivität",
    excerpt:
      "Letzte Woche hatten wir das Vergnügen, einen maßgeschneiderten Workshop zum Thema \"Beruf & Balance\" für das engagierte Team von @cadbauteam durchzuführen. In einer intensiven 4-stündigen Sitzung haben wir gemeinsam folgende Themen erarbeitet: Stressdefinition und individuelle Stressoren, Persönliche Ressourcen und Bewältigungsstrategien, Achtsamkeitsübungen für den Arbeitsalltag, Praktische Tipps zu Arbeitszeitgestaltung, Ernährung und Bewegung.",
    category: "events",
    readTimeMinutes: 1,
    publishedAt: "2025-10-30",
  },
  {
    id: "zu-gast-bei-butterfly-in-muenchen",
    slug: "zu-gast-bei-butterfly-in-muenchen",
    title: "Zu Gast bei „Butterfly“ in München",
    excerpt:
      "Eines unser laufenden Projekte ist das Projekt „Butterfly“ in München. Bei diesem Projekt steht die bedarfsorientierte Beratung erwerbsfähiger Menschen, welche sich im Leistungsbezug befinden, im Vordergrund. Durch eine umfängliche Betrachtung der gesundheitlichen, gesellschaftlichen, soziokulturellen und beruflichen Komponenten eines Einzelnen wird die Rückkehr in den Arbeitsmarkt fokussiert und unterstützt.",
    category: "news",
    readTimeMinutes: 1,
    publishedAt: "2025-10-08",
  },
  {
    id: "gemeinsam-in-das-neue-jahr",
    slug: "gemeinsam-in-das-neue-jahr",
    title: "Gemeinsam in das neue Jahr",
    excerpt:
      "Trotz unserer überwiegend remote arbeitenden Struktur haben wir das neue Jahr mit einem analogen Meeting begonnen. Es war großartig, dass sich einige unserer Kolleginnen persönlich treffen konnten, um gemeinsam zu arbeiten und auch die Team-Bindung zu verstärken.",
    category: "insights",
    readTimeMinutes: 1,
    publishedAt: "2025-01-10",
  },
  {
    id: "wenn-strategie-auf-kreativitaet-trifft",
    slug: "wenn-strategie-auf-kreativitaet-trifft",
    title: "Wenn Strategie auf Kreativität trifft",
    excerpt:
      "Letzte Woche stand ganz unter dem Motto „Teampower in Wuppertal“! Dabei sind wir im Rahmen unseres dreitätigen Offsite-Events im codeks – live und in Farbe - zusammengekommen, um zu reflektieren, neue Weichen für das Jahr 2025 zu stellen und abseits der Arbeitsaufgaben gemeinsam kreativ zu werden!",
    category: "insights",
    readTimeMinutes: 1,
    publishedAt: "2025-01-20",
  },
  {
    id: "verstaerkung-im-team-pulsar-geraldine-brinkhoff",
    slug: "verstaerkung-im-team-pulsar-geraldine-brinkhoff",
    title: "Verstärkung im Team, PULSAR! 😊",
    excerpt:
      "Herzlich willkommen, Géraldine Brinkhoff! Wir wünschen dir einen guten Start und sind froh, dass du uns, insbesondere für unsere Zusammenarbeit mit dem Jobcenter Region Hannover, nun tatkräftig unterstützt!",
    category: "team",
    readTimeMinutes: 1,
    publishedAt: "2025-01-15",
  },
  {
    id: "consozial-du-warst-einen-besuch-wert",
    slug: "consozial-du-warst-einen-besuch-wert",
    title: "ConSozial – du warst einen Besuch wert",
    excerpt:
      "… wenn man es genau nimmt sogar die Teilnahme als Aussteller! Vom 16. bis 17. Oktober waren Isabelle Bartikowski, Emily Paul und Annika Küper auf der Messe in Nürnberg und konnten einige interessante Eindrücke gewinnen.",
    category: "events",
    readTimeMinutes: 1,
    publishedAt: "2024-10-17",
  },
  {
    id: "wir-wachsen-und-wachsen-und-wachsen-christina-schulcz",
    slug: "wir-wachsen-und-wachsen-und-wachsen-christina-schulcz",
    title: "Wir wachsen und wachsen und wachsen…",
    excerpt:
      "…gefühlt hört es gerade gar nicht auf! Wir möchten euch noch ein neues Teammitglied vorstellen: Christina Schulcz!",
    category: "team",
    readTimeMinutes: 1,
    publishedAt: "2024-10-05",
  },
  {
    id: "und-es-heisst-erneut-herzlich-willkommen-im-team-stefanie-haeger",
    slug: "und-es-heisst-erneut-herzlich-willkommen-im-team-stefanie-haeger",
    title: "Und es heißt erneut: Herzlich Willkommen im Team!",
    excerpt:
      "Wie angekündigt: Nach und nach werden euch die „Neuen“ vorgestellt. Stefanie ist seit April Teil unseres Teams und dadurch eigentlich gar nicht mehr so neu – aber ihr kennt sie nun mal noch nicht und das hat sich zu ändern! Als Psychologin arbeitet sie in der Beratung mit und trägt zur gesundheitlichen Förderung insbesondere auf mentaler Ebene bei.",
    category: "team",
    readTimeMinutes: 1,
    publishedAt: "2024-09-20",
  },
  {
    id: "herzlich-willkommen-im-team-emily-paul",
    slug: "herzlich-willkommen-im-team-emily-paul",
    title: "Herzlich willkommen im Team",
    excerpt:
      "In den nächsten Wochen werden wir euch unsere neuen Gesichter bei der PULSAR Medical vorstellen! Seid also gespannt...",
    category: "team",
    readTimeMinutes: 1,
    publishedAt: "2024-09-10",
  },
  {
    id: "pulsar-medical-bedeutet-wir-gefuehl",
    slug: "pulsar-medical-bedeutet-wir-gefuehl",
    title: "PULSAR Medical bedeutet WIR-Gefühl 🙌",
    excerpt:
      "Durch die Remote-Arbeit haben wir keine gemeinsamen Pausen oder das tägliche Pläuschen auf dem Flur. Aber wir haben Offsite-Events und die dann mit gehörig viel Vorfreude, Elan und Effizienz.",
    category: "insights",
    readTimeMinutes: 1,
    publishedAt: "2024-08-28",
  },
  {
    id: "willkommen-bei-pulsar-medical-annika-kueper",
    slug: "willkommen-bei-pulsar-medical-annika-kueper",
    title: "Willkommen bei PULSAR Medical",
    excerpt:
      "Wir freuen uns sehr, dass Annika Küper seit Januar bei uns ist! Annika Küper ist Gesundheitspsychologin und Ernährungsberaterin. Sie unterstützt uns mit ihrem Wissen über Eignungsdiagnostik und Prävention vorwiegend an unserem Standort in Hamm (Westfalen).",
    category: "team",
    readTimeMinutes: 1,
    publishedAt: "2024-01-15",
  },
  {
    id: "happy-new-year-2024",
    slug: "happy-new-year-2024",
    title: "Happy New Year 2024",
    excerpt:
      "Das gesamte Team der Pulsar Medical GmbH wünscht all unseren Partner:innen und Kund:innen ein gesundes und erfolgreiches neues Jahr! Wir bedanken uns für die Zusammenarbeit und das Vertrauen. Lassen Sie uns gemeinsam auch im Jahr 2024 an unserer Vision „Gesundheit für ALLE“ arbeiten.",
    category: "news",
    readTimeMinutes: 1,
    publishedAt: "2024-01-01",
  },
  {
    id: "schlafhygiene-12-evidenzbasierte-tipps-fuer-ruhige-naechte",
    slug: "schlafhygiene-12-evidenzbasierte-tipps-fuer-ruhige-naechte",
    title: "Schlafhygiene: 12 evidenzbasierte Tipps für ruhige Nächte",
    excerpt:
      "Gesunder Schlaf ist kein Luxus, sondern eine physiologische Grundvoraussetzung für psychische Stabilität, Immunfunktion und kognitive Leistungsfähigkeit. Trotzdem schlafen laut Centers for Disease Control and Prevention jede dritte erwachsene Person weniger als die empfohlenen sieben Stunden pro Nacht. Mit den folgenden zwölf, wissenschaftlich fundierten Empfehlungen optimieren Sie Ihr Schlafumfeld und Ihre Gewohnheiten ganz ohne Medikamente und ohne komplexe Hilfsmittel.",
    category: "health",
    readTimeMinutes: 1,
    publishedAt: "2024-06-12",
  },
  {
    id: "psychische-belastungen-bei-der-arbeit-impulsvortrag-von-dr-med-barbara-heiden",
    slug: "psychische-belastungen-bei-der-arbeit-impulsvortrag-von-dr-med-barbara-heiden",
    title: "Psychische Belastungen bei der Arbeit – Impulsvortrag von Dr. med. Barbara Heiden",
    excerpt:
      "Auf der ConSozial Messe im Oktober hatten wir die grandiose Gelegenheit, einen spontanen 15-minütigen Impulsvortrag im Innovationspark zu halten.",
    category: "events",
    readTimeMinutes: 1,
    publishedAt: "2024-10-15",
  },
  {
    id: "psychische-gesundheit-ist-keine-privatsache-sie-geht-uns-alle-an",
    slug: "psychische-gesundheit-ist-keine-privatsache-sie-geht-uns-alle-an",
    title: "Psychische Gesundheit ist keine Privatsache – sie geht uns alle an",
    excerpt:
      "In der heutigen Zeit wird Angst nicht nur als persönliche Emotion betrachtet, sondern stellt eine zunehmende gesellschaftliche Herausforderung dar.",
    category: "health",
    readTimeMinutes: 1,
    publishedAt: "2024-05-20",
  },
  {
    id: "im-november-hatten-wir-die-grossartige-gelegenheit-unser-team-fuer-3-tage-offsite-in-fulda-zusammenzubringen",
    slug: "im-november-hatten-wir-die-grossartige-gelegenheit-unser-team-fuer-3-tage-offsite-in-fulda-zusammenzubringen",
    title: "Im November hatten wir die großartige Gelegenheit, unser Team für 3 Tage Offsite in Fulda zusammenzubringen",
    excerpt:
      "Gemeinsam haben wir uns mit spannenden Themen auseinandergesetzt, darunter der Rückblick auf unseren ersten OKR-Zyklus, ein anschließender Workshop mit Vanessa Sallanz zum OKR-Review und die gemeinsame Entwicklung unserer Key Results für den Zyklus 2.",
    category: "insights",
    readTimeMinutes: 1,
    publishedAt: "2024-11-18",
  },
  {
    id: "insomnie-vs-schlafapnoe-symptome-rechtzeitig-erkennen",
    slug: "insomnie-vs-schlafapnoe-symptome-rechtzeitig-erkennen",
    title: "Insomnie vs. Schlafapnoe: Symptome rechtzeitig erkennen",
    excerpt:
      "Nicht jede schlaflose Nacht hat dieselbe Ursache. Während Insomnie vor allem das Ein‐ und Durchschlafen erschwert, unterbricht Schlafapnoe die Nachtruhe durch Atemaussetzer. Eine genaue Selbstbeobachtung ist entscheidend, um frühzeitig eine Behandlung einzuleiten.",
    category: "health",
    readTimeMinutes: 1,
    publishedAt: "2024-04-15",
  },
  {
    id: "power-nap-im-buero-so-tanken-sie-energie-in-20-minuten",
    slug: "power-nap-im-buero-so-tanken-sie-energie-in-20-minuten",
    title: "Power‑Nap im Büro: So tanken Sie Energie in 20 Minuten",
    excerpt:
      "Das berüchtigte Nachmittagstief kennt wohl jeder – Konzentration und Energie lassen nach, und selbst einfachste Aufgaben fallen schwer. Ein kurzer, geplanter Power-Nap im Büro kann hier Wunder wirken: Er hebt die Stimmung, steigert die Leistungsfähigkeit und stört dabei nicht den nächtlichen Schlaf.",
    category: "health",
    readTimeMinutes: 1,
    publishedAt: "2024-03-28",
  },
  {
    id: "pulsar-medical-als-ausstellerin-auf-der-consozial-in-nuernberg",
    slug: "pulsar-medical-als-ausstellerin-auf-der-consozial-in-nuernberg",
    title: "PULSAR Medical als Ausstellerin auf der ConSozial in Nürnberg",
    excerpt:
      "Letzte Woche war es endlich so weit: PULSAR Medical goes ConSozial. Wir waren erstmalig auf der Messe vertreten und hatten einen kleinen, aber feinen Stand im Innovationspark.",
    category: "events",
    readTimeMinutes: 1,
    publishedAt: "2024-10-10",
  },
  {
    id: "frauenmesse-sprungbrett-pulsar-medical-als-ausstellerin-vor-ort",
    slug: "frauenmesse-sprungbrett-pulsar-medical-als-ausstellerin-vor-ort",
    title: "Frauenmesse „Sprungbrett“ – PULSAR Medical als Ausstellerin vor Ort",
    excerpt:
      "Wir wissen, wie schwierig Arbeit ohne Gesundheit ist, aber genauso, dass Gesundheit ohne Arbeit schwierig ist. Aus diesem Grund haben wir zusammen mit der Softdoor GmbH einen gemeinsamen Stand auf der Messe betreut und standen allen Teilnehmerinnen für Fragen rund um das Themenfeld Arbeit und Gesundheit zur Verfügung.",
    category: "events",
    readTimeMinutes: 1,
    publishedAt: "2023-09-29",
  },
  {
    id: "warum-longevity-mehr-ist-als-nur-ein-langes-leben",
    slug: "warum-longevity-mehr-ist-als-nur-ein-langes-leben",
    title: "Warum Longevity mehr ist als nur ein langes Leben",
    excerpt:
      "Longevity bedeutet mehr als bloße Lebensverlängerung – es geht um vitales Altern, Prävention und die bewusste Gestaltung eines gesunden Lebensstils über Jahrzehnte hinweg.",
    category: "health",
    readTimeMinutes: 1,
    publishedAt: "2023-09-15",
  },
  {
    id: "collaboration-conference-entscheidungen-treffen-schneller-besser-wirksamer",
    slug: "collaboration-conference-entscheidungen-treffen-schneller-besser-wirksamer",
    title: "Collaboration Conference – Entscheidungen treffen. Schneller, besser, wirksamer!",
    excerpt:
      "Am 28.09.2023 fand die 3. Collaboration Conference in Heidelberg unter dem Motto „Entscheidungen treffen. Schneller, besser, wirksamer!“ statt. Ein kleiner Teil unseres Teams war zu Gast und lauschte gespannt den unterschiedlichen Speaker:innen.",
    category: "events",
    readTimeMinutes: 1,
    publishedAt: "2023-09-28",
  },
  {
    id: "gesunde-psyche-gesundes-altern-warum-mentale-balance-fuer-ein-langes-leben-entscheidend-ist",
    slug: "gesunde-psyche-gesundes-altern-warum-mentale-balance-fuer-ein-langes-leben-entscheidend-ist",
    title: "Gesunde Psyche, gesundes Altern: Warum mentale Balance für ein langes Leben entscheidend ist",
    excerpt:
      "Mentale Balance ist ein zentraler Baustein für gesundes Altern. Wer psychisch stabil bleibt, stärkt nicht nur sein Wohlbefinden, sondern auch seine körperliche Gesundheit und Lebensqualität im Alter.",
    category: "health",
    readTimeMinutes: 1,
    publishedAt: "2023-09-10",
  },
  {
    id: "pulsar-medical-gmbh-seit-juni-mit-neuem-standort-in-hamm",
    slug: "pulsar-medical-gmbh-seit-juni-mit-neuem-standort-in-hamm",
    title: "Pulsar Medical GmbH seit Juni mit neuem Standort in Hamm",
    excerpt:
      "In unserem Bestreben Menschen in schwierigen Lebenssituationen zu unterstützen und ihre Gesundheit zu fördern, freuen wir uns Ihnen aufregende Neuigkeiten zu präsentieren: Die Eröffnung unseres neuen Standorts in Hamm (Westfalen).",
    category: "news",
    readTimeMinutes: 1,
    publishedAt: "2023-06-01",
  },
  {
    id: "achtsam-aelter-werden-wie-mindfulness-dich-koerperlich-und-geistig-jung-haelt",
    slug: "achtsam-aelter-werden-wie-mindfulness-dich-koerperlich-und-geistig-jung-haelt",
    title: "Achtsam älter werden: Wie Mindfulness dich körperlich und geistig jung hält",
    excerpt:
      "Achtsamkeit kann den Alterungsprozess positiv beeinflussen – sie reduziert Stress, fördert emotionale Stabilität und unterstützt körperliche sowie geistige Fitness über das gesamte Leben hinweg.",
    category: "health",
    readTimeMinutes: 1,
    publishedAt: "2023-08-22",
  },
  {
    id: "welcome-to-the-pulsar-medical-team-isabelle-bartikowski",
    slug: "welcome-to-the-pulsar-medical-team-isabelle-bartikowski",
    title: "Welcome to the PULSAR Medical Team",
    excerpt:
      "Wir freuen uns, Isabelle Maria Bartikowski in unserem Team begrüßen zu dürfen. Seit Anfang August unterstützt sie die Pulsar Medical GmbH als Assistenz in unterschiedlichen Bereichen. Unter anderem wird sie für die Koordination und Organisation von PULSAR-Aktivitäten in Hamm und Herford zuständig sein.",
    category: "team",
    readTimeMinutes: 1,
    publishedAt: "2023-08-01",
  },
  {
    id: "regeneration-statt-dauerstress-warum-pausen-der-schluessel-fuer-nachhaltige-vitalitaet-sind",
    slug: "regeneration-statt-dauerstress-warum-pausen-der-schluessel-fuer-nachhaltige-vitalitaet-sind",
    title: "Regeneration statt Dauerstress: Warum Pausen der Schlüssel für nachhaltige Vitalität sind",
    excerpt:
      "Regelmäßige Pausen sind kein Luxus, sondern essenziell für nachhaltige Vitalität. Wer bewusst regeneriert, beugt Erschöpfung vor und stärkt langfristig seine körperliche und psychische Gesundheit.",
    category: "health",
    readTimeMinutes: 1,
    publishedAt: "2023-08-05",
  },
  {
    id: "welcome-to-the-pulsar-medical-team-christoph-barsan",
    slug: "welcome-to-the-pulsar-medical-team-christoph-barsan",
    title: "Welcome to the PULSAR Medical Team",
    excerpt:
      "Wir freuen uns, Christoph Barsan in unserem Team begrüßen zu dürfen. Seit Anfang Juli unterstützt er die Pulsar Medical GmbH als Sportwissenschaftler & Psychologe in der Beratung unserer Kunden und bringt dabei seinen profunden beruflichen Erfahrungsschatz ein.",
    category: "team",
    readTimeMinutes: 1,
    publishedAt: "2023-07-01",
  },
  {
    id: "soziale-gesundheit-warum-gute-beziehungen-deine-lebenszeit-verlaengern-koennen",
    slug: "soziale-gesundheit-warum-gute-beziehungen-deine-lebenszeit-verlaengern-koennen",
    title: "Soziale Gesundheit: Warum gute Beziehungen deine Lebenszeit verlängern können",
    excerpt:
      "Soziale Verbindungen sind ein entscheidender Faktor für Gesundheit und Langlebigkeit. Gute Beziehungen stärken das Immunsystem, reduzieren Stress und tragen zu einem längeren, erfüllteren Leben bei.",
    category: "health",
    readTimeMinutes: 1,
    publishedAt: "2023-07-18",
  },
  {
    id: "3-jahre-pulsar-medical-gmbh-das-muss-gefeiert-werden",
    slug: "3-jahre-pulsar-medical-gmbh-das-muss-gefeiert-werden",
    title: "3 Jahre Pulsar Medical GmbH– das muss gefeiert werden!",
    excerpt:
      "Wir haben uns am 26.05.2023 in Mannheim nicht nur für einen Workshop getroffen, sondern hatten auch einen großartigen Anlass, gemeinsam anzustoßen. 3 Jahre Pulsar Medical GmbH – was für ein Meilenstein.",
    category: "news",
    readTimeMinutes: 1,
    publishedAt: "2023-05-26",
  },
  {
    id: "mindfulness-am-arbeitsplatz-mit-achtsamkeit-zu-mehr-produktivitaet-und-weniger-stress",
    slug: "mindfulness-am-arbeitsplatz-mit-achtsamkeit-zu-mehr-produktivitaet-und-weniger-stress",
    title: "Mindfulness am Arbeitsplatz: Mit Achtsamkeit zu mehr Produktivität und weniger Stress",
    excerpt:
      "Achtsamkeit am Arbeitsplatz hilft, Stress abzubauen und die Konzentration zu steigern. Mit einfachen Übungen lassen sich Produktivität und Wohlbefinden im Berufsalltag nachhaltig verbessern.",
    category: "health",
    readTimeMinutes: 1,
    publishedAt: "2023-05-18",
  },
  {
    id: "fuenf-ressourcen-zur-staerkung-der-psychischen-gesundheit-von-beschaeftigten",
    slug: "fuenf-ressourcen-zur-staerkung-der-psychischen-gesundheit-von-beschaeftigten",
    title: "Fünf Ressourcen zur Stärkung der psychischen Gesundheit von Beschäftigten.",
    excerpt:
      "In einem Gastbeitrag auf FOCUS online beschreibt unsere Vorständin Sabrina Zolg fünf Ressourcen zur Stärkung der psychischen Gesundheit von Beschäftigten und macht deutlich, dass die Verantwortung für psychische Belastung am Arbeitsplatz nicht auf den einzelnen Beschäftigten übertragen werden darf.",
    category: "insights",
    readTimeMinutes: 1,
    publishedAt: "2023-05-15",
  },
  {
    id: "mental-aktiv-bleiben-wie-du-dein-gehirn-fit-haeltst-und-warum-das-lebensverlaengernd-wirkt",
    slug: "mental-aktiv-bleiben-wie-du-dein-gehirn-fit-haeltst-und-warum-das-lebensverlaengernd-wirkt",
    title: "Mental aktiv bleiben: Wie du dein Gehirn fit hältst – und warum das lebensverlängernd wirkt",
    excerpt:
      "Geistige Aktivität hält das Gehirn fit und kann die Lebensqualität im Alter deutlich verbessern. Regelmäßiges Lernen, soziale Interaktion und kognitive Herausforderungen wirken präventiv gegen geistigen Abbau.",
    category: "health",
    readTimeMinutes: 1,
    publishedAt: "2023-05-08",
  },
  {
    id: "ein-herzliches-moin-aus-hamburg-pulsar-medical-zu-gast-beim-omr-festival",
    slug: "ein-herzliches-moin-aus-hamburg-pulsar-medical-zu-gast-beim-omr-festival",
    title: "Ein herzliches MOIN aus Hamburg! PULSAR Medical zu Gast beim OMR-Festival.",
    excerpt:
      "Vom 09.-10.05.2023 waren wir zu Gast beim OMR-Festival in Hamburg. Diejenigen, die es noch nicht kennen: Die OMR ist die größte Wissens- und Inspirationsplattform für die Digital- und Marketingszene in Europa.",
    category: "events",
    readTimeMinutes: 1,
    publishedAt: "2023-05-10",
  },
  {
    id: "resilienz-im-beruf-aufbauen-so-staerkst-du-deine-psychische-widerstandskraft-nachhaltig",
    slug: "resilienz-im-beruf-aufbauen-so-staerkst-du-deine-psychische-widerstandskraft-nachhaltig",
    title: "Resilienz im Beruf aufbauen: So stärkst du deine psychische Widerstandskraft nachhaltig",
    excerpt:
      "Resilienz lässt sich trainieren – mit gezielten Strategien stärken Sie Ihre psychische Widerstandskraft und meistern berufliche Herausforderungen nachhaltig und selbstbewusst.",
    category: "health",
    readTimeMinutes: 1,
    publishedAt: "2023-04-25",
  },
  {
    id: "neue-formen-in-der-gutachterlichen-arbeit-telemedizin-in-der-begutachtung",
    slug: "neue-formen-in-der-gutachterlichen-arbeit-telemedizin-in-der-begutachtung",
    title: "Neue Formen in der gutachterlichen Arbeit – Telemedizin in der Begutachtung",
    excerpt:
      "Es gibt großartige Neuigkeiten: Am 03.05.2023 wurde ein toller Beitrag unserer Vorständin Sabrina Zolg in Zusammenarbeit mit Prof. Dr. Andreas Weber und weiteren Kolleg:innen unseres Netzwerks veröffentlicht!",
    category: "news",
    readTimeMinutes: 1,
    publishedAt: "2023-05-03",
  },
  {
    id: "work-life-balance-im-digitalen-zeitalter-effektive-wege-zur-klaren-trennung-von-beruf-und-privatleben",
    slug: "work-life-balance-im-digitalen-zeitalter-effektive-wege-zur-klaren-trennung-von-beruf-und-privatleben",
    title: "Work-Life-Balance im digitalen Zeitalter: Effektive Wege zur klaren Trennung von Beruf und Privatleben",
    excerpt:
      "Im digitalen Zeitalter verschwimmen Berufs- und Privatleben leicht. Klare Grenzen, bewusste Routinen und digitale Auszeiten helfen, eine gesunde Work-Life-Balance zu bewahren.",
    category: "health",
    readTimeMinutes: 1,
    publishedAt: "2023-04-10",
  },
  {
    id: "kongress-armut-und-gesundheit-2023-wir-waren-dabei",
    slug: "kongress-armut-und-gesundheit-2023-wir-waren-dabei",
    title: "Kongress Armut und Gesundheit 2023 – wir waren dabei!",
    excerpt:
      "Am 21. und 22. März besuchte unser PULSAR Medical Team den Kongress Armut und Gesundheit 2023 in Berlin. Eröffnet wurde die Veranstaltung durch Bundespräsident Frank-Walter Steinmeier und stand unter dem Motto: „Gemeinsam Wandel gestalten“.",
    category: "events",
    readTimeMinutes: 1,
    publishedAt: "2023-03-22",
  },
  {
    id: "offen-ueber-psychische-gesundheit-reden-warum-eine-transparente-unternehmenskultur-entscheidend-ist",
    slug: "offen-ueber-psychische-gesundheit-reden-warum-eine-transparente-unternehmenskultur-entscheidend-ist",
    title: "Offen über psychische Gesundheit reden: Warum eine transparente Unternehmenskultur entscheidend ist",
    excerpt:
      "Eine offene Unternehmenskultur schafft Raum für ehrliche Gespräche über psychische Gesundheit – und ist damit ein entscheidender Faktor für das Wohlbefinden aller Beschäftigten.",
    category: "health",
    readTimeMinutes: 1,
    publishedAt: "2023-03-10",
  },
  {
    id: "welcome-to-the-pulsar-medical-team-barbara-heiden",
    slug: "welcome-to-the-pulsar-medical-team-barbara-heiden",
    title: "Welcome to the PULSAR Medical Team",
    excerpt:
      "Wir freuen uns, Dr. Barbara Heiden in unserem Team begrüßen zu dürfen. Seit Anfang Februar unterstützt sie die Pulsar Medical GmbH als Medizinerin in der Beratung unserer Kunden – konzeptionell ebenso wie praktisch.",
    category: "team",
    readTimeMinutes: 1,
    publishedAt: "2023-02-01",
  },
  {
    id: "mental-health-days-warum-regelmaessige-auszeiten-deine-psychische-gesundheit-staerken",
    slug: "mental-health-days-warum-regelmaessige-auszeiten-deine-psychische-gesundheit-staerken",
    title: "Mental Health Days: Warum regelmäßige Auszeiten deine psychische Gesundheit stärken",
    excerpt:
      "Mental Health Days bieten gezielte Auszeiten zur Stärkung der psychischen Gesundheit – ein wichtiger Baustein für nachhaltiges Wohlbefinden im Arbeitsalltag.",
    category: "health",
    readTimeMinutes: 1,
    publishedAt: "2023-02-15",
  },
  {
    id: "unser-newsletter",
    slug: "unser-newsletter",
    title: "Unser Newsletter",
    excerpt:
      "Hier finden Sie unseren ersten Newsletter mit vielen spannenden Beiträgen und Informationen rund um die PulsarMedical.",
    category: "news",
    readTimeMinutes: 1,
    publishedAt: "2022-01-15",
  },
  {
    id: "burnout-erkennen-und-vorbeugen",
    slug: "burnout-erkennen-und-vorbeugen",
    title: "Burnout erkennen und vorbeugen",
    excerpt:
      "Burnout beschreibt einen Zustand emotionaler, mentaler und körperlicher Erschöpfung, der durch anhaltenden Stress entsteht.",
    category: "health",
    readTimeMinutes: 1,
    publishedAt: "2022-06-20",
  },
  {
    id: "rehapro-projekt-in-wuppertal-gestartet-bergauf-gesundheitsmanagement-fuer-frauen",
    slug: "rehapro-projekt-in-wuppertal-gestartet-bergauf-gesundheitsmanagement-fuer-frauen",
    title: "Rehapro-Projekt in Wuppertal gestartet – bergauf. Gesundheitsmanagement für Frauen",
    excerpt:
      "Das neue Projekt bergauf ist im Rahmen des Bundesprogramms „Innovative Wege zur Teilhabe am Arbeitsleben – rehapro“ nach § 11 des Neunten Buches Sozialgesetzbuch (SGB) am 01.07.2022 in Wuppertal gestartet.",
    category: "news",
    readTimeMinutes: 1,
    publishedAt: "2022-07-01",
  },
  {
    id: "wir-begruessen-neu-bei-uns",
    slug: "wir-begruessen-neu-bei-uns",
    title: "Wir begrüßen neu bei uns …",
    excerpt:
      "Wir freuen uns, Diana Zybell und Nicolas Glänzer in unserem Team begrüßen zu dürfen.",
    category: "team",
    readTimeMinutes: 1,
    publishedAt: "2022-07-15",
  },
];

export function getFeaturedPost(): BlogPost {
  return BLOG_POSTS[0];
}

export function getPostsByCategory(category: BlogCategory | "all"): BlogPost[] {
  if (category === "all") {
    return BLOG_POSTS;
  }

  return BLOG_POSTS.filter((post) => post.category === category);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

