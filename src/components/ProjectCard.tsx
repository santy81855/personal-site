import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import styles from "@/styles/ProjectCard.module.css";
import { Project } from "@/data/projects";
import { ArrowUpRight } from "./Icons";

interface ProjectCardProps {
    project: Project;
    index: number;
    size?: "large" | "normal";
    href?: string;
    onSelect?: () => void;
    sizes?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    project,
    index,
    size = "normal",
    href,
    onSelect,
    sizes = "(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 400px",
}) => {
    const cardRef = useRef<HTMLDivElement>(null);

    // tilt the card toward the cursor and move the spotlight with it
    const handlePointerMove = (event: React.PointerEvent) => {
        if (event.pointerType !== "mouse" || !cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        cardRef.current.style.setProperty("--mx", `${x * 100}%`);
        cardRef.current.style.setProperty("--my", `${y * 100}%`);
        cardRef.current.style.setProperty("--ry", `${(x - 0.5) * 6}deg`);
        cardRef.current.style.setProperty("--rx", `${(0.5 - y) * 6}deg`);
    };

    const handlePointerLeave = () => {
        cardRef.current?.style.setProperty("--rx", "0deg");
        cardRef.current?.style.setProperty("--ry", "0deg");
    };

    const content = (
        <>
            <div className={styles.media}>
                <Image
                    src={project.tileURL}
                    alt={`${project.title} preview`}
                    fill
                    sizes={sizes}
                    className={styles.image}
                />
                <span className={styles.status} data-status={project.status}>
                    {project.status}
                </span>
            </div>
            <div className={styles.body}>
                <div className={styles.titleRow}>
                    <span className={styles.index}>
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className={styles.title}>{project.title}</h3>
                    <span className={styles.arrow}>
                        <ArrowUpRight size={18} />
                    </span>
                </div>
                <p className={styles.kind}>{project.kind}</p>
                <p className={styles.summary}>{project.summary}</p>
                <div className={styles.tech}>
                    {project.techList.slice(0, size === "large" ? 5 : 3).map((tech) => (
                        <span key={tech} className="chip">
                            {tech}
                        </span>
                    ))}
                    {project.techList.length > (size === "large" ? 5 : 3) && (
                        <span className="chip">
                            +{project.techList.length - (size === "large" ? 5 : 3)}
                        </span>
                    )}
                </div>
            </div>
        </>
    );

    return (
        <div
            ref={cardRef}
            className={`${styles.card} ${size === "large" ? styles.large : ""}`}
            style={{ "--card-accent": project.accent } as React.CSSProperties}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
        >
            {href ? (
                <Link href={href} className={styles.inner} onClick={onSelect}>
                    {content}
                </Link>
            ) : (
                <button className={styles.inner} onClick={onSelect}>
                    {content}
                </button>
            )}
        </div>
    );
};

export default ProjectCard;
