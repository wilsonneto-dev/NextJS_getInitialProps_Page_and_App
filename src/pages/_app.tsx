import App, { AppProps } from 'next/app'

import appWithI18n from 'next-translate/appWithI18n'
import i18nConfig from '../../i18n'

// import 'theme/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext) => {
  console.log('MyApp.getInitialProps')
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default appWithI18n(MyApp, i18nConfig)
// export default MyApp
