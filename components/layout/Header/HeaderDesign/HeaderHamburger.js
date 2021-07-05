import PropTypes from 'prop-types';
import React from 'react';
import { HamburgerMenu } from './styled';
import cn from 'classnames';

const HeaderHamburger = ({ appState, menuVisible, isMenuVisible }) => {
  const handleClick = () => {
    menuVisible(!isMenuVisible);
  };

  // const { isMenuVisible } = appState || {};
  const btnMenuClass = isMenuVisible ? 'opened' : 'closed';

  return (
    <HamburgerMenu
      className={cn('btn-menu visible-xs visible-sm', btnMenuClass)}
      onClick={handleClick}
    >
      <span className="lines" />
    </HamburgerMenu>
  );
};

export default HeaderHamburger;

HeaderHamburger.propTypes = {
  appState: PropTypes.object,
  menuVisible: PropTypes.func,
  isMenuVisible: PropTypes.bool,
};
