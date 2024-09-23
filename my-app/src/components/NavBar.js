import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from '../CSS/NavBar.module.css';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <nav className={Navbar.navbar}>
        <div className={Navbar["navbar-container"]}>
          <Link className={Navbar.Logo} to={"/"}>Logo</Link>

          <div className={`${Navbar.menu} ${isOpen ? Navbar.show : Navbar.hide}`} id="menu">
            <Link to={"/home/cart"} className={Navbar.cartButton}>
              Cart
            </Link>
            <Link to={"/login"} className="login">
              Login
            </Link>
          </div>

          <div className={Navbar.hamburger} id="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </>
  );
}
