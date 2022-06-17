import React from 'react'
import Image from 'next/image'
import styles from '../styles/card.module.css'
import pic from '../public/3.JPG';

function Packagecard() {
  return (
    <div className={styles.card}>
        <Image className={styles.img} src={pic} />
        <div className={styles.textHolder}> 
          <span className={styles.heading}>3 Days Mara</span>
        </div>
    </div>
  )
}

export default Packagecard