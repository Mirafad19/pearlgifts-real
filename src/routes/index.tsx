import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Leaf, Crown, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { StaggerTestimonials } from "@/components/site/StaggerTestimonials";
import { IMG, VIDEO } from "@/lib/site-data";
import awardsPlaquesVideo from "@/assets/awards-plaques.mp4";
import bambooGiftSetVideo from "@/assets/bamboo-gift-set.mp4";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pearlgifts — Luxury Corporate & Bespoke Gifting Atelier" },
      {
        name: "description",
        content:
          "Pearlgifts designs, crafts and delivers bespoke corporate gift boxes, bamboo gift sets and personalized keepsakes for organizations that give with intention.",
      },
      { property: "og:title", content: "Pearlgifts — Luxury Gifting Atelier" },
      {
        property: "og:description",
        content: "Bespoke corporate gifts and personalized keepsakes, handcrafted in Lagos.",
      },
      { property: "og:image", content: IMG.product1 },
      { name: "twitter:image", content: IMG.product1 },
    ],
  }),
  component: Home,
});

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-14 md:pt-36 md:pb-18">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[560px] w-[560px] rounded-full bg-[var(--plum)]/15 blur-3xl" />
        <div className="absolute top-40 -right-40 h-[520px] w-[520px] rounded-full bg-[var(--gold)]/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-xl border border-[var(--plum)]/15 bg-white/60 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-[var(--plum-deep)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />A Lagos luxury gifting
            atelier
          </span>
          <h1 className="mt-8 font-display text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.02] text-[var(--plum-deep)] text-balance">
            Thoughtfully <em className="not-italic text-gradient-gold">Crafted</em> Gifts
            <br className="hidden sm:block" /> For Every Occasion
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--ink)]">
            From boardroom milestones to founder appreciation sets — Pearlgifts designs, sources
            and hand-finishes bespoke gift experiences that carry the weight of your brand.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/collections"
              className="group inline-flex items-center gap-3 rounded-xl bg-[var(--plum-deep)] hover:bg-[var(--plum)] px-7 py-4 text-sm font-medium tracking-wide text-white shadow-soft transition-all duration-300"
            >
              Explore Collections
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-xl border-2 border-[var(--plum-deep)] hover:bg-[var(--plum-deep)] text-[var(--plum-deep)] hover:text-white px-7 py-4 text-sm font-semibold shadow-soft transition-all duration-300"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <dl className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-[var(--plum)]/10 pt-10">
            {[
              ["Custom", "Brand-led gifts"],
              ["Bulk", "Event-ready sets"],
              ["Lagos", "Nationwide delivery"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-display text-3xl text-[var(--plum-deep)]">{k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-[var(--ink)]/75">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-luxe">
            <img
              src={IMG.product1}
              alt="Signature Pearlgifts bamboo presentation set with gold engraved nameplate"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--plum-deep)]/35 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden w-44 overflow-hidden rounded-2xl shadow-soft md:block">
            <img
              src={IMG.product3}
              alt="Detail of engraved keepsake"
              className="h-44 w-full object-cover"
            />
          </div>
          <div className="absolute -right-4 -top-4 hidden w-36 overflow-hidden rounded-2xl shadow-soft md:block">
            <img
              src={IMG.product5}
              alt="Bespoke presentation detail"
              className="h-36 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandStrip() {
  const trustNotes = [
    "Corporate events",
    "Conference gifting",
    "VIP appreciation",
    "Custom branding",
  ];
  return (
    <section className="border-y border-[var(--plum)]/10 bg-white/60 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-[var(--ink)]/75">
          Built for thoughtful corporate and personal gifting
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustNotes.map((note) => (
            <div
              key={note}
              className="rounded-2xl border border-[var(--plum)]/10 bg-white/70 px-5 py-5 text-center text-xs uppercase tracking-[0.2em] text-[var(--plum-deep)] shadow-soft"
            >
              {note}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PREVIEW_COLLECTIONS = [
  {
    name: "Corporate Gifts",
    desc: "Branded gift boxes for teams, clients, events and executive appreciation.",
    img: IMG.product1,
    icon: Sparkles,
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
    icon: Crown,
  },
  {
    name: "Awards & Recognition",
    desc: "Plaques, trophies and recognition pieces crafted for milestones and honorees.",
    img: IMG.product4,
    video: awardsPlaquesVideo,
    icon: Award,
  },
];

function CollectionsPreview() {
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
              Our Collections
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-[var(--plum-deep)] text-balance">
              A gift for every chapter of your story
            </h2>
          </div>
          <Link
            to="/collections"
            className="inline-flex items-center gap-2 text-sm text-[var(--plum)] hover:text-[var(--plum-deep)]"
          >
            View all collections <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PREVIEW_COLLECTIONS.map((c, i) => (
            <Link to="/collections" key={c.name} className="group block">
              <article className="relative overflow-hidden rounded-3xl bg-card shadow-soft transition hover:shadow-luxe">
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
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                    />
                  ) : (
                    <img
                      src={c.img}
                      alt={c.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--plum-deep)]/85 via-[var(--plum-deep)]/15 to-transparent" />
                  <div className="absolute top-5 left-5 grid h-10 w-10 place-items-center rounded-full glass">
                    <c.icon className="h-4 w-4 text-[var(--plum-deep)]" />
                  </div>
                  <span className="absolute top-5 right-5 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-widest text-[var(--plum-deep)]">
                    0{i + 1}
                  </span>
                  <div className="absolute inset-x-5 bottom-5 text-white">
                    <h3 className="font-display text-xl">{c.name}</h3>
                    <p className="mt-1.5 text-sm text-white/90 line-clamp-2">{c.desc}</p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function AtelierReel() {
  return (
    <section className="bg-[var(--cream)] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[9/12] overflow-hidden rounded-[2rem] shadow-luxe">
            <video
              src={VIDEO.reel1}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
              Inside the Atelier
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-[var(--plum-deep)] text-balance">
              Custom pieces shaped around the moment.
            </h2>
            <p className="mt-6 text-[var(--ink)] leading-relaxed">
              From branded pillows to presentation sets, Pearlgifts turns a brief into something
              personal, polished and usable. Every detail is aligned to the recipient, the occasion
              and the story your brand wants to tell.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                ["Custom", "Artwork"],
                ["Bulk", "Production"],
                ["Care", "Finishing"],
              ].map(([k, v]) => (
                <div key={v}>
                  <p className="font-display text-2xl text-[var(--plum-deep)]">{k}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-widest text-[var(--ink)]/70">
                    {v}
                  </p>
                </div>
              ))}
            </div>
            <Link
              to="/gallery"
              className="mt-10 inline-flex items-center gap-3 rounded-xl border border-[var(--plum)]/20 px-6 py-3.5 text-sm font-medium text-[var(--plum-deep)] transition hover:bg-white"
            >
              See the gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function RecognitionTeaser() {
  return (
    <section className="py-14 md:py-20 bg-gradient-to-b from-transparent via-[var(--cream)] to-[var(--cream)]">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
              Industry Recognition
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-[var(--plum-deep)] text-balance">
              Recognized for craft, consistency and care.
            </h2>
            <p className="mt-6 max-w-lg text-[var(--ink)] leading-relaxed">
              We're honored to be named among the continent's leading luxury gifting houses — a recognition we owe to every client, every artisan, and every team that has trusted us with their most considered moments.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                { label: "Awards Won", value: "12+" },
                { label: "Industry Recognition", value: "Continent-wide" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl text-[var(--plum-deep)]">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-[var(--ink)]/70">{stat.label}</p>
                </div>
              ))}
            </div>
            <Link
              to="/recognition"
              className="mt-10 inline-flex items-center gap-3 rounded-xl bg-[var(--plum-deep)] hover:bg-[var(--plum)] px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300"
            >
              View all awards <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] shadow-luxe aspect-[4/5]">
              <img
                src={IMG.award}
                alt="Pearlgifts industry award recognition"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--plum-deep)]/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCarousel() {
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
            What Our Clients Say
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-[var(--plum-deep)] text-balance">
            Trusted by teams across the continent.
          </h2>
        </div>
        <StaggerTestimonials />
      </div>
    </section>
  );
}

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <BrandStrip />
      <CollectionsPreview />
      <AtelierReel />
      <TestimonialCarousel />
      <RecognitionTeaser />
    </SiteLayout>
  );
}
