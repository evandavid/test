import common from '../enums/common';
const REITS = common.REITS;

const reits = [
  {
    id: REITS.NNN_REIT.id,
    companyName: 'Modiv',
    activeReitName: 'Modiv Inc.',
    emailUI: 'info@modiv.com',
    email: 'info@modiv.com',
    prospectusEmailUI: 'info@modiv.com',
    prospectusEmail: 'info@modiv.com',
    phoneUI: '888-68-modiv',
    phone: '888-686-6348',
    name: 'Modiv Inc.',
    street: '120 Newport Center Drive',
    city: 'Newport Beach',
    state: 'CA',
    zip: '92660',
    website: 'www.modiv.com',
  },
  {
    id: REITS.STUDENT_HOUSING.id,
    companyName: 'BRIX REIT',
    activeReitName: 'Modiv Inc.',
    emailUI: 'info@brix-reit.com',
    email: 'info@brix-reit.com',
    prospectusEmailUI: 'info@modiv.com',
    prospectusEmail: 'info@modiv.com',
    phoneUI: '1-833-419-BRIX (1-833-419-2749)',
    phone: '1-833-419-2749',
    name: 'Modiv Inc.',
    street: '120 Newport Center Drive',
    city: 'Newport Beach',
    state: 'CA',
    zip: '92660',
    website: 'www.brix-reit.com',
  },
];

const getGeneralInfo = id => reits.find(reit => id === reit.id);

export default getGeneralInfo;
