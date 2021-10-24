/* eslint-disable react/forbid-prop-types */
import Head from 'next/head';
import PropTypes from 'prop-types';

import GlobalStyle from '../styles/global';
import { ModalProvider } from '../App/Context/ModalContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="theme-color" media="light" content="#FFFFFF" />
        <meta name="theme-color" media="dark" content="#FFFFFF" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Oi! Eu sou <strong>Matheus Todao</strong>, sou desenvolvedor ReactJS, Javascript e NodeJS... Está precisando de uma Landing Page da para sua loja? Entra em contato!"
        />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="google-site-verification" content="8UzdDI7o5Ekc81ZlXinATnvEJznzCDc7tR2HktWtdYE" />
        <title>Matheus Todao - Desenvolvedor</title>
      </Head>
      <ModalProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ModalProvider>
    </>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.any.isRequired,
};
