export function ContactCta() {
  return (
    <section style={{ background: "#0B0B0B", padding: "0 4rem 10rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            borderRadius: "4rem",
            padding: "10rem 8rem",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            background: [
              "radial-gradient(ellipse 70% 80% at 50% 120%, rgba(80,55,235,0.55) 0%, transparent 65%)",
              "radial-gradient(ellipse 50% 60% at 20% -10%, rgba(60,30,200,0.30) 0%, transparent 60%)",
              "radial-gradient(ellipse 40% 50% at 80% -5%, rgba(14,138,138,0.20) 0%, transparent 60%)",
              "#0d0d0d",
            ].join(", "),
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Bottom center glow */}
          <div style={{
            position: "absolute",
            bottom: "-4rem", left: "50%",
            transform: "translateX(-50%)",
            width: "80rem", height: "40rem",
            background: "radial-gradient(ellipse, rgba(80,55,235,0.25) 0%, transparent 65%)",
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <p className="section-tag" style={{ marginBottom: "3.2rem" }}>on travaille ensemble ?</p>

            <h2 style={{
              fontSize: "clamp(3.6rem, 6vw, 9rem)",
              fontWeight: 500,
              color: "#fff",
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              maxWidth: "88rem",
              margin: "0 auto 3.2rem",
            }}>
              Une idée.{" "}
              <em style={{
                fontFamily: "var(--font-fraunces-var)",
                fontStyle: "italic",
                background: "linear-gradient(352deg, rgb(120, 36, 226) -120%, rgb(255, 255, 255) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>Un marché.</em>{" "}
              Un problème.
            </h2>

            <p style={{
              fontSize: "clamp(1.6rem, 1.8vw, 2rem)",
              color: "rgba(255,255,255,0.4)",
              lineHeight: 1.65,
              maxWidth: "56rem",
              margin: "0 auto 5.6rem",
            }}>
              Si vous identifiez un marché vertical sous-équipé en Afrique de l&apos;Ouest francophone et que vous cherchez un studio capable de concevoir et d&apos;opérer la solution, parlons-en.
            </p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0", flexWrap: "wrap" }}>
              {/* Arounda-style pill+arrow button */}
              <div style={{ display: "flex", alignItems: "center", gap: "0" }}>
                <div style={{
                  width: "5.6rem", height: "5.6rem",
                  background: "#0E8A8A",
                  borderRadius: "50% 0 0 50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.8rem", color: "#fff",
                }}>↗</div>
                <a href="/contact" style={{
                  display: "inline-flex", alignItems: "center",
                  height: "5.6rem", padding: "0 2.8rem",
                  background: "#0E8A8A", color: "#fff",
                  fontSize: "1.6rem", fontWeight: 500,
                  borderRadius: "0 10rem 10rem 0",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  transition: "background 0.2s",
                  marginRight: "1.6rem",
                }}>
                  Nous écrire
                </a>
              </div>
              <a
                href="https://cal.com/xakili"
                target="_blank"
                rel="noopener noreferrer"
                className="pill"
                style={{ fontSize: "1.5rem", padding: "1.4rem 2.8rem", transition: "border-color 0.2s, color 0.2s" }}
              >
                Réserver 30 min →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
