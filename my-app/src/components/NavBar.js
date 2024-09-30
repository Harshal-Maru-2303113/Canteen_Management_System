import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../CSS/NavBar.module.css";

export default function NavBar({ aboutUs = "", login = "", signup = "" ,profile="",menu ="",pastorder="",home=""}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  const navigate = useNavigate();
  const aboutUsFlag = "navbar-right-side-" + aboutUs;
  const loginFlag = "navbar-right-side-" + login;
  const signUpFlag = "navbar-right-side-" + signup;
  const profileFlag = "navbar-right-side-" + profile;
  const menuFlag = "navbar-right-side-" + menu;
  const pastorderFlag = "navbar-right-side-" + pastorder;
  const homeFlag = "navbar-right-side-" + home;
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
              navigate("/home");
            }}
            className={styles[homeFlag]}
          >
            Home
          </div>
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
          <div
              onClick={() => {
                navigate("/pastorder");
                toggleMenu(); // Close the menu after clicking
              }}
              className={styles[pastorderFlag]}
            >
              Past Order
            </div>
          <div
              onClick={() => {
                navigate("/cart");
                toggleMenu(); // Close the menu after clicking
              }}
              className={styles[menuFlag]}
            >
              Menu
            </div>
          <div
              onClick={() => {
                navigate("/profile");
                toggleMenu(); // Close the menu after clicking
              }}
              className={styles[profileFlag]}
            >
              Profile
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
              navigate("/home");
            }}
            className={styles[homeFlag]}
          >
            Home
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
            <div
              onClick={() => {
                navigate("/cart");
                toggleMenu(); // Close the menu after clicking
              }}
              className={styles[menuFlag]}
            >
              Menu
            </div>
            <div
              onClick={() => {
                navigate("/profile");
                toggleMenu(); // Close the menu after clicking
              }}
              className={styles[profileFlag]}
            >
              Profile
            </div>
            <div
              onClick={() => {
                navigate("/pastorder");
                toggleMenu(); // Close the menu after clicking
              }}
              className={styles[pastorderFlag]}
            >
              Past Order
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
