import React from 'react';
import PropTypes from 'prop-types';
import { LogoWrapper, LogoLink } from './styled'
// import { Link, withRouter } from 'react-router';
// import { isAdmin } from '#helpers/userRoles';
// import { withSiteFeatureHelper } from '#features/site/hoc';

const HeaderLogo = ({ user, siteFeatureHelper, router }) => {
  // add extra accountId if clicking on the logo from dashboard
  const accountId = router.params?.id || '';
  const linkUrl = siteFeatureHelper({
    returnNNN: () => '/',
    returnBrix: () => `/account/dashboard/${accountId}`,
  });

  return (
    <LogoWrapper>
      <LogoLink to={linkUrl}>
        <span className="sr-only">Link to homepage</span>
      </LogoLink>
    </LogoWrapper>
  );
};

export default HeaderLogo;

HeaderLogo.propTypes = {
  user: PropTypes.object,
};
