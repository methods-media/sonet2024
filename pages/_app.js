import { appWithTranslation } from 'next-i18next';
import Layout from '@src/common/layout';
import '../styles/globals.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(MyApp);
