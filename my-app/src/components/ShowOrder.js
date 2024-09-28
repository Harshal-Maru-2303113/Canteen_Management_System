import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../CSS/showOrder.module.css'; // Assuming you have a CSS file for styles

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // const fetchOrders = async () => {
    //   try {
    //     const response = await axios.post('http://localhost:5000/pastorder', {}, { withCredentials: true });
    //     setOrders(response.data);
    //   } catch (err) {
    //     console.error('Error fetching orders:', err);
    //     setError('Could not fetch orders. Please try again later.');
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    // fetchOrders();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.ordersContainer}>
      <h2>Your Past Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table className={styles.ordersTable}>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Items</th>
              <th>Total Price</th>
              <th>Order Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.order_id}>
                <td>{order.order_id}</td>
                <td>{order.ordered_items}</td>
                <td>${order.order_price.toFixed(2)}</td>
                <td>{new Date(order.order_time).toLocaleString()}</td>
                <td>{order.order_status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Order;
