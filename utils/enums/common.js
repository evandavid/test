import enumize from './enums/enumize';

const REITS = enumize({
  REIT_I: { id: 1 },
  NNN_REIT: { id: 2 },
  REG_A: { id: 3 },
  STUDENT_HOUSING: { id: 4 },
});

const SITES = enumize({
  NNN: { id: 1, name: 'NNN Reit', prefix: 'nnn' },
  BRIX: { id: 2, name: 'BRIX Reit', prefix: 'brix' },
});

const TESTIMONIAL_STATUS = enumize({
  WAITING_FOR_APPROVAL: { id: 1, name: 'common.enum.testimonialStatus.waitingForApproval' },
  PUBLISHED: { id: 2, name: 'common.enum.testimonialStatus.published' },
  UNPUBLISHED: { id: 3, name: 'common.enum.testimonialStatus.unpublished' },
});

const CASH_PAYOUT = {
  MONTHLY: { name: 'Monthly' },
  QUARTERLY: { name: 'Quarterly' },
  ANNUALLY: { name: 'Annually' },
};

const REIT_STATUS = enumize({
  OPEN_FOR_INVESTMENT: { id: 1, name: 'common.enum.reitStatus.openForInvestment' },
  OPEN_FOR_RESERVATIONS: { id: 2, name: 'common.enum.reitStatus.openForReservations' },
  CLOSED: { id: 3, name: 'common.enum.reitStatus.closed' },
  SOLD_OUT: { id: 4, name: 'common.enum.reitStatus.soldOut' },
});

const ACCOUNT_TYPES = enumize({
  INDIVIDUAL: { id: 1, name: 'common.enum.accountTypes.individual', isRIA: false, mimicsName: 'Individual' },
  JOINT: { id: 2, name: 'common.enum.accountTypes.joint', isRIA: false, mimicsName: 'Joint' },
  TRUST: { id: 3, name: 'common.enum.accountTypes.trust', isRIA: false, mimicsName: 'Trust' },
  ENTITY: { id: 4, name: 'common.enum.accountTypes.entity', isRIA: false, mimicsName: 'Entity' },
  RETIREMENT: { id: 5, name: 'common.enum.accountTypes.retirement', isRIA: false, mimicsName: 'Retirement' },
  CUSTODIAN: { id: 6, name: 'common.enum.accountTypes.custodian', isRIA: false, mimicsName: 'Custodian' },
  RIA_INDIVIDUAL: { id: 7, name: 'common.enum.accountTypes.riaIndividual', isRIA: true, mimicsName: 'P-I' },
  RIA_JOINT: { id: 8, name: 'common.enum.accountTypes.riaJoint', isRIA: true, mimicsName: 'P-J' },
  RIA_TRUST: { id: 9, name: 'common.enum.accountTypes.riaTrust', isRIA: true, mimicsName: 'P-T' },
  RIA_ENTITY: { id: 10, name: 'common.enum.accountTypes.riaEntity', isRIA: true, mimicsName: 'P-E' },
  RIA_RETIREMENT: { id: 11, name: 'common.enum.accountTypes.riaRetirement', isRIA: true, mimicsName: 'P-R' },
});

const ACCOUNT_SUB_TYPES = enumize({
  COMMUNITY_PROPERTY: { id: 1, name: 'common.enum.accountSubTypes.communityProperty', accountTypeId: 2, phoenixId: '45' },
  TENANTS_IN_COMMON: { id: 2, name: 'common.enum.accountSubTypes.tenantsInCommon', accountTypeId: 2, phoenixId: '43' },
  JOINT_TENANTS: { id: 3, name: 'common.enum.accountSubTypes.jointTenants', accountTypeId: 2, phoenixId: '06' },
  CORPORATION: { id: 4, name: 'common.enum.accountSubTypes.corporation', accountTypeId: 4, phoenixId: '02' },
  PARTNERSHIP_LLC: { id: 5, name: 'common.enum.accountSubTypes.partnershipLlc', accountTypeId: 4, phoenixId: '52' },
  TRADITIONAL_IRA: { id: 6, name: 'common.enum.accountSubTypes.traditionalIra', accountTypeId: 5, phoenixId: '11' },
  SIMPLE_IRA: { id: 7, name: 'common.enum.accountSubTypes.simpleIra', accountTypeId: 5, phoenixId: '16' },
  SEP_IRA: { id: 8, name: 'common.enum.accountSubTypes.sepIra', accountTypeId: 5, phoenixId: '13' },
  ROTH_IRA: { id: 9, name: 'common.enum.accountSubTypes.rothIra', accountTypeId: 5, phoenixId: '14' },
  SOLO_401K: { id: 10, name: 'common.enum.accountSubTypes.solo401k', accountTypeId: 5, phoenixId: '23' },
  PENSION_PLAN: { id: 11, name: 'common.enum.accountSubTypes.pensionPlan', accountTypeId: 5, phoenixId: '46' },
  PROFIT_SHARING_PLAN: { id: 12, name: 'common.enum.accountSubTypes.profitSharingPlan', accountTypeId: 5, phoenixId: '22' },
  KEOGH_PLAN: { id: 13, name: 'common.enum.accountSubTypes.keoghPlan', accountTypeId: 5, phoenixId: '47' },
  TENANTS_IN_ENTIRETY: { id: 14, name: 'common.enum.accountSubTypes.tenantsInEntirety', accountTypeId: 2, phoenixId: '44' },
  LIMITED_PARTNERSHIP: { id: 15, name: 'common.enum.accountSubTypes.limitedPartnership', accountTypeId: 4, phoenixId: '53' },
  REVOCABLE_TRUST: { id: 16, name: 'common.enum.accountSubTypes.revocableTrust', accountTypeId: 3, phoenixId: '07' },
  IRREVOCABLE_TRUST: { id: 17, name: 'common.enum.accountSubTypes.irrevocableTrust', accountTypeId: 3, phoenixId: '07' },
});

