import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#252525" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Oi! Eu sou <strong>Matheus Todao</strong>, sou desenvolvedor ReactJS, Javascript e NodeJS... Está precisando de uma Landing Page da para sua loja? Entra em contato!"
        />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="google-site-verification" content="8UzdDI7o5Ekc81ZlXinATnvEJznzCDc7tR2HktWtdYE" />
        <title>Matheus Todao - Desenvolvedor</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
