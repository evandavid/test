import { theme } from 'styled-tools';
import { css } from 'styled-components';
import { nnn } from './colors'
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
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
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
