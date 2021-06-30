import messages from './messages';
import { PAGES } from '../urls';

const footerColumnThreeLinks = [
  {
    url: PAGES.documents,
    name: messages.documents,
    newtab: false,
  },
  {
    url: PAGES.terms,
    name: messages.legalLinkTitle1,
    newtab: false,
  },
  {
    url: PAGES.policy,
    name: messages.legalLinkTitle3,
    newtab: false,
  },
  {
    url: PAGES.risks,
    name: messages.legalLinkTitle7,
    newtab: false,
  },
];

export default footerColumnThreeLinks;
