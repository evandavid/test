import messages from './messages';
import { PAGES } from '../urls';

const footerColumnTwoLinks = [
  {
    url: PAGES.retirement,
    name: messages.retirement,
    newtab: false,
  },
  {
    url: PAGES.contact,
    name: messages.contact,
    newtab: false,
  },
  {
    url: PAGES.blog,
    name: messages.insights,
    newtab: false,
  },
  {
    url: PAGES.faq,
    name: messages.faq,
    newtab: false,
  },
];

export default footerColumnTwoLinks;
