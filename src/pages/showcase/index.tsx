import Head from "next/head";
import { useRouter } from "next/router";
import styles from "@/styles/Showcase.module.css";
import React, { useEffect, useMemo, useState } from "react";
import ProjectSection from "@/components/ProjectSection";
import ProjectCard from "@/components/ProjectCard";
import ImageCycle from "@/components/ImageCycle";
import {
    categoryLabels,
    Project,
    ProjectCategory,
    projects,
} from "@/data/projects";

type Filter = "all" | ProjectCategory;

const filters: Filter[] = ["all", ...(Object.keys(categoryLabels) as ProjectCategory[])];

const scrollToProject = (slug: string) => {
    document.getElementById(slug)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Showcase() {
    const router = useRouter();
    const queryCategory = router.query.category as string | undefined;
    const filter: Filter = filters.includes(queryCategory as Filter)
        ? (queryCategory as Filter)
        : "all";
    const [activeSlug, setActiveSlug] = useState<string>(projects[0].slug);

    const visibleProjects = useMemo(
        () =>
            filter === "all"
                ? projects
                : projects.filter((project) => project.category === filter),
        [filter]
    );

    const setFilter = (next: Filter) => {
        router.replace(
            { pathname: "/showcase", query: next === "all" ? {} : { category: next } },
            undefined,
            { shallow: true, scroll: false }
        );
    };

    // after client-side navigation to /showcase#slug, scroll once the section exists
    useEffect(() => {
        const scrollToHash = () => {
            const hash = window.location.hash.slice(1);
            if (hash) requestAnimationFrame(() => scrollToProject(hash));
        };
        scrollToHash();
        router.events.on("hashChangeComplete", scrollToHash);
        return () => router.events.off("hashChangeComplete", scrollToHash);
    }, [router.events]);

    // highlight the project currently in view in the side index
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSlug(entry.target.id);
                });
            },
            { rootMargin: "-45% 0px -50% 0px" }
        );
        visibleProjects.forEach((project) => {
            const element = document.getElementById(project.slug);
            if (element) observer.observe(element);
        });
        return () => observer.disconnect();
    }, [visibleProjects]);

    const openProject = (project: Project) => scrollToProject(project.slug);

    return (
        <>
            <Head>
                <title>Showcase — Santiago Garcia</title>
                <meta
                    name="description"
                    content="Case studies of web apps, websites, desktop tools and games built by Santiago Garcia."
                />
            </Head>

            <section className={`container ${styles.pageHeader}`}>
                <div className={`grain ${styles.headerGrain}`} />
                <div className={styles.titleContainer}>
                    <p className="eyebrow">My projects</p>
                    <h1 className={styles.pageTitle}>
                        A showcase of things I&apos;ve <em>designed</em>,{" "}
                        <em>built</em> &amp; <em>shipped</em>.
                    </h1>
                    <p className={styles.pageIntro}>
                        {projects.length} projects spanning AI-powered SaaS, client
                        websites, desktop software and a 3D game. Flip through the
                        deck, filter by type, or dive into each case study.
                    </p>
                </div>
            </section>

            <section className={`container ${styles.deckSection}`}>
                <ImageCycle projects={visibleProjects} onOpen={openProject} />
            </section>

            <div className={styles.filterBar}>
                <div className={`container ${styles.filterInner}`}>
                    <div className={styles.filters} role="tablist" aria-label="Filter projects">
                        {filters.map((option) => {
                            const count =
                                option === "all"
                                    ? projects.length
                                    : projects.filter((p) => p.category === option).length;
                            return (
                                <button
                                    key={option}
                                    role="tab"
                                    aria-selected={filter === option}
                                    className={`${styles.filterButton} ${
                                        filter === option ? styles.filterActive : ""
                                    }`}
                                    onClick={() => setFilter(option)}
                                >
                                    {option === "all" ? "All" : categoryLabels[option]}
                                    <span>{count}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            <section className={`container ${styles.gridSection}`} aria-label="Project index">
                <div className={styles.projectGrid}>
                    {visibleProjects.map((project, index) => (
                        <div
                            key={project.slug}
                            data-reveal
                            style={{ "--reveal-delay": `${(index % 3) * 80}ms` } as React.CSSProperties}
                        >
                            <ProjectCard
                                project={project}
                                index={projects.indexOf(project)}
                                href={`#${project.slug}`}
                            />
                        </div>
                    ))}
                </div>
            </section>

            <div className={`container ${styles.caseStudies}`}>
                <nav className={styles.sideIndex} aria-label="Jump to project">
                    <ol>
                        {visibleProjects.map((project) => (
                            <li key={project.slug}>
                                <a
                                    href={`#${project.slug}`}
                                    className={
                                        activeSlug === project.slug ? styles.sideActive : ""
                                    }
                                    style={{ "--project-accent": project.accent } as React.CSSProperties}
                                >
                                    <span>
                                        {String(projects.indexOf(project) + 1).padStart(2, "0")}
                                    </span>
                                    {project.title}
                                </a>
                            </li>
                        ))}
                    </ol>
                </nav>
                <div className={styles.caseList}>
                    {visibleProjects.map((project) => (
                        <ProjectSection
                            key={project.slug}
                            project={project}
                            index={projects.indexOf(project)}
                            total={projects.length}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
