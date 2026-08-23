import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./archive.module.css";

const reservationHref =
  "mailto:shayan.arman2@gmail.com?subject=Archive%20Independence%20Sprint%20%E2%80%94%20founding%20slot&body=Hi%20Shayan%2C%0A%0AI%27d%20like%20to%20reserve%20a%20founding%20slot.%0A%0APublication%20URL%3A%20%0ACustom%20domain%20(if%20any)%3A%20%0AApproximate%20post%20count%3A%20%0A%0APlease%20send%20the%20US%24125%20deposit%20invoice.%0A";

export const metadata: Metadata = {
  title: "Own Your Substack Archive",
  description:
    "Move your Substack archive onto a fast, branded site you own—without turning off your newsletter. A fixed-scope 48-hour migration sprint.",
  alternates: { canonical: "/archive" },
  openGraph: {
    title: "Your archive deserves an address you own.",
    description:
      "A 48-hour Substack archive migration sprint from the engineer who moved 409 posts and 198 media files.",
    url: "/archive",
    type: "website",
    images: [
      {
        url: "/archive-independence.webp",
        width: 1536,
        height: 1024,
        alt: "A thread carrying pages from a locked box into an organized archive",
      },
    ],
  },
};

const deliverables = [
  {
    number: "01",
    title: "The writing",
    body: "Up to 100 public posts, with titles, body copy, original publication dates, and human-readable slugs preserved.",
  },
  {
    number: "02",
    title: "The media",
    body: "Up to 25 in-post images copied off the platform CDN and mapped back to their source posts.",
  },
  {
    number: "03",
    title: "The address",
    body: "A fast, branded archive deployed to a domain or subdomain you control. Your Substack stays live throughout.",
  },
  {
    number: "04",
    title: "The handoff",
    body: "A content ledger, source code, RSS, sitemap, structured article metadata, and a final link-by-link verification report.",
  },
];

const steps = [
  {
    label: "Proof",
    timing: "First",
    body: "I migrate five representative posts and show you the result before the full run.",
  },
  {
    label: "Move",
    timing: "24 hours",
    body: "The archive runs through the same import, media, and publishing pipeline I built for my own writing.",
  },
  {
    label: "Verify",
    timing: "48 hours",
    body: "I audit dates, slugs, images, feeds, and source links, then hand over the keys.",
  },
];

