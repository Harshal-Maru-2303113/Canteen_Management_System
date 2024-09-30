import React from "react";
import Heropage from "../CSS/HeroPage.module.css"; // Import the CSS module
import {Link} from "react-router-dom";

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
          <Link to={"/cart"} className={`${Heropage.btn} ${Heropage['btn-primary']}`}>
              View Menu
            </Link>
            
          </div>
        </div>
        <div className={Heropage['hero-image']}>
          <img src="canteen-image.jpg" alt="Canteen" />
        </div>
      </section>
    </>
  );
}
