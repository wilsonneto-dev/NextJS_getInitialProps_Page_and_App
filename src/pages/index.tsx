import Head from 'next/head'
import Navigation from '../components/Header'

import useTranslation from 'next-translate/useTranslation'

const Home = ({ id }) => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Navigation />

      <h2>
        Home {t('common:page_how')} #{id}
      </h2>
    </>
  )
}

Home.getInitialProps = () => {
  console.log('Here...')
  return { id: 10 }
}

export default Home
