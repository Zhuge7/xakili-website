import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");

  if (!process.env.DEPLOY_SECRET || token !== process.env.DEPLOY_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Réponse d'abord, puis exit pour que le process manager redémarre
  setImmediate(() => {
    setTimeout(() => {
      console.log("[deploy] Redémarrage du process...");
      process.exit(0);
    }, 300);
  });

  return NextResponse.json({
    ok: true,
    message: "Déploiement reçu - restart dans 300ms",
    timestamp: new Date().toISOString(),
  });
}
