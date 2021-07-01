const withImages = require('next-images');

module.exports = withImages({
  webpack5: false,

  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net'],
  },

  publicRuntimeConfig: {
    contentful: {
      space: process.env.CONTENTFUL_SPACE,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      environment: process.env.CONTENTFUL_ACCESS_ENVIRONTMENT,
      host: process.env.CONTENTFUL_HOST || 'cdn.contentful.com',
    },
    facebook: {
      domainVerification: process.env.FACEBOOK_DOMAIN_VERIFICATION,
    },
  },
});
