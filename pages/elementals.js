import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Elementals from '@components/Elementals'
import Script from 'next/script'
import ElementalsLogo from '@components/ElementalsLogo'
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
        <style global jsx>{`
            ::selection {
                background-color: rgb(0, 83, 38) !important;
                color: white !important;
            }
        `}</style>
      </Head>

      <main>
        <Header title="KIKI & BOUBA" />
        <ElementalsLogo className={styles.logo} />
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
                    <li><a href="#">Feyzi Kutay</a></li>
                    <li><a href="#">Daniel Zeballos</a></li>
                    <li><a href="#">Andrew Basinski</a></li>
                    <li><a href="#">Dabin Ahn</a></li>
                    <li><a href="#">Noelle Africh</a></li>
                    <li><a href="#">Nick D’Alessandro</a></li>
                    <li><a href="#">CJ Shaw</a></li>
                    <li><a href="#">Yanka Kostova</a></li>
                    <li><a href="#">Julia Marks</a></li>
                </ul>
                <h2>INFO</h2>
                <span className="showInfoText">APRIL 8 2022, 6-9 PM</span>
                <address>3926 N MONTECELLO AVE <br></br>CHICAGO, IL 60618</address>
                <Popup trigger={<button className="button" className={styles.button}>RSVP TO OPENING</button>} modal>
                        <form name='rsvpelements' netlify>
                            <div className='inputContainer'>
                                <p><label>NAME <input type="name"></input></label></p>
                                <p><label>PHONE NUMBER <input type="tel"></input></label></p>
                            </div>
                            <p><button className={styles.button} type='submit'>CONFIRM</button></p>
                        </form>
                </Popup>
                <span className="showInfoText">APRIL 9 - APRIL 28:<br></br> BY APPOINTMENT ONLY </span>

            </div>
        </div>
        <h2>PROOF OF VACCINATION AND ID REQUIRED FOR ENTRY.</h2>    
        </div>
      </main>

      <Footer />


    </div>
  )
}
