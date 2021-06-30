import { trackSocialOutboundClick } from './trackOutboundClick';

const defaultFooterProperties = {
  creative: 'Text',
  position: 'Footer - Right',
};

const defaultHeaderProperties = {
  creative: 'Icon',
  position: 'Mobile Header',
};

export const trackSocialFooterClick = ({ url, name }) => {
  const socialFooterProperties = {
    name,
    link: url,
    ...defaultFooterProperties,
  };
  trackSocialOutboundClick(socialFooterProperties);
};

export const trackSocialHeaderClick = ({ url, name }) => {
  const socialHeaderProperties = {
    name,
    link: url,
    ...defaultHeaderProperties,
  };
  trackSocialOutboundClick(socialHeaderProperties);
};
