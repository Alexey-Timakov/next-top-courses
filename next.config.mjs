/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "old-images.hb.ru-msk.vkcs.cloud",
      },
      {
        protocol: "https",
        hostname: "old-images.hb.ru-msk.vkcs.cloudhttp",
      },
    ],
  },
  // output: "export",
};

export default nextConfig;
