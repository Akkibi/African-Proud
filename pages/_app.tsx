import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>African proud</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/splitting/dist/splitting.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/splitting/dist/splitting-cells.css"
        />
        <script src="https://unpkg.com/splitting/dist/splitting.min.js"></script>
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
