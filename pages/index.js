import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../components/Layout'
import Navbar from '../components/Navbar'
import ShortenUrl from '../components/ShortenUrl'
var randomstring = require("randomstring");

export default function Home() {
  const ranurl = randomstring.generate(6)
  return (
    <Layout>
    <ShortenUrl btnText = "ddwd" ran = {ranurl}/>
    </Layout>
  )
}