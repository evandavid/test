import styled from 'styled-components';
import { media, color } from 'utils';

export const NoPrintDiv = styled.div`
  @media print {
    display: none;
  }
`;

export const Container = styled.div`
  ${media.mobile`
    padding: 0;
    margin: 0;
    width: 100%;
  `}

  ${media.extraLarge`
    background: ${color('footerBackground')};
    border-top: 2px solid ${color('footerBorder')};
  `}
`;

export const RowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 64px 30px 0;
  background: ${color('footerBackground')};
  border-top: 2px solid ${color('footerBorder')};

  ${media.mobile`
    padding: 71px 81px 0;
  `}

  ${media.desktop`
    padding: 50px 80px 0;
  `}

  ${media.extraLarge`
    padding: 74.76px 140px 0;
    max-width: 1920px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    border-top: none;
  `}
`;

export const RowDisContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 30px;
  background: ${color('footerBackground')};

  ${media.mobile`
    padding: 0px 81px 40px;
  `}

  ${media.desktop`
    padding: 0px 80px 40px;
  `}

  ${media.extraLarge`
    padding: 0px 140px 40px;
    max-width: 1920px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  `}
`;

export const ColumnOne = styled.div`
  order: 4;
  margin-bottom: 54px;

  ${media.mobile`
    margin-bottom: 71px;
  `}

  ${media.desktop`
    margin-bottom: 20px;
    order: 1;
  `}
`;

export const ColumnTwo = styled.div`
  order: 1;
  margin-bottom: 54px;

  ${media.mobile`
    margin-bottom: 71px;
  `}

  ${media.desktop`
    margin-bottom: 20px;
    order: 2;
  `}
`;

export const ColumnThree = styled.div`
  order: 2;
  margin-bottom: 54px;

  ${media.mobile`
    margin-bottom: 66px;
  `}

  ${media.desktop`
    margin-bottom: 20px;
    order: 3;
  `}
`;

export const ColumnFour = styled.div`
  order: 3;
  margin-bottom: 54px;

  ${media.mobile`
    margin-bottom: 71px;
  `}

  ${media.desktop`
    margin-bottom: 20px;
    order: 4;
  `}
`;

export const Circles = styled.div`
  display: none;

  @media (min-width: 94em) {
    display: block;
  }
`;

export const OrangeWaveCircle = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 350px;
  transform: translate(50%, 25%);
`;

export const GrayWaveCircle = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 250px;
  transform: translate(-50%, -15%);
`;

export const BlueCircle = styled.img`
  position: absolute;
  right: 80px;
  bottom: 0;
  width: 200px;
`;
