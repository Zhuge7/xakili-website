const featured = {
  quote: "Xakili nous a accompagnés pendant 18 mois sur Pharveo. Là où on attendait un prestataire, on a eu un partenaire qui connaît le métier mieux que la plupart des consultants pharma qu'on a croisés à Dakar.",
  author: "Direction Générale",
  company: "IMS-Pharma Sénégal",
  tag: "Premier client Pharveo",
  initials: "IMS",
  color: "#0E8A8A",
  rating: "5.0",
  platform: "Vérifié",
};

const secondary = [
  {
    quote: "Ce qui distingue Xakili, c'est leur capacité à tenir bon sur leurs principes même quand c'est inconfortable. Ils n'ont pas dilué Pharveo pour faire plaisir. Ca inspire confiance.",
    author: "Distributeur pharmaceutique",
    company: "Dakar - Mai 2026",
    initials: "DP",
    color: "#6366F1",
  },
  {
    quote: "Beaucoup d'éditeurs SaaS prétendent comprendre l'Afrique francophone. Xakili est l'un des rares qui y vient vraiment, qui parle aux équipes terrain, qui écoute.",
    author: "Consultant santé publique",
    company: "Sénégal - Avril 2026",
    initials: "CS",
    color: "#C2410C",
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div style={{ display: "flex", gap: "0.3rem" }}>
      {[...Array(count)].map((_, i) => (
        <span key={i} style={{ color: "#14B8B8", fontSize: "1.4rem" }}>★</span>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section style={{ background: "#0B0B0B", padding: "8rem 4rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "5.6rem" }}>
          <p className="section-tag" style={{ marginBottom: "1.6rem" }}>témoignages</p>
          <h2 style={{
            fontSize: "clamp(3.2rem, 4.5vw, 6.4rem)",
            fontWeight: 500,
            color: "#fff",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            maxWidth: "64rem",
          }}>
            Ce que disent nos{" "}
            <em style={{
              fontFamily: "var(--font-fraunces-var)",
              fontStyle: "italic",
              color: "rgba(255,255,255,0.45)",
            }}>premiers clients</em>
          </h2>
        </div>

        {/* Arounda layout: featured left (2/3) + stacked right (1/3) */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 38rem", gap: "1.6rem", alignItems: "stretch" }}>

          {/* Featured large card */}
          <div style={{
            background: "#1C1C1C",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "2.4rem",
            padding: "4.8rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "4rem",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Teal glow */}
            <div style={{
              position: "absolute",
              top: "-4rem", right: "-4rem",
              width: "24rem", height: "24rem",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(14,138,138,0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              {/* Rating badge — arounda clutch style */}
              <div style={{ display: "flex", alignItems: "center", gap: "1.2rem", marginBottom: "3.2rem" }}>
                <div style={{
                  display: "flex", alignItems: "center", gap: "0.8rem",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "10rem",
                  padding: "0.6rem 1.4rem",
                }}>
                  <Stars />
                  <span style={{ fontSize: "1.3rem", fontWeight: 600, color: "#fff" }}>{featured.rating}</span>
                </div>
                <span style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  {featured.platform}
                </span>
              </div>

              <p style={{
                fontSize: "clamp(1.8rem, 2.2vw, 2.4rem)",
                color: "rgba(255,255,255,0.82)",
                lineHeight: 1.6,
                letterSpacing: "-0.01em",
              }}>
                &ldquo;{featured.quote}&rdquo;
              </p>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "1.6rem", position: "relative", zIndex: 1 }}>
              <div style={{
                width: "5rem", height: "5rem", borderRadius: "50%",
                background: featured.color,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.4rem", fontWeight: 700, color: "#fff", flexShrink: 0,
              }}>
                {featured.initials}
              </div>
              <div>
                <p style={{ fontSize: "1.6rem", fontWeight: 600, color: "#fff" }}>{featured.author}</p>
                <p style={{ fontSize: "1.3rem", color: "rgba(255,255,255,0.4)" }}>{featured.company} · {featured.tag}</p>
              </div>
            </div>
          </div>

          {/* Right column — 2 smaller cards stacked */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}>
            {secondary.map((t, i) => (
              <div
                key={i}
                style={{
                  background: "#1C1C1C",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "2.4rem",
                  padding: "3.2rem",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "2.4rem",
                }}
              >
                <div>
                  <Stars />
                  <p style={{
                    fontSize: "1.5rem",
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.65,
                    marginTop: "1.2rem",
                  }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
                  <div style={{
                    width: "3.6rem", height: "3.6rem", borderRadius: "50%",
                    background: t.color,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.1rem", fontWeight: 700, color: "#fff", flexShrink: 0,
                  }}>
                    {t.initials}
                  </div>
                  <div>
                    <p style={{ fontSize: "1.4rem", fontWeight: 500, color: "#fff" }}>{t.author}</p>
                    <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.35)" }}>{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
