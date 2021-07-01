import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SVG = styled.svg`
  vertical-align: middle;
`;

const SvgWrap = ({ viewBox, children, width, height, ...rest }) => (
  <SVG viewBox={viewBox} width={width} height={height} {...rest}>
    {children}
  </SVG>
);

SvgWrap.propTypes = {
  viewBox: PropTypes.string,
  children: PropTypes.element,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default SvgWrap;
