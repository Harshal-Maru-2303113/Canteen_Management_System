import React from "react";
import homepage from "../CSS/HomePage.module.css";

export default function HomePage() {
  return (
    <div className={homepage.mainHomepageContainer}>
      <div className={homepage.menuItem}>
        <div className={homepage.menuItemsTitle}>
          <h1>Explore Menu</h1>
        </div>
        <div className={homepage.sliderWrapper}>
          {/* Left arrow */}
          <button className={homepage.sliderArrow + ' ' + homepage.leftArrow}>&#9664;</button>

          {/* Scrollable container */}
          <div className={homepage.menuItemContainer}>
            {/* Card 1 */}
            <div className={homepage.menuItemCard}>
              <div className={homepage.menuItemCardMain}>
                <div className={homepage.menuItemCardText}>
                  <h4>Pizza</h4>
                  <h4>Price : 299 Rs</h4>
                  <h4>Category: Fast Food</h4>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className={homepage.menuItemCard}>
              <div className={homepage.menuItemCardMain}>
                <div className={homepage.menuItemCardText}>
                  <h4>Burger</h4>
                  <h4>Price : 199 Rs</h4>
                  <h4>Category: Fast Food</h4>
                </div>
              </div>
            </div>

            {/* Add more cards as needed */}
          </div>

          {/* Right arrow */}
          <button className={homepage.sliderArrow + ' ' + homepage.rightArrow}>&#9654;</button>
        </div>
      </div>

      <div className={homepage.menuItem}>
        <div className={homepage.menuItemsTitle}>
          <h1>Previous Order</h1>
        </div>
        <div className={homepage.sliderWrapper}>
          {/* Left arrow */}
          <button className={homepage.sliderArrow + ' ' + homepage.leftArrow}>&#9664;</button>

          {/* Scrollable container */}
          <div className={homepage.menuItemContainer}>
            {/* Card 1 */}
            <div className={homepage.menuItemCard}>
              <div className={homepage.menuItemCardMain}>
                <div className={homepage.menuItemCardText}>
                  <h4>Pizza</h4>
                  <h4>Price : 299 Rs</h4>
                  <h4>Category: Fast Food</h4>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className={homepage.menuItemCard}>
              <div className={homepage.menuItemCardMain}>
                <div className={homepage.menuItemCardText}>
                  <h4>Burger</h4>
                  <h4>Price : 199 Rs</h4>
                  <h4>Category: Fast Food</h4>
                </div>
              </div>
            </div>

            {/* Add more cards as needed */}
          </div>

          {/* Right arrow */}
          <button className={homepage.sliderArrow + ' ' + homepage.rightArrow}>&#9654;</button>
        </div>
      </div>
    </div>
  );
}
