import React from 'react'
import Image from 'next/image'
import styles from '../styles/card.module.css'
import pic from '../public/3.JPG';

function Packagecard() {
  return (
    <div className={styles.card}>
        <Image src={pic} />
    </div>
  )
}

export default Packagecard