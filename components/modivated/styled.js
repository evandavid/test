import styled from 'styled-components';
import * as boxiconsSolid from '@styled-icons/boxicons-solid';
import { media, sizes, color } from 'utils';

export const ModivatedSection = styled.section`
  margin: 50px auto;
  display: block;
  padding: 0 36px;

  ${media.mobile`
    padding: 0 48px;
  `}

  ${media.desktop`
    padding: 0 48px;
  `}

  ${media.large`
    padding: 0 80px;
  `}

  ${media.larger`
    padding: 0 100px;
  `}

  ${media.extraLarge`
    padding: 0 140px;
    max-width: 1920px;
  `}
`;

export const ModivatedContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  ${media.extraLarge`
    margin: 0 -15px;
  `}
`;

export const ModivatedRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

const Column = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 992px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
`;

export const ModivatedOrderOne = styled(Column)`
  order: 1;

  @media (min-width: 992px) {
    order: 2;
  }
`;

export const ModivatedOrderTwo = styled(Column)`
  order: 2;

  @media (min-width: 992px) {
    order: 1;
  }

  img {
    padding: 25px 0;
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    border-style: none;

    @media (max-width: ${sizes.larger -
        0.1}px) and (min-width: ${sizes.desktop}px) {
      object-fit: cover;
      height: 100%;
    }
  }
`;

export const ModivatedTextHolder = styled.div`
  margin: 20px auto;
  color: #040404 !important;

  @media (max-width: ${sizes.larger -
      0.1}px) and (min-width: ${sizes.desktop}px) {
    padding-left: 50px;
    padding-right: 50px;
  }

  ${media.larger`
    padding-left: 100px;
    padding-right: 10px;
  `}

  h4 {
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 24px;
    line-height: 1.2;
    margin-top: 0;

    @media (max-width: ${sizes.larger -
        0.1}px) and (min-width: ${sizes.desktop}px) {
      font-size: 2rem;
    }

    ${media.larger`
      font-size: 48px;
    `}
  }

  p {
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.15px;
    margin-top: 0;
    margin-bottom: 1rem;

    ${media.desktop`
      font-size: 20px;
    `}
  }
`;

export const ModivatedList = styled.ul`
  padding: 10px 0;
  margin: 0;
  list-style: none;
`;

export const ModivatedListItem = styled.li`
  display: flex;
  font-size: 18px;
  margin: 10px auto;
  align-items: center;
  flex-direction: row;
  align-items: flex-start;
  letter-spacing: 0.14px;

  @media (max-width: ${sizes.desktop - 0.1}px) {
    font-size: 16px;
  }
`;

export const StyledCheckCircle = styled(boxiconsSolid.CheckCircle)`
  color: ${color('secondary')};
  margin-right: 15px;
  font-weight: 900;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
  width: 20px;
`;

export const ModivatedTextWrap = styled.div`
  width: 100%;
  color: ${color('text')};
`;

export const SignUpNow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Disclosure = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 24px;
`;

export const DisclosureLink = styled.a`
  font-size: 16px;
  width: 216px;
  border-radius: 5px;

  span {
    color: ${color('howItWorkLink')};
    text-decoration: underline;
    font-size: 16px;
  }

  div[role='tooltip'] {
    color: ${color('tooltipText')};
    font-size: 16px;
    font-weight: normal;
    box-shadow: none;
    border: 1px solid ${color('tooltipBorder')};
    line-height: 2;
    border-radius: 5px;
  }
`;

export const TooltipText = styled.span`
  max-height: 80vh;
  overflow: auto;
  display: block;

  color: '#6C6A68' !important;
  font-size: 16px;
  font-weight: normal;
  box-shadow: none;
  border: 1px solid rgb(230, 230, 226);
  line-height: 2;
  border-radius: 5px;
  text-align: left;

  padding: 21px;
  text-decoration: none !important;
  border-radius: 12px;
  min-height: 34px;
  max-width: 495px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 24%);
`;
