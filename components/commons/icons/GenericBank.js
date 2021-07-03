import React from 'react';
import SVG from 'components/commons/icons/SVGWrap';
import PropTypes from 'prop-types';

const GenericBank = ({
  width = 50,
  height = 50,
  viewBox = '16.26 14.71 14.71 16.258',
}) => (
  <SVG width={width} height={height} viewBox={viewBox}>
    <path
      fill="#3A3F49"
      d="M17.808 21.677v5.42h2.323v-5.42h-2.323zm4.646 0v5.42h2.322v-5.42h-2.322zm-6.194 9.29h14.71v-2.322H16.26v2.323zm10.839-9.29v5.42h2.322v-5.42H27.1zm-3.484-6.967l-7.355 3.87v1.549h14.71v-1.548l-7.355-3.871z"
    />
  </SVG>
);

GenericBank.propTypes = {
  viewBox: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default GenericBank;
