const path = require("path");

const nextConfig = {
  webpack5: true,
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": path.resolve(__dirname, "./src"),
    };
    return config;
  },
  // Google Fonts
  experimental: {
    optimizeFonts: true,
  },
};

module.exports = nextConfig;
