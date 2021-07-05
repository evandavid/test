const withImages = require('next-images');
const withConfig = require('next-config');

module.exports = withImages(
  withConfig({
    webpack5: false,

<<<<<<< HEAD
    reactStrictMode: true,
    images: {
      loader: 'cloudinary',
      domains: ['images.ctfassets.net', 'res.cloudinary.com'],
    },
=======
      reactStrictMode: true,
      images: {
        loader: 'cloudinary',
        domains: ['images.ctfassets.net', 'res.cloudinary.com'],
      },
>>>>>>> ee8a046a33cb17be64698335f60d9a08038684d0

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
  })
);
