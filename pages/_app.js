import '../styles/globals.css';

import { IntlProvider } from 'react-intl';
import messagesEn from 'translations/en-common.json';
import ContentfulContextProvider from 'utils/hooks/useContentful/ContentfulContext';
import Footer from 'components/layout/Footer/Footer';
import cn from 'classnames';

import Header from 'components/layout/Header/Header';

import getConfig from 'next/config';
import { useState } from 'react';
const { publicRuntimeConfig } = getConfig();

const MyApp = ({ Component, pageProps }) => {
  const siteId = 'nnn';
  const isInvestmentProcess = true;
  const [marketingContent, setMarketingContent] = useState('');
  const [isMenuVisible, menuVisible] = useState(false);
  const [isAdminCurrently, adminCurrently] = useState(false);

  return (
    <ContentfulContextProvider contentfulConfig={publicRuntimeConfig.contentful}>
      <IntlProvider locale="en" messages={messagesEn}>
        <div
          className={cn(`current-site-${siteId}`, {
            marketingContent,
            'menu--visible scroll-lock': isMenuVisible,
            'menu--opened': isMenuVisible,
            'menu--closed': !isMenuVisible,
            'layout-admin': isAdminCurrently,
          })}
        >
          <Header
            isMenuVisible={isMenuVisible}
            menuVisible={menuVisible}
            isInvestmentProcess={isInvestmentProcess}
          />
          <Component {...pageProps} />
          <Footer />
        </div>
      </IntlProvider>
    </ContentfulContextProvider>
  );
};

export default MyApp;
