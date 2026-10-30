import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import CommandPalette from "./CommandPalette";
import GrainFilter from "./GrainFilter";

type LayoutProps = {
    children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const router = useRouter();
    const [isPaletteOpen, setIsPaletteOpen] = useState(false);

    // reveal elements marked with data-reveal as they scroll into view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("isVisible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
        );
        const observeAll = () => {
            document
                .querySelectorAll("[data-reveal]:not(.isVisible)")
                .forEach((element) => observer.observe(element));
        };
        observeAll();
        // pick up elements added later (e.g. after filtering projects)
        const mutationObserver = new MutationObserver(observeAll);
        mutationObserver.observe(document.body, {
            childList: true,
            subtree: true,
        });
        return () => {
            observer.disconnect();
            mutationObserver.disconnect();
        };
    }, [router.asPath]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if ((event.metaKey || event.ctrlKey) && event.key === "k") {
                event.preventDefault();
                setIsPaletteOpen((open) => !open);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <>
            <GrainFilter />
            <Header onOpenPalette={() => setIsPaletteOpen(true)} />
            <main>{children}</main>
            <Footer />
            <CommandPalette
                isOpen={isPaletteOpen}
                onClose={() => setIsPaletteOpen(false)}
            />
        </>
    );
};

export default Layout;
