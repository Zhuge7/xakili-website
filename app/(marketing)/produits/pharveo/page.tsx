import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ExternalLink, CheckCircle, ArrowRight } from "lucide-react";

const modules = [
  "Gestion des délégués médicaux",
  "Planification des visites terrain",
  "Suivi des produits et échantillons",
  "Rapports hebdomadaires automatisés",
  "CRM médecins et pharmacies",
  "Tableau de bord direction",
  "Gestion des objectifs commerciaux",
  "Module conformité ARP",
  "Exports et analytiques avancés",
];

export default function PharveoPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-14 bg-paper">
        {/* Hero produit */}
        <section className="py-20 border-b border-mist">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white text-2xl"
                style={{ background: "var(--teal)" }}
              >
                ℞
              </span>
              <div>
                <p className="text-xs text-stone/50 uppercase tracking-widest">
                  Produit Xakili
                </p>
                <h1 className="text-2xl font-bold text-ink">Pharveo</h1>
              </div>
              <span className="ml-auto inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full" style={{ background: "rgba(5,150,105,0.1)", color: "var(--emerald)" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
                En production · Avril 2026
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight mb-5">
              CRM pharmaceutique conçu{" "}
              <em className="font-fraunces italic">pour le terrain africain.</em>
            </h2>

            <p className="text-stone text-lg leading-relaxed mb-8 max-w-2xl">
              Pharveo est le logiciel de pilotage pour les agences de
              représentation pharmaceutique et leurs délégués médicaux en
              Afrique de l'Ouest. Conçu après 18 mois de terrain à Dakar.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://pharveo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white transition-opacity hover:opacity-90"
                style={{ background: "var(--teal)" }}
              >
                Visiter pharveo.com
                <ExternalLink size={14} />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-ink border border-mist hover:bg-paper-deep transition-colors"
              >
                Demander une démo
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-paper-deep border-b border-mist">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { value: "9", label: "Modules en production" },
                { value: "17", label: "Délégués actifs" },
                { value: "3", label: "Pays couverts" },
                { value: "Avr. 2026", label: "Mise en production" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-bold text-ink font-fraunces">{s.value}</p>
                  <p className="text-xs text-stone/60 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modules */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h3 className="text-xl font-semibold text-ink mb-6">
              9 modules en production
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {modules.map((m) => (
                <div
                  key={m}
                  className="flex items-center gap-3 bg-paper-deep border border-mist rounded-xl px-4 py-3"
                >
                  <CheckCircle size={15} style={{ color: "var(--teal)" }} className="shrink-0" />
                  <span className="text-sm text-stone">{m}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-ink rounded-2xl p-6 text-center">
              <p className="text-paper/70 text-sm mb-4">
                Pour accéder à la démo complète et aux tarifs, visitez le site
                Pharveo.
              </p>
              <a
                href="https://pharveo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium"
                style={{ color: "var(--teal-bright)" }}
              >
                pharveo.com ↗
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