const TRANSACTION_TYPES = enumize({
  // FIRST INVESTMENT TRANSACTION
  INVESTMENT: { id: 1, name: 'common.enum.transactionTypes.investment', mimicsName: 'Investment', isAddition: true },
  // ADDITIONAL INVESTMENT TRANSACTION
  ADDITIONAL_INVESTMENT: {
    id: 2,
    name: 'common.enum.transactionTypes.additionalInvestment',
    mimicsName: 'Investment',
    isAddition: true,
  },
  // DIVIDENDS PAID IN CASH
  DIVIDENDS_PAID: {
    id: 3,
    name: 'common.enum.transactionTypes.dividendsPaid',
    mimicsName: 'Cash Dividend',
    isAddition: true,
  },
  // DIVIDENDS REINVESTED TO INVESTMENT
  DIVIDENDS_REINVESTED: {
    id: 4,
    name: 'common.enum.transactionTypes.dividendsReinvested',
    mimicsName: 'Reinvested Dividend',
    isAddition: true,
  },
  BONUS_SHARES_REFERRAL: {
    id: 5,
    name: 'common.enum.transactionTypes.bonusSharesReferral',
    mimicsName: 'Bonus Shares',
    isAddition: true,
  },
  BONUS_SHARES_BOARD_MEMBER: {
    id: 6,
    name: 'common.enum.transactionTypes.bonusSharesBoardMember',
    mimicsName: 'Bonus Shares',
    isAddition: true,
  },
  // GENERAL BONUS SHARES
  BONUS_SHARES: {
    id: 7,
    name: 'common.enum.transactionTypes.bonusShares',
    mimicsName: 'Bonus Shares',
    isAddition: true,
  },
  // SHARE REPURCHASE
  SHARE_REPURCHASE: {
    id: 8,
    name: 'common.enum.transactionTypes.shareRepurchase',
    mimicsName: 'Redemption',
    isAddition: false,
  },
  // TRANSFER OF INVESTMENT
  TRANSFER_FROM: {
    id: 9,
    name: 'common.enum.transactionTypes.transferFrom',
    mimicsName: 'Redemption',
    isAddition: false,
  },
  // TRANSFER OF INVESTMENT
  TRANSFER_TO: { id: 10, name: 'common.enum.transactionTypes.transferTo', mimicsName: 'Investment', isAddition: true },
  // AUTOMATIC INVESTMENT TRANSACTION
  AUTOMATIC_INVESTMENT: {
    id: 11,
    name: 'common.enum.transactionTypes.automaticInvestment',
    mimicsName: 'Investment',
    isAddition: true,
  },
  // Modiv transaction to fix share balance
  MODIV_REVERSE_SHARE_SPLIT: {
    id: 12,
    name: 'common.enum.transactionTypes.modivReverseShareSplit',
    mimicsName: 'Modiv Reverse Share Split',
    isAddition: false,
  },
});

const TRANSACTION_STATUSES = enumize({
  // AFTER REVIEW
  INCOMPLETE: { id: 1, name: 'common.enum.transactionStatuses.incomplete' },
  // SIGNED DOCUMENTS
  SIGNED: { id: 2, name: 'common.enum.transactionStatuses.signed' },
  // TRANSACTION IS BEING FUNDED
  FUNDED: { id: 3, name: 'common.enum.transactionStatuses.funded' },
  // TRANSACTION WAS APPROVED (MONEY TRANSFER WAS CLEARED)
  APPROVED: { id: 4, name: 'common.enum.transactionStatuses.approved', mimicsName: 'Approved' },
  // TRANSACTION WAS ISSUED BY MIMICS
  ISSUED: {
    id: 5,
    name: 'common.enum.transactionStatuses.issued',
    cashDividendName: 'common.enum.transactionStatuses.issued.cashDividendName',
    reinvestDividendName: 'common.enum.transactionStatuses.issued.reinvestDividendName',
    mimicsName: 'Approved',
  },
  // MONEY TRANSACTION FAILED
  FAILED: { id: 6, name: 'common.enum.transactionStatuses.failed', mimicsName: 'Canceled' },
  // TRANSACTION WAS CANCELED FOR SOME REASON
  CANCELED: { id: 7, name: 'common.enum.transactionStatuses.canceled', mimicsName: 'Canceled' },
  // TRANSACTION WAS ON HOLD FOR SOME REASON
  ON_HOLD: { id: 8, name: 'common.enum.transactionStatuses.onHold' },
});

