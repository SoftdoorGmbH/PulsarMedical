import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="flex min-h-dvh flex-col bg-white text-pm-light-text-1">
      <Navbar />
      <main className={isHome ? "flex-1" : "flex-1 pt-28 md:pt-32"}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
