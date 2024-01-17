import Head from 'next/head';
import Script from 'next/script';
import React, { FC } from 'react';

interface Props {
  children: React.ReactNode;
}
const HeadLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />

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
      {children}
    </>
  );
};

export default HeadLayout;
