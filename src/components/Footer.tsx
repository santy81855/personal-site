import Link from "next/link";
import styles from "@/styles/Footer.module.css";
import { contactEmail, githubProfile } from "@/data/projects";
import { ArrowUpRight, Github, Mail } from "./Icons";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.inner}`}>
                <div className={styles.cta} data-reveal>
                    <p className="eyebrow">Have something in mind?</p>
                    <a href={`mailto:${contactEmail}`} className={styles.bigLink}>
                        Let&apos;s build it
                        <span className={styles.bigArrow}>
                            <ArrowUpRight size={40} />
                        </span>
                    </a>
                </div>
                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} Santiago Garcia
                    </p>
                    <nav className={styles.links} aria-label="Footer">
                        <Link href="/">Home</Link>
                        <Link href="/showcase">Showcase</Link>
                        <a href={githubProfile} target="_blank" rel="noreferrer">
                            <Github size={14} /> GitHub
                        </a>
                        <a href={`mailto:${contactEmail}`}>
                            <Mail size={14} /> {contactEmail}
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
