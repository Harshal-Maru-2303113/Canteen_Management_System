import React, { useState, useEffect } from "react";
import styles from '../CSS/PaymentPage.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedMethod, setSelectedMethod] = useState('');
  const [email,setEmail] = useState("");
  const [items,setitem] = useState("");
  const [price,setprice] = useState("");
  const [date,setdate] = useState("");

  useEffect(() => {
    const getemail = location.state?.email;
    const getitems = location.state?.items;
    const getprice = location.state?.price;
    const getdate = location.state?.date;
    if (getemail === undefined || getitems === undefined || getprice === undefined || getdate === undefined) {
      return navigate('/',{replace:true});
    }
    setEmail(getemail);
    setitem(getitems);
    setprice(getprice);
    setdate(getdate);
  },[navigate,location.state]);

  const handleMethodChange = (e) => {
    setSelectedMethod(e.target.value);
  };

  const confirmOrder = (email,items,price,date) => {
    if(selectedMethod === ""){
      return console.log("Choose payment method");
    }
    axios.post('http://localhost:5000/order', {
      email,
      items,
      price,
      date
    })
    .then(res => {
      return navigate('/order', {
        state: {
          id: res.data.id
        },
        replace: true
      });
    })
    .catch(err => console.log(err));
  }

  const cancel = () => {
    return navigate('/',{replace: true});
  }

  return (
    <div className={styles.body}>
      <div className={styles.paymentContainer}>
        <h1 className={styles.title}>Complete Your Payment</h1>
        
        <div className={styles.orderDetails}>
          <h2 className={styles.orderDetailsTitle}>Order Details</h2>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Email:</span>
            <span className={styles.detailValue}>{email}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Items:</span>
            <span className={styles.detailValue}>{items}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Total Price:</span>
            <span className={styles.detailValue}>₹{price}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Date:</span>
            <span className={styles.detailValue}>{date}</span>
          </div>
        </div>

        <div className={styles.paymentOptions}>
          <div className={styles.radioGroup}>
            <input
              type="radio"
              id="upi"
              name="paymentMethod"
              value="UPI"
              checked={selectedMethod === 'UPI'}
              onChange={handleMethodChange}
              className={styles.radioInput}
            />
            <label htmlFor="upi" className={styles.radioLabel}>UPI Payment</label>
          </div>

          {selectedMethod === 'UPI' && (
            <div className={styles.paymentSection}>
              <input type="text" className={styles.inputField} placeholder="Enter UPI ID" />
            </div>
          )}

          <div className={styles.radioGroup}>
            <input
              type="radio"
              id="card"
              name="paymentMethod"
              value="Card"
              checked={selectedMethod === 'Card'}
              onChange={handleMethodChange}
              className={styles.radioInput}
            />
            <label htmlFor="card" className={styles.radioLabel}>Credit/Debit Card</label>
          </div>

          {selectedMethod === 'Card' && (
            <div className={styles.paymentSection}>
              <input type="text" className={styles.inputField} placeholder="Card Number" />
              <input type="text" className={styles.inputField} placeholder="Expiry Date (MM/YY)" />
              <input type="text" className={styles.inputField} placeholder="CVV" />
            </div>
          )}

          <div className={styles.radioGroup}>
            <input
              type="radio"
              id="netBanking"
              name="paymentMethod"
              value="NetBanking"
              checked={selectedMethod === 'NetBanking'}
              onChange={handleMethodChange}
              className={styles.radioInput}
            />
            <label htmlFor="netBanking" className={styles.radioLabel}>Net Banking</label>
          </div>

          {selectedMethod === 'NetBanking' && (
            <div className={styles.paymentSection}>
              <select className={styles.inputField}>
                <option value="">Select Bank</option>
                <option value="Bank1">Bank 1</option>
                <option value="Bank2">Bank 2</option>
              </select>
            </div>
          )}
        </div>

        <div className={styles.radioGroup}>
          <input
            type="radio"
            id="cash"
            name="paymentMethod"
            value="CASH"
            checked={selectedMethod === 'CASH'}
            onChange={handleMethodChange}
            className={styles.radioInput}
          />
          <label htmlFor="cash" className={styles.radioLabel}>Cash on Delivery</label>
        </div>

        <div className={styles.buttonGroup}>
          <button className={styles.confirmBtn}
          onClick={() => confirmOrder(email, items, price, date)}>Confirm Order</button>
          <button className={styles.cancelBtn}
          onClick={() => cancel()}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
