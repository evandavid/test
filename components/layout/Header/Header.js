import React, { useState, useEffect } from 'react';
import localStorage from 'localStorage';
import cn from 'classnames';
// import { triggerScrollListeners } from '#components/layout/ContentContainer';
import { HeaderLogo, HeaderTimezone, NotificationBar } from './parts';
import HeaderActions from 'components/layout/Header/HeaderDesign/HeaderActions';
import HeaderNav from 'components/layout/Header/HeaderDesign/HeaderNav';
import HeaderHamburger from 'components/layout/Header/HeaderDesign/HeaderHamburger';
import { linksCommon } from 'utils/constants/links/nav';
// import { isAdmin, isUser } from '#helpers/userRoles';
import HeaderContainer from 'components/layout/Header/parts/headerContainer';
import { segment } from 'utils/SegmentProxy';
import LanguageSwitcher from 'components/commons/intl/LanguageSwitcher/LanguageSwitcher';
import {
  HeaderInnerContainer,
  HeaderActionsWrapper,
  HeaderLogoWrapper,
  HeaderNavWrapper,
} from './styled';

const headerOffset = 36;
const topPosition = 0;

const Header = ({
  // appState,
  // auth: { user, isLoginFlow },
  notificationVisible,
  notifications,
  // fixedHeader,
  permissions,
  modal,
  route,
  siteId,
  isInvestmentProcess,
  menuVisible,
  getNotifications,
  setRedirectLoop,
  push,
  isTranslationEnabled,
  isMenuVisible,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [notificationBarHidden, setNotificationBarHidden] = useState(false);

  useEffect(() => {
    // fixedHeader(false);
    // if (user?.user) {
    //   segmentIdentify();
    // }
  }, []);

  useEffect(() => {
    const setMobile = () => {
      const smallScreen = window.matchMedia('(max-width: 63.938em)').matches;
      // $sm-max
      setIsMobile(smallScreen);
    };

    setMobile();
    window.addEventListener('resize', setMobile);
    return () => {
      window.removeEventListener('resize', setMobile);
    };
  }, []);

  const handleNotification = prop => {
    // const newState = prop === false ? prop : !appState.isNotificationVisible;
    const newState = false;

    triggerScrollListeners();
    notificationVisible(newState);
  };

  const hideNotificationBar = () => {
    localStorage.setItem('notificationBarHidden', true);
    setNotificationBarHidden(true);
  };

  const segmentIdentify = () => {
    const userId = user.user.id;
    const userInfo = { ...user.user, role: user.role };
    userInfo.accessToken && delete userInfo.accessToken;
    segment.identify(userId, userInfo);
  };

  const hasNotificationBar =
    !notificationBarHidden &&
    !localStorage.getItem('notificationBarHidden') &&
    // !isAdmin(user) &&
    // isUser(user) &&
    !isInvestmentProcess &&
    (notifications.incompleteTransactionsCount > 0 ||
      notifications.soonToExpireTransactionsCount > 0);

  // const notificationOpen = appState.isNotificationVisible && 'notification__open';
  const notificationOpen = false;

  return (
    <HeaderContainer
      // fixed={appState.fixedHeader}
      fixed={true}
      // hasNotificationBar={hasNotificationBar}
      hasNotificationBar={false}
      // isAdmin={isAdmin(user)}
      isAdmin={false}
    >
      {/* <div className="top">
        {hasNotificationBar && (
          <NotificationBar
            notifications={notifications}
            isFixed={topPosition > 0}
            onHideNotificationBar={hideNotificationBar}
            modal={modal}
          />
        )}
      </div> */}
      <header
        className={cn('site--header', {
          fixed: topPosition > (isMobile ? 0 : headerOffset),
          // 'site-header--on-top': isAdmin(user),
          'site-header--on-top': false,
        })}
      >
        <HeaderInnerContainer>
          <HeaderLogoWrapper>
            <HeaderLogo />
            {/* {isUser(user) && (
              <div className={cn('notification visible-xs visible-sm', notificationOpen)}>
                <button className="notification__trigger" onClick={handleNotification}>
                  {notifications?.count > 0 && (
                    <span className="dropdown__counter">{notifications.count}</span>
                  )}
                  <span className="ico ico--alarm" />
                </button>
              </div>
            )} */}
            {/* <HeaderHamburger appState={appState} menuVisible={menuVisible} /> */}
            <HeaderHamburger menuVisible={menuVisible} isMenuVisible={isMenuVisible} />
          </HeaderLogoWrapper>
          <HeaderNavWrapper>
            <HeaderNav links={linksCommon} route={route} menuVisible={menuVisible} />
          </HeaderNavWrapper>
          <HeaderActionsWrapper>
            <HeaderActions
              appState={{}}
              user={{}}
              getNotifications={getNotifications}
              menuVisible={menuVisible}
              setRedirectLoop={setRedirectLoop}
              push={push}
              permissions={permissions}
              notifications={notifications}
              isTranslationEnabled={isTranslationEnabled}
              onNotificationShow={handleNotification}
              isLoginFlow={false}
            />
          </HeaderActionsWrapper>
          {/* {isAdmin(user) && !isLoginFlow && <HeaderTimezone />} */}
          {/* <div className="visible-xs visible-sm">
            <LanguageSwitcher compact />
          </div> */}
        </HeaderInnerContainer>
      </header>
    </HeaderContainer>
  );
};

export default Header;
