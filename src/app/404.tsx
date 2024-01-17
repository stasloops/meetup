import Head from 'next/head';
import { NotFoundBanner } from '../components/NotFoundBanner/NotFoundBanner';
import { title } from '../components/Title/title';

export default function Page404() {
  return (
    <>
      <Head>
        <title>{title.titleText}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NotFoundBanner />
    </>
  );
}
