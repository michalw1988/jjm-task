import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'


export default function Home() {
  return (
    <Layout title="Strona główna">
      <h1>Zbieranie preferencji zawodowych</h1>
      <p>System służy do zbierania Twoich preferencji zawodowych. Przejdź do podstony <Link href="/add-preferences"><a className={styles.link}>Dodaj preferencje</a></Link> i wypełnij fomularz.</p>
    </Layout>
  )
}
