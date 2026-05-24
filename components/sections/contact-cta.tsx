import Link from "next/link";

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
            background: "linear-gradient(145deg, #ede9f8 0%, #e4e0f5 40%, #ddd8f5 100%)",
          }}
        >
          <p
            className="section-tag"
            style={{ marginBottom: "3.2rem", color: "rgba(10,14,18,0.4)" }}
          >
            on travaille ensemble ?
          </p>

          <h2
            style={{
              fontSize: "clamp(3.6rem, 6vw, 9rem)",
              fontWeight: 500,
              color: "#0A0E12",
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              maxWidth: "88rem",
              margin: "0 auto 3.2rem",
            }}
          >
            Prêt à construire le SaaS{" "}
            <em
              style={{
                fontFamily: "var(--font-fraunces-var)",
                fontStyle: "italic",
                color: "rgba(10,14,18,0.35)",
              }}
            >
              de votre marché ?
            </em>
          </h2>

          <p
            style={{
              fontSize: "clamp(1.6rem, 1.8vw, 2rem)",
              color: "rgba(10,14,18,0.5)",
              lineHeight: 1.65,
              maxWidth: "52rem",
              margin: "0 auto 5.6rem",
            }}
          >
            Réservez un appel gratuit pour clarifier votre idée, votre marché et la
            meilleure façon d&apos;avancer ensemble.
          </p>

          {/* Teal pill+arrow — like arounda's lime button */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 0,
            }}
          >
            <div
              style={{
                width: "5.6rem",
                height: "5.6rem",
                background: "#0E8A8A",
                borderRadius: "50% 0 0 50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.8rem",
                color: "#fff",
                flexShrink: 0,
              }}
            >
              ↘
            </div>
            <a
              href="https://cal.com/xakili"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                height: "5.6rem",
                padding: "0 3.2rem",
                background: "#0E8A8A",
                color: "#fff",
                fontSize: "1.6rem",
                fontWeight: 500,
                borderRadius: "0 10rem 10rem 0",
                textDecoration: "none",
                whiteSpace: "nowrap",
                transition: "background 0.2s",
              }}
            >
              Réserver 30 min
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
