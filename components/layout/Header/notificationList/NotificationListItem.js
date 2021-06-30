import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import { FormattedDate, FormattedMessage } from 'react-intl';
import { ACCOUNT_TYPES } from 'utils/enums/common';
import messages from './messages';
import '../styles/dropdownlist.css';

const NotificationListItem = ({ failed, notification, handleClick }) => (
  <li key={notification.id} className="dropdown__item">
    <span
      onClick={() => handleClick(failed, notification)}
      className={cn(
        'dropdown__link flex-row-static flex-align--center flex-justify-content--space-between',
        { 'dropdown__link--failed-aip': failed },
        { 'is-read': notification.read },
      )}
    >
      <div className="flex-col-auto">
        <span className="dropdown__link__title wrap">
          {failed && <span className="ico ico--warning" />}
          <span className={cn('text', { underline: failed })}>
            {notification.message}
          </span>
        </span>
        <span className="dropdown__link__account">
          <FormattedMessage
            id={ACCOUNT_TYPES.ids[notification.accountTypeId].name}
          />{' '}
          &middot;
        </span>
        &nbsp;
        <span className="dropdown__link__user wrap">
          {notification.accountName}
        </span>
        &nbsp;
        <span className="dropdown__link__date">
          <FormattedDate value={notification.createdAt} />
        </span>
      </div>
      <span
        className={cn('flex-col-static base-margin--small-left', {
          'text--blue text--strong text--underline': notification.resubmittable,
        })}
      >
        {failed &&
          (notification.resubmittable ? (
            <FormattedMessage {...messages.resubmittableResubmit} />
          ) : (
            <FormattedMessage {...messages.resubmittableFailed} />
          ))}
      </span>
    </span>
  </li>
);

// NotificationListItem.propTypes = {
//   failed: PropTypes.any,
//   handleClick: PropTypes.func,
//   notification: PropTypes.shape({
//     accountName: PropTypes.any,
//     accountTypeId: PropTypes.any,
//     createdAt: PropTypes.any,
//     id: PropTypes.any,
//     message: PropTypes.any,
//     read: PropTypes.any,
//     resubmittable: PropTypes.any,
//   }),
// };

export default NotificationListItem;
