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
             The Masai Mara is not only home to the lions of "Big Cat Diary"
             but also the temporary residence of the 'Great Wildebeast Migration', the masai Warriors and 
             home to some of the most luxurious safari lodges in Africa.
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