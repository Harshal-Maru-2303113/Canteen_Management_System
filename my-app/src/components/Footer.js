import React from "react";
import "../CSS/Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h4>About Us</h4>
            <p>
              We are a company committed to providing the best services to our
              customers with high-quality products and excellent support.
            </p>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact Us</h4>
            <ul>
              <li>Email: info@example.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Location: 123 Main St, City, Country</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#">
                <img src="logo512.png" alt="Facebook" />
              </a>
              <a href="#">
                <img src="logo512.png" alt="Twitter" />
              </a>
              <a href="#">
                <img src="logo512.png" alt="Instagram" />
              </a>
              <a href="#">
                <img src="logo512.png" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
