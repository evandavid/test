import '../styles/globals.css';

import { IntlProvider } from 'react-intl';
import messagesEn from '../translations/en-common.json';
import ContentfulContextProvider from '../utils/hooks/useContentful/ContentfulContext';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const MyApp = ({ Component, pageProps }) => {
  return (
    <ContentfulContextProvider contentfulConfig={publicRuntimeConfig.contentful}>
      <IntlProvider locale="en" messages={messagesEn}>
        <Component {...pageProps} />
      </IntlProvider>
    </ContentfulContextProvider>
  );
};

export default MyApp;
