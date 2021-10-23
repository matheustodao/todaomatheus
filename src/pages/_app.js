/* eslint-disable react/forbid-prop-types */
import Head from 'next/head';
import PropTypes from 'prop-types';

import GlobalStyle from '../styles/global';
import { ModalProvider } from '../App/Context/ModalContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="light" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Oi! Eu sou Matheus Todao, sou desenvolvedor ReactJS e NodeJS."
        />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <title>Matheus Todao</title>
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
