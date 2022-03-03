import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Elementals from '@components/Elementals'
import Script from 'next/script'

export default function Home() {
  return (
<div className="homecontainer">
      <Head>
        <title>Kiki & Bouba</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="KIKI & BOUBA" />
        <p className="description">
          Kiki & Bouba is a traveling gallery and artists' collective.
        </p>

      </main>

      <Footer />
    </div>
  )
}
