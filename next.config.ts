import type { NextConfig } from 'next';

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline'
    https://www.googletagmanager.com
    https://www.google-analytics.com
    https://static.cloudflareinsights.com;
  style-src 'self' 'unsafe-inline'
    https://fonts.googleapis.com;
  font-src 'self'
    https://fonts.gstatic.com
    data:;
  img-src 'self'
    data:
    blob:
    https:;
  connect-src 'self'
    https://www.google-analytics.com
    https://analytics.google.com
    https://www.googletagmanager.com
    https://*.supabase.co;
  frame-src
    https://www.youtube.com
    https://www.youtube-nocookie.com
    https://calendly.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  upgrade-insecure-requests;
`
  .replace(/\n/g, ' ')
  .trim();

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy,
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin',
  },
  {
    key: 'Cross-Origin-Resource-Policy',
    value: 'same-origin',
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
