"use client";

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
        padding: "16rem 4rem 7rem",
        overflow: "hidden",
      }}
    >
      {/* Arounda-style gradient blob — ellipse bas-gauche, noir pur a droite */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: [
            "radial-gradient(ellipse 38% 55% at -4% 92%, rgba(80,55,235,0.95) 0%, transparent 100%)",
            "radial-gradient(ellipse 60% 75% at -6% 68%, rgba(100,30,220,0.70) 0%, rgba(65,20,185,0.35) 45%, transparent 70%)",
            "radial-gradient(ellipse 40% 60% at 2% 35%,  rgba(75,40,190,0.40) 0%, transparent 60%)",
            "#0B0B0B",
          ].join(", "),
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "1.4rem",
            color: "rgba(255,255,255,0.35)",
            marginBottom: "2.4rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            fontWeight: 500,
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
            marginBottom: "6rem",
          }}
        >
          Le studio qui concoit les outils que{" "}
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
            les marches francophones
          </em>{" "}
          meritent vraiment.
        </motion.h1>

        {/* Bottom row — 2 colonnes {/} comme arounda, sans CTA ni tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.35 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6rem",
          }}
        >
          {/* Col 1 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}>
            <span
              style={{
                fontSize: "1.4rem",
                color: "rgba(255,255,255,0.25)",
                fontFamily: "monospace",
              }}
            >
              {"{/}"}
            </span>
            <p
              style={{
                fontSize: "1.6rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.65,
                maxWidth: "36rem",
              }}
            >
              Partenaire de conception et d&apos;operation pour des marches que
              les grands editeurs ignorent depuis toujours.
            </p>
          </div>

          {/* Col 2 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}>
            <span
              style={{
                fontSize: "1.4rem",
                color: "rgba(255,255,255,0.25)",
                fontFamily: "monospace",
              }}
            >
              {"{/}"}
            </span>
            <p
              style={{
                fontSize: "1.6rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.65,
                maxWidth: "36rem",
              }}
            >
              Pharveo en production depuis avril 2026. 157 delegues actifs.
              6 pays vises en Afrique de l&apos;Ouest francophone.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
