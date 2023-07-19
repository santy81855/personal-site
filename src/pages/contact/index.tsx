import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Contact.module.css";
import React, { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact</title>
                <meta name="description" content="My Contact Info." />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main
                className={`${styles.main} ${inter.className} ${styles.fadeIn}`}
            >
                <section className={styles.section}>
                    <h1>Don't be a stranger</h1>
                    <h1>just say hello.</h1>
                    <p>
                        Thank you for visiting my page. Please fill out the form
                        below or email me at{" "}
                        <span>santy@santiagogarcia.dev</span>
                    </p>
                </section>
                <section className={styles.contactCard}>
                    <div className={styles.leftContainer}>hey</div>
                    <div className={styles.rightContainer}>hi</div>
                    hi
                </section>
            </main>
        </>
    );
}
/*
    sectionId: string,
    textHeader: string,
    textTitle: string,
    description: string,
    techList: string[],
    mainImage: string,
    firstButtonLink: string,
    githubLink: string
*/
