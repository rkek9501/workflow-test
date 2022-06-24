import React from "react";

import App from "next/app";
import Head from "next/head";

const MyApp = (Props: any) => {
  const { Component, pageProps } = Props;

  return (<>
    <Head>
      <title>테스트 페이지</title>
    </Head>
    <Component {...pageProps} />
  </>);
};

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;
