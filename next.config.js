/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en'
  },  
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
