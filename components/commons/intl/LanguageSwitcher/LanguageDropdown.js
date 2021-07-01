import React from 'react';
import ClickOutHandler from 'react-onclickout';
import Dropdown from './styled/Dropdown';
import LanguageButton from './components/LanguageButton/LanguageButton';
import PropTypes from 'prop-types';

const LanguageDropDown = ({
  locales,
  onSelect,
  onClickOut,
  compact = false,
  loggedIn = false,
}) => (
  <ClickOutHandler onClickOut={onClickOut}>
    <Dropdown compact={compact} loggedIn={loggedIn}>
      {locales &&
        Object.keys(locales).map(key => (
          <LanguageButton
            key={key}
            locale={locales[key]}
            onClick={() => onSelect(key)}
          />
        ))}
    </Dropdown>
  </ClickOutHandler>
);

LanguageDropDown.propTypes = {
  loggedIn: PropTypes.bool,
  compact: PropTypes.bool,
  locales: PropTypes.object,
  onClickOut: PropTypes.func,
  onSelect: PropTypes.func,
};

export default LanguageDropDown;
