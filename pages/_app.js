import '../styles/globals.css';

import { IntlProvider } from 'react-intl';
import messagesEn from '../translations/en-common.json';
import ContentfulContextProvider from '../utils/hooks/useContentful/ContentfulContext';

function MyApp({ Component, pageProps, contentful }) {
  return (
    <ContentfulContextProvider contentfulConfig={contentful}>
      <IntlProvider locale="en" messages={messagesEn}>
        <Component {...pageProps} />
      </IntlProvider>
    </ContentfulContextProvider>
  );
}

MyApp.getInitialProps = async () => {
  return {
    contentful: {
      space: process.env.CONTENTFUL_SPACE,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      environment: process.env.CONTENTFUL_ACCESS_ENVIRONTMENT,
      host: process.env.CONTENTFUL_HOST || 'cdn.contentful.com',
    },
  };
};

export default MyApp;
