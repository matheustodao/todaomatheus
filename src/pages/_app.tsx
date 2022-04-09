import { ThemeProvider } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';

import '../i18n';

import Head from 'next/head';

import GlobalStyle from '../styles/global';
import { theme } from '../styles/themes';
import Header from '../app/components/Header';
import { Main } from '../styles';

function MyApp({ Component, pageProps, router }: AppProps) {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#252525" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={t('description')}
        />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="google-site-verification" content="8UzdDI7o5Ekc81ZlXinATnvEJznzCDc7tR2HktWtdYE" />
        <title>{t('title')}</title>
      </Head>
      <ThemeProvider theme={theme.dark}>
        <GlobalStyle />
        <Header />
        <AnimatePresence>
          <Main
            key={router.route}
            exit="pageExit"
            initial="pageInitial"
            animate="pageAnimate"
            variants={{
              pageInitial: { opacity: 0, y: '-1000px' },
              pageAnimate: { opacity: 1, y: 0 },
              pageExit: {
                y: '100px',
                opacity: 0,
              },
            }}
          >
            <Component {...pageProps} />
          </Main>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
