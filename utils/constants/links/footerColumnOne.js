import messages from './messages';
import { PAGES } from '../urls';

const footerColumnOneLinks = [
  {
    url: PAGES.home,
    name: messages.commonHome,
    newtab: false,
  },
  {
    url: PAGES.howItWorks,
    name: messages.howItWorks,
    newtab: false,
  },
  {
    url: PAGES.nnnInvestments,
    name: messages.investments,
    newtab: false,
  },
  {
    url: PAGES.about,
    name: messages.about,
    newtab: false,
  },
];

export default footerColumnOneLinks;
