import React from 'react';
import styles from './PageStyles.module.css';

const Home = () => {
  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.pageTitle}>Welcome to UCT Student Guide</h2>
      <p>This is the home page. Here you can find information about the UCT Student Guide and how to use it.</p>
    </div>
  );
};

export default Home;