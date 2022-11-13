import Image from 'next/image';
import Link from 'next/link';
import styles from "/styles/Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link
            href="https://github.com/nemkicsiaron/project-polarized-pancakes"
            target="_blank"
            rel="noopener noreferrer"
            >
                Project Pollarized{' '}
                <Image src="/static/pollarized.png" alt="Pollarized Logo" width={50} height={50} />
            </Link>
            <Link
            href="https://github.com/nemkicsiaron"
            target="_blank"
            rel="noopener noreferrer"
            >
                Made by{' '}
                <Image src="/static/Kamarad Kommie Doggo.png" alt="My Logo" width={50} height={50} />
            </Link>
            <Link
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
                Powered by{' '}
                <Image src="/static/vercel.png" alt="Vercel Logo" width={72} height={16} />
            </Link>
        </footer>);
};

export default Footer;