import { useEffect, useId, useRef, useState, type ComponentType } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { AUDIENCE_NAV_LINKS } from "@/content/audiencePages";
import { OFFER_NAV_ITEMS } from "@/content/offerPages";

type MegaItem = {
  to: string;
  label: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
};

type MegaColumn = {
  title: string;
  items: MegaItem[];
};

const MEGA_COLUMNS: MegaColumn[] = [
  {
    title: "Unser Angebot",
    items: OFFER_NAV_ITEMS,
  },
];

const NAV_LINKS = [
  ...AUDIENCE_NAV_LINKS,
  { to: "/ueber-uns", label: "Über uns" },
] as const;

function navItemClassName({ isActive }: { isActive: boolean }) {
  return [
    "relative px-4 py-2 text-sm text-pm-light-headline no-underline transition-[font-weight] duration-150 xl:px-5",
    isActive ? "font-semibold" : "font-medium hover:font-semibold",
  ].join(" ");
}

function MegaMenuLink({
  item,
  onNavigate,
}: {
  item: MegaItem;
  onNavigate: () => void;
}) {
  const Icon = item.icon;
  return (
    <NavLink
      to={item.to}
      className="relative -ml-5 flex items-center gap-3 rounded-2xl bg-transparent px-5 py-2.5 text-sm font-medium leading-snug text-pm-light-headline no-underline transition-colors duration-300 ease-linear hover:bg-pm-light-icon-bg/80"
      onClick={onNavigate}
    >
      <span className="flex size-6 shrink-0 items-center justify-center text-pm-light-text-2">
        <Icon className="size-5" strokeWidth={1.75} />
      </span>
      {item.label}
    </NavLink>
  );
}

