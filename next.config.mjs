/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
  },
  trailingSlash: true,
  assetPrefix: "https://runfortree-d2cf97.spheron.app",
}


export default nextConfig
