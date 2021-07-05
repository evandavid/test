import React from 'react';
import { hasRole } from 'utils/helpers/userRoles';
import permissions from 'utils/constants/permissions';
import Cog from 'components/commons/icons/Cog';
import messages from './messages';

const linksCommon = [];

const linksUser = [
  {
    url: '/account/settings/personal',
    titleTranslationId: messages.personalSettings.id,
    subtitle: null,
    displayClass: 'item--simple',
  },
  {
    url: '/account/settings/security',
    titleTranslationId: messages.security.id,
    subtitle: null,
    displayClass: 'item--simple',
  },
  {
    url: '/account/settings/bank-accounts',
    titleTranslationId: messages.bankAccounts.id,
    subtitle: null,
    displayClass: 'item--simple',
  },
  {
    url: '/account/settings/documents',
    titleTranslationId: messages.myDocuments.id,
    subtitle: null,
    displayClass: 'item--simple',
  },
  {
    url: '/account/settings/consent',
    titleTranslationId: messages.electronicConsents.id,
    subtitle: null,
    displayClass: 'item--simple',
  },
  {
    url: '/account/settings/preferences',
    titleTranslationId: messages.preferences.id,
    icon: <Cog width={12} height={12} viewBox="0 0 12 12" />,
    subtitle: null,
    displayClass: 'item--simple preference--align',
    translationDisabled: true,
  },
  {
    url: '/auth/logout',
    titleTranslationId: messages.logout.id,
    subtitle: null,
    displayClass: 'hidden-xs hidden-sm item--simple item--hidden',
  },
];

const linksAdmin = [
  {
    displayClass: 'item--simple',
    needsPermission: permissions.USER_LOGIN_AS_USER,
    title: 'Login as user',
    subtitle: null,
    url: '/admin/login-user',
  },
  {
    displayClass: 'item--simple',
    needsPermission: permissions.MANUAL_MODIFICATIONS,
    title: 'Manual modifications',
    subtitle: null,
    url: '/admin/manual-modifications',
  },
  {
    displayClass: 'item--simple item--hidden',
    title: 'Logout',
    subtitle: null,
    url: '/auth/logout',
  },
];

const filterByPermissions = (links, permissions) =>
  links.filter(item => permissions[item.needsPermission] !== false);

const settings = (user, permissions = []) => {
  let role = 'common';

  if (hasRole(user, 'user')) {
    role = 'user';
  }

  if (hasRole(user, 'admin')) {
    role = 'admin';
  }

  const admin = filterByPermissions(linksAdmin, permissions);

  return {
    common: linksCommon,
    user: linksUser,
    admin,
  }[role];
};

export default settings;
