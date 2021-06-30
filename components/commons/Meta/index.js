import React from 'react';
import Head from 'next/head';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const Meta = ({ nnnTitle, image, squareImage, description, pathname, ogtype, clientConfig }) => {
  const baseUrl = 'https://www.modiv.com';
  const fullPath = pathname ? baseUrl + pathname : baseUrl;
  const sharecover = image;
  const sharecoverMobile = squareImage;
  const siteName = 'Real Estate Investing for Everyone';
  const siteTitle = nnnTitle;
  const siteDescription = description;
  const titleEnding = 'Modiv';
  const ogType = ogtype || 'website';

  const facebookDomainVerification =
    publicRuntimeConfig && publicRuntimeConfig.facebook
      ? publicRuntimeConfig.facebook.domainVerification
      : '';

  const meta = [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
    { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    { charset: 'utf-8' },
    { name: 'description', content: siteDescription },
    { name: 'robots', content: 'index, follow' },
    {
      name: 'facebook-domain-verification',
      content: facebookDomainVerification,
    },
    { property: 'site_name', content: siteName },
    { property: 'og:image', content: sharecover },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:title', content: siteTitle },
    { property: 'og:description', content: siteDescription },
    { property: 'og:type', content: ogType },
    { property: 'og:url', content: fullPath },
    { property: 'og:site_name', content: titleEnding },
    { property: 'twitter:card', content: 'summary' },
    { property: 'twitter:site', content: '@' },
    { property: 'twitter:creator', content: '@' },
    { property: 'twitter:title', content: siteTitle },
    { property: 'twitter:description', content: siteDescription },
    { property: 'twitter:image', content: sharecoverMobile },
    { property: 'twitter:image:width', content: '200' },
    { property: 'twitter:image:height', content: '200' },
  ];

  return (
    <Head>
      <title>
        {siteTitle} - {titleEnding}
      </title>
      {meta.map((m, i) => (
        <meta key={i} name={m.name} property={m.property} content={m.content} />
      ))}
    </Head>
  );
};

export default Meta;
