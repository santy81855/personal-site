import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

const BackgroundImage = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = ["/images/personal-pic-1.png", "/images/personal-pic-4.png"];

    useEffect(() => {
        const element = document.getElementById("backgroundImage");
        if (element) {
            element.style.transform = "rotateY(0)";
        }

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 7000); // 7 seconds

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            {images.map((imageSrc, index) => (
                <Image
                    id="backgroundImage"
                    key={index}
                    className={`${styles.image} ${
                        currentImageIndex === index ? styles.imageVisible : ""
                    }`}
                    src={imageSrc}
                    alt={`Image ${index + 1}`}
                    width={2730}
                    height={3929}
                    priority={index === currentImageIndex}
                />
            ))}
        </>
    );
};

export default BackgroundImage;
