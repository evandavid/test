import React from 'react';
import SVG from 'components/commons/icons/SVGWrap';
import PropTypes from 'prop-types';

const Desktop = ({ width = 22, height = 22, viewBox = '0 0 22 22' }) => (
  <SVG width={width} height={height} viewBox={viewBox}>
    <path
      fill="#7F899C"
      d="M13 17v2h4v2H5v-2h4v-2H1.66C.75 17 0 16.265 0 15.35V3.65C0 2.733.748 2 1.658 2h18.684C21.252 2 22 2.735 22 3.65v11.708A1.658 1.658 0 0 1 20.339 17H13zm7-13H2l.001 11H20V4z"
    />
  </SVG>
);

Desktop.propTypes = {
  viewBox: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Desktop;