const REVIEW_TYPES = enumize({
  SUITABILITY: { id: 1, name: 'common.enum.reviewTypes.suitabilityReview' },
  IDENTITY_VERIFICATION: { id: 2, name: 'common.enum.reviewTypes.identityVerification' },
  DOCUMENT_REVIEW: { id: 3, name: 'common.enum.reviewTypes.documentReview' },
});

const PAYMENT_TYPES = enumize({
  MAIL_CHECK: { id: 1, name: 'common.enum.paymentTypes.mailCheck', mimicsName: 'Check', northcapitalName: 'CHECK' },
  WIRE_TRANSFER: { id: 2, name: 'common.enum.paymentTypes.wireTransfer', northcapitalName: 'WIRE' },
  ACH: { id: 3, name: 'common.enum.paymentTypes.ach', mimicsName: 'ACH', northcapitalName: 'ACH' },
  OTHER: { id: 4, name: 'common.enum.paymentTypes.another', northcapitalName: 'TBD' },
  REINVEST: { id: 5, name: 'common.enum.paymentTypes.reinvest', mimicsName: 'Reinvest', northcapitalName: 'TBD' },
  TRANSFER: { id: 6, name: 'common.enum.paymentTypes.transfer', mimicsName: 'Transfer', northcapitalName: 'TBD' },
});

const CITIZENSHIP = enumize({
  US: { id: 1, name: 'common.enum.citizenship.us' },
  US_OUTSIDE_US: { id: 2, name: 'common.enum.citizenship.usOutsideUs' },
  FOREIGN: { id: 3, name: 'common.enum.citizenship.foreign' },
  FOREIGN_WITH_GREEN_CARD: { id: 4, name: 'common.enum.citizenship.foreignWithGreenCard' },
});

const REIT_SUBSCRIPTION_TYPES = {
  SUBSCRIBED: { name: 'subscribed' },
};

const DOCUMENT_TYPES = enumize({
  INVESTMENT_FORM: { id: 1, name: 'common.enum.documentTypes.investmentForm' },
  ADDITIONAL_INVESTMENT_FORM: { id: 2, name: 'common.enum.documentTypes.additionalInvestmentForm' },
  SHARE_CERTIFICATE: { id: 3, name: 'common.enum.documentTypes.shareCertificate' },
  MISCELANEOUS: { id: 4, name: 'common.enum.documentTypes.miscelaneous' },
  REJECTED_INVESTMENT_FORM: { id: 5, name: 'common.enum.documentTypes.rejectedInvestmentForm' },
  TRANSFER_FORM: { id: 6, name: 'common.enum.documentTypes.transferForm' },
  AUTOMATIC_INVESTMENT_AUTHORIZATION: { id: 7, name: 'common.enum.documentTypes.automaticInvestmentAuthorization' },
  AUTOMATIC_INVESTMENT_CONFIRMATION: { id: 8, name: 'common.enum.documentTypes.automaticInvestmentConfirmation' },
  ACH_RECEIPT: { id: 9, name: 'common.enum.documentTypes.achReceipt' },
  W_8_BEN: { id: 10, name: 'common.enum.documentTypes.w-8-ben' },
  NORTHCAPITAL_PHOTO_ID: { id: 11, name: 'common.enum.documentTypes.photoId' },
  NORTHCAPITAL_PARTY_DOCUMENT: { id: 12, name: 'common.enum.documentTypes.partyDocument' },
  NORTHCAPITAL_ACCOUNT_DOCUMENT: { id: 13, name: 'common.enum.documentTypes.accountDocument' },
  NORTHCAPITAL_ENTITY_DOCUMENT: { id: 14, name: 'common.enum.documentTypes.entityDocument' },
  NORTHCAPITAL_USER_407_LETTER: { id: 15, name: 'common.enum.documentTypes.user407Letter' },
  NORTHCAPITAL_ACCOUNT_407_LETTER: { id: 16, name: 'common.enum.documentTypes.account407Letter' },
  SHARE_REPURCHASE_DISCLOSURE: { id: 17, name: 'common.enum.documentTypes.shareRepurchaseDisclosure' },
  NNN_OP_GENERAL: { id: 18, name: 'common.enum.documentTypes.nnnopGeneral' },
  NNN_OP_TAX: { id: 19, name: 'common.enum.documentTypes.nnnopTax' },
  NORTHCAPITAL_REGD_SUITABILITY_DOCUMENT: { id: 20, name: 'common.enum.documentTypes.regdSuitabilityDocument' },
});

const AML_EXCEPTION_STATUSES = enumize({
  CLEARED: { id: 1, name: 'common.enum.amlExceptionStatuses.cleared' },
  CONTACT_ISSUER: { id: 2, name: 'common.enum.amlExceptionStatuses.contactIssuer' },
  SENT_TO_FUNDAMERICA: { id: 3, name: 'common.enum.amlExceptionStatuses.sentToFundamerica' },
  PENDING: { id: 4, name: 'common.enum.amlExceptionStatuses.pending' },
  CANCELED: { id: 5, name: 'common.enum.amlExceptionStatuses.canceled' },
});

const MIMICS_TRANSACTION_STATUS = enumize({
  SENT: { id: 1, name: 'common.enum.mimicsTransactionStatus.sent' },
  IMPORTED: { id: 2, name: 'common.enum.mimicsTransactionStatus.imported' },
  IMPORT_FAILED: { id: 3, name: 'common.enum.mimicsTransactionStatus.importFailed' },
});

