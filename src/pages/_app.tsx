import { ThemeProvider } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { AppProps } from 'next/app';

import '../i18n';

import Head from 'next/head';

import GlobalStyle from '../styles/global';
import { theme } from '../styles/themes';
import Header from '../app/components/Header';
import { Main } from '../styles';

function MyApp({ Component, pageProps }: AppProps) {
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
        <Main>
          <Component {...pageProps} />
        </Main>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
