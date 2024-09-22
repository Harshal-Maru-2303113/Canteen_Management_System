import React from "react";
import { Link } from "react-router-dom";
import '../CSS/NavBar.css'

export default function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link className="Logo" to={"/"}>Logo</Link>

          <div className="menu" id="menu">
            <Link to={"/login"} className="login">
              Login
            </Link>
          </div>

          <div className="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </>
  );
}