const BATCH_OPERATION_TYPE = enumize({
  TRANSACTION_REPURCHASE_APPROVE: { id: 1, name: 'common.enum.batchOperationType.transactionRepurchaseApprove' },
});

const NOTIFICATION_TYPE = enumize({
  NEW_DIVIDEND: {
    id: 1,
    name: 'common.enum.notificationType.newDividend',
    message: {
      reinvested: 'common.enum.notificationType.newDividendMessageReinvested',
      payed: 'common.enum.notificationType.newDividendMessagePayed',
    },
    mobileNotificationTitle: 'common.enum.notificationType.newDividendMobileTitle',
    mobileNotificationBody: 'common.enum.notificationType.newDividendMobileBody',
  },
  TRANSACTION_CANCELLED: {
    id: 2,
    name: 'common.enum.notificationType.transactionCancelled',
    message: 'common.enum.notificationType.transactionCancelledMessage',
    mobileNotificationTitle: 'common.enum.notificationType.transactionCancelledMobileTitle',
    mobileNotificationBody: 'common.enum.notificationType.transactionCancelledMobileBody',
  },
  PENDING_INVESTMENT: {
    id: 3,
    name: 'common.enum.notificationType.pendingInvestment',
    message: 'common.enum.notificationType.pendingInvestmentMessage',
    mobileNotificationTitle: 'common.enum.notificationType.pendingInvestmentMobileTitle',
    mobileNotificationBody: 'common.enum.notificationType.pendingInvestmentMobileBody',
  },
  TRANSACTION_SUCCESSFULLY_PAID: {
    id: 4,
    name: 'common.enum.notificationType.transactionSuccessfullyPaid',
    message: 'common.enum.notificationType.transactionSuccessfullyPaidMessage',
    mobileNotificationTitle: 'common.enum.notificationType.transactionSuccessfullyPaidMobileTitle',
    mobileNotificationBody: 'common.enum.notificationType.transactionSuccessfullyPaidMobileBody',
  },
  AUTOMATIC_INVESTMENT_FAILED: {
    id: 5,
    name: 'common.enum.notificationType.automaticInvestmentFailed',
    message: 'common.enum.notificationType.automaticInvestmentFailedMessage',
    mobileNotificationTitle: 'common.enum.notificationType.automaticInvestmentFailedMobileTitle',
    mobileNotificationBody: 'common.enum.notificationType.automaticInvestmentFailedMobileBody',
  },
  AUTOMATIC_INVESTMENT_RESUBMITTED: {
    id: 6,
    name: 'common.enum.notificationType.automaticInvestmentResubmitted',
    message: 'common.enum.notificationType.automaticInvestmentResubmittedMessage',
    mobileNotificationTitle: 'common.enum.notificationType.automaticInvestmentResubmittedMobileTitle',
    mobileNotificationBody: 'common.enum.notificationType.automaticInvestmentResubmittedMobileBody',
  },
  ACH_INVESTMENT_FAILED: {
    id: 7,
    name: 'common.enum.notificationType.achInvestmentFailed',
    message: 'common.enum.notificationType.achInvestmentFailedMessage',
    mobileNotificationTitle: 'common.enum.notificationType.achInvestmentFailedMobileTitle',
    mobileNotificationBody: 'common.enum.notificationType.achInvestmentFailedMobileBody',
  },
  ACH_INVESTMENT_RESUBMITTED: {
    id: 8,
    name: 'common.enum.notificationType.achInvestmentResubmitted',
    message: 'common.enum.notificationType.achInvestmentResubmittedMessage',
    mobileNotificationTitle: 'common.enum.notificationType.achInvestmentResubmittedMobileTitle',
    mobileNotificationBody: 'common.enum.notificationType.achInvestmentResubmittedMobileBody',
  },
  DIVIDEND_PAYMENT_FAILED: {
    id: 9,
    name: 'common.enum.notificationType.dividendFailed',
    message: 'common.enum.notificationType.dividendFailedMessage',
    mobileNotificationTitle: 'common.enum.notificationType.dividendFailed',
    mobileNotificationBody: 'common.enum.notificationType.dividendFailedMessage',
  },
});

const SIGNUP_TYPE = enumize({
  STUDENT_HOUSING: { id: 4, name: 'common.enum.signupType.studentHousing' },
});

const SCHEDULE_STATUSES = enumize({
  INCOMPLETE: { id: 1, name: 'common.enum.scheduleStatuses.incomplete' },
  ACTIVE: { id: 2, name: 'common.enum.scheduleStatuses.active' },
  PAUSED: { id: 3, name: 'common.enum.scheduleStatuses.paused' },
  CANCELLED: { id: 4, name: 'common.enum.scheduleStatuses.cancelled' },
});

const SCHEDULE_FREQUENCIES = enumize({
  BIWEEKLY: { id: 1, name: 'common.enum.scheduleFrequencies.biweekly' },
  MONTHLY: { id: 2, name: 'common.enum.scheduleFrequencies.monthly' },
  QUARTERLY: { id: 3, name: 'common.enum.scheduleFrequencies.quarterly' },
  WEEKLY: { id: 4, name: 'common.enum.scheduleFrequencies.weekly' },
});

