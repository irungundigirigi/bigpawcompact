import React from 'react'
import styles from '../../styles/link.module.css'
import Link from 'next/link'

function Kilimanjaro() {
  return (
    <div className={styles.linkContainer}>
        <div className={styles.linkHeading}>
            KILIMANJARO HIKING
        </div>
        <div className={styles.links}>
            <div className={styles.link}>
                <Link href="/expenses">7 Days Kilimanjaro - Marangu</Link>
            </div>
            <div className={styles.link}>
                <Link href="/expenses">8 Days Kilimanjaro Mavhame route </Link>
            </div>
            <div className={styles.link}>
                <Link href="/expenses">7 days Rongai Trekking route</Link>
            </div>
            <div className={styles.link}>
                <Link href="/expenses">Kilimanjaro + Mt Kenya Combined</Link>
            </div>
            
        </div>
    </div>
  )
}

export default Kilimanjaro