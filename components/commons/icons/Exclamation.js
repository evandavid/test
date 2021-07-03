import React from 'react';
import SVG from 'components/commons/icons/SVGWrap';
import PropTypes from 'prop-types';

const Exclamation = ({ width = 50, height = 50, viewBox = '0 0 50 50' }) => (
  <SVG width={width} height={height} viewBox={viewBox}>
    <path
      fill="#E26877"
      fillRule="evenodd"
      d="M49.002 36.353L31.48 4.898a7.326 7.326 0 0 0-12.95 0L1.008 36.353C-1.85 41.551 1.707 48 7.482 48h34.98c5.779 0 9.397-6.514 6.54-11.647zM24.306 14.9c1.334-.33 2.665.329 3.238 1.645.191.46.253.92.253 1.447-.064 1.447-.19 2.894-.253 4.344-.126 2.236-.253 4.475-.382 6.712-.064.724-.064 1.382-.064 2.105-.065 1.185-.952 2.105-2.096 2.105-1.143 0-2.03-.856-2.095-2.041-.191-3.488-.382-6.91-.57-10.398-.065-.92-.127-1.843-.191-2.763.002-1.511.828-2.76 2.16-3.157zm.699 26.126c-1.523 0-2.792-1.316-2.792-2.894 0-1.579 1.27-2.895 2.792-2.895 1.523 0 2.792 1.316 2.73 2.962.062 1.511-1.27 2.827-2.73 2.827z"
    />
  </SVG>
);

Exclamation.propTypes = {
  viewBox: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default Exclamation;
