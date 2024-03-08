/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "tailwindui.com",
      "cloudflare-ipfs.com",
      "avatars.githubusercontent.com",
    ],
  },
};

export default nextConfig;
