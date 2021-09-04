import '../styles/globals.css'
import type { AppProps } from 'next/app'

//Setting Mutil-Language;
import { IntlProvider } from 'react-intl'
import { useRouter } from "next/router"

const languages = {
  vi: require('../locale/vi.json'),
  en: require('../locale/en.json')
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { locale, defaultLocale } = router;
  const messages = languages[locale];

  return <IntlProvider messages={messages} locale={locale} defaultLocale={defaultLocale}>
    <Component {...pageProps} />
  </IntlProvider>
}

export default MyApp
