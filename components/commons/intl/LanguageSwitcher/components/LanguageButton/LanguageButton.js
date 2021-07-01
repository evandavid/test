import React from 'react';
import Button from '../../styled/CustomButton';
import Flag from 'components/commons/intl/Flag';
import Country from '../../styled/Country';
import PropTypes from 'prop-types';

const arrowStyle = {
  display: 'inline-block',
  fontSize: '11px',
  marginLeft: '8px',
  top: 0,
  transform: 'rotate(90deg)',
};

const LanguageButton = ({
  compact,
  locale,
  onClick,
  showDropdownIcon,
  loggedIn,
  isMenuVisible,
}) => {
  const flagDimmensions = compact ? { width: 30, height: 30 } : null;

  return (
    <Button
      compact={compact}
      onClick={onClick}
      loggedIn={loggedIn}
      isMenuVisible={isMenuVisible}
    >
      <Flag {...flagDimmensions} country={locale && locale.id} />
      {!compact && <Country>{locale && locale.localeName}</Country>}
      {showDropdownIcon && (
        <span className="ico ico--chevron" style={arrowStyle} />
      )}
    </Button>
  );
};

LanguageButton.propTypes = {
  compact: PropTypes.bool,
  isMenuVisible: PropTypes.bool,
  locale: PropTypes.shape({
    localeName: PropTypes.string,
    id: PropTypes.string,
  }),
  loggedIn: PropTypes.bool,
  onClick: PropTypes.func,
  showDropdownIcon: PropTypes.bool,
};

export default LanguageButton;
