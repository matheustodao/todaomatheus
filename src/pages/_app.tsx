import { ThemeProvider } from 'styled-components';
import useTranslation from 'next-translate/useTranslation';
import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';

import Head from 'next/head';

import Header from '@components/Header';
import Footer from '@components/Footer';

import GlobalStyle from '@styles/global';
import { theme } from '@styles/themes';
import { Main } from '@styles/index';

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
          content={t('common:description')}
        />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="google-site-verification" content="8UzdDI7o5Ekc81ZlXinATnvEJznzCDc7tR2HktWtdYE" />
        <title>{t('common:title')}</title>
      </Head>
      <ThemeProvider theme={theme.dark}>
        <AnimatePresence>
          <GlobalStyle />
          <Header />
          <Main key={router.route}>
            <Component {...pageProps} />
          </Main>
          <Footer />
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
