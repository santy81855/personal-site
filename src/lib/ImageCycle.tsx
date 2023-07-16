import React, { useRef, useState } from "react";
import Image from "next/image";
import styles from "@/styles/Showcase.module.css";

const ImageCycle = () => {
    const codonRef = useRef<HTMLDivElement>(null);
    const resumeRef = useRef<HTMLDivElement>(null);
    const typoRef = useRef<HTMLDivElement>(null);
    const glassCannonRef = useRef<HTMLDivElement>(null);
    const imageOffset = 40;
    var numCycles = 0;
    const [imageTitles, setImageTitles] = useState([
        "Codon",
        "Typo",
        "Glass Cannon",
        "AI Resume",
    ]);

    const cycleLeft = () => {
        // reorder the images based on the numCycles
        if (numCycles === 0) {
            numCycles++;
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
                typo.style.filter = "blur(1px)";
                typo.style.zIndex = "1";
            }
            // get the glass cannon id
            const glassCannon = document.getElementById("Glass Cannon");
            if (glassCannon !== null) {
                // move it down 1 space
                glassCannon.style.transform = `translate(${-imageOffset}px, ${imageOffset}px)`;
                // unblur it
                glassCannon.style.filter = "blur(1px)";
                glassCannon.style.zIndex = "2";
            }
            // get the ai resume id
            const aiResume = document.getElementById("AI Resume");
            if (aiResume !== null) {
                // move it down 1 space
                aiResume.style.transform = `translate(${-imageOffset}px, ${imageOffset}px)`;
                aiResume.style.filter = "blur(1px)";
                aiResume.style.zIndex = "3";
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
                codon.style.filter = "blur(1px)";
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
                glassCannon.style.filter = "blur(1px)";
                glassCannon.style.zIndex = "1";
            }
            // get the ai resume id
            const aiResume = document.getElementById("AI Resume");
            if (aiResume !== null) {
                // move it down 2 spaces
                aiResume.style.transform = `translate(${-imageOffset * 2}px, ${
                    imageOffset * 2
                }px)`;
                aiResume.style.filter = "blur(1px)";
                aiResume.style.zIndex = "2";
            }
        } else if (numCycles === 2) {
            numCycles++;
            // get the codon id
            const codon = document.getElementById("Codon");
            if (codon !== null) {
                // move it up and to the right by 1 spaces
                codon.style.transform = `translate(${imageOffset}px, ${-imageOffset}px)`;
                codon.style.filter = "blur(1px)";
                codon.style.zIndex = "2";
            }
            // get the typo id
            const typo = document.getElementById("Typo");
            if (typo !== null) {
                // move it up 1 space
                typo.style.transform = `translate(${imageOffset}px, ${-imageOffset}px)`;
                typo.style.filter = "blur(1px)";
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
                aiResume.style.filter = "blur(1px)";
                aiResume.style.zIndex = "1";
            }
        } else if (numCycles === 3) {
            numCycles = 0;
            // get the codon id
            const codon = document.getElementById("Codon");
            if (codon !== null) {
                // put it where it was
                codon.style.transform = `translate(${0}px, ${0}px)`;
                codon.style.filter = "blur(1px)";
                codon.style.zIndex = "1";
            }
            // get the typo id
            const typo = document.getElementById("Typo");
            if (typo !== null) {
                // move it down 1 space
                typo.style.transform = `translate(${0}px, ${0}px)`;
                typo.style.filter = "blur(1px)";
                typo.style.zIndex = "2";
            }
            // get the glass cannon id
            const glassCannon = document.getElementById("Glass Cannon");
            if (glassCannon !== null) {
                // move it down 1 space
                glassCannon.style.transform = `translate(${0}px, ${0}px)`;
                glassCannon.style.filter = "blur(1px)";
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

    const cycleRight = () => {
        // reorder the images based on the numCycles
        if (numCycles === 0) {
            numCycles++;
            // get the codon id
            const codon = document.getElementById("Codon");
            if (codon !== null) {
                // move it up and to the right
                codon.style.transform = `translate(${imageOffset}px, ${-imageOffset}px)`;
                codon.style.filter = "blur(1px)";
                codon.style.zIndex = "2";
            }
            // get the typo id
            const typo = document.getElementById("Typo");
            if (typo !== null) {
                // move it up and to the right
                typo.style.transform = `translate(${imageOffset}px, ${-imageOffset}px)`;
                typo.style.filter = "blur(1px)";
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
                aiResume.style.filter = "blur(1px)";
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
                codon.style.filter = "blur(1px)";
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
                glassCannon.style.filter = "blur(1px)";
                glassCannon.style.zIndex = "1";
            }
            // get the ai resume id
            const aiResume = document.getElementById("AI Resume");
            if (aiResume !== null) {
                // move it down 2 spaces
                aiResume.style.transform = `translate(${-imageOffset * 2}px, ${
                    imageOffset * 2
                }px)`;
                aiResume.style.filter = "blur(1px)";
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
                typo.style.filter = "blur(1px)";
                typo.style.zIndex = "1";
            }
            // get the glass cannon id
            const glassCannon = document.getElementById("Glass Cannon");
            if (glassCannon !== null) {
                // move it down 1 space
                glassCannon.style.transform = `translate(${-imageOffset}px, ${imageOffset}px)`;
                glassCannon.style.filter = "blur(1px)";
                glassCannon.style.zIndex = "2";
            }
            // get the ai resume id
            const aiResume = document.getElementById("AI Resume");
            if (aiResume !== null) {
                // move it down 1 spaces
                aiResume.style.transform = `translate(${-imageOffset}px, ${imageOffset}px)`;
                aiResume.style.filter = "blur(1px)";
                aiResume.style.zIndex = "3";
            }
        } else if (numCycles === 3) {
            numCycles = 0;
            // get the codon id
            const codon = document.getElementById("Codon");
            if (codon !== null) {
                // put it where it was
                codon.style.transform = `translate(${0}px, ${0}px)`;
                codon.style.filter = "blur(1px)";
                codon.style.zIndex = "1";
            }
            // get the typo id
            const typo = document.getElementById("Typo");
            if (typo !== null) {
                // move it down 1 space
                typo.style.transform = `translate(${0}px, ${0}px)`;
                typo.style.filter = "blur(1px)";
                typo.style.zIndex = "2";
            }
            // get the glass cannon id
            const glassCannon = document.getElementById("Glass Cannon");
            if (glassCannon !== null) {
                // move it down 1 space
                glassCannon.style.transform = `translate(${0}px, ${0}px)`;
                glassCannon.style.filter = "blur(1px)";
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
        console.log(target);
        if (target) {
            const eventId = (target as HTMLDivElement).id;
            console.log(eventId);
            if (eventId === "CodonScroll") {
                console.log("here");
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
        <div className={styles.imageSectionContainer}>
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
                        top: "120px",
                        right: "120px",
                    }}
                    onClick={(event) => scrollToSection(event)}
                >
                    <Image
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
                        top: "80px",
                        right: "80px",
                    }}
                >
                    <Image
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
                        top: "40px",
                        right: "40px",
                    }}
                >
                    <Image
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
