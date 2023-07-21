"use client";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import Header from "@/components/Header";

export default function App({ Component, pageProps }: AppProps) {
    // set the correct theme based on the user's preference
    useEffect(() => {
        let curTheme = localStorage.getItem("theme");
        if (curTheme === null) {
            localStorage.setItem("theme", "light");
        } else {
            if (localStorage.getItem("theme") === "light") {
                document.documentElement.classList.toggle("dark-theme", false);
            } else {
                document.documentElement.classList.toggle("dark-theme", true);
            }
        }
    }, []);

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
