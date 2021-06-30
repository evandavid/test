import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { CircleLoader } from 'components';
import cn from 'classnames';
import { FormattedMessage } from 'react-intl';
import { modal } from '#redux/actions/general';
import { modals } from '#constants';
import { NOTIFICATION_TYPE } from 'utils/enums/common';
import NotificationListItem from './NotificationListItem';
import ResubmitModal from './resubmitModal/ResubmitModal';
import { withAchUpdate } from '#helpers/hoc/withAchUpdate';
import messages from '../messages';

export const ID = 'notifications-list';

const NotificationList = ({
  isNotificationVisible,
  onListShow,
  user,
  notificationReset,
  openPlaid,
  modal,
  onClose,
  push,
  setShowReprocessForId,
  items,
  resubmitTransaction,
  setBankForId,
  setIsSchedule,
  isMobile,
  setACHUpdate,
}) => {
  const [resubmittedItem, setResubmittedItem] = useState(null);
  const didMountRef = useRef(false);
  const isLoading = typeof items === 'undefined';
  const loader = (
    <div className="base-padding--bottom">
      <CircleLoader size={26} />
    </div>
  );

  useEffect(() => {
    // skip on mount
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }
    if (isNotificationVisible) {
      onListShow(null, user);
      return;
    }
    notificationReset();
  }, [isNotificationVisible]);

  const handleEditBank = () => openPlaid();

  const handleNotificationClick = (failed, item = {}) => {
    if (failed && item.resubmittable) {
      setShowReprocessForId(item.transactionId);
      setResubmittedItem(item);
      return modal(modals.RESUBMIT);
    }

    onClose();

    if (
      [
        NOTIFICATION_TYPE.AUTOMATIC_INVESTMENT_FAILED.id,
        NOTIFICATION_TYPE.ACH_INVESTMENT_FAILED.id,
        NOTIFICATION_TYPE.AUTOMATIC_INVESTMENT_RESUBMITTED.id,
        NOTIFICATION_TYPE.ACH_INVESTMENT_RESUBMITTED.id,
        NOTIFICATION_TYPE.NEW_DIVIDEND.id,
      ].includes(item.notificationTypeId)
    ) {
      return push(
        `/account/dashboard/${item.accountId}/transactions/${item.investmentId}`,
      );
    }

    return push(`/account/dashboard/${item.accountId}`);
  };

  const dropdownItems =
    items?.length > 0 ? (
      items.map(item => (
        <NotificationListItem
          failed={
            item.notificationTypeId ===
              NOTIFICATION_TYPE.AUTOMATIC_INVESTMENT_FAILED.id ||
            item.notificationTypeId ===
              NOTIFICATION_TYPE.ACH_INVESTMENT_FAILED.id
          }
          handleClick={handleNotificationClick}
          key={item.id}
          notification={item}
        />
      ))
    ) : (
      <span className="dropdown__link dropdown__link--no-new">
        <FormattedMessage {...messages.noNotification} />
      </span>
    );

  return (
    <div
      id={ID}
      className={cn(
        'dropdown__list',
        isNotificationVisible && 'dropdown__list__open',
      )}
    >
      <span className="dropdown__list-title">
        <FormattedMessage {...messages.notificationListHeadline} />
      </span>
      <ul>{isLoading ? loader : dropdownItems}</ul>
      <ResubmitModal
        item={resubmittedItem}
        modal={modal}
        onEditBank={handleEditBank}
        resubmitTransaction={resubmitTransaction}
        setBankForId={setBankForId}
        reloadNotifications={onListShow}
        isMobile={isMobile}
        setACHUpdate={setACHUpdate}
        user={user}
        setIsSchedule={setIsSchedule}
      />
    </div>
  );
};

NotificationList.propTypes = {
  isMobile: PropTypes.bool,
  isNotificationVisible: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.any),
  modal: PropTypes.func,
  notificationReset: PropTypes.func,
  onClose: PropTypes.func,
  onListShow: PropTypes.func,
  openPlaid: PropTypes.func,
  push: PropTypes.func,
  resubmitTransaction: PropTypes.func,
  setACHUpdate: PropTypes.any,
  setBankForId: PropTypes.any,
  setIsSchedule: PropTypes.any,
  setShowReprocessForId: PropTypes.func,
  user: PropTypes.any,
};

export default compose(
  connect(
    state => ({
      isNotificationVisible: state.appState?.isNotificationVisible,
      user: state.auth.user,
      items: state.notifications.items,
    }),
    {
      push,
      notificationReset,
      modal,
      resubmitTransaction,
      setBankForId,
      setShowReprocessForId,
      setIsSchedule,
      setACHUpdate,
    },
  ),
  withAchUpdate({ isSchedule: false }),
)(NotificationList);
