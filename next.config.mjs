// @ts-check

/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    // @see
    // https://nextjs.org/docs/app/building-your-application/configuring/typescript#statically-typed-links
    typedRoutes: true,
  },
  output: "standalone",
};

export default nextConfig;
