import React from 'react';
import Link from 'next/link';
import * as Styled from './styled';

const FooterLogo = ({ generalInfo: { companyName }, siteFeatureHelper }) => (
  <Styled.FooterLogo>
    <div className={'contact__logo-nnn'}>
      <Link className="u-url" href="/" passHref>
        <a className="contact__name sr-only p-name">{companyName}</a>
      </Link>
    </div>
  </Styled.FooterLogo>
);

export default FooterLogo;
