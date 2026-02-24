import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Outfit } from "next/font/google";
import type { IconType } from "react-icons";
import {
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaInbox,
  FaInstagram,
  FaKickstarterK,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import styles from "./links.module.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type LinkItem = {
  href: string;
  label: string;
  tag: string;
  icon?: IconType;
};

const links = {
  zeroInbox: {
    href: "https://zeroinbox.ai",
    label: "Zero Inbox",
    tag: "AI",
    icon: FaInbox,
  },
  github: {
    href: "https://github.com/ShayanArman",
    label: "GitHub",
    tag: "GH",
    icon: FaGithub,
  },
  x: { href: "https://x.com/InboxZero", label: "X", tag: "X", icon: FaTwitter },
  substack: {
    href: "https://shayanarman.substack.com/",
    label: "Substack",
    tag: "SUB",
  },
  youtube: {
    href: "https://www.youtube.com/@quantumrysics",
    label: "YouTube",
    tag: "YT",
    icon: FaYoutube,
  },
  linkedin: {
    href: "https://linkedin.com/in/shayan-arman",
    label: "LinkedIn",
    tag: "IN",
    icon: FaLinkedinIn,
  },
  instagram: {
    href: "https://www.instagram.com/_shayanarman/",
    label: "Instagram",
    tag: "IG",
    icon: FaInstagram,
  },
  email: {
    href: "mailto:shayan.arman2@gmail.com",
    label: "Email",
    tag: "EML",
    icon: FaEnvelope,
  },
  website: { href: "/", label: "Main Website", tag: "WEB", icon: FaGlobe },
  surfDishwasher: {
    href: "https://www.kickstarter.com/projects/sarman/surf-dishwasher-patent-pending",
    label: "Surf Dishwasher",
    tag: "SURF",
    icon: FaKickstarterK,
  },
} satisfies Record<string, LinkItem>;

const linkRows: LinkItem[][] = [
  [links.zeroInbox],
  [links.x, links.github],
  [links.linkedin, links.substack],
  [links.instagram, links.youtube],
  [links.email, links.website],
  [links.surfDishwasher],
];

export const metadata: Metadata = {
  title: "Links | Shayan Arman",
  description: "All social and project links for Shayan Arman.",
};

function isHttpLink(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

export default function LinksPage() {
  const animationOrder = new Map(
    linkRows.flat().map((item, index) => [item.href, index] as const),
  );

  return (
    <div className={`${styles.page} ${outfit.className}`}>
      <div className={styles.backdropOrbTop} aria-hidden="true" />
      <div className={styles.backdropOrbBottom} aria-hidden="true" />

      <main className={styles.phoneFrame}>
        <section className={styles.card}>
          <Link href="/" className={styles.homeButton} aria-label="Back to homepage">
            HM
          </Link>

          <div className={styles.profileBlock}>
            <div className={styles.avatar}>
              <Image
                src="/me.jpg"
                alt="Portrait of Shayan Arman"
                fill
                className={styles.avatarImage}
                priority
              />
            </div>
            <h1 className={styles.handle}>@shayanarman</h1>
            <p className={styles.subtitle}>Builder, Engineer, Founder</p>
          </div>

          <div className={styles.linksList}>
            {linkRows.map((row) => (
              <div
                key={row.map((item) => item.href).join("|")}
                className={`${styles.linkRow} ${row.length === 2 ? styles.linkRowTwo : ""}`}
              >
                {row.map((item) => {
                  const external = isHttpLink(item.href);
                  const Icon = item.icon;
                  const order = animationOrder.get(item.href) ?? 0;

                  return (
                    <a
                      key={item.href}
                      className={styles.linkButton}
                      href={item.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer noopener" : undefined}
                      style={{ animationDelay: `${120 + order * 40}ms` }}
                    >
                      <span className={styles.linkTag}>
                        {Icon ? <Icon aria-hidden="true" /> : item.tag}
                      </span>
                      <span className={styles.linkLabel}>{item.label}</span>
                      <span className={styles.linkArrow} aria-hidden="true">
                        -&gt;
                      </span>
                    </a>
                  );
                })}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
