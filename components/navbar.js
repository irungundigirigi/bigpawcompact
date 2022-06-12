import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Logo from '../public/full_Logo.png'
import styles from '../styles/Nav.module.css'
import { Navbar, Container, Nav } from 'react-bootstrap';

import React from 'react'

function navbar() {
  return (
    <div className={styles.nav}>
        <div className={styles.logoContainer}>
                <div className={styles.logo}>
                    <Image src={Logo}></Image>
                </div>
        </div>
        <p className={styles.navp}>
          <span className={styles.span}>
          BigPaw Adventure offers you a chance to tour in a unique and authentic way. Experience East Africas natural scenery,
          rich and diverse wildlife, fresh water lakes and magnificient mountains.
          </span>
        </p>
    </div>
  )
}

export default navbar