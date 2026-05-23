const principles = [
  {
    number: "01",
    title: "Recherche terrain",
    body: "Nous ne construisons que pour des marchés que nous comprenons de l'intérieur. Pas de desk research. Pas d'hypothèses. Du terrain.",
    proof: "18 mois à Dakar avant la 1re ligne de code Pharveo.",
    tag: "Field Research",
  },
  {
    number: "02",
    title: "Conception rigoureuse",
    body: "Architecture multi-tenant, design hors-ligne natif, conformité réglementaire intégrée dès le départ.",
    proof: "9 modules en production. 0 dépendance critique externe.",
    tag: "Engineering",
  },
  {
    number: "03",
    title: "Engagement long terme",
    body: "Pharveo n'est pas livré puis abandonné. On opère, on itère, on reste. Minimum 5 ans par produit.",
    proof: "1 client en production depuis avril 2026. Roadmap publique.",
    tag: "Operations",
  },
];

export function Approach() {
  return (
    <section style={{
      background: "linear-gradient(180deg, #0B0B0B 0%, #0d1117 50%, #0B0B0B 100%)",
      padding: "10rem 4rem",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Subtle left glow */}
      <div style={{
        position: "absolute",
        width: "60rem", height: "60rem",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(14,138,138,0.06) 0%, transparent 70%)",
        top: "10%", left: "-10rem",
        filter: "blur(60px)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "flex-end",
          marginBottom: "6rem",
        }}>
          <div>
            <p className="section-tag" style={{ marginBottom: "2rem" }}>notre approche</p>
            <h2 style={{
              fontSize: "clamp(3.2rem, 4.5vw, 6.4rem)",
              fontWeight: 500,
              color: "#fff",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}>
              Trois principes qui guident{" "}
              <em style={{
                fontFamily: "var(--font-fraunces-var)",
                fontStyle: "italic",
                color: "rgba(255,255,255,0.45)",
              }}>notre travail.</em>
            </h2>
          </div>
          <p style={{ fontSize: "1.8rem", color: "rgba(255,255,255,0.38)", lineHeight: 1.6 }}>
            Pas une méthodologie. Pas un framework. Trois principes que nous tenons même quand c&apos;est inconfortable.
          </p>
        </div>

        {/* Principles - arounda services style: large list with dividers */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          {principles.map((p) => (
            <div
              key={p.number}
              style={{
                display: "grid",
                gridTemplateColumns: "6rem 1fr auto",
                gap: "4rem",
                padding: "4rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                alignItems: "center",
                transition: "opacity 0.2s",
                cursor: "default",
              }}
              className="case-block"
            >
              {/* Number */}
              <span style={{
                fontSize: "1.2rem",
                fontWeight: 500,
                color: "rgba(255,255,255,0.2)",
                fontFamily: "monospace",
                letterSpacing: "0.05em",
              }}>
                {p.number}
              </span>

              {/* Content */}
              <div style={{ display: "flex", alignItems: "center", gap: "6rem" }}>
                <div style={{ flex: "0 0 28rem" }}>
                  <p style={{
                    fontSize: "2.4rem",
                    fontWeight: 500,
                    color: "#fff",
                    letterSpacing: "-0.01em",
                  }}>{p.title}</p>
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: "1.6rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.6, marginBottom: "1.2rem" }}>
                    {p.body}
                  </p>
                  <p style={{
                    fontSize: "1.3rem",
                    color: "rgba(14,138,138,0.8)",
                    borderLeft: "2px solid rgba(14,138,138,0.3)",
                    paddingLeft: "1.2rem",
                  }}>
                    Preuve : {p.proof}
                  </p>
                </div>
              </div>

              {/* Tag + arrow */}
              <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                <span className="pill" style={{ fontSize: "1.2rem", padding: "0.5rem 1.4rem" }}>{p.tag}</span>
                <span style={{ fontSize: "2rem", color: "rgba(255,255,255,0.2)" }}>↘</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
