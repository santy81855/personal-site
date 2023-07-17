import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Showcase.module.css";
import React from "react";
import CodonSection from "@/components/CodonSection";
import ResumeSection from "@/components/ResumeSection";
import ImageCycle from "@/components/ImageCycle";

const inter = Inter({ subsets: ["latin"] });

export default function Showcase() {
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
                <title>Project showcase.</title>
                <meta name="description" content="List of my projects." />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                <section className={styles.section}>
                    <div className={styles.titleContainer}>
                        <div
                            className={`${styles.leftItem} ${styles.titleItem}`}
                        >
                            <p className={styles.leftP}>MY PROJECTS</p>
                            <h1>
                                Journey Through My Previous Projects: A Showcase
                                of Past Works
                            </h1>
                        </div>
                    </div>
                </section>
                <section className={styles.section}>
                    {grain}
                    <ImageCycle />
                </section>
                <CodonSection />
                <ResumeSection />
            </main>
        </>
    );
}
