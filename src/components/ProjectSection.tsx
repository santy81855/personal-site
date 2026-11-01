import Image from "next/image";
import styles from "@/styles/Showcase.module.css";
import React, { FC, useEffect, useState } from "react";
import { Project } from "@/data/projects";
import { ArrowUpRight, Download, Github } from "./Icons";

interface ProjectSectionProps {
    project: Project;
    index: number;
    total: number;
}

const isAnimated = (url: string) => url.endsWith(".gif");

// the label shown in the fake window chrome around the main image
const frameLabel = (project: Project) => {
    if (project.primaryLink?.external && project.status === "Live") {
        return new URL(project.primaryLink.href).host;
    }
    return project.category === "game" ? `${project.title}.exe` : project.title;
};

const ProjectSection: FC<ProjectSectionProps> = ({ project, index, total }) => {
    const {
        slug,
        kind,
        title,
        description,
        techList,
        mainImageURL,
        mainImages,
        featureList,
        primaryLink,
        githubLink,
        status,
    } = project;

    const slides = mainImages && mainImages.length > 1 ? mainImages : null;
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        if (!slides) return;
        const timer = window.setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => window.clearInterval(timer);
    }, [slides]);

    return (
        <article
            id={slug}
            className={styles.caseStudy}
            style={{ "--project-accent": project.accent } as React.CSSProperties}
            aria-labelledby={`${slug}-title`}
        >
            <div className={styles.caseHeader}>
                <div className={styles.caseTitleBlock} data-reveal>
                    <p className={styles.caseMeta}>
                        <span className={styles.caseIndex}>
                            {String(index + 1).padStart(2, "0")} /{" "}
                            {String(total).padStart(2, "0")}
                        </span>
                        <span className={styles.textHeader}>{kind}</span>
                    </p>
                    <h2 id={`${slug}-title`} className={styles.textTitle}>
                        {title}
                    </h2>
                </div>
                <div className={styles.caseDetails} data-reveal>
                    <p className={styles.description}>{description}</p>
                    <ul className={styles.technologyList} aria-label="Technologies">
                        {techList.map((item) => (
                            <li key={item} className="chip">
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div className={styles.downloadContainer}>
                        {primaryLink && (
                            <a
                                href={primaryLink.href}
                                target={primaryLink.external ? "_blank" : undefined}
                                rel={primaryLink.external ? "noreferrer" : undefined}
                                className={`button ${styles.primaryButton}`}
                            >
                                {primaryLink.label}
                                {primaryLink.external ? <ArrowUpRight /> : <Download />}
                            </a>
                        )}
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noreferrer"
                            className={`button ${primaryLink ? "buttonGhost" : styles.primaryButton}`}
                        >
                            <Github /> Source
                        </a>
                        <span className={styles.statusText} data-status={status}>
                            {status === "Live"
                                ? "Live in production"
                                : status === "Download"
                                ? "Windows download"
                                : status === "Open Source"
                                ? "Source on GitHub"
                                : "Archived"}
                        </span>
                    </div>
                </div>
            </div>

            <figure className={styles.frame} data-reveal>
                <div className={styles.frameBar} aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <p>{frameLabel(project)}</p>
                </div>
                {slides ? (
                    <div className={styles.mainImageStage}>
                        {slides.map((src, slideIndex) => (
                            <Image
                                key={src}
                                className={`${styles.mainSlide} ${
                                    slideIndex === 0
                                        ? styles.mainSlideBase
                                        : styles.mainSlideOverlay
                                } ${
                                    slideIndex === activeSlide
                                        ? styles.mainSlideActive
                                        : ""
                                }`}
                                src={src}
                                alt={`${title} screenshot ${slideIndex + 1}`}
                                width={1600}
                                height={1000}
                                sizes="(max-width: 1200px) 100vw, 1150px"
                                unoptimized={isAnimated(src)}
                            />
                        ))}
                    </div>
                ) : (
                    <Image
                        className={styles.mainImage}
                        src={mainImageURL}
                        alt={`${title} screenshot`}
                        width={1600}
                        height={1000}
                        sizes="(max-width: 1200px) 100vw, 1150px"
                        unoptimized={isAnimated(mainImageURL)}
                    />
                )}
            </figure>

            {featureList.length > 0 && (
                <div className={styles.featureList}>
                    {featureList.map((feature, featureIndex) => (
                        <div
                            key={feature.title}
                            className={styles.feature}
                            data-reveal
                            style={
                                {
                                    "--reveal-delay": `${featureIndex * 100}ms`,
                                } as React.CSSProperties
                            }
                        >
                            <div className={styles.featureMedia}>
                                <Image
                                    src={feature.imageURL}
                                    alt={feature.title}
                                    className={styles.featureGif}
                                    width={800}
                                    height={450}
                                    sizes="(max-width: 860px) 100vw, 560px"
                                    unoptimized={isAnimated(feature.imageURL)}
                                />
                            </div>
                            <div className={styles.featureText}>
                                <h3>
                                    <span>{String(featureIndex + 1).padStart(2, "0")}</span>
                                    {feature.title}
                                </h3>
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </article>
    );
};

export default ProjectSection;
