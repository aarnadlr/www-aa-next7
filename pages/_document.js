/*
In production the stylesheet is compiled to .next/static/style.css.
The file will be served from /_next/static/style.css
You could include it into the page using either next/head or a custom _document.js.
*/

import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" prefix="og: http://ogp.me/ns#">
        <Head>
        
        </Head>
        <body>
         <script src="noflash.js" />
          <Main />
          <NextScript />

          <style jsx>
            {`
              body {
                opacity: 0; /* make things invisible upon start */
                -webkit-animation: fadeIn ease-in 1; /* call our keyframe named fadeIn, use animattion ease-in and repeat it only 1 time */
                -moz-animation: fadeIn ease-in 1;
                animation: fadeIn ease-in 1;

                -webkit-animation-fill-mode: forwards; /* this makes sure that after animation is done we remain at the last keyframe value (opacity: 1)*/
                -moz-animation-fill-mode: forwards;
                animation-fill-mode: forwards;

                -webkit-animation-duration: 1s;
                -moz-animation-duration: 1s;
                animation-duration: 1s;

                -webkit-animation-delay: 0.2s;
                -moz-animation-delay: 0.2s;
                animation-delay: 0.2s;
              }

              /* make keyframes that tell the start state and the end state of our object */
              @-webkit-keyframes fadeIn {
                from {
                  opacity: 0;
                }
                to {
                  opacity: 1;
                }
              }
              @-moz-keyframes fadeIn {
                from {
                  opacity: 0;
                }
                to {
                  opacity: 1;
                }
              }
              @keyframes fadeIn {
                from {
                  opacity: 0;
                }
                to {
                  opacity: 1;
                }
              }
            `}
          </style>
        </body>
      </Html>
    );
  }
}
