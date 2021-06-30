import miscMessages from '#components/misc/messages';
import { NNN_REIT_KEY, STUDENT_REIT_KEY } from '#constants/links/corporateGovernanceLinks';
import { PAGES } from '../urls';
import messages from './messages';

import common from '../../enums/common';
const REITS = common.REITS;

const documentsLinks = {
  [STUDENT_REIT_KEY]: [
    {
      url: PAGES.prospectusSH,
      name: miscMessages.offeringCircularLink,
      newtab: true,
      id: 1,
    },
    {
      url: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001723028&owner=exclude&count=40&hidefilings=0',
      name: messages.documentsLinkTitle1,
      newtab: true,
      id: 2,
    },
    {
      url: 'https://www.sec.gov/Archives/edgar/data/1723028/999999999418000087/9999999994-18-000087-index.htm',
      name: messages.documentsLinkTitle2,
      newtab: true,
      id: 3,
    },
    {
      url: 'https://s3.amazonaws.com/ru-staging/public/reits/4/RU_SH_Code_of_Conduct_and_Ethics.pdf',
      name: messages.documentsLinkTitle5,
      newtab: false,
      modalLinksKey: STUDENT_REIT_KEY,
      id: 6,
    },
    {
      url: `https://s3.amazonaws.com/ru-production/public/reits/${REITS.STUDENT_HOUSING.id}/8937.pdf`,
      name: messages.documentsTaxDocumentationBrix,
      newtab: true,
      id: 19,
    },
  ],
  [NNN_REIT_KEY]: [
    {
      url: 'https://ru-production.s3.amazonaws.com/public/reits/2/Reg_D/Offering_Memorandum.pdf',
      name: miscMessages.prospectusLink,
      newtab: true,
      id: 7,
    },
    {
      url: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001645873&owner=include&count=40&hidefilings=0',
      name: messages.documentsLinkTitle1,
      newtab: true,
      id: 8,
    },
    {
      url: 'https://www.sec.gov/Archives/edgar/data/1645873/000164587320000075/0001645873-20-000075-index.htm',
      name: messages.documentsLinkTitle3,
      newtab: true,
      id: 9,
    },
    {
      url: 'https://s3.amazonaws.com/ru-production/public/reits/2/8937.pdf',
      name: messages.documentsTaxDocumentationNNN,
      newtab: true,
      id: 10,
    },
    {
      url: 'https://drive.google.com/file/d/1UgexlWbFCdiUZVjgt1pdt-Xay-UAnP-L/view?usp=sharing',
      name: messages.documentsLinkTitle7,
      newtab: true,
      id: 11,
    },
    {
      url: 'https://ru-production.s3.amazonaws.com/public/reits/2/Reg_D/S-3.pdf',
      name: messages.documentsFormS3,
      newtab: true,
      id: 11,
    },
  ],
};

export default documentsLinks;
