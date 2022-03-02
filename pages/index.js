import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kiki & Bouba || Traveling Gallery</title>
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
