import React, { useEffect, useRef } from 'react';
import styles from '../CSS/PastOrder.module.css';

export default function PastOrder() {
  const orderContainerRef = useRef(null);
  const showMoreButtonRef = useRef(null);

  useEffect(() => {
    const orderContainer = orderContainerRef.current;
    const showMoreButton = showMoreButtonRef.current;

    let visibleOrders = 4;
    const totalOrders = 10;

    // Initially hide all orders after the first four
    const orders = Array.from(orderContainer.children);
    orders.forEach((order, index) => {
      if (index >= visibleOrders) {
        order.style.display = 'none';
      }
    });

    showMoreButton.addEventListener('click', function () {
      // Reveal four more orders when button is clicked
      let newVisibleOrders = visibleOrders + 4;
      if (newVisibleOrders > totalOrders) newVisibleOrders = totalOrders;

      for (let i = visibleOrders; i < newVisibleOrders; i++) {
        orders[i].style.display = 'flex';
        orders[i].style.animation = 'fadeInUp 0.8s ease-in-out forwards';
      }

      visibleOrders = newVisibleOrders;

      // Hide the button if all orders are visible
      if (visibleOrders === totalOrders) {
        showMoreButton.style.display = 'none';
      }

      // Smooth scrolling to the newly revealed order
      orders[newVisibleOrders - 1].scrollIntoView({ behavior: 'smooth' });
    });

    return () => {
      // Clean up event listener
      showMoreButton.removeEventListener('click', () => {});
    };
  }, []);

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.header}>Past Orders</div>

        <div ref={orderContainerRef} className={styles.orderContainer}>
          {/* Repeat this block for each order */}
          {Array.from({ length: 10 }, (_, index) => (
            <div className={styles.order} key={index}>
              <div className={styles.orderInfoTop}>
                <div className={styles.orderDetails}>
                  <div className={styles.orderInfo}>
                    Chetna Gathiya Rath
                    <small>Memnagar</small>
                    <small>ORDER #180775651064097 | Wed, Jul 24, 2024, 12:57 PM</small>
                  </div>
                  <a href="#" className={styles.viewDetails}>VIEW DETAILS</a>
                  <div className={styles.itemList}>
                    <p>Khaman Nylon x 1, Vati Dal Khaman x 1</p>
                    <hr />
                  </div>
                </div>
                <div className={`${styles.orderStatus} ${styles.outside}`}>
                  <div className={styles.cancelled}>Cancelled on Wed, Jul 24, 2024, 01:54 PM ⚠️</div>
                </div>
              </div>
              <div className={styles.buttonGroup}>
                <button className={`${styles.button} ${styles.reorder}`}>REORDER</button>
                <button className={`${styles.button} ${styles.help}`}>HELP</button>
              </div>
              <div className={styles.totalPaid}>
                Total Paid: <span className={styles.price}>₹ 289</span>
              </div>
            </div>
          ))}
        </div>

        <button ref={showMoreButtonRef} className={styles.showMore}>Show more Orders ▼</button>
      </div>
    </div>
  );
}
