import Head from 'next/head'
import Navigation from '../components/Header'

const About = (): JSX.Element => (
  <>
    <Head>
      <title>About</title>
    </Head>

    <Navigation />

    <h2>About</h2>
  </>
)

About.getInitialProps = () => {
  console.log('About.getInitialProps')
  return { id: 10 }
}

export default About
