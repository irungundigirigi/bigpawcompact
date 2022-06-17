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
            <div className={styles.header}>Masai Mara</div>
            <div className={styles.paragraph}>
                Experience the beauty of Masai Mara like never before,
                and also the wildbeest migration and the deadly cross
                of the river.
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