import React from 'react';

import headerMessages from '../../Header/messages';
import messages from './messages';
import { injectIntl, FormattedMessage } from 'react-intl';

const FooterSocial = ({ intl: { formatMessage }, links }) => {
  const listItems = links.map(link => {
    return (
      <li key={link.url} className="list-icons__item">
        <a
          href={link.url}
          target="_blank"
          title={formatMessage(messages.footerLinkLabel1, {
            linkName: formatMessage(link.name),
          })}
          rel="noopener noreferrer"
        >
          <span className={'ico ' + link.icoClass} />
          <span className="sr-only">
            <FormattedMessage
              {...headerMessages.headerActionLabel1}
              values={{
                linkName: <FormattedMessage {...link.name} />,
              }}
            />
          </span>
        </a>
      </li>
    );
  });

  return (
    <div className="social-links visible-xs base-margin--top base-margin--small-top-xs hidden-xs">
      <ul className="list-icons">{listItems}</ul>
    </div>
  );
};

export default injectIntl(FooterSocial);
