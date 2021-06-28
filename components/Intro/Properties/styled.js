import styled from 'styled-components';
import { color, media } from '#theme';

export const Header = styled.div`
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  color: ${color('textHomepage')};

  h4 {
    font-size: 25px;
    margin-bottom: 14px;
    font-weight: 500;
  }

  p {
    font-size: 18px;
    letter-spacing: 0.15px;
    margin-top: 0;
    margin-bottom: 8px;
  }

  ${media.mobile`
        h4 {
            font-size: 25px;
        }

        p {
            font-size: 18px;
        }
    `}

  ${media.desktop`
        h4 {
            font-size: 48px;
        }

        p {
            font-size: 20px;
        }
    `}
`;

export const Heading = styled.h1`
  margin-top: 4rem;
  font-size: 42px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.bp.mobile}px) {
    font-size: 34px;
  }
`;

export const Wrapper = styled.section`
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  background: ${props => color(props['data-background']) || '#fff'};
  padding: 44px 37px 158px;
  ${media.mobile`
    padding: 44px 85px 150px ;
  `}
  ${media.desktop`
    padding: 88px 0 163px ;
  `}
  ${media.large`
    padding: 88px 0 176px ;
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;

export const ListContainer = styled.div`
  padding: 0 37px;
  ${media.mobile`
    padding: 0 85px  ;
  `}
  ${media.desktop`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0;
    & > div:first-child {
        max-width: 1920px;
        position: relative;
        width: 100%;
        padding: 0 35px;
    }
  `}
  ${media.large`
    & > div:first-child {
        padding: 0 80px  ;
    }
  `}
  ${media.larger`
    & > div:first-child {
        padding: 0 100px  ;
    }
  `}
  ${media.extraLarge`
    & > div:first-child {
        padding: 0 140px  ;
    }
  `}
`;

export const InvestmentBanner = styled.div`
  width: 100%;
  top: -65px;
  color: #fff;
  position: static;

  color: ${color('footerLinkText')};
  font-size: 24pt;
  font-weight: 500;
  ${media.mobile`
    font-size: 25pt;
  `}

  ${media.desktop`
    font-size: 60px;
    letter-spacing: -.48px;

    padding-left: 35px;
    padding-right: 35px;
  `}

  ${media.large`
    padding-left: 80px;
    padding-right: 80px;
  `}

  ${media.larger`
    padding-left: 100px;
    padding-right: 100px;
  `}

  ${media.extraLarge`
    max-width: 1920px;
    padding-left: 140px;
    padding-right: 140px;
  `}
`;

export const Download = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 12px;

  div {
    width: auto;
    cursor: pointer;
    display: flex;
    align-items: center;

    span {
      color: ${color('text')};
      font-size: 16px;
      padding-left: 12.91px;
      letter-spacing: 0.14px;
    }
  }

  ${media.mobile`
    justify-content: flex-end;
  `}

  ${media.desktop`
    padding-top: 20px;
    padding-left: 35px;
    padding-right: 35px;
    div {
      margin-right: 0px;
    }
  `}

  ${media.large`
    padding-top: 30px;
    padding-left: 80px;
    padding-right: 80px;
    div {
      margin-right: 0;
    }
  `}

  ${media.larger`
    padding-top: 60px;
    padding-left: 100px;
    padding-right: 100px;
  `}

  ${media.extraLarge`
    max-width: 1920px;
    padding-left: 140px;
    padding-right: 140px;
  `}
`;

// CARD
export const PropertyContainer = styled(Container)`
  padding: 0 37px;
  ${media.mobile`
    padding: 0 80px;
  `}
  ${media.desktop`
    padding: 0 100px;
  `}

  ${media.extraLarge`
    padding: 0;
    & > .row {
        margin-left: 0;
        margin-right: 0;

        max-width: 1920px;
        position: relative;
        left: 50%;
        transform: translate(-50%);
        padding: 0 125px;
    }
  `}
`;

export const PropertyCardContainer = styled.div`
  box-shadow: 0px 2px 6px #00000029;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 20px 30px #00000029;
  }
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  height: 100%;
  background-color: ${color('investmentCard')};
`;

export const PropertyCardHeader = styled.div`
  background-color: ${color('background')};
  padding-bottom: 24px;
`;

export const PropertyCardImage = styled.div`
  width: 100%;
  height: 224px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }
`;

export const PropertyCardLogo = styled.div`
  position: absolute;
  width: 63px;
  height: 43px;
  left: 50%;
  top: 224px;
  transform: translate(-50%, -50%);
  background: #fff;
  text-align: center;
  line-height: 43px;
  border-radius: 3px;
  padding: 1px 4px;
  & img {
    width: 100%;
    height: 100%;
  }
