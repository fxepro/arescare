import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root to this app — there are stray lockfiles higher up.
  turbopack: {
    root: path.resolve(import.meta.dirname),
  },
};

export default nextConfig;
