import styled from 'styled-components';
import { media, color } from 'utils';
import ReactTooltip from 'react-tooltip';

export const Outer = styled.div`
  display: block;

  ${media.extraLarge`
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const Container = styled.div`
  ${media.desktop`
    margin: 0;
    padding: 0 100px 0 100px;
    width: 100%;
  `}

  ${media.extraLarge`
    margin: 0;
    padding: 0 110px;
    width: 100%;
  `}

  &.hiw {
    ${media.extraLarge`
    max-width: 1920px;
  `}
  }
`;

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

export const RowContainer = styled.div`
  margin-top: 24px;
  ${media.desktop`
    margin: 0 80px 0 80px;
  `}
  ${media.large`
    margin: 0 100px 0 100px;
  `}
  ${media.extraLarge`
    margin: 0 120px 0 120px;
  `}
`;

export const ColumnOne = styled.div`
  padding: 0 36px;

  ${media.mobile`
        padding: 0 158px;
    `}

  ${media.desktop`
        padding: 0 15px;
    `}
`;

export const ColumnTwo = styled.div`
  padding: 0 36px;

  ${media.mobile`
        padding: 0 158px;
    `}

  ${media.desktop`
        padding: 0 15px;
    `}
`;

export const ColumnThree = styled.div`
  padding: 0 36px;

  ${media.mobile`
        padding: 0 158px;
    `}

  ${media.desktop`
        padding: 0 15px;
    `}
`;

const baseStepStyle = styled.div`
  background: #fff;
  border: 1px solid ${color('secondary')};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 44px 23px;
  justify-content: center;
  min-height: 420px;
  max-height: 100%;
  margin: 20px auto;
`;

export const StepFirst = styled(baseStepStyle)`
  :before {
    content: '';
    height: 1px;
    background-color: ${color('secondary')};
    position: absolute;
    left: -90px;
    top: 50%;
    display: none;
  }

  ${media.mobile`
        padding: 44px 26px;
    `}

  ${media.desktop`
        padding: 30px 25px 0 25px;
        min-height: 570px;
        align-items: flex-start;
        justify-content: flex-start;
        width: 95%;

        :before {
            display: block;
            width: 105px;
            top: 220px;
        }
    `}

  ${media.large`
        padding: 50px 35px 0 35px;
        min-height: 540px;
    `}

    ${media.extraLarge`
        padding: 59px 46.5px 5px 47.5px;
        min-height: 450px;
        align-items: flex-start;
        justify-content: flex-start;
        width: 97%;

        :before {
            display: block;
            width: 105px;
            top: 220px;
        }
    `}

    h5 {
    margin: 16px 0;
    color: ${color('secondary')};
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 0.18px;
  }

  p {
    color: ${color('text')};
    font-size: 20px;
    letter-spacing: 0.15px;
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;

export const StepTwo = styled(baseStepStyle)`
  :before {
    content: '';
    height: 1px;
    background-color: ${color('secondary')};
    position: absolute;
    top: 50%;
    display: none;
  }

  :after {
    content: '';
    height: 1px;
    background-color: ${color('secondary')};
    position: absolute;
    top: 50%;
    display: none;
  }

  ${media.mobile`
        padding: 44px 26px;
    `}

  ${media.desktop`
        padding: 30px 25px 0 25px;
        min-height: 570px;
        align-items: flex-start;
        justify-content: flex-start;
        width: 95%;

        :before {
            display: block;
            width: 30px;
            left: -15px;
            top: 220px;
        }

        :after {
            display: block;
            width: 30px;
            right: -15px;
            top: 220px;
        }
    `}

  ${media.large`
        padding: 50px 35px 0 35px;
        min-height: 540px;
    `}

    ${media.extraLarge`
        padding: 59px 46.5px 5px 47.5px;
        min-height: 450px;
        align-items: flex-start;
        justify-content: flex-start;
        width: 95%;

        :before {
            display: block;
            width: 30px;
            left: -15px;
            top: 220px;
        }

        :after {
            display: block;
            width: 30px;
            right: -15px;
            top: 220px;
        }
    `}

    h5 {
    margin: 16px 0;
    color: ${color('secondary')};
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 0.18px;
  }

  p {
    color: ${color('text')};
    font-size: 20px;
    letter-spacing: 0.15px;
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;

export const StepThree = styled(baseStepStyle)`
  :after {
    content: '';
    height: 1px;
    background-color: ${color('secondary')};
    position: absolute;
    right: -90px;
    top: 50%;
    display: none;
  }

  ${media.mobile`
        padding: 44px 26px;
  `}

  ${media.desktop`
        padding: 30px 25px 0 25px;
        min-height: 570px;
        align-items: flex-start;
        justify-content: flex-start;
        width: 95%;

        :after {
            display: block;
            width: 105px;
            top: 220px;
        }
    `}

  ${media.large`
        padding: 50px 35px 0 35px;
        min-height: 540px;
    `}

    ${media.extraLarge`
        padding: 59px 46.5px 5px 47.5px;
        min-height: 450px;
        align-items: flex-start;
        justify-content: flex-start;
        width: 95%;

        :before {
            display: block;
            width: 105px;
            top: 220px;
        }
    `}

    h5 {
    margin: 16px 0;
    color: ${color('secondary')};
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 0.18px;
  }

  p {
    color: ${color('text')};
    font-size: 20px;
    letter-spacing: 0.15px;
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;

export const StepImage = styled.div`
  width: 107px;
  height: 107px;
  background-color: ${color('howItWorkImage')};
  border-radius: 50%;
  line-height: 107px;
  text-align: center;

  img {
    vertical-align: middle;
    border-style: none;
    max-width: 100%;
    height: auto;
  }
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

  color: #6c6a68 !important;
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
  opacity: 1 !important;
`;

export const ToolTipTriggerText = styled.a`
  color: #9e9e9e;
  text-decoration: underline;
  font-size: 16px;
  cursor: pointer;
`;

export const MyReactTooltip = styled(ReactTooltip)`
  opacity: 1 !important;
  padding: 0 !important;
`;