const SCHEDULE_DAYS = enumize({
  1: { id: 1, name: 'common.enum.scheduleDays.n1' },
  2: { id: 2, name: 'common.enum.scheduleDays.n2' },
  3: { id: 3, name: 'common.enum.scheduleDays.n3' },
  4: { id: 4, name: 'common.enum.scheduleDays.n4' },
  5: { id: 5, name: 'common.enum.scheduleDays.n5' },
  6: { id: 6, name: 'common.enum.scheduleDays.n6' },
  7: { id: 7, name: 'common.enum.scheduleDays.n7' },
  8: { id: 8, name: 'common.enum.scheduleDays.n8' },
  9: { id: 9, name: 'common.enum.scheduleDays.n9' },
  10: { id: 10, name: 'common.enum.scheduleDays.n10' },
  11: { id: 11, name: 'common.enum.scheduleDays.n11' },
  12: { id: 12, name: 'common.enum.scheduleDays.n12' },
  13: { id: 13, name: 'common.enum.scheduleDays.n13' },
  14: { id: 14, name: 'common.enum.scheduleDays.n14' },
  15: { id: 15, name: 'common.enum.scheduleDays.n15' },
  16: { id: 16, name: 'common.enum.scheduleDays.n16' },
  17: { id: 17, name: 'common.enum.scheduleDays.n17' },
  18: { id: 18, name: 'common.enum.scheduleDays.n18' },
  19: { id: 19, name: 'common.enum.scheduleDays.n19' },
  20: { id: 20, name: 'common.enum.scheduleDays.n20' },
  21: { id: 21, name: 'common.enum.scheduleDays.n21' },
  22: { id: 22, name: 'common.enum.scheduleDays.n22' },
  23: { id: 23, name: 'common.enum.scheduleDays.n23' },
  24: { id: 24, name: 'common.enum.scheduleDays.n24' },
  25: { id: 25, name: 'common.enum.scheduleDays.n25' },
  26: { id: 26, name: 'common.enum.scheduleDays.n26' },
  27: { id: 27, name: 'common.enum.scheduleDays.n27' },
  28: { id: 28, name: 'common.enum.scheduleDays.n28' },
  29: { id: 29, name: 'common.enum.scheduleDays.n29' },
  30: { id: 30, name: 'common.enum.scheduleDays.n30' },
  31: { id: 31, name: 'common.enum.scheduleDays.n31' },
});

const SCHEDULE_WEEKDAYS = enumize({
  MONDAY: { id: 1, name: 'common.enum.scheduleWeekday.monday' },
  TUESDAY: { id: 2, name: 'common.enum.scheduleWeekday.tuesday' },
  WEDNESDAY: { id: 3, name: 'common.enum.scheduleWeekday.wednesday' },
  THURSDAY: { id: 4, name: 'common.enum.scheduleWeekday.thursday' },
  FRIDAY: { id: 5, name: 'common.enum.scheduleWeekday.friday' },
  SATURDAY: { id: 6, name: 'common.enum.scheduleWeekday.saturday' },
  SUNDAY: { id: 7, name: 'common.enum.scheduleWeekday.sunday' },
});

const SCHEDULE_TRANSACTION_TYPE = enumize({
  ONETIME: { id: 1, name: 'common.enum.scheduleTransactionType.onetime' },
  SCHEDULE: { id: 2, name: 'common.enum.scheduleTransactionType.schedule' },
});

const SCHEDULE_LOG_TYPE = enumize({
  PAUSED: { id: 1, name: 'common.enum.scheduleLogType.paused' },
  RESUMED: { id: 2, name: 'common.enum.scheduleLogType.resumed' },
  CANCELED: { id: 3, name: 'common.enum.scheduleLogType.canceled' },
  SIGNED: { id: 4, name: 'common.enum.scheduleLogType.signed' },
  AUTO_CANCELED: { id: 5, name: 'common.enum.scheduleLogType.autoCanceled' },
  EXECUTION_FAILED: { id: 6, name: 'common.enum.scheduleLogType.executionFailed' },
  EXECUTION_SKIPPED: { id: 7, name: 'common.enum.scheduleLogType.executionSkipped' },
  EXECUTION_SUCCESS: { id: 8, name: 'common.enum.scheduleLogType.executionSuccess' },
  UPDATED_BANK_INFO: { id: 9, name: 'common.enum.scheduleLogType.updatedBankInfo' },
});

const REGULATION_TYPE = enumize({
  STATE_REIT: { id: 1, name: 'common.enum.regulationType.stateReit', restricted: true },
  STATE_ACCOUNT_SUBTYPE: { id: 2, name: 'common.enum.regulationType.stateAccountSubtype', restricted: true },
});

