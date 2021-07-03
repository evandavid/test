import React from 'react';
import SVG from 'components/commons/icons/SVGWrap';
import PropTypes from 'prop-types';

const Users = ({
  width = 59,
  height = 55,
  viewBox = '0 0 59 55',
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
      d="M52.719 44.361l-9.223-4.505a3.43 3.43 0 0 1-1.944-3.075v-3.536c.258-.287.556-.658.873-1.096a20.561 20.561 0 0 0 2.866-5.645c1.182-.356 2.054-1.424 2.054-2.693v-3.773c0-.83-.378-1.573-.966-2.092v-5.455S47.525 4 35.76 4c-11.768 0-10.621 8.49-10.621 8.49v5.456a2.787 2.787 0 0 0-.966 2.092v3.773c0 .995.535 1.87 1.336 2.375.964 4.106 3.492 7.06 3.492 7.06v3.447a3.426 3.426 0 0 1-1.834 3.018l-8.613 4.59c-2.488 1.326-4.036 3.874-4.036 6.643V54H57v-2.87c0-2.867-1.658-5.487-4.281-6.769zm-34.166-.06l5.741-3.059c-.033-.03-.006-.04.063-.034l2.81-1.497A3.426 3.426 0 0 0 29 36.693v-3.448s-1.025-1.203-2.02-3.135l-.002-.002c-.13-.252-.258-.52-.384-.796l-.052-.114a18.496 18.496 0 0 1-.374-.89l-.022-.062a17.41 17.41 0 0 1-.296-.844l-.074-.238c-.097-.319-.19-.643-.268-.978-.8-.506-1.336-1.38-1.336-2.375v-3.773c0-.83.378-1.573.966-2.092V12.62c-1.365-1.035-3.479-2.015-6.759-2.015-9.233 0-9.655 7.547-9.655 7.547v4.712c-.508.448-.965 1.089-.965 1.806v3.26c0 .858.462 1.613 1.152 2.05.834 3.546 3.63 6.096 3.63 6.096v2.979a2.957 2.957 0 0 1-1.582 2.605l-6.473 3.966C2.337 46.77 1 48.97 1 51.36V54h13.517v-3.056c0-2.769 1.548-5.317 4.036-6.642z"
    />
  </SVG>
);

Users.propTypes = {
  viewBox: PropTypes.string,
  stroke: PropTypes.element,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Users;
