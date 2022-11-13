import styles from "styles/Header.module.scss";
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link
            href="/"
            className="title special"
            >
                Pollarized
                <Image src="/static/pollarized.png" alt="Pollarized Logo" width={50} height={50} />
            </Link>
        </header>
    );
};

export default Header;