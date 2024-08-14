import React from 'react';
import styles from './PageStyles.module.css';

const Profile = () => {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Welcome to Profile</h1>
      <p>This is the profile page.</p>
    </div>
  );
};

export default Profile;