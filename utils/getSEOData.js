import { createClient } from 'contentful';
const getSEOData = async (url, contentfulConfig) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let seo = {};
  try {
    /* eslint-disable camelcase */
    const flattenImages = seoData => {
      const seoCopy = { ...seoData };
      seoCopy.image = seoCopy?.image?.fields?.file?.url ?? '';
      seoCopy.brixImage = seoCopy?.brixImage?.fields?.file?.url ?? '';
      seoCopy.squareImage = seoCopy?.squareImage?.fields?.file?.url ?? '';
      seoCopy.brixSquareImage = seoCopy?.brixSquareImage?.fields?.file?.url ?? '';
      return seoCopy;
    };

    const parseResponse = entries => entries.items.map(item => item.fields);

    const contentfulClient = createClient(contentfulConfig);

    const defaultResponse = await contentfulClient.getEntries({
      content_type: 'seo',
      'fields.page': '/',
    });

    let pageSeo = {};

    if (url !== '/') {
      const pageResponse = await contentfulClient.getEntries({
        content_type: 'seo',
        'fields.page': url,
      });
      const pageData = parseResponse(pageResponse);
      pageSeo = pageData && flattenImages(pageData.find(field => field.page === url) || {});
    }

    const defaultData = parseResponse(defaultResponse);

    const defaultSeo =
      defaultData && flattenImages(defaultData.find(field => field.page === '/') || {});

    seo = { ...defaultSeo, ...pageSeo };
    /* eslint-enable camelcase */
    // eslint-disable-next-line no-empty
  } catch (e) {
    console.log(e);
  }

  return Promise.resolve(seo);
};

export default getSEOData;
