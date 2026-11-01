export type ProjectCategory = "web-app" | "website" | "desktop" | "game";

export interface ProjectFeature {
    title: string;
    description: string;
    imageURL: string;
}

export interface Project {
    slug: string;
    title: string;
    kind: string;
    category: ProjectCategory;
    status: "Live" | "Download" | "Open Source" | "Archived";
    summary: string;
    description: string;
    techList: string[];
    // static image used for cards, the deck and previews
    tileURL: string;
    // image (or gif) shown in the project's case study
    mainImageURL: string;
    featureList: ProjectFeature[];
    primaryLink?: { label: string; href: string; external: boolean };
    githubLink: string;
    accent: string;
    featured?: boolean;
}

export const categoryLabels: Record<ProjectCategory, string> = {
    "web-app": "Web Apps",
    website: "Websites",
    desktop: "Desktop",
    game: "Games",
};

// add new projects here, the order of this list is the order they are shown in
export const projects: Project[] = [
    {
        slug: "my-resume-hero",
        title: "My Resume Hero",
        kind: "AI Web Application",
        category: "web-app",
        status: "Live",
        summary:
            "AI-powered job application hub that writes tailored resumes and cover letters in seconds.",
        description:
            "Overhaul to MyAiResume. Keep all your job applications organized in one place. Create a professional resume and cover letter in seconds with the help of AI. Stand out from the rest by tailoring each resume to the job you are applying for.",
        techList: [
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
        ],
        tileURL: "/images/my-resume-hero-tile.png",
        mainImageURL: "/images/my-resume-hero-tile.png",
        featureList: [
            {
                title: "AI Generator",
                description:
                    "Keep all of your job applications in one place. Create a professional resume and cover letter in seconds with the help of AI.",
                imageURL: "/images/my-resume-hero-feature-applications.png",
            },
            {
                title: "Resumes & Cover Letters",
                description:
                    "Create a different resume and cover letter for every application. Stand out from the rest by tailoring each resume to the job you are applying for.",
                imageURL: "/images/my-resume-hero-feature-documents.png",
            },
        ],
        primaryLink: {
            label: "Visit Site",
            href: "https://myresumehero.com",
            external: true,
        },
        githubLink: "https://github.com/santy81855/myairesumes",
        accent: "#7c6cf2",
        featured: true,
    },
    {
        slug: "slipstream",
        title: "Slipstream",
        kind: "React Web Application",
        category: "web-app",
        status: "Live",
        summary:
            "A typing test with animated themes, from a crackling fireplace to rain on a window.",
        description:
            "A typing test built with React, TypeScript and Vite. Pick a timed run, a word count, a quote or numbers, and get your WPM, accuracy and a pace chart when you finish. Ten of the thirteen themes have animated scenery behind the page, like a fireplace, rain on a window, a snowy mountain range and a black hole. All of it is drawn in code, so there are no image assets to download.",
        techList: [
            "React 19",
            "TypeScript",
            "Vite",
            "Canvas API",
            "CSS Animations",
            "Vercel",
            "Git",
        ],
        tileURL: "/images/slipstream-tile.jpg",
        mainImageURL: "/images/slipstream-themes.jpg",
        featureList: [
            {
                title: "Fireplace Theme",
                description:
                    "Flames and embers drift up behind the page, and the fire gets a little brighter while you type.",
                imageURL: "/images/slipstream-fireplace.gif",
            },
            {
                title: "Rain Theme",
                description:
                    "Rain streaks down a dark window behind the test, with warm lamplight colors for the text.",
                imageURL: "/images/slipstream-rain.gif",
            },
        ],
        primaryLink: {
            label: "Visit Site",
            href: "https://slipstream.santiagogarcia.dev",
            external: true,
        },
        githubLink: "https://github.com/santy81855/slipstream",
        accent: "#f59e2f",
        featured: true,
    },
    {
        slug: "ticket-tracker",
        title: "Ticket Tracker",
        kind: "Native macOS Application",
        category: "desktop",
        status: "Open Source",
        summary:
            "Native macOS developer workspace that tracks tickets, handoffs, stand-ups and AI coding assistant context.",
        description:
            "A native macOS application built in Swift 6 and SwiftUI that tracks engineering tickets and all the small actions around them—moving Jira cards, posting kickoff threads, requesting pod approvals, handing off to QE, and merging. Everything is stored locally in SQLite via GRDB, with a bundled CLI and Model Context Protocol (MCP) server so AI coding assistants like GitHub Copilot can read and update your active ticket workflow.",
        techList: [
            "Swift 6",
            "SwiftUI",
            "macOS",
            "SQLite",
            "GRDB",
            "MCP",
            "SwiftTerm",
            "WebKit",
            "Git",
        ],
        tileURL: "/images/ticket-tracker-tile.jpg",
        mainImageURL: "/images/ticket-tracker-main.jpg",
        featureList: [
            {
                title: "Custom Workflow Editor & Test Drive",
                description:
                    "Customize workflow steps, owners, conditional paths for QA vs. toggle-only tickets, and message templates—then test-drive a sample ticket through the draft workflow before publishing.",
                imageURL: "/images/ticket-tracker-feature-workflow.jpg",
            },
            {
                title: "Cycle-Time Insights",
                description:
                    "See where time actually goes across building, pod review, QA, and merge stages with 30-day and 90-day breakdowns and in-flight ticket tracking.",
                imageURL: "/images/ticket-tracker-feature-insights.jpg",
            },
            {
                title: "Stand-Up Summaries & Daily Reviews",
                description:
                    "Generate one-click stand-up and end-of-day summaries showing active tickets, merge request approval counts, and what each item is currently waiting on.",
                imageURL: "/images/ticket-tracker-feature-standup.jpg",
            },
            {
                title: "Brag Doc & Shipped Impact",
                description:
                    "Automatically collect shipped tickets, merged MRs, and calculated release fix versions into a quarterly brag doc with impact notes ready to export as Markdown.",
                imageURL: "/images/ticket-tracker-feature-brag.jpg",
            },
        ],
        githubLink: "https://github.com/santy81855/ticket-tracker",
        accent: "#6366f1",
    },
    {
        slug: "workout-tracker",
        title: "Workout Tracker",
        kind: "Progressive Web App",
        category: "web-app",
        status: "Live",
        summary:
            "A gym logger that runs a 12-week program and keeps working when the signal drops.",
        description:
            "A workout tracker made to use on your phone at the gym, installed to the home screen like an app. It runs a 12-week training program, lets you log sets with a few taps, and shows what you lifted last time. If you miss a day, the remaining workouts shift forward instead of getting lost. Everything saves on the phone first and syncs to Supabase when there's a connection, so bad gym wifi doesn't cost you a workout.",
        techList: [
            "Next.js 16",
            "React 19",
            "TypeScript",
            "Supabase",
            "PostgreSQL",
            "IndexedDB",
            "Tailwind CSS",
            "PWA",
            "Vitest",
            "Git",
        ],
        tileURL: "/images/workout-tracker-tile.jpg",
        mainImageURL: "/images/workout-tracker-screens.jpg",
        featureList: [
            {
                title: "Flexible Schedule",
                description:
                    "Workouts are queued in order instead of pinned to weekdays. Drag them around to fit your recovery, or add a rest day and everything after it moves back a day.",
                imageURL: "/images/workout-tracker-feature-queue.jpg",
            },
            {
                title: "Muscle Map",
                description:
                    "A front and back body map shows how many sets each muscle group has gotten so far, with a toggle to compare against what the program expects.",
                imageURL: "/images/workout-tracker-feature-progress.jpg",
            },
        ],
        primaryLink: {
            label: "Visit Site",
            href: "https://gym.santiagogarcia.dev",
            external: true,
        },
        githubLink: "https://github.com/santy81855/workout-tracker",
        accent: "#5b9cff",
    },
    {
        slug: "nmg-remodeling",
        title: "NM&G Remodeling",
        kind: "Business Website",
        category: "website",
        status: "Live",
        summary:
            "Marketing site for a home remodeling company with a filterable project gallery and lead capture.",
        description:
            "A full marketing website for NM&G Remodeling, a kitchen, bath, deck and basement remodeling company. Visitors can browse finished work in a project gallery filtered by category, read about the team, and request an estimate through a contact form that delivers inquiries straight to the business inbox.",
        techList: [
            "Next.js 15",
            "React 19",
            "TypeScript",
            "Motion",
            "Resend",
            "CSS Modules",
            "Git",
        ],
        tileURL: "/images/nmg-remodeling-tile.jpg",
        mainImageURL: "/images/nmg-remodeling-tile.jpg",
        featureList: [
            {
                title: "Project Gallery",
                description:
                    "Finished kitchens, bathrooms, decks and basements organized into tabs so homeowners can jump straight to the kind of work they care about.",
                imageURL: "/images/nmg-remodeling-feature-gallery.jpg",
            },
            {
                title: "Brand Storytelling",
                description:
                    "Bold, image-led pages that introduce the company, its commitment to craftsmanship, and funnel visitors toward a free estimate.",
                imageURL: "/images/nmg-remodeling-feature-about.jpg",
            },
        ],
        primaryLink: {
            label: "Visit Site",
            href: "https://nmgremodeling.com",
            external: true,
        },
        githubLink: "https://github.com/santy81855/nmg-website",
        accent: "#f27a5e",
        featured: true,
    },
    {
        slug: "course-manager-lms",
        title: "Course Manager LMS",
        kind: "Full-Stack Web Application",
        category: "web-app",
        status: "Open Source",
        summary:
            "Full-stack learning management system with AI syllabus-to-course generation, quiz authoring and student enrollment.",
        description:
            "A learning management system built with a React and TypeScript frontend backed by a Java 21 Spring Boot REST API and MySQL. Teachers can paste a raw syllabus to generate an entire draft curriculum with OpenAI, organize courses into ordered modules, lessons and timed quizzes, and track student submissions and rosters. Students join classes with a course code, work through published modules and take auto-graded assessments.",
        techList: [
            "Java 21",
            "Spring Boot",
            "Spring Security",
            "Spring JDBC",
            "React 19",
            "TypeScript",
            "Vite",
            "MySQL",
            "OpenAI",
            "Docker",
            "JUnit 5",
            "CSS Modules",
            "Git",
        ],
        tileURL: "/images/lms-tile.jpg",
        mainImageURL: "/images/lms-main.jpg",
        featureList: [
            {
                title: "AI Syllabus-to-Course Generator",
                description:
                    "Paste a course syllabus, choose a grade level and module count, and let the Spring Boot backend generate a complete draft curriculum—modules, lessons, quizzes, questions and answer keys—through OpenAI.",
                imageURL: "/images/lms-feature-ai.jpg",
            },
            {
                title: "Curriculum & Module Builder",
                description:
                    "Organize courses into ordered modules, lessons with reading-time estimates, and assessments, with draft, published and archived states and shareable 8-character class join codes.",
                imageURL: "/images/lms-feature-curriculum.jpg",
            },
            {
                title: "Interactive Student Quizzes",
                description:
                    "Author multiple-choice, true/false and short-answer questions with point values and explanations, while students take timed multi-attempt quizzes with instant grading.",
                imageURL: "/images/lms-feature-quiz.jpg",
            },
            {
                title: "Course Roster & Submissions",
                description:
                    "Monitor active, completed and dropped student enrollments alongside quiz submission scores and attempt history for every assessment.",
                imageURL: "/images/lms-feature-roster.jpg",
            },
        ],
        githubLink: "https://github.com/santy81855/lms",
        accent: "#2eb8a6",
    },
    {
        slug: "cozy-type",
        title: "Cozy Type",
        kind: "React Web Application",
        category: "web-app",
        status: "Live",
        summary:
            "A cozy typing test with ranked progression from Bronze to Legend and rain-and-thunder ambiance.",
        description:
            "Embark on a typing journey on a cozy typing test website. Achieve rankings from Bronze 1 all the way up to Legend, track progress, and enjoy a relaxing ambiance with rain and thunder. Start typing today!",
        techList: [
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
        ],
        tileURL: "/images/cozy-type-demo.png",
        mainImageURL: "/images/cozy-type-main.gif",
        featureList: [
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
        ],
        primaryLink: {
            label: "Visit Site",
            href: "https://cozytype.santiagogarcia.dev",
            external: true,
        },
        githubLink: "https://github.com/santy81855/typing-website",
        accent: "#e0a458",
    },
    {
        slug: "my-ai-resume",
        title: "My AI Resume v1",
        kind: "AI Web Application",
        category: "web-app",
        status: "Archived",
        summary:
            "The original AI resume and cover letter builder that grew into My Resume Hero.",
        description:
            "Create a professional resume and cover letter in seconds with the help of AI. Create a different resume and cover letter for every job application.",
        techList: [
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
        ],
        tileURL: "/images/ai-resume-tile.png",
        mainImageURL: "/images/resume-mockup-no-shadow.png",
        featureList: [
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
        ],
        primaryLink: {
            label: "View Project",
            href: "https://github.com/santy81855/ResumeBuilder_Frontend",
            external: true,
        },
        githubLink: "https://github.com/santy81855/ResumeBuilder_Frontend",
        accent: "#4f9dde",
    },
    {
        slug: "latebis",
        title: "Latebis Art Portfolio",
        kind: "Artist Portfolio",
        category: "website",
        status: "Live",
        summary:
            "Portfolio and gallery site for an illustrator, with a Sanity-backed masonry grid and contact form.",
        description:
            "A portfolio website built for the illustrator and multimedia artist Latebis (Juni). Artwork is managed through an embedded Sanity Studio and arranged into a responsive masonry grid sorted across drawings, digital illustrations and sketchbook pages, with a slide-over contact card for inquiries.",
        techList: [
            "Next.js 15",
            "React 19",
            "TypeScript",
            "Sanity CMS",
            "Motion",
            "Resend",
            "CSS Modules",
            "Vercel",
            "Git",
        ],
        tileURL: "/images/latebis-tile.jpg",
        mainImageURL: "/images/latebis-tile.jpg",
        featureList: [
            {
                title: "Sanity-Powered Masonry Grid",
                description:
                    "New pieces uploaded in Sanity Studio are balanced across columns by aspect ratio, with blur placeholders and category tabs for drawings, digital work and sketchbook pages.",
                imageURL: "/images/latebis-feature-gallery.jpg",
            },
            {
                title: "Slide-Over Contact Card",
                description:
                    "Opening the contact tab blurs the full gallery in the background and slides up a tarot-framed form that sends inquiries straight to the artist's inbox through Resend.",
                imageURL: "/images/latebis-feature-contact.jpg",
            },
        ],
        primaryLink: {
            label: "Visit Site",
            href: "https://latebis.com",
            external: true,
        },
        githubLink: "https://github.com/santy81855/juanita-site",
        accent: "#c23b6b",
    },
    {
        slug: "company-website",
        title: "Company Website",
        kind: "Static Web Page",
        category: "website",
        status: "Archived",
        summary:
            "Marketing site for an agency that provides marketing and advertising services.",
        description:
            "A website for a company that provides marketing and advertising services. The website is built with React, TypeScript, and CSS.",
        techList: ["TypeScript", "CSS", "React", "Git"],
        tileURL: "/images/spwebmanagement.png",
        mainImageURL: "/images/spwebmanagement.png",
        featureList: [],
        githubLink: "https://github.com/santy81855/business-site",
        accent: "#3fb39b",
    },
    {
        slug: "book-sale-website",
        title: "Book Sale Website",
        kind: "Static Web Page",
        category: "website",
        status: "Live",
        summary:
            "Storefront for an art book with a gallery, Stripe checkout and a contact form.",
        description:
            "A website for the sale of an art book. The website is built with React, TypeScript, and CSS. The website features a gallery, a store, and a contact form.",
        techList: ["TypeScript", "CSS", "React", "Stripe", "Git"],
        tileURL: "/images/madalithpareja.png",
        mainImageURL: "/images/madalithpareja.png",
        featureList: [],
        primaryLink: {
            label: "Visit Site",
            href: "https://madalithpareja.com",
            external: true,
        },
        githubLink: "https://github.com/santy81855/madalith-pareja",
        accent: "#d9668f",
    },
    {
        slug: "codon",
        title: "Codon Text Editor",
        kind: "Python GUI",
        category: "desktop",
        status: "Download",
        summary:
            "A feature-rich, lightweight text and code editor for Windows.",
        description:
            "A feature-rich and lightweight text and code editor for Windows computers.",
        techList: ["Python", "PyQt5", "QScintilla", "CSS", "Git"],
        tileURL: "/images/codon-tile.png",
        mainImageURL: "/images/codon-mockup-no-shadow-cropped.png",
        featureList: [
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
        ],
        primaryLink: {
            label: "Download",
            href: "https://github.com/santy81855/Codon/raw/main/Codon_Installer.exe",
            external: false,
        },
        githubLink: "https://github.com/santy81855/Codon",
        accent: "#5d8fa8",
    },
    {
        slug: "glass-cannon",
        title: "Glass Cannon",
        kind: "3D Unity Game",
        category: "game",
        status: "Download",
        summary:
            "A 3D wave-survival game where one hit means game over.",
        description:
            "A 3D wave survival game made in Unity. Try to survive as long as possible against an endless wave of enemies. One hit and you're dead.",
        techList: ["Unity 3D", "Blender", "C#", "AI", "Git"],
        tileURL: "/images/glass-cannon-tile.png",
        mainImageURL: "/images/glass-cannon-tile.png",
        featureList: [
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
        ],
        primaryLink: {
            label: "Download",
            href: "https://github.com/santy81855/Glass_Cannon/archive/refs/heads/main.zip",
            external: false,
        },
        githubLink: "https://github.com/santy81855/Glass_Cannon",
        accent: "#c4544a",
    },
    {
        slug: "vr-cell",
        title: "VR Cell",
        kind: "3D Unity VR Game",
        category: "game",
        status: "Download",
        summary:
            "An immersive VR biology experience exploring a 3D animal cell and the endomembrane system.",
        description:
            "An educational 3D virtual reality application built in Unity that lets users shrink down to explore an interactive animal cell from the inside, inspect organelles up close in a virtual lab, and follow the step-by-step protein synthesis pathway through the endomembrane system.",
        techList: ["Unity 3D", "C#", "OpenXR", "Blender", "VR", "Git"],
        tileURL: "/images/vr-cell-tile.jpg",
        mainImageURL: "/images/vr-cell-main.gif",
        featureList: [
            {
                title: "Inside the Cell (Immersive Mode)",
                description:
                    "Step directly inside a living 3D animal cell surrounded by the nucleus, rough and smooth endoplasmic reticulum, Golgi apparatus, mitochondria, and motor proteins walking along cytoskeletal microtubules.",
                imageURL: "/images/vr-cell-feature-nucleus.jpg",
            },
            {
                title: "Interactive Lab & Endomembrane Tour",
                description:
                    "Examine a cross-section of the cell on the virtual laboratory table, grab individual 3D organelle models with VR controllers, or take a guided tour tracing transcription, translation, and vesicle transport.",
                imageURL: "/images/vr-cell-feature-lab.jpg",
            },
        ],
        primaryLink: {
            label: "Download",
            href: "https://github.com/santy81855/VR_Cell/archive/refs/heads/main.zip",
            external: false,
        },
        githubLink: "https://github.com/santy81855/VR_Cell",
        accent: "#3ca370",
    },
    {
        slug: "typo",
        title: "Typo",
        kind: "Python GUI",
        category: "desktop",
        status: "Download",
        summary:
            "Desktop typing test for speed and accuracy, with AI-generated practice text.",
        description:
            "A typing speed test application that allows you to test both your typing speed and accuracy.",
        techList: [
            "Python",
            "PyQt5",
            "Firebase",
            "Firestore",
            "CSS",
            "Git",
            "AI",
        ],
        tileURL: "/images/typo-tile.png",
        mainImageURL: "/images/typo-main-image.gif",
        featureList: [
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
        ],
        primaryLink: {
            label: "Download",
            href: "https://github.com/santy81855/Typo/raw/main/Typo_Installer.exe",
            external: false,
        },
        githubLink: "https://github.com/santy81855/Typo",
        accent: "#8a7fd1",
    },
];

export const allTechnologies = Array.from(
    new Set(projects.flatMap((project) => project.techList))
);

export const contactEmail = "santy@santiagogarcia.dev";
export const githubProfile = "https://github.com/santy81855";
