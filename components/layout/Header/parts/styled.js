import styled from 'styled-components';
import { color } from 'utils';
// import brixLogo from 'public/img/brix.svg';
import nnnLogo from 'public/img/newnnn.svg';
import { sizes } from 'utils';
import { BRIX } from 'utils/enums/site';

export const Container = styled.div`
  position: relative;
  flex: 0 0 auto;
  color: ${color('headerColor')};

  @media print {
    display: none;
  }
`;

export const LogoWrapper = styled.div`
  float: left;
`;

export const LogoLink = styled.a`
  width: 123.82px;
  height: 35.48px;
  display: inline-block;
  margin-top: -14px;
  vertical-align: middle;
  background-image: url(${nnnLogo});
  background-position: ${({ theme }) => (theme.siteId === BRIX ? 'center center' : 'left center')};
  background-size: contain;
  background-repeat: no-repeat;
  @media (min-width: ${sizes.mobile}px) {
    width: 122.33px;
    height: 35.05px;
  }
  @media (min-width: ${sizes.extraLarge}px) {
    width: 188.46px;
    height: 54px;
  }
`;
