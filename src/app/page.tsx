// @ts-nocheck
// @ts-ignore: Unreachable code error
// use client
'use client';
import { createContext } from 'react';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import VideosSection from './components/main/videos-section/videos-section';

const Context = createContext();

export default function Home() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <VideosSection></VideosSection>
    </>
  );
}
