import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { LOGO_FULL_URL, NAV_LINKS } from "@/lib/site-data";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 py-3 md:py-4 ${
        scrolled || open
          ? "bg-white/95 backdrop-blur-md py-1.5 md:py-2 shadow-soft border-b border-[var(--gold)]/30"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex items-center justify-between transition-all font-sans">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={LOGO_FULL_URL}
              alt="Pearlgifts"
              className={`object-contain py-1 transition-all duration-300 ${
                scrolled ? "h-[50px] md:h-[65px]" : "h-[65px] md:h-[85px]"
              }`}
            />
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="group relative text-sm text-[var(--ink)]/80 transition-colors hover:text-[var(--plum)]"
                activeProps={{ className: "text-[var(--plum-deep)] font-medium" }}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--gold)] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-xl bg-[var(--plum-deep)] hover:bg-[var(--plum)] px-6 py-2.5 text-sm font-medium text-white shadow-soft transition-all duration-300"
          >
            Inquire Now
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid h-10 w-10 place-items-center rounded-xl glass"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="mt-2 md:hidden rounded-2xl glass p-4 shadow-soft">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-[var(--ink)] hover:bg-[var(--plum)]/5"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--plum-deep)] hover:bg-[var(--plum)] px-5 py-3 text-sm font-semibold text-white transition-all"
              >
                Request Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
