import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-laptopview h-screen">
      <div className="backdrop-filter backdrop-blur-sm w-full h-full">
      <Head>
        <title>Url Shortner</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      </div>
    </div>
  )
}
