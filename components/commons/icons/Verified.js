import React from 'react';
import SVG from 'components/commons/icons/SVGWrap';
import PropTypes from 'prop-types';

const Verified = ({
  width = '18',
  height = '18',
  viewBox = '0 0 18 18',
  fill = '#68C769',
}) => (
  <SVG viewBox={viewBox} width={width} height={height}>
    <path
      d="M9 .144C4.116.144.144 4.116.144 9S4.116 17.856 9 17.856 17.856 13.884 17.856 9 13.884.144 9 .144zm4.91 7.052L8.252 12.85a.932.932 0 0 1-.654.271v.383l-.008-.383a.931.931 0 0 1-.658-.283L4.08 9.883a.925.925 0 0 1 1.33-1.285l2.2 2.28 4.99-4.99a.92.92 0 0 1 .655-.271.926.926 0 0 1 .655 1.579z"
      fill={fill}
      fillRule="nonzero"
    />
  </SVG>
);

Verified.propTypes = {
  viewBox: PropTypes.string,
  fill: PropTypes.element,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Verified;
