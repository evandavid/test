import intlData from 'utils/formats';
import { IntlProvider } from 'react-intl';
import React from 'react';
import PropTypes from 'prop-types';

const LanguageProvider = ({ children, locale, messages }) => (
  <IntlProvider
    formats={intlData[locale]}
    locale={locale}
    key={locale}
    messages={messages[locale]}
  >
    {React.Children.only(children)}
  </IntlProvider>
);

LanguageProvider.propTypes = {
  children: PropTypes.element,
  locale: PropTypes.string,
  messages: PropTypes.object,
};

export default LanguageProvider;
