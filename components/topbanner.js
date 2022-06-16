import React from 'react'
import styles from '../styles/banner.module.css';
import { AiFillFacebook } from 'react-icons/ai';

function Topbanner() {
  return (
    <div className={styles.banner}>
        <span className={styles.span}> 
            Call Centre : +254 720 859 681  |   
        </span>
        <span className={styles.span}>
          bigpawadventuresafaris@gmail.com
        </span>
        <span className={styles.span}>
          <div className={styles.socialLink}><AiFillFacebook className={styles.socialIcon} /> <span className={styles.socialLabel} >BigPaw Adventure</span></div>
        
        </span>
    </div>
  )
}

export default Topbanner