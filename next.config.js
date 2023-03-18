/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'zh', 'ru'],
    defaultLocale: 'en'
  },  
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
