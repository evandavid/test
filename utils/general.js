import { LOCALE_EN } from 'utils/i18n';
import { detectUserDomain, getDomainById } from 'utils/enums/domains';
import fp from 'lodash/fp';

// return boolean if pathname equals admin routes
export const isAdminRoute = pathname =>
  pathname ? pathname.includes('/admin') : false;

// check if country id is equal to US country id
export const countryIsUS = countryId => {
  return countryId === 1;
};

// check if localization is EN
export const isEnLocale = fp.curry((query, locale) => {
  return (query && query.lang === LOCALE_EN) || locale === LOCALE_EN;
});

export const isDomain = domain => {
  return typeof window !== 'undefined'
    ? detectUserDomain(window.location.hostname).id === getDomainById(domain).id
    : null;
};
