import styles from '../styles/Home.module.scss'

export default function Homer() {
    return (
        <div className='container'>
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
                <a href="/about" className={styles.card}>
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
        </div>
    );
}