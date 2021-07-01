import React from 'react';
import { us as en, cn as zh, de } from 'components/commons/flags';
import PropTypes from 'prop-types';

const flags = { en, zh, de };

const Flag = ({ country, width, height, viewBox }) => {
  const Flag = flags[country];
  return Flag ? <Flag width={width} height={height} viewBox={viewBox} /> : null;
};

Flag.propTypes = {
  country: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  viewBox: PropTypes.string,
};

export default Flag;
