import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Pearlgifts" },
      {
        name: "description",
        content: "Privacy Policy for Pearlgifts Atelier. Learn how we protect your data.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Data Governance"
        title={
          <>
            Privacy & <em className="not-italic text-gradient-gold">Confidentiality</em>
          </>
        }
        description="Our uncompromising standard for securing your corporate intellectual assets and physical delivery records under the Nigeria Data Protection Act (NDPA 2023)."
      />

      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-5">
          <div className="border border-[var(--plum)]/10 rounded-3xl p-8 md:p-12 shadow-soft bg-[var(--cream)]/10">
            <p className="text-xs text-[var(--gold)] font-mono uppercase tracking-widest font-semibold">
              Atelier Confidentiality Pledge
            </p>
            <h2 className="mt-2 font-display text-2xl text-[var(--plum-deep)]">
              Your Data Security is Sovereign
            </h2>
            <p className="mt-4 text-sm text-[var(--ink)]/80 leading-relaxed font-sans">
              Pearlgifts Atelier Limited acts as both a Data Controller and Data Processor for
              premier multinational corporations, financial institutions, and selective individuals.
              We treat all product designs, recipient registries, custom engravings, and corporate
              trademarks with the highest level of fiduciary care.
            </p>
          </div>

          <div className="mt-14 space-y-12 text-[var(--ink)]">
            <div className="border-l-2 border-[var(--gold)] pl-6">
              <span className="text-xs font-mono text-[var(--gold)] uppercase tracking-wider font-semibold">
                Section 1.0
              </span>
              <h2 className="font-display text-2xl text-[var(--plum-deep)] mt-1">
                Information Assets We Collect
              </h2>
              <p className="mt-3 text-sm leading-relaxed font-sans text-[var(--ink)]/90">
                To hand-finish and coordinate bespoke gifting programs, we ingest standard data
                parameters including:
              </p>
              <ul className="mt-4 space-y-2 text-sm list-disc pl-5 font-sans text-[var(--ink)]/80">
                <li>
                  <strong>Sponsor Data:</strong> Corporate buyer name, trade registry numbers,
                  billing pathways, authorized curator contact information, and business
                  coordinates.
                </li>
                <li>
                  <strong>Creative Assets:</strong> High-resolution vector files (.AI, .EPS, .SVG),
                  digital monograms, branding design guidelines, and typography kits.
                </li>
                <li>
                  <strong>Recipient Registries:</strong> Name records, secure addresses, phone
                  coordinates, corporate designations, and custom engraving references.
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-[var(--gold)] pl-6">
              <span className="text-xs font-mono text-[var(--gold)] uppercase tracking-wider font-semibold">
                Section 2.0
              </span>
              <h2 className="font-display text-2xl text-[var(--plum-deep)] mt-1">
                Logistics & Processing Restrictions
              </h2>
              <p className="mt-3 text-sm leading-relaxed font-sans text-[var(--ink)]/90">
                We handle recipient list data strictly to execute delivery. Pearlgifts does not
                maintain, rent, reuse, sell, or market to recipient registries under any
                circumstances.
              </p>
              <ul className="mt-4 space-y-2 text-sm list-disc pl-5 font-sans text-[var(--ink)]/80">
                <li>
                  Recipient address sheets are accessed solely by authorized program coordinators
                  and secure transit couriers.
                </li>
                <li>
                  Once delivery is finished and confirmed, electronic recipient lists can be
                  thoroughly purged from active digital records upon your written corporate request.
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-[var(--gold)] pl-6">
              <span className="text-xs font-mono text-[var(--gold)] uppercase tracking-wider font-semibold">
                Section 3.0
              </span>
              <h2 className="font-display text-2xl text-[var(--plum-deep)] mt-1">
                Confidentiality & Corporate Embargoes
              </h2>
              <p className="mt-3 text-sm leading-relaxed font-sans text-[var(--ink)]/90">
                We routinely collaborate with listed corporations launching pre-released product
                promotions or high-stakes annual general meetings (AGMs).
              </p>
              <ul className="mt-4 space-y-2 text-sm list-disc pl-5 font-sans text-[var(--ink)]/80">
                <li>
                  We enforce strict physical and digital isolation on active pre-reveal materials to
                  safeguard against leaks.
                </li>
                <li>
                  All staff and external craftsmen operate under stringent internal non-disclosure
                  terms to ensure client confidentiality.
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-[var(--gold)] pl-6">
              <span className="text-xs font-mono text-[var(--gold)] uppercase tracking-wider font-semibold">
                Section 4.0
              </span>
              <h2 className="font-display text-2xl text-[var(--plum-deep)] mt-1">
                Data Retention & Security Protections
              </h2>
              <p className="mt-3 text-sm leading-relaxed font-sans text-[var(--ink)]/90">
                Our digital workspace leverages secure enterprise storage networks and physical
                access protocols on our servers.
              </p>
              <ul className="mt-4 space-y-2 text-sm list-disc pl-5 font-sans text-[var(--ink)]/80">
                <li>
                  Digital graphic designs and die-casting schematics are archived under high
                  security for future re-runs of your specific collections.
                </li>
                <li>
                  Payment integrations utilize secure industry partners, and raw account details are
                  never preserved within our local databases.
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-[var(--gold)] pl-6">
              <span className="text-xs font-mono text-[var(--gold)] uppercase tracking-wider font-semibold">
                Section 5.0
              </span>
              <h2 className="font-display text-2xl text-[var(--plum-deep)] mt-1">
                Your Legal Data Sovereignty
              </h2>
              <p className="mt-3 text-sm leading-relaxed font-sans text-[var(--ink)]/90">
                Under the Nigeria Data Protection Act (NDPA 2023), client sponsors can invoke legal
                data rights to check, correct, change, or request complete removal of data records.
              </p>
              <p className="mt-3 text-sm leading-relaxed font-sans text-[var(--ink)]/90">
                Direct all privacy directives and legal information compliance enquiries to our data
                officer at:{" "}
                <a
                  href="mailto:hello@pearlgifts.co"
                  className="font-semibold text-[var(--plum)] hover:underline"
                >
                  hello@pearlgifts.co
                </a>
                .
              </p>
            </div>

            <p className="mt-14 text-xs font-mono text-[var(--ink)]/50 pt-8 border-t border-[var(--plum)]/14">
              Last updated: June 2026 · Data Compliance Office · Pearlgifts Atelier Limited (Lagos)
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
