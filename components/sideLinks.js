import React from 'react'
import Link1 from './links/link1'
import NairobiTours from './links/nairobiTours'
import MtKenya from './links/mtkenya'
import styles from '../styles/sidelinks.module.css'
import Kilimanjaro from './links/kilimanjaro'


function SideLinks() {
  return (
    <div className={styles.container}>
      <div> <Link1 /> </div>
      <div><NairobiTours /></div>
      <div><MtKenya /></div>
      <div><Kilimanjaro /></div>
    </div>
  )
}

export default SideLinks