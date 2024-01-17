'use client';

import Head from 'next/head';
import { title } from '../../components/Title/title';
import AboutSliderWrapper from '../../components/AboutSlider/AboutSlider';
import AboutBody from '../../components/AboutBody/AboutBody';
import AdvantagesList from '../../components/AdvantagesList/AdvantagesList';

export default function About() {
  return (
    <>
      <Head>
        <title>{title.titleText}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutSliderWrapper />
      <AboutBody />
      <AdvantagesList />
    </>
  );
}
