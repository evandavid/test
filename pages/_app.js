import '../styles/globals.css';

import { IntlProvider } from 'react-intl';
import messagesEn from 'translations/en-common.json';
import ContentfulContextProvider from 'utils/hooks/useContentful/ContentfulContext';
import Footer from 'components/layout/Footer/Footer';

import Header from 'components/layout/Header/Header';

import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const MyApp = ({ Component, pageProps }) => {
  const isInvestmentProcess = true;
  return (
    <ContentfulContextProvider contentfulConfig={publicRuntimeConfig.contentful}>
      <IntlProvider locale="en" messages={messagesEn}>
        {/* <Header isInvestmentProcess={isInvestmentProcess} /> */}
        <Component {...pageProps} />
        <Footer />
      </IntlProvider>
    </ContentfulContextProvider>
  );
};

export default MyApp;