const FAIL_EVENT_TYPE = enumize({
  DUPLICATE: { id: 1, name: 'common.enum.failEventType.duplicate' },
  CHANGED_MIND: { id: 2, name: 'common.enum.failEventType.changedMind' },
  WEBSITE_ERROR: { id: 3, name: 'common.enum.failEventType.websiteError' },
  CHANGED_AMOUNT: { id: 4, name: 'common.enum.failEventType.changedAmount' },
  SUITABILITY: { id: 5, name: 'common.enum.failEventType.suitability' },
  OTHER: { id: 6, name: 'common.enum.failEventType.another' },
  WELLS_FARGO_TRANSACTION_PROCESSOR: { id: 7, name: 'common.enum.failEventType.wellsFargoTransactionProcessor' },
  MIMICS_ERROR: { id: 8, name: 'common.enum.failEventType.mimicsError' },
  WELLS_FARGO_PAYMENT_EVENT: { id: 9, name: 'common.enum.failEventType.wellsFargoPaymentEvent' },
  FUNDAMERICA_ACH_AUTHORIZATION_FAIL: { id: 10, name: 'common.enum.failEventType.fundamericaAchAuthorizationFail' },
  FUNDAMERICA_PROCESSING_FAIL: { id: 11, name: 'common.enum.failEventType.fundamericaProcessingFail' },
  EXPIRED: { id: 12, name: 'common.enum.failEventType.expired' },
  REIT_CLOSED: { id: 13, name: 'common.enum.failEventType.reitClosed' },
  MARKED_AS_DIVIDEND_FAILED: { id: 14, name: 'common.enum.failEventType.markedAsDividendFailed' },
  ONE_INCOMPLETE_TRANSACTION_PER_ACCOUNT: { id: 15, name: 'common.enum.failEventType.oneIncompleteTransactionPerAccount' },
});

const WELLS_FARGO_LOG_TYPE = enumize({
  TRANSACTION_PROCESSOR: { id: 1, name: 'common.enum.wellsFargoLogType.transactionProcessor' },
  PAYMENT_EVENT_REPORT: { id: 2, name: 'common.enum.wellsFargoLogType.paymentEventReport' },
});

const LOG_EMAIL_TYPE = enumize({
  EXPIRE_NOTIFICATION: { id: 1, name: 'common.enum.logEmailType.expireNotification' },
});

const MANUAL_MODIFICATION_LOG_TYPE = enumize({
  UPDATE_AMOUNT: { id: 1, name: 'common.enum.manualModificationLogType.updateAmount' },
});

const STATES = enumize({
  CALIFORNIA: { id: 5, name: 'common.enum.states.california', abbr: 'CA' },
});

const BANK_INFO_TYPE = enumize({
  PLAID: { id: 1, name: 'common.enum.bankInfoType.plaid' },
  OTHER: { id: 2, name: 'common.enum.bankInfoType.another' },
});

const BANK_INFO_ACTION = enumize({
  CREATE: { id: 1, name: 'common.enum.bankInfoAction.create' },
  UPDATE: { id: 2, name: 'common.enum.bankInfoAction.update' },
});

const ADDRESS_ASSOCIATION = enumize({
  USER: { id: 1, name: 'common.enum.addressAssociation.user' },
  ACCOUNT: { id: 2, name: 'common.enum.addressAssociation.account' },
});

const TAX_WITHHOLDING_ASSOCIATION = enumize({
  USER: { id: 1, name: 'common.enum.taxWithholdingAssociation.user' },
  ACCOUNT: { id: 2, name: 'common.enum.taxWithholdingAssociation.account' },
});

const SHARE_TYPES = enumize({
  C_CLASS: { id: 1, name: 'common.enum.shareTypes.c' },
  S_CLASS: { id: 2, name: 'common.enum.shareTypes.s' },
});

const GRANT_TYPES = enumize({
  PASSWORD: { id: 1, name: 'common.enum.grantTypes.password' },
  REFRESH_TOKEN: { id: 2, name: 'common.enum.grantTypes.refreshToken' },
  CONFIRM_EMAIL: { id: 3, name: 'common.enum.grantTypes.confirmEmail' },
  SIGNUP: { id: 4, name: 'common.enum.grantTypes.signup' },
  JOINTEE_WORKFLOW: { id: 5, name: 'common.enum.grantTypes.jointeeWorkflow' },
  EXTERNAL_USER_WORKFLOW: { id: 6, name: 'common.enum.grantTypes.jointeeWorkflow' },
});

const MFA_STATUS = enumize({
  PENDING: { id: 1, name: 'common.enum.mfa_status.pending' },
  VERIFIED: { id: 2, name: 'common.enum.mfa_status.verified' },
});

const MFA_SENT_VIA = enumize({
  SMS: { id: 1, name: 'common.enum.mfa_sent_via.sms' },
  EMAIL: { id: 2, name: 'common.enum.mfa_sent_via.email' },
  VOICE: { id: 3, name: 'common.enum.mfa_sent_via.voice' },
});

