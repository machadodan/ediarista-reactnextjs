import '../UI/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from "@mui/material";
//import { ThemeProvider } from '@storybook/theming';
import theme from '../UI/themes/theme';
import React from 'react';
import Header from '../UI/components/surfaces/Header/Header';
import Footer from '../UI/components/surfaces/Footer/Footer';
import { AppContainer } from '../UI/styles/pages/AppContainer.styled';
import Head from 'next/head';
import { MainProvider } from '../data/contexts/MainContext';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>e-diarista {pageProps.title && ` - ${pageProps.title}`}</title>
      </Head>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer />
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

const AppProviderContainer: React.FC<AppProps> = (props) => {
  return (
    <MainProvider>
      <App {...props} />
    </MainProvider>
  );
};

export default AppProviderContainer;
