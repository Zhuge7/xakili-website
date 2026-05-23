import Link from "next/link";

const columns = [
  {
    title: "Produits",
    links: [
      { label: "Pharveo ↗", href: "https://pharveo.com", external: true },
      { label: "Xakili Lab", href: "/produits/lab", external: false },
      { label: "Xakili Med", href: "/produits/med", external: false },
      { label: "Roadmap", href: "/produits/roadmap", external: false },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "Notre approche", href: "/studio", external: false },
      { label: "Manifeste", href: "/studio/manifeste", external: false },
      { label: "À propos", href: "/a-propos", external: false },
      { label: "Blog", href: "/blog", external: false },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Nous écrire", href: "/contact", external: false },
      { label: "zhuge@xakili.com ↗", href: "mailto:zhuge@xakili.com", external: true },
      { label: "Réserver 30 min ↗", href: "https://cal.com/xakili", external: true },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Mentions légales", href: "/mentions-legales", external: false },
      { label: "Xakili Inc.", href: "/a-propos", external: false },
    ],
  },
];

export function Footer() {
  return (
    <footer style={{ background: "#0B0B0B", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "8rem 4rem 5rem" }}>

        {/* Top — brand + tagline full width */}
        <div style={{ marginBottom: "6rem", paddingBottom: "6rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "4rem", flexWrap: "wrap" }}>
            <div>
              <p style={{
                fontSize: "clamp(4rem, 6vw, 9rem)",
                fontWeight: 600,
                color: "rgba(255,255,255,0.08)",
                lineHeight: 1,
                letterSpacing: "-0.04em",
                marginBottom: "2.4rem",
                userSelect: "none",
              }}>
                xakili
              </p>
              <p style={{ fontSize: "1.5rem", color: "rgba(255,255,255,0.3)", maxWidth: "36rem", lineHeight: 1.6 }}>
                Studio franco-canadien. SaaS verticaux pour l&apos;Afrique de l&apos;Ouest francophone.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.8rem" }}>
              {[
                { flag: "🇨🇦", text: "Sudbury, Ontario" },
                { flag: "🇸🇳", text: "Dakar, Sénégal" },
                { flag: "🇨🇭", text: "Données Infomaniak" },
              ].map(({ flag, text }) => (
                <span key={text} style={{ fontSize: "1.3rem", color: "rgba(255,255,255,0.2)" }}>
                  {text} {flag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Nav columns */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "4rem", marginBottom: "6rem" }}>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 style={{
                fontSize: "1.2rem", fontWeight: 500,
                letterSpacing: "0.1em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.22)", marginBottom: "2rem",
              }}>
                {col.title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.4rem" }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="footer-link">
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

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: "3.2rem",
          display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: "2rem", flexWrap: "wrap",
        }}>
          <p style={{ fontSize: "1.3rem", color: "rgba(255,255,255,0.15)" }}>
            © {new Date().getFullYear()} Xakili Inc. Tous droits réservés.
          </p>
          <p style={{ fontSize: "1.3rem", color: "rgba(255,255,255,0.15)" }}>
            Fait avec soin au Canada 🇨🇦 · Données hébergées en Suisse 🇨🇭
          </p>
        </div>
      </div>
    </footer>
  );
}
