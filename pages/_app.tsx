import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import './global.css'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>African proud</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
        <link
          rel="icon"
          type="image/x-icon"
          href="/logo.png" // Assurez-vous que le chemin est correct
        />
      </Head>
      <SessionProvider session={pageProps.session}>
      <Toaster
          position="bottom-center"
          reverseOrder={false}
        />
        <Component {...pageProps} />
      </SessionProvider>
    </React.Fragment>
  )
}

export default MyApp
