import React from 'react';
import SVG from 'components/commons/icons/SVGWrap';
import PropTypes from 'prop-types';

const Ribbon = ({
  width = 36,
  height = 55,
  viewBox = '0 0 36 55',
  stroke = '#57607F',
}) => (
  <SVG width={width} height={height} viewBox={viewBox}>
    <path
      fill="none"
      fillRule="evenodd"
      stroke={stroke}
      strokeLinejoin="round"
      strokeWidth="2"
      d="M26.5 30.81V54L18 45.52 9.5 54V30.81c-2.816.926-5.543-1.999-4.204-4.808a3.472 3.472 0 0 0-1.98-4.766c-3.088-1.096-3.088-5.455 0-6.55a3.474 3.474 0 0 0 1.98-4.768C3.887 6.965 6.977 3.882 9.937 5.285a3.486 3.486 0 0 0 4.78-1.973c1.098-3.083 5.468-3.083 6.566 0a3.486 3.486 0 0 0 4.78 1.973c2.96-1.403 6.05 1.68 4.64 4.633a3.474 3.474 0 0 0 1.981 4.767c3.088 1.096 3.088 5.455 0 6.551a3.472 3.472 0 0 0-1.98 4.766c1.34 2.81-1.388 5.734-4.204 4.807zm-.434-.175a3.487 3.487 0 0 0-4.782 1.974c-1.1 3.08-5.469 3.08-6.567 0 1.098 3.08 5.468 3.08 6.566 0a3.487 3.487 0 0 1 4.783-1.974z"
    />
  </SVG>
);

Ribbon.propTypes = {
  viewBox: PropTypes.string,
  stroke: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Ribbon;
