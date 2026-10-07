import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  sassOptions: {
    // Lets modules do `@use "mixins" as *;`
    loadPaths: [path.join(process.cwd(), "src/styles")],
  },
};

export default nextConfig;
