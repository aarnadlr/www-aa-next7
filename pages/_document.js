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
          <meta name="image" property="og:image" content="https://aaronadler.com/static/og-aa-com.jpg"/>
          <meta name="author" content="Aaron Adler"/>
          <meta name="keywords" content="Aaron Adler, UX, design, HTML, CSS, JavaScript, React, Node, Sketch, Photoshop"/>
          <meta name="og:title" content="Aaron Adler - UX/Dev"/>
          <meta name="og:type" content="website"/>
          <meta name="og:site_name" content="Aaron Adler - UX/Dev"/>
          <meta name="og:description" content="Aaron Adler - UX/Front-end Development"/>
          <meta name='viewport' content="width=device-width, initial-scale=1.0"/>
          <meta name="title" property="og:title" content="Aaron Adler - UX/Dev"/>
          <meta property='og:url' content='https://aaronadler.com'/>
         

          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous"></link>
       
        </Head>
        <body>
          <Main />
          <NextScript />

        <style jsx>{`
          body{
              opacity:0;  /* make things invisible upon start */
            -webkit-animation:fadeIn ease-in 1;  /* call our keyframe named fadeIn, use animattion ease-in and repeat it only 1 time */
            -moz-animation:fadeIn ease-in 1;
              animation:fadeIn ease-in 1;

              -webkit-animation-fill-mode:forwards;  /* this makes sure that after animation is done we remain at the last keyframe value (opacity: 1)*/
              -moz-animation-fill-mode:forwards;
              animation-fill-mode:forwards;

              -webkit-animation-duration:1s;
              -moz-animation-duration:1s;
              animation-duration:1s;

              -webkit-animation-delay: 0.2s;
              -moz-animation-delay: 0.2s;
              animation-delay: 0.2s;
          }

          /* make keyframes that tell the start state and the end state of our object */
          @-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
          @-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
          @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }

        `}</style>

        </body>
      </html>
    )
  }
}
