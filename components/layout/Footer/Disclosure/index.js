import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import * as Styled from './styled';
import messages from './messages';

const Disclosure = ({ intl }) => {
  const translated1 = intl.formatMessage(messages.disclosureParagraph1, {
    link1: '<a href="/legal/terms-of-use">Terms of Use</a>',
    link2: `<a href="/legal/privacy-policy">Privacy Policy</a>`,
  });

  const translated2 = intl.formatMessage(messages.disclosureParagraph2, {
    link1: '<a href="https://www.finra.org/#/" target="_blank" rel="noopener noreferrer">FINRA</a>',
    link2: '<a href="https://www.sipc.org/" target="_blank" rel="noopener noreferrer">SIPC</a>',
    link3:
      '<a href="https://brokercheck.finra.org/firm/summary/154559" target="_blank" rel="noopener noreferrer" aria-label="Open Finra BrokerCheck page">here</a>',
  });

  return (
    <Styled.Container>
      <Styled.Paragraph dangerouslySetInnerHTML={{ __html: translated1 }} />
      <Styled.Paragraph dangerouslySetInnerHTML={{ __html: translated2 }} />
      <Styled.Paragraph>
        <FormattedMessage {...messages.disclosureParagraph3} />
      </Styled.Paragraph>
    </Styled.Container>
  );
};

export default injectIntl(Disclosure);
