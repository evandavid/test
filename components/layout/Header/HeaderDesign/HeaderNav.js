import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import cn from 'classnames';
// import { SiteFeature } from '#features/site/SiteFeature';
import { MenuLink, WithDropdown } from './styled';
import messages from './messages';

const HeaderNav = ({ links, route, menuVisible, intl: { formatMessage } }) => {
  const handleClick = (e, link) => {
    if (
      link.url === '/account/dashboard' &&
      route.indexOf(link.url) === 0 &&
      route.indexOf('transactions') < 0
    ) {
      e.preventDefault();
    }

    menuVisible(false);
  };

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [ready, setReady] = useState(false);

  const childMenuClick = () => {
    menuVisible(false);
  };

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <nav className="site--header__nav-primary">
      <span className="sr-only">
        {/* <SiteFeature renderNNN={() => 'Modiv'} renderBrix={() => 'BRIX REIT'} /> */}
        {'Modiv'}
      </span>
      <ul className="site--header__list">
        {links.map(link => {
          const listItemDisplayClass = cn(
            'site--header__item',
            link.displayClass,
          );

          if (link.external) {
            return (
              <li key={link.url} className={listItemDisplayClass}>
                <a
                  href={link.url}
                  className="site--header__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name ||
                    (link.translationId && (
                      <FormattedMessage id={link.translationId} />
                    ))}
                </a>
              </li>
            );
          }

          return (
            <li key={link.url} className={listItemDisplayClass}>
              <Link
                onClick={e => handleClick(e, link)}
                to={link.url}
                title={
                  link.name ||
                  (link.translationId &&
                    formatMessage({ id: link.translationId }))
                }
              >
                {link.name ||
                  (link.translationId && (
                    <MenuLink className={route === link.url ? 'active' : ''}>
                      <FormattedMessage id={link.translationId} />
                    </MenuLink>
                  ))}
              </Link>
            </li>
          );
        })}
        <li className="site--header__item">
          <WithDropdown
            data-opened={dropdownVisible}
            onClick={() => setDropdownVisible(!dropdownVisible)}
            className={['/faqs', '/blog'].includes(route) ? 'active' : ''}
          >
            <FormattedMessage {...messages.resources} />
            <i
              className="ico ico--chevron"
              style={
                ready
                  ? null
                  : {
                      transform: 'rotate(90deg)',
                      display: 'inline-block',
                      marginLeft: 24,
                      fontSize: 13,
                    }
              }
            />
            <div style={ready ? null : { display: 'none' }}>
              <Link
                to="https://invest.modiv.com/quarterly-earnings-calls"
                target="_blank"
                rel="noopener"
                onClick={childMenuClick}
              >
                <MenuLink>
                  <FormattedMessage {...messages.quarterlyEarningCalls} />
                </MenuLink>
              </Link>
              <Link to="/blog" onClick={childMenuClick}>
                <MenuLink className={route === '/blog' ? 'active' : ''}>
                  <FormattedMessage {...messages.insights} />
                </MenuLink>
              </Link>
              <Link
                to="https://invest.modiv.com/help-center"
                target="_blank"
                rel="noopener"
                onClick={childMenuClick}
              >
                <MenuLink>
                  <FormattedMessage {...messages.helpCenter} />
                </MenuLink>
              </Link>
              <Link to="/faqs" onClick={childMenuClick}>
                <MenuLink className={route === '/faqs' ? 'active' : ''}>
                  <FormattedMessage {...messages.faq} />
                </MenuLink>
              </Link>
            </div>
          </WithDropdown>
        </li>
      </ul>
    </nav>
  );
};

export default injectIntl(HeaderNav);

HeaderNav.propTypes = {
  links: PropTypes.array.isRequired,
  route: PropTypes.string,
  menuVisible: PropTypes.func,
};
