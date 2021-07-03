import React from 'react';
import SVG from 'components/commons/icons/SVGWrap';
import PropTypes from 'prop-types';

const Lock = ({ width = 22, height = 22, viewBox = '0 0 22 22' }) => (
  <SVG width={width} height={height} viewBox={viewBox}>
    <g fill="none" fillRule="evenodd" stroke="#808A9D" strokeWidth="1.645">
      <path d="M17.383 9.355H4.617c-.878 0-1.596.74-1.596 1.645v8.224c0 .904.718 1.644 1.596 1.644h12.766c.878 0 1.596-.74 1.596-1.644V11c0-.905-.718-1.645-1.596-1.645zM11 17.579v-4.934" />
      <path d="M6.213 9.355V6.066c0-2.714 2.154-4.934 4.787-4.934s4.787 2.22 4.787 4.934v3.29" />
    </g>
  </SVG>
);

Lock.propTypes = {
  viewBox: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default Lock;
