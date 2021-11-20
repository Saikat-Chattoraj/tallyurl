import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../components/Layout'
import Navbar from '../components/Navbar'
import ShortenUrl from '../components/ShortenUrl'

export default function Home() {
  return (
    <Layout>
    <div className="my-80">
    <ShortenUrl/>
    </div>
    </Layout>
  )
}