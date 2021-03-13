import styles from '../styles/Layout.module.scss'
import Head from 'next/head'

interface IProps {
  title: string
  children: React.ReactNode
}

export default function Layout({ title, children }: IProps) {
  return <div className={styles.container}>
    <Head>
      <title>{title}</title>
    </Head>
    <div className={styles.inner}>
      {children}
    </div>
  </div>
}
