import styles from './ElementalsRSVP.module.css'

export default function ElementalsRSVP() {
  return (
    <>
    <form name='rsvpelements' method='POST' data-netlify='true'>
        <input type="hidden" name="form-name" value="rsvpelements" />
        <div className='inputContainer'>
            <p><label>NAME <input type="name" name='name'></input></label></p>
            <p><label>PHONE NUMBER <input type="tel" name='telephone number'></input></label></p>
        </div>
        <p><button className={styles.button} type='submit'>CONFIRM</button></p>
    </form>
    </>
  )
}