export default function ArchivePage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Archive Independence Sprint",
    description:
      "A fixed-scope migration of a public Substack archive to a branded, independently hosted website.",
    provider: {
      "@type": "Person",
      name: "Shayan Arman",
      url: "https://www.shayanarman.com",
    },
    offers: {
      "@type": "Offer",
      price: "250",
      priceCurrency: "USD",
      availability: "https://schema.org/LimitedAvailability",
      url: "https://www.shayanarman.com/archive",
    },
  };

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <nav className={styles.nav} aria-label="Primary navigation">
        <Link href="/" className={styles.wordmark}>
          Shayan Arman
        </Link>
        <span className={styles.navDivider} aria-hidden="true" />
        <span className={styles.navProduct}>Archive Independence</span>
        <a href="#reserve" className={styles.navAvailability}>
          <span aria-hidden="true" /> 3 founding slots
        </a>
      </nav>

      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>A 48-hour migration sprint for independent writers</p>
          <h1>Your archive deserves an address you own.</h1>
          <p className={styles.lede}>
            I move your public Substack history onto a fast, branded site on your
            domain—without touching the newsletter your readers already use.
          </p>
          <div className={styles.heroActions}>
            <a href={reservationHref} className={styles.primaryAction}>
              Reserve a founding slot <span aria-hidden="true">↗</span>
            </a>
            <a href="#proof" className={styles.textAction}>
              See the migration proof <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className={styles.actionNote}>
            US$250 total <span aria-hidden="true">·</span> US$125 to reserve{" "}
            <span aria-hidden="true">·</span> invoice follows by email
          </p>
        </div>

        <figure className={styles.heroFigure}>
          <div className={styles.imageFrame}>
            <Image
              src="/archive-independence.webp"
              alt="A red thread carries loose pages from a locked black box into an organized wooden archive"
              width={1536}
              height={1024}
              priority
              sizes="(max-width: 900px) 100vw, 52vw"
            />
          </div>
          <figcaption>
            Keep the newsletter. Own the library.{" "}
            <span>One red thread, no broken history.</span>
          </figcaption>
        </figure>
      </header>

      <section className={styles.proof} id="proof" aria-labelledby="proof-title">
        <div className={styles.sectionLabel}>
          <span>01</span>
          <p>Built on a real evacuation</p>
        </div>
        <div className={styles.proofContent}>
          <h2 id="proof-title">I moved my own archive before offering to move yours.</h2>
          <p className={styles.proofIntro}>
            The migration ledger is not a demo: 21 completed batches, every post
            mapped to its original URL, publication date, and destination slug.
            Media files were stored independently with source references and checksums.
          </p>
          <div className={styles.metrics}>
            <div>
              <strong>409</strong>
              <span>posts migrated</span>
            </div>
            <div>
              <strong>198</strong>
              <span>media files stored</span>
            </div>
            <div>
              <strong>21/21</strong>
              <span>batches completed</span>
            </div>
          </div>
          <p className={styles.ledgerNote}>Migration ledger verified August 22, 2026.</p>
        </div>
      </section>

      <section className={styles.thesis} aria-labelledby="thesis-title">
        <p className={styles.pullQuote} id="thesis-title">
          Your newsletter can stay on a platform.{" "}
          <em>Your body of work does not have to.</em>
        </p>
        <div className={styles.comparison}>
          <div>
            <span className={styles.comparisonLabel}>The rented feed</span>
            <p>One company controls the URLs, presentation, discovery rules, and exit.</p>
          </div>
          <div className={styles.comparisonArrow} aria-hidden="true">→</div>
          <div>
            <span className={styles.comparisonLabel}>The owned library</span>
            <p>Your domain, portable files, searchable history, and an archive that can outlive any tool.</p>
          </div>
        </div>
      </section>

      <section className={styles.deliverables} aria-labelledby="deliverables-title">
        <div className={styles.sectionLabel}>
          <span>02</span>
          <p>The founding sprint</p>
        </div>
        <div className={styles.deliverablesContent}>
          <div className={styles.sectionHeadingRow}>
            <h2 id="deliverables-title">A clean exit hatch, delivered end to end.</h2>
            <p>
              Fixed scope. No redesign committee. No subscriber migration. The goal
              is a faithful, durable second home for the work you already made.
            </p>
          </div>
          <div className={styles.deliverableList}>
            {deliverables.map((item) => (
              <article key={item.number} className={styles.deliverableItem}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.process} aria-labelledby="process-title">
        <div className={styles.sectionLabel}>
          <span>03</span>
          <p>The handoff</p>
        </div>
        <div className={styles.processContent}>
          <h2 id="process-title">Five posts prove it. The rest follow.</h2>
          <div className={styles.steps}>
            {steps.map((step, index) => (
              <article className={styles.step} key={step.label}>
                <div className={styles.stepMarker}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <div className={styles.stepHeading}>
                    <h3>{step.label}</h3>
                    <span>{step.timing}</span>
                  </div>
                  <p>{step.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.reserve} id="reserve" aria-labelledby="reserve-title">
        <div className={styles.reserveCopy}>
          <p className={styles.eyebrow}>Three founding slots</p>
          <h2 id="reserve-title">Make the archive yours before you need an exit.</h2>
          <p>
            Send the publication URL. I&apos;ll confirm fit, issue the US$125 deposit
            invoice, and begin with the five-post proof. The deposit is refundable
            until that proof passes the agreed checks.
          </p>
        </div>
        <div className={styles.priceBlock}>
          <span>Founding price</span>
          <strong><sup>US$</sup>250</strong>
          <p>$125 now · $125 at handoff</p>
          <a href={reservationHref} className={styles.inverseAction}>
            Claim a slot <span aria-hidden="true">↗</span>
          </a>
          <small>For public archives up to 100 posts and 25 images.</small>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Archive Independence Sprint © 2026 Shayan Arman</p>
        <div>
          <a href="mailto:shayan.arman2@gmail.com">Email</a>
          <Link href="/">About Shayan</Link>
        </div>
      </footer>
    </main>
  );
}
