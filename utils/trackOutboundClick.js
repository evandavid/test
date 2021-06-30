import { segment } from './SegmentProxy';

export const trackOutboundClick = properties => {
  setTimeout(segment.track('Outbound Link Clicked', properties), 100);
};

export const trackSocialOutboundClick = properties => {
  setTimeout(segment.track('Social Outbound Link Clicked', properties), 100);
};

export default trackOutboundClick;
