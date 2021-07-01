const intlData = {
  en: {
    number: {
      currency: {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
      },
      'currency-integer': {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
      },
      percentage: {
        style: 'percent',
        maximumFractionDigits: 1,
      },
      integer: {
        minimumFractionDigits: 0,
      },
      shares: {
        minimumFractionDigits: 4,
      },
      'shares-integer': {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      },
    },
    date: {
      short: {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      },
      long: {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      },
      year: {
        year: 'numeric',
      },
    },
  },
  zh: {
    number: {
      currency: {
        style: 'currency',
        currency: 'CNY',
        minimumFractionDigits: 0,
      },
      percentage: {
        style: 'percent',
      },
      shares: {
        minimumFractionDigits: 4,
      },
    },
    date: {
      short: {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      },
      long: {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      },
    },
  },
  cs: {
    number: {
      currency: {
        style: 'currency',
        currency: 'CZK',
        minimumFractionDigits: 0,
      },
      percentage: {
        style: 'percent',
      },
      shares: {
        minimumFractionDigits: 2,
      },
    },
    date: {
      short: {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      },
      long: {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      },
    },
  },
};

export default intlData;
