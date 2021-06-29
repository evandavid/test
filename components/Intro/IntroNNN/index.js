import React from 'react';
import * as Styled from './styled';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';
import Link from 'next/link';

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
          <Link passHref href="/how-it-works">
            <Styled.BannerButtonHIW>
              <FormattedMessage {...messages.introLink1} />
            </Styled.BannerButtonHIW>
          </Link>
          <Link passHref href="/investments">
            <Styled.BannerButtonInvestments>
              <FormattedMessage {...messages.introLink3} />
            </Styled.BannerButtonInvestments>
          </Link>
        </Styled.BannerBtns>
      </Styled.BannerDescription>
    </Styled.Banner>
  );
};

export default IntroNNN;
