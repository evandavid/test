import { theme } from 'styled-tools';
import { css } from 'styled-components';
import { nnn } from './colors';
// import { getColorsBySite } from '../colors';
// import { BRIX, NNN } from '../features/site/enum';
// nnn only
// import { fonts } from './fonts';

// eslint-disable-next-line no-duplicate-imports
export * from 'styled-tools';

/**
 * Styled component template string assessor factory for font variables.
 *
 * @param {String} name Font name/path in dot syntax (i.e.: "sans").
 * @return {Function} font assessor.
 */
export const font = name => theme(`fonts.${name}`);

/**
 * Styled component template string assessor factory for colors.
 *
 * @param {String} name Color name/path in dot syntax (i.e.: "gray.dark").
 * @return {Function} color assessor.
 */
export const color = name => nnn[name];

/**
 * Styled component template string factory for each site condition.
 */
// prettier-ignore
// export const site = {
//   brix: (...args) => props => (props.theme.siteId === BRIX ? css(...args) : null),
//   nnn: (...args) => props => (props.theme.siteId === NNN ? css(...args) : null),
// };

/**
 * Styled component template string site based switches.
 */
// export const ifSite = {
//   brix: (yes, no) => props => {
//     const value = props.theme.siteId === BRIX ? yes : no;
//     return typeof value === 'function' ? value(props) : value;
//   },

//   nnn: (yes, no) => props => {
//     const value = props.theme.siteId === NNN ? yes : no;
//     return typeof value === 'function' ? value(props) : value;
//   },
// };

export const sizes = {
  small: 576,
  mobile: 768,
  desktop: 1024,
  large: 1250,
  larger: 1600,
  extraLarge: 1920,
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers fontSize: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

// export default siteId => ({
//   fonts,
//   get colors() {
//     return getColorsBySite(siteId);
//   },
//   siteId,
//   bp: sizes,
//   media,
//   fontSizes: {
//     xxs: '12px',
//     xs: '0.8125rem',
//     small: '14px',
//     base: '15px',
//     medium: '20px',
//     large: '22px',
//     xlarge: '24px',
//     xxlarge: '28px',
//   },
//   radius: {
//     smaller: '4px',
//     default: '5px',
//     bigger: '6px',
//   },
//   fontWeight: {
//     light: 300,
//     regular: 400,
//     medium: 500,
//     demi: 600,
//     bold: 700,
//   },
//   spacing: {
//     mobile: '20px',
//     desktop: '30px',
//   },
//   spacingUnit: {
//     default: '32px',
//     tiny: '8px',
//   },
//   shadows: {
//     light: '0 0 11px 0 rgba(159,155,170,0.43)',
//   },
// });

export const breakpoints = [
  {
    min: 0,
    max: 767,
    toShow: 1,
    name: 'mobile',
    image: {
      h: 224,
      w: 351,
    },
  },
  {
    min: 768,
    max: 991,
    toShow: 2,
    name: 'tablet',
    image: {
      h: 224,
      w: 289,
    },
  },
  {
    min: 992,
    max: 1249,
    toShow: 3,
    name: 'desktop',
    image: {
      h: 224,
      w: 255,
    },
  },
  {
    min: 1250,
    max: Infinity,
    toShow: 4,
    name: 'large',
    image: {
      h: 224,
      w: 388,
    },
  },
];

export const contentfulConfig = {
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.CONTENTFUL_ACCESS_ENVIRONTMENT,
  host: process.env.CONTENTFUL_HOST || 'cdn.contentful.com',
};

const fontSizeJumbo = '42px';
const fontSizeLarge = '22px';
const fontSizeXxxlarge = '34px';
const fontSizeDefault = '18px';

export const fontSizes = {
  fontSize: '1.5rem',
  fontRegular: 'Arial, sans-serif',
  // font-custom = "Proxima Nova W01", sans-serif
  fontCustom: 'Lato, sans-serif',
  fontSizeXxxsmall: '11px',
  fontXizeXxsmall: '12px',
  fontSizeXsmall: '13px',
  fontSizeXmall: '14px',
  fontSizeBase: '15px',
  fontSizeNormal: '16px',
  fontSizeDefault: '18px',
  fontSizeMedium: '20px',
  fontSizeLarge: '22px',
  fontSizeXlarge: '24px',
  fontSizeXxlarge: '28px',
  fontSizeXxlarger: '30px',
  fontSizeXxxlarge: '34px',
  fontSizeGiant: '36px',
  fontSizeJumbo: '42px',
  fontSizeXjumbo: '46px',
  fontSizeXxjumbo: '60px',

  fontWeightUltraLight: 200,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightNormal: 400,
  fontWeightMedium: 500,
  fontWeightDemi: 600,
  fontWeightBold: 700,

  lineHeightDefault: 1.4,
  lineHeightLarger: 1.6,

  titlePage: fontSizeJumbo,
  subtitlePage: fontSizeLarge,
  titleSection: fontSizeXxxlarge,
  subtitleSection: fontSizeDefault,
};
