const services = {
  "Produits actifs": [
    { name: "Pharveo - CRM Pharmaceutique", href: "https://pharveo.com", external: true },
  ],
  "En conception": [
    { name: "Xakili Lab - LIS pour labos cliniques", href: "/produits/lab", external: false },
  ],
  "R&D": [
    { name: "Xakili Med - Équipement reconditionné", href: "/produits/med", external: false },
  ],
};

const cases = [
  {
    tags: ["Pharma", "🇸🇳 Sénégal"],
    metric: "157 délégués actifs",
    title: "Pharveo accompagne IMS-Pharma dans le pilotage de sa force terrain au Sénégal",
    sub: "CRM pharmaceutique · En production depuis avril 2026",
    href: "https://pharveo.com",
    external: true,
    accentColor: "#0E8A8A",
    mockupBg: "linear-gradient(135deg, #062a2a 0%, #0a3d3d 40%, #0d4f4f 100%)",
    mockupContent: [
      { label: "Délégués actifs", value: "157", color: "#14B8B8" },
      { label: "Visites ce mois", value: "1 284", color: "#34d399" },
      { label: "Taux de couverture", value: "94%", color: "#60a5fa" },
    ],
    statusLabel: "Production · Avril 2026",
    statusColor: "#14B8B8",
  },
  {
    tags: ["LIS", "Q4 2026"],
    metric: "En conception",
    title: "Xakili Lab - Système d'information pour laboratoires d'analyses cliniques privés",
    sub: "LIS · Biologie médicale · Afrique francophone",
    href: "/produits/lab",
    external: false,
    accentColor: "#C2410C",
    mockupBg: "linear-gradient(135deg, #1c0a04 0%, #2d1206 40%, #3d1808 100%)",
    mockupContent: [
      { label: "Modules prévus", value: "12", color: "#fb923c" },
      { label: "Labos cibles", value: "80+", color: "#fbbf24" },
      { label: "Lancement", value: "Q4 2026", color: "#f87171" },
    ],
    statusLabel: "Conception · 2026",
    statusColor: "#fb923c",
  },
  {
    tags: ["Marketplace", "🇨🇦→🇸🇳"],
    metric: "R&D 2027",
    title: "Xakili Med - Sourcing et distribution d'équipement médical reconditionné",
    sub: "Canada → Afrique de l'Ouest · Pilote Sénégal",
    href: "/produits/med",
    external: false,
    accentColor: "#6366F1",
    mockupBg: "linear-gradient(135deg, #0a0820 0%, #120e38 40%, #1a1350 100%)",
    mockupContent: [
      { label: "Pays couverts", value: "6", color: "#818cf8" },
      { label: "Catégories", value: "24", color: "#a78bfa" },
      { label: "Lancement", value: "2027", color: "#c4b5fd" },
    ],
    statusLabel: "R&D · 2027",
    statusColor: "#818cf8",
  },
];

