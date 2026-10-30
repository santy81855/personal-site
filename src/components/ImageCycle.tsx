import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "@/styles/ImageCycle.module.css";
import { Project } from "@/data/projects";
import { ArrowLeft, ArrowRight } from "./Icons";

interface ImageCycleProps {
    projects: Project[];
    onOpen: (project: Project) => void;
}

// a stacked deck of project screenshots, cycled with arrows, keys or a swipe
const ImageCycle: React.FC<ImageCycleProps> = ({ projects, onOpen }) => {
    const [active, setActive] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const dragStart = useRef<number | null>(null);
    const count = projects.length;

    // start over when the list of projects changes (e.g. a filter is applied)
    useEffect(() => setActive(0), [projects]);

    useEffect(() => {
        if (isPaused || count < 2) return;
        const interval = setInterval(() => {
            setActive((index) => (index + 1) % count);
        }, 6000);
        return () => clearInterval(interval);
    }, [isPaused, count]);

    const cycle = (direction: 1 | -1) =>
        setActive((index) => (index + direction + count) % count);

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "ArrowRight") cycle(1);
        if (event.key === "ArrowLeft") cycle(-1);
    };

    const handlePointerUp = (event: React.PointerEvent) => {
        if (dragStart.current === null) return;
        const distance = event.clientX - dragStart.current;
        dragStart.current = null;
        if (Math.abs(distance) > 40) cycle(distance < 0 ? 1 : -1);
    };

    if (count === 0) return null;
    const current = projects[Math.min(active, count - 1)];

    return (
        <div
            className={styles.deckWrap}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
        >
            <div
                className={styles.deck}
                role="region"
                aria-roledescription="carousel"
                aria-label="Project screenshots"
                tabIndex={0}
                onKeyDown={handleKeyDown}
                onPointerDown={(event) => (dragStart.current = event.clientX)}
                onPointerUp={handlePointerUp}
                onPointerCancel={() => (dragStart.current = null)}
            >
                {projects.map((project, index) => {
                    // position of this card relative to the front of the deck
                    const offset = (index - active + count) % count;
                    const isFront = offset === 0;
                    const visible = offset < 4;
                    return (
                        <button
                            key={project.slug}
                            className={styles.card}
                            style={{
                                transform: `translate3d(calc(var(--deck-step) * ${offset}), calc(var(--deck-step) * ${-offset}), 0) rotate(${
                                    offset * -2
                                }deg) scale(${1 - offset * 0.04})`,
                                zIndex: count - offset,
                                opacity: visible ? 1 : 0,
                                filter: isFront
                                    ? "none"
                                    : `grayscale(100%) brightness(${0.75 - offset * 0.1})`,
                                pointerEvents: isFront ? "auto" : "none",
                            }}
                            tabIndex={isFront ? 0 : -1}
                            aria-hidden={!isFront}
                            aria-label={`Open ${project.title}`}
                            onClick={() => onOpen(project)}
                        >
                            <Image
                                src={project.tileURL}
                                alt=""
                                fill
                                sizes="(max-width: 800px) 90vw, 720px"
                                priority={index < 2}
                                className={styles.cardImage}
                            />
                            <span className={styles.cardHint}>
                                View case study <ArrowRight size={14} />
                            </span>
                        </button>
                    );
                })}
            </div>

            <div className={styles.controls}>
                <div className={styles.meta} aria-live="polite">
                    <span className={styles.counter}>
                        {String(active + 1).padStart(2, "0")}
                        <span> / {String(count).padStart(2, "0")}</span>
                    </span>
                    <p key={current.slug} className={styles.currentTitle}>
                        {current.title}
                    </p>
                    <p key={`${current.slug}-kind`} className={styles.currentKind}>
                        {current.kind}
                    </p>
                </div>
                <div className={styles.buttons}>
                    <button
                        className={styles.arrow}
                        onClick={() => cycle(-1)}
                        aria-label="Previous project"
                    >
                        <ArrowLeft size={18} />
                    </button>
                    <button
                        className={styles.arrow}
                        onClick={() => cycle(1)}
                        aria-label="Next project"
                    >
                        <ArrowRight size={18} />
                    </button>
                </div>
                <div className={styles.dots}>
                    {projects.map((project, index) => (
                        <button
                            key={project.slug}
                            className={`${styles.dot} ${
                                index === active ? styles.dotActive : ""
                            }`}
                            onClick={() => setActive(index)}
                            aria-label={`Show ${project.title}`}
                        >
                            {index === active && !isPaused && count > 1 && (
                                <span className={styles.dotProgress} />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageCycle;
