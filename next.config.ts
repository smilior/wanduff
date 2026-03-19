import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/", destination: "/mock/index.html" },
      { source: "/home", destination: "/mock/home.html" },
      { source: "/help", destination: "/mock/help.html" },
      { source: "/about", destination: "/mock/about.html" },
      { source: "/contact", destination: "/mock/contact.html" },
    ];
  },
};

export default nextConfig;
