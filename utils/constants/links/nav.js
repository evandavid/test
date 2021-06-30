import { hasRole } from '#helpers/userRoles';
import messages from './messages';
import { domains } from '#common/enums/domains';
import { isDomain } from '#utils/general';
import { BRIX, NNN } from '#features/site/enum';

const hiddenClass = isDomain(domains.CHINESE.id) ? 'hidden' : '';

const linksCommon = [
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

const linksUser = [
  {
    url: '/',
    translationId: messages.commonHome.id,
    displayClass: 'visible-xs visible-sm hidden-md hidden-lg',
  },
  {
    url: '/account/dashboard',
    translationId: messages.myAccount.id,
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
  {
    url: '/account/settings',
    translationId: messages.settings.id,
    displayClass: 'visible-xs visible-sm hidden-md hidden-lg',
  },
  {
    url: '/blog',
    translationId: messages.blog.id,
    displayClass: 'visible-xs blog-item',
  },
];

const linksAdmin = [
  {
    url: '/',
    name: 'Home',
    displayClass: 'visible-xs visible-sm hidden-md hidden-lg',
  },
  {
    url: '/admin/transactions',
    name: 'Transactions',
    displayClass: '',
  },
  {
    url: '/admin/users',
    name: 'Users',
    displayClass: '',
  },
  {
    url: '/admin/share-repurchases',
    name: 'Share Repurchases',
    displayClass: '',
  },
  {
    url: '/admin/aip',
    name: 'AIP',
    displayClass: '',
  },
];

const filterByPermissions = (links, permissions) =>
  links.filter(item => permissions[item.needsPermission] !== false);

const filterBySite = (links = [], siteId) => {
  // add urls per site to hide in main navigation menu
  const hiddenNavItems = {
    [BRIX]: [
      '/how-it-works',
      '/how-it-works',
      '/about',
      '/retirement',
      '/blog',
    ],
    [NNN]: [],
  };

  return links.filter(link => !hiddenNavItems[siteId].includes(link.url));
};

export default function(user, permissions = [], siteId, isLoginFlow) {
  let role = 'common';

  if (user && !isLoginFlow) {
    if (hasRole(user, 'user')) {
      role = 'user';
    }

    if (hasRole(user, 'admin')) {
      role = 'admin';
    }
  }

  const admin = filterByPermissions(linksAdmin, permissions);

  return {
    common: filterBySite(linksCommon, siteId),
    user: filterBySite(linksUser, siteId),
    admin,
  }[role];
}
