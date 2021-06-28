import React from 'react';
import * as Styled from './styled';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';

const IntroNNN = () => {
  return (
    <Styled.Banner>
      <Styled.BannerDescription>
        <Styled.BannerHeading>
          <FormattedMessage {...messages.headlineUpdated} values={{ br: <br /> }} />
        </Styled.BannerHeading>
        <Styled.BannerParagraph>
          <FormattedMessage
            {...messages.subtitle2}
            values={{ br: <br />, forItalic: <i>for</i> }}
          />
        </Styled.BannerParagraph>
        <Styled.BannerBtns>
          <Styled.BannerButtonHIW to="/how-it-works">
            <FormattedMessage {...messages.introLink1} />
          </Styled.BannerButtonHIW>
          <Styled.BannerButtonInvestments to="/investments">
            <FormattedMessage {...messages.introLink3} />
          </Styled.BannerButtonInvestments>
        </Styled.BannerBtns>
      </Styled.BannerDescription>
    </Styled.Banner>
  );
};

export default IntroNNN;
