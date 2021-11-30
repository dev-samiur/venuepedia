import Head from 'next/head'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Products from '../components/Products'
import CTA from '../components/CTA'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-0 text-center">
        <Hero />
				<Stats />
				<Products />
				<CTA />
				<Contact />
      </main>
    </div>
  )
}
