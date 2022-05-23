/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: [
      "links.papareact.com",
      "fakestoreapi.com",
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
    ],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};
