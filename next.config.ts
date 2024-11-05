import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // @see
    // https://nextjs.org/docs/app/building-your-application/configuring/typescript#statically-typed-links
    typedRoutes: true,
  },
  output: "standalone",
};

export default nextConfig;
