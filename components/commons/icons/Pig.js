import React from 'react';
import SVG from 'components/commons/icons/SVGWrap';
import PropTypes from 'prop-types';

const Pig = ({
  width = 58,
  height = 54,
  viewBox = '0 0 58 54',
  stroke = '#57607F',
}) => (
  <SVG width={width} height={height} viewBox={viewBox}>
    <path
      fill="none"
      fillRule="evenodd"
      stroke={stroke}
      strokeWidth="2"
      d="M52.512 29.16c-.515 4.67-2.572 8.392-5.918 12.102-.881 2.087-.827 4.838-.785 5.687.014.128.02.246.02.36v2.35c0 1.842-1.5 3.341-3.343 3.341h-6.811a3.346 3.346 0 0 1-3.344-3.34v-.84c-1.84.253-3.714.289-5.573.104v.735c0 1.842-1.5 3.341-3.343 3.341h-6.811a3.346 3.346 0 0 1-3.344-3.34v-2.351c0-.186.016-.374.049-.562.045-2.616-.327-3.935-.662-4.27a1.486 1.486 0 0 1-.316-.458c-2.65-2.692-4.617-4.744-5.722-8.328a3.279 3.279 0 0 1-.229.008H4.289A3.29 3.29 0 0 1 1 30.413v-7.285a3.29 3.29 0 0 1 3.289-3.286H6.38c.073 0 .145.003.215.01 1.306-4.273 3.794-8.05 7.244-10.985l-.42-6.623a1.172 1.172 0 0 1 1.704-1.115l6.507 3.333a23.547 23.547 0 0 1 7.65-1.212c12.246.09 22.303 9.605 23.283 21.593a4.87 4.87 0 0 1 .506-.024h2.162c.973 0 1.769.982 1.769 2.181 0 1.2-.796 2.18-1.77 2.18H53.07c-.21 0-.394 0-.557-.02zM20.45 19.786a2.012 2.012 0 1 1-4.025.001 2.012 2.012 0 0 1 4.025 0z"
    />
  </SVG>
);

Pig.propTypes = {
  viewBox: PropTypes.string,
  stroke: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Pig;
