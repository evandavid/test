import React from 'react';
import SVG from 'components/commons/icons/SVGWrap';
import PropTypes from 'prop-types';

const Cog = ({ width = 28, height = 23, viewBox = '0 0 48 48' }) => (
  <SVG width={width} height={height} viewBox={viewBox}>
    <g
      id="Updates"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g
        id="1-1-1-Preferences"
        transform="translate(-1124.000000, -144.000000)"
        fill="#3A3F49"
      >
        <path
          d="M1126.99293,154.520529 C1126.72249,154.780443 1126.2902,154.77563 1126.02457,154.511203 L1125.4888,153.974227 C1125.22437,153.7098 1125.21835,153.278414 1125.47947,153.007068 L1125.50173,152.983603 C1125.76135,152.71346 1125.85671,152.216193 1125.71201,151.868437 L1125.64733,151.711105 C1125.50414,151.365454 1125.08569,151.078766 1124.70965,151.070644 L1124.67686,151.070644 C1124.30294,151.06222 1124,150.753271 1124,150.379644 L1124,149.620356 C1123.9988,149.246729 1124.30083,148.93778 1124.67686,148.929356 L1124.70965,148.929356 C1125.08328,148.921234 1125.50294,148.636952 1125.64613,148.288895 L1125.71201,148.131563 C1125.85551,147.786213 1125.76255,147.287743 1125.50173,147.016397 L1125.47947,146.992932 C1125.21956,146.722489 1125.22437,146.2902 1125.4888,146.02457 L1126.02577,145.488797 C1126.2902,145.22437 1126.72159,145.218353 1126.99293,145.479471 L1127.0164,145.501732 C1127.28654,145.761346 1127.78381,145.856708 1128.13156,145.712011 L1128.2889,145.647333 C1128.63455,145.504139 1128.92123,145.085689 1128.92936,144.709655 L1128.92936,144.676865 C1128.93778,144.302936 1129.24673,144.000004 1129.62036,144.000004 L1130.37964,144.000004 C1130.75327,143.9988 1131.06222,144.300831 1131.07064,144.676865 L1131.07064,144.709655 C1131.07877,145.083282 1131.36305,145.502936 1131.7111,145.646129 L1131.86844,145.712011 C1132.21379,145.855505 1132.71226,145.76255 1132.9836,145.501732 L1133.00707,145.479471 C1133.27751,145.219557 1133.7098,145.22437 1133.97543,145.488797 L1134.5112,146.025773 C1134.77563,146.2902 1134.78165,146.721586 1134.52053,146.992932 L1134.49827,147.016397 C1134.23865,147.28654 1134.14329,147.783807 1134.28799,148.131563 L1134.35267,148.288895 C1134.49586,148.634546 1134.91431,148.921234 1135.29035,148.929356 L1135.32314,148.929356 C1135.69706,148.93778 1136,149.246729 1136,149.620356 L1136,150.379644 C1136.0012,150.753271 1135.69917,151.06222 1135.32314,151.070644 L1135.29035,151.070644 C1134.91672,151.078766 1134.49706,151.363048 1134.35387,151.711105 L1134.28799,151.868437 C1134.14449,152.213787 1134.23745,152.712257 1134.49827,152.983603 L1134.52053,153.007068 C1134.78044,153.277511 1134.77563,153.7098 1134.5112,153.97543 L1133.97423,154.511203 C1133.7098,154.77563 1133.27841,154.781647 1133.00707,154.520529 L1132.9836,154.498268 C1132.71346,154.238654 1132.21619,154.143292 1131.86844,154.287989 L1131.7111,154.352667 C1131.36545,154.495861 1131.07877,154.914311 1131.07064,155.290345 L1131.07064,155.323135 C1131.06222,155.697064 1130.75327,155.999996 1130.37964,155.999996 L1129.62036,155.999996 C1129.24673,156.0012 1128.93778,155.699169 1128.92936,155.323135 L1128.92936,155.290345 C1128.92123,154.916718 1128.63695,154.497064 1128.2889,154.353871 L1128.13156,154.287989 C1127.78621,154.144495 1127.28774,154.23745 1127.0164,154.498268 L1126.99293,154.520529 Z M1128.8527,152.770734 C1130.38202,153.404976 1132.13618,152.678151 1132.77073,151.147296 C1133.40498,149.617978 1132.67815,147.863816 1131.1473,147.229266 C1129.61798,146.595024 1127.86382,147.321849 1127.22927,148.852704 C1126.59502,150.382022 1127.32185,152.136184 1128.8527,152.770734 Z"
          id="Page-1"
        />
      </g>
    </g>
  </SVG>
);

Cog.propTypes = {
  viewBox: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default Cog;