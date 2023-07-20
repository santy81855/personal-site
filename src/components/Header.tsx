import styles from "@/styles/Header.module.scss";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

const Header: React.FC = () => {
    const router = useRouter();
    const currentUrl = router.asPath;
    const [shortNav, setshortNav] = useState(false);
    const [isVerticalMenuOpen, setisVerticalMenuOpen] = useState(false);
    const verticalMenuRef = useRef<HTMLDivElement>(null);
    const homeRef = useRef<HTMLParagraphElement>(null);
    const showcaseRef = useRef<HTMLParagraphElement>(null);
    const contactRef = useRef<HTMLParagraphElement>(null);
    const verticalMenuWidth = 100;
    const fadeInDelay = 1300;

    useEffect(() => {
        if (window.innerWidth < 700) {
            setshortNav(true);
            setTimeout(() => {
                const contactButton = document.getElementById("contactButton");
                if (contactButton) {
                    contactButton.style.opacity = "1";
                }
            }, fadeInDelay);
            setTimeout(() => {
                const hamburgerContainer =
                    document.getElementById("hamburgerContainer");
                if (hamburgerContainer) {
                    hamburgerContainer.style.opacity = "1";
                }
            }, fadeInDelay * 2);
        }
        // if the window is big then show the fade in animations for the header items only on the home page
        else {
            if (currentUrl === "/") {
                // do something 1 second after the component is mounted
                setTimeout(() => {
                    const logo = document.getElementById("logoContainer");
                    if (logo) {
                        logo.style.opacity = "1";
                    }
                }, fadeInDelay);
                setTimeout(() => {
                    const menu = document.getElementById(
                        "horizontalMenuContainer"
                    );
                    if (menu) {
                        menu.style.opacity = "1";
                    }
                }, fadeInDelay * 2);
                setTimeout(() => {
                    const rightContainer =
                        document.getElementById("rightContainer");
                    if (rightContainer) {
                        rightContainer.style.opacity = "1";
                    }
                }, fadeInDelay * 3);
            } else {
                const rightContainer =
                    document.getElementById("rightContainer");
                if (rightContainer) {
                    rightContainer.style.opacity = "1";
                }
                const menu = document.getElementById("horizontalMenuContainer");
                if (menu) {
                    menu.style.opacity = "1";
                }
                const logo = document.getElementById("logoContainer");
                if (logo) {
                    logo.style.opacity = "1";
                }
            }
        }
        function handleResize() {
            if (window.innerWidth < 700) {
                setshortNav(true);
                const logo = document.getElementById("logoContainer");
            } else {
                setshortNav(false);
                const logo = document.getElementById("logoContainer");
                if (logo) {
                    logo.style.opacity = "1";
                }
                const menu = document.getElementById("horizontalMenuContainer");
                if (menu) {
                    menu.style.opacity = "1";
                }
                const rightContainer =
                    document.getElementById("rightContainer");
                if (rightContainer) {
                    rightContainer.style.opacity = "1";
                }
            }
        }
        const handleClick = (event: { target: any }) => {
            if (isVerticalMenuOpen) {
                if (
                    verticalMenuRef.current &&
                    !verticalMenuRef.current.contains(event.target)
                ) {
                    closeVerticalMenu();
                }
            }
        };
        window.addEventListener("resize", handleResize);
        document.addEventListener("click", handleClick);
        // Clean up event listener when component is unmounted
        return () => {
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("click", handleClick);
        };
    }, [isVerticalMenuOpen]);

    const buttonClicked = () => {
        console.log("button clicked");
    };

    const handleMenuClick = () => {
        const element = document.getElementById("verticalMenu");
        if (element) {
            if (isVerticalMenuOpen === true) {
                element.classList.remove(styles.openMenu);
                element.classList.add(styles.closeMenu);
                setisVerticalMenuOpen(false);
            } else {
                console.log("hey");
                element.classList.add(styles.openMenu);
                element.classList.remove(styles.closeMenu);
                // add a class to the text representing the page you are currently on
                if (currentUrl === "/") {
                    homeRef?.current?.classList.add(styles.highlightedItem);
                    showcaseRef?.current?.classList.remove(
                        styles.highlightedItem
                    );
                    contactRef?.current?.classList.remove(
                        styles.highlightedItem
                    );
                } else if (currentUrl === "/showcase") {
                    showcaseRef?.current?.classList.add(styles.highlightedItem);
                    homeRef?.current?.classList.remove(styles.highlightedItem);
                    contactRef?.current?.classList.remove(
                        styles.highlightedItem
                    );
                } else if (currentUrl === "/contact") {
                    contactRef?.current?.classList.add(styles.highlightedItem);
                    homeRef?.current?.classList.remove(styles.highlightedItem);
                    showcaseRef?.current?.classList.remove(
                        styles.highlightedItem
                    );
                }
                setTimeout(() => {
                    setisVerticalMenuOpen(true);
                }, 1000);
            }
        }
    };

    const closeVerticalMenu = () => {
        const element = document.getElementById("verticalMenu");
        if (!element) return;
        element.classList.remove(styles.openMenu);
        element.classList.add(styles.closeMenu);
        setisVerticalMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <nav className={styles.navContainer}>
                {!shortNav && (
                    <div id="logoContainer" className={styles.logoContainer}>
                        logo
                        <ThemeToggle />
                    </div>
                )}
                {!shortNav && (
                    <ul
                        id="horizontalMenuContainer"
                        className={styles.horizontalMenu}
                    >
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
                )}
                <div id="rightContainer" className={styles.rightContainer}>
                    <button
                        id="contactButton"
                        className={styles.contactButton}
                        aria-label="get-in-touch"
                        tabIndex={0}
                        onClick={buttonClicked}
                    >
                        <p>Get in touch</p>
                    </button>
                    <div
                        id="hamburgerContainer"
                        className={styles.hamburgerContainer}
                        onClick={handleMenuClick}
                    >
                        {shortNav && <p>Menu</p>}
                        <button className={styles.hamburgerButton}>
                            &#9776;
                        </button>
                    </div>
                </div>
                <div
                    id="verticalMenu"
                    ref={verticalMenuRef}
                    className={styles.verticalMenu}
                >
                    <div
                        className={styles.closeButton}
                        onClick={closeVerticalMenu}
                    >
                        &times;
                    </div>
                    <div className={styles.themeContainer}>
                        <ThemeToggle />
                    </div>
                    <ul>
                        <li>
                            <Link href="/" onClick={closeVerticalMenu}>
                                <p ref={homeRef}>Home</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/showcase" onClick={closeVerticalMenu}>
                                <p ref={showcaseRef}>Showcase</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" onClick={closeVerticalMenu}>
                                <p ref={contactRef}>Contact</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
