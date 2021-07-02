const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

module.exports = withPlugins([
  [
    withImages,
    {
      webpack5: false,

      reactStrictMode: true,
      images: {
        loader: 'cloudinary',
        domains: ['images.ctfassets.net', 'res.cloudinary.com'],
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
    },
  ],
]);
