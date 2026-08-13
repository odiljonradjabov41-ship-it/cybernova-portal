import type { NextConfig } from "next";

const securityHeaders = [
  // 1. Strict-Transport-Security (HTTPS majburiy qilish)
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // 2. Referrer-Policy
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // 3. Permissions-Policy (Ishlatilmaydigan kamera/geolokatsiyani cheklash)
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(self), geolocation=()",
  },
  // 4. Content-Security-Policy (XSS xujumlaridan ximoya qilish)
  {
    key: "Content-Security-Policy-Report-Only",
    value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; connect-src 'self' https:;",
  },
  // Extra: Clickjacking'ga qarshi
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;