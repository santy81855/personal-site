import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import BackgroundImage from "@/components/BackgroundImage";
import React, { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    useEffect(() => {
        // fade in animation for the home page
        setTimeout(() => {}, 2400);

        const doc = document.documentElement;
        doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
        console.log(window.innerHeight);

        function handleResize() {
            const doc = document.documentElement;
            doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
        }

        window.addEventListener("resize", handleResize);

        // Clean up event listener when component is unmounted
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

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
        <>
            <Head>
                <title>Santiago Garcia</title>
                <meta
                    name="description"
                    content="A portfolio website for Santiago Garcia built with Next.js."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main
                className={`${styles.main} ${inter.className} ${styles.fadeIn}`}
            >
                <section id="homeSection" className={styles.section}>
                    <h1
                        id="title1"
                        className={`${styles.title} ${styles.slideInRight}`}
                    >
                        S<span>a</span>nt<span>i</span>ago
                    </h1>
                    <h1
                        id="title2"
                        className={`${styles.title} ${styles.slideInLeft}`}
                    >
                        G<span>a</span>rc<span>i</span>a.
                    </h1>
                    <BackgroundImage />
                    {grain}
                </section>
            </main>
        </>
    );
}
