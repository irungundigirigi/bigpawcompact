import React from 'react'
import styles from '../../styles/link.module.css'
import Link from 'next/link'

function MtKenya() {
  return (
    <div className={styles.linkContainer}>
        <div className={styles.linkHeading}>
            MOUNT KENYA PACKAGES
        </div>
        <div className={styles.links}>
            <div className={styles.link}>
                <Link href="/expenses">4 Days Naromoru Route</Link>
            </div>
            <div className={styles.link}>
                <Link href="/expenses">5 Days Naromoru -Chogoria</Link>
            </div>
            <div className={styles.link}>
                <Link href="/expenses">4 Days Sirimon Route</Link>
            </div>
            <div className={styles.link}>
                <Link href="/expenses">4 Days Naromoru Sirimon</Link>
            </div>
            <div className={styles.link}>
                <Link href="/expenses">The Carnivore Resturant</Link>
            </div>
        </div>
    </div>
  )
}

export default MtKenya