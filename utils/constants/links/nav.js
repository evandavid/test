// import { hasRole } from '#helpers/userRoles';
import messages from './messages';
import { domains } from 'utils/enums/domains';
import { isDomain } from 'utils/general';
import { BRIX, NNN } from 'utils/enums/site';

const hiddenClass = isDomain(domains.CHINESE.id) ? 'hidden' : '';

export const linksCommon = [
  {
    url: '/',
    translationId: messages.commonHome.id,
    displayClass: '',
  },
  {
    url: '/how-it-works',
    translationId: messages.howItWorks.id,
    displayClass: '',
  },
  {
    url: '/investments',
    translationId: messages.investments.id,
    displayClass: '',
  },
  {
    url: '/about',
    translationId: messages.meetTheUncles.id,
    displayClass: '',
  },
  {
    url: '/retirement',
    translationId: messages.retirement.id,
    displayClass: hiddenClass,
  },
];

// const filterBySite = (links = [], siteId) => {
//   // add urls per site to hide in main navigation menu
//   const hiddenNavItems = {
//     [BRIX]: [
//       '/how-it-works',
//       '/how-it-works',
//       '/about',
//       '/retirement',
//       '/blog',
//     ],
//     [NNN]: [],
//   };
