import styles from "@/styles/Header.module.scss";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { contactEmail } from "@/data/projects";
import { ArrowUpRight, Search } from "./Icons";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/showcase", label: "Showcase" },
];

interface HeaderProps {
    onOpenPalette: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenPalette }) => {
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isMac, setIsMac] = useState(true);

    useEffect(() => {
        setIsMac(/mac|iphone|ipad/i.test(navigator.userAgent));
        const handleScroll = () => {
            const scrollable =
                document.documentElement.scrollHeight - window.innerHeight;
            setIsScrolled(window.scrollY > 8);
            setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // close the mobile menu whenever the route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [router.asPath]);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsMenuOpen(false);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isMenuOpen]);

    const isActive = (href: string) =>
        href === "/" ? router.pathname === "/" : router.pathname.startsWith(href);

    return (
        <header
            className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${
                isMenuOpen ? styles.menuOpen : ""
            }`}
        >
            <nav className={styles.navContainer} aria-label="Main">
                <Link href="/" className={styles.brand} aria-label="Santiago Garcia, home">
                    <span className={styles.logo} aria-hidden="true" />
                    <span className={styles.brandName}>Santiago Garcia</span>
                </Link>

                <ul className={styles.horizontalMenu}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={isActive(link.href) ? styles.active : ""}
                                aria-current={isActive(link.href) ? "page" : undefined}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className={styles.rightContainer}>
                    <button
                        className={styles.paletteButton}
                        onClick={onOpenPalette}
                        aria-label="Open command menu"
                    >
                        <Search size={14} />
                        <span className={styles.paletteLabel}>Jump to…</span>
                        <kbd>{isMac ? "⌘" : "Ctrl"} K</kbd>
                    </button>
                    <ThemeToggle />
                    <a
                        className={`button buttonPrimary ${styles.contactButton}`}
                        href={`mailto:${contactEmail}`}
                    >
                        Get in touch
                    </a>
                    <button
                        className={styles.hamburgerButton}
                        onClick={() => setIsMenuOpen((open) => !open)}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobileMenu"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        <span />
                        <span />
                    </button>
                </div>
            </nav>

            <div
                className={styles.progress}
                style={{ transform: `scaleX(${progress})` }}
                aria-hidden="true"
            />

            <div id="mobileMenu" className={styles.verticalMenu} aria-hidden={!isMenuOpen}>
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={link.href} style={{ transitionDelay: `${index * 70 + 120}ms` }}>
                            <Link
                                href={link.href}
                                tabIndex={isMenuOpen ? 0 : -1}
                                className={isActive(link.href) ? styles.highlightedItem : ""}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className={styles.menuIndex}>0{index + 1}</span>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li style={{ transitionDelay: `${navLinks.length * 70 + 120}ms` }}>
                        <a href={`mailto:${contactEmail}`} tabIndex={isMenuOpen ? 0 : -1}>
                            <span className={styles.menuIndex}>0{navLinks.length + 1}</span>
                            Contact <ArrowUpRight size={28} />
                        </a>
                    </li>
                </ul>
                <p className={styles.menuFooter}>{contactEmail}</p>
            </div>
        </header>
    );
};

export default Header;
