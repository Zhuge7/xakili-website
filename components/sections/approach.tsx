const principles = [
  {
    number: "01",
    title: "Recherche terrain",
    body: "Nous ne construisons que pour des marches que nous comprenons de l'interieur. Pas de desk research. Pas d'hypotheses. Du terrain.",
    proof: "18 mois a Dakar avant la 1re ligne de code Pharveo.",
    tag: "Field Research",
  },
  {
    number: "02",
    title: "Conception rigoureuse",
    body: "Architecture multi-tenant, design hors-ligne natif, conformite reglementaire integree des le depart.",
    proof: "9 modules en production. 0 dependance critique externe.",
    tag: "Engineering",
  },
  {
    number: "03",
    title: "Engagement long terme",
    body: "Pharveo n'est pas livre puis abandonne. On opere, on itere, on reste. Minimum 5 ans par produit.",
    proof: "1 client en production depuis avril 2026. Roadmap publique.",
    tag: "Operations",
  },
];

const studioStats = [
  { value: "2024", label: "Annee de fondation", noPlus: true },
  { value: "1", label: "Produit en production", noPlus: false },
  { value: "6", label: "Pays vises", noPlus: false },
  { value: "18", label: "Mois de terrain", noPlus: false },
];

export function Approach() {
  return (
    <section
      style={{
        background: "#0B0B0B",
        padding: "10rem 4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Gradient blob — right side blue like arounda About Us */}
      <div
        style={{
          position: "absolute",
          width: "70rem",
          height: "70rem",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(40,50,180,0.35) 0%, rgba(20,30,140,0.15) 40%, transparent 65%)",
          top: "0",
          right: "-15rem",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Top section — headline left + stats right (arounda About Us style) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6rem",
            alignItems: "flex-start",
            marginBottom: "8rem",
          }}
        >
          {/* Left — big headline */}
          <div>
            <p className="section-tag" style={{ marginBottom: "2.4rem" }}>
              a propos
            </p>
            <h2
              style={{
                fontSize: "clamp(3.6rem, 5.5vw, 8rem)",
                fontWeight: 500,
                color: "#fff",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}
            >
              Un studio qui concoit{" "}
              <em
                style={{
                  fontFamily: "var(--font-fraunces-var)",
                  fontStyle: "italic",
                  background:
                    "linear-gradient(352deg, rgb(120, 36, 226) -120%, rgb(255, 255, 255) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                pour le terrain
              </em>
            </h2>
          </div>

          {/* Right — stats grid + description */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "3.2rem",
              paddingTop: "6rem",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2rem",
              }}
            >
              {studioStats.map((s) => (
                <div key={s.label}>
                  <p
                    style={{
                      fontSize: "4rem",
                      fontWeight: 600,
                      color: "#fff",
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                      marginBottom: "0.6rem",
                    }}
                  >
                    {s.value}
                    {!s.noPlus && (
                      <span style={{ fontSize: "2.4rem", color: "rgba(255,255,255,0.3)" }}>
                        +
                      </span>
                    )}
                  </p>
                  <p
                    style={{
                      fontSize: "1.3rem",
                      color: "rgba(255,255,255,0.3)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      fontWeight: 500,
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
            <p
              style={{
                fontSize: "1.7rem",
                color: "rgba(255,255,255,0.38)",
                lineHeight: 1.65,
              }}
            >
              Pas une methodologie. Pas un framework. Trois principes que nous
              tenons meme quand c&apos;est inconfortable.
            </p>
          </div>
        </div>

        {/* Principles list — arounda services list style */}
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
              <span
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.2)",
                  fontFamily: "monospace",
                  letterSpacing: "0.05em",
                }}
              >
                {p.number}
              </span>

              {/* Content */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "6rem" }}
              >
                <div style={{ flex: "0 0 24rem" }}>
                  <p
                    style={{
                      fontSize: "2.4rem",
                      fontWeight: 500,
                      color: "#fff",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {p.title}
                  </p>
                </div>
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontSize: "1.6rem",
                      color: "rgba(255,255,255,0.42)",
                      lineHeight: 1.6,
                      marginBottom: "1.2rem",
                    }}
                  >
                    {p.body}
                  </p>
                  <p
                    style={{
                      fontSize: "1.3rem",
                      color: "rgba(14,138,138,0.85)",
                      borderLeft: "2px solid rgba(14,138,138,0.3)",
                      paddingLeft: "1.2rem",
                    }}
                  >
                    Preuve : {p.proof}
                  </p>
                </div>
              </div>

              {/* Tag + arrow */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "2rem" }}
              >
                <span
                  className="pill"
                  style={{ fontSize: "1.2rem", padding: "0.5rem 1.4rem" }}
                >
                  {p.tag}
                </span>
                <span
                  style={{ fontSize: "2rem", color: "rgba(255,255,255,0.2)" }}
                >
                  ↘
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
