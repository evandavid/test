import React from 'react';
import { FormattedMessage } from 'react-intl';

const CorporateGovernanceLink = ({ url, title }) => (
  <li className="footer-modal__list__link">
    <a href={url} download>
      <span className="ico ico--download" />
      <FormattedMessage {...title} />
    </a>
  </li>
);

export default CorporateGovernanceLink;
