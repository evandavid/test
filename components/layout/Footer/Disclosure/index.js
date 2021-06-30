import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import * as Styled from './styled';
import messages from './messages';

const Disclosure = ({ intl }) => {
  const translated1 = messages.disclosureParagraph1
    ? intl.formatMessage(messages.disclosureParagraph1)
    : '';
  const translated2 = messages.disclosureParagraph2
    ? intl.formatMessage(messages.disclosureParagraph2)
    : '';

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
