import PropTypes from 'prop-types';
import React from 'react';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
// import { Dropdown, HeaderNotification } from 'components';
import HeaderNotification from 'components/layout/Header/parts/HeaderNotification';
import getSettingsLinks from 'utils/constants/links/settings';
// import {
//   isLogged as checkIsLogged,
//   isAdminAsUser,
//   isAdminCurrently,
//   isUser as checkIsUser,
//   isAdmin as checkIsAdmin,
// } from '#helpers/userRoles';
import { segment } from 'utils/SegmentProxy';
import { INVEST, ACCOUNT } from 'utils/constants/urls';
import * as Styled from './styled';
import messages from './messages';

const HeaderActions = ({
  appState,
  user,
  getNotifications,
  onNotificationShow,
  menuVisible,
  setRedirectLoop,
  push,
  permissions,
  notifications,
  isTranslationEnabled,
  isLoginFlow,
}) => {
  let isAdmin = false;
  let isLogged = false;
  let isUser = false;

  if (!isLoginFlow) {
    isAdmin = checkIsAdmin(user);
    isLogged = checkIsLogged(user);
    isUser = checkIsUser(user);
  }

  const handleClick = () => menuVisible(false);

  const handleInvest = () => {
    segment.track('Menu - Invest Now');
    handleClick();
    push(INVEST.accountSelect);
  };

  const handleSignUp = () => {
    segment.track('Menu - Sign Up');
    menuVisible(false);
  };

  const handleLogin = () => {
    setRedirectLoop(ACCOUNT.dashboard);
    menuVisible(false);
  };

  let links = getSettingsLinks(user, permissions).filter(
    link => !link.translationDisabled || isTranslationEnabled,
  );
  const btnText = isUser ? (
    <FormattedMessage {...messages.headerAction1} />
  ) : (
    <FormattedMessage {...messages.headerAction3} />
  );

  // Add Account statement link
  links.splice(2, 0, {
    url: '/account/statements',
    titleTranslationId: messages.accountStatements.id,
    subtitle: null,
    displayClass: 'item--simple',
  });

  // admin logged as user
  if (isAdminAsUser(user)) {
    links = [
      ...links,
      {
        displayClass: 'item--simple',
        subtitle: null,
        title: 'Back to admin',
        url: '/admin/logout-as-user',
      },
    ];
  }

  return (
    <div className="site--header__actions">
      <ul className="site--header__list">
        <li className="site--header__item hidden-md hidden-lg">
          {isLogged ? (
            <Link
              passHref
              href="/auth/logout"
              className="btn btn--secondary btn--small btn--small--logout"
              onClick={handleClick}
            >
              <FormattedMessage {...messages.headerLogout} />
            </Link>
          ) : (
            <Link passHref href="/auth/login" onClick={handleLogin}>
              <Styled.MenuLink>
                <FormattedMessage {...messages.headerLogin} />
              </Styled.MenuLink>
            </Link>
          )}
        </li>

        {/* {isLogged ? (
          <li className="site--header__item site--header__name hidden-xs hidden-sm li-accountlist">
            <Dropdown
              title={
                isAdminCurrently(user)
                  ? user[user.role[0]].userName
                  : user[user.role[0]].firstName
              }
              items={links}
            />
          </li>
        ) : ( */}
          <li className="site--header__item site--header__name hidden-xs hidden-sm">
            <Link passHref href="/auth/login" onClick={handleLogin}>
              <Styled.MenuLink>
                <FormattedMessage {...messages.headerLogin} />
              </Styled.MenuLink>
            </Link>
          </li>
        {/* )} */}

        {isUser && (
          <li className="site--header__item site--header__alarm hidden-xs hidden-sm li-notification-lg">
            <HeaderNotification
              onListShow={getNotifications}
              onNotificationShow={onNotificationShow}
              isListOpen={appState.isNotificationVisible}
              notifications={notifications}
            />
          </li>
        )}
        <Styled.SignupWrapper className="site--header__item li-invest-now">
          {!isLogged && (
            <Link
              passHref  
              href="/auth/signup"
              onClick={() => handleSignUp()}
              aria-label="Open a signup form"
            >
              <Styled.ColoredButton>{btnText}</Styled.ColoredButton>
            </Link>
          )}
          {isLogged && !isAdmin && (
            <button
              className="btn btn--primary btn--small js-invest-btn btn--invest js-track-invest"
              onClick={handleInvest}
            >
              {btnText}
            </button>
          )}
        </Styled.SignupWrapper>
      </ul>
    </div>
  );
};

export default HeaderActions;

HeaderActions.propTypes = {
  appState: PropTypes.object.isRequired,
  user: PropTypes.object,
  getNotifications: PropTypes.func,
  onNotificationShow: PropTypes.func,
  menuVisible: PropTypes.func,
  setRedirectLoop: PropTypes.func,
  push: PropTypes.func,
  permissions: PropTypes.object,
  notifications: PropTypes.object,
  isTranslationEnabled: PropTypes.bool.isRequired,
};
