import React, { useEffect } from "react";
import homepage from "../CSS/HomePage.module.css";
import MenuCardCarousel from "./MenuCardCarousel";
import PrevOrderCarousel from "./PrevOrderCarousel";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function HomePage() {
  let Navigate = useNavigate();
  useEffect(() => {
    axios.post('http://localhost:5000/login', {}, {
      withCredentials: 'include'
    })
      .then(res => {
        if (res.data.message !== "") {
          return Navigate('/login');
        }
      })
      .catch(err => {
        return Navigate('/login');
      });
  });
  return (
    <div className={homepage.mainHomepageContainer}>
      <MenuCardCarousel />
      <br /><br />
      <PrevOrderCarousel />
    </div>
  );
}
