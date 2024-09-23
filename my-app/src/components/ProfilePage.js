import React from 'react';
import styles from '../CSS/ProfilePage.module.css';

export default function ProfilePage() {
  const editName = () => {
    // Function to edit name logic
  };

  const editEmail = () => {
    // Function to edit email logic
  };

  const signOut = () => {
    // Function to sign out logic
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.profileCard}>
          <div className={styles.profileHeader}>
            <div className={styles.profilePic}>
              <img src="https://via.placeholder.com/100" alt="Profile Picture" />
            </div>
            <div className={styles.profileName}>
              <h2>John Doe</h2>
            </div>
          </div>
          <div className={styles.profileInfo}>
            <div className={styles.infoItem}>
              <label>Name:</label>
              <span id="profile-name">John Doe</span>
              <button className={`${styles.btn} ${styles.iconBtn}`} onClick={editName}>✏️</button>
            </div>
            <div className={styles.infoItem}>
              <label>Email:</label>
              <span id="profile-email">john.doe@example.com</span>
              <button className={`${styles.btn} ${styles.iconBtn}`} onClick={editEmail}>✏️</button>
            </div>
          </div>
          <div className={styles.profileActions}>
            <button className={`${styles.btn} ${styles.signoutBtn}`} onClick={signOut}>Sign Out</button>
          </div>
        </div>
      </div>
    </div>
  );
}
