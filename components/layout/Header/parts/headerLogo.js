import React from 'react';
import PropTypes from 'prop-types';
import { LogoWrapper, LogoLink } from './styled';
import Link from 'next/link';

// import { isAdmin } from '#helpers/userRoles';
// import { withSiteFeatureHelper } from '#features/site/hoc';

// const HeaderLogo = ({ user, siteFeatureHelper, router }) => {
const HeaderLogo = () => {
  // add extra accountId if clicking on the logo from dashboard
  // const accountId = router.params?.id || '';
  // const linkUrl = `/account/dashboard/${accountId}`;
  const linkUrl = `/account/dashboard/1`; // TODO

  return (
    <LogoWrapper>
      <Link href={linkUrl} passHref>
        <LogoLink className="sr-only">Link to homepage</LogoLink>
      </Link>
    </LogoWrapper>
  );
};

export default HeaderLogo;

HeaderLogo.propTypes = {
  user: PropTypes.object,
};
