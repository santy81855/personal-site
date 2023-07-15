import Image from "next/image";
import styles from "@/styles/Showcase.module.css";

const CodonSection = () => {
    return (
        <section className={styles.invertSection}>
            <div id="codon" key="codon" className={styles.sectionContainer}>
                <p className={styles.textHeader}>TEXT EDITOR</p>
                <h1 className={styles.textTitle}>Codon Text Editor</h1>
                <p className={styles.description}>
                    A feature-rich and lightweight text and code editor for
                    Windows computers.
                </p>
                <div className={styles.technologyDescription}>
                    <Image
                        className={styles.codonImage}
                        src="/images/image1.png"
                        alt="Codon Image"
                        height={441}
                        width={650}
                        priority={true}
                    />
                    <div className={styles.technologyList}>
                        <div className={styles.item}>
                            <p>Python</p>
                        </div>
                        <div className={styles.item}>
                            <p>PyQt5</p>
                        </div>
                        <div className={styles.item}>
                            <p>QScintilla</p>
                        </div>
                        <div className={styles.item}>
                            <p>Git</p>
                        </div>
                    </div>
                </div>
                <div className={styles.featureContainer}>
                    <h1 className={styles.featureTitle}>Features</h1>
                    <div className={styles.featureList}>
                        <div className={styles.feature}>
                            <h1>Find & Replace</h1>
                            <Image
                                src="/images/codon-find.gif"
                                alt="find feature gif"
                                className={styles.featureGif}
                                height={225}
                                width={400}
                                priority={true}
                            />
                            <p>
                                Using regular expressions, the find and replace
                                feature works quickly and reliably regardless of
                                the size of the file.
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
                    </div>
                </div>
                <div className={styles.downloadContainer}>
                    <a
                        href="https://github.com/santy81855/Codon/raw/main/Codon_Installer.exe"
                        className={styles.downloadButton}
                    >
                        Download
                    </a>
                    <a href="https://github.com/santy81855/Codon">
                        <p> View on Github</p>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CodonSection;
