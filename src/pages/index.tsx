import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import BackgroundImage from "@/components/BackgroundImage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
                <title>Santiago Garcia's Personal Site</title>
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
                    <h1 className={styles.title}>
                        S<span>a</span>nt<span>i</span>ago
                    </h1>
                    <h1 className={styles.title}>
                        G<span>a</span>rc<span>i</span>a
                    </h1>
                    <BackgroundImage />
                    {grain}
                </section>
            </main>
        </>
    );
}
