/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  images: {
    domains: [
      "images.unsplash.com",
      "tailwindui.com",
      "cloudflare-ipfs.com",
      "avatars.githubusercontent.com",
    ],
  },
};
