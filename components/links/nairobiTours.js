import React from 'react'
import styles from '../../styles/link.module.css'
import Link from 'next/link'

function NairobiTours() {
  return (
    <div className={styles.linkContainer}>
        <div className={styles.linkHeading}>
            NAIROBI CITY TOURS
        </div>
        <div className={styles.links}>
            <div className={styles.link}>
                <Link href="/expenses">Nairobi City Walking</Link>
            </div>
            <div className={styles.link}>
                <Link href="/expenses">Nairobi National Park</Link>
            </div>
            <div className={styles.link}>
                <Link href="/expenses">Nairobi driving tour</Link>
            </div>
            <div className={styles.link}>
                <Link href="/expenses">Tamarind Resturant </Link>
            </div>
            <div className={styles.link}>
                <Link href="/expenses">The Carnivore Resturant</Link>
            </div>
        </div>
    </div>
  )
}

export default NairobiTours