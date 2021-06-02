const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
  },
  future: {
    webpack5: true,
  },
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
      {
        source: "/auth",
        destination: "/auth/sign-in",
        permanent: true,
      },
    ];
  },
});
