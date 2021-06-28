import styled from 'styled-components';
import { media, color } from 'utils';

const BtnCommon = styled.div`
  color: ${color('background')};
  background-color: ${color('primary')};
  border-color: ${color('primary')};
  font-size: 18px;
  width: 216px;
  border-radius: 5px;

  :hover {
    background-color: #f69659;
  }

  a {
    display: block;
    height: 42px;
    width: 100%;
    display: flex;
    height: 42px;
    align-items: center;
    justify-content: center;

    ${media.mobile`
      height: 60px
    `}
  }

  ${media.desktop`
    font-size: 16px;
  `}
`;

export default BtnCommon;
