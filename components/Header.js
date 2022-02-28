import styles from './Header.module.css'

export default function Header({ title }) {
  return (
    <>
    <header className={styles.header}>
    <img src="/logo.svg" alt="Kiki & Bouba Logo" className={styles.logo} draggable="false" ></img>
    <h1 className={styles.title}>{title}</h1> 
    </header>
     </>

     )
  
}
