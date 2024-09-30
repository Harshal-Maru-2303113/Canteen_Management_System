import React, { useEffect } from "react";
import homepage from "../CSS/HomePage.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  let Navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:5000/user', {
      withCredentials: true
    })
    .then(res => {
      if(res.data.email === "") return Navigate('/login');
    })
    .catch(err => console.log(err));
  }, [Navigate]);

  return (
    <div className={homepage.mainHomepageContainer}>
      <h1 className={homepage.title}>Welcome to Your Dashboard</h1>
      <div className={homepage.navContainer}>
        <div className={homepage.navCard} onClick={() => Navigate('/cart')}>
          <h3>Cart</h3>
          <p>View and manage your items</p>
        </div>
        <div className={homepage.navCard} onClick={() => Navigate('/order')}>
          <h3>Orders</h3>
          <p>Check your current orders</p>
        </div>
        <div className={homepage.navCard} onClick={() => Navigate('/pastorder')}>
          <h3>Past Orders</h3>
          <p>Review your order history</p>
        </div>
        <div className={homepage.navCard} onClick={() => Navigate('/profile')}>
          <h3>Profile</h3>
          <p>Edit your profile settings</p>
        </div>
      </div>
    </div>
  );
}
