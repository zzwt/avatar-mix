import React, { useState } from 'react';
import styles from './styles.module.css';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';

export default function Button({ content, onClick, options, ...rest }) {
  // const classname = active
  //   ? `${styles.button} ${styles.button_active}`
  //   : styles.button;

  const [active, setActive] = useState(false);

  const toggleDropdown = () => {
    setActive(!active);
  };

  return (
    <>
      <div className={styles.dropdown_container} onClick={toggleDropdown}>
        {content}
        {active ? (
          <MdArrowDropUp className={styles.icon}></MdArrowDropUp>
        ) : (
          <MdArrowDropDown className={styles.icon}></MdArrowDropDown>
        )}
        {active && (
          <div className={styles.dropdown_list}>
            {options.map((option, index) => {
              return (
                <input
                  className={styles.item}
                  key={index}
                  type="button"
                  value={option}
                  onClick={onClick}
                ></input>
              );
            })}
          </div>
        )}
      </div>
    </>
    //   <select onChange={downLoadImage}>
    //   <option value="" selected disabled hidden>
    //     Download
    //   </option>
    //   <option value="svg">SVG</option>
    //   <option value="png">PNG</option>
    // </select>
  );
}
