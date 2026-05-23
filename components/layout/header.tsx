"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "Produits", href: "/produits" },
  { label: "Studio", href: "/studio" },
  { label: "À propos", href: "/a-propos" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        transition: "background 0.3s, backdrop-filter 0.3s",
        background: scrolled ? "rgba(11,11,11,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        padding: "0",
      }}
    >
      <div style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "2.4rem 4rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Logo */}
        <Link href="/" style={{
          fontSize: "2rem", fontWeight: 600,
          color: "#fff", textDecoration: "none", letterSpacing: "-0.02em",
        }}>
          xakili
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "0.4rem" }} className="hidden md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://pharveo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-ext-link"
          >
            Pharveo ↗
          </a>
          <Link href="/contact" style={{
            display: "inline-flex", alignItems: "center", gap: 0,
            textDecoration: "none",
          }}>
            <span style={{
              height: "4.2rem", padding: "0 2rem",
              background: "#fff", color: "#141515",
              fontSize: "1.5rem", fontWeight: 500,
              borderRadius: "10rem 0 0 10rem",
              display: "inline-flex", alignItems: "center",
              whiteSpace: "nowrap",
            }}>Nous écrire</span>
            <span style={{
              width: "4.2rem", height: "4.2rem",
              background: "#141515", color: "#fff",
              borderRadius: "0 10rem 10rem 0",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.4rem",
            }}>↗</span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          style={{
            width: "4rem", height: "4rem",
            display: "flex", alignItems: "center", justifyContent: "center",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            border: "none", cursor: "pointer", color: "#fff",
          }}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden"
        style={{
          overflow: "hidden",
          maxHeight: open ? "36rem" : "0",
          transition: "max-height 0.3s ease",
          background: "rgba(11,11,11,0.96)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div style={{ padding: "2rem 4rem 3rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                fontSize: "1.6rem", color: "rgba(255,255,255,0.7)",
                textDecoration: "none", padding: "1.2rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-teal"
            style={{ marginTop: "1.6rem", justifyContent: "center" }}
            onClick={() => setOpen(false)}
          >
            Nous écrire →
          </Link>
        </div>
      </div>
    </header>
  );
}
