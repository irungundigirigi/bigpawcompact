import styles from '../styles/treecard.module.css';
import Image from 'next/image';
import image1 from '../public/3.JPG'

import React from 'react'

function Treecard() {
  return (
    <div className={styles.treeCard}>
        <div className={styles.imgContainer}>
            <Image src={image1} />
        </div>
        <div className={styles.content}>
            <div className={styles.header}>MASAI MARA</div>
            <div className={styles.paragraph}>
            This is a short safari featuring Maasai Mara National Reserve.
            The safari departs Nairobi in the morning and involves a drive down to the the floor of the Rift Valley, making a stop at view point to see the escarpment and the awesome sight of the valley and the features there in. To arrive Maasai Mara in timefor lunch, followed by a late afternoon game drive that introduces you to Kenyas most popular game sanctuary.
            </div>
            <div className={styles.bubbles}>
                <div className={styles.bubble}> 3 days mara</div>
                <div className={styles.bubble}> 2 days</div>
                <div className={styles.bubble}> 2 days 3 nights mara</div>
                <div className={styles.bubble}> masai mara / l. nakuru</div>
                <div className={styles.bubble}></div>
            </div>

        </div>
    </div>
  )
}

export default Treecard