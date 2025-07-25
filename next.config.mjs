/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    distDir: "out",
    images: {
        unoptimized: true,
    },
    trailingSlash: true, // important for GitHub Pages
};

module.exports = nextConfig;
