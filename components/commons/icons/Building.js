import React from 'react';
import SVG from 'components/commons/icons/SVGWrap';
import PropTypes from 'prop-types';

const Building = ({
  width = 68,
  height = 68,
  viewBox = '0 0 68 68',
  fill = '#57607F',
}) => (
  <SVG width={width} height={height} viewBox={viewBox}>
    <g fill={fill} fillRule="evenodd">
      <path d="M50.68 68H17.32V9.243h33.255V68h.106zm-31.237-2.125h29.114V11.263H19.443v54.612z" />
      <path d="M41.012 68H26.988V51.531h13.918V68h.106zm-11.9-2.125h9.776V53.657h-9.776v12.218zM26.669 10.2h2.125V2.869h-2.125zM39.206 10.307h2.125V.85h-2.125zM67.575 68H48.557V31.663h19.018V68zM50.68 65.875h14.876V33.788H50.68v32.087zM19.443 68H.425V21.994h19.018V68zM2.55 65.875h14.875V24.119H2.55v41.756zM32.088 24.225h-8.713v-8.713h8.713v8.713zM25.5 22.1h4.463v-4.463H25.5V22.1zM44.625 24.225h-8.713v-8.713h8.713v8.713zM38.037 22.1H42.5v-4.463h-4.463V22.1zM32.088 35.594h-8.713V26.88h8.713v8.713zM25.5 33.469h4.463v-4.463H25.5v4.463zM44.625 35.594h-8.713V26.88h8.713v8.713zm-6.588-2.125H42.5v-4.463h-4.463v4.463zM32.088 47.069h-8.713v-8.712h8.713v8.712zM25.5 44.943h4.463v-4.462H25.5v4.462zM44.625 47.069h-8.713v-8.712h8.713v8.712zm-6.588-2.126H42.5v-4.462h-4.463v4.462z" />
      <path d="M62.369 62.794h-8.606v-6.482h8.606v6.482zm-6.481-2.125h4.355v-2.232h-4.355v2.232zM62.369 53.125h-8.606v-6.482h8.606v6.482zM55.888 51h4.355v-2.231h-4.355V51zM62.369 43.457h-8.606v-6.482h8.606v6.482zm-6.481-2.126h4.355V39.1h-4.355v2.231zM14.237 62.794H5.631v-6.482h8.606v6.482zm-6.48-2.125h4.355v-2.232H7.757v2.232zM14.237 53.125H5.631v-6.482h8.606v6.482zM7.757 51h4.355v-2.231H7.757V51zM14.237 43.457H5.631v-6.482h8.606v6.482zm-6.48-2.126h4.355V39.1H7.757v2.231zM14.237 33.788H5.631v-6.482h8.606v6.482zm-6.48-2.125h4.355V29.43H7.757v2.232z" />
    </g>
  </SVG>
);

Building.propTypes = {
  viewBox: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fill: PropTypes.string,
};

export default Building;
