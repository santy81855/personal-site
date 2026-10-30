import { useEffect, useState } from "react";
import styles from "@/styles/ThemeToggle.module.css";
import { Moon, Sun } from "./Icons";

export const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark-theme");
    try {
        localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch (e) {}
    window.dispatchEvent(new Event("themechange"));
    return isDark;
};

const ThemeToggle = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        // the inline script in _document already applied the theme, just sync with it
        const sync = () =>
            setIsDarkTheme(
                document.documentElement.classList.contains("dark-theme")
            );
        sync();
        window.addEventListener("themechange", sync);
        return () => window.removeEventListener("themechange", sync);
    }, []);

    return (
        <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={isDarkTheme ? "Switch to light theme" : "Switch to dark theme"}
            title={isDarkTheme ? "Light theme" : "Dark theme"}
        >
            <span className={`${styles.icon} ${isDarkTheme ? "" : styles.active}`}>
                <Moon />
            </span>
            <span className={`${styles.icon} ${isDarkTheme ? styles.active : ""}`}>
                <Sun />
            </span>
        </button>
    );
};

export default ThemeToggle;
