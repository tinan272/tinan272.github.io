import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export", // enable static export

    images: {
        unoptimized: true, // disable image optimization (required for static export)
    },
};

export default nextConfig;
