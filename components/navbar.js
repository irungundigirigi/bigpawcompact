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
        <div className={styles.navp}>
          <span className={styles.span}>
          We offer you a chance to tour in a unique and authentic way. Experience East Africas natural scenery,
          rich and diverse wildlife, fresh water lakes and magnificient mountains.
          </span>
          <div className={styles.navlinks}>
              <div className={styles.links}>
                <div className={styles.link}>
                    <Link href="/expenses">Home</Link>
                </div>
                <div className={styles.link}>
                    <Link href="/expenses">Hotel bookings</Link>
                </div>
                <div className={styles.link}>
                    <Link href="/expenses">Nairobi car hire</Link>
                </div>
                <div className={styles.link}>
                    <Link href="/expenses">Nairobi excursions</Link>
                </div>
                <div className={styles.link}>
                    <Link href="/expenses">Nairobi car hire</Link>
                </div>
                <div className={styles.link}>
                    <Link href="/expenses">Daily Nairobi-Arusha</Link>
                </div>
                <div className={styles.link}>
                    <Link href="/expenses">Contact</Link>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default navbar