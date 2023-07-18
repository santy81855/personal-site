import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import BackgroundImage from "@/components/BackgroundImage";
import React, { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    useEffect(() => {
        const title1 = document.getElementById("title1");
        if (title1) {
            title1.style.transform = "translateX(0)";
        }
        const title2 = document.getElementById("title2");
        if (title2) {
            title2.style.transform = "translateX(0)";
        }
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
            <main className={`${styles.main} ${inter.className}`}>
                <section className={styles.section}>
                    <h1
                        id="title1"
                        className={`${styles.title} ${styles.title1}`}
                    >
                        S<span>a</span>t<span>i</span>ago
                    </h1>
                    <h1
                        id="title2"
                        className={`${styles.title} ${styles.title2}`}
                    >
                        G<span>a</span>rc<span>i</span>a
                    </h1>
                    <BackgroundImage />
                    {grain}
                </section>
            </main>
        </>
    );
}
