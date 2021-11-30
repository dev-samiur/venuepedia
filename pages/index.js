import Head from 'next/head'
import Hero from '../components/Hero'
import Feature from '../components/Feature'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Hero />
				<Feature />
      </main>
    </div>
  )
}
