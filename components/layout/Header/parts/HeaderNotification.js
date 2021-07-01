import PropTypes from 'prop-types';
import ClickOutHandler from 'react-onclickout';
import cn from 'classnames';
import { ID as HEADER_CONTAINER_ID } from 'components/layout/Header/parts/headerContainer';
import NotificationList, {
  ID as NOTIFICATION_LIST_ID,
} from 'components/layout/Header/notificationList/NotificationList';
import MediaSize from 'utils/media-size';
import React, { useState, useEffect } from 'react';
// import { contentScrollListener } from '#components/layout/ContentContainer';

const HeaderNotification = ({ onListShow, onNotificationShow, isListOpen, notifications }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleClose = () => {
    onNotificationShow(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const notificationList = document.getElementById(NOTIFICATION_LIST_ID);

      if (MediaSize.matches('md')) {
        setIsMobile(false);
        if (notificationList) {
          notificationList.style.top = '';
          notificationList.style.maxHeight = '';
        }
      } else {
        setIsMobile(true);

        const headerContainer = document.getElementById(HEADER_CONTAINER_ID);
        const headerContainerRect = headerContainer?.getBoundingClientRect();
        const headerContainerBottom = headerContainerRect?.bottom;

        if (headerContainerBottom && notificationList) {
          notificationList.style.top = `${headerContainerBottom}px`;
          notificationList.style.maxHeight = `${window.innerHeight - headerContainerBottom}px`;
        }
      }
    };

    handleResize();
    // contentScrollListener.add(handleResize);
    window.addEventListener('resize', handleResize);
    return () => {
      // contentScrollListener.remove(handleResize);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="site--header__notification">
      <ClickOutHandler onClickOut={handleClose}>
        <div
          className={cn('dropdown dropdown--notification', {
            'dropdown--notification__open': isListOpen,
          })}
        >
          <div className="dropdown__trigger hidden-xs" onClick={onNotificationShow}>
            {notifications?.count > 0 && (
              <span className="dropdown__counter">{notifications.count}</span>
            )}
            <span className="ico ico--alarm" />
          </div>
          <NotificationList onClose={handleClose} onListShow={onListShow} isMobile={isMobile} />
        </div>
      </ClickOutHandler>
    </div>
  );
};

HeaderNotification.propTypes = {
  isListOpen: PropTypes.bool,
  notifications: PropTypes.shape({
    count: PropTypes.number,
  }),
  onListShow: PropTypes.func,
  onNotificationShow: PropTypes.func,
};

export default HeaderNotification;
