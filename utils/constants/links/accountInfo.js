import messages from './messages';

const getLinks = (accountId, isNNNOP = false) =>
  isNNNOP
    ? [
        {
          url: `/account/account-info/${accountId}/documents/nnnop`,
          titleTranslationId: messages.accountInfoDocumentsNNNOP.id,
          subtitle: null,
          displayClass: 'item--simple',
        },
        {
          url: `/account/account-info/${accountId}/contact-us/nnnop`,
          titleTranslationId: messages.accountInfoContactUsNNNOP.id,
          subtitle: null,
          displayClass: 'item--simple',
        },
      ]
    : [
        {
          url: `/account/account-info/${accountId}/overview`,
          titleTranslationId: messages.accountInfoOverview.id,
          subtitle: null,
          displayClass: 'item--simple',
        },
        {
          url: `/account/account-info/${accountId}/investment-questionnaire`,
          titleTranslationId: messages.accountInfoQuestionnaire.id,
          subtitle: null,
          displayClass: 'item--simple',
        },
        {
          url: `/account/account-info/${accountId}/contact-information`,
          titleTranslationId: messages.accountInfoContact.id,
          subtitle: null,
          displayClass: 'item--simple',
        },
      ];

export default getLinks;
