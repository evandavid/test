import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import { modals } from 'utils/constants/modals';
import BtnClose from 'components/commons/buttons/BtnClose';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const NotificationBar = ({
  notifications,
  isFixed,
  modal,
  onHideNotificationBar,
}) => (
  <div className={cn('notification--bar', 'bg--accent', { fixed: isFixed })}>
    <div className="text--center text--inverse">
      {notifications.soonToExpireTransactionsCount ? (
        <FormattedMessage
          {...messages.notifBarLabel1}
          values={{
            soonToExpireTransactionsCount: (
              <strong>{notifications.soonToExpireTransactionsCount}</strong>
            ),
          }}
        />
      ) : (
        <FormattedMessage
          {...messages.notifBarLabel2}
          values={{
            incompleteTransactionsCount: (
              <strong>{notifications.incompleteTransactionsCount}</strong>
            ),
          }}
        />
      )}
      <button
        className="btn btn--white__narrow btn--inline reset-margin"
        onClick={() => modal(modals.UNFINISHED_INVESTMENTS)}
      >
        <FormattedMessage {...messages.notifButton} />
      </button>
      <BtnClose
        className="btn btn--reset btn--inline btn-link reset-margin text--underline"
        onClick={onHideNotificationBar}
      />
    </div>
  </div>
);

NotificationBar.propTypes = {
  isFixed: PropTypes.bool,
  modal: PropTypes.func,
  notifications: PropTypes.shape({
    incompleteTransactionsCount: PropTypes.number,
    soonToExpireTransactionsCount: PropTypes.number,
  }),
  onHideNotificationBar: PropTypes.func,
};

export default NotificationBar;
