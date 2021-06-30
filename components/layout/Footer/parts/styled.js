import styled from 'styled-components';
import { media, color } from 'utils';
import nnnLogo from 'public/img/newnnn.svg';

export const FooterContainer = styled.div`
  text-align: left;

  p {
    margin: 0;
  }
`;

export const FooterLogo = styled.div`
  margin-bottom: 40.46px;

  div {
    background-size: 138px 39.54px;
    width: 138px;
    height: 39.54px;
  }

  ${media.mobile`
    margin-bottom: 34.24px;

    div {
      background-size: 170.19px 48.76px;
      width: 170.19px;
      height: 48.76px;
    }
  `}

  ${media.desktop`
    margin-bottom: 0;

    div {
      background-size: 189px 54px;
      width: 189px;
      height: 54px;
    }
  `}

  ${media.extraLarge`
    margin-bottom: 0;
    margin-top: 10px;

    div {
      background-size: 251.42px 72.04px;
      width: 251.42px;
      height: 72.04px;
    }
  `}

  & .contact__logo-nnn {
    background-image: url(${nnnLogo});
  }
`;

export const FooterText = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: ${color('footerLinkText')};
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.14px;
  margin: 0 0 35px 0;
  display: flex;
  align-items: center;
  line-height: 1.5;

  ${media.desktop`
        margin: 6px 0;
        padding: 6px 0;
    `}

  ${media.extraLarge`
        margin: 0 0 20px 0;
        padding: 0 0 11px 0;
    `}
`;

export const FooterLink = styled.a`
  color: ${color('secondary')};
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.14px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  line-height: 1.5;

  :hover {
    text-decoration: underline;
  }

  span {
    color: ${color('footerLinkText')};

    :hover {
      text-decoration: underline;
      color: #0056b3;
    }
  }

  ${media.mobile`
    margin-bottom: 35px;
  `}

  ${media.desktop`
    margin: 6px 0;
    padding: 6px 0;
  `}

  ${media.extraLarge`
    margin: 0 0 20px 0;
    padding: 0 0 11px 0;
  `}
`;

export const FooterSocialMedia = styled.ul`
  flex-direction: row;
  display: flex;
  margin: 34.25px 0;
  padding: 0;
  list-style: none;

  li {
    margin: 0 16px 0 0;
    font-size: 2.2rem;

    a {
      img {
        width: 31.5px;
        height: 31.5px;
      }
    }
  }

  ${media.mobile`
    margin: 44.25px 0;
  `}

  ${media.desktop`
    margin: 31px 0;

    li {
      margin: 0 10px 0 0;
    }
  `}

  ${media.extraLarge`
    margin: 40px 0;
  `}
`;
