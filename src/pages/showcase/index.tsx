import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Showcase.module.css";
import React, { useState } from "react";
import CodonSection from "@/components/CodonSection";

const inter = Inter({ subsets: ["latin"] });

export default function Showcase() {
    const [imageTitles, setImageTitles] = useState([
        "Codon",
        "Typo",
        "Glass Cannon",
        "AI Resume",
    ]);

    const [activeImage, setActiveImage] = useState(3);

    const scrollToSection = (event) => {
        const element = document.getElementById("codon");
        if (element !== null) {
            //element.scrollIntoView({ behavior: "smooth" });
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition - 100;
            document.body.scrollTo({
                top: element.getBoundingClientRect().top - 100,
                behavior: "smooth",
            });
        }
    };

    const resumeTechnologyList = [
        "Node.js",
        "Express",
        "Passport",
        "React",
        "MongoDB",
        "Git",
        "OpenAI",
        "AWS EC2",
    ];

    const [imagesArray, setImagesArray] = useState([
        <Image
            className={styles.image}
            src="/images/image1.png"
            alt="Codon Image"
            height={441}
            width={650}
            priority={true}
            onClick={(event) => scrollToSection(event)}
        />,
        <Image
            className={styles.image}
            src="/images/image2.png"
            alt="Typo Image"
            height={441}
            width={650}
            priority={true}
        />,
        <Image
            className={styles.image}
            src="/images/image3.png"
            alt="Glass Cannon Image"
            height={441}
            width={650}
            priority={true}
        />,
        <Image
            className={styles.image}
            src="/images/image4.png"
            alt="AI Resume Image"
            height={441}
            width={650}
            priority={true}
        />,
    ]);

    const changeActiveImage = () => {
        setImagesArray((prevArray) => {
            const newArray = prevArray.map((image, i) => {
                if (i === 3) {
                    // Modify the style of the desired element
                    return (
                        <Image
                            className={`${styles.activeImage} ${styles.image}`}
                            src={image.props.src}
                            alt={image.props.alt}
                            height={441}
                            width={650}
                            priority={true}
                            onClick={image.props.onClick}
                        />
                    );
                }
                return image; // Return other elements as they are
            });
            return newArray;
        });
    };

    const cycleLeft = () => {
        // reorder the imagesArray useState array by moving everything to the left
        // and moving the first element to the end
        // then set the state to the new array
        setImagesArray((prevArray) => {
            const newArray = [...prevArray];
            const firstElement = newArray.shift();
            newArray.push(firstElement);
            return newArray;
        });
        changeActiveImage();
        // change the activeImage state to the new active image index
        setActiveImage((prevIndex) => {
            if (prevIndex === 3) {
                return 0;
            } else {
                return prevIndex + 1;
            }
        });
    };
    const cycleRight = () => {
        setImagesArray((prevArray) => {
            const newArray = [...prevArray];
            const lastElement = newArray.pop();
            newArray.unshift(lastElement);
            return newArray;
        });
        changeActiveImage();
        setActiveImage((prevIndex) => {
            if (prevIndex === 0) {
                return 3;
            } else {
                return prevIndex - 1;
            }
        });
    };

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
                    <div className={styles.imageSectionContainer}>
                        <div className={styles.arrowContainer}>
                            <div className={styles.imageTitle}>
                                {imageTitles[activeImage]}
                            </div>
                            <div
                                className={styles.leftArrow}
                                onClick={() => cycleLeft()}
                            ></div>
                            <div className={styles.circle}></div>
                            <div
                                className={styles.rightArrow}
                                onClick={() => cycleRight()}
                            ></div>
                        </div>
                        <div className={styles.imagesContainer}>
                            <div className={`${styles.image1} ${styles.image}`}>
                                {imagesArray[0]}
                            </div>
                            <div className={`${styles.image2} ${styles.image}`}>
                                {imagesArray[1]}
                            </div>
                            <div className={`${styles.image3} ${styles.image}`}>
                                {imagesArray[2]}
                            </div>
                            <div
                                className={`${styles.activeImage} ${styles.image}`}
                            >
                                {imagesArray[3]}
                            </div>
                        </div>
                    </div>
                </section>
                <CodonSection />
                <section className={styles.section}>
                    <div className={styles.sectionContainer}>
                        <p className={styles.textHeader}>AI Web Application</p>
                        <h1 className={styles.textTitle}>AI Resume Builder</h1>
                        <p className={styles.description}>
                            A web application to help build a professional
                            resume in minutes with the help of artificial
                            intelligence.
                        </p>

                        <div className={styles.technologyDescription}>
                            <Image
                                className={styles.codonImage}
                                src="/images/image4.png"
                                alt="Resume Image"
                                height={441}
                                width={650}
                                priority={true}
                            />
                            <div className={styles.technologyList}>
                                <div className={styles.technologyList}>
                                    {resumeTechnologyList.map((item, index) => (
                                        <div
                                            key={index}
                                            className={styles.item}
                                        >
                                            <p>{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
