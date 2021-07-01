const findKey = require('lodash/findKey');
const keys = require('lodash/keys');
const forOwn = require('lodash/forOwn');
const isString = require('lodash/isString');

const defaultLanguageId = 'en';

const languages = {
  en: { id: 'en', countryAbbr: 'US', country: 'United States', name: 'US-English', localeName: 'US-English', isSupported: true },
  de: { id: 'de', countryAbbr: 'DE', country: 'Germany', name: 'German', localeName: 'Deutsche', isSupported: false },
  zh: { id: 'zh', countryAbbr: 'CN', country: 'China', name: 'Mandarin', localeName: '中文', isSupported: true },
};

const serverMessagePrefix = 'api.';
const commonMessagePrefix = 'common.';

const findLanguage = (value, searchBy) => {
  const key = findKey(languages, language => language[searchBy] === value);
  return languages[key];
};

const getLanguageById = id => findLanguage(id, 'id');

const getLanguageByName = name => findLanguage(name, 'name');

const getLanguageByCountryAbbr = language => findLanguage(language, 'countryAbbr');

const getLanguageByLocaleName = localeName => findLanguage(localeName, 'localeName');

const getLanguageIds = () => keys(languages).map(key => languages[key].id);

const getDefaultLanguage = () => getLanguageById(defaultLanguageId);

const getDefaultDeveloperEmailLanguage = () => getDefaultLanguage();

const detectUserLanguageId = (primaryLanguageId, secondaryLanguage) => {
  if (primaryLanguageId) {
    return primaryLanguageId;
  } else if (secondaryLanguage && secondaryLanguage.id) {
    return secondaryLanguage.id;
  }
  return getDefaultLanguage().id;
};

const isTranslatableKey = (key, prefix) => isString(key) && Boolean(prefix.find(value => key.startsWith(value)));
const isServerTranslatableKey = key => {
  const apiMessagePrefix = [serverMessagePrefix, commonMessagePrefix];
  return isTranslatableKey(key, apiMessagePrefix);
};

const isClientTranslatableKey = key => {
  const apiMessagePrefix = [serverMessagePrefix];
  return !apiMessagePrefix.find(value => key.startsWith(value));
};

const getSupportedLanguages = () => {
  const supportedLanguages = {};
  forOwn(languages, (value, key) => {
    if (languages[key] && languages[key].isSupported) {
      supportedLanguages[key] = languages[key];
    }
  });
  return supportedLanguages;
};


module.exports = {
  languages,
  getSupportedLanguages,
  isClientTranslatableKey,
  isServerTranslatableKey,
  detectUserLanguageId,
  getDefaultDeveloperEmailLanguage,
  getDefaultLanguage,
  getLanguageIds,
  getLanguageById,
  getLanguageByName,
  getLanguageByCountryAbbr,
  getLanguageByLocaleName,
};
