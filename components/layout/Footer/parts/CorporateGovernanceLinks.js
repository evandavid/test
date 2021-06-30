import React from 'react';
import CorporateGovernanceLink from './CorporateGovernanceLink';

const CorporateGovernanceLinks = ({ links }) => (
  <ul className="footer-modal__list">
    {links.map(link => (
      <CorporateGovernanceLink key={link.url} url={link.url} title={link.name} />
    ))}
  </ul>
);

export default CorporateGovernanceLinks;
