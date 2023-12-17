import { MainLayout } from "@/components/MainLayout";
import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyles } from "@/styles/blocks/GlobalStyles";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const font = Montserrat({ subsets: ["latin", 'cyrillic'], style: "normal"});

export const metadata: Metadata = {
  title: "Gomeetup — всегда идем на встречу",
  icons: ['/favicon.ico']
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body 
      className={font.className}
      >
        <StyledComponentsRegistry>
          <MainLayout>
            <GlobalStyles />
            {children}
          </MainLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
