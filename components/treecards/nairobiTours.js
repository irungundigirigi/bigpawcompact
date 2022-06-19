import styles from '../../styles/treecard.module.css';
import Image from 'next/image';
import image1 from '../../public/city_tours.jpg'

import React from 'react'

function CityTours() {
  return (
    <div className={styles.treeCard}>
        <div className={styles.imgContainer}>
            <Image src={image1} />
        </div>
        <div className={styles.content}>
            <div className={styles.header}>NAIROBI CITY TOURS</div>
            <div className={styles.paragraph}>
            There is a lot of short tours and excursions Nairobi offers like going for game drives at the Nairobi National Park,
            David Sheldrick Elephant Orphanage, Karen Blixen Museum and Giraffe Centre,
            Nairobi National Museum, Nairobi Railway Museum, African Heritage House Nairobi Half Day Tour,
            Nairobi Mamba Village, shopping for curios at the City Market or Maasai Market and many more exciting Nairobi
            Adventures sightseeing tours to visit to and which you can choose from to explore and you and your loved ones will 
            definitely enjoy seeing various attractions.

            </div>
            <div className={styles.bubbles}>
                <div className={styles.bubble}>Tamarind resturant</div>
                <div className={styles.bubble}>Carnivore</div>
                <div className={styles.bubble}>Dalphine Sheldrick Orphan age-Daily</div>
                <div className={styles.bubble}>Lake Nakuru Day trip</div>
                <div className={styles.bubble}></div>
            </div>

        </div>
    </div>
  )
}

export default CityTours