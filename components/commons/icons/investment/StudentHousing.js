import React from 'react';
import theme from '#theme';
import { BRIX } from '#features/site/enum';
import { withSiteId } from '#features/site/hoc';
import PropTypes from 'prop-types';

const StudentHousing = ({
  width = '75',
  height = '75',
  viewBox = '0 0 108 108',
  stroke,
  strokeWidth = 2.5,
  siteId,
}) => {
  const { colors } = theme(siteId);

  return (
    <svg width={width} height={height} viewBox={viewBox}>
      <g
        fill="none"
        stroke={
          stroke || (siteId === BRIX ? colors.iconsSecondary : colors.primary)
        }
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
      >
        <polygon points="5.2,17.8 5.2,101.5 19.6,101.5 19.6,81 40,81 40,101.5 54.5,101.5 54.5,4.8" />
        <rect x="10.5" y="24.3" width="10" height="10.6" />
        <rect x="25.1" y="24.3" width="10" height="10.6" />
        <rect x="39.7" y="24.3" width="10" height="10.6" />
        <rect x="10.5" y="41.6" width="10" height="10.6" />
        <rect x="25.1" y="41.6" width="10" height="10.6" />
        <rect x="39.7" y="41.6" width="10" height="10.6" />
        <rect x="10.5" y="58.9" width="10" height="10.6" />
        <rect x="25.1" y="58.9" width="10" height="10.6" />
        <rect x="39.7" y="58.9" width="10" height="10.6" />
        <polygon points="104,34.9 104,101.5 89.4,101.5 89.4,81 69.1,81 69.1,101.5 54.5,101.5 54.5,21.7" />
        <rect x="88.7" y="41.6" width="10" height="10.6" />
        <rect x="74.1" y="41.6" width="10" height="10.6" />
        <rect x="59.3" y="41.6" width="10" height="10.6" />
        <rect x="88.7" y="59.1" width="10" height="10.6" />
        <rect x="74.1" y="59.1" width="10" height="10.6" />
        <rect x="59.3" y="59.1" width="10" height="10.6" />
      </g>
    </svg>
  );
};

StudentHousing.propTypes = {
  viewBox: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default withSiteId(StudentHousing);
