import React from "react";
import Heropage from "../CSS/HeroPage.module.css"; // Import the CSS module

export default function HeroPage() {
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
