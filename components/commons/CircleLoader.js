import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';

const CircleLoader = ({ size, extendClass }) => (
  <span className={cn('circle-loader-wrap', extendClass)}>
    <svg className="circle-loader" width={size} height={size}>
      <circle cx={size / 2} cy={size / 2} r={size / 4} />
    </svg>
  </span>
);

export default CircleLoader;

CircleLoader.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  extendClass: PropTypes.string,
};
