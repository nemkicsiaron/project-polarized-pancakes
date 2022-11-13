import '/styles/globals.scss'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'


function MyApp({ Component, pageProps }) {
  return <>
  <Head>
    <title>Pollarized</title>
    <meta name="description" content="A placeholder...  for a saucy app" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <Header />
  <Component {...pageProps} />
  <Footer />
  </>
}

export default MyApp
