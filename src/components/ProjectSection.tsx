import Image from "next/image";
import styles from "@/styles/Showcase.module.css";
import React, { FC } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ProjectSectionProps {
    isFirstProject: boolean;
    isOddProject: boolean;
    hasDemo: boolean;
    sectionId: string;
    textHeader: string;
    textTitle: string;
    description: string;
    techList: string[];
    mainImageURL: string;
    featureList: {
        title: string;
        imageURL: string;
        description: string;
    }[];
    firstButtonLink: string;
    githubLink: string;
}

const ProjectSection: FC<ProjectSectionProps> = ({
    isFirstProject,
    isOddProject,
    hasDemo,
    sectionId,
    textHeader,
    textTitle,
    description,
    techList,
    mainImageURL,
    featureList,
    firstButtonLink,
    githubLink,
}) => {
    return (
        <section
            className={
                isFirstProject === true
                    ? styles.invertSection
                    : styles.normalSection
            }
            style={
                isOddProject === true
                    ? {
                          backgroundColor: "rgb(var(--text-color-rgb))",
                          color: "rgb(var(--background-color-rgb))",
                      }
                    : {
                          backgroundColor: "rgb(var(--background-color-rgb))",
                          color: "rgb(var(--text-color-rgb))",
                      }
            }
        >
            <div
                id={sectionId}
                key={sectionId}
                className={
                    isFirstProject === true
                        ? styles.sectionContainerFirst
                        : styles.sectionContainer
                }
            >
                <p className={styles.textHeader}>{textHeader}</p>
                <h1 className={styles.textTitle}>{textTitle}</h1>
                <p className={styles.description}>{description}</p>
                <div className={styles.technologyDescription}>
                    <div className={styles.technologyContainer}>
                        <div className={styles.technologyList}>
                            {techList.map((item: string, index: number) => (
                                <div key={index} className={styles.item}>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                        <Image
                            className={styles.mainImage}
                            src={mainImageURL}
                            alt="Image"
                            height={441}
                            width={650}
                            priority={true}
                            quality={100}
                            unoptimized={true}
                        />
                    </div>
                </div>
                <div className={styles.featureContainer}>
                    <h1 className={styles.featureTitle}>Features</h1>
                    <div className={styles.featureList}>
                        {featureList.map(
                            (
                                feature: {
                                    title: string;
                                    imageURL: string;
                                    description: string;
                                },
                                index: number
                            ) => (
                                <div key={index} className={styles.feature}>
                                    <h1>{feature.title}</h1>
                                    <Image
                                        src={feature.imageURL}
                                        alt="feature"
                                        className={styles.featureGif}
                                        height={225}
                                        width={400}
                                        priority={true}
                                    />
                                    <p>{feature.description}</p>
                                </div>
                            )
                        )}
                    </div>
                </div>
                <div className={styles.downloadContainer}>
                    <a href={firstButtonLink} className={styles.downloadButton}>
                        {hasDemo === true ? "View Demo" : "Download"}
                    </a>
                    <a href={githubLink}>
                        <p> View on Github</p>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
