import messages from './messages';
import { PAGES } from '../urls';

const legalLinks = [
  {
    url: PAGES.risks,
    name: messages.legalLinkTitle7,
    newtab: false,
  },
  {
    url: PAGES.terms,
    name: messages.legalLinkTitle1,
    newtab: false,
  },
  {
    url: PAGES.faq,
    name: messages.legalLinkTitle2,
    newtab: false,
  },
  {
    url: PAGES.policy,
    name: messages.legalLinkTitle3,
    newtab: false,
  },
  {
    url: PAGES.contact,
    name: messages.legalLinkTitle4,
    newtab: false,
  },
  {
    url: PAGES.documents,
    name: messages.legalLinkTitle6,
    newtab: false,
  },
];

export default legalLinks;
