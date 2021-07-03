// import { addLocaleData } from 'react-intl';
import languages from 'utils/languages';
// import enLocaleData from 'react-intl/locale-data/en';
// import zhLocaleData from 'react-intl/locale-data/zh';
require('@formatjs/intl-pluralrules/polyfill')
require('@formatjs/intl-pluralrules/locale-data/de')
require('@formatjs/intl-pluralrules/locale-data/zh')
import moment from 'moment';
import enTranslationMessages from 'utils/translations/en-common';

import 'core-js/stable';

export const LOCALE_EN = languages.getDefaultLanguage().id;
export const DEFAULT_LOCALE = LOCALE_EN;

moment.locale(DEFAULT_LOCALE);

// addLocaleData(enLocaleData);
// addLocaleData(zhLocaleData);

// this function is probably useless
export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
      : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  }, {});
};

export const translationMessages = sourceMessages => ({
  [DEFAULT_LOCALE]: formatTranslationMessages(DEFAULT_LOCALE, sourceMessages),
});
