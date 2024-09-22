import React from "react";
import { Link } from "react-router-dom";
import Navbar from '../CSS/NavBar.module.css'

export default function NavBar() {
  return (
    <>
      <nav className={Navbar.navbar}>
        <div className={NavBar["navbar-container"]}>
          <Link className={Navbar.Logo} to={"/"}>Logo</Link>

          <div className={Navbar.menu} id="menu">
            <Link to={"/login"} className="login">
              Login
            </Link>
          </div>

          <div className={Navbar.hamburger} id="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </>
  );
}
