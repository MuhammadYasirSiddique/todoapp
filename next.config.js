/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {appDir: true},
  async rewrites(){
    return[
      {
      source: "/api/:path*",
      destination: "https://json-api-topaz-omega.vercel.app/api/:path*",
    },
  ];
},
};

module.exports = nextConfig
