import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Homer() {
    return (
        <div className='styles.container'>
            <Head>
                <title>Pollarized</title>
                <meta name="description" content="A placeholder...  for a saucy app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
            <h1 className={styles.title}>
                Welcome to <a href="https://github.com/nemkicsiaron/project-polarized-pancakes">POLLARIZED</a>
            </h1>

            <p className={styles.description}>
                A new way of managing{' '}
                <span className={styles.code}>
                    <code className={styles.codetext}>community polls</code>
                </span>
                {' '}coming soon!
            </p>

            <div className={styles.grid}>
                {/* TODO: create  About us shit*/}
                <a href="/about us" className={styles.card}>
                    <h2>Chech out what this all about &rarr;</h2>
                    <p>Read everything there is to know about this project.</p>
                </a>

                <a href="https://www.paypal.com/donate/?hosted_button_id=FCQ4KFFC2XLV8" className={styles.card}>
                    <h2>Maybe buy me a coffee &rarr;</h2>
                    <p>Ok, I don't drink coffee, but any help would be really appreciated &lt;3 </p>
                </a>

                <a href="https://nextjs.org/docs" className={styles.card}>
                    <h2>Tech stack &rarr;</h2>
                    <p>Take a peek on what kind of technologies this website uses.</p>
                </a>

                <a href="https://nextjs.org" className={styles.card}>
                    <h2>Built on Next.js &rarr;</h2>
                    <p>Learn about Next.js by Vercel on their own website!</p>
                </a>

            </div>

            </main>
            <footer className={styles.footer}>
                <a
                href="https://github.com/nemkicsiaron/project-polarized-pancakes"
                target="_blank"
                rel="noopener noreferrer"
                >
                Project Pollarized{' '}
                <span className={styles.logo}>
                    <Image src="/pollarized.png" alt="Pollarized Logo" width={50} height={50} />
                </span>
                </a>
                <a
                href="https://github.com/nemkicsiaron"
                target="_blank"
                rel="noopener noreferrer"
                >
                Made by{' '}
                <span className={styles.logo}>
                    <Image src="/Kamarad Kommie Doggo.png" alt="My Logo" width={50} height={50} />
                </span>
                </a>
                <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                >
                Powered by{' '}
                <span className={styles.vlogo}>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
                </a>
             </footer>
        </div>
    );
}