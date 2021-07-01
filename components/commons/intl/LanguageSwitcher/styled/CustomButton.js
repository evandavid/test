import styled, { css } from 'styled-components';

export default styled.button`
  display: block;
  background: none;
  color: ${props => props.theme.colors.grayText};
  border: none;
  padding: 0;
  font: inherit;
  font-size: ${props => props.theme.fontSizes.small};
  line-height: 14px;
  opacity: ${props => (props.disabled ? 0.5 : 1)};

  &:not(:last-child) {
    margin-bottom: 14px;
  }
  &:hover {
    color: white;
  }
  &:focus {
    outline: 0;
  }

  ${props =>
    props.compact &&
    css`
      position: absolute;
      transform: translate(0, -50%);
      right: ${props => (props.loggedIn ? '140px' : '65px')};
      ${props =>
        !props.isMenuVisible &&
        css`
          top: calc(50% - 10px);
        `};

      ${props =>
        props.isMenuVisible &&
        css`
          top: 20px;
          ${props => props.theme.media.mobile`
        top: 40px;
      `}
        `}
    `}
`;
