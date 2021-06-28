import '../styles/globals.css';

import { IntlProvider } from 'react-intl';
import messagesEn from '../translations/en-common.json';

function MyApp({ Component, pageProps }) {
  return (
    <IntlProvider locale="en" messages={messagesEn}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
