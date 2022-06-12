import React from 'react'
import Image from 'next/image'
import icon from '../public/whatsapp.png'
import styles from '../styles/Whatsapp.module.css'
import Link from 'next/link';


const WhatsappBtn = () => {
  return (
    <div className={styles.whatsappIcon}>
        <Link href=" https://wa.me/254720859681">
            <Image  src={icon}/>
        </Link>
        
    </div>
  )
}

export default WhatsappBtn