// If authorization is not required, MFA action authorization will be omitted in case that user has disabled MFA action
const MFA_ACTION = enumize({
  CHANGE_MFA_PHONE_VIA_SMS: {
    id: 1,
    name: 'common.mfa_action.enum.change_mfa_phone_via_sms',
    isAuthorizationRequired: true,
  },
  CHANGE_MFA_EMAIL: { id: 2, name: 'common.mfa_action.enum.change_mfa_email', isAuthorizationRequired: true },
  DISABLE_MFA: { id: 3, name: 'common.enum.mfa_action.disable_mfa', isAuthorizationRequired: true },
  ENABLE_MFA: { id: 4, name: 'common.enum.mfa_action.enable_mfa', isAuthorizationRequired: true },
  CHANGE_DEFAULT_OPTION: { id: 5, name: 'common.enum.mfa_action.change_default_option', isAuthorizationRequired: true },
  CHANGE_MFA_PHONE_VIA_VOICE: {
    id: 6,
    name: 'common.mfa_action.enum.change_mfa_phone_via_voice',
    isAuthorizationRequired: true,
  },
  SHARE_REPURCHASE: { id: 7, name: 'common.mfa_action.enum.share_repurchase', isAuthorizationRequired: false },
  UNLOCK_PERSONAL_INFO: { id: 8, name: 'common.mfa_action.enum.unlock_personal_info', isAuthorizationRequired: false },
  UPDATE_ACCOUNT_INFO: { id: 9, name: 'common.mfa_action.enum.update_account_info', isAuthorizationRequired: false },
  UPDATE_PERSONAL_INFO: { id: 10, name: 'common.mfa_action.enum.update_personal_info', isAuthorizationRequired: false },
  UPDATE_MFA_OPTION: { id: 11, name: 'common.mfa_action.enum.update_personal_info', isAuthorizationRequired: true },
  GET_PERSONAL_INFO: { id: 12, name: 'common.mfa_action.enum.update_personal_info', isAuthorizationRequired: false },
  UPDATE_REINVEST_SETTINGS: { id: 13, name: 'common.mfa_action.enum.update_reinvest_settings', isAuthorizationRequired: false },
  CREATE_BANK_INFO: { id: 14, name: 'common.mfa_action.enum.create_bank_info', isAuthorizationRequired: false },
  REMOVE_BANK_INFO: { id: 15, name: 'common.mfa_action.enum.remove_bank_info', isAuthorizationRequired: false },
  REASSIGN_BANK_INFO: { id: 16, name: 'common.mfa_action.enum.reassign_bank_info', isAuthorizationRequired: false },
  UPDATE_BANK_INFO: { id: 17, name: 'common.mfa_action.enum.update_bank_info', isAuthorizationRequired: false },
});

const MESSAGES = enumize({
  LOGIN_DIVIDEND_ELIMINATION: {
    id: 1,
    name: 'common.enum.messages.loginDividendElimination',
  },
  MISSING_BANK_INFORMATION: {
    id: 2,
    name: 'common.enum.messages.missingBankInformation',
  },
  ACH_PAYMENT_FAILED: { id: 3, name: 'common.enum.messages.achPaymentFailed' },
  DIVIDEND_PAYMENT_FAILED: {
    id: 4,
    name: 'common.enum.messages.dividendPaymentFailed',
  },
  BANK_VERIFY_REQUIRED: {
    id: 5,
    name: 'common.enum.messages.bankVerifyRequired',
  },
  TRANSACTION_VERIFICATION_FAILED: {
    id: 6,
    name: 'common.enum.messages.transactionVerificationFailed',
  },
  SCHEDULE_VERIFICATION_WAITING: {
    id: 7,
    name: 'common.enum.messages.scheduleVerificationWaiting',
  },
});

const CSV_REPORT = enumize({
  WELLS_FARGO: { id: 1, name: 'Failed dividends payments - Wells Fargo' },
  PMB: { id: 2, name: 'Failed dividends payments - PMB' },
});


const BANK_INFO_SUB_TYPE_ACCOUNT = enumize({
  CHECKING: { id: 1, name: 'checking' },
  SAVINGS: { id: 2, name: 'savings' },
});

const PAGE_TRANSITION = enumize({
  ANSWERS: { id: 1, name: 'Answers' },
  ON_HOLD: { id: 2, name: 'On hold' },
  SIGN: { id: 3, name: 'Sign' },
  UPLOAD_PHOTO: { id: 4, name: 'Upload photo' },
});

const ON_HOLD_REASON = enumize({
  COMMON: { id: 1, name: 'Common' },
  FAILED_AML: { id: 2, name: 'Failed AML' },
  FAILED_KYC: { id: 3, name: 'Failed KYC' },
  AML_KYC_TOO_MANY_TRIES: { id: 4, name: 'Too many tries AML/KYC' },
  MISSING_DOCUMENT: { id: 5, name: 'Missing document' },
  MISSING_PHOTO: { id: 6, name: 'Missing photo' },
  WAITING_FOR_ANOTHER_SIGNATURE: { id: 7, name: 'Waiting for another signature' },
});

const NORTH_CAPITAL_STATUS = enumize({
  OK: { id: 1, name: 'OK', northcapitalName: 'PASS' },
  FAIL: { id: 2, name: 'FAIL', northcapitalName: 'FAIL' },
});

const VERIFICATION_TYPES = enumize({
  AML: { id: 1, name: 'AML' },
  KYC: { id: 2, name: 'KYC' },
});

const NORTHCAPITAL_IMPORT_TYPES = enumize({
  SUITABILITY: { id: 1, name: 'Suitability' },
  AML: { id: 2, name: 'AML' },
  AML_KYC: { id: 3, name: 'AML/KYC' },
  UPLOAD_SUBDOC: { id: 3, name: 'Upload subdoc' },
  UPLOAD_DOCUMENT: { id: 3, name: 'Upload document' },
});

