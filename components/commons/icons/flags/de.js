import React from 'react';
import SVG from 'components/commons/icons/SVGWrap';
import PropTypes from 'prop-types';

const De = ({ width = 28, height = 23, viewBox = '0 0 48 48' }) => (
  <SVG width={width} height={height} viewBox={viewBox}>
    <path fill="#FFC107" d="M2 29h44v10H2z" />
    <path fill="#FF3D00" d="M2 19h44v10H2z" />
    <path fill="#455A64" d="M2 9h44v10H2z" />
  </SVG>
);

De.propTypes = {
  viewBox: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default De;
