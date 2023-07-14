import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const backgroundImage = () => {
        return (
            <Image
                className={styles.image}
                src="/images/headshot.png"
                alt="My Image"
                width={500}
                height={1000}
            />
        );
    };
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
                    <p className={styles.description}>
                        Software Engineer: Dedicated and detail-oriented
                        professional with a passion for solving complex problems
                        through innovative coding solutions. Software Engineer:
                        Dedicated and detail-oriented professional with a
                        passion for solving complex problems through innovative
                        coding solutions.
                    </p>
                </section>
            </main>
        </>
    );
}
