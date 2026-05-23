"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Send, CheckCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Nom requis (2 caractères minimum)"),
  email: z.string().email("Adresse email invalide"),
  subject: z.string().min(1, "Veuillez choisir un sujet"),
  message: z.string().min(20, "Message trop court (20 caractères minimum)"),
});

type FormData = z.infer<typeof schema>;

const subjects = [
  "Discuter d'une idée de produit",
  "Partenariat ou investissement",
  "Pharveo - démo ou informations",
  "Presse ou médias",
  "Autre",
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Erreur serveur");
      setSent(true);
    } catch {
      setError("Une erreur est survenue. Écrivez-nous directement à zhuge@xakili.com.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-14 bg-paper">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-20">
          {/* Header */}
          <div className="mb-10">
            <p className="section-label mb-3">Contact</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-ink mb-3">
              Parlons de{" "}
              <em className="font-fraunces italic">votre idée.</em>
            </h1>
            <p className="text-stone text-base leading-relaxed">
              Ou écrivez-nous directement à{" "}
              <a
                href="mailto:zhuge@xakili.com"
                className="text-teal hover:underline"
              >
                zhuge@xakili.com
              </a>
            </p>
          </div>

          {sent ? (
            <div className="bg-paper-deep border border-mist rounded-2xl p-10 text-center">
              <CheckCircle
                size={40}
                className="mx-auto mb-4"
                style={{ color: "var(--emerald)" }}
              />
              <h2 className="text-xl font-semibold text-ink mb-2">
                Message envoyé !
              </h2>
              <p className="text-stone text-sm">
                Nous reviendrons vers vous dans les 48h (jours ouvrés).
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
              noValidate
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-ink mb-1.5">
                  Nom complet
                </label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Votre nom"
                  className="w-full bg-paper-deep border border-mist rounded-xl px-4 py-3 text-sm text-ink placeholder:text-stone/40 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
                />
                {errors.name && (
                  <p className="text-rose text-xs mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-ink mb-1.5">
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="vous@exemple.com"
                  className="w-full bg-paper-deep border border-mist rounded-xl px-4 py-3 text-sm text-ink placeholder:text-stone/40 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
                />
                {errors.email && (
                  <p className="text-rose text-xs mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-ink mb-1.5">
                  Sujet
                </label>
                <select
                  {...register("subject")}
                  className="w-full bg-paper-deep border border-mist rounded-xl px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
                >
                  <option value="">Choisissez un sujet…</option>
                  {subjects.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                {errors.subject && (
                  <p className="text-rose text-xs mt-1">{errors.subject.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-ink mb-1.5">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  rows={6}
                  placeholder="Décrivez votre projet, votre marché, votre besoin…"
                  className="w-full bg-paper-deep border border-mist rounded-xl px-4 py-3 text-sm text-ink placeholder:text-stone/40 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors resize-none"
                />
                {errors.message && (
                  <p className="text-rose text-xs mt-1">{errors.message.message}</p>
                )}
              </div>

              {error && (
                <p className="text-rose text-sm bg-rose/5 border border-rose/20 rounded-lg px-4 py-3">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 bg-ink text-paper font-medium text-sm px-6 py-3.5 rounded-xl hover:bg-stone transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Envoi en cours…" : "Envoyer le message"}
                <Send size={14} />
              </button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
