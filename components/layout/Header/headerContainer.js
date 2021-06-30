import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Container } from './styled';

export const ID = 'header-container';

const HeaderContainer = ({ children, fixed, hasNotificationBar }) => (
  <Container
    className={cn('header', {
      fixed,
      'has-notification-bar': hasNotificationBar,
    })}
    id={ID}
  >
    {children}
  </Container>
);

export default HeaderContainer;

HeaderContainer.propTypes = {
  children: PropTypes.element,
  fixed: PropTypes.bool,
  hasNotificationBar: PropTypes.bool,
  isAdmin: PropTypes.bool,
};
