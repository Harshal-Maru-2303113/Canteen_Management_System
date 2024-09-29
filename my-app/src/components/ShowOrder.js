import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../CSS/showOrder.module.css'; // Assuming you have a CSS file for styles
import { useNavigate, useLocation } from 'react-router-dom';

const ShowOrder = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state?.id; // Extract the order ID from location state if available
  const [email, setEmail] = useState("");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    axios.get('http://localhost:5000/user', { withCredentials: true })
      .then(res => {
        const getEmail = res.data.email;
        if (getEmail === "") return navigate('/login'); // Redirect to login if not authenticated
        setEmail(getEmail);

        axios.post('http://localhost:5000/showorder', {
          id,
          email: getEmail
        })
        .then(res => {
          setOrders(res.data);
          setLoading(false); // Set loading to false when data is received
        })
        .catch(err => {
          console.error('Error fetching orders:', err);
          setLoading(false); // Set loading to false even if there's an error
        });
      })
      .catch(err => {
        console.error('Error fetching user:', err);
        setLoading(false); // Set loading to false in case of error
      });
  }, [navigate, id]);

  if (loading) {
    return <p>Loading...</p>;
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

export default ShowOrder;
