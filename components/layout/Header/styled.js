import styled from 'styled-components';
import { media } from 'utils';

export const HeaderInnerContainer = styled.div`
  height: 56px;
  padding: 0 36px;
  margin: 0 auto;
  width: 100%;

  & .notification__trigger {
    right: 115px;
    width: 0;
    height: 0;

    & .ico--alarm {
      font-size: 22px;
      padding-top: 17px;
    }
  }

  ${media.mobile`
    padding: 0 80px;

    & .notification__trigger {
      right: 165px;
    }
  `}
  ${media.desktop`
    display: flex;
    height: 80px;
    padding: 0 35px;
    justify-content: space-between; 
  `}
  ${media.large`
    padding: 0 80px;
  `}
  ${media.larger`
    padding: 0 100px;
  `}
  ${media.extraLarge`
    padding: 0 140px;
    max-width: 1920px;
  `}
`;

export const HeaderActionsWrapper = styled.div`
  margin-top: -24px;

  & .btn--small--logout {
    width: 137px !important;
    background-color: #ffffff;
    border-color: rgb(243, 115, 34);
    border-radius: 5px !important;
    padding: 8px 2px !important;
    margin-bottom: 10px;

    & span {
      font-size: 18px;
      font-weight: normal;
      text-transform: none;
      font-family: 'Montserrat';
      color: rgb(243, 115, 34);
    }
  }

  & .btn--invest {
    width: 137px !important;
    background-color: rgb(243, 115, 34);
    border-color: rgb(243, 115, 34);
    border-radius: 5px !important;
    margin: 0 !important;
    padding: 8px 2px !important;
    margin-bottom: 10px;

    & span {
      font-size: 18px;
      font-weight: normal;
      text-transform: none;
      font-family: 'Montserrat';
    }
  }

  & .dropdown__title {
    font-family: 'Montserrat';
    text-transform: capitalize;
  }

  ${media.desktop`
    margin-top: 0px;
    align-items: center;
    justify-content: flex-end;
    display: flex;
    width: auto;
    text-align: right;
    flex: 1;

    & .site--header__actions {
      width: 100%;
    }

    & .li-invest-now {
      margin-left: 6px;
      margin-right: 0;
    }

    & .li-accountlist {
      margin-left: 8px;
      margin-right: 0;
      width: calc(100% - 160px);

      & .dropdown {
        width: 100%;

        & .dropdown__trigger {
          width: 100%;

          & .dropdown__title {
            width: calc(100% - 17px);
            max-width: 100%;
            text-align: right;
          }
        }
  
        & .dropdown__list {
          right: -75px;

          & .dropdown__item {
            & .dropdown__link {
              text-align: left;
            }
          }
        }
      }
    }

    & .li-notification-lg {
      text-align: left;
      margin-left: 5px;
      margin-right: 0;
    }

    & .dropdown--notification {
      margin-right: 0px;
      margin-left: 10px;
    }

    & .ico--alarm {
      font-size: 14px;
    }

    & .btn--invest {
      width: 90px !important;
      background-color: rgb(243, 115, 34);
      border-color: rgb(243, 115, 34);
      border-radius: 5px !important;
      margin: 0 0 0 4px !important;
      padding: 8px 2px !important;
      margin-bottom: 10px;

      & span {
        font-size: 12px;
        font-weight: 400;
        text-transform: none;
        font-family: 'Montserrat';
      }
    }
  `}

  ${media.large`
    & .dropdown__title {
      font-size: 13px;
    }

    & .btn--invest {
      width: 100px !important;
      padding: 8px 2px !important;
      margin-bottom: 10px;
    }
  `}

  ${media.larger`
    & .dropdown__title {
      font-size: 16px;
    }

    & .site--header__actions {
      width: 100%;
    }

    & .li-invest-now {
      margin-left: 6px;
      margin-right: 0;
    }

    & .li-accountlist {
      width: calc(100% - 215px);
    }

    & .li-notification-lg {
      text-align: left;
      margin-left: 10px;
      margin-right: 10px;
    }

    & .ico--alarm {
      font-size: 24px;
    }

    & .btn--invest {
      width: 140px !important;
      background-color: rgb(243, 115, 34);
      border-color: rgb(243, 115, 34);
      border-radius: 5px !important;
      margin: 0 0 0 4px !important;
      padding: 12px 8px !important;
      margin-bottom: 10px;

      & span {
        font-size: 16px;
        font-weight: 400;
        text-transform: none;
      }
    }
  `}
`;

export const HeaderLogoWrapper = styled.div`
  padding-top: 1px;
  flex: 1;
  ${media.small`
    display: block;
    width: 100%;
    height: 56px;
  `}
  ${media.desktop`
    width: auto;
    height: 80px;
    align-items: center;
    justify-content: flex-start;
    display: flex;
  `}
`;

export const HeaderNavWrapper = styled.div`
  ul.site--header__list {
    padding-top: 55px;
  }
  & li.site--header__item {
    line-height: initial;
  }
  ${media.small`
    display: block;
    & ul.site--header__list {
      padding-top: 0;
    }
  `}
  ${media.desktop`
    & li.site--header__item {
      margin: 0 2px;
      line-height: 57px;
    }
  `}
  ${media.large`
    & li.site--header__item {
      margin: 0 6px;
      line-height: 57px;
    }
  `}
  ${media.larger`
    flex: unset;
    & li.site--header__item {
      margin: 0 10px;
    }
  `}
  ${media.extraLarge`
    & li.site--header__item {
        margin: 0 24px;
    }
  `}
`;
