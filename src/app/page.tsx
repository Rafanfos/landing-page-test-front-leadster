// @ts-nocheck
// @ts-ignore: Unreachable code error
// use client
'use client';
import { createContext } from 'react';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';

const Context = createContext();

export default function Home() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
    </>
  );
}
