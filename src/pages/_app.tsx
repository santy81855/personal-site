import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
});
const jetBrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains-mono",
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* expose the font variables to elements rendered outside the layout too */}
            <style jsx global>{`
                :root {
                    --font-inter: ${inter.style.fontFamily};
                    --font-space-grotesk: ${spaceGrotesk.style.fontFamily};
                    --font-jetbrains-mono: ${jetBrainsMono.style.fontFamily};
                }
            `}</style>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
