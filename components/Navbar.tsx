import Link from "next/link"
import { useRouter } from 'next/router'
import styles from '../styles/Navbar.module.scss'
import { useStateValue } from '../state/state'
import classNames from 'classnames'


export default function Navbar() {
  const [{ formSubmitted }] = useStateValue()
  const router = useRouter()
  const pathname = router.pathname

  console.log('formSubmitted', formSubmitted)

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div
          className={classNames({
            [`${styles.link}`]: true,
            [`${styles['link-active']}`]: pathname === '/',
          })}
        >
          <Link href={`/`}>Strona główna</Link>
        </div>
        <div
          className={classNames({
            [`${styles.link}`]: true,
            [`${styles['link-active']}`]: pathname.includes('/add-preferences'),
            [`${styles['link-disabled']}`]: formSubmitted,
          })}
        >
          <Link href={!formSubmitted ? `/add-preferences` : ''}>Dodaj preferencje</Link>
        </div>
      </div>
    </div>
  )
}