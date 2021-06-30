import common from '../../enums/common';
const REITS = common.REITS;

const prospectus = {
  prospectusReit1: {
    link: '/prospectus/ca',
    label: 'prospectusLink.label',
  },
  prospectusReitNNN: {
    link: '/prospectus/nnn',
    label: 'prospectusLink.label',
  },
  prospectusReitSH: {
    link: '/prospectus/sh',
    label: 'prospectusLink.label',
  },
  offeringMemorandum: {
    default: {
      link: '/om',
      label: 'operatingMemorandum.label',
    },
    [REITS.NNN_REIT.id]: {
      link: '/om/nnn',
      label: 'operatingMemorandum.label',
    },
    [REITS.STUDENT_HOUSING.id]: {
      link: '/om/sh',
      label: 'operatingMemorandum.label',
    },
  },
};

export default prospectus;
