import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Elementals from '@components/Elementals'
import Script from 'next/script'

export default function Home() {
  return (
    <div className="container">
              <Script id='cursoreffect' src='/cursoreffect.js' strategy='afterInteractive' onLoad={()=> {
                new ghostCursor()
              }} />

      <Head>
        <title>Kiki & Bouba || Travelling Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="KIKI & BOUBA" />
        <Elementals />

      </main>

      <Footer />


    </div>
  )
}
