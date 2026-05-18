import { useState, type SVGProps } from "react";
import { NavLink } from "react-router-dom";

const nav = [
  { to: "/", label: "Home" },
  { to: "/jobcenter", label: "Für Jobcenter" },
  { to: "/unternehmen", label: "Für Unternehmen" },
  { to: "/karriere", label: "Karriere" },
  { to: "/ueber-uns", label: "Über uns" },
  { to: "/blog", label: "Blog" },
] as const;

function navItemClassName({ isActive }: { isActive: boolean }) {
  return [
    "relative rounded-2xl px-4 py-2 text-sm font-medium text-pm-light-headline no-underline transition-colors duration-300 xl:px-5",
    isActive
      ? "bg-pm-light-icon-bg/90 ring-1 ring-pm-light-container-border/80"
      : "hover:bg-pm-light-icon-bg/70",
  ].join(" ");
}

function ArrowUpRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden {...props}>
      <path
        d="M5 15L15 5M15 5H8M15 5V12"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-12"
      id="primary-nav"
    >
      <div className="pointer-events-auto w-full max-w-[1316px]">
        <div
          className="flex items-center justify-between gap-3 rounded-full border border-white/50 bg-white/60 py-2.5 pl-4 pr-3 shadow-[0_8px_32px_-12px_rgb(2_52_78_/0.25)] backdrop-blur-xl supports-backdrop-filter:bg-white/55 md:pl-6 md:pr-4"
          role="presentation"
        >
          <div className="z-20 shrink-0 lg:mr-6">
            <NavLink
              to="/"
              className="flex items-center gap-2 no-underline"
              onClick={() => setMobileOpen(false)}
            >
              <img
                src="/Pulsar_Logo.png"
                alt="Pulsar Medical"
                width={120}
                height={48}
                className="h-8 w-auto md:h-9"
              />
            </NavLink>
          </div>

          <nav
            className="absolute left-1/2 hidden w-[min(52rem,calc(100%-12rem))] -translate-x-1/2 justify-center lg:flex"
            aria-label="Hauptnavigation"
          >
            <ul className="flex list-none flex-wrap items-center justify-center gap-0.5 p-0">
              {nav.map((item) => (
                <li key={item.to} className="m-0 list-none p-0">
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={navItemClassName}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="z-20 flex items-center gap-2 sm:gap-3 md:gap-4">
            <NavLink
              to="/ueber-uns"
              className="hidden items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-pm-light-headline no-underline hover:bg-pm-light-icon-bg/60 lg:inline-flex"
            >
              Kontakt
              <ArrowUpRightIcon className="size-4 shrink-0 opacity-80" />
            </NavLink>
            <NavLink
              to="/unternehmen"
              className="hidden rounded-full bg-pm-light-button px-4 py-2.5 text-sm font-semibold text-white shadow-sm no-underline transition-[transform,box-shadow] hover:brightness-110 sm:inline-flex"
            >
              Beratung anfragen
            </NavLink>
            <button
              type="button"
              className="inline-flex flex-col gap-1.5 rounded-full p-2 lg:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-primary-nav"
              aria-label={
                mobileOpen ? "Navigation schließen" : "Navigation öffnen"
              }
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span
                className={`block h-0.5 w-6 rounded-full bg-pm-light-headline transition-transform duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 rounded-full bg-pm-light-headline transition-opacity duration-300 ${mobileOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`block h-0.5 w-6 rounded-full bg-pm-light-headline transition-transform duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-primary-nav"
        className={`pointer-events-auto fixed inset-x-0 top-22 z-40 mx-4 overflow-hidden rounded-3xl border border-pm-light-container-border bg-white/95 shadow-xl backdrop-blur-xl transition-all duration-300 ease-out lg:hidden ${mobileOpen ? "visible max-h-[min(28rem,calc(100dvh-7rem))] opacity-100" : "invisible max-h-0 opacity-0"}`}
        aria-hidden={!mobileOpen}
      >
        <nav className="max-h-[min(28rem,calc(100dvh-7rem))] overflow-y-auto p-4" aria-label="Mobile Navigation">
          <ul className="m-0 list-none space-y-1 p-0">
            {nav.map((item) => (
              <li key={item.to} className="m-0 list-none p-0">
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    [
                      "block rounded-2xl px-4 py-3 text-base font-medium no-underline",
                      isActive
                        ? "bg-pm-light-icon-bg text-pm-light-headline"
                        : "text-pm-light-headline hover:bg-pm-light-container",
                    ].join(" ")
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3 border-t border-pm-light-container-border pt-4">
            <NavLink
              to="/ueber-uns"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-pm-light-container-border bg-white px-4 py-3 text-sm font-semibold text-pm-light-headline no-underline hover:bg-pm-light-container"
              onClick={() => setMobileOpen(false)}
            >
              Kontakt
              <ArrowUpRightIcon className="size-4" />
            </NavLink>
            <NavLink
              to="/unternehmen"
              className="rounded-full bg-pm-light-button py-3 text-center text-sm font-semibold text-white no-underline hover:brightness-110"
              onClick={() => setMobileOpen(false)}
            >
              Beratung anfragen
            </NavLink>
          </div>
        </nav>
      </div>

      {mobileOpen ? (
        <button
          type="button"
          className="pointer-events-auto fixed inset-0 z-30 bg-pm-light-headline/20 backdrop-blur-[2px] lg:hidden"
          aria-label="Menü schließen"
          onClick={() => setMobileOpen(false)}
        />
      ) : null}
    </header>
  );
}
