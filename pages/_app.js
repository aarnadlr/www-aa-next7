import Head from 'next/head';
import React, { useEffect } from "react";
import { Workbox } from "workbox-window";
import '../styles/style.css';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if (
      !("serviceWorker" in navigator) ||
      process.env.NODE_ENV !== "production"
    ) {
      console.warn("Progressive Web App support is disabled");
      return;
    }
const wb = new Workbox("sw.js", { scope: "/" });
    wb.register();
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />

        <meta
          name="image"
          property="og:image"
          content="https://aaronadler.com/static/og-aa-com.jpg"
        />
        <meta name="image:alt" content="Aaron Adler | UX Engineer" />
        <meta name="author" content="Aaron Adler" />
        <meta
          name="keywords"
          content="Aaron Adler, frontend, developer, software, engineer, UX, design, HTML, CSS, JavaScript, React, Node, Sketch, Photoshop"
        />
        <meta name="og:title" content="Aaron Adler - UX/Dev" />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="Aaron Adler | UX Engineer" />
        <meta name="og:description" content="Aaron Adler | UX Engineer" />
        <meta name="Description" content="Aaron Adler | UX Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="title"
          property="og:title"
          content="Aaron Adler | UX/Front-end Dev"
        />
        <meta property="og:url" content="https://aaronadler.com" />
        <meta name="theme-color" content="#000000" />
        <link
          rel="stylesheet noopener noreferrer"
          href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
          integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
          crossOrigin="anonymous"
        />
        <link rel="manifest" href="/static/manifest.json" />

        {/* favicons */}
        <link
          rel="apple-touch-icon"
          href="https://aaronadler.com/static/favicons/aa192.png"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="static/favicons/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="static/favicons/favicon-48.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="static/favicons/favicon-32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="static/favicons/favicon-16.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
