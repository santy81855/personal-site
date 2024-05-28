import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Showcase.module.css";
import React from "react";
import ProjectSection from "@/components/ProjectSection";
import ImageCycle from "@/components/ImageCycle";

const inter = Inter({ subsets: ["latin"] });

export default function Showcase() {
    const grain = (
        <>
            <svg width="0" height="0">
                <filter
                    id="grainy-blur"
                    x="-150%"
                    y="-150%"
                    width="400%"
                    height="400%"
                >
                    <feGaussianBlur
                        stdDeviation="39"
                        result="blur"
                    ></feGaussianBlur>
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency=".537"
                    ></feTurbulence>
                    <feComposite in="blur"></feComposite>
                    <feComposite in="blur" operator="in"></feComposite>
                </filter>
            </svg>
            <div className={styles.grain}></div>
        </>
    );

    return (
        <>
            <Head>
                <title>Showcase</title>
                <meta name="description" content="List of my projects." />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main
                className={`${styles.main} ${inter.className} ${styles.fadeIn}`}
            >
                <section className={styles.section}>
                    <div id="pageTitle" className={styles.titleContainer}>
                        <div
                            className={`${styles.leftItem} ${styles.titleItem}`}
                        >
                            <p className={styles.leftP}>MY PROJECTS</p>
                            <h1>
                                Journey Through My Previous Projects: A Showcase
                                of Past Works
                            </h1>
                        </div>
                    </div>
                </section>
                <section className={styles.section}>
                    {grain}
                    <ImageCycle />
                </section>
                <ProjectSection
                    isFirstProject={true}
                    isOddProject={true}
                    hasDemo={true}
                    sectionId="project1scroll"
                    textHeader="AI Web Application"
                    textTitle="My Resume Hero"
                    description="Overhaul to MyAiResume. Keep all your job applications organized in one place. Create a professional resume and cover letter in seconds with the help of AI. Stand out from the rest by tailoring each resume to the job you are applying for."
                    techList={[
                        "NextJS",
                        "Stripe",
                        "AI",
                        "React",
                        "Supabase",
                        "PostgreSQL",
                        "Git",
                        "OpenAI",
                        "Cloudflare R2",
                        "Vercel",
                        "Lucia Auth",
                    ]}
                    mainImageURL="/images/my-resume-hero-tile.png"
                    featureList={[
                        {
                            title: "AI Generator",
                            description:
                                "Keep all of your job applications in one place. Create a professional resume and cover letter in seconds with the help of AI.",
                            imageURL:
                                "/images/my-resume-hero-feature-applications.png",
                        },
                        {
                            title: "Resumes & Cover Letters",
                            description:
                                "Create a different resume and cover letter for every application. Stand out from the rest by tailoring each resume to the job you are applying for.",
                            imageURL:
                                "/images/my-resume-hero-feature-documents.png",
                        },
                    ]}
                    firstButtonLink="https://myairesumes.com"
                    githubLink="https://github.com/santy81855/ResumeBuilder_Frontend"
                />
                <ProjectSection
                    isFirstProject={false}
                    isOddProject={false}
                    hasDemo={true}
                    sectionId="project2scroll"
                    textHeader="AI Web Application"
                    textTitle="My AI Resume"
                    description="Create a professional resume and cover letter in seconds with the help of AI. Create a different resume and cover letter for every job application."
                    techList={[
                        "Node.js",
                        "Express",
                        "Stripe",
                        "Passport",
                        "AI",
                        "React",
                        "MongoDB",
                        "Git",
                        "OpenAI",
                        "AWS",
                        "Nginx",
                    ]}
                    mainImageURL="/images/resume-mockup-no-shadow.png"
                    featureList={[
                        {
                            title: "AI Generator",
                            description:
                                "Let the AI do the work for you. Simply enter your information and let the AI generate a professional resume for you.",
                            imageURL: "/images/ai-resume-feature-ai.gif",
                        },
                        {
                            title: "Endless Resumes & Cover Letters",
                            description:
                                "Create a different resume and cover letter for every application. Stand out from the rest by tailoring each resume to the job you are applying for.",
                            imageURL: "/images/unlimited-resumes-feature.png",
                        },
                    ]}
                    firstButtonLink="https://myairesumes.com"
                    githubLink="https://github.com/santy81855/ResumeBuilder_Frontend"
                />
                <ProjectSection
                    isFirstProject={false}
                    isOddProject={true}
                    hasDemo={true}
                    sectionId="project3scroll"
                    textHeader="React Web Application"
                    textTitle="Cozy Type"
                    description="Embark on a typing journey on a cozy typing test website. Achieve rankings from Bronze 1 all the way up to Legend, track progress, and enjoy a relaxing ambiance with rain and thunder. Start typing today!"
                    techList={[
                        "Node.js",
                        "Next.js",
                        "TypeScript",
                        "OAuth",
                        "NextAuth",
                        "React",
                        "PostgreSQL",
                        "Prisma",
                        "REST API",
                        "Git",
                        "AWS EC2",
                        "AWS RDS",
                        "Nginx",
                    ]}
                    mainImageURL="/images/cozy-type-main.gif"
                    featureList={[
                        {
                            title: "Track Your Progress",
                            description:
                                "Store every typing test you take and track your progress over time.",
                            imageURL: "/images/test-result-feature.gif",
                        },
                        {
                            title: "Get Ranked in Typing",
                            description:
                                "Increase your rank as you increase your typing speed. Try to make it to the top rank: Legend.",
                            imageURL: "/images/rank-feature.png",
                        },
                    ]}
                    firstButtonLink="https://typing.santiagogarcia.dev"
                    githubLink="https://github.com/santy81855/typing-website"
                />
                <ProjectSection
                    isFirstProject={false}
                    isOddProject={false}
                    hasDemo={false}
                    sectionId="project4scroll"
                    textHeader="Python GUI"
                    textTitle="Codon Text Editor"
                    description="A feature-rich and lightweight text and code editor for
                    Windows computers."
                    techList={["Python", "PyQt5", "QScintilla", "CSS", "Git"]}
                    mainImageURL="/images/codon-mockup-no-shadow-cropped.png"
                    featureList={[
                        {
                            title: "Syntax Highlighting",
                            description:
                                "Syntax highlighting will automatically detect the file type and is available for python, c, c#, c++, css, java,  and json.",
                            imageURL: "/images/codon-syntax.gif",
                        },
                        {
                            title: "Code Map",
                            description:
                                "Easily and efficiently scroll through your files with the help of the code, which is always in view.",
                            imageURL: "/images/codon-map.gif",
                        },
                    ]}
                    firstButtonLink="https://github.com/santy81855/Codon/raw/main/Codon_Installer.exe"
                    githubLink="https://github.com/santy81855/Codon"
                />
                <ProjectSection
                    isFirstProject={false}
                    isOddProject={true}
                    hasDemo={false}
                    sectionId="project5scroll"
                    textHeader="3D Unity Game"
                    textTitle="Glass Cannon"
                    description="A 3D wave survival game made in Unity. Try to survive as long as possible against an endless wave of enemies. One hit and you're dead."
                    techList={["Unity 3D", "Blender", "C#", "AI", "Git"]}
                    mainImageURL="/images/glass-cannon-tile.png"
                    featureList={[
                        {
                            title: "Power-up Store",
                            description:
                                "Use the points you earn from killing enemies to buy power-ups to help you survive longer.",
                            imageURL: "/images/cannon-feature-store.gif",
                        },
                        {
                            title: "AI Level Scaling",
                            description:
                                "The AI will scale in difficulty as you progress through the waves. The longer you survive, the harder it gets.",
                            imageURL: "/images/cannon-feature-scaling.gif",
                        },
                    ]}
                    firstButtonLink="https://github.com/santy81855/Glass_Cannon/archive/refs/heads/main.zip"
                    githubLink="https://github.com/santy81855/Glass_Cannon"
                />
                <ProjectSection
                    isFirstProject={false}
                    isOddProject={false}
                    hasDemo={false}
                    sectionId="project6scroll"
                    textHeader="Python GUI"
                    textTitle="Typo"
                    description="A typing speed test application that allows you to test both your typing speed and accuracy."
                    techList={[
                        "Python",
                        "PyQt5",
                        "Firebase",
                        "Firestore",
                        "CSS",
                        "Git",
                        "AI",
                    ]}
                    mainImageURL="/images/typo-main-image.gif"
                    featureList={[
                        {
                            title: "Multiple Modes",
                            description:
                                "Test your typing speed and accuracy with multiple modes, including a custom mode where you can type AI generated text.",
                            imageURL: "/images/typo-feature-mode.gif",
                        },
                        {
                            title: "Pick a Theme",
                            description:
                                "Choose from a variety of themes to customize your typing experience.",
                            imageURL: "/images/typo-feature-theme.gif",
                        },
                    ]}
                    firstButtonLink="https://github.com/santy81855/Typo/raw/main/Typo_Installer.exe"
                    githubLink="https://github.com/santy81855/Typo"
                />
            </main>
        </>
    );
}
/*
    sectionId: string,
    textHeader: string,
    textTitle: string,
    description: string,
    techList: string[],
    mainImage: string,
    firstButtonLink: string,
    githubLink: string
*/
