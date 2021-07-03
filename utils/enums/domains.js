const findKey = require('lodash/findKey');
const keys = require('lodash/keys');
const { languages } = require('utils/languages');

const defaultDomainId = 'en';

const domains = {
  ENGLISH: {
    id: 'en',
    name: 'https://www.modiv.com',
    countryAbbr: 'US',
    languageId: languages.en.id,
    hostnames: ['modiv.com', 'us-staging.modiv.com', 'ru-staging.modiv.com'],
  },
  GERMAN: {
    id: 'de',
    name: 'https://www.richuncles.de',
    countryAbbr: 'DE',
    languageId: languages.de.id,
    hostnames: ['richuncles.de'],
  },
  CHINESE: {
    id: 'cn',
    name: 'https://www.richuncles.cn',
    countryAbbr: 'CN',
    languageId: languages.zh.id,
    hostnames: ['richuncles.cn', 'cn-staging.modiv.com'],
  },
};

const findDomains = (value, searchBy) => {
  const key = findKey(domains, domain => {
    const domainProperty = domain[searchBy];
    if (Array.isArray(domainProperty)) {
      return domainProperty.includes(value);
    }
    return domainProperty === value;
  });

  return domains[key];
};

const getDomainById = id => findDomains(id, 'id');

const getDomainByCountryAbbr = countryAbbr => findDomains(countryAbbr, 'countryAbbr');

const getDomainByHostname = hostname => findDomains(hostname, 'hostnames');

const getDomainByLanguageId = languageId => findDomains(languageId, 'languageId');

const getDomainByName = domainName => findDomains(domainName, 'name');

const getDomainIds = () => keys(domains).map(key => domains[key].id);

const getDefaultDomain = () => getDomainById(defaultDomainId);

const detectUserDomain = requestedHostname => {
  const requestedHostnameNorm = normalizeHostname(requestedHostname);
  const domain = getDomainByHostname(requestedHostnameNorm);
  return domain || getDefaultDomain();
};

function normalizeHostname(hostname) {
  return hostname.replace(/^(?:https?:\/\/)?(?:www\.)?/u, '');
}


module.exports = {
  domains,
  getDomainById,
  getDomainByCountryAbbr,
  getDomainByHostname,
  getDomainByLanguageId,
  getDomainByName,
  detectUserDomain,
  getDefaultDomain,
  getDomainIds,
};
