import messages from './messages';

const socialLinks = [
  {
    url: 'https://www.facebook.com/richuncles',
    name: messages.socialLinkTitle2,
    displayClass: '',
    icoClass: 'ico--facebook',
    newtab: true,
  },
  {
    url: 'https://www.linkedin.com/company/richuncles/about/',
    name: messages.socialLinkTitle3,
    displayClass: '',
    icoClass: 'ico--linkedin',
    newtab: true,
  },
  {
    url: '/blog',
    name: messages.socialLinkTitle5,
    displayClass: 'blog-item',
    icoClass: '',
    newtab: false,
  },
];

export default socialLinks;
