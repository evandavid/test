import React from 'react';
import LanguageButton from './components/LanguageButton/LanguageButton';
import Dropdown from './LanguageDropdown';
import languages from 'utils/enums/languages';
import PropTypes from 'prop-types';

export const locales = languages.getSupportedLanguages();

const LanguageSwitcher = ({
  compact = false,
  handleButtonClick,
  isMenuVisible,
  locale,
  loggedIn,
  setShowDropdown,
  showDropdown,
}) => (
  <div>
    <LanguageButton
      compact={compact}
      loggedIn={loggedIn}
      locale={locales[locale]}
      onClick={() => setShowDropdown(v => !v)}
      showDropdownIcon
      isMenuVisible={isMenuVisible}
    />
    {showDropdown && (
      <Dropdown
        compact={compact}
        loggedIn={loggedIn}
        locales={locales}
        onClickOut={() => setShowDropdown(false)}
        onSelect={handleButtonClick}
      />
    )}
  </div>
);

LanguageSwitcher.propTypes = {
  compact: PropTypes.bool,
  handleButtonClick: PropTypes.func,
  isMenuVisible: PropTypes.bool,
  locale: PropTypes.string,
  loggedIn: PropTypes.bool,
  setShowDropdown: PropTypes.func,
  showDropdown: PropTypes.bool,
};

export default LanguageSwitcher;
