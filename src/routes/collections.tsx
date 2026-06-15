import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Gift,
  Sparkles,
  Award,
  PartyPopper,
  Crown,
  Leaf,
} from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { IMG, WA_LINK } from "@/lib/site-data";
import awardsPlaquesVideo from "@/assets/awards-plaques.mp4";
import bambooGiftSetVideo from "@/assets/bamboo-gift-set.mp4";
import executiveHampersVideo from "@/assets/executive-hampers.mp4";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — Pearlgifts Atelier" },
      {
        name: "description",
        content:
          "Explore Pearlgifts collections: corporate gift boxes, bamboo gift sets, personalized keepsakes, awards, event souvenirs and more — handcrafted in Lagos.",
      },
      { property: "og:title", content: "Collections — Pearlgifts" },
      {
        property: "og:description",
        content: "Curated gift collections for corporate, personal and milestone moments.",
      },
      { property: "og:image", content: IMG.product2 },
      { name: "twitter:image", content: IMG.product2 },
    ],
  }),
  component: CollectionsPage,
});

const CATEGORIES = [
  {
    name: "Corporate Gifts",
    desc: "Polished branded gifts for clients, teams, launches and year-end appreciation.",
    img: IMG.product1,
    icon: Gift,
  },
  {
    name: "Bamboo Gift Sets",
    desc: "Elegant bamboo presentation boxes finished with thoughtful branded details.",
    img: IMG.product2,
    video: bambooGiftSetVideo,
    icon: Leaf,
  },
  {
    name: "Personalized Keepsakes",
    desc: "Custom engraved pieces and name-led gifts made for memorable moments.",
    img: IMG.product3,
    icon: Sparkles,
  },
  {
    name: "Awards & Plaques",
    desc: "Plaques, trophies and recognition pieces crafted for milestones and honorees.",
    img: IMG.product4,
    video: awardsPlaquesVideo,
    icon: Award,
  },
  {
    name: "Event Souvenirs",
    desc: "Useful keepsakes and branded take-homes for conferences, AGMs and celebrations.",
    img: IMG.product5,
    icon: PartyPopper,
  },
  {
    name: "Executive Gift Boxes",
    desc: "Premium boxed gifts curated for leaders, partners and VIP recipients.",
    img: IMG.product1,
    video: executiveHampersVideo,
    icon: Crown,
  },
];

function CollectionsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="The Collections"
        title={
          <>
            Curated gifting, shaped to{" "}
            <em className="not-italic text-gradient-gold">your occasion</em>
          </>
        }
        description="Every Pearlgifts collection is designed in-house and finished by hand. Choose a starting point — every piece can be tailored to your brand, recipient and budget."
      />

      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c, i) => (
              <article
                key={c.name}
                className="group relative overflow-hidden rounded-3xl bg-card shadow-soft transition hover:shadow-luxe"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  {"video" in c ? (
                    <video
                      src={c.video}
                      aria-label={c.name}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      onLoadedData={(event) => {
                        void event.currentTarget.play();
                      }}
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                  ) : (
                    <img
                      src={c.img}
                      alt={c.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--plum-deep)]/85 via-[var(--plum-deep)]/15 to-transparent" />
                  <div className="absolute top-5 left-5 grid h-11 w-11 place-items-center rounded-full glass">
                    <c.icon className="h-5 w-5 text-[var(--plum-deep)]" />
                  </div>
                  <span className="absolute top-5 right-5 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-widest text-[var(--plum-deep)]">
                    0{i + 1}
                  </span>
                  <div className="absolute inset-x-5 bottom-5 text-white">
                    <h2 className="font-display text-2xl">{c.name}</h2>
                    <p className="mt-1.5 text-sm text-white/90 line-clamp-2">{c.desc}</p>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-[var(--gold)] text-sm"
                    >
                      Enquire <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[var(--cream)]">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
                Featured Pieces
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-[var(--plum-deep)] text-balance">
                House selections from the atelier
              </h2>
            </div>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                aria-hidden="true"
                className="aspect-[4/5] rounded-3xl border border-dashed border-[var(--plum)]/15 bg-white/50"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-[var(--plum-deep)] text-balance">
            Don't see your occasion?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--ink)]">
            Every Pearlgifts piece can be reimagined. Share your details — we'll come back with a
            bespoke proposal within 72 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--plum-deep)] hover:bg-[var(--plum)] px-7 py-3.5 text-sm font-medium text-white shadow-soft transition-all duration-300"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
            <WhatsAppButton label="Message on WhatsApp" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
