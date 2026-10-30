import { Html, Head, Main, NextScript } from "next/document";

// runs before the page paints so the saved (or system) theme never flashes
const themeScript = `(function(){try{var d=document.documentElement;d.classList.add('js');var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark'){d.classList.add('dark-theme');}}catch(e){}})();`;

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <script dangerouslySetInnerHTML={{ __html: themeScript }} />
                <meta name="theme-color" content="#0d0e11" />
                <meta property="og:site_name" content="Santiago Garcia" />
                <meta
                    property="og:image"
                    content="https://santiagogarcia.dev/images/my-resume-hero-tile.png"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
