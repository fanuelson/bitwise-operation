import React from 'react';
import styles from './header.module.scss';

const {
  header,
  info
} = styles;

function Header() {
  return (
    <div className={header}  >
      <h1>Bitwise Operation</h1>
      <h2>By Fanuel Nunes</h2>
      <div className={info}>
        <p>
          In digital computer programming, a bitwise operation operates on one or more bit patterns or
          binary numerals at the level of their individual bits.
        </p>
        <p>
          It is a fast, simple action directly supported by the processor, and is used to manipulate
          values for comparisons and calculations.
        </p>
      </div>
    </div>
  );
}

export default Header;
