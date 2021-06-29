import styled, { css } from 'styled-components';
import { media, sizes, color } from 'utils';
export const Banner = styled.div`
  height: 460px;
  overflow: hidden;
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('/banner-image.png');
  background-size: cover;

  ${media.mobile`
    height: 365px;
  `}

  ${media.desktop`
    height: 635px;
  `}
`;

export const BannerDescription = styled.div`
  position: absolute;
  width: 100%;
  color: #fff !important;
  top: 44px;
  left: 0;
  height: 310px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${media.mobile`
    width: 100%;
    top: 46px;
    left: 0%;
  `}

  ${media.desktop`
    top: 18%;
  `}

  ${media.large`
    top: 18%;
    width: 80%;
    left: 10%;
  `}

  ${media.extraLarge`
    width: 100%;
    top: 18%;
    left: 0;
  `}
`;

export const BannerHeading = styled.h3`
  font-weight: 400 !important;
  font-size: 25px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 24px;
  font-weight: 500;
  line-height: 1.2;
  color: #fff !important;
  width: 286px;

  ${media.mobile`
    width: 100%;
  `}

  ${media.desktop`
    margin-left: 0px;
    margin-right: 0px;
    font-size: 60px;
    padding: 0 30px;
  `}

  ${media.extraLarge`
    margin-left: 0px;
    margin-right: 0px;
    font-size: 60px;
    padding: 0;
    letter-spacing: -0.48px;
    line-height: 66px;
  `}
`;

export const BannerParagraph = styled.p`
  font-size: 20px;
  color: #fff !important;
  margin: 10px auto;
  letter-spacing: 0.15px;
  width: 310px;
  margin: 0 0 37px 0;
  font-weight: 300;
  line-height: 28px;

  ${media.mobile`
    width: 556px;
  `}

  @media (max-width: ${sizes.desktop - 0.1}px) {
    font-size: 18px;
  }

  ${media.desktop`
    width: 644px;
  `}

  ${media.extraLarge`
    width: 674px;
  `}
`;

export const BannerBtns = styled.div`
  text-align: center;
  margin: 0 auto;
  padding-bottom: 42px;

  ${media.small`
    width: 100%;
  `}

  ${media.mobile`
    padding-bottom: 46px;
  `}
`;

const BtnStyle = css`
  display: inline-block;
  font-weight: 500;
  color: ${color('text')};
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const BannerButtonHIW = styled.a`
  margin: 7px;
  color: ${color('text')};
  background-color: #fff !important;

  ${BtnStyle}

  ${media.extraLarge`
    width: 168px;
    padding: 12px 0;
  `}
`;

export const BannerButtonInvestments = styled.a`
  margin: 7px;
  color: #f8f9fa !important;
  border-color: #f8f9fa !important;

  :hover {
    color: #343a40 !important;
    background-color: #fff !important;
  }

  ${BtnStyle}

  ${media.extraLarge`
    width: 168px;
    padding: 12px 0;
  `}
`;
