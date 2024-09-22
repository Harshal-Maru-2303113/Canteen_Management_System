import React from "react";
import homepage from "../CSS/HomePage.module.css";
import MenuCardCarousel from "./MenuCardCarousel";
import PrevOrderCarousel from "./PrevOrderCarousel";

export default function HomePage() {
  return (
    <div className={homepage.mainHomepageContainer}>
      <MenuCardCarousel />
      <br/><br/>
      <PrevOrderCarousel />
    </div>
  );
}
