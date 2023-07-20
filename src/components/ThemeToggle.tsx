"use client";
import { useState, useEffect } from "react";
import styles from "@/styles/ThemeToggle.module.css";

export default function ThemeToggle() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        let curTheme = localStorage.getItem("theme");
        if (curTheme === null) {
            localStorage.setItem("theme", "light");
        } else {
            if (localStorage.getItem("theme") === "light") {
                setIsDarkTheme(false);
            } else {
                setIsDarkTheme(true);
            }
        }
    }, []);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        document.documentElement.classList.toggle("dark-theme", !isDarkTheme);
        // set the theme in local storage

        if (localStorage.getItem("theme") === "light") {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <>
            <button className={styles.themeToggle} onClick={toggleTheme}>
                {isDarkTheme ? "Light" : "Dark"}
            </button>
        </>
    );
}
