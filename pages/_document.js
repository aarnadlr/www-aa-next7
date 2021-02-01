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
        </body>
      </Html>
    );
  }
}
