import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../CSS/NavBar.module.css";

export default function NavBar({ aboutUs = "", login = "", signup = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  const navigate = useNavigate();
  const aboutUsFlag = "navbar-right-side-" + aboutUs;
  const loginFlag = "navbar-right-side-" + login;
  const signUpFlag = "navbar-right-side-" + signup;

  return (
    <>
      <nav className={styles["navbar"]}>
        <div className={styles["navbar-left-side"]}>
          <div
            onClick={() => {
              navigate("/");
            }}
            className={styles["navbar-top-right-logo"]}
          ></div>
          <div className={styles["navbar-top-right-logo-text"]}>IIT Goa</div>
        </div>
        <div className={styles["navbar-right-side"]}>
          <div
            onClick={() => {
              navigate("/aboutUs");
            }}
            className={styles[aboutUsFlag]}
          >
            About Us
          </div>
          <div
            onClick={() => {
              navigate("/signup");
            }}
            className={styles[signUpFlag]}
          >
            Sign Up
          </div>
          <div
            onClick={() => {
              navigate("/login");
            }}
            className={styles[loginFlag]}
          >
            Login
          </div>
        </div>

        <div
          onClick={toggleMenu}
          className={`${styles["responsive-right-side"]} ${
            isOpen ? styles["open"] : ""
          }`}
        >
          <div
            className={`${styles["hamburger-icon"]} ${
              isOpen ? styles["open"] : ""
            }`}
          >
            <div className={styles["hamburger-bar"]}></div>
            <div className={styles["hamburger-bar"]}></div>
            <div className={styles["hamburger-bar"]}></div>
          </div>
          <div
            className={`${styles["hamburger-dropdown-menu"]} ${
              isOpen ? styles["open"] : ""
            }`}
          >
            <div
              onClick={() => {
                navigate("/aboutUs");
                toggleMenu(); // Close the menu after clicking
              }}
              className={styles[aboutUsFlag]}
            >
              About Us
            </div>
            <div
              onClick={() => {
                navigate("/signup");
                toggleMenu(); // Close the menu after clicking
              }}
              className={styles[signUpFlag]}
            >
              Sign Up
            </div>
            <div
              onClick={() => {
                navigate("/login");
                toggleMenu(); // Close the menu after clicking
              }}
              className={styles[loginFlag]}
            >
              Login
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
