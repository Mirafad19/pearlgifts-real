import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { IMG, WA_LINK } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Pearlgifts" },
      {
        name: "description",
        content:
          "Reach Pearlgifts curators directly. Most briefs receive a thoughtful response within two working hours.",
      },
      { property: "og:title", content: "Contact — Pearlgifts" },
      {
        property: "og:description",
        content: "Start your gifting brief with a Pearlgifts curator.",
      },
      { property: "og:image", content: IMG.product5 },
      { name: "twitter:image", content: IMG.product5 },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Let's begin"
        title={
          <>
            Have a gifting moment in mind?{" "}
            <em className="not-italic text-gradient-gold">We'd love to design it.</em>
          </>
        }
        description="Reach our team directly. Most inquiries receive a thoughtful response within two working hours."
      />

      <section className="pb-14 md:pb-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-luxe bg-[var(--plum-deep)]">
            <div className="absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-[var(--gold)]/25 blur-3xl pointer-events-none" />

            <div className="grid gap-12 p-10 md:p-16 lg:grid-cols-[1fr_1.15fr] lg:items-center">
              <div className="text-white">
                <h2 className="font-display text-3xl md:text-4xl text-balance">Talk to our Team</h2>
                <p className="mt-5 max-w-lg text-white/90 leading-relaxed font-sans">
                  Whether you're planning a 25-piece executive set or a 5,000-piece year-end
                  programme, we'll come back with a thoughtful proposal — never a templated quote.
                </p>
                <div className="mt-10 space-y-4">
                  {[
                    { icon: Phone, label: "+234 817 013 1438", href: "tel:+2348170131438" },
                    {
                      icon: Mail,
                      label: "hello@pearlgifts.co",
                      href: "mailto:hello@pearlgifts.co",
                    },
                    { icon: MapPin, label: "12B Atelier Mews, Victoria Island, Lagos", href: "#" },
                  ].map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      className="flex items-center gap-4 text-white/85 hover:text-white transition-colors"
                    >
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10">
                        <c.icon className="h-5 w-5 text-[var(--gold)]" />
                      </span>
                      {c.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-luxe text-[var(--ink)]">
                <h3 className="font-display text-2xl text-[var(--plum-deep)]">Send an Inquiry</h3>
                <p className="mt-1 text-sm text-[var(--ink)]/75">
                  Or skip the form and message our team directly on WhatsApp.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.open(WA_LINK, "_blank");
                  }}
                  className="mt-6 space-y-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      required
                      placeholder="Full name"
                      className="rounded-xl border border-[var(--plum)]/15 bg-white px-5 py-3.5 text-sm text-[var(--ink)] placeholder:text-[var(--ink)]/45 outline-none focus:border-[var(--plum)] focus:ring-1 focus:ring-[var(--plum)]/20 transition-all font-sans"
                    />
                    <input
                      required
                      placeholder="Company"
                      className="rounded-xl border border-[var(--plum)]/15 bg-white px-5 py-3.5 text-sm text-[var(--ink)] placeholder:text-[var(--ink)]/45 outline-none focus:border-[var(--plum)] focus:ring-1 focus:ring-[var(--plum)]/20 transition-all font-sans"
                    />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    className="w-full rounded-xl border border-[var(--plum)]/15 bg-white px-5 py-3.5 text-sm text-[var(--ink)] placeholder:text-[var(--ink)]/45 outline-none focus:border-[var(--plum)] focus:ring-1 focus:ring-[var(--plum)]/20 transition-all font-sans"
                  />
                  <textarea
                    rows={4}
                    placeholder="Tell us about the occasion, quantities and timeline…"
                    className="w-full resize-none rounded-xl border border-[var(--plum)]/15 bg-white px-5 py-3.5 text-sm text-[var(--ink)] placeholder:text-[var(--ink)]/45 outline-none focus:border-[var(--plum)] focus:ring-1 focus:ring-[var(--plum)]/20 transition-all font-sans"
                  />
                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--plum-deep)] hover:bg-[var(--plum)] px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 cursor-pointer"
                    >
                      Send Message <ArrowRight className="h-4 w-4" />
                    </button>
                    <WhatsAppButton label="WhatsApp" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
