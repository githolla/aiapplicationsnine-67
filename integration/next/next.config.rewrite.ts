// Add this rewrite to the website's next.config. It serves the AI Applications files from the
// AI Applications deployment under the website's own domain, so updates appear without a rebuild.
import type { NextConfig } from 'next';

const aiApplicationsRewrite = {
  source: '/ai-applications-assets/:path*',
  destination: 'https://aiapplications.nine-67.com/site-package/:path*',
};

const nextConfig: NextConfig = {
  async rewrites() {
    return [aiApplicationsRewrite];
  },
};

export default nextConfig;
