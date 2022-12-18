import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/custom.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wire and Switch</title>
        <meta name="description" content="best online electronic shop" />
        <link className={styles.icont} rel="icon" href="/icons/logof.ico" />
      </Head>
        homepage
    </div>
  )
}
