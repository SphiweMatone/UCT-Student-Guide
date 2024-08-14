import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><Link to="/" className={styles.navLink}>Home</Link></li>
        <li className={styles.navItem}><Link to="/quiz" className={styles.navLink}>Quizzes</Link></li>
        <li className={styles.navItem}><Link to="/forum" className={styles.navLink}>Forum</Link></li>
        <li className={styles.navItem}><Link to="/resources" className={styles.navLink}>Learning Resources</Link></li>
        <li className={styles.navItem}><Link to="/profile" className={styles.navLink}>Profile</Link></li>
        <li className={styles.navItem}><Link to="/login" className={styles.navLink}>Login</Link></li>
        <li className={styles.navItem}><Link to="/register" className={styles.navLink}>Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;