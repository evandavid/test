import styled, { css } from 'styled-components';
import { media, color } from 'utils';
import BtnCommon from 'components/commons/buttons/BtnCommon';

export const ColoredButton = styled(BtnCommon)`
  height: 50px;
  line-height: 50px;
  padding: 0 24px;
  width: 137px !important;

  ${media.desktop`
    padding: 0 12px;
    font-size: 0.85rem;
    width: auto !important;
  `}
  ${media.larger`
    font-size: 1rem;
    padding: 0 12px;
  `}
  ${media.extraLarge`
    font-size: 16px;
  `}
`;

export const MenuLink = styled.div`
  font-size: 18px;
  margin-right: 25px;
  position: relative;
  padding: 12px 0;
  font-weight: 500;
  cursor: pointer;
  outline: none;

  ${media.desktop`
    font-size: 0.85rem;
    padding: 0;
    margin-right: 8px;
    &:hover,
    &.active {
      color: ${color('dropdownColorActive')};
      &:before {
        display: block;
      }
    }
  `}
  ${media.larger`
    font-size: 1rem;
    margin-right: 12px;
  `}
  ${media.extraLarge`
    font-size: 16px;
    margin-right: 12px;
  `}
  &:before {
    content: ' ';
    display: none;
    height: 4px;
    background: ${color('secondary')};
    width: 100%;
    position: absolute;
    bottom: -12px;
    border-radius: 5px 5px 0px 0px;
  }
`;

export const WithDropdown = styled(MenuLink)`
  cursor: pointer;
  outline: none;
  position: relative;

  & > i {
    position: absolute;
    right: 0;
    top: 14px;
    transform: rotate(90deg);
    font-size: 13px;
  }

  &:hover {
    & > i {
      transform: rotate(270deg);
    }
  }

  & > div {
    display: none;
    padding: 12px 24px;
    & > a > div {
      margin-right: 0;
      &:before {
        bottom: 0;
      }
      span {
        color: ${color('tooltipText')};
        letter-spacing: -0.24px;
      }
    }
  }

  ${props =>
    props['data-opened'] &&
    css`
      & > div {
        display: block;
      }
    `}

  ${media.desktop`
    &:hover {
      & > div {
        display: block;
      }
      & > i {
        transform: rotate(270deg);
      }
    }
    & > i {
      position: initial;
      right: initial;
      top: initial;
      transform: rotate(90deg);
      display: inline-block;
      margin-left: 8px;
      font-size: 13px;
    }
    & > div {
      display: none;
      position: absolute;
      top: 35px;
      background: ${color('dropdownBg')};
      padding: 0 24px;
      width: 240px;
      height: 265px;
      left: -24px;
      text-align: left;
      padding-top: 25px;
      & > a > div {
        margin-right: 0;
        &:before {
          bottom: 0;
        }
      }
    }
  `}
  ${media.large`
    & > i {
      margin-left: 24px;
    }
  `}
  ${media.larger`
    & > i {
      margin-left: 24px;
    }
  `}
  ${media.extraLarge`
    & > i {
      margin-left: 24px;
    }
  `}


`;

export const SignupWrapper = styled.li`
  clear: both;
  padding-left: 0 !important;
  padding-bottom: 42px;

  ${media.mobile`
    padding-bottom: 46px;
  `}

  ${media.desktop`
    padding-bottom: inherit;
  `}

  & div {
    margin-top: 12px;
    width: 200px;
    text-align: center;
  }
  ${media.desktop`
    & div {
      margin-top: 0;
      width: auto;
      text-align: center;
    }
  `}
`;

export const HamburgerMenu = styled.button`
  right: 30px;
  ${media.mobile`right: 72px`}
`;
