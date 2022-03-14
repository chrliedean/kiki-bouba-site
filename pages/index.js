import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Script from 'next/script'
import ElementalsLogo from '@components/ElementalsLogo'
import ElementalsRSVP from '@components/ElementalsRSVP'
import styles from '@styles/Elementals.module.css'
import Popup from 'reactjs-popup'

export default function Home() {
  return (
    <div className="container" className={styles.container}>
              <Script id='cursoreffect' src='/cursoreffect.js' strategy='afterInteractive' onLoad={()=> {
                new ghostCursor()
              }} />

      <Head>
        <title>Elementals || Kiki & Bouba</title>
        <link rel="icon" href="/favicon.ico" />
        <style jsx gloabal>{`
            ::selection {
                background-color: rgb(0, 83, 38) !important;
                color: white !important;
            }
        `}</style>
      </Head>

      <main>
        <Header title="KIKI & BOUBA" />
        <ElementalsLogo className={styles.logo} id="background"/>
        <div className={styles.elementalsContent}>
        <div className='dualColumns'>
            <div className='dualColumn'>
                <h2>THE SHOW</h2>
                <p className={styles.showDescription}>ELEMENTALS is an  in-person Chicago group show investigating the understanding and
representation of materials in the natural and artificial world. Experimenting with a range of
materials from resin to the earth itself, these artists aim to explore how placing substances in
different contexts can give rise to new meaning.</p> 
                <p className={styles.showDescription}>Simultaneously, ELEMENTALS also includes
artists investigating the representation of these elements and what it means to simulate a natural
experience in an artificial context. How do these works start to develop a mind of their own once
they’re taken out of their natural environment? What does it mean for them to interact with each
other? How does the medium speak from its arrangement?</p>
                <p className={styles.showDescription}> From combining things that wouldn’t
attract in the real world to changing the meaning of historical artworks, ELEMENTALS opens
the conversation to what things in the world around us really are and how they can be used
tactically or to speak.</p>
            </div>     

            <div className='dualColumn'>
                <h2>THE ARTISTS</h2>
                <ul className={styles.artistList}>
                    <li><a href="https://noelleafrich.com" target="_blank">Noelle Africh</a></li>
                    <li><a href="https://dabinahn.com" target="_blank">Dabin Ahn</a></li>
                    <li><a href="https://www.instagram.com/andrewbasinski" target="_blank">Andrew Basinski</a></li>
                    <li><a href='https://addiecohen.com' target="_blank">Addison Cohen</a></li>
                    <li><a href='//milo.house' target="_blank">Milo Christie</a></li>
                    <li><a href="https://www.nickdalessandro.net" target="_blank">Nick D’Alessandro</a></li>
                    <li><a href="https://cargocollective.com/yankakostova" target="_blank">Yanka Kostova</a></li>
                    <li><a href="//instagram.com/kutaytufekcistudio" target='blank'>Feyzi Kutay</a></li>
                    <li><a href="https://www.instagram.com/dizney_prinzess" target="_blank">Julia Marks</a></li>
                    <li><a href="https://www.katemorrick.com" target="_blank">Kate Morrick</a></li>
                    <li><a href="https://www.instagram.com/cjshaw44" target="_blank">CJ Shaw</a></li>
                    <li><a href="https://www.instagram.com/karmelsart" target="_blank">Karmel Spanier</a></li>
                    <li><a href="https://www.instagram.com/danielezeballos" target="_blank">Daniel Zeballos</a></li>
                </ul>
                <div className="infobox">

                <h2>INFO</h2>
                <span className="showInfoText">APRIL 8 2022, 6-9 PM</span>
                <address>3256 N MONTECELLO AVE <br></br>APT. 2F<br></br>CHICAGO, IL 60618</address>
                <a className="button" className={styles.button} href="sms://+17733021911&body=I'm RSVPing to Elementals! My name is ">RSVP TO OPENING</a>
                
                                <span className="showInfoText">APRIL 9 - APRIL 28:<br></br> BY APPOINTMENT ONLY </span>
                </div>

            </div>
        </div>
        <span className={styles.vaxNotice}>PROOF OF VACCINATION AND ID REQUIRED FOR ENTRY.</span>  
        </div>
      </main>

      <Footer />


    </div>
  )
}
