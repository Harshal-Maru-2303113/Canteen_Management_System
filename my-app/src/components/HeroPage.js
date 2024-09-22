import React from "react";
import "../CSS/HeroPage.css";


export default function HeroPage() {
  return (
    <>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to Our Canteen</h1>
            <p className="hero-description">
              Your one-stop solution for managing your canteen efficiently and
              effortlessly.
            </p>
            <div className="button">
            <a href="#menu" className="btn btn-primary">
              View Menu
            </a>
            <a href="#order" className="btn btn-secondary">
              Order Now
            </a>
            </div>
          </div>
          <div className="hero-image">
            <img src="canteen-image.jpg" alt="Canteen" />
          </div>
        </section>
    </>
  );
}
