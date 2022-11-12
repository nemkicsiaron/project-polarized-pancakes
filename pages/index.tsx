import Link from "next/link";
import styles from "../styles/Home.module.scss"

export default function Homer() {
    return (
        <div className='container'>
            <main className={styles.main}>
            <h1 className={styles.title}>
                Welcome to <Link href="https://github.com/nemkicsiaron/project-polarized-pancakes">POLLARIZED</Link>
            </h1>

            <p className={styles.description}>
                A new way of managing{' '}
                <span className={styles.code}>
                    <code className={styles.codetext}>community polls</code>
                </span>
                {' '}coming soon!
            </p>

            <div className={styles.grid}>
                {/* hrefDO: create  About us shit*/}
                <Link href="/about" className={styles.card}>
                    <h2>Check out what this all about &rarr;</h2>
                    <p>Read everything there is href know about this project.</p>
                </Link>

                <Link href="https://www.paypal.com/donate/?hosted_buthrefn_id=FCQ4KFFC2XLV8" className={styles.card}>
                    <h2>Maybe buy me a coffee &rarr;</h2>
                    <p>Ok, I don&apos;t drink coffee, but any help would be really appreciated &lt;3 </p>
                </Link>

                <Link href="https://nextjs.org/docs" className={styles.card}>
                    <h2>Tech stack &rarr;</h2>
                    <p>Take a peek on what kind of technologies this website uses.</p>
                </Link>

                <Link href="https://nextjs.org" className={styles.card}>
                    <h2>Built on Next.js &rarr;</h2>
                    <p>Learn about Next.js by Vercel on their own website!</p>
                </Link>

            </div>
            </main>
        </div>
    );
}