// @ts-nocheck
// @ts-ignore: Unreachable code error
// use client
'use client';
import { createContext } from 'react';
import Header from './components/header/Header';

const Context = createContext();

export default function Home() {
  return <Header></Header>;
}
