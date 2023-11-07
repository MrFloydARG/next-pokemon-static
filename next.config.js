/** @type {import('next').NextConfig} */
// Dentro de domains están los sitios que se consideran seguros para obtener imagenes

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
  },
};

module.exports = nextConfig;
