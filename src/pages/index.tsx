import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import styles from "@/styles/Home.module.css";
import ProjectCard from "@/components/ProjectCard";
import {
    allTechnologies,
    categoryLabels,
    contactEmail,
    ProjectCategory,
    projects,
} from "@/data/projects";
import { ArrowRight, ArrowUpRight } from "@/components/Icons";

// letters wrapped in <span> get the accent color, as in the original logo-type
const renderName = (word: string, accentIndexes: number[], offset: number) =>
    word.split("").map((letter, index) => (
        <span
            key={index}
            className={`${styles.letter} ${
                accentIndexes.includes(index) ? styles.accentLetter : ""
            }`}
            style={{ animationDelay: `${(offset + index) * 45 + 150}ms` }}
        >
            {letter}
        </span>
    ));

const categoryBlurbs: Record<ProjectCategory, string> = {
    "web-app": "Full-stack products with auth, payments, databases and AI.",
    website: "Fast, polished sites for businesses and creators.",
    desktop: "Native-feeling desktop tools built with Python and Qt.",
    game: "Real-time 3D gameplay built in Unity.",
};

export default function Home() {
    const heroRef = useRef<HTMLElement>(null);
    const featured = projects.filter((project) => project.featured);
    const liveCount = projects.filter((project) => project.status === "Live").length;
    const categories = Object.keys(categoryLabels) as ProjectCategory[];
    const half = Math.ceil(allTechnologies.length / 2);

    // subtle parallax on the portrait and gradient following the cursor
    useEffect(() => {
        const hero = heroRef.current;
        if (!hero || window.matchMedia("(pointer: coarse)").matches) return;
        let frame = 0;
        const handleMove = (event: PointerEvent) => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                const x = event.clientX / window.innerWidth - 0.5;
                const y = event.clientY / window.innerHeight - 0.5;
                hero.style.setProperty("--px", x.toFixed(3));
                hero.style.setProperty("--py", y.toFixed(3));
            });
        };
        window.addEventListener("pointermove", handleMove);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("pointermove", handleMove);
        };
    }, []);

    return (
        <>
            <Head>
                <title>Santiago Garcia — Full-stack Developer</title>
                <meta
                    name="description"
                    content="Santiago Garcia is a full-stack developer building AI web apps, business websites, desktop tools and games."
                />
            </Head>

            <section ref={heroRef} className={styles.hero}>
                <div className={`container ${styles.heroGrid}`}>
                    <div className={styles.heroText}>
                        <p className={`eyebrow ${styles.fadeUp}`}>
                            Full-stack developer
                        </p>
                        <h1 className={styles.title} aria-label="Santiago Garcia">
                            <span className={styles.titleLine} aria-hidden="true">
                                {renderName("Santiago", [1, 4], 0)}
                            </span>
                            <span className={styles.titleLine} aria-hidden="true">
                                {renderName("Garcia", [1, 4], 8)}
                            </span>
                        </h1>
                        <p className={`${styles.intro} ${styles.fadeUp}`}>
                            I design and build software end to end — AI-powered web
                            apps, websites for real businesses, desktop tools and
                            games. Most recently I shipped{" "}
                            <Link href="/showcase#slipstream">Slipstream</Link>{" "}
                            and{" "}
                            <Link href="/showcase#nmg-remodeling">NM&amp;G Remodeling</Link>.
                        </p>
                        <div className={`${styles.actions} ${styles.fadeUp}`}>
                            <Link href="/showcase" className="button buttonPrimary">
                                View my work <ArrowRight />
                            </Link>
                            <a href={`mailto:${contactEmail}`} className="button buttonGhost">
                                Get in touch
                            </a>
                        </div>
                        <dl className={`${styles.stats} ${styles.fadeUp}`}>
                            <div>
                                <dt>Projects shipped</dt>
                                <dd>{projects.length}</dd>
                            </div>
                            <div>
                                <dt>Live in production</dt>
                                <dd>{liveCount}</dd>
                            </div>
                            <div>
                                <dt>Technologies used</dt>
                                <dd>{allTechnologies.length}+</dd>
                            </div>
                        </dl>
                    </div>

                    <div className={styles.portraitWrap}>
                        <div className={`grain ${styles.heroGrain}`} />
                        <div className={styles.portrait}>
                            <Image
                                src="/images/personal-pic-6.png"
                                alt="Portrait of Santiago Garcia"
                                fill
                                priority
                                sizes="(max-width: 900px) 80vw, 480px"
                                className={styles.portraitImage}
                            />
                        </div>
                        <span className={`${styles.floatChip} ${styles.chipOne}`}>
                            AI Workflows
                        </span>
                        <span className={`${styles.floatChip} ${styles.chipTwo}`}>
                            Interactive UI
                        </span>
                        <span className={`${styles.floatChip} ${styles.chipThree}`}>
                            Full-stack Development
                        </span>
                    </div>
                </div>
                <a href="#work" className={styles.scrollCue} aria-label="Scroll to selected work">
                    <span />
                </a>
            </section>

            <section className={styles.marquee} aria-label="Technologies I use">
                {[allTechnologies.slice(0, half), allTechnologies.slice(half)].map(
                    (row, rowIndex) => (
                        <div
                            key={rowIndex}
                            className={`${styles.marqueeRow} ${
                                rowIndex === 1 ? styles.reverse : ""
                            }`}
                        >
                            {/* duplicated so the loop is seamless */}
                            {[...row, ...row].map((tech, index) => (
                                <span key={index} aria-hidden={index >= row.length}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )
                )}
            </section>

            <section id="work" className={`container ${styles.section}`}>
                <div className={styles.sectionHeader} data-reveal>
                    <div>
                        <p className="eyebrow">Selected work</p>
                        <h2 className={styles.sectionTitle}>
                            Things I&apos;ve built recently
                        </h2>
                    </div>
                    <Link href="/showcase" className="button buttonGhost">
                        All {projects.length} projects <ArrowRight />
                    </Link>
                </div>
                <div className={styles.bento}>
                    {featured.map((project, index) => (
                        <div
                            key={project.slug}
                            className={index === 0 ? styles.bentoLarge : ""}
                            data-reveal
                            style={{ "--reveal-delay": `${index * 90}ms` } as React.CSSProperties}
                        >
                            <ProjectCard
                                project={project}
                                index={projects.indexOf(project)}
                                size={index === 0 ? "large" : "normal"}
                                href={`/showcase#${project.slug}`}
                                sizes={
                                    index === 0
                                        ? "(max-width: 900px) 100vw, 800px"
                                        : "(max-width: 900px) 100vw, 400px"
                                }
                            />
                        </div>
                    ))}
                </div>
            </section>

            <section className={`container ${styles.section}`}>
                <div className={styles.sectionHeader} data-reveal>
                    <div>
                        <p className="eyebrow">What I build</p>
                        <h2 className={styles.sectionTitle}>
                            From SaaS to small business to side-quests
                        </h2>
                    </div>
                </div>
                <div className={styles.categories}>
                    {categories.map((category, index) => {
                        const inCategory = projects.filter(
                            (project) => project.category === category
                        );
                        return (
                            <Link
                                key={category}
                                href={`/showcase?category=${category}`}
                                className={styles.category}
                                data-reveal
                                style={{ "--reveal-delay": `${index * 80}ms` } as React.CSSProperties}
                            >
                                <div className={styles.categoryTop}>
                                    <span className={styles.categoryCount}>
                                        {String(inCategory.length).padStart(2, "0")}
                                    </span>
                                    <ArrowUpRight size={20} />
                                </div>
                                <h3>{categoryLabels[category]}</h3>
                                <p>{categoryBlurbs[category]}</p>
                                <ul>
                                    {inCategory.map((project) => (
                                        <li key={project.slug}>{project.title}</li>
                                    ))}
                                </ul>
                            </Link>
                        );
                    })}
                </div>
            </section>
        </>
    );
}
