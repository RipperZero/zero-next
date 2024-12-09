import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // @see
    // https://nextjs.org/docs/app/building-your-application/configuring/typescript#statically-typed-links
    typedRoutes: true,
    // https://nextjs.org/docs/app/api-reference/next-config-js/reactCompiler
    reactCompiler: true,
  },
  output: "standalone",
};

export default nextConfig;
