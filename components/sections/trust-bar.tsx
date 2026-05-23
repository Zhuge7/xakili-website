const clients = [
  "Next.js 15", "Tailwind CSS", "TypeScript", "PostgreSQL",
  "FastAPI", "Docker", "Supabase", "Infomaniak 🇨🇭",
  "Claude AI", "Vercel", "GitHub Actions", "Framer Motion",
];

export function TrustBar() {
  const doubled = [...clients, ...clients];

  return (
    <section style={{ background: "#0B0B0B", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "3.2rem 0" }}>
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* Left fade */}
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: "12rem", zIndex: 1,
          background: "linear-gradient(to right, #0B0B0B, transparent)",
          pointerEvents: "none",
        }} />
        {/* Right fade */}
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: "12rem", zIndex: 1,
          background: "linear-gradient(to left, #0B0B0B, transparent)",
          pointerEvents: "none",
        }} />

        <div
          style={{
            display: "flex",
            width: "max-content",
            animation: "marquee 40s linear infinite",
          }}
        >
          {doubled.map((name, i) => (
            <div
              key={`${name}-${i}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
                padding: "0 3.2rem",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              <span style={{
                width: "0.4rem", height: "0.4rem", borderRadius: "50%",
                background: "rgba(255,255,255,0.2)", flexShrink: 0,
              }} />
              <span style={{
                fontSize: "1.4rem",
                fontWeight: 500,
                color: "rgba(255,255,255,0.3)",
                letterSpacing: "0.02em",
              }}>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
