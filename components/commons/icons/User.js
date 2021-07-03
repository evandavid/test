import React from 'react';
import SVG from 'components/commons/icons/SVGWrap';
import PropTypes from 'prop-types';

const User = ({
  width = 55,
  height = 55,
  viewBox = '0 0 55 55',
  stroke = '#57607F',
}) => (
  <SVG width={width} height={height} viewBox={viewBox}>
    <path
      fill="none"
      fillRule="evenodd"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M47 46.65a7.334 7.334 0 0 0-4.03-6.555l-8.685-4.364a3.332 3.332 0 0 1-1.83-2.979v-3.424c.243-.28.523-.638.821-1.062a20.139 20.139 0 0 0 2.7-5.468 2.74 2.74 0 0 0 1.933-2.608v-3.656c0-.804-.355-1.523-.909-2.025V9.224S38.08 1 27 1 17 9.224 17 9.224v5.285a2.732 2.732 0 0 0-.91 2.025v3.656c0 .963.505 1.81 1.258 2.3.908 3.977 3.288 6.838 3.288 6.838v3.34c0 1.218-.661 2.339-1.726 2.923l-8.11 4.446A7.334 7.334 0 0 0 7 46.471v2.96C7 51.954 15.955 54 27 54s20-2.046 20-4.569V46.65z"
    />
  </SVG>
);

User.propTypes = {
  viewBox: PropTypes.string,
  stroke: PropTypes.element,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default User;
