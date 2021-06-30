const auth = '/auth';
const account = '/account';
const accountInvest = `${account}/invest`;
const accountSettings = `${account}/settings`;

export const PAGES = {
  about: '/about',
  acquisitions: '/acquisitions',
  blog: '/blog',
  contact: '/contact-us',
  documents: '/documents',
  faq: '/faqs',
  home: '/',
  howItWorks: '/how-it-works',
  news: '/news',
  policy: '/legal/privacy-policy',
  properties: '/properties',
  prospectus: '/prospectus',
  prospectusSH: '/prospectus/sh',
  prospectusNNN: '/prospectus/nnn',
  prospectusReitI: '/prospectus/ca',
  restricted: '/restricted',
  reviews: '/reviews',
  risks: '/legal/risks',
  scheduleACall: '/schedule-a-call',
  terms: '/legal/terms-of-use',
  studentHousing: '/student-housing',
  studentHousingMarketing: '/signup/studenthousing',
  offeringCircular: '/offering-circular',
  nnnInvestments: '/investments',
  brixInvestments: '/investments/4',
  retirement: '/retirement',
};

export const ACCOUNT = {
  dashboard: `${account}/dashboard`,
  sellShares: `${account}/sell-shares`,
  settings: {
    home: `${accountSettings}`,
    personal: `${accountSettings}/personal`,
    password: `${accountSettings}/change-password`,
    documents: `${accountSettings}/documents`,
    testimonial: `${accountSettings}/testimonial`,
  },
};

export const INVEST = {
  accountSelect: `${accountInvest}/select-existing-account`,
  selectNewAccount: `${accountInvest}/select-account`,
  first: `${accountInvest}/new-account`,
  invest: `${accountInvest}/investment`,
  accountInformation: `${accountInvest}/account`,
  questionnaire: `${accountInvest}/questionnaire`,
  review: `${accountInvest}/review`,
  sign: `${accountInvest}/sign`,
  fund: `${accountInvest}/payment`,
  aip: `${accountInvest}/investment-plan`,
  success: `${accountInvest}/success`,
  retirement: `${accountInvest}/retirement`,
  onHold: `${accountInvest}/transaction-on-hold`,
};

export const AUTH = {
  login: `${auth}/login`,
  signUp: `${auth}/signup`,
  admin: `${auth}/admin`,
  unconfirmed: `${auth}/unconfirmed-email`,
};
