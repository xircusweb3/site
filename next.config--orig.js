/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'zh', 'ru', 'jp', 'ko', 'es', 'pt', 'ar', 'th', 'vi', 'tr'],
    defaultLocale: 'en'
  },  
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
