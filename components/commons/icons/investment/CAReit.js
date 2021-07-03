import React from 'react';
import SVG from 'components/commons/icons/SVGWrap';
import theme from '#theme';
import { BRIX } from '#features/site/enum';
import { withSiteId } from '#features/site/hoc';
import PropTypes from 'prop-types';

const CAReit = ({
  width = 82.5,
  height = 66,
  viewBox = '0 0 82.5 66',
  stroke,
  strokeWidth = 2,
  siteId,
}) => {
  const { colors } = theme(siteId);

  return (
    <SVG width={width} height={height} viewBox={viewBox}>
      <path
        d="M17.3 61.7h7.2c5.2-21.7-1.2-36.9-1.2-36.9-2.2 5.8-11 10.6-11 10.6-2.8-13.7 6.5-16.6 6.5-16.6-5.4-.9-10.9.4-15.2 3.7C3 10.2 18 12.9 18 12.9c-1.1-2.9-6.5-5.3-6.5-5.3 7.9-4.6 10.7 4.3 10.7 4.3S25.1.6 34.7 5.5c0 0-7.4 3.8-7.8 7.1 0 0 14.2-7.9 17.6 4.8 0 0-9.3-3.5-15.5.3 0 0 9.7 2.6 10.7 14.7 0 0-9-2.6-11.3-5.9 4.5 11.2 5.8 23.4 3.7 35.3h23.3c-1.8-9.6-.7-19.6 3.1-28.6-1.9 2.7-9.3 4.8-9.3 4.8C50 28 58 25.9 58 25.9c-5.2-3.2-13-.3-13-.3 2.8-10.5 14.5-4 14.5-4-.4-2.7-6.5-5.8-6.5-5.8 7.9-4 10.3 5.3 10.3 5.3s2.2-7.4 8.8-3.6c0 0-4.5 2-5.4 4.4 0 0 12.4-2.2 11.9 7.9-3.6-2.7-8.1-3.8-12.6-3 0 0 7.7 2.4 5.4 13.7 0 0-7.3-4-9.1-8.8 0 0-5.6 12.2-1.3 30.1h5.9"
        fill="none"
        stroke={
          stroke || (siteId === BRIX ? colors.iconsSecondary : colors.primary)
        }
        strokeWidth={strokeWidth}
        strokeMiterlimit={10}
      />
    </SVG>
  );
};

CAReit.propTypes = {
  viewBox: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default withSiteId(CAReit);
