/* eslint-disable max-len */
import Document, { Head, Main, NextScript, Html } from 'next/document';

import { ServerStyleSheet } from 'styled-components';
import Script from 'next/script';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      // eslint-disable-next-line jsx-a11y/html-has-lang
      <Html>
        <Head>
          <NextScript />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
          {this.props.styleTags}
          {/* Global site tag (gtag.js) - Google Analytics */}
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-9E6RVYNWB7" strategy="afterInteractive" />
          <Script
            strategy="afterInteractive"
            id="gTagScript"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
                 function gtag(){dataLayer.push(arguments);}
                 gtag('js', new Date());
  
                 gtag('config', 'G-9E6RVYNWB7');`,
            }}
          />
          {/* Yandex.Metrika counter */}
          <Script
            strategy="afterInteractive"
            id="yMetrikaSpript"
            dangerouslySetInnerHTML={{
              __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
              
                  ym(89523403, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true
                  });`,
            }}
          />
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<div>
              <img src="https://mc.yandex.ru/watch/89523403" style="position: absolute; left: -9999px;" alt="" />
            </div>`,
            }}
          />
          <Main />
        </body>
      </Html>
    );
  }
}
