import React from 'react';
import theme from '#theme';
import { withSiteId } from '#features/site/hoc';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SVG = styled.svg`
  margin: 2rem;
`;

const NNNop = ({
  width = 113,
  height = 111,
  viewBox = '0 0 113 111',
  siteId,
}) => (
  <SVG width={width} height={height} viewBox={viewBox}>
    <path
      fill={theme(siteId).colors.iconsSecondary}
      d="M56.5 0L112 52h-11v5h-3.001v34H101v6h8v6h4v8H0v-8h4v-6h8v-6h3V57h-3v-5H1L56.5 0zM111 105H2v4h109v-4zm-4-6H6v4h101v-4zM85 52h-8v5h-3v34h3v6h8v-6h2.999V57H85v-5zm-24 0h-9v5h-3v34h3v6h9v-6h3V57h-3v-5zm-25 0h-8v5h-3v34h3v6h8v-6h3V57h-3v-5zM26 93H14v4h12v-4zm24 0H38v4h12v-4zm25 0H63v4h12v-4zm24 0H87v4h12v-4zM23 57h-6v34h6V57zm24 0h-6v34h6V57zm25 0h-6v34h6V57zm23.999 0h-6v34h6V57zM26 52H14v3h12v-3zm24 0H38v3h12v-3zm25 0H63v3h12v-3zm24 0H87v3h12v-3zM56.5 2.74L6.059 50H106.94L56.5 2.74z"
    />
  </SVG>
);

NNNop.propTypes = {
  viewBox: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default withSiteId(NNNop);
