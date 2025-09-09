import { appWithTranslation } from 'next-i18next';
import Layout from '@src/common/layout';
import '../styles/globals.css';
import '../styles/globals.css';

function MyApp ({ Component, pageProps }) {
  return (
    <Layout lang={pageProps?._nextI18Next?.initialLocale}>
      <Component {...pageProps}  />
    </Layout>
  );
}

export default appWithTranslation(MyApp);
