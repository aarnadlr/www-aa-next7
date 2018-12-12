/*
In production the stylesheet is compiled to .next/static/style.css.
The file will be served from /_next/static/style.css
You could include it into the page using either next/head or a custom _document.js.
*/

import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <html prefix="og: http://ogp.me/ns#">
        <Head>
          <meta name="image" property="og:image" content="https://aaronadler.com/og-aa-com.jpg"/>
          <meta name="author" content="Aaron Adler"/>
          <meta name="keywords" content="Aaron Adler, UX, design, HTML, CSS, JavaScript, React, Node, Sketch, Photoshop"/>
          <meta name="og:title" content="Aaron Adler - UX/Dev"/>
          <meta name="og:type" content="website"/>
          <meta name="og:site_name" content="Aaron Adler - UX/Dev"/>
          <meta name="og:description" content="Aaron Adler - UX/Front-end Development"/>
          <meta name='viewport' content="width=device-width, initial-scale=1.0"/>
          <meta name="title" property="og:title" content="Aaron Adler - UX/Dev"/>
          <meta property='og:url' content='https://aaronadler.com'/>
          <link
            rel='stylesheet'
            href='/_next/static/style.css'
          />
         

          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous"></link>
       
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
