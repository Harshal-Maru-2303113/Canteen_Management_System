import React from "react";
import "../CSS/HomePage.css";

export default function HomePage() {
  return (
    <div className="main-homepage-container">
      <div className="menu-item">
        <div className="menu-items-title">
          <h1>Explore Menu</h1>
        </div>
        <div className="slider-wrapper">
          {/* Left arrow */}
          <button className="slider-arrow left-arrow">&#9664;</button>

          {/* Scrollable container */}
          <div className="menu-item-container">
            {/* Card 1 */}
            <div className="menu-item-card">
              <div className="menu-item-card-main">
                <div className="menu-item-card-text">
                  <h4>Pizza</h4>
                  <h4>Price : 299 Rs</h4>
                  <h4>Category: Fast Food</h4>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="menu-item-card">
              <div className="menu-item-card-main">
                <div className="menu-item-card-text">
                  <h4>Burger</h4>
                  <h4>Price : 199 Rs</h4>
                  <h4>Category: Fast Food</h4>
                </div>
              </div>
            </div>
            <div className="menu-item-card">
              <div className="menu-item-card-main">
                <div className="menu-item-card-text">
                  <h4>Burger</h4>
                  <h4>Price : 199 Rs</h4>
                  <h4>Category: Fast Food</h4>
                </div>
              </div>
            </div>

            <div className="menu-item-card">
              <div className="menu-item-card-main">
                <div className="menu-item-card-text">
                  <h4>Burger</h4>
                  <h4>Price : 199 Rs</h4>
                  <h4>Category: Fast Food</h4>
                </div>
              </div>
            </div>

            {/* Add more cards as needed */}
          </div>

          {/* Right arrow */}
          <button className="slider-arrow right-arrow">&#9654;</button>
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-items-title">
          <h1>previous Order</h1>
        </div>
        <div className="slider-wrapper">
          {/* Left arrow */}
          <button className="slider-arrow left-arrow">&#9664;</button>

          {/* Scrollable container */}
          <div className="menu-item-container">
            {/* Card 1 */}
            <div className="menu-item-card">
              <div className="menu-item-card-main">
                <div className="menu-item-card-text">
                  <h4>Pizza</h4>
                  <h4>Price : 299 Rs</h4>
                  <h4>Category: Fast Food</h4>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="menu-item-card">
              <div className="menu-item-card-main">
                <div className="menu-item-card-text">
                  <h4>Burger</h4>
                  <h4>Price : 199 Rs</h4>
                  <h4>Category: Fast Food</h4>
                </div>
              </div>
            </div>
            <div className="menu-item-card">
              <div className="menu-item-card-main">
                <div className="menu-item-card-text">
                  <h4>Burger</h4>
                  <h4>Price : 199 Rs</h4>
                  <h4>Category: Fast Food</h4>
                </div>
              </div>
            </div>

            <div className="menu-item-card">
              <div className="menu-item-card-main">
                <div className="menu-item-card-text">
                  <h4>Burger</h4>
                  <h4>Price : 199 Rs</h4>
                  <h4>Category: Fast Food</h4>
                </div>
              </div>
            </div>

            {/* Add more cards as needed */}
          </div>

          {/* Right arrow */}
          <button className="slider-arrow right-arrow">&#9654;</button>
        </div>
      </div>
    </div>
  );
}
