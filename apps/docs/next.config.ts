import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  experimental: {
    mdxRs: true,
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  turbopack: {
    rules: {
      // Required for MDX support in Turbopack
      "*.mdx": {
        loaders: ["@next/mdx/turbopack-loader"],
      },
    },
  },
};

export default withMDX(nextConfig);