`;

export const PropertyCardInfoTop = styled.li`
  background-color: #fff;
  border-bottom: 1px solid #00000029;
  padding: 16px;
  & h6 {
    color: ${color('secondary')};
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
    margin-top: 24px;
    letter-spacing: 0.12px;

    ${media.mobile`
      margin-top: 0px;
    `}

    ${media.desktop`
      margin-top: 24px;
    `}
  }
  & ul {
    display: flex;
    flex-direction: column;
    padding-top: ${props => (props.isModivInvestment ? 25 : 0)}px !important;
    & li {
      padding: 2px 0;
      &:first-child {
        color: ${color('text')};
        font-weight: 500;
        font-size: 18px;
        line-height: 18px;
        margin-top: 12px;
        letter-spacing: 0.14px;
      }
      &:nth-child(2) {
        color: #989697;
        font-size: 18px;
        line-height: 18px;
        margin-top: 12px;
        margin-bottom: 20px;
        letter-spacing: 0.16px;
      }
    }
  }
`;

export const PropertyCardInfoMiddle = styled.li`
  background-color: #fcfcfc;
  padding: 0 16px;
  border-radius: 0 0 10px 10px;
  & ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & li {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 8px 0;
      & .icon {
        width: 25px;
        height: 25px;
      }
      & .icon__info {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        & strong {
          color: ${color('text')};
          font-size: 18px;
          font-weight: 500;
          letter-spacing: 0.14px;
          & small {
            font-weight: 400;
            font-size: 14px;
          }
        }
        & p {
          margin: 0;
          font-size: 16px;
          line-height: 16px;
          font-weight: normal;
          color: #989697;
          letter-spacing: 0.12px;
        }
      }

      &:first-child {
        margin-top: 20px;
      }
      &:last-child {
        margin-bottom: 34px;
      }
    }
  }
`;

export const PropertyCardInfo = styled.div`
  min-height: 200px;
  background: #fcfcfc;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-top: -25px;
  ${media.mobile`
    min-height: 333px;
  `}
  ${media.desktop`
    min-height: 324px;
  `}
  ${media.large`
    min-height: 351px;
  `}
  ${media.larger`
    min-height: 280px;
  `}
  ${media.extraLarge`
    min-height: 270px;
  `}
  & ul {
    list-style: none;
    padding: 0;
    & li {
      padding: 0;
    }
  }
  & > ul > li {
    padding: 0 24px;
  }
`;

export const CarouselContainer = styled.div`
  width: ${props => props['data-width']}vw;
  left: ${props => props['data-left']}vw;
  transition: 0.3s;
  position: relative;
  & > div {
    display: inline-block;
    width: 100vw;
  }
`;

export const LearnMoreInvestment = styled(LearnMore)`
  margin-top: 24px;
  margin-bottom: 48px;
`;

export const CarouselIndicactorContainer = styled.ol`
  list-style: none;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 15;
  display: flex;
  justify-content: center;
  padding-left: 0;

  & li {
    background-color: #bcbfc1;
    height: 5px;
    box-sizing: content-box;
    flex: 0 1 auto;
    width: 12px;
    margin-right: 6px;
    margin-left: 6px;

    text-indent: -999px;
    cursor: pointer;
    background-clip: padding-box;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: 0.5;
    transition: opacity 0.6s ease;

    ${media.mobile`
      width: 30px;
      margin-right: 3px;
      margin-left: 3px;
    `}

    &.active {
      opacity: 1;
    }
  }
`;

export const ContentContainer = styled.div`
  margin-top: -120px;

  ${media.mobile`
    margin-top: -120px;
  `}
  ${media.desktop`
    margin-top: -132px;
  `}

  & .property-row-box {
    display: flex;
    flex-wrap: wrap;

    & .property-cell-box {
      margin-bottom: 33px;
      flex: 1;

      ${media.mobile`
        margin-bottom: 37px;
        flex: none;
      `}
      ${media.desktop`
        margin-bottom: 41px;
      `}
    }
  }
`;

export const Pagination = styled.ul`
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: 0.25rem;
  & li {
    color: #ccc !important;
    border: none;
    & div {
      color: #ccc !important;
      position: relative;
      display: block;
      padding: 0.5rem 0.75rem;
      margin-left: -1px;
      line-height: 1.25;
      background-color: #fff;
      border: 0px solid #dee2e6;
      cursor: pointer;
      outline: none;
      &.disabled {
        opacity: 0.7;
        pointer-events: none;
        & svg {
          opacity: 0.3;
        }
      }
      &.active {
        color: #212121 !important;
      }
    }
    &:first-child div {
      background: #ebeced !important;
      color: #adabac !important;
      margin-left: 0;
      border-top-left-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
      padding-top: 5px;
      padding-bottom: 1px;
    }
    &:last-child div {
      background: #ebeced !important;
      color: ${color('text')} !important;
      border-top-right-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
      padding-top: 5px;
      padding-bottom: 1px;
    }
  }
`;

export const DashboardPropertyContainer = styled.div`
  background: #f8f8f7;
  padding-top: 44px;

  & h4 {
    margin-bottom: 40px;
  }
  ${media.desktop`
    padding-top: 124px;
  `}
`;


export const LearnMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 40px;

  ${media.mobile`
        margin-top: 65px;
    `}

  ${media.desktop`
        margin-top: 76px;
    `}
`;
