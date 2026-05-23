"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target, duration]);

  return { count, ref };
}

const stats = [
  { prefix: "+", value: 170, suffix: "%",     label: "Engagement Rate",  sub: "après déploiement Pharveo" },
  { prefix: "",  value: 18,  suffix: " mois",  label: "Terrain à Dakar",  sub: "avant la 1re ligne de code" },
  { prefix: "",  value: 157, suffix: "",       label: "Délégués actifs",  sub: "utilisateurs quotidiens" },
  { prefix: "",  value: 6,   suffix: "",       label: "Pays visés",       sub: "Afrique de l'Ouest francophone" },
];

function GhostStat({ prefix, value, suffix, label, sub }: typeof stats[0]) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: "2.4rem" }}>
      {/* Giant ghost number */}
      <p style={{
        fontSize: "clamp(7rem, 11vw, 18rem)",
        fontWeight: 500,
        color: "rgba(255,255,255,0.13)",
        lineHeight: 0.9,
        letterSpacing: "-0.03em",
        margin: 0,
      }}>
        {prefix}{count}{suffix}
      </p>
      {/* Label below */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.6rem" }}>
        <p style={{ fontSize: "1.8rem", fontWeight: 500, color: "#fff", marginBottom: "0.4rem" }}>{label}</p>
        <p style={{ fontSize: "1.4rem", color: "rgba(255,255,255,0.38)" }}>{sub}</p>
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <section style={{
      position: "relative",
      overflow: "hidden",
      padding: "12rem 4rem 10rem",
      background: "#0B0B0B",
    }}>
      {/* Gradient côté DROIT — comme arounda results section */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute",
          width: "80rem", height: "80rem",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(60,40,220,0.55) 0%, rgba(40,20,180,0.3) 35%, transparent 65%)",
          top: "-10rem", right: "-15rem",
          filter: "blur(40px)",
        }} />
        <div style={{
          position: "absolute",
          width: "50rem", height: "60rem",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(30,20,160,0.4) 0%, transparent 70%)",
          bottom: "0", right: "10%",
          filter: "blur(60px)",
        }} />
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ marginBottom: "8rem" }}>
          <p className="section-tag" style={{ marginBottom: "2rem" }}>résultats</p>
          <h2 style={{
            fontSize: "clamp(3.2rem, 4.5vw, 6.4rem)",
            fontWeight: 500,
            color: "#fff",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            maxWidth: "72rem",
          }}>
            Xakili, le choix évident pour{" "}
            <em style={{
              fontFamily: "var(--font-fraunces-var)",
              fontStyle: "italic",
              background: "linear-gradient(352deg, rgb(120, 36, 226) -120%, rgb(255, 255, 255) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>les marchés francophones</em>
          </h2>
        </div>

        {/* Giant ghost numbers — arounda style */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "4rem",
        }}>
          {stats.map((s) => <GhostStat key={s.label} {...s} />)}
        </div>

        {/* Mini CTA banner */}
        <div style={{
          marginTop: "8rem",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "2rem",
          padding: "3.2rem 4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
          flexWrap: "wrap",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <div style={{
              width: "5.6rem", height: "5.6rem", borderRadius: "50%",
              background: "linear-gradient(135deg, #0E8A8A, #14B8B8)",
              flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "2rem", fontWeight: 700, color: "#fff",
            }}>Z</div>
            <div>
              <p style={{ fontSize: "1.5rem", fontWeight: 600, color: "#fff" }}>Zhuge</p>
              <p style={{ fontSize: "1.3rem", color: "rgba(255,255,255,0.4)" }}>Fondateur & CEO · Xakili Inc.</p>
            </div>
          </div>
          <p style={{ fontSize: "1.8rem", color: "rgba(255,255,255,0.7)", flex: 1, minWidth: "24rem", lineHeight: 1.5 }}>
            Construisons ensemble le SaaS que votre marché attend depuis des années.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "1.2rem", flexShrink: 0 }}>
            <span className="arrow-badge">↗</span>
            <a href="/contact" className="btn-teal">Nous écrire</a>
          </div>
        </div>
      </div>
    </section>
  );
}
