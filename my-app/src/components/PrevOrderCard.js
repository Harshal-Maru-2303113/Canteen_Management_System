// src/PrevOrderCard.js
import React from 'react';
import styles from '../CSS/PrevOrderCard.module.css'; // Import the CSS module

const PrevOrderCard = ({ order }) => {
  return (
    <div className={styles.card}>
      <h3>{order}</h3>
    </div>
  );
};

export default PrevOrderCard;
