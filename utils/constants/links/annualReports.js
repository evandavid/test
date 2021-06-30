import common from '../../enums/common';
const REITS = common.REITS;

const ANNUAL_REPORTS = {
  [REITS.REIT_I.id]:
    'https://www.sec.gov/Archives/edgar/data/1672754/000167275419000019/richunclereiti-20181231x10k.htm',
  [REITS.NNN_REIT.id]:
    'https://www.sec.gov/Archives/edgar/data/1645873/000164587320000075/0001645873-20-000075-index.htm',
};

export const annualReportLink = reitId =>
  ANNUAL_REPORTS[reitId] || ANNUAL_REPORTS[REITS.NNN_REIT.id];

export default ANNUAL_REPORTS;
