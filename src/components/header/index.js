import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import logo from '/public/header/logo.gif';

export default function Header() {
  return (
    <>
      <div className={styles.header_container}>
        <Image
          src={logo}
          width={60}
          height={60}
          className={styles.logo}
        ></Image>
        <p className={styles.text}>Avatar Mix</p>
      </div>
      <div className={styles.mask_top}>
        <Image
          src="/header/top_corner.svg"
          width={340}
          height={600}
          className={styles.mask}
        ></Image>
      </div>
      <div className={styles.mask_bottom}>
        <Image
          src="/header/bottom_corner.svg"
          width={305}
          height={180}
          className={styles.mask}
        ></Image>
      </div>
    </>
  );
}