export function Navbar() {
  const { pathname } = useLocation();
  const megaId = useId();
  const megaRegionId = `${megaId}-panel`;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileMegaOpen, setMobileMegaOpen] = useState(false);
  const megaWrapRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
    setMobileMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!megaOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMegaOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!megaWrapRef.current?.contains(event.target as Node)) {
        setMegaOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [megaOpen]);

  const closeAll = () => {
    setMegaOpen(false);
    setMobileOpen(false);
    setMobileMegaOpen(false);
  };

  return (
    <header
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-6 lg:pt-12"
      id="primary-nav"
    >
      <div className="pointer-events-auto relative z-50 w-full max-w-330">
        <div
          className={`flex items-center justify-between gap-3 overflow-visible rounded-full border py-2.5 pl-4 pr-3 shadow-[0_8px_32px_-12px_rgb(2_52_78_/0.25)] md:pl-6 md:pr-4 ${
            mobileOpen
              ? "border-white bg-white lg:border-white/50 lg:bg-white/60 lg:backdrop-blur-xl lg:supports-backdrop-filter:bg-white/55"
              : "border-white/50 bg-white/60 backdrop-blur-xl supports-backdrop-filter:bg-white/55"
          }`}
          role="presentation"
        >
          <div className="flex min-w-0 items-center gap-2 lg:gap-6 xl:gap-16">
            <NavLink
              to="/"
              className="flex shrink-0 items-center gap-2 no-underline"
              onClick={closeAll}
            >
              <img
                src="/Pulsar_Logo.png"
                alt="Pulsar Medical"
                width={120}
                height={48}
                className="h-8 w-auto md:h-9"
              />
            </NavLink>

            <nav className="hidden lg:flex" aria-label="Hauptnavigation">
              <ul className="flex list-none items-center gap-0.5 p-0">
                <li
                  ref={megaWrapRef}
                  className="group/loesungen m-0 list-none p-0"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <button
                    type="button"
                    className="relative flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-pm-light-headline transition-[font-weight] duration-150 group-hover/loesungen:font-semibold xl:px-5"
                    aria-expanded={megaOpen}
                    aria-controls={megaRegionId}
                    aria-haspopup="true"
                    onClick={() => setMegaOpen((open) => !open)}
                  >
                    Unsere Angebote
                    <ChevronDown
                      className={`size-4 shrink-0 opacity-70 transition-transform duration-300 group-hover/loesungen:rotate-180 group-focus-within/loesungen:rotate-180 ${megaOpen ? "rotate-180" : ""}`}
                      strokeWidth={2}
                      aria-hidden
                    />
                  </button>

                  <div
                    id={megaRegionId}
                    className={`absolute top-full left-0 z-30 w-full pt-3 before:absolute before:-top-3 before:left-0 before:h-3 before:w-full ${
                      megaOpen ? "block" : "hidden"
                    } group-hover/loesungen:block group-focus-within/loesungen:block`}
                    role="region"
                    aria-label="Lösungen"
                  >
                    <div className="rounded-3xl border border-white/60 bg-white px-8 py-8 shadow-[0_8px_32px_-12px_rgb(2_52_78_/0.28)] backdrop-blur-xl xl:px-12 xl:py-10">
                      <div className="flex flex-wrap gap-x-10 gap-y-8 xl:gap-x-16">
                        {MEGA_COLUMNS.map((column) => (
                          <div
                            key={column.title}
                            className="flex min-w-50 max-w-[20rem] flex-col gap-y-1 xl:min-w-71"
                          >
                            <p className="mb-1 font-display-serif text-2xl text-pm-light-headline">
                              {column.title}
                            </p>
                            <ul className="m-0 flex list-none flex-col p-0">
                              {column.items.map((item) => (
                                <li
                                  key={item.label}
                                  className="m-0 list-none p-0"
                                >
                                  <MegaMenuLink
                                    item={item}
                                    onNavigate={closeAll}
                                  />
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>

                {NAV_LINKS.map((item) => (
                  <li key={item.label} className="m-0 list-none p-0">
                    <NavLink to={item.to} className={navItemClassName}>
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <NavLink
              to="/ueber-uns"
              className="hidden rounded-full bg-pm-light-button px-4 py-2.5 text-sm font-semibold text-white shadow-sm no-underline transition-[transform,box-shadow] hover:brightness-110 sm:inline-flex"
            >
              Beratungstermin anfragen
            </NavLink>
            <button
              type="button"
              className="inline-flex flex-col gap-1.5 rounded-full p-2 lg:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-primary-nav"
              aria-label={
                mobileOpen ? "Navigation schließen" : "Navigation öffnen"
              }
              onClick={() => setMobileOpen((open) => !open)}
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

      {mobileOpen ? (
        <button
          type="button"
          className="pointer-events-auto fixed inset-0 z-30 bg-pm-light-headline/20 backdrop-blur-[2px] lg:hidden"
          aria-label="Menü schließen"
          onClick={() => setMobileOpen(false)}
        />
      ) : null}

      <div
        id="mobile-primary-nav"
        className={`pointer-events-auto fixed inset-x-0 top-32 z-40 mx-4 overflow-hidden rounded-3xl border border-pm-light-container-border bg-white shadow-xl transition-all duration-300 ease-out lg:hidden ${mobileOpen ? "visible max-h-[min(36rem,calc(100dvh-7rem))] opacity-100" : "invisible max-h-0 opacity-0"}`}
        aria-hidden={!mobileOpen}
      >
        <nav
          className="max-h-[min(36rem,calc(100dvh-7rem))] overflow-y-auto p-4"
          aria-label="Mobile Navigation"
        >
          <ul className="m-0 list-none space-y-1 p-0">
            <li className="m-0 list-none p-0">
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-base font-medium text-pm-light-headline"
                aria-expanded={mobileMegaOpen}
                onClick={() => setMobileMegaOpen((open) => !open)}
              >
                Lösungen
                <ChevronDown
                  className={`size-5 shrink-0 opacity-70 transition-transform duration-300 ${mobileMegaOpen ? "rotate-180" : ""}`}
                  strokeWidth={2}
                  aria-hidden
                />
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${mobileMegaOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden">
                  <div className="space-y-5 px-2 pb-3 pt-1">
                    {MEGA_COLUMNS.map((column) => (
                      <div key={column.title}>
                        <p className="px-2 font-display-serif text-lg text-pm-light-headline">
                          {column.title}
                        </p>
                        <ul className="mt-1 list-none p-0">
                          {column.items.map((item) => {
                            const Icon = item.icon;
                            return (
                              <li key={item.label} className="m-0 p-0">
                                <NavLink
                                  to={item.to}
                                  className="flex items-center gap-3 rounded-2xl px-2 py-2.5 text-sm font-medium leading-snug text-pm-light-headline no-underline hover:bg-pm-light-container"
                                  onClick={closeAll}
                                >
                                  <Icon
                                    className="size-5 shrink-0 text-pm-light-text-2"
                                    strokeWidth={1.75}
                                  />
                                  {item.label}
                                </NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            {NAV_LINKS.map((item) => (
              <li key={item.label} className="m-0 list-none p-0">
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      "block px-4 py-3 text-base text-pm-light-headline no-underline transition-[font-weight] duration-150",
                      isActive
                        ? "font-semibold"
                        : "font-medium hover:font-semibold",
                    ].join(" ")
                  }
                  onClick={closeAll}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3 border-t border-pm-light-container-border pt-4">
            <NavLink
              to="/ueber-uns"
              className="rounded-full bg-pm-light-button py-3 text-center text-sm font-semibold text-white no-underline hover:brightness-110"
              onClick={closeAll}
            >
              Beratungstermin anfragen
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
