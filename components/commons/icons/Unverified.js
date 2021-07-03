import React from 'react';
import SVG from 'components/commons/icons/SVGWrap';
import PropTypes from 'prop-types';

const Unverified = ({
  width = '18',
  height = '18',
  viewBox = '0 0 18 18',
  fill = '#E26877',
}) => (
  <SVG viewBox={viewBox} width={width} height={height}>
    <path
      d="M9 0a9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9zm.078 10.994c.595 0 1.079-.427 1.079-.955v-5.09c0-.527-.484-.955-1.079-.955-.594 0-1.078.428-1.078.955v5.09c0 .528.484.955 1.078.955zm0 3.315c.595 0 1.079-.488 1.079-1.09v-.182c0-.601-.484-1.09-1.079-1.09-.594 0-1.078.488-1.078 1.09v.181c0 .603.484 1.09 1.078 1.09z"
      fill={fill}
      fillRule="nonzero"
    />
  </SVG>
);

Unverified.propTypes = {
  viewBox: PropTypes.string,
  fill: PropTypes.element,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Unverified;
