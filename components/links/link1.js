import React from 'react'
import styles from '../../styles/link.module.css'
import Link from 'next/link'

function Link1() {
  return (
    <div className={styles.linkContainer}>
        <div className={styles.linkHeading}>
            CAMPING SAFARI PACKAGES
        </div>
        <div className={styles.links}>
            <div className={styles.link}>
                <Link href="/expenses">3 days Masai mara</Link>
            </div>
            <div className={styles.link}>
                <Link href="/expenses">2 Days Masai Mara</Link>
            </div>
            <div className={styles.link}>
                <Link href="/expenses">Masai Mara/ Lake Nakuru</Link>
            </div>
            <div className={styles.link}>
                <Link href="/expenses">6 Days Amboseli</Link>
            </div>
            <div className={styles.link}>
                <Link href="/expenses">4 Days Masai Mara</Link>
            </div>
        </div>
    </div>
  )
}

export default Link1