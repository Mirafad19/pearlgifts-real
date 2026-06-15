import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Pearlgifts" },
      {
        name: "description",
        content: "Terms of Service for Pearlgifts Atelier. Please read before placing an order.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Legal Framework"
        title={
          <>
            Terms & <em className="not-italic text-gradient-gold">Conditions</em>
          </>
        }
        description="The formal agreements governing custom commissions, artisan production, and corporate gifting programs with Pearlgifts Atelier Limited."
      />

      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-5">
          <div className="border border-[var(--plum)]/10 rounded-3xl p-8 md:p-12 shadow-soft bg-[var(--cream)]/10">
            <p className="text-xs text-[var(--gold)] font-mono uppercase tracking-widest font-semibold">
              Effective and Binding Agreement
            </p>
            <h2 className="mt-2 font-display text-2xl text-[var(--plum-deep)]">
              Atelier Trade Terms
            </h2>
            <p className="mt-4 text-sm text-[var(--ink)]/80 leading-relaxed font-sans">
              Welcome to Pearlgifts Atelier (managed by Pearlgifts Atelier Limited). These Terms
              and Conditions govern individual commissions and high-volume corporate partnerships.
              By signing a digital quote, submitting a creative request, or transmitting payment,
              you enter into a legally binding trade agreement with Pearlgifts Atelier Limited (RC:
              1789432, Lagos, Nigeria).
            </p>
          </div>

          <div className="mt-14 space-y-12 text-[var(--ink)]">
            <div className="border-l-2 border-[var(--gold)] pl-6">
              <span className="text-xs font-mono text-[var(--gold)] uppercase tracking-wider font-semibold">
                Clause 1.0
              </span>
              <h2 className="font-display text-2xl text-[var(--plum-deep)] mt-1">
                Bespoke Commissions & Concept Sourcing
              </h2>
              <p className="mt-3 text-sm leading-relaxed font-sans text-[var(--ink)]/90">
                Pearlgifts operates as a customized production studio. Our materials (genuine
                leather, structural mahogany, hand-finished brass, and specialty textiles) are
                curated upon contract sign-off.
              </p>
              <ul className="mt-4 space-y-2 text-sm list-disc pl-5 font-sans text-[var(--ink)]/80">
                <li>
                  Natural variances in wood grain, leather grain, skin texture, and hand-dyeing runs
                  are intrinsic to luxury handcraft and represent authentic quality markers.
                </li>
                <li>
                  Atelier mockups, 3D presentations, and physical prototypes are artistic
                  approximations. Minor revisions matching standard luxury tolerances may occur
                  during artisan fabrication.
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-[var(--gold)] pl-6">
              <span className="text-xs font-mono text-[var(--gold)] uppercase tracking-wider font-semibold">
                Clause 2.0
              </span>
              <h2 className="font-display text-2xl text-[var(--plum-deep)] mt-1">
                Client Approval Rights & Digital Proofs
              </h2>
              <p className="mt-3 text-sm leading-relaxed font-sans text-[var(--ink)]/90">
                Bespoke engraving, hot-stamping, leather-debossing, and monogramming require
                explicit customer sign-off.
              </p>
              <ul className="mt-4 space-y-2 text-sm list-disc pl-5 font-sans text-[var(--ink)]/80">
                <li>
                  Digital proofs are sent via email or secure client messaging. Production begins
                  strictly upon written approval.
                </li>
                <li>
                  Pearlgifts maintains zero liability for client monograms, names, or brand logos
                  spelled incorrectly in signed-off digital concepts.
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-[var(--gold)] pl-6">
              <span className="text-xs font-mono text-[var(--gold)] uppercase tracking-wider font-semibold">
                Clause 3.0
              </span>
              <h2 className="font-display text-2xl text-[var(--plum-deep)] mt-1">
                Settlement, Deposit, & Tax Framework
              </h2>
              <p className="mt-3 text-sm leading-relaxed font-sans text-[var(--ink)]/90">
                Financial arrangements are structured based on program scale:
              </p>
              <ul className="mt-4 space-y-2 text-sm list-disc pl-5 font-sans text-[var(--ink)]/80">
                <li>
                  <strong>Individual Purchases:</strong> 100% advance settlement is required to
                  instantiate raw material allocations.
                </li>
                <li>
                  <strong>Corporate Contracts:</strong> A standard 70% commencement fee is required
                  prior to artisan slot lock-in, with the final 30% cleared immediately upon
                  production approval, preceding dispatch.
                </li>
                <li>
                  Prices are quoted in Nigerian Naira (₦) or foreign equivalents. Standard Value
                  Added Tax (VAT) and federal stamp duties are detailed on official invoices.
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-[var(--gold)] pl-6">
              <span className="text-xs font-mono text-[var(--gold)] uppercase tracking-wider font-semibold">
                Clause 4.0
              </span>
              <h2 className="font-display text-2xl text-[var(--plum-deep)] mt-1">
                Title & Risk of Logistics
              </h2>
              <p className="mt-3 text-sm leading-relaxed font-sans text-[var(--ink)]/90">
                We handle domestic deliveries across all 36 states of Nigeria through partner
                security dispatch and premium tracked logistics.
              </p>
              <ul className="mt-4 space-y-2 text-sm list-disc pl-5 font-sans text-[var(--ink)]/80">
                <li>
                  Title of goods transfers to the buyer upon handoff to third-party shipping
                  agencies. Optional transit physical damage insurance may be curated on behalf of
                  the customer.
                </li>
                <li>
                  While Pearlgifts closely monitors delivery deadlines, we represent zero
                  responsibility for port backlogs, interstate transit road delays, and public
                  infrastructure outages.
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-[var(--gold)] pl-6">
              <span className="text-xs font-mono text-[var(--gold)] uppercase tracking-wider font-semibold">
                Clause 5.0
              </span>
              <h2 className="font-display text-2xl text-[var(--plum-deep)] mt-1">
                Cancellation, Voidance, and Returns
              </h2>
              <p className="mt-3 text-sm leading-relaxed font-sans text-[var(--ink)]/90">
                Due to the non-reusable, individually finished nature of custom commissions,
                cancellation guidelines are strictly enforced:
              </p>
              <ul className="mt-4 space-y-2 text-sm list-disc pl-5 font-sans text-[var(--ink)]/80">
                <li>
                  Once material procurement or custom die-casting has commenced, deposits are
                  non-refundable.
                </li>
                <li>
                  Defects or faults in artisan work must be flagged within forty-eight (48) hours of
                  receipt for immediate atelier remediation, replacement, or repair.
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-[var(--gold)] pl-6">
              <span className="text-xs font-mono text-[var(--gold)] uppercase tracking-wider font-semibold">
                Clause 6.0
              </span>
              <h2 className="font-display text-2xl text-[var(--plum-deep)] mt-1">
                Intellectual Property & Licensing Rights
              </h2>
              <p className="mt-3 text-sm leading-relaxed font-sans text-[var(--ink)]/90">
                Client represents ownership or complete license to use all trademarks, corporate
                names, brand schemes, and monograms submitted for production.
              </p>
              <ul className="mt-4 space-y-2 text-sm list-disc pl-5 font-sans text-[var(--ink)]/80">
                <li>
                  Pearlgifts reserves the right to photograph and exhibit non-embargoed corporate
                  gifts as examples of bespoke capabilities, unless explicitly bound by an active
                  non-disclosure agreement.
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-[var(--gold)] pl-6">
              <span className="text-xs font-mono text-[var(--gold)] uppercase tracking-wider font-semibold">
                Clause 7.0
              </span>
              <h2 className="font-display text-2xl text-[var(--plum-deep)] mt-1">
                Governing Jurisdiction
              </h2>
              <p className="mt-3 text-sm leading-relaxed font-sans text-[var(--ink)]/90">
                These terms shall be evaluated, constructed, and enforced exclusively in accordance
                with the Laws of the Federal Republic of Nigeria, with disputes resolved via the
                High Court of Lagos State, Nigeria.
              </p>
            </div>

            <p className="mt-14 text-xs font-mono text-[var(--ink)]/50 pt-8 border-t border-[var(--plum)]/14">
              Last updated: June 2026 · Pearlgifts Atelier Legal Operations (Victoria Island,
              Lagos)
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
