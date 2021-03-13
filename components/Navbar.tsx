import Link from "next/link"
import { useRouter } from 'next/router'
import styles from '../styles/Navbar.module.scss'


export default function Navbar() {
  const router = useRouter()
  const pathname = router.pathname

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={`${styles.link} ${pathname === '/' ? styles.linkActive : ''}`}>
          <Link href={`/`}>Strona główna</Link>
        </div>
        <div className={`${styles.link} ${pathname.includes('/add-preferences') ? styles.linkActive : ''}`}>
          <Link href={`/add-preferences`}>Dodaj preferencje</Link>
        </div>
      </div>
    </div>
  )
}