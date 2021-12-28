import React from 'react';
import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import Stats from '../components/Stats';
import Products from '../components/Products';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import axios from 'axios';

export default function Home({ products }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Venue Q</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-0 text-center">
        <Hero />
        <div id="about"></div>
        <About />
        <Stats />
        <div id="venues"></div>
        <Products products={products} />
        <CTA />
        <div id="contact"></div>
        <Contact />
      </main>
    </div>
  );
}

export async function getStaticProps({ req, res }) {
  const result = await axios({
    url: 'http://localhost:5000/api/venue',
    method: 'GET',
  });

  return {
    props: {
      products: result.data.success,
    },
  };
}
