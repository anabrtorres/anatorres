import React from 'react';
import Head from 'next/head';
import { FiCodepen, FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ana Torres | Dev</title>
      </Head>
      <Navbar />
      <div>
        <h1>Ana Torres</h1>
        <span>Front End Developer</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <FiGithub />
        <FiLinkedin />
        <FiCodepen />
        <FiInstagram />
      </div>
      <div>Desenho</div>
    </div>
  );
}
