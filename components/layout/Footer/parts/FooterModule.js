import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { trackSocialFooterClick } from 'utils/trackSocialClicks';
import * as Styled from './styled';

const FooterModule = ({ links, isSocialMedia, intl: { formatMessage } }) => {
  const linkList = links.map(({ url, name, newtab }) => (
    <li key={url + name.id}>
      {newtab ? (
        <Styled.FooterLink
          href={url}
          title={formatMessage(name)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={isSocialMedia && (() => trackSocialFooterClick({ url, name }))}
        >
          <FormattedMessage {...name} />
        </Styled.FooterLink>
      ) : (
        <Styled.FooterLink className="menu" href={url}>
          <FormattedMessage {...name} />
        </Styled.FooterLink>
      )}
    </li>
  ));

  return (
    <Styled.FooterContainer>
      <div>
        <ul className="list-headed__items">{linkList}</ul>
      </div>
    </Styled.FooterContainer>
  );
};

export default injectIntl(FooterModule);
