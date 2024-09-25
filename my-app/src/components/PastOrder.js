import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from '../CSS/PastOrder.module.css'; // Using CSS Modules

export default function PastOrder() {
  let Navigate = useNavigate();
  useEffect(() => {
    axios.post('http://localhost:5000/login', {}, {
      withCredentials: 'include'
    })
      .then(res => {
        if (res.data.message !== "") {
          return Navigate('/login');
        }
      })
      .catch(err => {
        return Navigate('/login');
      });
  });
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.header}>Past Orders</div>

        <div id="order-container" className={styles['order-container']}>
          <div className={styles.order}>
            <div className={styles['order-ibnfo-top']}>
              <div className={styles['order-details']}>
                <div className={styles['order-info']}>
                  Chetna Gathiya Rath
                  <small>Memnagar</small>
                  <small>ORDER #180775651064097 | Wed, Jul 24, 2024, 12:57 PM</small>
                </div>
                <a href="#" className={styles['view-details']}>VIEW DETAILS</a>
                <div className={styles['item-list']}>
                  <p>Khaman Nylon x 1, Vati Dal Khaman x 1</p>
                  <hr />
                </div>
              </div>
              <div className={`${styles['order-status']} ${styles.outside}`}>
                <div className={styles.cancelled}>
                  Cancelled on Wed, Jul 24, 2024, 01:54 PM ⚠️
                </div>
              </div>
            </div>
            <div className={styles['button-group']}>
              <button className={`${styles.button} ${styles.reorder}`}>REORDER</button>
              <button className={`${styles.button} ${styles.help}`}>HELP</button>
            </div>
            <div className={styles['total-paid']}>
              Total Paid: <span className={styles.price}>₹ 289</span>
            </div>
          </div>
          <div className={styles.order}>
            <div className={styles['order-ibnfo-top']}>
              <div className={styles['order-details']}>
                <div className={styles['order-info']}>
                  Chetna Gathiya Rath
                  <small>Memnagar</small>
                  <small>ORDER #180775651064097 | Wed, Jul 24, 2024, 12:57 PM</small>
                </div>
                <a href="#" className={styles['view-details']}>VIEW DETAILS</a>
                <div className={styles['item-list']}>
                  <p>Khaman Nylon x 1, Vati Dal Khaman x 1</p>
                  <hr />
                </div>
              </div>
              <div className={`${styles['order-status']} ${styles.outside}`}>
                <div className={styles.cancelled}>
                  Cancelled on Wed, Jul 24, 2024, 01:54 PM ⚠️
                </div>
              </div>
            </div>
            <div className={styles['button-group']}>
              <button className={`${styles.button} ${styles.reorder}`}>REORDER</button>
              <button className={`${styles.button} ${styles.help}`}>HELP</button>
            </div>
            <div className={styles['total-paid']}>
              Total Paid: <span className={styles.price}>₹ 289</span>
            </div>
          </div>
          <div className={styles.order}>
            <div className={styles['order-ibnfo-top']}>
              <div className={styles['order-details']}>
                <div className={styles['order-info']}>
                  Chetna Gathiya Rath
                  <small>Memnagar</small>
                  <small>ORDER #180775651064097 | Wed, Jul 24, 2024, 12:57 PM</small>
                </div>
                <a href="#" className={styles['view-details']}>VIEW DETAILS</a>
                <div className={styles['item-list']}>
                  <p>Khaman Nylon x 1, Vati Dal Khaman x 1</p>
                  <hr />
                </div>
              </div>
              <div className={`${styles['order-status']} ${styles.outside}`}>
                <div className={styles.cancelled}>
                  Cancelled on Wed, Jul 24, 2024, 01:54 PM ⚠️
                </div>
              </div>
            </div>
            <div className={styles['button-group']}>
              <button className={`${styles.button} ${styles.reorder}`}>REORDER</button>
              <button className={`${styles.button} ${styles.help}`}>HELP</button>
            </div>
            <div className={styles['total-paid']}>
              Total Paid: <span className={styles.price}>₹ 289</span>
            </div>
          </div>
          <div className={styles.order}>
            <div className={styles['order-ibnfo-top']}>
              <div className={styles['order-details']}>
                <div className={styles['order-info']}>
                  Chetna Gathiya Rath
                  <small>Memnagar</small>
                  <small>ORDER #180775651064097 | Wed, Jul 24, 2024, 12:57 PM</small>
                </div>
                <a href="#" className={styles['view-details']}>VIEW DETAILS</a>
                <div className={styles['item-list']}>
                  <p>Khaman Nylon x 1, Vati Dal Khaman x 1</p>
                  <hr />
                </div>
              </div>
              <div className={`${styles['order-status']} ${styles.outside}`}>
                <div className={styles.cancelled}>
                  Cancelled on Wed, Jul 24, 2024, 01:54 PM ⚠️
                </div>
              </div>
            </div>
            <div className={styles['button-group']}>
              <button className={`${styles.button} ${styles.reorder}`}>REORDER</button>
              <button className={`${styles.button} ${styles.help}`}>HELP</button>
            </div>
            <div className={styles['total-paid']}>
              Total Paid: <span className={styles.price}>₹ 289</span>
            </div>
          </div>
          <div className={styles.order}>
            <div className={styles['order-ibnfo-top']}>
              <div className={styles['order-details']}>
                <div className={styles['order-info']}>
                  Chetna Gathiya Rath
                  <small>Memnagar</small>
                  <small>ORDER #180775651064097 | Wed, Jul 24, 2024, 12:57 PM</small>
                </div>
                <a href="#" className={styles['view-details']}>VIEW DETAILS</a>
                <div className={styles['item-list']}>
                  <p>Khaman Nylon x 1, Vati Dal Khaman x 1</p>
                  <hr />
                </div>
              </div>
              <div className={`${styles['order-status']} ${styles.outside}`}>
                <div className={styles.cancelled}>
                  Cancelled on Wed, Jul 24, 2024, 01:54 PM ⚠️
                </div>
              </div>
            </div>
            <div className={styles['button-group']}>
              <button className={`${styles.button} ${styles.reorder}`}>REORDER</button>
              <button className={`${styles.button} ${styles.help}`}>HELP</button>
            </div>
            <div className={styles['total-paid']}>
              Total Paid: <span className={styles.price}>₹ 289</span>
            </div>
          </div>
        </div>
        <button id="show-more-orders" className={styles['show-more']}>
          Show more Orders ▼
        </button>
      </div>
    </div>
  );
}
