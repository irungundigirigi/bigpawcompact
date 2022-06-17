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
          <p className={styles.description}>
            This is a short safari featuring Maasai Mara National Reserve. 
            The safari departs Nairobi in the morning and involves a drive down to the the floor of the Rift Valley,
            making a stop at view point to see the escarpment and the awesome sight of the valley and the features there in. 
            To arrive Maasai Mara in timefor lunch, followed by a late afternoon game drive that introduces you to
            Kenyas most popular game sanctuary.
          </p>
        </div>
    </div>
  )
}

export default Packagecard