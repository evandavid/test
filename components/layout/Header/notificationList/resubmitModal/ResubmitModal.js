// // import PropTypes from 'prop-types';
// import React from 'react';
// import { modals } from 'utils/constants/modals';
// // import { getModalDataById } from '#redux/selectors/general';
// import {
//   CircleLoader,
//   Modal,
//   Confirm,
//   Cancel,
//   ConfirmationTooltipContent,
// } from 'components/commons';
// // import withHandlers from 'recompose/withHandlers';
// // import withState from 'recompose/withState';
// import { FormattedMessage } from 'react-intl';
// // import ResubmitConfirm from '#components/translations/ResubmitConfirm';
// import messages from '../../messages';

// // const enhance = compose(
// //   connect(state => ({
// //     accounts: state.payment.accounts,
// //     isReprocessing: state.transactions.isReprocessing,
// //     loadingPayment: state.payment.loadingPayment,
// //     metadata: getModalDataById(state, modals.RESUBMIT),
// //   })),
// //   withHandlers({
// //     handleEditBank: ({ item, onEditBank, setBankForId }) => async () => {
// //       await setBankForId(item.transactionId, true);
// //       onEditBank();
// //     },
// //     handleResubmit: ({
// //       item,
// //       modal,
// //       resubmitTransaction,
// //       user,
// //       setBankForId,
// //       setACHUpdate,
// //       isMobile,
// //       reloadNotifications,
// //     }) => () => {
// //       setACHUpdate(true);
// //       setBankForId(item.transactionId, true);
// //       resubmitTransaction(null, user, item.transactionId).then(res => {
// //         if (!res.error) {
// //           modal();
// //           modal(modals.EDIT_BANK_INFO_SUCCESS);
// //           isMobile && reloadNotifications(null, user);
// //         }
// //       });
// //     },
// //   }),
// //   withState('state', 'setState', {
// //     confirmation: false,
// //     isReprocessing: false,
// //   }),
// // );

// const ResubmitModal = ({
//   handleEditBank,
//   handleResubmit,
//   item,
//   setState,
//   state: { confirmation },
//   isReprocessing,
// }) => {
//   if (!item) {
//     return <div />;
//   }

//   return (
//     <Modal
//       extendClass="modal-default"
//       modalId={modals.RESUBMIT}
//       onClose={() => setState({ confirmation: false })}
//     >
//       <h3 className="modal__centered-headline text--l text--ultra-light">
//         <FormattedMessage {...messages.resubmitHeadline} />
//       </h3>
//       <div className="btn-group--horizontal base-margin--small-left base-margin--small-right base-margin--small-bottom">
//         {(!confirmation && (
//           <div className="flex-row">
//             {!item.requireBankInfoToResubmit && (
//               <button
//                 className="btn btn--secondary btn--small reset-margin btn--spread flex-col-auto"
//                 onClick={() => setState({ confirmation: !confirmation })}
//               >
//                 {isReprocessing ? (
//                   <span>
//                     <FormattedMessage {...messages.resubmitLoading} />
//                     <CircleLoader size={36} />
//                   </span>
//                 ) : (
//                   <FormattedMessage {...messages.resubmitButton1} />
//                 )}
//               </button>
//             )}
//             <button
//               className="btn btn--primary btn--small reset-margin btn--spread flex-col-auto"
//               onClick={handleEditBank}
//             >
//               <FormattedMessage {...messages.resubmitButton2} />
//             </button>
//           </div>
//         )) || (
//           <ConfirmationTooltipContent
//             handleConfirm={handleResubmit}
//             toggleModal={() => setState({ confirmation: !confirmation })}
//             loading={isReprocessing}
//             text='need to be replaced'
//             // text={<ResubmitConfirm />}
//             confirmTitle={<Confirm />}
//             dismissTitle={<Cancel />}
//           />
//         )}
//       </div>
//     </Modal>
//   );
// };

// // ResubmitModal.propTypes = {
// //   handleEditBank: PropTypes.any,
// //   handleResubmit: PropTypes.any,
// //   isReprocessing: PropTypes.any,
// //   item: PropTypes.any,
// //   setState: PropTypes.func,

// //   modal: PropTypes.func,
// //   resubmitTransaction: PropTypes.func,
// //   setBankForId: PropTypes.func,
// //   state: PropTypes.shape({
// //     confirmation: PropTypes.bool,
// //   }),
// //   user: {},
// //   reloadNotifications: PropTypes.func,
// //   isMobile: PropTypes.bool,
// //   setACHUpdate: PropTypes.func,
// // };

// export default ResubmitModal;
