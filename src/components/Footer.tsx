import { Link, NavLink } from "react-router-dom";

const mainNav = [
  { to: "/", label: "Home" },
  { to: "/jobcenter", label: "Für Jobcenter" },
  { to: "/berufsgenossenschaften", label: "Für Berufsgenossenschaften" },
  { to: "/rueckversicherer", label: "Für Rückversicherer" },
  { to: "/karriere", label: "Karriere" },
  { to: "/ueber-uns", label: "Über uns" },
  { to: "/kontakt", label: "Kontakt" },
  { to: "/blog", label: "Blog" },
] as const;

function footerLinkClass({ isActive }: { isActive: boolean }) {
  return [
    "block rounded-md py-1 text-sm no-underline transition-colors",
    isActive
      ? "font-medium text-pm-light-text-2"
      : "text-pm-light-text-1 hover:text-pm-light-text-2",
  ].join(" ");
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-pm-light-container-border bg-white text-pm-light-text-1">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-14 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Link
              to="/"
              className="inline-flex items-center gap-3 no-underline"
            >
              <img
                src="/Pulsar_Logo.png"
                alt="Pulsar Medical"
                width={140}
                height={48}
                className="h-9 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-pm-light-text-1">
              Wir verbinden Jobcenter, Arbeitgeber im Gesundheitswesen und
              Fachkräfte — für zuverlässige Besetzung und starke Versorgung.
            </p>
          </div>

          <nav
            className="sm:col-span-1 lg:col-span-4"
            aria-label="Fußzeilen-Navigation"
          >
            <h2 className="text-xs font-semibold uppercase tracking-wider text-pm-light-headline">
              Seiten
            </h2>
            <ul className="mt-4 grid gap-1 sm:grid-cols-2 sm:gap-x-6">
              {mainNav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={footerLinkClass}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-pm-light-headline">
              Kontakt
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-pm-light-text-1">
              Haben Sie Fragen zur Zusammenarbeit? Wir freuen uns auf Ihre
              Nachricht.
            </p>
            <Link
              to="/kontakt"
              className="mt-4 inline-flex text-sm font-semibold text-pm-light-text-2 no-underline transition-colors hover:text-pm-light-button hover:underline"
            >
              Zum Kontakt →
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-pm-light-container-border pt-8 text-sm md:flex-row md:items-center md:justify-between">
          <p className="text-pm-light-text-1">
            © {year} Pulsar Medical. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              to="/impressum"
              className="text-pm-light-text-1 no-underline transition-colors hover:text-pm-light-text-2"
            >
              Impressum
            </Link>
            <Link
              to="/datenschutz"
              className="text-pm-light-text-1 no-underline transition-colors hover:text-pm-light-text-2"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
