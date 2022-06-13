import React from 'react'
import Link1 from './links/link1'
import NairobiTours from './links/nairobiTours'
import MtKenya from './links/mtkenya'
import styles from '../styles/sidelinks.module.css'


function SideLinks() {
  return (
    <div className={styles.container}>
        <Link1 />
        <NairobiTours />
        <MtKenya />
    </div>
  )
}

export default SideLinks