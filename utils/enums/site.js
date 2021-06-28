import { REITS } from './common';

// SITES
export const BRIX = 'brix';
export const NNN = 'nnn';

// This is copy of condif/default site constants
// It needs to be updated every time site is changed
export const SITES = [
  {
    id: BRIX,
    reitId: REITS.STUDENT_HOUSING.id,
    hostnames: [
      'brix-reit.com',
      'www.brix-reit.com',
      'development.brix-reit.com',
      'staging.brix-reit.com',
      'development.brix-reit.com',
      'brix.localhost',
    ],
  },
  {
    id: NNN,
    reitId: REITS.NNN_REIT.id,
    hostnames: [
      'modiv.com',
      'richuncles.com',
      'www.modiv.com',
      'www.richuncles.com',
      'modiv.com',
      'www.modiv.com',
      'ru-development.herokuapp.com',
      'development.modiv.com',
      'ru-staging.herokuapp.com',
      'staging.modiv.com',
      'ru-integration.herokuapp.com',
      'nnn.localhost',
      'modiv.localhost',
    ],
  },
];
export const DEFAULT_SITE = SITES[0];

// defined in contentful under 'site' field to display relevant content, possibility to add 'Both' option
export const BRIX_CONTENTFUL = 'Brix';
export const NNN_CONTENTFUL = 'RichUncles';
