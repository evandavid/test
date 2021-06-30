import styled from 'styled-components';
import { color } from 'utils';

export const Container = styled.div`
  margin-top: 0px;
  text-align: left;
  padding-top: 15px;
  border-top: 2px solid ${color('footerBorder')};
`;

export const Paragraph = styled.p`
  margin-top: 0;
  margin-bottom: 20px;
  color: #989697;
  font-size: 16px;
  letter-spacing: 0.14px;
  text-align: left;
  a {
    color: ${color('secondary')};
    :hover {
      text-decoration: underline;
    }
  }
`;
