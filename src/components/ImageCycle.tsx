import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/Showcase.module.css";

const ImageCycle = () => {
    const [imageOffset, setImageOffset] = useState(10);
    const [imageAngle, setImageAngle] = useState(-2);
    var state = 0;
    // keep the titles in sync with the images
    const imageTitles = ["AI Resume", "Codon", "Glass Cannon", "Typo"];
    // add new images to the bottom of the list
    const imageUrls = [
        "/images/ai-resume-tile.png",
        "/images/codon-tile.png",
        "/images/glass-cannon-tile.png",
        "/images/typo-tile.png",
    ];

    useEffect(() => {
        if (window.innerWidth < 426) {
            setImageOffset(5);
            setImageAngle(-1);
        } else if (window.innerWidth < 585) {
            setImageOffset(10);
            setImageAngle(-2);
        } else if (window.innerWidth < 700) {
            setImageOffset(10);
            setImageAngle(-2);
        }
        function handleResize() {
            if (window.innerWidth < 426) {
                setImageOffset(5);
                setImageAngle(-1);
            } else if (window.innerWidth < 585) {
                setImageOffset(10);
                setImageAngle(-2);
            } else if (window.innerWidth < 700) {
                setImageOffset(10);
                setImageAngle(-2);
            }
        }
        window.addEventListener("resize", handleResize);
        // Clean up event listener when component is unmounted
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const showTitle = (index: number) => {
        const element = document.getElementById("title");
        if (element) {
            element.textContent = imageTitles[index];
        }
    };

    const moveImage = (element: HTMLElement | null, a: number, b: number) => {
        const len = imageUrls.length;
        // if the index is negative then go from the end of the array
        if (b < 0) {
            b = len + b;
        }
        // if the index is too high then go from the beginning of the array
        if (b > len - 1) {
            b = b - len;
        }
        // if the element is about to take the first position
        if (element === null) {
            return;
        }
        // give it the proper z-index
        element.style.zIndex = `${len - b}`;
        // if the element is being moved back to its original position
        if (a === b) {
            element.style.transform = `rotate(${
                imageAngle * b
            }deg) translate(${0}px, ${0}px)`;
        }
        // if the element is moving to the right, e.g. (position 3 to 1)
        else if (a > b) {
            const distance = a - b;
            element.style.transform = `rotate(${imageAngle * b}deg) translate(${
                imageOffset * distance
            }px, ${-imageOffset * distance}px)`;
        }
        // if the element is moving to the left, e.g. (position 1 to 3)
        else if (a < b) {
            const distance = b - a;
            element.style.transform = `rotate(${imageAngle * b}deg) translate(${
                -imageOffset * distance
            }px, ${imageOffset * distance}px)`;
        }
        // give it the proper filter
        element.style.filter =
            b === 0 ? "blur(0px)" : "grayscale(100%)  brightness(0.4)";
    };

    const cycleImages = (direction: string) => {
        // get the elements
        var images: any[] = [];
        for (let i = 0; i < imageUrls.length; i++) {
            images.push(document.getElementById(`image${i + 1}`));
        }
        // move the images based on the direction
        if (direction === "left") {
            if (state === 0) {
                state = imageUrls.length - 1;
            } else {
                state--;
            }
        } else if (direction === "right") {
            if (state === imageUrls.length - 1) {
                state = 0;
            } else {
                state++;
            }
        }
        // update the images in the order starting from the one about to be in the front
        if (state === 0) {
            moveImage(images[images.length - 1], images.length - 1, -1);
            for (let i = state; i < imageUrls.length - 1; i++) {
                moveImage(images[i], i, i - state);
            }
        } else {
            for (let i = state - 1; i < imageUrls.length; i++) {
                moveImage(images[i], i, i - state);
            }
            for (let i = 0; i < state - 1; i++) {
                moveImage(images[i], i, i - state);
            }
        }
        showTitle(state);
    };

    const scrollToSection = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        const { target } = event;
        if (target) {
            const eventId = (target as HTMLDivElement).id;
            const element = document.getElementById(`${eventId}scroll`);
            if (element !== null) {
                document.body.scrollTo({
                    top: element.getBoundingClientRect().top - 100,
                    behavior: "smooth",
                });
            }
        }
    };

    return (
        <div id="carousel" className={styles.imageSectionContainer}>
            <div className={styles.arrowContainer}>
                <p id="title">{imageTitles[0]}</p>
                <div
                    className={styles.leftArrow}
                    onClick={() => cycleImages("left")}
                ></div>
                <div className={styles.circle}></div>
                <div
                    className={styles.rightArrow}
                    onClick={() => cycleImages("right")}
                ></div>
            </div>
            <div className={styles.imagesContainer}>
                {imageUrls.map((url: string, index: number) => {
                    const isFirst = index === 0;
                    return (
                        <div
                            key={index}
                            id={`image${index + 1}`}
                            className={styles.image}
                            style={{
                                top: imageOffset * index + "px",
                                right: imageOffset * index + "px",
                                filter: isFirst
                                    ? "none"
                                    : "grayscale(100%) brightness(0.4)",
                                transform: isFirst
                                    ? "none"
                                    : `rotate(${imageAngle * index}deg)`,
                                zIndex: `${imageUrls.length - index}`,
                            }}
                            onClick={(event) => scrollToSection(event)}
                        >
                            <Image
                                className={styles.imageChild}
                                id={`project${index + 1}`}
                                src={url}
                                alt="Project Image"
                                height={441}
                                width={650}
                                priority={true}
                                unoptimized={true}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ImageCycle;
