const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const path = require("path");
const fs = require("fs");

const port = parseInt(process.env.PORT || "3000", 10);
const app = next({ dev: false });
const handle = app.getRequestHandler();

// MIME types for static assets
const mime = {
  ".css":   "text/css; charset=utf-8",
  ".js":    "application/javascript; charset=utf-8",
  ".mjs":   "application/javascript; charset=utf-8",
  ".json":  "application/json",
  ".woff":  "font/woff",
  ".woff2": "font/woff2",
  ".svg":   "image/svg+xml",
  ".png":   "image/png",
  ".jpg":   "image/jpeg",
  ".ico":   "image/x-icon",
  ".map":   "application/json",
};

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    // Serve /xk/_next/static/ files that nginx blocks at /_next/
    if (pathname && pathname.startsWith("/xk/_next/static/")) {
      const relativePath = pathname.replace("/xk/_next/static/", "");
      const filePath = path.join(__dirname, ".next", "static", relativePath);

      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        res.setHeader("Content-Type", mime[ext] || "application/octet-stream");
        res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
        res.statusCode = 200;
        fs.createReadStream(filePath).pipe(res);
        return;
      }
    }

    // All other requests go through Next.js
    handle(req, res, parsedUrl);
  }).listen(port, () => {
    console.log(`> xakili.com on port ${port}`);
  });
});
