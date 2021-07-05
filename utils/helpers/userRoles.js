import isEmpty from 'lodash/isEmpty';

export const hasRole = (user, role) =>
  Boolean(user?.role) && !isEmpty(user[role]) && user.role.includes(role);

export const isLogged = user => hasRole(user, 'admin') || hasRole(user, 'user');

export const isAdmin = user => Boolean(user?.user?.admin) || hasRole(user, 'admin');

export const isUser = user => hasRole(user, 'user');

export const isAdminAsUser = user => isAdmin(user) && isUser(user);

export const isAdminCurrently = user => isAdmin(user) && !isAdminAsUser(user);

export const getAccessToken = user => isLogged(user) && user[user.role[0]].accessToken;

export const getRefreshToken = user => isLogged(user) && user[user.role[0]].refreshToken;
