import { Link } from "@tanstack/react-router";
import { LOGO_FULL_URL, NAV_LINKS } from "@/lib/site-data";
import { Clock, Send } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--plum-deep)] text-white/85">
      <div className="mx-auto max-w-7xl px-5 py-18 md:py-24">
        <div className="grid gap-14 md:gap-16 lg:grid-cols-12">
          {/* Logo and Intro Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center">
              <div className="bg-white rounded-full p-4.5 aspect-square h-[120px] w-[120px] flex items-center justify-center shadow-soft">
                <img
                  src={LOGO_FULL_URL}
                  alt="Pearlgifts"
                  className="h-full w-full object-contain transition-transform hover:scale-105 duration-300"
                />
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/85">
              A Lagos-based luxury gifting atelier crafting bespoke experiences for organizations
              that give with intention.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://instagram.com/pearlgifts"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-[var(--plum-deep)] text-white transition-all duration-300 transform hover:scale-105"
                aria-label="Instagram"
              >
                <svg
                  className="h-5 w-5 fill-none stroke-current"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/pearlgifts"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-[var(--plum-deep)] text-white transition-all duration-300 transform hover:scale-105"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/pearlgifts"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-[var(--plum-deep)] text-white transition-all duration-300 transform hover:scale-105"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/pearlgifts"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-[var(--plum-deep)] text-white transition-all duration-300 transform hover:scale-105"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Explore Navigate Column */}
          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)] font-medium">
              Explore
            </p>
            <ul className="mt-6 space-y-3.5 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="transition text-white/80 hover:text-white hover:underline decoration-[var(--gold)] decoration-2 underline-offset-4"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)] font-medium">
              Contact
            </p>
            <ul className="mt-6 space-y-4 text-sm text-white/80">
              <li>
                <a href="mailto:hello@pearlgifts.co" className="transition hover:text-white block">
                  hello@pearlgifts.co
                </a>
              </li>
              <li>
                <a href="tel:+2348170131438" className="transition hover:text-white block">
                  +234 817 013 1438
                </a>
              </li>
              <li className="text-white/70">12B Atelier Mews, Victoria Island, Lagos</li>
              <li className="pt-3 border-t border-white/10 mt-3 flex items-center gap-2.5 text-xs text-white/60">
                <Clock className="h-4 w-4 text-[var(--gold)]" />
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)] font-medium">
              Atelier Updates
            </p>
            <p className="mt-6 text-xs leading-relaxed text-white/75">
              Subscribe to receive curated guides on luxury corporate gifting, seasonal collection
              catalogs, and exclusive updates.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-5 flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-xl bg-white/5 px-4 py-2.5 text-xs text-white placeholder-white/40 border border-white/10 outline-none focus:border-[var(--gold)]/50 focus:bg-white/10 transition-colors"
                required
              />
              <button
                type="submit"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[var(--gold)] text-[var(--plum-deep)] hover:opacity-90 active:scale-95 transition-all cursor-pointer"
                title="Subscribe"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-8 text-xs text-white/70">
          <p>© {new Date().getFullYear()} Pearlgifts Atelier. All rights reserved.</p>
          <p>Crafted in Lagos · Delivered with care.</p>
        </div>
      </div>
      <div className="border-t border-white/10 bg-[var(--plum)]/50 py-6">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/70">
            <p>
              Premium gifting experiences | Handcrafted with intention | Delivered across Nigeria
            </p>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
            <Link to="/privacy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <span className="text-white/40">•</span>
            <Link to="/terms" className="transition hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
