import '../styles/globals.scss'
import Head from 'next/head'
import Image from 'next/image'

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
    <title>Pollarized</title>
    <meta name="description" content="A placeholder...  for a saucy app" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <Component {...pageProps} />
  <footer>
                <a
                href="https://github.com/nemkicsiaron/project-polarized-pancakes"
                target="_blank"
                rel="noopener noreferrer"
                >
                Project Pollarized{' '}
                <span className="logo">
                    <Image src="/pollarized.png" alt="Pollarized Logo" width={50} height={50} />
                </span>
                </a>
                <a
                href="https://github.com/nemkicsiaron"
                target="_blank"
                rel="noopener noreferrer"
                >
                Made by{' '}
                <span className="logo">
                    <Image src="/Kamarad Kommie Doggo.png" alt="My Logo" width={50} height={50} />
                </span>
                </a>
                <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                >
                Powered by{' '}
                <span className="vlogo">
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
                </a>
             </footer>
  </>
}

export default MyApp
