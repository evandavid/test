import styled from 'styled-components';
import { media, sizes } from 'utils';

export const UniqueSection = styled.div`
  background: #f1fafe !important;
  color: #040404 !important;
  display: block;

  padding: 44px 27px;

  ${media.mobile`
        padding: 44px 48px;
        padding-bottom: 0px;
    `}

  ${media.desktop`
        padding: 125px 48px;
    `}
    
    ${media.large`
        padding: 125px 80px;
    `}
    
    ${media.larger`
        padding: 125px 100px;
    `}
    
    ${media.extraLarge`
        padding: 125px 140px;
    `}
`;

export const UniqueContainer = styled.div`
  ${media.mobile`
      max-width: 720px;
      width: 75%;
      margin-right: auto;
      margin-left: auto;
    `}

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1150px;
  }
`;

export const UniqueRowHeadline = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const UniqueColumnHeadline = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`;

export const UniqueHeadline = styled.h4`
  text-align: center;
  font-size: 25px;
  color: #040404 !important;
  font-weight: 500 !important;

  @media (max-width: ${sizes.larger - 0.1}px) and (min-width: ${sizes.desktop}px) {
    font-size: 2rem;
  }

  ${media.extraLarge`
    font-size: 48px;
  `}
`;

export const UniqueDescription = styled.p`
  width: 100%;
  font-size: 18px;
  margin: 25px auto;
  text-align: center;
  color: #040404 !important;
  font-weight: 300 !important;
  letter-spacing: 0.15px;

  ${media.desktop`
    font-size: 20px;
  `}

  @media (max-width: 1365.99px) and (min-width: ${sizes.desktop}px) {
    width: 91%;
  }

  @media (max-width: 1439.99px) and (min-width: 1366px) {
    width: 84%;
  }

  @media (max-width: ${sizes.larger - 0.1}px) and (min-width: 1439.99px) {
    width: 75%;
  }

  ${media.extraLarge`
    width: 68%;
  `}
`;

export const UniqueRowPoint = styled.div`
  justify-content: center !important;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;

  ${media.mobile`
    margin-bottom: 0px;
  `}
`;

export const UniqueColumnPoint = styled.div`
  ${media.mobile`
  flex: 0 0 95%;
  max-width: 95%;
  `}

  @media (min-width: 992px) {
    flex: 0 0 66%;
    max-width: 66%;
  }

  ${media.desktop`
      padding-right: 0px;
      flex: 0 0 69%;
      max-width: 69%;
    `}

  ${media.large`
      flex: 0 0 62%;
      max-width: 62%;
    `}

  ${media.extraLarge`
    flex: 0 0 39%;
    max-width: 39%;
  `}
`;

export const UniqueList = styled.ul`
  padding-left: 0px;
`;

export const UniqueListItems = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin: 15px auto;
  margin-bottom: 44px;
  height: 115px;
  color: #040404 !important;
  font-weight: 500 !important;
  font-size: 16px;

  ${media.mobile`
    height: 67px;
  `}

  @media (max-width: ${sizes.larger - 0.1}px) and (min-width: ${sizes.desktop}px) {
    flex-direction: row;
    height: auto;
  }

  img {
    object-fit: contain;
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    border-style: none;
    width: 162px !important;
    height: 62px !important;
  }

  span {
    margin-left: 10px;
    font-size: 16px;
    font-weight: 300 !important;
    letter-spacing: 0.14px;

    ${media.mobile`
        margin-left: 16px;
    `}

    ${media.desktop`
    font-size: 18px;
    `}

    @media (max-width: ${sizes.larger - 0.1}px) and (min-width: ${sizes.desktop}px) {
      margin-left: 50px;
    }

    ${media.extraLarge`
      margin-left: 30px;
    `}
  }
`;
