import styles from "@/styles/Header.module.css";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";

const Header: React.FC = () => {
    const buttonClicked = () => {
        console.log("button clicked");
    };
    return (
        <header className={styles.header}>
            <nav className={styles.navContainer}>
                <div className={styles.logoContainer}>
                    logo
                    <ThemeToggle />
                </div>

                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/showcase">Showcase</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>

                <button
                    className={styles.contactButton}
                    aria-label="get-in-touch"
                    tabIndex={0}
                    onClick={buttonClicked}
                >
                    Get in touch
                </button>
            </nav>
        </header>
    );
};

export default Header;
