import styles from "../styles/navbar.module.css";
import React from 'react';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="https://res.cloudinary.com/dddnxiqpq/image/upload/v1719296773/png_ab6gzn.png" alt="Logo" />
      </div>
      {/* <ul className={styles.links}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul> */}
    </nav>
  );
};

export default Navbar;

