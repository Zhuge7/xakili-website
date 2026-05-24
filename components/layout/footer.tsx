import Link from "next/link";

const serviceColumns = [
  {
    title: "Produits actifs",
    links: [
      { label: "Pharveo CRM ↗", href: "https://pharveo.com", external: true },
      { label: "pharveo.com ↗", href: "https://pharveo.com", external: true },
    ],
  },
  {
    title: "En conception",
    links: [
      { label: "Xakili Lab", href: "/produits/lab", external: false },
      { label: "Xakili Med", href: "/produits/med", external: false },
      { label: "Roadmap ↗", href: "/produits/roadmap", external: false },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "Notre approche", href: "/studio", external: false },
      { label: "Manifeste", href: "/studio/manifeste", external: false },
      { label: "A propos", href: "/a-propos", external: false },
      { label: "Blog", href: "/blog", external: false },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Nous ecrire", href: "/contact", external: false },
      { label: "Reserver 30 min ↗", href: "https://cal.com/xakili", external: true },
      { label: "Mentions legales", href: "/mentions-legales", external: false },
    ],
  },
];

const badges = [
  { label: "Infomaniak 🇨🇭", sub: "Hebergement souverain" },
  { label: "Claude AI", sub: "Powered by Anthropic" },
  { label: "Next.js 15", sub: "Framework React" },
  { label: "PostgreSQL", sub: "Base de donnees" },
  { label: "Docker", sub: "Containerisation" },
];

export function Footer() {
  return (
    <footer
      style={{
        background: "#0B0B0B",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "8rem 4rem 5rem",
        }}
      >
        {/* Main footer grid — logo/contact left + columns right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "28rem 1fr",
            gap: "8rem",
            marginBottom: "6rem",
            paddingBottom: "6rem",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {/* Left — brand + offices + email */}
          <div style={{ display: "flex", flexDirection: "column", gap: "3.2rem" }}>
            <Link
              href="/"
              style={{
                fontSize: "2.4rem",
                fontWeight: 600,
                color: "#fff",
                textDecoration: "none",
                letterSpacing: "-0.03em",
              }}
            >
              xakili
            </Link>

            <div>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.22)",
                  marginBottom: "1.2rem",
                }}
              >
                Bureaux
              </p>
              <p
                style={{
                  fontSize: "1.5rem",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.7,
                }}
              >
                Sudbury, Ontario 🇨🇦
                <br />
                Dakar, Senegal 🇸🇳
              </p>
            </div>

            <div>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.22)",
                  marginBottom: "1.2rem",
                }}
              >
                Nous ecrire
              </p>
              <a
                href="mailto:zhuge@xakili.com"
                style={{
                  fontSize: "1.5rem",
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  transition: "color 0.2s",
                }}
              >
                zhuge@xakili.com
              </a>
              <p
                style={{
                  fontSize: "1.3rem",
                  color: "rgba(255,255,255,0.22)",
                  marginTop: "0.6rem",
                }}
              >
                Donnees hebergees en Suisse 🇨🇭
              </p>
            </div>
          </div>

          {/* Right — service columns */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "3.2rem",
            }}
          >
            {serviceColumns.map((col) => (
              <div key={col.title}>
                <h4
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.22)",
                    marginBottom: "2rem",
                  }}
                >
                  {col.title}
                </h4>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.4rem",
                  }}
                >
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="footer-link"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href} className="footer-link">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Badge row — like arounda's partner logos */}
        <div
          style={{
            display: "flex",
            gap: "1.2rem",
            marginBottom: "5rem",
            flexWrap: "wrap",
          }}
        >
          {badges.map((b) => (
            <div
              key={b.label}
              style={{
                background: "#1C1C1C",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "1.2rem",
                padding: "1.4rem 2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.2rem",
              }}
            >
              <span
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                {b.label}
              </span>
              <span
                style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.25)" }}
              >
                {b.sub}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "3.2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <p
            style={{
              fontSize: "1.3rem",
              color: "rgba(255,255,255,0.15)",
            }}
          >
            &copy; {new Date().getFullYear()} Xakili Inc. Tous droits reserves.
          </p>
          <p
            style={{
              fontSize: "1.3rem",
              color: "rgba(255,255,255,0.15)",
            }}
          >
            Fait avec soin au Canada 🇨🇦 · Donnees en Suisse 🇨🇭
          </p>
        </div>
      </div>
    </footer>
  );
}
