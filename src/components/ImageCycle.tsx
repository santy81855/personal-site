import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/Showcase.module.css";

const ImageCycle = () => {
    const codonRef = useRef<HTMLDivElement>(null);
    const resumeRef = useRef<HTMLDivElement>(null);
    const typoRef = useRef<HTMLDivElement>(null);
    const glassCannonRef = useRef<HTMLDivElement>(null);
    const [imageOffset, setImageOffset] = useState(40);
    var numCycles = 0;
    const [imageTitles, setImageTitles] = useState([
        "Codon",
        "Typo",
        "Glass Cannon",
        "AI Resume",
    ]);

    useEffect(() => {
        // bring the carousel into view
        const element = document.getElementById("carousel");
        if (element) {
            element.style.transform = "translateY(0%) rotate(0deg)";
        }

        if (window.innerWidth < 426) {
            setImageOffset(0);
        } else if (window.innerWidth < 585) {
            setImageOffset(10);
        } else if (window.innerWidth < 700) {
            setImageOffset(20);
        }
        function handleResize() {
            if (window.innerWidth < 426) {
                setImageOffset(0);
            } else if (window.innerWidth < 585) {
                setImageOffset(10);
            } else if (window.innerWidth < 700) {
                setImageOffset(20);
            }
        }
        window.addEventListener("resize", handleResize);
        // Clean up event listener when component is unmounted
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const cycleLeft = () => {
        // reorder the images based on the numCycles
        if (numCycles === 0) {
            numCycles = 3;
            // get the codon id
            const codon = document.getElementById("Codon");
            if (codon !== null) {
                // move it up and to the right 3 spaces
                codon.style.transform = `translate(${imageOffset * 3}px, ${
                    -imageOffset * 3
                }px)`;
                codon.style.filter = "blur(0px)";
                codon.style.zIndex = "4";
            }
            // get the typo id
            const typo = document.getElementById("Typo");
            if (typo !== null) {
                // move it down 1 space
                typo.style.transform = `translate(${-imageOffset}px, ${imageOffset}px)`;
                typo.style.filter = "grayscale(100%)  brightness(0.4)";
                typo.style.zIndex = "1";
            }
            // get the glass cannon id
            const glassCannon = document.getElementById("Glass Cannon");
            if (glassCannon !== null) {
                // move it down 1 space
                glassCannon.style.transform = `translate(${-imageOffset}px, ${imageOffset}px)`;
                // unblur it
                glassCannon.style.filter = "grayscale(100%)  brightness(0.4)";
                glassCannon.style.zIndex = "2";
            }
            // get the ai resume id
            const aiResume = document.getElementById("AI Resume");
            if (aiResume !== null) {
                // move it down 1 space
                aiResume.style.transform = `translate(${-imageOffset}px, ${imageOffset}px)`;
                aiResume.style.filter = "grayscale(100%)  brightness(0.4)";
                aiResume.style.zIndex = "3";
            }
        } else if (numCycles === 1) {
            numCycles--;
            // get the codon id
            const codon = document.getElementById("Codon");
            if (codon !== null) {
                // put it where it was
                codon.style.transform = `translate(${0}px, ${0}px)`;
                codon.style.filter = "grayscale(100%)  brightness(0.4)";
                codon.style.zIndex = "1";
            }
            // get the typo id
            const typo = document.getElementById("Typo");
            if (typo !== null) {
                // move it down 1 space
                typo.style.transform = `translate(${0}px, ${0}px)`;
                typo.style.filter = "grayscale(100%)  brightness(0.4)";
                typo.style.zIndex = "2";
            }
            // get the glass cannon id
            const glassCannon = document.getElementById("Glass Cannon");
            if (glassCannon !== null) {
                // move it down 1 space
                glassCannon.style.transform = `translate(${0}px, ${0}px)`;
                glassCannon.style.filter = "grayscale(100%)  brightness(0.4)";
                glassCannon.style.zIndex = "3";
            }
            // get the ai resume id
            const aiResume = document.getElementById("AI Resume");
            if (aiResume !== null) {
                // move it down 1 spaces
                aiResume.style.transform = `translate(${0}px, ${0}px)`;
                aiResume.style.filter = "blur(0px)";
                aiResume.style.zIndex = "4";
            }
        } else if (numCycles === 2) {
            numCycles--;
            // get the codon id
            const codon = document.getElementById("Codon");
            if (codon !== null) {
                // move it up and to the right by 1 spaces
                codon.style.transform = `translate(${imageOffset}px, ${-imageOffset}px)`;
                codon.style.filter = "grayscale(100%)  brightness(0.4)";
                codon.style.zIndex = "2";
            }
            // get the typo id
            const typo = document.getElementById("Typo");
            if (typo !== null) {
                // move it up 1 space
                typo.style.transform = `translate(${imageOffset}px, ${-imageOffset}px)`;
                typo.style.filter = "grayscale(100%)  brightness(0.4)";
                typo.style.zIndex = "3";
            }
            // get the glass cannon id
            const glassCannon = document.getElementById("Glass Cannon");
            if (glassCannon !== null) {
                // move it up 1 space
                glassCannon.style.transform = `translate(${imageOffset}px, ${-imageOffset}px)`;
                glassCannon.style.filter = "blur(0px)";
                glassCannon.style.zIndex = "4";
            }
            // get the ai resume id
            const aiResume = document.getElementById("AI Resume");
            if (aiResume !== null) {
                // move it down 3 spaces
                aiResume.style.transform = `translate(${-imageOffset * 3}px, ${
                    imageOffset * 3
                }px)`;
                aiResume.style.filter = "grayscale(100%)  brightness(0.4)";
                aiResume.style.zIndex = "1";
            }
        } else if (numCycles === 3) {
            numCycles--;
            // get the codon id
            const codon = document.getElementById("Codon");
            if (codon !== null) {
                // move it up and to the right by 2 spaces
                codon.style.transform = `translate(${imageOffset * 2}px, ${
                    -imageOffset * 2
                }px)`;
                codon.style.filter = "grayscale(100%)  brightness(0.4)";
                codon.style.zIndex = "3";
            }
            // get the typo id
            const typo = document.getElementById("Typo");
            if (typo !== null) {
                // move it up and to the right 2 spaces
                typo.style.transform = `translate(${imageOffset * 2}px, ${
                    -imageOffset * 2
                }px)`;
                typo.style.filter = "blur(0px)";
                typo.style.zIndex = "4";
            }
            // get the glass cannon id
            const glassCannon = document.getElementById("Glass Cannon");
            if (glassCannon !== null) {
                // move it to the bottom
                glassCannon.style.transform = `translate(${
                    -imageOffset * 2
                }px, ${imageOffset * 2}px)`;
                // unblur it
                glassCannon.style.filter = "grayscale(100%)  brightness(0.4)";
                glassCannon.style.zIndex = "1";
            }
            // get the ai resume id
            const aiResume = document.getElementById("AI Resume");
            if (aiResume !== null) {
                // move it down 2 spaces
                aiResume.style.transform = `translate(${-imageOffset * 2}px, ${
                    imageOffset * 2
                }px)`;
                aiResume.style.filter = "grayscale(100%)  brightness(0.4)";
                aiResume.style.zIndex = "2";
            }
        }
    };

    const cycleRight = () => {
        // reorder the images based on the numCycles
        if (numCycles === 0) {
            numCycles++;
            // get the codon id
            const codon = document.getElementById("Codon");
            if (codon !== null) {
                // move it up and to the right
                codon.style.transform = `translate(${imageOffset}px, ${-imageOffset}px)`;
                codon.style.filter = "grayscale(100%)  brightness(0.4)";
                codon.style.zIndex = "2";
            }
            // get the typo id
            const typo = document.getElementById("Typo");
            if (typo !== null) {
                // move it up and to the right
                typo.style.transform = `translate(${imageOffset}px, ${-imageOffset}px)`;
                typo.style.filter = "grayscale(100%)  brightness(0.4)";
                typo.style.zIndex = "3";
            }
            // get the glass cannon id
            const glassCannon = document.getElementById("Glass Cannon");
            if (glassCannon !== null) {
                // move it up and to the right
                glassCannon.style.transform = `translate(${imageOffset}px, ${-imageOffset}px)`;
                // unblur it
                glassCannon.style.filter = "blur(0px)";
                glassCannon.style.zIndex = "4";
            }
            // get the ai resume id
            const aiResume = document.getElementById("AI Resume");
            if (aiResume !== null) {
                // move it down 3 spaces
                aiResume.style.transform = `translate(${-imageOffset * 3}px, ${
                    imageOffset * 3
                }px)`;
                aiResume.style.filter = "grayscale(100%)  brightness(0.4)";
                aiResume.style.zIndex = "1";
            }
        } else if (numCycles === 1) {
            numCycles++;
            // get the codon id
            const codon = document.getElementById("Codon");
            if (codon !== null) {
                // move it up and to the right by 2 spaces
                codon.style.transform = `translate(${imageOffset * 2}px, ${
                    -imageOffset * 2
                }px)`;
                codon.style.filter = "grayscale(100%)  brightness(0.4)";
                codon.style.zIndex = "3";
            }
            // get the typo id
            const typo = document.getElementById("Typo");
            if (typo !== null) {
                // move it up and to the right 2 spaces
                typo.style.transform = `translate(${imageOffset * 2}px, ${
                    -imageOffset * 2
                }px)`;
                typo.style.filter = "blur(0px)";
                typo.style.zIndex = "4";
            }
            // get the glass cannon id
            const glassCannon = document.getElementById("Glass Cannon");
            if (glassCannon !== null) {
                // move it to the bottom
                glassCannon.style.transform = `translate(${
                    -imageOffset * 2
                }px, ${imageOffset * 2}px)`;
                // unblur it
                glassCannon.style.filter = "grayscale(100%)  brightness(0.4)";
                glassCannon.style.zIndex = "1";
            }
            // get the ai resume id
            const aiResume = document.getElementById("AI Resume");
            if (aiResume !== null) {
                // move it down 2 spaces
                aiResume.style.transform = `translate(${-imageOffset * 2}px, ${
                    imageOffset * 2
                }px)`;
                aiResume.style.filter = "grayscale(100%)  brightness(0.4)";
                aiResume.style.zIndex = "2";
            }
        } else if (numCycles === 2) {
            numCycles++;
            // get the codon id
            const codon = document.getElementById("Codon");
            if (codon !== null) {
                // move it up and to the right by 3 spaces
                codon.style.transform = `translate(${imageOffset * 3}px, ${
                    -imageOffset * 3
                }px)`;
                codon.style.filter = "blur(0px)";
                codon.style.zIndex = "4";
            }
            // get the typo id
            const typo = document.getElementById("Typo");
            if (typo !== null) {
                // move it down 1 space
                typo.style.transform = `translate(${-imageOffset}px, ${imageOffset}px)`;
                typo.style.filter = "grayscale(100%)  brightness(0.4)";
                typo.style.zIndex = "1";
            }
            // get the glass cannon id
            const glassCannon = document.getElementById("Glass Cannon");
            if (glassCannon !== null) {
                // move it down 1 space
                glassCannon.style.transform = `translate(${-imageOffset}px, ${imageOffset}px)`;
                glassCannon.style.filter = "grayscale(100%)  brightness(0.4)";
                glassCannon.style.zIndex = "2";
            }
            // get the ai resume id
            const aiResume = document.getElementById("AI Resume");
            if (aiResume !== null) {
                // move it down 1 spaces
                aiResume.style.transform = `translate(${-imageOffset}px, ${imageOffset}px)`;
                aiResume.style.filter = "grayscale(100%)  brightness(0.4)";
                aiResume.style.zIndex = "3";
            }
        } else if (numCycles === 3) {
            numCycles = 0;
            // get the codon id
            const codon = document.getElementById("Codon");
            if (codon !== null) {
                // put it where it was
                codon.style.transform = `translate(${0}px, ${0}px)`;
                codon.style.filter = "grayscale(100%)  brightness(0.4)";
                codon.style.zIndex = "1";
            }
            // get the typo id
            const typo = document.getElementById("Typo");
            if (typo !== null) {
                // move it down 1 space
                typo.style.transform = `translate(${0}px, ${0}px)`;
                typo.style.filter = "grayscale(100%)  brightness(0.4)";
                typo.style.zIndex = "2";
            }
            // get the glass cannon id
            const glassCannon = document.getElementById("Glass Cannon");
            if (glassCannon !== null) {
                // move it down 1 space
                glassCannon.style.transform = `translate(${0}px, ${0}px)`;
                glassCannon.style.filter = "grayscale(100%)  brightness(0.4)";
                glassCannon.style.zIndex = "3";
            }
            // get the ai resume id
            const aiResume = document.getElementById("AI Resume");
            if (aiResume !== null) {
                // move it down 1 spaces
                aiResume.style.transform = `translate(${0}px, ${0}px)`;
                aiResume.style.filter = "blur(0px)";
                aiResume.style.zIndex = "4";
            }
        }
    };

    const scrollToSection = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        const { target } = event;
        if (target) {
            const eventId = (target as HTMLDivElement).id;
            if (eventId === "CodonScroll") {
                const element = document.getElementById("codon");
                if (element !== null) {
                    document.body.scrollTo({
                        top: element.getBoundingClientRect().top - 100,
                        behavior: "smooth",
                    });
                }
            } else if (eventId === "AIResumeScroll") {
                const element = document.getElementById("airesume");
                if (element !== null) {
                    document.body.scrollTo({
                        top: element.getBoundingClientRect().top - 100,
                        behavior: "smooth",
                    });
                }
            }
        }
    };

    return (
        <div id="carousel" className={styles.imageSectionContainer}>
            <div className={styles.arrowContainer}>
                <div className={styles.imageTitle}></div>
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
                <div
                    id="Codon"
                    ref={codonRef}
                    className={`${styles.image}`}
                    style={{
                        top: imageOffset * 3 + "px",
                        right: imageOffset * 3 + "px",
                        filter: "grayscale(100%)  brightness(0.4)",
                    }}
                    onClick={(event) => scrollToSection(event)}
                >
                    <Image
                        className={styles.imageChild}
                        id="CodonScroll"
                        src="/images/codon-tile.png"
                        alt="Codon Image"
                        height={441}
                        width={650}
                        priority={true}
                        unoptimized={true}
                    />
                </div>
                <div
                    id="Typo"
                    ref={typoRef}
                    className={styles.image}
                    style={{
                        top: imageOffset * 2 + "px",
                        right: imageOffset * 2 + "px",
                        filter: "grayscale(100%)  brightness(0.4)",
                    }}
                >
                    <Image
                        className={styles.imageChild}
                        id="TypoScroll"
                        src="/images/typo-tile.png"
                        alt="Typo Image"
                        height={441}
                        width={650}
                        priority={true}
                        unoptimized={true}
                    />
                </div>
                <div
                    id="Glass Cannon"
                    ref={glassCannonRef}
                    className={styles.image}
                    style={{
                        top: imageOffset + "px",
                        right: imageOffset + "px",
                        filter: "grayscale(100%)  brightness(0.4)",
                    }}
                >
                    <Image
                        className={styles.imageChild}
                        id="GlassCannonScroll"
                        src="/images/glass-cannon-tile.png"
                        alt="Glass Cannon Image"
                        height={441}
                        width={650}
                        priority={true}
                        unoptimized={true}
                    />
                </div>
                <div
                    id="AI Resume"
                    ref={resumeRef}
                    className={styles.image}
                    style={{
                        top: "0px",
                        right: "0px",
                    }}
                >
                    <Image
                        className={styles.imageChild}
                        id="AIResumeScroll"
                        src="/images/ai-resume-tile.png"
                        alt="AI Resume Image"
                        height={441}
                        width={650}
                        priority={true}
                        unoptimized={true}
                        onClick={(event) => scrollToSection(event)}
                    />
                </div>
            </div>
        </div>
    );
};

export default ImageCycle;
