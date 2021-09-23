import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from 'next-themes'
import React from 'react'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      {/* <DefaultSeo {...SEO} /> */}
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}


export default MyApp