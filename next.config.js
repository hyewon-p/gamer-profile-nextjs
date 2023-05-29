/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  basePath: "/gamer-profile",
};

module.exports = {
  // reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    API_URL: process.env.API_URL,
    BASE_URL: process.env.BASE_URL,
  },

  async rewrites() {
    return [
      {
        source: process.env.SOURCE_PATH,
        destination: process.env.DESTINATION_URL,
      },
    ];
  },
};
