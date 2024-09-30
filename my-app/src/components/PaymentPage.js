import React, { useState, useEffect } from "react";
import styles from '../CSS/PaymentPage.module.css';

const PaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleMethodChange = (e) => {
    setSelectedMethod(e.target.value);
  };

  return (
    <div className={styles.body}> 
      <div className={styles.paymentContainer}>
        <h1 className={styles.title}>Complete Your Payment</h1>

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

        <div className={styles.buttonGroup}>
          <button className={styles.confirmBtn}>Confirm Order</button>
          <button className={styles.cancelBtn}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
