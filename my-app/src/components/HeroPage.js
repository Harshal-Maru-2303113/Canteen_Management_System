import React,{useEffect} from "react";
import Heropage from "../CSS/HeroPage.module.css"; // Import the CSS module
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function HeroPage() {
  let Navigate = useNavigate();
  useEffect(() => {
    if (localStorage.length !== 1 || localStorage.getItem('val') !== '1') {
      return Navigate('/login');
    }
    else {
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
    }
  });
  return (
    <>
      <section className={Heropage.hero}>
        <div className={Heropage['hero-content']}>
          <h1 className={Heropage['hero-title']}>Welcome to Our Canteen</h1>
          <p className={Heropage['hero-description']}>
            Your one-stop solution for managing your canteen efficiently and
            effortlessly.
          </p>
          <div className={Heropage.button}>
            <a href="#menu" className={`${Heropage.btn} ${Heropage['btn-primary']}`}>
              View Menu
            </a>
            <a href="#order" className={`${Heropage.btn} ${Heropage['btn-secondary']}`}>
              Order Now
            </a>
          </div>
        </div>
        <div className={Heropage['hero-image']}>
          <img src="canteen-image.jpg" alt="Canteen" />
        </div>
      </section>
    </>
  );
}
