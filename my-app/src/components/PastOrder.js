import React, { useEffect,useState } from 'react';
import styles from '../CSS/PastOrder.module.css'; // Using CSS Modules
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function PastOrder() {
  let Navigate = useNavigate();
  const [email,setemail] = useState("");
  const [visibleOrders, setVisibleOrders] = useState(3); // Initially show 3 orders
  const [orders, setOrders] = useState([]); // State to hold fetched orders
  
  useEffect(() => {
    axios.get('http://localhost:5000/user',{
      withCredentials: true
    })
    .then(res => {
      const getemail = res.data.email;
      if(getemail === "")  return Navigate('/login');
      setemail(getemail);
      axios.post('http://localhost:5000/pastorder',{getemail})
      .then(res => {
        setOrders(res.data);
      })
      .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
  },[Navigate]);

  const showMoreOrders = () => {
    setVisibleOrders(prev => prev + 3);
  }
  
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.header}>Past Orders</div>
        <div id="order-container" className={styles['order-container']}>
          {orders.slice(0, visibleOrders).map((order, index) => (
            <div key={index} className={styles.order}>
              <div className={styles['order-ibnfo-top']}>
                <div className={styles['order-details']}>
                  <div className={styles['order-info']}>
                    <div>{order.order_id}</div>
                    <small>Date: {new Date(order.order_time).toLocaleString()}</small>
                  </div>
                  <div className={styles['item-list']}>
                    <p>Items: {order.ordered_items}</p>
                    <hr />
                  </div>
                </div>
                <div className={`${styles['order-status']} ${styles.outside}`}>
                  <div className={styles.cancelled}>
                    Status: {order.order_status}
                  </div>
                </div>
              </div>
              <div className={styles['button-group']}>
                <button className={`${styles.button} ${styles.reorder}`}>REORDER</button>
                <button className={`${styles.button} ${styles.help}`}>HELP</button>
              </div>
              <div className={styles['total-paid']}>
                Total Paid: <span className={styles.price}>₹ {order.order_price}</span>
              </div>
            </div>
          ))}
        </div>
        {visibleOrders < orders.length && ( 
          <button id="show-more-orders" className={styles['show-more']} onClick={showMoreOrders}>
            Show more Orders ▼
          </button>
        )}
      </div>
    </div>
  );
}