const ACCOUNT_VERIFICATION_TYPES = enumize({
  FINANCIAL_SUITABILITY: { id: 1, name: 'Financial Suitability', order: 1 },
  // Not used
  JOINTEE_FINANCIAL_SUITABILITY: { id: 2, name: 'Additional Signer Financial Suitability', order: 2 },
  NORTHCAPITAL_SUITABILITY: { id: 3, name: 'Investment Suitability', order: 3 },
  // Not used
  JOINTEE_NORTHCAPITAL_SUITABILITY: { id: 4, name: 'Additional Signer Investment Suitability', order: 4 },
  IDENTITY_VERIFICATION: { id: 5, name: 'Identity Verification', order: 5 },
  JOINTEE_IDENTITY_VERIFICATION: { id: 6, name: 'Additional Signer Identity Verification', order: 6 },
  ONE_TIME_SIGN: { id: 7, name: 'Investment Documents', order: 8 },
  JOINTEE_ONE_TIME_SIGN: { id: 8, name: 'Additional Signer Investment Documents', order: 14 },
  AIP_SIGN: { id: 9, name: 'Automatic Investment Program', order: 11 },
  JOINTEE_AIP_SIGN: { id: 10, name: 'Additional Signer AIP Documents', order: 9 },
  TRANSACTION_PAYMENT_TYPE: { id: 11, name: 'Payment Type', order: 10 },
  JOINTEE_INVITE: { id: 12, name: 'Additional Signers Invite', order: 13 },
  AIP_PAYMENT_TYPE: { id: 13, name: 'AIP Payment Type', order: 12 },
  RETIREMENT_ACCOUNT_CREATION: { id: 14, name: 'Retirement Account Creation', order: 1 },
  ASSOCIATED_WITH_BD: { id: 15, name: 'Upload 407 Letter', order: 15 },
  IDENTITY_VERIFICATION_PRIMARY: { id: 16, name: 'User Identity Verification', order: 3 },
  REGD_SUITABILITY: { id: 17, name: 'Verification documents', order: 7 },
});

const VERIFICATION_STATUSES = enumize({
  COMPLETED: { id: 1, name: 'Completed' },
  WAITING_FOR_ACTION: { id: 2, name: 'Waiting for action' },
  IN_PROGRESS: { id: 3, name: 'In progress' },
  WAITING_FOR_REVIEW: { id: 4, name: 'Waiting for review' },
  FAILED: { id: 5, name: 'Failed' },
});

const DOCUMENT_SOURCES = enumize({
  S3: { id: 1, name: 's3' },
  DOCUSIGN: { id: 2, name: 'docusign' },
  NORTHCAPITAL: { id: 3, name: 'Northcapital' },
});

const DOCUMENT_STATUSES = enumize({
  DELIVERED: { id: 1, name: 'delivered' },
  COMPLETED: { id: 2, name: 'completed' },
  CANCELED: { id: 3, name: 'canceled' },
  PARTIALLY_COMPLETED: { id: 4, name: 'partially_completed' },
});

const EMPLOYEE_STATUS = enumize({
  EMPLOYED: { id: 1, name: 'Employed' },
  NOT_EMPLOYED: { id: 2, name: 'Not Employed' },
  RETIRED: { id: 3, name: 'Retired' },
  STUDENT: { id: 4, name: 'Student' },
});

export default {
  REITS,
  SITES,
  TESTIMONIAL_STATUS,
  CASH_PAYOUT,
  REIT_STATUS,
  ACCOUNT_TYPES,
  ACCOUNT_SUB_TYPES,
  TRANSACTION_TYPES,
  TRANSACTION_STATUSES,
  REVIEW_TYPES,
  PAYMENT_TYPES,
  CITIZENSHIP,
  REIT_SUBSCRIPTION_TYPES,
  DOCUMENT_TYPES,
  AML_EXCEPTION_STATUSES,
  MIMICS_TRANSACTION_STATUS,
  BATCH_OPERATION_TYPE,
  NOTIFICATION_TYPE,
  SIGNUP_TYPE,
  SCHEDULE_STATUSES,
  SCHEDULE_FREQUENCIES,
  SCHEDULE_DAYS,
  SCHEDULE_WEEKDAYS,
  SCHEDULE_TRANSACTION_TYPE,
  SCHEDULE_LOG_TYPE,
  REGULATION_TYPE,
  FAIL_EVENT_TYPE,
  WELLS_FARGO_LOG_TYPE,
  LOG_EMAIL_TYPE,
  MANUAL_MODIFICATION_LOG_TYPE,
  STATES,
  BANK_INFO_TYPE,
  BANK_INFO_ACTION,
  ADDRESS_ASSOCIATION,
  TAX_WITHHOLDING_ASSOCIATION,
  SHARE_TYPES,
  GRANT_TYPES,
  MFA_STATUS,
  MFA_SENT_VIA,
  MFA_ACTION,
  MESSAGES,
  CSV_REPORT,
  BANK_INFO_SUB_TYPE_ACCOUNT,
  PAGE_TRANSITION,
  ON_HOLD_REASON,
  NORTH_CAPITAL_STATUS,
  VERIFICATION_TYPES,
  NORTHCAPITAL_IMPORT_TYPES,
  ACCOUNT_VERIFICATION_TYPES,
  VERIFICATION_STATUSES,
  DOCUMENT_SOURCES,
  DOCUMENT_STATUSES,
  EMPLOYEE_STATUS,
};
