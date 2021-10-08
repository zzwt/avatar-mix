import React from 'react';
import styles from './styles.module.css';

export default function Button({ content, onClick, active = true, ...rest }) {
  const classname = active
    ? `${styles.button} ${styles.button_active}`
    : styles.button;

  return (
    <div className={classname} onClick={onClick} {...rest}>
      {content}
    </div>
  );
}
