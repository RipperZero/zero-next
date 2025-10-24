import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // https://nextjs.org/docs/app/api-reference/next-config-js/reactCompiler
  reactCompiler: true,
  // https://nextjs.org/docs/app/api-reference/config/typescript#statically-typed-links
  typedRoutes: true,
  // output: "standalone",
};

export default nextConfig;
