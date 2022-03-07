import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p className={styles.footerText}>@<a href='//instagram.com/kikiandboubagalleries' target="_blank">kikiandboubagalleries</a>. Based in Chicago.</p>
        <p className={styles.copyright}>© 2022 Kiki & Bouba LLC.</p>
      </footer>
    </>
  )
}
