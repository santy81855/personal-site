import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/CommandPalette.module.css";
import { contactEmail, githubProfile, projects } from "@/data/projects";
import { toggleTheme } from "./ThemeToggle";
import { ArrowRight, Search } from "./Icons";

interface CommandPaletteProps {
    isOpen: boolean;
    onClose: () => void;
}

interface Command {
    id: string;
    group: string;
    label: string;
    hint?: string;
    run: () => void;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
    const router = useRouter();
    const [query, setQuery] = useState("");
    const [selected, setSelected] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLUListElement>(null);

    const commands: Command[] = useMemo(
        () => [
            { id: "home", group: "Pages", label: "Home", run: () => router.push("/") },
            {
                id: "showcase",
                group: "Pages",
                label: "Showcase",
                run: () => router.push("/showcase"),
            },
            ...projects.map((project) => ({
                id: project.slug,
                group: "Projects",
                label: project.title,
                hint: project.kind,
                run: () => router.push(`/showcase#${project.slug}`),
            })),
            {
                id: "theme",
                group: "Actions",
                label: "Toggle dark / light theme",
                run: () => toggleTheme(),
            },
            {
                id: "email",
                group: "Actions",
                label: "Send me an email",
                hint: contactEmail,
                run: () => (window.location.href = `mailto:${contactEmail}`),
            },
            {
                id: "github",
                group: "Actions",
                label: "Open GitHub profile",
                run: () => window.open(githubProfile, "_blank", "noreferrer"),
            },
        ],
        [router]
    );

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return commands;
        return commands.filter((command) =>
            `${command.label} ${command.hint ?? ""} ${command.group}`
                .toLowerCase()
                .includes(q)
        );
    }, [commands, query]);

    useEffect(() => {
        if (isOpen) {
            setQuery("");
            setSelected(0);
            // wait for the dialog to become visible before focusing
            requestAnimationFrame(() => inputRef.current?.focus());
        }
    }, [isOpen]);

    useEffect(() => setSelected(0), [query]);

    useEffect(() => {
        listRef.current
            ?.querySelector(`[data-index="${selected}"]`)
            ?.scrollIntoView({ block: "nearest" });
    }, [selected]);

    const runCommand = (command: Command | undefined) => {
        if (!command) return;
        onClose();
        command.run();
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "ArrowDown") {
            event.preventDefault();
            setSelected((index) => Math.min(index + 1, filtered.length - 1));
        } else if (event.key === "ArrowUp") {
            event.preventDefault();
            setSelected((index) => Math.max(index - 1, 0));
        } else if (event.key === "Enter") {
            event.preventDefault();
            runCommand(filtered[selected]);
        } else if (event.key === "Escape") {
            onClose();
        }
    };

    let lastGroup = "";

    return (
        <div
            className={`${styles.overlay} ${isOpen ? styles.open : ""}`}
            onMouseDown={onClose}
            aria-hidden={!isOpen}
        >
            <div
                className={styles.dialog}
                role="dialog"
                aria-modal="true"
                aria-label="Command menu"
                onMouseDown={(event) => event.stopPropagation()}
                onKeyDown={handleKeyDown}
            >
                <div className={styles.searchRow}>
                    <Search size={18} />
                    <input
                        ref={inputRef}
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="Search projects, pages and actions…"
                        aria-label="Search commands"
                        tabIndex={isOpen ? 0 : -1}
                    />
                    <kbd>esc</kbd>
                </div>
                <ul ref={listRef} className={styles.list} role="listbox">
                    {filtered.length === 0 && (
                        <li className={styles.empty}>No results for “{query}”</li>
                    )}
                    {filtered.map((command, index) => {
                        const showGroup = command.group !== lastGroup;
                        lastGroup = command.group;
                        return (
                            <li key={command.id} role="presentation">
                                {showGroup && (
                                    <p className={styles.group}>{command.group}</p>
                                )}
                                <button
                                    data-index={index}
                                    role="option"
                                    aria-selected={index === selected}
                                    tabIndex={-1}
                                    className={`${styles.item} ${
                                        index === selected ? styles.selected : ""
                                    }`}
                                    onMouseMove={() => setSelected(index)}
                                    onClick={() => runCommand(command)}
                                >
                                    <span>{command.label}</span>
                                    {command.hint && (
                                        <span className={styles.hint}>{command.hint}</span>
                                    )}
                                    <ArrowRight size={14} />
                                </button>
                            </li>
                        );
                    })}
                </ul>
                <div className={styles.footerRow}>
                    <span>
                        <kbd>↑</kbd>
                        <kbd>↓</kbd> navigate
                    </span>
                    <span>
                        <kbd>↵</kbd> open
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CommandPalette;
