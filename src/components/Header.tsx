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

    useEffect(() => {
        if (window.innerWidth < 700) {
            setshortNav(true);
        }
        function handleResize() {
            if (window.innerWidth < 700) {
                setshortNav(true);
            } else {
                setshortNav(false);
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
                element.style.transform = "translateX(0)";
                setisVerticalMenuOpen(false);
            } else {
                element.style.transform = `translateX(-${verticalMenuWidth}vw)`;
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
        element.style.transform = "translateX(0)";
        setisVerticalMenuOpen(false);
    };

    const grain = (
        <>
            {" "}
            <svg width="0" height="0">
                <filter
                    id="grainy-blur"
                    x="-150%"
                    y="-150%"
                    width="400%"
                    height="400%"
                >
                    <feGaussianBlur
                        stdDeviation="39"
                        result="blur"
                    ></feGaussianBlur>
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency=".537"
                    ></feTurbulence>
                    <feComposite in="blur"></feComposite>
                    <feComposite in="blur" operator="in"></feComposite>
                </filter>
            </svg>
            <div className={styles.grain}></div>
        </>
    );

    return (
        <header className={styles.header}>
            <nav className={styles.navContainer}>
                {!shortNav && (
                    <div className={styles.logoContainer}>
                        logo
                        <ThemeToggle />
                    </div>
                )}
                {!shortNav && (
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
                )}
                <div className={styles.rightContainer}>
                    <button
                        className={styles.contactButton}
                        aria-label="get-in-touch"
                        tabIndex={0}
                        onClick={buttonClicked}
                    >
                        <p>Get in touch</p>
                    </button>
                    <div
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
