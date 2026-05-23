"use client";

import Link from "next/link";
import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section
      style={{
        position: "relative",
        background: "#0B0B0B",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "16rem 4rem 6rem",
        overflow: "hidden",
      }}
    >
      {/* Arounda-style gradient — blob elliptique bas-gauche, noir pur à droite */}
      <div style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        background: [
          "radial-gradient(ellipse 38% 55% at -4% 92%, rgba(80,55,235,0.95) 0%, transparent 100%)",
          "radial-gradient(ellipse 60% 75% at -6% 68%, rgba(100,30,220,0.70) 0%, rgba(65,20,185,0.35) 45%, transparent 70%)",
          "radial-gradient(ellipse 40% 60% at 2% 35%,  rgba(75,40,190,0.40) 0%, transparent 60%)",
          "#0B0B0B",
        ].join(", "),
      }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "1.4rem",
            color: "rgba(255,255,255,0.45)",
            marginBottom: "2.4rem",
            letterSpacing: "0.04em",
          }}
        >
          Studio SaaS franco-canadien
        </motion.p>

        {/* H1 — arounda massive style */}
        <motion.h1
          className="text-h1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          style={{
            color: "#fff",
            marginBottom: "5rem",
          }}
        >
          Le studio qui conçoit les outils que{" "}
          <span className="hero-word-pill">les marchés</span>{" "}
          <span className="hero-word-pill">francophones</span>{" "}
          méritent{" "}
          <em style={{
            fontFamily: "var(--font-fraunces-var)",
            fontStyle: "italic",
            background: "linear-gradient(352deg, rgb(120, 36, 226) -120%, rgb(255, 255, 255) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>vraiment.</em>
        </motion.h1>

        {/* Bottom row — arounda layout: 2 cols + tags + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.35 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr auto",
            gap: "4rem",
            alignItems: "flex-end",
          }}
          className="flex flex-col md:grid"
        >
          {/* Col 1 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}>
            <span style={{ fontSize: "1.4rem", color: "rgba(255,255,255,0.35)", fontFamily: "monospace" }}>{"{/}"}</span>
            <p style={{ fontSize: "1.6rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.6, maxWidth: "32rem" }}>
              Partenaire de conception et d&apos;opération pour des marchés que les grands éditeurs ignorent.
            </p>
            {/* Industry tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", marginTop: "0.8rem" }}>
              {["SaaS", "Pharma", "Labo", "Afrique"].map((tag) => (
                <span key={tag} className="pill" style={{ fontSize: "1.3rem", padding: "0.5rem 1.4rem" }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}>
            <span style={{ fontSize: "1.4rem", color: "rgba(255,255,255,0.35)", fontFamily: "monospace" }}>{"{/}"}</span>
            <p style={{ fontSize: "1.6rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.6, maxWidth: "32rem" }}>
              Pharveo en production depuis avril 2026. 157 délégués actifs. 6 pays visés en Afrique de l&apos;Ouest.
            </p>
          </div>

          {/* CTA — style arounda: arrow badge carré attaché + pill texte */}
          <div style={{ display: "flex", alignItems: "center", gap: "0", flexShrink: 0 }}>
            <div style={{
              width: "6rem", height: "6rem",
              background: "#0E8A8A",
              borderRadius: "50% 0 0 50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "2rem", color: "#fff",
              flexShrink: 0,
            }}>↗</div>
            <Link href="/contact" style={{
              display: "inline-flex", alignItems: "center",
              height: "6rem", padding: "0 2.8rem",
              background: "#0E8A8A", color: "#fff",
              fontSize: "1.6rem", fontWeight: 500,
              borderRadius: "0 10rem 10rem 0",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "background 0.2s",
            }}>
              Nous écrire
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
