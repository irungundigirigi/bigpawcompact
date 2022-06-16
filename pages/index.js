import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Packagecard from '../components/card'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>bigpawadventures</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <span className={styles.topPicks}>Top picks</span>
      <Packagecard />
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
