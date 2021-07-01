import styled from 'styled-components';

export default styled.div`
  position: absolute;
  top: 50px;
  right: ${props => {
    if (props.compact) {
      if (props.loggedIn) {
        return '95px';
      }
      return '17px';
    }
    return 0;
  }};
  padding: 22px;
  border-radius: ${props => props.theme.radius.default};
  background-color: ${props => props.theme.colors.sectionDashboard};
  min-width: 180px;
  z-index: 1;
  ${props => props.theme.media.mobile`
    top: 80px;
  `}
  ${props => props.theme.media.desktop`
    top: 50px;
  `}

  &:after {
    content: '';
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-bottom: 12px solid ${props => props.theme.colors.sectionDashboard};
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    position: absolute;
    top: -24px;
    right: 40px;
  }
`;
