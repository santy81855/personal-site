import Image from "next/image";
import styles from "@/styles/Showcase.module.css";

const ResumeSection = () => {
    const resumeTechnologyList = [
        "Node.js",
        "Express",
        "Passport",
        "React",
        "MongoDB",
        "Git",
        "OpenAI",
        "AWS EC2",
    ];
    return (
        <section className={styles.section}>
            <div id="airesume" className={styles.sectionContainer}>
                <p className={styles.textHeader}>AI Web Application</p>
                <h1 className={styles.textTitle}>AI Resume Builder</h1>
                <p className={styles.description}>
                    A web application to help build a professional resume in
                    minutes with the help of artificial intelligence.
                </p>

                <div className={styles.technologyDescription}>
                    <div className={styles.technologyContainer}>
                        <div className={styles.technologyList}>
                            {resumeTechnologyList.map((item, index) => (
                                <div key={index} className={styles.item}>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                        <Image
                            className={styles.mainImage}
                            src="/images/resume-mockup-no-shadow.png"
                            alt="Resume Image"
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
                        <div className={styles.feature}>
                            <h1>Syntax Highlighting</h1>
                            <Image
                                src="/images/codon-syntax.gif"
                                alt="syntax highlighting feature gif"
                                className={styles.featureGif}
                                height={225}
                                width={400}
                                priority={true}
                            />
                            <p>
                                Syntax highlighting will automatically detect
                                the file type and is available for python, c,
                                c#, c++, css, java, javascript and json.
                            </p>
                        </div>
                        <div className={styles.feature}>
                            <h1>Code Map</h1>
                            <Image
                                src="/images/codon-map.gif"
                                alt="map feature gif"
                                className={styles.featureGif}
                                height={225}
                                width={400}
                                priority={true}
                            />
                            <p>
                                Easily and efficiently scroll through your files
                                with the help of the code map, which is always
                                in view.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.downloadContainer}>
                    <a
                        href="https://myairesumes.com"
                        className={styles.downloadButton}
                    >
                        Live Demo
                    </a>
                    <a href="https://github.com/santy81855/ResumeBuilder_Frontend">
                        <p> View on Github</p>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ResumeSection;
