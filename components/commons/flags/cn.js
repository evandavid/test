import React from 'react';
import SVG from 'components/commons/SVGWrap';
import PropTypes from 'prop-types';

const Cn = ({ width = 28, height = 23, viewBox = '0 0 48 48' }) => (
  <SVG width={width} height={height} viewBox={viewBox}>
    <path fill="#FF3D00" d="M2 9v30h44V9" />
    <g fill="#FFEB3B">
      <path d="M10 13.49l1.181 3.75H15l-3.09 2.127L13.09 23 10 20.755 6.91 23l1.18-3.633L5 17.24h3.819M17.474 10.976l.354 1.125h1.146l-.927.636.354 1.091-.927-.674-.927.674.354-1.091-.927-.636h1.146M17.5 24l.354 1.125H19l-.927.637.354 1.091-.927-.674-.927.674.354-1.091-.927-.637h1.146M21.5 15l.354 1.125H23l-.927.637.354 1.091-.927-.674-.927.674.354-1.091-.927-.637h1.146M21.5 20l.354 1.125H23l-.927.637.354 1.091-.927-.674-.927.674.354-1.091-.927-.637h1.146" />
    </g>
  </SVG>
);

Cn.propTypes = {
  viewBox: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Cn;