/* Browser mockup component */
function BrowserMockup({ bg, content, accent, statusLabel, statusColor }: {
  bg: string;
  content: { label: string; value: string; color: string }[];
  accent: string;
  statusLabel: string;
  statusColor: string;
}) {
  return (
    <div style={{
      borderRadius: "1.6rem",
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.08)",
      background: "#1a1a1a",
      boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
    }}>
      {/* Browser chrome */}
      <div style={{
        background: "#242424",
        padding: "1.2rem 1.6rem",
        display: "flex",
        alignItems: "center",
        gap: "1.2rem",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        {/* Traffic lights */}
        <div style={{ display: "flex", gap: "0.6rem" }}>
          {["#FF5F57", "#FFBD2E", "#28C840"].map(c => (
            <div key={c} style={{ width: "1.2rem", height: "1.2rem", borderRadius: "50%", background: c }} />
          ))}
        </div>
        {/* URL bar */}
        <div style={{
          flex: 1,
          background: "rgba(255,255,255,0.06)",
          borderRadius: "0.6rem",
          padding: "0.5rem 1.2rem",
          fontSize: "1.2rem",
          color: "rgba(255,255,255,0.3)",
          fontFamily: "monospace",
        }}>
          app.pharveo.com
        </div>
      </div>
      {/* Mockup content area */}
      <div style={{
        background: bg,
        padding: "3.2rem",
        minHeight: "22rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}>
        {/* Top bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: "1.4rem", fontWeight: 600, color: "rgba(255,255,255,0.9)", letterSpacing: "-0.01em" }}>
            Dashboard Pharveo
          </p>
          <span style={{
            fontSize: "1.1rem",
            fontWeight: 500,
            color: statusColor,
            background: `${statusColor}20`,
            border: `1px solid ${statusColor}40`,
            borderRadius: "10rem",
            padding: "0.3rem 1rem",
          }}>
            ● {statusLabel}
          </span>
        </div>
        {/* KPI cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.2rem" }}>
          {content.map(({ label, value, color }) => (
            <div key={label} style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "1rem",
              padding: "1.4rem",
            }}>
              <p style={{ fontSize: "2rem", fontWeight: 600, color, marginBottom: "0.4rem" }}>{value}</p>
              <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.4)" }}>{label}</p>
            </div>
          ))}
        </div>
        {/* Fake chart bar */}
        <div style={{ display: "flex", alignItems: "flex-end", gap: "0.6rem", height: "5rem", paddingTop: "1rem" }}>
          {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
            <div key={i} style={{
              flex: 1,
              height: `${h}%`,
              background: i >= 9 ? accent : `${accent}40`,
              borderRadius: "0.3rem 0.3rem 0 0",
              transition: "height 0.3s",
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Products() {
  return (
    <>
      {/* Services — arounda style: dark bg + large white card inside */}
      <section style={{
        background: "linear-gradient(180deg, #0B0B0B 0%, #0f1623 50%, #0B0B0B 100%)",
        padding: "10rem 4rem",
        position: "relative",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            width: "80rem", height: "60rem",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(30,64,175,0.1) 0%, transparent 70%)",
            top: "10%", left: "50%",
            transform: "translateX(-50%)",
            filter: "blur(60px)",
          }} />
        </div>

        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ marginBottom: "5rem" }}>
            <p className="section-tag" style={{ marginBottom: "2.4rem" }}>nos produits</p>
            <h2 style={{
              fontSize: "clamp(3.2rem, 4.5vw, 6.4rem)",
              fontWeight: 500,
              color: "#fff",
              maxWidth: "64rem",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}>
              Un produit en production.{" "}
              <em style={{ fontFamily: "var(--font-fraunces-var)", fontStyle: "italic", color: "rgba(255,255,255,0.45)" }}>Deux en route.</em>
            </h2>
          </div>

          {/* Large white card — arounda style */}
          <div style={{ background: "#fff", borderRadius: "4rem", overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
              {Object.entries(services).map(([col, items], ci) => (
                <div key={col} style={{
                  padding: "4rem",
                  borderRight: ci < 2 ? "1px solid rgba(0,0,0,0.07)" : "none",
                }}>
                  <p style={{
                    fontSize: "1.3rem", fontWeight: 500,
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    color: "rgba(20,21,21,0.3)", marginBottom: "3.2rem",
                  }}>{col}</p>
                  {items.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="service-item"
                      style={{ color: "#141515" }}
                    >
                      <span style={{ fontSize: "1.8rem", fontWeight: 500 }}>{item.name}</span>
                      <span style={{ fontSize: "1.8rem", opacity: 0.3 }}>↘</span>
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cases — arounda style: dark full-width avec mockup à droite */}
      <section style={{ background: "#0B0B0B", padding: "4rem 4rem 10rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p className="section-tag" style={{ marginBottom: "8rem" }}>nos projets</p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12rem" }}>
            {cases.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                style={{
                  display: "grid",
                  gridTemplateColumns: "42rem 1fr",
                  gap: "6rem",
                  alignItems: "center",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
                className="case-block"
              >
                {/* Left — texte */}
                <div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", marginBottom: "2rem" }}>
                    {c.tags.map(t => (
                      <span key={t} className="pill" style={{ fontSize: "1.2rem", padding: "0.4rem 1.2rem" }}>{t}</span>
                    ))}
                  </div>
                  <p style={{ fontSize: "1.3rem", color: "rgba(255,255,255,0.3)", marginBottom: "1.6rem", letterSpacing: "0.02em" }}>
                    {c.metric}
                  </p>
                  <p style={{
                    fontSize: "clamp(2rem, 2.5vw, 3rem)", fontWeight: 500,
                    color: "#fff", lineHeight: 1.25, marginBottom: "1.2rem",
                    letterSpacing: "-0.02em",
                  }}>
                    {c.title}
                  </p>
                  <p style={{ fontSize: "1.4rem", color: "rgba(255,255,255,0.35)", marginBottom: "3.2rem" }}>{c.sub}</p>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "1rem" }}>
                    <span style={{
                      fontSize: "1.5rem", fontWeight: 500,
                      color: c.accentColor,
                      display: "flex", alignItems: "center", gap: "0.6rem",
                    }}>
                      Voir le projet <span style={{ fontSize: "1.8rem" }}>↗</span>
                    </span>
                  </div>
                </div>

                {/* Right — browser mockup */}
                <BrowserMockup
                  bg={c.mockupBg}
                  content={c.mockupContent}
                  accent={c.accentColor}
                  statusLabel={c.statusLabel}
                  statusColor={c.statusColor}
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
