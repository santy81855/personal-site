import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Showcase.module.css";
import React, { useState, useRef, useEffect } from "react";
import CodonSection from "@/components/CodonSection";
import ResumeSection from "@/components/ResumeSection";
import ImageCycle from "@/lib/ImageCycle";

const inter = Inter({ subsets: ["latin"] });

export default function Showcase() {
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
                            <p>example small title</p>
                            <h1>
                                Example big title for you that is amazing and
                                cool
                            </h1>
                        </div>
                        <div
                            className={`${styles.rightItem} ${styles.titleItem}`}
                        >
                            <p>
                                Example description of my work and technologies
                                i am familiar with
                            </p>
                        </div>
                    </div>
                </section>
                <section className={styles.section}>
                    <ImageCycle />
                </section>
                <CodonSection />
                <ResumeSection />
            </main>
        </>
    );
}
