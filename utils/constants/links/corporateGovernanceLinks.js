import messages from './messages';

export const NNN_REIT_KEY = 'NNN REIT';
export const STUDENT_REIT_KEY = 'BRIX REIT';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  [STUDENT_REIT_KEY]: [
    {
      url: 'https://s3.amazonaws.com/ru-production/public/reits/4/RU_SH_Articles_Of_Incorporation.pdf',
      name: messages.governanceLinkTitle1,
    },
    {
      url: 'https://s3.amazonaws.com/ru-production/public/reits/4/RU_SH_Bylaws.pdf',
      name: messages.governanceLinkTitle2,
    },
    {
      url: 'https://s3.amazonaws.com/ru-production/public/reits/4/RU_SH_Conflicts_Committee_Charter.pdf',
      name: messages.governanceLinkTitle3,
    },
    {
      url: 'https://s3.amazonaws.com/ru-production/public/reits/4/RU_SH_Code_of_Conduct_and_Ethics.pdf',
      name: messages.governanceLinkTitle4,
    },
  ],
  [NNN_REIT_KEY]: [
    {
      url: 'https://ru-production.s3.amazonaws.com/public/reits/2/Reg_D/Articles_of_Incorporation.pdf',
      name: messages.governanceLinkTitle1,
    },
    {
      url: 'https://ru-production.s3.amazonaws.com/public/reits/2/Reg_D/Bylaws.pdf',
      name: messages.governanceLinkTitle2,
    },
    {
      url: 'https://ru-production.s3.amazonaws.com/public/reits/2/Reg_D/Audit_Committee_Charter.pdf',
      name: messages.documentsLinkAuditCommitteeCharter,
    },
    {
      url: 'https://ru-production.s3.amazonaws.com/public/reits/2/Reg_D/Code_of_Business_Conduct_and_Ethics.pdf',
      name: messages.governanceLinkTitle4,
    },
    {
      url: 'https://ru-production.s3.amazonaws.com/public/reits/2/Reg_D/Compensation_Committee_Charter.pdf',
      name: messages.governanceLinkTitle9,
    },
  ],
};
