// src/CardSlider.js
import React, { useRef } from 'react';
import PrevOrderCard from './PrevOrderCard';
import styles from '../CSS/PrevOrderCarousel.module.css'; // Import the CSS module

const orders = [
  "Order 1: Margherita Pizza - 2024-01-15",
  "Order 2: Sushi Platter - 2024-02-20",
  "Order 3: Caesar Salad - 2024-03-05",
  "Order 4: Spaghetti Carbonara - 2024-04-10",
  "Order 5: Beef Tacos - 2024-05-15",
  "Order 1: Margherita Pizza - 2024-01-15",
  "Order 2: Sushi Platter - 2024-02-20",
  "Order 3: Caesar Salad - 2024-03-05",
  "Order 4: Spaghetti Carbonara - 2024-04-10",
  "Order 5: Beef Tacos - 2024-05-15"
];

const PrevOrderCarousel = () => {
  const sliderRef = useRef(null);
  const cardWidth = 320; // Adjust according to your card width + margin

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: sliderRef.current.scrollLeft + cardWidth,
        behavior: 'smooth', // Smooth scroll effect
      });
    }
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: sliderRef.current.scrollLeft - cardWidth,
        behavior: 'smooth', // Smooth scroll effect
      });
    }
  };

  return (
    <div className={styles.sliderContainer}>
      <button className={`${styles.scrollButton} ${styles.left}`} onClick={scrollLeft}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <div className={styles.slider} ref={sliderRef}>
        {orders.map((order, index) => (
          <PrevOrderCard key={index} order={order} />
        ))}
      </div>
      <button className={`${styles.scrollButton} ${styles.right}`} onClick={scrollRight}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default PrevOrderCarousel;
