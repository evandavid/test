import React from 'react';
import SVG from 'components/commons/icons/SVGWrap';
import PropTypes from 'prop-types';

const Phone = ({ width = 22, height = 23, viewBox = '0 0 22 23' }) => (
  <SVG width={width} height={height} viewBox={viewBox}>
    <path
      fill="#7F899C"
      d="M15.328.099H5.673c-.815 0-1.48.686-1.48 1.528v18.747c0 .84.664 1.528 1.48 1.528h9.655c.815 0 1.48-.687 1.48-1.528V1.627c0-.842-.667-1.528-1.48-1.528zm.45 18.976H5.221V2.521H15.78v16.554z"
    />
  </SVG>
);

Phone.propTypes = {
  viewBox: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Phone;
