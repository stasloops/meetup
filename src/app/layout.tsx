import type { Metadata } from 'next';
import { Inter, Noto_Sans, Roboto_Flex } from 'next/font/google';
import './globals.css';
import localFont from 'next/font/local';
import React from 'react';
import HeadLayout from '../lib/headLayout';
import StyledComponentsRegistry from '../lib/registry';
import { MainLayout } from '../components/MainLayout';
import { GlobalStyles } from '../styles/blocks/GlobalStyles';

const roboto = Roboto_Flex({
  subsets: ['latin', 'cyrillic'],
  style: 'normal',
  variable: '--roboto',
  weight: ['300', '400', '500', '700', '900'],
});

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  style: 'normal',
  variable: '--inter',
  weight: ['300', '400', '500', '700', '900'],
});

const noto_sans = Noto_Sans({
  subsets: ['latin', 'cyrillic'],
  style: 'normal',
  variable: '--noto-sans',
  weight: ['300', '400', '500', '700', '900'],
});

const tt_hoves_400 = localFont({
  src: '../data/assets/fonts/TT-Hoves/TTHoves-Regular.ttf',
  style: 'normal',
  variable: '--hoves-400',
  weight: '400',
});

const tt_hoves_500 = localFont({
  src: '../data/assets/fonts/TT-Hoves/TTHoves-Regular.ttf',
  style: 'normal',
  variable: '--hoves-500',
  weight: '500',
});

export const metadata: Metadata = {
  title: 'Gomeetup — всегда идем на встречу',
  icons: ['/favicon.ico'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${noto_sans.variable} ${inter.variable} ${inter.className} ${roboto.variable} 
        ${tt_hoves_400.variable} ${tt_hoves_500.variable}`}
      >
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<div>
              <img src="https://mc.yandex.ru/watch/89523403" style="position: absolute; left: -9999px;" alt="" />
            </div>`,
          }}
        />
        <HeadLayout>
          <StyledComponentsRegistry>
            <MainLayout>
              <GlobalStyles />
              {children}
            </MainLayout>
          </StyledComponentsRegistry>
        </HeadLayout>
      </body>
    </html>
  );
}
