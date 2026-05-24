"use client";

import { useState } from "react";

const testimonials = [
  {
    logo: "IMS",
    logoColor: "#0E8A8A",
    company: "IMS-Pharma Sénégal",
    role: "Direction Générale",
    quote:
      "Xakili nous a accompagnés pendant 18 mois sur Pharveo. La ou on attendait un prestataire, on a eu un partenaire qui connait le metier mieux que la plupart des consultants pharma qu'on a croises a Dakar.",
    rating: 5,
    tag: "Premier client Pharveo",
  },
  {
    logo: "DP",
    logoColor: "#6366F1",
    company: "Distributeur pharmaceutique",
    role: "Dakar - Mai 2026",
    quote:
      "Ce qui distingue Xakili, c'est leur capacite a tenir bon sur leurs principes meme quand c'est inconfortable. Ils n'ont pas dilue Pharveo pour faire plaisir. Ca inspire confiance.",
    rating: 5,
    tag: "Partenaire distribution",
  },
  {
    logo: "CS",
    logoColor: "#C2410C",
    company: "Consultant sante publique",
    role: "Senegal - Avril 2026",
    quote:
      "Beaucoup d'editeurs SaaS pretendent comprendre l'Afrique francophone. Xakili est l'un des rares qui y vient vraiment, qui parle aux equipes terrain, qui ecoute.",
    rating: 5,
    tag: "Expert sante publique",
  },
];

const clients = [
  {
    name: "Pharveo",
    sub: "CRM Pharmaceutique",
    color: "#0E8A8A",
    initials: "℞",
    href: "https://pharveo.com",
  },
  {
    name: "IMS-Pharma",
    sub: "Sénégal - Premier client",
    color: "#14B8B8",
    initials: "IMS",
    href: "#",
  },
  {
    name: "Xakili Lab",
    sub: "LIS - En conception",
    color: "#C2410C",
    initials: "⚗",
    href: "/produits/lab",
  },
  {
    name: "Xakili Med",
    sub: "Équipement reconditionné",
    color: "#6366F1",
    initials: "⚕",
    href: "/produits/med",
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div style={{ display: "flex", gap: "0.4rem" }}>
      {[...Array(count)].map((_, i) => (
        <span key={i} style={{ color: "#0E8A8A", fontSize: "1.6rem" }}>
          ★
        </span>
      ))}
    </div>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section style={{ background: "#0B0B0B", padding: "10rem 4rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <p className="section-tag" style={{ marginBottom: "2rem" }}>
          temoignages verifies
        </p>
        <h2
          style={{
            fontSize: "clamp(3.2rem, 4.5vw, 6.4rem)",
            fontWeight: 500,
            color: "#fff",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            maxWidth: "80rem",
            marginBottom: "6rem",
          }}
        >
          Ce que disent{" "}
          <em
            style={{
              fontFamily: "var(--font-fraunces-var)",
              fontStyle: "italic",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            nos premiers partenaires
          </em>{" "}
          sur le terrain
        </h2>

        {/* Two columns — arounda layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "30rem 1fr",
            gap: "2rem",
            alignItems: "stretch",
          }}
        >
          {/* Left — client logo cards (like arounda) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            {clients.map((c, i) => (
              <a
                key={c.name}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  c.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                onClick={(e) => {
                  if (i < testimonials.length) {
                    e.preventDefault();
                    setActive(i);
                  }
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.6rem",
                  padding: "2rem 2.4rem",
                  background: active === i ? "#1C1C1C" : "rgba(255,255,255,0.03)",
                  border: `1px solid ${active === i ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)"}`,
                  borderRadius: "1.6rem",
                  textDecoration: "none",
                  transition: "background 0.2s, border-color 0.2s",
                  cursor: i < testimonials.length ? "pointer" : "default",
                }}
              >
                <div
                  style={{
                    width: "4.4rem",
                    height: "4.4rem",
                    borderRadius: "1rem",
                    background: c.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#fff",
                    flexShrink: 0,
                  }}
                >
                  {c.initials}
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      color: "#fff",
                    }}
                  >
                    {c.name}
                  </p>
                  <p
                    style={{
                      fontSize: "1.2rem",
                      color: "rgba(255,255,255,0.35)",
                    }}
                  >
                    {c.sub}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Right — big teal featured card (like arounda's lime card) */}
          <div
            style={{
              background: "#0E8A8A",
              borderRadius: "2.8rem",
              padding: "5.6rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "4rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Subtle inner gradient */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "40rem",
                height: "40rem",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>
              {/* Rating */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.2rem",
                  marginBottom: "3.2rem",
                }}
              >
                <Stars />
                <span
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.7)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {t.tag}
                </span>
              </div>

              {/* Quote */}
              <p
                style={{
                  fontSize: "clamp(2rem, 2.4vw, 2.8rem)",
                  fontFamily: "var(--font-fraunces-var)",
                  fontStyle: "italic",
                  color: "#fff",
                  lineHeight: 1.5,
                  letterSpacing: "-0.01em",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            {/* Footer row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                position: "relative",
                zIndex: 1,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1.4rem" }}>
                <div
                  style={{
                    width: "5rem",
                    height: "5rem",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#fff",
                    flexShrink: 0,
                  }}
                >
                  {t.logo}
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: 600,
                      color: "#fff",
                    }}
                  >
                    {t.role}
                  </p>
                  <p
                    style={{
                      fontSize: "1.3rem",
                      color: "rgba(255,255,255,0.65)",
                    }}
                  >
                    {t.company}
                  </p>
                </div>
              </div>

              {/* Prev / Next */}
              <div style={{ display: "flex", gap: "1rem" }}>
                {[
                  { dir: "↑", action: () => setActive((active - 1 + testimonials.length) % testimonials.length) },
                  { dir: "↓", action: () => setActive((active + 1) % testimonials.length) },
                ].map(({ dir, action }) => (
                  <button
                    key={dir}
                    onClick={action}
                    style={{
                      width: "4.4rem",
                      height: "4.4rem",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.15)",
                      border: "none",
                      cursor: "pointer",
                      color: "#fff",
                      fontSize: "1.6rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "background 0.2s",
                    }}
                  >
                    {dir}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
