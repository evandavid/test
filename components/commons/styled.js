import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

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
