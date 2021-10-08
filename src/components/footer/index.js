import React from 'react';
import styles from './styles.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_top}>
        <a href="mailto:support@dayshorts.com">Contact Me</a>
        <a href="https://ko-fi.com/joellu" target="_blank" rel="noreferrer">
          Buy Me a Coffee
        </a>
      </div>
      <div className={styles.footer_bottom}>
        © Illustrations designed by{' '}
        <a
          href="https://www.figma.com/@ashleykseo"
          target="_blank"
          rel="noreferrer"
        >
          Ashley Seo
        </a>{' '}
        under CC BY 4.0 license
      </div>
    </div>
  );
}
