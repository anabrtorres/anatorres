import React from 'react';
import Head from 'next/head';
import Navbar from '../components/navbar';
import HomePage from '../components/home';
import Skills from '../components/skills';
import Works from '../components/works';

export default function Home() {
  return (
    <div className="w-full pb-36">
      <Head>
        <title>Ana Torres | Dev</title>
      </Head>
      <Navbar />
      <div className="flex pt-40 pb-10 px-20">
        <HomePage />
        <div className="flex w-3/5 justify-around items-center">
          <p>Desenho</p>
        </div>
      </div>
      <div className="flex pt-28 pb-10 px-20">
        <Skills />
        <div className="flex w-3/5 justify-around items-center">
          <p>Desenho</p>
        </div>
      </div>
      <div className="flex pt-28 pb-10 px-20">
        <Works />
        <div className="flex w-3/5 justify-around items-center">
          <p>Desenho</p>
        </div>
      </div>
    </div>
  );
}
