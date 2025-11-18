import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // https://nextjs.org/docs/app/api-reference/next-config-js/reactCompiler
  reactCompiler: true,
  // https://nextjs.org/docs/app/api-reference/config/typescript#statically-typed-links
  typedRoutes: true,

  // use when building in docker
  output: "standalone",

  turbopack: {
    rules: {
      // @see https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack#configuring-webpack-loaders
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              // @see https://react-svgr.com/docs/options/#svgo
              // it will delete [viewBox]&[id]... attribute
              svgo: false,
            },
          },
        ],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
